import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "送信完了",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center md:px-8">
        <h1 className="text-2xl font-semibold md:text-3xl">
          お問い合わせありがとうございます。
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-700">
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
        >
          TOPへ戻る
        </Link>
      </div>
    </section>
  );
}
