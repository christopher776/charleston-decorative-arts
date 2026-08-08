import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { IMG } from "@/lib/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Luxury Wallcoverings Installation | de Gournay, Gracie, Schumacher & More",
  description:
    "Charleston Decorative Arts installs luxury wallcoverings from Schumacher, de Gournay, Gracie, Fromental, Zuber, Phillip Jeffries, Élitis, Arte, Cole & Son and more, across the Southeast.",
};

export default function LuxuryWallcoveringsPage() {
  return (
    <>
      <ServicePage
        eyebrow="Services"
        title="Luxury Wallcoverings"
        subtitle="Installation of Schumacher, de Gournay, Gracie, Fromental, Zuber, Phillip Jeffries, Élitis, Arte, Cole & Son, and other luxury collections."
        image={IMG.wallcoverings}
        imageAlt="Luxury wallcovering showroom wall installed by Charleston Decorative Arts"
        intro={[
          "Charleston Decorative Arts is a trade-preferred installer for the world's leading luxury wallcovering houses. We bring guild-trained precision to every yard of material, whether it's a hand-painted silk mural or a natural fiber grasscloth.",
          "Our process begins with trade specification support — helping designers and homeowners select the right collection, quantity, and finish for the room's light, humidity, and architectural character — and ends with a museum-quality installation backed by our workmanship guarantee.",
        ]}
        points={[
          "Trade specification support",
          "Precision pattern matching",
          "Natural fiber & grasscloth expertise",
          "Full-service sourcing across 15+ luxury houses",
        ]}
      />
      <section className="border-t border-[#e4d9c2] bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">New Curated Trade Showroom</p>
          <h2 className="font-serif text-3xl leading-tight text-[#3d2b1f] md:text-5xl">Explore Schumacher Through Our Trade Studio</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-[#5a4632]">Charleston Decorative Arts is a Schumacher trade partner serving homeowners, interior designers and architects. Explore our curated edit of iconic Schumacher fabrics and wallcoverings, request memos, confirm current availability and contact us to order direct for the best available pricing. Our studio can coordinate product selection, quantity review, wall preparation and museum-quality installation as one continuous service.</p>
          <Button asChild className="mt-8 rounded-none bg-[#8a6d1d] px-8 py-6 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]"><Link href="/schumacher">Explore the Schumacher Showroom</Link></Button>
        </div>
      </section>
    </>
  );
}
