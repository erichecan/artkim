import Image from "next/image";
import type { Book } from "@/data/books";

const SIZE_CLASSES = {
  hero: "w-56 sm:w-72 md:w-80",
  card: "w-36 sm:w-44",
} as const;

const IMAGE_SIZES = {
  hero: "(min-width: 768px) 320px, (min-width: 640px) 288px, 224px",
  card: "(min-width: 640px) 176px, 144px",
} as const;

export default function CircleCover({
  book,
  size = "card",
}: {
  book: Book;
  size?: keyof typeof SIZE_CLASSES;
}) {
  return (
    <div className={`relative mx-auto ${SIZE_CLASSES[size]}`}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-circle" />
      <div
        className="relative mx-auto aspect-[2/3] w-4/5 overflow-hidden rounded-[3px] border border-black/10 shadow-[0_18px_30px_-18px_rgba(34,29,22,0.45)]"
        style={{ backgroundColor: book.coverTint }}
      >
        <Image
          src={book.coverImage}
          alt={`${book.title} cover`}
          fill
          sizes={IMAGE_SIZES[size]}
          className="object-cover"
          priority={size === "hero"}
        />
      </div>
    </div>
  );
}
