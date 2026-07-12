import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Venetian Plaster, Gold Leaf & Decorative Finishes | Charleston Decorative Arts",
  description:
    "Venetian plaster, gold leaf, decorative painting, architectural finishes, and textiles applied to the same museum-quality standard as our wallcovering and mural work.",
};

export default function DecorativeFinishesPage() {
  return (
    <ServicePage
      eyebrow="Services"
      title="Decorative Finishes"
      subtitle="Venetian plaster, gold leaf, decorative painting, architectural finishes, and textiles."
      image={IMG.finishes}
      imageAlt="Venetian plaster and gold leaf decorative wall finish detail"
      intro={[
        "Beyond wallcoverings and murals, we bring the same craftsmanship to architectural surface finishes — Venetian plaster with its signature depth and sheen, gold leaf detailing, and hand-applied decorative painting that elevates trim, ceilings, and architectural millwork.",
        "These finishes are frequently paired with our mural and wallcovering work to create a fully considered, tactile interior — plaster and gold leaf accents anchoring a hand-painted scenic panel, for instance.",
      ]}
      points={[
        "Venetian plaster",
        "Gold leaf",
        "Decorative painting",
        "Architectural finishes & textiles",
      ]}
    />
  );
}
