import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl tracking-tight">
          15530253 Canada Association
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#collection"
            className="text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-ink"
          >
            All Books
          </Link>
          <Link
            href="/about"
            className="text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-ink"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
