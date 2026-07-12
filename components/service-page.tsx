import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ServiceJsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  intro: string[];
  points: string[];
}

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  intro,
  points,
}: ServicePageProps) {
  return (
    <>
      <ServiceJsonLd name={title} description={subtitle} />
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-96 w-full overflow-hidden">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
          <div>
            {intro.map((p, i) => (
              <p key={i} className="mb-4 text-sm leading-relaxed text-[#5a4632]">
                {p}
              </p>
            ))}
            <ul className="mt-6 space-y-2">
              {points.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm text-[#3d2b1f]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a959]" /> {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t border-[#e4d9c2] bg-[#f3ead9] px-6 py-16 text-center">
        <h2 className="mb-4 font-serif text-2xl text-[#3d2b1f] md:text-3xl">
          Discuss Your Project With Our Studio
        </h2>
        <Button
          asChild
          className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]"
        >
          <Link href="/contact">Schedule Consultation</Link>
        </Button>
      </section>
    </>
  );
}
