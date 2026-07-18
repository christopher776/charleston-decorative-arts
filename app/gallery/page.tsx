import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery | Luxury Homes, Historic Restorations & Murals",
  description:
    "A portfolio of luxury home, historic home, mural, commercial, and hospitality installations by Charleston Decorative Arts.",
};

const GALLERY = [
  {
    title: "377 King Street — Fine & Dandy Mural, Charleston",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/1ccae5e9-4fd5-4e8c-96dd-90c1907528c8.jpg",
    cat: "Featured Project · Murals",
    href: "/journal/fine-and-dandy-mural-king-street-charleston",
  },
  {
    title: "Chit Chat Diner — West Orange, N.J.",
    image: "https://www.chitchatdiner.com/images/galleries/west-orange/big7.jpg",
    cat: "Featured Project · Commercial",
    href: "/journal/chit-chat-diner-fine-dandy-wallcovering-installation",
  },
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
          {GALLERY.map((g) => {
            const tile = (
              <div className="group relative h-72 overflow-hidden">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  unoptimized={g.image.includes("chitchatdiner.com")}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d13]/75 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-widest text-[#e8cf8f]">{g.cat}</p>
                  <p className="font-serif text-lg leading-snug text-[#fbf6ec]">{g.title}</p>
                </div>
              </div>
            );
            return "href" in g && g.href ? (
              <Link key={g.title} href={g.href}>
                {tile}
              </Link>
            ) : (
              <div key={g.title}>{tile}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
