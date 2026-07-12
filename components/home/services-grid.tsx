import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { IMG } from "@/lib/images";

const IMAGE_MAP: Record<string, string> = {
  wallcoverings: IMG.wallcoverings,
  restoration: IMG.restoration,
  murals: IMG.murals,
  finishes: IMG.finishes,
};

export function ServicesGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            Services
          </p>
          <h2 className="font-serif text-3xl text-[#3d2b1f] md:text-4xl">
            Museum-Quality Craft, Applied to Every Surface
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group block overflow-hidden border border-[#e4d9c2] bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={IMAGE_MAP[s.image]}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-[#3d2b1f]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a4632]">
                  {s.description}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#8a6d1d]">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
