import type { MetadataRoute } from "next";
import { SITE, BRANDS, LOCATIONS, ARTICLES, NAV } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "designers-architects",
    "historic-properties",
    "education",
    "gallery",
    "journal",
    "about",
    "contact",
    "brands",
    "service-areas",
    "designer-portal",
    "commercial",
    "luxury-wallcoverings",
    "historic-restoration",
    "murals",
    "decorative-finishes",
  ].map((route) => ({
    url: `${SITE.url}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const brandRoutes = BRANDS.map((b) => ({
    url: `${SITE.url}/brands/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${SITE.url}/service-areas/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = ARTICLES.map((a) => ({
    url: `${SITE.url}/journal/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...brandRoutes, ...locationRoutes, ...articleRoutes];
}
