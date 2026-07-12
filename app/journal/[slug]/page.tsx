import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, SITE } from "@/lib/data";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  ).slice(0, 3);

  return (
    <>
      <ArticleJsonLd title={article.title} description={article.excerpt} slug={article.slug} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Journal", url: `${SITE.url}/journal` },
          { name: article.title, url: `${SITE.url}/journal/${article.slug}` },
        ]}
      />
      <PageHero eyebrow={article.category} title={article.title} subtitle={article.excerpt} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        {article.body.map((p, i) => (
          <p key={i} className="mb-5 text-base leading-relaxed text-[#3d2b1f]">
            {p}
          </p>
        ))}
        <div className="mt-12 border-t border-[#e4d9c2] pt-8 text-center">
          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-widest text-[#8a6d1d]"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </article>
      {related.length > 0 && (
        <section className="border-t border-[#e4d9c2] bg-[#f3ead9] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-serif text-2xl text-[#3d2b1f]">
              Related Reading
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/journal/${r.slug}`}
                  className="block border border-[#e4d9c2] bg-white p-5 hover:shadow-md"
                >
                  <h3 className="font-serif text-base text-[#3d2b1f]">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
