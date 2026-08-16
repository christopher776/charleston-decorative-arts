import Image from "next/image";
import Link from "next/link";
import { BRANDS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SCHUMACHER_PRODUCTS } from "@/lib/schumacher-products";

export function BrandsStrip() {
  const featured = SCHUMACHER_PRODUCTS[0];

  return (
    <section className="border-b border-[#e4d9c2] bg-[#f3ead9] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e4d9c2]">
            <Image
              src={featured.image!}
              alt="Chiang Mai Dragon wallpaper by Schumacher available through Charleston Decorative Arts"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
              Featured Wallpaper Showroom
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#3d2b1f] md:text-5xl">
              Shop Schumacher Through Charleston Decorative Arts
            </h2>
            <p className="mt-5 leading-relaxed text-[#5a4632]">
              Explore iconic Schumacher wallpaper and fabric selected for Charleston&rsquo;s historic, coastal and collected interiors. We coordinate memos, current availability, pattern repeats, quantities, the best available project pricing and professional installation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
                <Link href="/schumacher">Explore Schumacher</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-[#8a6d1d] bg-transparent px-7 py-5 text-xs uppercase tracking-widest text-[#8a6d1d] hover:bg-[#8a6d1d] hover:text-[#fbf6ec]">
                <Link href="/contact?schumacher=Curated%20Schumacher%20collection">Request Pricing or a Memo</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[#d8c9ae] pt-10 text-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            Additional Luxury Wallcovering Houses We Install
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
          {BRANDS.filter((b) => b.slug !== "schumacher").slice(0, 12).map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="border-b border-[#d8c9ae] pb-3 font-serif text-base text-[#5a4632] transition-colors hover:text-[#8a6d1d]"
            >
              {b.name}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
