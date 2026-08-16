"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e4d9c2] bg-[#fbf6ec]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-[#8a6d1d]">CDA</span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#3d2b1f]">
              CHARLESTON
            </span>
            <span className="text-xs tracking-[0.2em] text-[#3d2b1f]">
              DECORATIVE ARTS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/schumacher"
                  ? "border-b border-[#8a6d1d] pb-1 text-xs font-semibold uppercase tracking-widest text-[#8a6d1d] transition-colors hover:text-[#5f4812]"
                  : "text-xs font-medium uppercase tracking-widest text-[#5a4632] transition-colors hover:text-[#8a6d1d]"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button
            asChild
            className="rounded-none bg-[#8a6d1d] px-5 text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]"
          >
            <Link href="/contact?project=wallpaper-installation">Request Installation Quote</Link>
          </Button>
        </div>

        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-6 w-6 text-[#3d2b1f]" /> : <Menu className="h-6 w-6 text-[#3d2b1f]" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-[#e4d9c2] bg-[#fbf6ec] px-6 py-4 xl:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-[#5a4632] hover:text-[#8a6d1d]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact?project=wallpaper-installation"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#8a6d1d] px-4 py-3 text-center text-sm font-semibold uppercase tracking-widest text-[#fbf6ec]"
            >
              Request Installation Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
