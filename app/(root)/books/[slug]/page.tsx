import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { getBookBySlug } from '@/lib/actions/book.actions';
import VapiControls from '@/components/VapiControl';

interface BookPageProps {
    params: {
        slug: string;
    };
}

export default async function BookPage({ params }: BookPageProps) {
    const { userId } = await auth();
    if (!userId) {
        redirect('/');
    }

    const { slug } = await params;

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
                <VapiControls book={book} />
            </div>
        </div>
    );
}
