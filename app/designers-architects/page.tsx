import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { BRANDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Designers & Architects | Trade Resources & Specification Support",
  description:
    "Trade registration, project consultation, specification assistance, sample requests, installation scheduling, and continuing education for interior designers and architects.",
};

const OFFERINGS = [
  { title: "Trade Registration", desc: "Register your firm for trade pricing, sample access, and priority scheduling." },
  { title: "Project Consultation", desc: "A single point of contact across every luxury wallcovering house we install." },
  { title: "Specification Assistance", desc: "Yardage estimates, substrate review, and installation sequencing support." },
  { title: "Sample Requests", desc: "Current sample libraries from 15+ luxury wallcovering manufacturers." },
  { title: "Installation Scheduling", desc: "Coordinated scheduling around your broader renovation or build timeline." },
  { title: "Continuing Education", desc: "Ongoing technical education for design teams on installation standards." },
  { title: "Project Photography", desc: "Professional documentation of completed installations for your portfolio." },
];

export default function DesignersArchitectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Designers & Architects"
        title="A Trade Partner Built for Luxury Specification"
        subtitle="Specification support, sample access, and white-glove project management for interior designers and architects across the Southeast."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o) => (
            <div key={o.title} className="border border-[#e4d9c2] bg-white p-6">
              <h3 className="mb-2 font-serif text-xl text-[#3d2b1f]">{o.title}</h3>
              <p className="text-sm leading-relaxed text-[#5a4632]">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f3ead9] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 font-serif text-3xl text-[#3d2b1f]">
            Specification Resources by Brand
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm text-[#5a4632]">
            Installation guides and standards for every luxury house in our trade network.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="border-b border-[#c9a959] pb-2 text-sm text-[#5a4632] hover:text-[#8a6d1d]"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-16 text-center">
        <Button asChild className="rounded-none bg-[#8a6d1d] px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
          <Link href="/designer-portal">Register for Trade Access</Link>
        </Button>
      </section>
    </>
  );
}
