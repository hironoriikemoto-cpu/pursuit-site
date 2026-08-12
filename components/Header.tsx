"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/concept", label: "Concept" },
  { href: "/service", label: "Service" },
  { href: "/web3", label: "Web3/RWA" },
  { href: "/works", label: "Works" },
  { href: "/insights", label: "Insights" },
  { href: "/news", label: "News" },
  { href: "/company", label: "Company" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/pursuit_logo_horizontal_color.svg"
            alt="Pursuit inc."
            width={140}
            height={47}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-neutral-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label="メニューを開閉"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-neutral-200 bg-white px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
