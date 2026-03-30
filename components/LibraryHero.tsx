"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import heroIllustration from "@/assets/hero-illustration.png";

const steps = [
  { n: 1, title: "Upload PDF", subtitle: "Add your book file" },
  { n: 2, title: "AI Processing", subtitle: "We analyze the content" },
  { n: 3, title: "Voice Chat", subtitle: "Discuss with AI" },
] as const;

export function LibraryHero() {
  return (
    <section className="w-full" aria-labelledby="library-hero-heading">
      <div
        className="rounded-[1.5rem] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 shadow-[var(--shadow-soft)]"
        style={{ backgroundColor: "#F5E6CC" }}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-12">
          {/* Left: heading, copy, CTA */}
          <div className="flex min-w-0 flex-1 flex-col gap-4 lg:max-w-[min(100%,22rem)]">
            <h1
              id="library-hero-heading"
              className="font-serif text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-[2rem] md:text-[2.125rem]"
            >
              Your Library
            </h1>
            <p className="font-sans text-[0.9375rem] leading-relaxed text-[#3d3d3d] sm:text-base">
              Convert your books into interactive AI conversations. Listen,
              learn, and discuss your favorite reads.
            </p>
            <div>
              <Link
                href="/books/new"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-serif text-base font-semibold text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] transition hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
              >
                <Plus className="size-5 stroke-[2.5]" aria-hidden />
                Add new book
              </Link>
            </div>
          </div>

          {/* Center: illustration */}
          <div className="relative flex flex-1 items-center justify-center lg:min-h-[220px] lg:flex-[1.15]">
            <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-none">
              <Image
                src={heroIllustration}
                alt=""
                className="h-full w-full object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 38vw"
                priority
              />
            </div>
          </div>

          {/* Right: steps card */}
          <div className="w-full shrink-0 lg:w-[min(100%,17.5rem)]">
            <div className="rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <ul className="flex flex-col gap-5">
                {steps.map(({ n, title, subtitle }) => (
                  <li key={n} className="flex gap-3">
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#1a1a1a] font-sans text-sm font-semibold text-[#1a1a1a]"
                      aria-hidden
                    >
                      {n}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-sans text-[0.9375rem] font-semibold text-[#1a1a1a]">
                        {title}
                      </p>
                      <p className="mt-0.5 font-sans text-sm text-[#5c5c5c]">
                        {subtitle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
