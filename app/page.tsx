"use client";

import React from "react";
import { LibraryHero } from "@/components/LibraryHero";
import { sampleBooks } from "@/lib/constants";
import BookCard from "@/components/BookCard";

export default function Page() {
  return (
    <main className="wrapper container flex min-h-screen flex-col">
      <LibraryHero />
      <div className="library-hero-grid">
        {sampleBooks.map((book) => (
          <BookCard
            key={book._id}
            title={book.title}
            author={book.author}
            coverURL={book.coverURL}
            slug={book.slug}
          />
        ))}
      </div>
    </main>
  );
}
