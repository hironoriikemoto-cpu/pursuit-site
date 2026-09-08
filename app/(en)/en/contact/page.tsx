import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pursuit inc. It doesn't have to be fully formed — we design the pursuit of value and its adoption in society as one.",
  alternates: {
    canonical: "/en/contact",
    languages: { ja: "/contact", en: "/en/contact" },
  },
};

const topics = [
  { value: "sovereignty", label: "Enterprise AI / Pursuit of Sovereignty" },
  { value: "new-business", label: "New business / commercialization support" },
  { value: "ai", label: "AI development / generative AI adoption" },
  { value: "system", label: "Business system development / redesign" },
  { value: "webapp", label: "Web application development" },
  { value: "web3", label: "Web3 / RWA (proving, protecting, passing on value)" },
  { value: "other", label: "Other" },
];

const inputClass =
  "w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm shadow-sm outline-none focus:border-neutral-900";

export default function EnContactPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-medium tracking-wide text-neutral-500">Contact</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Get in touch</h1>
        <p className="mt-6 text-base leading-relaxed text-neutral-700">
          It doesn&apos;t have to be fully formed. Pursuit designs the pursuit of value
          and its adoption in society as one.
        </p>

        <form
          className="mt-8 space-y-5"
          action="https://formsubmit.co/takashieguchi@pursuit-dao.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="【Pursuit inc.】Inquiry from website (EN)" />
          <input type="text" style={{ display: "none" }} name="_honey" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://pursuit-dao.com/en/contact/thanks" />

          <div className="grid gap-5 md:grid-cols-2">
            <input required placeholder="Name *" name="name" className={inputClass} />
            <input placeholder="Company (optional)" name="company" className={inputClass} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <input required type="email" placeholder="Email *" name="email" className={inputClass} />
            <input type="tel" placeholder="Phone (optional)" name="phone" className={inputClass} />
          </div>
          <select required name="topic" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Topic *
            </option>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <textarea
            required
            name="message"
            rows={8}
            placeholder="How can we help? * (bullet points welcome)"
            className={inputClass}
          />
          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300" />
            <span>
              I agree to the{" "}
              <Link
                href="/en/privacy"
                className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
              >
                Privacy Policy
              </Link>
              . *
            </span>
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
