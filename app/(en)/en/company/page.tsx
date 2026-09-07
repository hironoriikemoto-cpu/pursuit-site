import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Company profile of Pursuit inc. Founded February 5, 2026. Enterprise AI platform Pursuit Sovereignty, AI development, business systems, web applications, business design, and RWA token development.",
  alternates: {
    canonical: "/en/company",
    languages: { ja: "/company", en: "/en/company" },
  },
};

const overview = [
  { label: "Company", value: "Pursuit inc. (株式会社Pursuit)" },
  { label: "Founded", value: "February 5, 2026" },
  { label: "Head office", value: "N&E BLD. 6F, 1-12-4 Ginza, Chuo-ku, Tokyo, Japan" },
  { label: "Representative Director", value: "Hironori Ikemoto" },
  { label: "Director", value: "Takashi Eguchi (Co-founder)" },
  { label: "Capital", value: "JPY 1,000,000" },
];

const businesses = [
  "Development and provision of the enterprise AI platform \"Pursuit Sovereignty\" (knowledge structuring, AI evaluation, continuous improvement)",
  "AI development / AI adoption support",
  "Business system development (requirements, design, development, improvement)",
  "Web application development (planning, design, development, operation)",
  "Business design & hands-on support (new business and product design)",
  "New product development in the RWA (Real World Asset) token space (proving, protecting, and passing on value)",
];

export default function EnCompanyPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">Company</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Pursuit inc.
          </h1>
          <p className="mt-2 text-lg text-neutral-500">株式会社Pursuit</p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Overview" title="Company profile" />
          <dl className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {overview.map((row, i) => (
              <div
                key={row.label}
                className={`grid gap-1 px-6 py-4 md:grid-cols-[220px_1fr] md:gap-6 ${
                  i > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <dt className="text-sm font-semibold text-neutral-500">{row.label}</dt>
                <dd className="text-sm text-neutral-800">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Business" title="What we do" />
          <ul className="mt-8 space-y-3">
            {businesses.map((b) => (
              <li
                key={b}
                className="rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-sm text-neutral-800 shadow-sm"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
