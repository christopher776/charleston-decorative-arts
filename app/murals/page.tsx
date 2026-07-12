import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Custom Hand-Painted & Digital Murals | Charleston Decorative Arts",
  description:
    "Hand-painted murals, digital murals, commercial feature walls, hospitality installations, and historic reproductions for luxury interiors across the Southeast.",
};

export default function MuralsPage() {
  return (
    <ServicePage
      eyebrow="Services"
      title="Custom Murals"
      subtitle="Hand-painted murals, digital murals, commercial feature walls, hospitality installations, and historic reproductions."
      image={IMG.murals}
      imageAlt="Artisan hand-painting a large botanical mural feature wall"
      intro={[
        "A well-executed mural is a permanent, gallery-quality investment. Our artisans hand-paint scenic and botanical murals directly on site, or coordinate large-format digital murals for commercial and hospitality applications where scale and turnaround matter.",
        "From a single powder-room feature wall to a full hospitality lobby installation, every mural project begins with a design consultation, moisture and substrate analysis, and a laser-measured layout to ensure flawless execution.",
      ]}
      points={[
        "Hand-painted murals",
        "Digital murals",
        "Commercial feature walls",
        "Historic reproductions",
      ]}
    />
  );
}
