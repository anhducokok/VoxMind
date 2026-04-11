import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Mic, MicOff, ArrowLeft } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { getBookBySlug } from '@/lib/actions/book.actions';

interface BookPageProps {
    params: {
        slug: string;
    };
}

export default async function BookPage({ params }: BookPageProps) {
    // Require authentication
    const { userId } = await auth();
    if (!userId) {
        redirect('/');
    }

    // Unwrap params promise (Next.js 16 breaking change)
    const { slug } = await params;

    // Fetch book data
    const result = await getBookBySlug(slug);

    if (!result.success || !result.data) {
        redirect('/');
    }

    const book = result.data;

    return (
        <div className="book-page-container">
            {/* Floating Back Button */}
            <Link
                href="/"
                className="back-btn-floating"
                aria-label="Go back to library"
            >
                <ArrowLeft size={24} className="text-gray-700" />
            </Link>

            {/* Main Content */}
            <div className="mx-auto max-w-4xl space-y-8 px-6">
                {/* Header Card */}
                <div className="vapi-header-card">
                    <div className="flex gap-8">
                        {/* Left: Cover Image with Mic Button */}
                        <div className="vapi-cover-wrapper">
                            <div className="relative w-[120px] h-[160px] rounded-lg overflow-hidden shadow-md">
                                {book.coverURL ? (
                                    <Image
                                        src={book.coverURL}
                                        alt={`${book.title} cover`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">No cover</span>
                                    </div>
                                )}
                            </div>

                            {/* Circular Mic Button - Overlapping Bottom Right */}
                            <div className="vapi-mic-wrapper">
                                <button
                                    className="vapi-mic-btn"
                                    aria-label="Start recording"
                                >
                                    <MicOff size={24} className="text-gray-700" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Book Info */}
                        <div className="flex flex-col justify-between flex-1">
                            {/* Title and Author */}
                            <div>
                                <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2">
                                    {book.title}
                                </h1>
                                <p className="text-lg text-gray-600 mb-6">by {book.author}</p>
                            </div>

                            {/* Badge Row */}
                            <div className="flex gap-3 flex-wrap items-center">
                                {/* Status Badge */}
                                <div className="vapi-status-indicator">
                                    <span className="vapi-status-dot vapi-status-dot-ready"></span>
                                    <span className="vapi-status-text">Ready</span>
                                </div>

                                {/* Voice Badge */}
                                <div className="vapi-status-indicator">
                                    <span className="vapi-status-text font-normal">
                                        Voice: {book.persona || 'Standard'}
                                    </span>
                                </div>

                                {/* Timer Badge */}
                                <div className="vapi-status-indicator">
                                    <span className="vapi-status-text font-normal">
                                        0:00/15:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transcript Area */}
                <div className="transcript-container">
                    <div className="transcript-empty">
                        <Mic size={48} className="text-gray-400 mb-4" />
                        <p className="transcript-empty-text">No conversation yet</p>
                        <p className="transcript-empty-hint">
                            Click the mic button above to start talking
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
