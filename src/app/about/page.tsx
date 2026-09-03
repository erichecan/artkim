import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About — 15530253 Canada Association",
  description:
    "A non-profit publisher of books, art, and educational content for women, children, artists, and creative communities.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
            About Us
          </p>
          <h1 className="mt-3 font-display text-3xl italic leading-tight sm:text-4xl">
            15530253 Canada Association
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/90">
            <p>
              15530253 Canada Association is a non-profit publishing
              organization engaged in the development, publication,
              promotion, and distribution of educational, cultural, artistic,
              literary, and informational content in both print and digital
              formats. The Association primarily serves women, children,
              artists, and creative communities through the publication of
              books, magazines, educational materials, children&apos;s books,
              art publications, biographies, creative guides, fiction,
              e-books, audiobooks, digital publications, and related media.
            </p>
            <p>
              Its publishing activities include content related to personal
              development, wellness, career development and entrepreneurship,
              parenting, lifestyle, literature, children&apos;s education,
              visual arts, art history, creative practice, and professional
              development for artists. The Association may also develop and
              distribute digital content, online publications, educational
              resources, tutorial materials, and other related cultural and
              creative media.
            </p>
            <p>
              The overall purpose of 15530253 Canada Association is to
              promote education, literacy, creativity, artistic expression,
              lifelong learning, cultural awareness, and personal and
              professional development through book publishing, digital
              publishing, and related activities. All activities are carried
              out in furtherance of the Association&apos;s non-profit
              objectives and to support educational, cultural, artistic, and
              community-focused initiatives.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
