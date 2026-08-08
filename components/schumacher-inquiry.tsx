import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

export function SchumacherInquiry({ pattern }: { pattern?: string }) {
  const href = `/contact?schumacher=${encodeURIComponent(pattern ?? "Curated Schumacher collection")}`;
  return (
    <section className="mx-6 mb-20 bg-[#3d2b1f] px-6 py-14 text-[#fbf6ec] md:mx-auto md:max-w-6xl md:px-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d9bd73]">Charleston Decorative Arts × Schumacher</p>
      <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">Request a memo, availability check or project quote</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-[#eadfce]">We are a Schumacher trade partner. Contact our studio to order direct for the best available pricing and coordinated specification and installation support.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="rounded-none bg-[#c9a959] px-7 py-5 text-xs uppercase tracking-widest text-[#3d2b1f] hover:bg-[#dbc47f]"><Link href={href}>Request Memo or Quote</Link></Button>
        <Button asChild variant="outline" className="rounded-none border-[#d9bd73] bg-transparent px-7 py-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#fbf6ec] hover:text-[#3d2b1f]"><a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>Call {SITE.phone}</a></Button>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-[#cdbfae]">Availability, pricing, minimums, freight and dye lots are confirmed before an order is placed. Schumacher product names, imagery and trademarks belong to F. Schumacher &amp; Co.</p>
    </section>
  );
}
