import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Enterprise AI platform (Pursuit Sovereignty), AI development, business systems, web applications, and business design & hands-on support. We never stop at 'build and done' — we implement value with operation, improvement, and adoption in mind.",
  alternates: {
    canonical: "/en/service",
    languages: { ja: "/service", en: "/en/service" },
  },
};

const services: { en: string; ja: string; body: string; href?: string }[] = [
  {
    en: "Enterprise AI Sovereignty",
    ja: "Enterprise AI platform (Pursuit Sovereignty)",
    body: "An enterprise AI platform that builds the cycle of your knowledge × AI evaluation × continuous improvement inside your company. We start together from an enterprise PoC — baseline measurement, evaluation, and improvement on your real data.",
    href: "/en/sovereignty",
  },
  {
    en: "AI Development",
    ja: "AI development & adoption support",
    body: "Planning, design, and development of generative and business AI; integration and automation within business processes; and support for moving from PoC to full production.",
  },
  {
    en: "System Development",
    ja: "Business system development",
    body: "From business analysis and requirements definition to planning and building operational and administrative systems, redesigning and improving existing systems, and operations-ready expansion.",
  },
  {
    en: "Web Application",
    ja: "Web application development",
    body: "Planning, design, and development of web applications; MVP launches; UI/UX design; and continuous support through operation and improvement phases.",
  },
  {
    en: "Consulting & Design",
    ja: "Business design & hands-on support",
    body: "New business and product design, technology selection and architecture, development roadmaps, and hands-on project support.",
  },
];

export default function EnServicePage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            Business / Service
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            What we offer
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            We never stop at &ldquo;build and done.&rdquo; We implement value with
            operation, improvement, and adoption as the premise.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.en}
                className={`rounded-2xl border bg-white p-6 shadow-sm md:p-8 ${
                  s.href ? "border-2 border-emerald-900" : "border-neutral-200"
                }`}
              >
                <h2 className="text-lg font-semibold">{s.en}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{s.body}</p>
                {s.href && (
                  <Link
                    href={s.href}
                    className="mt-4 inline-block text-sm font-semibold text-emerald-900 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-900"
                  >
                    Explore Pursuit Sovereignty →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Bring us the seed of your idea."
            description="It doesn't have to be fully formed. Pursuit starts from your ambition to build a real business, and pursues the best shape for it together with you."
          />
          <Link
            href="/en/contact"
            className="mt-8 inline-block rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
