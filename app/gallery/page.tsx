import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery | Luxury Homes, Historic Restorations & Murals",
  description:
    "A portfolio of luxury home, historic home, mural, commercial, and hospitality installations by Charleston Decorative Arts.",
};

const GALLERY = [
  { title: "Battery Mansion Foyer Mural", image: IMG.battery, cat: "Historic Homes" },
  { title: "South of Broad Courtyard Wallcovering", image: IMG.southOfBroad, cat: "Luxury Homes" },
  { title: "Kiawah Island Great Room", image: IMG.kiawah, cat: "Luxury Homes" },
  { title: "Historic Church Restoration", image: IMG.church, cat: "Commercial" },
  { title: "Hand-Painted Feature Wall", image: IMG.murals, cat: "Murals" },
  { title: "Showroom Wallcovering Installation", image: IMG.wallcoverings, cat: "Commercial" },
  { title: "Venetian Plaster Detail", image: IMG.finishes, cat: "Murals" },
  { title: "Historic Wallpaper Conservation", image: IMG.restoration, cat: "Historic Homes" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Portfolio of Extraordinary Interiors"
        subtitle="Luxury homes, historic homes, murals, commercial, and hospitality — a selection of our completed work."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <div key={g.title} className="group relative h-72 overflow-hidden">
              <Image src={g.image} alt={g.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d13]/75 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] uppercase tracking-widest text-[#e8cf8f]">{g.cat}</p>
                <p className="font-serif text-lg text-[#fbf6ec]">{g.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
