import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Luxury Wallcoverings Installation | de Gournay, Gracie, Schumacher & More",
  description:
    "Charleston Decorative Arts installs luxury wallcoverings from Schumacher, de Gournay, Gracie, Fromental, Zuber, Phillip Jeffries, Élitis, Arte, Cole & Son and more, across the Southeast.",
};

export default function LuxuryWallcoveringsPage() {
  return (
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
  );
}
