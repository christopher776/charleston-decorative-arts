import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas | Charleston & the Southeast Luxury Market",
  description:
    "Charleston Decorative Arts serves luxury and historic properties across Charleston, the Battery, Kiawah Island, Mount Pleasant, Savannah, Charlotte, Palm Beach, and beyond.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Regional Expertise Across the Southeast"
        subtitle="From Charleston's historic core to the region's premier coastal and metro luxury markets."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/service-areas/${loc.slug}`}
              className="block border border-[#e4d9c2] bg-white p-6 hover:shadow-lg"
            >
              <h2 className="font-serif text-xl text-[#3d2b1f]">{loc.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#8a6d1d]">{loc.region}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5a4632]">
                Serving {loc.blurb}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
