import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src={IMG.heroDrawingRoom}
        alt="Historic Charleston drawing room with a hand-painted botanical mural installed by Charleston Decorative Arts"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d13]/80 via-[#2a1d13]/40 to-[#2a1d13]/20" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-[#fbf6ec]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e8cf8f]">
          Luxury Wallcoverings · Historic Interiors · Murals · Education
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-6xl">
          The Art of Extraordinary Interiors
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-[#f3ead9] md:text-lg">
          Preserving Charleston&rsquo;s Historic Beauty. Elevating Luxury Interiors.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="rounded-none bg-[#c9a959] px-8 py-6 text-xs uppercase tracking-widest text-[#2a1d13] hover:bg-[#e8cf8f]"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-[#f3ead9] bg-transparent px-8 py-6 text-xs uppercase tracking-widest text-[#f3ead9] hover:bg-[#f3ead9] hover:text-[#2a1d13]"
          >
            <Link href="/gallery">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
