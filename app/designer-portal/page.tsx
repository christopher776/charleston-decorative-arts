import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Designer Portal | Trade Registration",
  description:
    "Register for trade access: project consultation, specification assistance, sample requests, installation scheduling, continuing education, and project photography.",
};

export default function DesignerPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Designer Portal"
        title="Trade Registration"
        subtitle="Register your firm for trade pricing, sample access, and priority scheduling across every luxury brand we install."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
