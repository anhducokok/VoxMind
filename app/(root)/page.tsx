import React from "react";
import { LibraryHero } from "@/components/LibraryHero";
import { sampleBooks } from "@/lib/constants";
import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/actions/book.actions";

const Page = async () => {
  const bookResult = await getAllBooks();
  const books = bookResult.success ? bookResult.data ?? [] : [];

  return (
    <main className="w-full bg-[#fafaf8] pt-[var(--navbar-height)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 md:py-12">
          <LibraryHero />
        </div>
        <div className="pb-16 sm:pb-20 md:pb-24">
          <div className="library-books-grid">
            {books.map((book) => (
              <BookCard
                key={book._id}
                title={book.title}
                author={book.author}
                coverURL={book.coverURL}
                slug={book.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;