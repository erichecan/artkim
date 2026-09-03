import { books, getFeaturedBook } from "@/data/books";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const featured = getFeaturedBook();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero book={featured} />
        <section id="collection" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl italic sm:text-3xl">
            The Collection
          </h2>
          <p className="mt-2 max-w-md text-sm text-ink-soft">
            Books published by 15530253 Canada Association — art, design,
            wellness, children&apos;s stories, and sustainable living.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
