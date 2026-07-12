import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, SITE, SERVICES } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `Luxury Wallcoverings & Historic Restoration in ${loc.name} | ${SITE.name}`,
    description: `Charleston Decorative Arts provides luxury wallcovering installation, historic restoration, and custom murals in ${loc.name}, ${loc.region} — serving ${loc.blurb}.`,
  };
}

export default async function ServiceAreaPage({ params }: { params: Params }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Service Areas", url: `${SITE.url}/service-areas` },
          { name: loc.name, url: `${SITE.url}/service-areas/${loc.slug}` },
        ]}
      />
      <PageHero
        eyebrow={loc.region}
        title={`Luxury Decorative Arts in ${loc.name}`}
        subtitle={`Serving ${loc.blurb}.`}
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-base leading-relaxed text-[#3d2b1f]">
            Charleston Decorative Arts provides luxury wallcovering installation, historic
            restoration, custom murals, and decorative finishes throughout {loc.name} and the
            surrounding {loc.region} market. Our studio serves {loc.blurb}, working directly with
            homeowners, interior designers, architects, and builders on projects ranging from a
            single feature-wall mural to a full-house historic restoration.
          </p>
          <p className="text-base leading-relaxed text-[#3d2b1f]">
            Every project in {loc.name} begins with a site-specific moisture and substrate
            assessment, accounting for the Lowcountry&rsquo;s humidity and, where applicable, the
            preservation requirements of the property.
          </p>
        </div>
      </section>
      <section className="bg-[#f3ead9] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 font-serif text-2xl text-[#3d2b1f]">Services Available in {loc.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="border-b border-[#c9a959] pb-1 text-sm text-[#5a4632] hover:text-[#8a6d1d]"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
