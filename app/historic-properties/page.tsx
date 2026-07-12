import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/images";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Historic Properties | Homes, Churches, Museums & National Register Sites",
  description:
    "Historic preservation services for historic homes, National Register properties, church restoration, government buildings, museums, libraries, universities, and plantations.",
};

const CATEGORIES = [
  "Historic Homes",
  "National Register Properties",
  "Church Restoration",
  "Government Buildings",
  "Museums",
  "Libraries",
  "Universities",
  "Plantations",
];

export default function HistoricPropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Historic Properties"
        title="Stewardship for the Southeast's Landmark Interiors"
        subtitle="From single-family historic homes to National Register landmarks, museums, and university halls, we bring museum-standard preservation to every project."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-96 w-full overflow-hidden">
            <Image src={IMG.church} alt="Historic church nave restored by Charleston Decorative Arts" fill className="object-cover" />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-2xl text-[#3d2b1f]">Property Types We Serve</h2>
            <ul className="grid grid-cols-2 gap-3 text-sm text-[#5a4632]">
              {CATEGORIES.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a959]" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#f3ead9] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 font-serif text-3xl text-[#3d2b1f]">Service Areas</h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm text-[#5a4632]">
            Regional expertise across Charleston&rsquo;s historic neighborhoods and the wider Southeast luxury market.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="border-b border-[#c9a959] pb-2 text-sm text-[#5a4632] hover:text-[#8a6d1d]"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
