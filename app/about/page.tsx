import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About | Our Mission, History & Craftsmanship",
  description:
    "Charleston Decorative Arts is the Southeast's premier decorative arts studio — our mission, history, craftsmanship, education, community, and partnerships.",
};

const SECTIONS = [
  { title: "Mission", body: "To preserve the Southeast's historic architectural heritage while elevating its finest interiors through museum-quality wallcovering, mural, and decorative finish craftsmanship." },
  { title: "History", body: "Founded by a team of guild-trained installers and conservators, Charleston Decorative Arts grew from historic restoration work in the Lowcountry into a regional authority on luxury decorative arts." },
  { title: "Craftsmanship", body: "Every installer in our studio is trained to museum standards, from moisture analysis and laser layout to conservation-grade repair and hand-painted mural technique." },
  { title: "Education", body: "Through the Charleston School of Decorative Arts, we train the next generation of installers and muralists, ensuring this craft endures." },
  { title: "Community", body: "We partner with historic preservation organizations, museums, and civic institutions across the Southeast to protect the region's architectural legacy." },
  { title: "Awards & Partnerships", body: "Recognized by luxury builders, architecture firms, and preservation organizations as a trusted partner on the region's most significant residential and institutional projects." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Guardians of a Centuries-Old Craft"
        subtitle="Charleston Decorative Arts brings museum-quality standards to every luxury and historic interior we touch."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 font-serif text-2xl text-[#3d2b1f]">{s.title}</h2>
              <p className="text-sm leading-relaxed text-[#5a4632]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
