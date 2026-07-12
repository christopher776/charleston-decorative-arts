import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Historic Wallpaper Restoration & Preservation | Charleston, SC",
  description:
    "Museum-quality historic wallpaper preservation, surface preparation, conservation-grade repair, and historic consultation for landmark Charleston-area properties.",
};

export default function HistoricRestorationPage() {
  return (
    <ServicePage
      eyebrow="Services"
      title="Historic Restoration"
      subtitle="Historic wallpaper preservation, surface preparation, repair, museum-quality installation, and historic consultation."
      image={IMG.restoration}
      imageAlt="Conservator restoring historic wallpaper in a Charleston parlor"
      intro={[
        "For homes and institutions with original or period-appropriate wallcoverings, restoration should always take priority over replacement. Our conservators use archival, reversible materials and museum-grade documentation practices on every project.",
        "We work directly with historic preservation organizations, Boards of Architectural Review, and private owners of National Register properties to ensure every intervention respects the building's history as much as its appearance.",
      ]}
      points={[
        "Historic wallpaper preservation",
        "Surface preparation",
        "Conservation-grade repair",
        "Historic consultation & documentation",
      ]}
    />
  );
}
