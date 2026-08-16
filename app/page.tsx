import { HeroSection } from "@/components/home/hero-section";
import { TrustedBy } from "@/components/home/trusted-by";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyUs } from "@/components/home/why-us";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TheDifference } from "@/components/home/the-difference";
import { BrandsStrip } from "@/components/home/brands-strip";
import { EducationSection } from "@/components/home/education-section";
import { KnowledgeCenter } from "@/components/home/knowledge-center";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <BrandsStrip />
      <ServicesGrid />
      <WhyUs />
      <FeaturedProjects />
      <TheDifference />
      <EducationSection />
      <KnowledgeCenter />
    </>
  );
}
