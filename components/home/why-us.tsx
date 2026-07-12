import { Shield, Users, Award, Briefcase, Star, Globe } from "lucide-react";

const REASONS = [
  { icon: Award, label: "Museum-quality craftsmanship" },
  { icon: Users, label: "Guild-trained installers" },
  { icon: Shield, label: "Historic preservation expertise" },
  { icon: Briefcase, label: "Luxury project management" },
  { icon: Star, label: "White glove service" },
  { icon: Globe, label: "National consulting" },
];

export function WhyUs() {
  return (
    <section className="bg-[#f3ead9] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
          Why Charleston Decorative Arts
        </p>
        <h2 className="mb-14 font-serif text-3xl text-[#3d2b1f] md:text-4xl">
          The Difference Is in the Detail
        </h2>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {REASONS.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a959]">
                <r.icon className="h-6 w-6 text-[#8a6d1d]" />
              </div>
              <p className="text-xs font-medium leading-snug text-[#5a4632]">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
