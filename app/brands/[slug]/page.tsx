import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, SITE } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) return {};
  return {
    title: `${brand.name} Installation | Charleston Decorative Arts`,
    description: `Guild-trained ${brand.name} installation across the Southeast. ${brand.blurb}`,
  };
}

export default async function BrandPage({ params }: { params: Params }) {
  const { slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) notFound();

  const others = BRANDS.filter((b) => b.slug !== brand.slug).slice(0, 6);

  return (
    <>
      <ServiceJsonLd
        name={`${brand.name} Installation`}
        description={`Professional installation of ${brand.name} wallcoverings, specializing in ${brand.specialty}.`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Luxury Brands", url: `${SITE.url}/brands` },
          { name: brand.name, url: `${SITE.url}/brands/${brand.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Luxury Brand Installation"
        title={`${brand.name} Installation`}
        subtitle={brand.blurb}
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-base leading-relaxed text-[#3d2b1f]">
            Charleston Decorative Arts is a guild-trained installation partner for {brand.name},
            specializing in {brand.specialty}. Every {brand.name} project begins with a documented
            site assessment, moisture analysis, and precise laser layout — because material this
            considered deserves an installation process equally exacting.
          </p>
          <p className="mb-5 text-base leading-relaxed text-[#3d2b1f]">
            Whether the application is a historic Charleston interior, a luxury new-construction
            residence, or a commercial or hospitality space, our installers follow {brand.name}&rsquo;s
            own hanging specifications alongside our internal museum-quality standards, ensuring
            pattern continuity, correct adhesive selection, and long-term material performance.
          </p>
          <p className="text-base leading-relaxed text-[#3d2b1f]">
            Interior designers and architects specifying {brand.name} can request current sample
            books, yardage estimates, and installation scheduling through our{" "}
            <Link href="/designer-portal" className="text-[#8a6d1d] underline">
              designer portal
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="bg-[#f3ead9] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 font-serif text-2xl text-[#3d2b1f]">Other Brands We Install</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="border-b border-[#c9a959] pb-1 text-sm text-[#5a4632] hover:text-[#8a6d1d]"
              >
                {b.name}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
