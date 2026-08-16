import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Installation Portfolio | Wallpaper, Historic Interiors & Murals",
  description:
    "Explore documented wallpaper, historic interior, mural and commercial installations by Charleston Decorative Arts, then request a project quote.",
};

const GALLERY = [
  {
    title: "45 Tradd Street — Three-Story Stair Hall & Bathroom",
    image: "/images/journal/45-tradd-street/three-story-stairway-hero.webp",
    cat: "Featured Project · South of Broad",
    href: "/journal/45-tradd-street-historic-charleston-wallpaper-installation",
  },
  {
    title: "Tri Delta House — Grasscloth & Ceiling Wallpaper, Charleston",
    image: "/images/journal/tri-delta-charleston/finished-grasscloth-floral-ceiling.jpg",
    cat: "Featured Project · Historic Interiors",
    href: "/journal/tri-delta-charleston-grasscloth-ceiling-wallpaper-installation",
  },
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
        eyebrow="Installation Portfolio"
        title="Real Projects. Documented Craftsmanship."
        subtitle="Explore completed wallpaper and mural installations, see how difficult spaces are planned, and find the right approach for your project."
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
                  {"href" in g && g.href ? (
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[#e8cf8f]">Read Project Story →</p>
                  ) : null}
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
      <section className="bg-[#3d2b1f] px-6 py-16 text-center text-[#fbf6ec]">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9bd73]">Planning a Wallpaper Project?</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Protect the Material. Preserve the Design Intent.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#eadfce]">Send us the room dimensions, wallcovering information and project location. We will review the installation requirements and prepare a quote.</p>
          <Link href="/contact?project=wallpaper-installation" className="mt-8 inline-block bg-[#c9a959] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#2a1d13] hover:bg-[#dbc47f]">
            Request an Installation Quote
          </Link>
        </div>
      </section>
    </>
  );
}
