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
        className="rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-[0_4px_6px_rgba(0,0,0,0.07)]"
        style={{ backgroundColor: "#F5E6CC" }}
      >
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 xl:gap-16">
            {/* Left: heading, copy, CTA */}
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <div>
                <h1
                  id="library-hero-heading"
                  className="font-serif text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl md:text-5xl"
                >
                  Your Library
                </h1>
              </div>
              <p className="font-sans text-lg leading-relaxed text-[#3d3d3d] max-w-xl">
                Convert your books into interactive AI conversations. Listen,
                learn, and discuss your favorite reads.
              </p>
              <div>
                <Link
                  href="/books/new"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-serif text-base font-semibold text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] transition hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                >
                  <Plus className="size-5 stroke-[2.5]" aria-hidden />
                  Add new book
                </Link>
              </div>
            </div>

            {/* Center/Right: illustration + steps */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
              {/* Illustration */}
              <div className="flex flex-1 items-center justify-center lg:min-h-[280px]">
                <div className="relative aspect-[4/3] w-full max-w-sm">
                  <Image
                    src={heroIllustration}
                    alt=""
                    className="h-full w-full object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Steps card */}
              <div className="w-full lg:w-80 lg:shrink-0">
                <div className="rounded-2xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full">
                  <ul className="flex flex-col gap-6">
                    {steps.map(({ n, title, subtitle }) => (
                      <li key={n} className="flex gap-4">
                        <span
                          className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1a1a1a] font-sans text-sm font-bold text-[#1a1a1a]"
                          aria-hidden
                        >
                          {n}
                        </span>
                        <div className="min-w-0 pt-0.5">
                          <p className="font-sans text-base font-semibold text-[#1a1a1a]">
                            {title}
                          </p>
                          <p className="mt-1 font-sans text-sm text-[#5c5c5c]">
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
        </div>
      </div>
    </section>
  );
}
