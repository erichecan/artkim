import Link from "next/link";
import type { Book } from "@/data/books";
import CircleCover from "./CircleCover";

export default function Hero({ book }: { book: Book }) {
  return (
    <section className="border-b border-line bg-canvas-alt">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-[1fr_auto] md:items-center md:gap-16 md:py-24">
        <div className="order-2 md:order-1">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
            New this season
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] italic sm:text-5xl md:text-6xl">
            {book.title}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink-soft">
            {book.author}
          </p>
          <p className="mt-6 max-w-md font-display text-lg leading-relaxed text-ink/90">
            {book.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/books/${book.slug}`}
              className="inline-flex items-center rounded-sm bg-accent px-6 py-3 text-sm uppercase tracking-[0.12em] text-accent-ink transition-colors hover:bg-accent/90"
            >
              Read more
            </Link>
            <span className="text-sm text-ink-soft">
              {book.priceCAD !== null ? `$${book.priceCAD.toFixed(2)} CAD` : "Price TBD"}
            </span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <CircleCover book={book} size="hero" />
        </div>
      </div>
    </section>
  );
}
