import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, getBookBySlug } from "@/data/books";
import CircleCover from "@/components/CircleCover";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  return {
    title: `${book.title} — 15530253 Canada Association`,
    description: book.tagline,
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-ink"
          >
            ← All Books
          </Link>

          <div className="mt-10 grid gap-12 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-16">
            <CircleCover book={book} size="hero" />

            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
                {book.genre}
              </p>
              <h1 className="mt-3 font-display text-3xl italic leading-tight sm:text-4xl">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="mt-1 max-w-lg font-display text-base italic text-ink-soft">
                  {book.subtitle}
                </p>
              )}
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-ink-soft">
                {book.author}
              </p>

              <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink/90">
                {book.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {book.authorBio && (
                <p className="mt-4 max-w-lg text-sm italic text-ink-soft">
                  {book.authorBio}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-5">
                {book.priceCAD !== null ? (
                  <a
                    href={book.paymentLink}
                    className="inline-flex items-center rounded-sm bg-accent px-7 py-3 text-sm uppercase tracking-[0.12em] text-accent-ink transition-colors hover:bg-accent/90"
                  >
                    Buy the book
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center rounded-sm bg-ink/10 px-7 py-3 text-sm uppercase tracking-[0.12em] text-ink-soft"
                  >
                    Coming Soon
                  </span>
                )}
                <span className="font-display text-lg">
                  {book.priceCAD !== null ? `$${book.priceCAD.toFixed(2)} CAD` : "Price TBD"}
                </span>
              </div>
              <p className="mt-3 text-xs text-ink-soft">
                ISBN {book.isbn} · Secure checkout via Stripe. Ships across Canada, Asia, Europe, the United States, and worldwide.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
