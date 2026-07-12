import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Charleston School of Decorative Arts | Certification & Apprenticeships",
  description:
    "Professional certification, historic installation training, luxury installation training, mural installation, surface preparation, apprenticeships, and continuing education.",
};

const PROGRAMS = [
  { title: "Professional Certification", desc: "A comprehensive credential covering installation standards across luxury and historic wallcoverings." },
  { title: "Historic Installation", desc: "Conservation-grade techniques for period-appropriate materials and historic substrates." },
  { title: "Luxury Installation", desc: "Precision pattern-matching and handling standards for the world's finest wallcovering houses." },
  { title: "Mural Installation", desc: "Hand-painted and large-format mural hanging technique, from layout to final seam." },
  { title: "Surface Preparation", desc: "Moisture analysis, substrate remediation, and lining paper application." },
  { title: "Apprenticeships", desc: "Multi-year, guild-modeled apprenticeships pairing trainees with master installers." },
  { title: "Continuing Education", desc: "Ongoing technical education for working installers and design professionals." },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Charleston School of Decorative Arts"
        subtitle="We train the next generation of guild-level installers and muralists, preserving a centuries-old craft for the Southeast's luxury and historic markets."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-96 w-full overflow-hidden">
            <Image src={IMG.education} alt="Instructor teaching apprentices mural technique" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-1 gap-5">
            {PROGRAMS.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-lg text-[#3d2b1f]">{p.title}</h3>
                <p className="text-sm text-[#5a4632]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f3ead9] px-6 py-16 text-center">
        <h2 className="mb-4 font-serif text-2xl text-[#3d2b1f]">Enroll or Request Information</h2>
        <Button asChild className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
          <Link href="/contact">Contact the School</Link>
        </Button>
      </section>
    </>
  );
}
