import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Luxury Wallcoverings, Historic Restoration & Murals`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "luxury wallcoverings",
    "Charleston historic restoration",
    "hand-painted murals",
    "de Gournay installation",
    "Gracie wallpaper",
    "historic wallpaper preservation",
    "Charleston interior design",
    "Kiawah Island luxury interiors",
    "Fine and Dandy mural Charleston",
    "King Street historic wallcoverings",
    "Charleston Regency style",
    "custom mural installation Charleston",
    "George Kazameas wallcovering installer",
    "MacKenzie-Childs wallcovering installation",
  ],
  openGraph: {
    title: `${SITE.name} | The Art of Extraordinary Interiors`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fbf6ec] font-sans text-[#3d2b1f] antialiased">
        <OrganizationJsonLd />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
