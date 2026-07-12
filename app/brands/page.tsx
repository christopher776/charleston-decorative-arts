import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BRANDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury Wallcovering Brands We Install",
  description:
    "Installation guides and standards for de Gournay, Gracie, Schumacher, Phillip Jeffries, Arte, Cole & Son, Morris & Co., Élitis, Zuber, Pierre Frey, Kravet, York, Thibaut, Farrow & Ball, and Zoffany.",
};

export default function BrandsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Luxury Brands"
        title="Installation Authority for the World's Finest Wallcovering Houses"
        subtitle="Each brand page is a detailed installation resource for designers, architects, and homeowners."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="block border border-[#e4d9c2] bg-white p-6 hover:shadow-lg"
            >
              <h2 className="font-serif text-xl text-[#3d2b1f]">{b.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5a4632]">{b.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
