import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    name: "45 Tradd Street — Three-Story Historic Stair Hall",
    image: "/images/journal/45-tradd-street/three-story-stairway-hero.webp",
    href: "/journal/45-tradd-street-historic-charleston-wallpaper-installation",
    badge: "New Story",
  },
  {
    name: "College of Charleston — Tri Delta House",
    image: "/images/journal/tri-delta-charleston/finished-grasscloth-floral-ceiling.jpg",
    href: "/journal/tri-delta-charleston-grasscloth-ceiling-wallpaper-installation",
    badge: "Featured Project",
  },
  {
    name: "King Street — Fine & Dandy Mural",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/1ccae5e9-4fd5-4e8c-96dd-90c1907528c8.jpg",
    href: "/journal/fine-and-dandy-mural-king-street-charleston",
    badge: "Featured Project",
  },
  {
    name: "Chit Chat Diner, West Orange, N.J.",
    image: "https://www.chitchatdiner.com/images/galleries/west-orange/big7.jpg",
    href: "/journal/chit-chat-diner-fine-dandy-wallcovering-installation",
    badge: "Featured Project",
  },
];

export function FeaturedProjects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            Installation Portfolio
          </p>
          <h2 className="font-serif text-3xl text-[#3d2b1f] md:text-4xl">
            See the Planning and Precision Behind the Finished Room
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#5a4632]">
            Explore documented wallpaper and mural installations in historic homes, designer interiors and commercial spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => {
            const card = (
              <div className="group relative h-72 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} luxury interior project by Charleston Decorative Arts`}
                  fill
                  unoptimized={p.image.includes("chitchatdiner.com")}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d13]/70 to-transparent" />
                {"badge" in p && p.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#c9a959] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#2a1d13]">
                    {p.badge}
                  </span>
                )}
                <p className="absolute bottom-4 left-4 right-4 font-serif text-lg leading-snug text-[#fbf6ec]">
                  {p.name}
                </p>
              </div>
            );
            return "href" in p && p.href ? (
              <Link key={p.name} href={p.href}>
                {card}
              </Link>
            ) : (
              <div key={p.name}>{card}</div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/gallery" className="border border-[#8a6d1d] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-[#8a6d1d] hover:bg-[#8a6d1d] hover:text-[#fbf6ec]">
            View All Project Stories
          </Link>
          <Link href="/contact?project=wallpaper-installation" className="bg-[#8a6d1d] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
            Request an Installation Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
