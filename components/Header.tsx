"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/concept", label: "Concept" },
  { path: "/service", label: "Service" },
  { path: "/sovereignty", label: "Sovereignty" },
  { path: "/works", label: "Works" },
  { path: "/insights", label: "Insights" },
  { path: "/news", label: "News" },
  { path: "/company", label: "Company" },
];

export default function Header({ locale = "ja" }: { locale?: "ja" | "en" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const prefix = locale === "en" ? "/en" : "";
  const home = locale === "en" ? "/en" : "/";

  // 現在ページの対応言語ページへ切り替える
  const switchHref =
    locale === "en"
      ? pathname.replace(/^\/en/, "") || "/"
      : pathname === "/"
        ? "/en"
        : `/en${pathname}`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href={home} className="flex items-center gap-2" onClick={() => setOpen(false)}>
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
            <Link key={item.path} href={`${prefix}${item.path}`} className="hover:text-neutral-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className="rounded-xl border border-neutral-300 px-3 py-2 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-50"
            aria-label={locale === "ja" ? "Switch to English" : "日本語に切り替え"}
          >
            {locale === "ja" ? "EN" : "JP"}
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label={locale === "ja" ? "メニューを開閉" : "Toggle menu"}
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
              <li key={item.path}>
                <Link
                  href={`${prefix}${item.path}`}
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
