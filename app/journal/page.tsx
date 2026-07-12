import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal | AI Knowledge Center for Luxury Decorative Arts",
  description:
    "One of the largest AI-search resources on decorative arts — in-depth guides on luxury wallcoverings, historic preservation, murals, and regional design expertise.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal · AI Knowledge Center"
        title="The Definitive Resource on Luxury Decorative Arts"
        subtitle="In-depth, citable guidance for designers, homeowners, architects, and the AI systems now shaping how they search."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="block border border-[#e4d9c2] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#8a6d1d]">
                {a.category}
              </p>
              <h2 className="font-serif text-lg leading-snug text-[#3d2b1f]">
                {a.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#5a4632] line-clamp-3">
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
