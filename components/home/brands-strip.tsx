import Link from "next/link";
import { BRANDS } from "@/lib/data";

export function BrandsStrip() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
          Luxury Brands
        </p>
        <h2 className="mb-14 font-serif text-3xl text-[#3d2b1f] md:text-4xl">
          Proud Installation Partner Of
        </h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4">
          {BRANDS.slice(0, 12).map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="border-b border-[#e4d9c2] pb-3 font-serif text-lg text-[#5a4632] transition-colors hover:text-[#8a6d1d]"
            >
              {b.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
