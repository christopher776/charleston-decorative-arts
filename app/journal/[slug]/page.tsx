import type { Metadata } from "next";
import Image from "next/image";
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
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/journal/${article.slug}`,
      publishedTime: article.published,
      images: article.images?.[0]
        ? [{ url: article.images[0].src, alt: article.images[0].alt }]
        : undefined,
    },
  };
}

function isExternal(href: string) {
  return href.startsWith("http");
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
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        slug={article.slug}
        image={article.images?.[0]?.src}
        datePublished={article.published}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Journal", url: `${SITE.url}/journal` },
          { name: article.title, url: `${SITE.url}/journal/${article.slug}` },
        ]}
      />
      <PageHero
        eyebrow={article.dateline ? `${article.category} · ${article.dateline}` : article.category}
        title={article.title}
        subtitle={article.excerpt}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        {article.body.map((p, i) => {
          const imagesHere = article.images?.filter((img) => img.afterParagraph === i) ?? [];
          return (
            <div key={i}>
              <p className="mb-5 text-base leading-relaxed text-[#3d2b1f]">{p}</p>
              {imagesHere.map((img, j) => (
                <figure key={j} className="my-8">
                  <div
                    className="relative w-full max-h-[42rem] mx-auto overflow-hidden bg-[#f3ead9]"
                    style={{ aspectRatio: img.aspect }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-xs italic leading-relaxed text-[#5a4632]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          );
        })}

        {article.credits && article.credits.length > 0 && (
          <p className="mt-10 border-t border-[#e4d9c2] pt-6 text-sm italic leading-relaxed text-[#5a4632]">
            {article.credits.map((seg, i) =>
              seg.href ? (
                <Link
                  key={i}
                  href={seg.href}
                  target={isExternal(seg.href) ? "_blank" : undefined}
                  rel={isExternal(seg.href) ? "noopener noreferrer" : undefined}
                  className="not-italic font-semibold text-[#8a6d1d] underline underline-offset-2 hover:text-[#6f5717]"
                >
                  {seg.text}
                </Link>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </p>
        )}

        <div className="mt-12 bg-[#3d2b1f] px-6 py-10 text-center text-[#fbf6ec]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9bd73]">Bring This Level of Craftsmanship to Your Project</p>
          <h2 className="mt-3 font-serif text-2xl">Planning a Wallpaper Installation?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#eadfce]">Share your wallcovering, room dimensions and project location for an installation review and quote.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact?project=wallpaper-installation" className="bg-[#c9a959] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#2a1d13] hover:bg-[#dbc47f]">
              Request Installation Quote
            </Link>
            <Link href="/schumacher" className="border border-[#d9bd73] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#fbf6ec] hover:bg-[#fbf6ec] hover:text-[#3d2b1f]">
              Shop Schumacher Wallpaper
            </Link>
          </div>
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
