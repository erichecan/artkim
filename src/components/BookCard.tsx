import Link from "next/link";
import type { Book } from "@/data/books";
import CircleCover from "./CircleCover";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col items-center gap-4 pt-6 text-center"
    >
      <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <CircleCover book={book} size="card" />
      </div>
      <div>
        <h3 className="font-display text-lg leading-snug">{book.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
          {book.author}
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          {book.priceCAD !== null ? `$${book.priceCAD.toFixed(2)} CAD` : "Price TBD"}
        </p>
      </div>
    </Link>
  );
}
