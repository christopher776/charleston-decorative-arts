import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Commercial | Hotels, Restaurants, Museums & Corporate Interiors",
  description:
    "Luxury and boutique hotels, restaurants, museums, private clubs, luxury retail, medical offices, and corporate headquarters — commercial decorative arts installation.",
};

const TYPES = [
  "Luxury Hotels",
  "Boutique Hotels",
  "Restaurants",
  "Museums",
  "Private Clubs",
  "Luxury Retail",
  "Medical Offices",
  "Corporate Headquarters",
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Decorative Arts for Hospitality & Commercial Interiors"
        subtitle="Museum-quality wallcovering and mural installation for the Southeast's premier commercial and hospitality spaces."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
          {TYPES.map((t) => (
            <div key={t} className="border border-[#e4d9c2] bg-white p-6 text-center">
              <p className="font-serif text-lg text-[#3d2b1f]">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
