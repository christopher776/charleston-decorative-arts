import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

const ITEMS = [
  "Professional Certification",
  "Historic Installation",
  "Luxury Installation",
  "Mural Installation",
  "Surface Preparation",
  "Apprenticeships",
  "Continuing Education",
];

export function EducationSection() {
  return (
    <section className="bg-[#f3ead9] px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            src={IMG.education}
            alt="Charleston School of Decorative Arts instructor teaching mural technique"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            Education
          </p>
          <h2 className="mb-4 font-serif text-3xl text-[#3d2b1f] md:text-4xl">
            Charleston School of Decorative Arts
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[#5a4632]">
            We train the next generation of guild-level installers and muralists,
            ensuring the craft of museum-quality decorative arts endures across
            the Southeast.
          </p>
          <ul className="mb-8 grid grid-cols-1 gap-2 text-sm text-[#5a4632] sm:grid-cols-2">
            {ITEMS.map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a959]" /> {i}
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]"
          >
            <Link href="/education">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
