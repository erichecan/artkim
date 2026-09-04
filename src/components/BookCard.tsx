import Link from "next/link";
import type { Book } from "@/data/books";
import CircleCover from "./CircleCover";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group flex flex-col items-center gap-4 pt-6 text-center">
      <Link href={`/books/${book.slug}`} className="flex flex-col items-center gap-4">
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <CircleCover book={book} size="card" />
        </div>
        <div>
          <h3 className="font-display text-lg leading-snug">{book.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
            {book.author}
          </p>
        </div>
      </Link>

      <p className="text-sm text-ink-soft">
        {book.priceCAD !== null ? `$${book.priceCAD.toFixed(2)} CAD` : "Price TBD"}
      </p>

      {book.priceCAD !== null ? (
        <a
          href={book.paymentLink}
          className="inline-flex items-center rounded-sm bg-accent px-5 py-2 text-xs uppercase tracking-[0.12em] text-accent-ink transition-colors hover:bg-accent/90"
        >
          Buy Now
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex cursor-not-allowed items-center rounded-sm bg-ink/10 px-5 py-2 text-xs uppercase tracking-[0.12em] text-ink-soft"
        >
          Coming Soon
        </span>
      )}
    </div>
  );
}
