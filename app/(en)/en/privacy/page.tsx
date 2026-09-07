import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of Pursuit inc.",
  alternates: {
    canonical: "/en/privacy",
    languages: { ja: "/privacy", en: "/en/privacy" },
  },
};

const sections = [
  {
    heading: "1. Company information",
    body: [
      "Name: Pursuit inc. (株式会社Pursuit)",
      "Address: N&E BLD. 6F, 1-12-4 Ginza, Chuo-ku, Tokyo, Japan",
      "Representative: Hironori Ikemoto, Representative Director",
    ],
  },
  {
    heading: "2. Personal information we collect",
    body: [
      "Through our contact form, we collect your name, company name, email address, phone number, and the content of your inquiry.",
    ],
  },
  {
    heading: "3. Purposes of use",
    body: [
      "We use the personal information we collect for the following purposes:",
      "・To respond to inquiries and provide necessary information",
      "・To provide information about our services",
      "・To improve our services and develop new ones",
    ],
  },
  {
    heading: "4. Provision to third parties",
    body: [
      "We do not provide personal information to third parties without the individual's consent, except as required by law.",
    ],
  },
  {
    heading: "5. Outsourcing",
    body: [
      "We may outsource part of our operations, such as contact form submission processing, to external services. We require such contractors to manage personal information appropriately.",
    ],
  },
  {
    heading: "6. Analytics tools",
    body: [
      "This website may use analytics tools to improve our services. These tools collect traffic data using cookies; the data is collected anonymously and does not identify individuals.",
    ],
  },
  {
    heading: "7. Security measures",
    body: [
      "We take necessary and appropriate measures to prevent leakage, loss, or damage of personal information and to otherwise manage it securely.",
    ],
  },
  {
    heading: "8. Disclosure, correction, and deletion requests",
    body: [
      "We respond promptly, in accordance with applicable law, to requests from individuals for disclosure, correction, addition, deletion, or suspension of use of their personal information. Please contact us through the inquiry form below.",
    ],
  },
  {
    heading: "9. Contact",
    body: [
      "For questions about this policy, please contact us through the inquiry form on this website.",
    ],
  },
  {
    heading: "10. Revisions",
    body: [
      "We may revise this policy in response to changes in law or in our business. The revised policy takes effect when posted on this page.",
    ],
  },
];

export default function EnPrivacyPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-medium tracking-wide text-neutral-500">Privacy Policy</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-neutral-700">
          Pursuit inc. (&ldquo;we&rdquo;) sets out this Privacy Policy regarding the
          handling of personal information on the website we operate.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-semibold">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-neutral-500">Established: August 12, 2026</p>
      </div>
    </section>
  );
}
