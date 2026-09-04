import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/">
          <Image src="/logo.png" alt="15530253 Canada Association logo" width={121} height={90} priority />
        </Link>
        <div className="flex flex-col items-end gap-3">
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
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
              15530253 Canada Association
            </span>
            <a
              href="mailto:15530253ca@gmail.com"
              aria-label="Email"
              className="text-ink-soft hover:text-ink"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-ink-soft hover:text-ink"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
