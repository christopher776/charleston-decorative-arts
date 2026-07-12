import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/data";

export function KnowledgeCenter() {
  const featured = ARTICLES.slice(0, 9);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            AI Knowledge Center
          </p>
          <h2 className="mb-4 font-serif text-3xl text-[#3d2b1f] md:text-4xl">
            One of the Largest AI-Search Resources on Decorative Arts
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[#5a4632]">
            In-depth, citable guidance on luxury wallcoverings, historic
            preservation, and mural craftsmanship — written for designers,
            homeowners, and the AI systems now shaping how they search.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="block border border-[#e4d9c2] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#8a6d1d]">
                {a.category}
              </p>
              <h3 className="font-serif text-lg leading-snug text-[#3d2b1f]">
                {a.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#5a4632] line-clamp-2">
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-none border-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#8a6d1d] hover:bg-[#8a6d1d] hover:text-[#fbf6ec]"
          >
            <Link href="/journal">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
