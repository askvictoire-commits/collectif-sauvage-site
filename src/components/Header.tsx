"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const pathname = usePathname();
  const isPink = pathname === "/contact";
  const textColor = isPink ? "text-white" : "text-[#f598ff]";

  return (
    <header className={`sticky top-0 z-50 bg-transparent ${textColor}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl uppercase tracking-tight md:text-2xl">
          Collectif Sauvage
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setExpertisesOpen(true)}
                onMouseLeave={() => setExpertisesOpen(false)}
              >
                <button className="text-sm uppercase tracking-wide hover:opacity-70">
                  {item.label}
                </button>
                {expertisesOpen && (
                  <div className="absolute left-0 top-full w-64 border border-white/10 bg-[#181730] py-2 text-white shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm normal-case hover:bg-white/10"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-wide hover:opacity-70"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="text-sm uppercase md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#181730] px-6 pb-6 text-white md:hidden">
          {nav.map((item) => (
            <div key={item.label} className="py-2">
              <Link href={item.href} className="block py-1 text-sm uppercase">
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="py-1 text-sm normal-case text-white/70">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
