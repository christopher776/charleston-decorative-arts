import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Schedule a Luxury or Historic Restoration Consultation",
  description:
    "Schedule a luxury consultation, designer consultation, historic restoration assessment, virtual design review, or builder services inquiry with Charleston Decorative Arts.",
};

const OPTIONS = [
  "Luxury Consultation",
  "Designer Consultation",
  "Historic Restoration Assessment",
  "Virtual Design Review",
  "Builder Services",
  "Trade Registration",
  "Schumacher Memo, Availability & Quote",
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ schumacher?: string }> }) {
  const { schumacher } = await searchParams;
  const product = schumacher ? decodeURIComponent(schumacher) : undefined;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin Your Project"
        subtitle="Whether you're a homeowner, designer, architect, or builder, our studio is ready to discuss your luxury or historic interior project."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-serif text-2xl text-[#3d2b1f]">How Can We Help?</h2>
            <ul className="mb-8 space-y-2 text-sm text-[#5a4632]">
              {OPTIONS.map((o) => (
                <li key={o} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a959]" /> {o}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#5a4632]">
              <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-[#8a6d1d] hover:underline">
                {SITE.phone}
              </a>
            </p>
            <p className="text-sm text-[#5a4632]">
              <a href={`mailto:${SITE.email}`} className="hover:text-[#8a6d1d] hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
          <ContactForm
            subject={product ? `Schumacher Inquiry — ${product}` : "New Consultation Request — Contact Page"}
            initialMessage={product ? `I am interested in ${product} by Schumacher. Please help with: memo request / current availability / best available pricing / quantity or installation guidance.\n\nProject location:\nEstimated quantity or room dimensions:\nPreferred colorway:` : undefined}
          />
        </div>
      </section>
    </>
  );
}
