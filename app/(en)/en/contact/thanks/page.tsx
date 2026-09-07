import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

export default function EnThanksPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center md:px-8">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Thank you for your inquiry.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-700">
          We will review your message and get back to you shortly.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-block rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
