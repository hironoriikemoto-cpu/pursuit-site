"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 画面下部に固定表示するCTAバー（資料請求／お問い合わせ）
export default function CtaBar({ locale = "ja" }: { locale?: "ja" | "en" }) {
  const pathname = usePathname();
  // 問い合わせ関連ページでは非表示（フォームへの導線が不要なため)
  if (pathname.includes("/contact")) return null;

  const prefix = locale === "en" ? "/en" : "";
  const t =
    locale === "en"
      ? {
          docNote: "Get our service overview",
          doc: "Request Materials",
          contactNote: "Free consultation available",
          contact: "Contact Us",
        }
      : {
          docNote: "サービス概要をご確認いただけます",
          doc: "資料請求",
          contactNote: "PoC・協業のご相談はこちら",
          contact: "お問い合わせ",
        };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-3 px-4 py-3 md:gap-6">
        <Link
          href={`${prefix}/contact`}
          className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-emerald-900 px-4 py-2.5 transition hover:bg-emerald-50 md:flex-none md:px-6"
        >
          <span className="hidden text-xs leading-tight text-neutral-500 md:block">
            {t.docNote}
          </span>
          <span className="text-sm font-semibold text-emerald-950">{t.doc}</span>
        </Link>
        <Link
          href={`${prefix}/contact`}
          className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-emerald-950 px-4 py-2.5 shadow-sm transition hover:opacity-90 md:flex-none md:px-6"
        >
          <span className="hidden text-xs leading-tight text-emerald-200 md:block">
            {t.contactNote}
          </span>
          <span className="text-sm font-semibold text-white">{t.contact}</span>
        </Link>
      </div>
    </div>
  );
}
