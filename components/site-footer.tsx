import Link from "next/link";
import { SITE, BRANDS, LOCATIONS } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#3d2b1f] bg-[#3d2b1f] text-[#f3ead9]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c9a959]">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#e8dcc4]">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/education">Education</Link></li>
              <li><Link href="/gallery">Installation Portfolio</Link></li>
              <li><Link href="/journal">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c9a959]">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-[#e8dcc4]">
              <li><Link href="/schumacher">Shop Schumacher</Link></li>
              <li><Link href="/luxury-wallcoverings">Wallpaper Installation</Link></li>
              <li><Link href="/historic-restoration">Historic Restoration</Link></li>
              <li><Link href="/murals">Murals</Link></li>
              <li><Link href="/decorative-finishes">Decorative Finishes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c9a959]">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm text-[#e8dcc4]">
              {LOCATIONS.slice(0, 4).map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/service-areas/${loc.slug}`}>{loc.name}</Link>
                </li>
              ))}
              <li><Link href="/historic-properties">All Service Areas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c9a959]">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#e8dcc4]">
              <li>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-[#c9a959] hover:underline">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-[#c9a959] hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li><Link href="/contact?project=wallpaper-installation">Request Installation Quote</Link></li>
              <li><Link href="/designer-portal">Trade Registration</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#5a4632] pt-6">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-[#c9a959]">
            Proud Installation Partner Of
          </p>
          <p className="text-xs leading-relaxed text-[#b8a684]">
            {BRANDS.map((b) => b.name).join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-[#5a4632] pt-6 text-xs text-[#b8a684] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
