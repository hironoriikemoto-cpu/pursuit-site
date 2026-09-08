import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBar from "@/components/CtaBar";
import "../../globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pursuit-dao.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pursuit inc. | Pursue value. Protect value.",
    template: "%s | Pursuit inc.",
  },
  description:
    "Pursuing value that has yet to take shape — and protecting the value that emerges. Enterprise AI platform Pursuit of Sovereignty / AI development / business systems / web applications / business design / Web3 & RWA. Pursuit inc., Tokyo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/en`,
    siteName: "Pursuit inc.",
    title: "Pursuit inc. | Pursue value. Protect value.",
    description:
      "Pursuing value that has yet to take shape — and protecting the value that emerges. Enterprise AI platform Pursuit of Sovereignty / AI development / business systems / web applications / business design / Web3 & RWA.",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "/en",
    languages: { ja: "/", en: "/en" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pursuit inc.",
  alternateName: "株式会社Pursuit",
  url: `${siteUrl}/en`,
  logo: `${siteUrl}/logo/pursuit_logo_horizontal_color.svg`,
  foundingDate: "2026-02-05",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "Tokyo",
    addressLocality: "Chuo-ku",
    streetAddress: "N&E BLD. 6F, 1-12-4 Ginza",
  },
  founders: [
    { "@type": "Person", name: "Hironori Ikemoto", jobTitle: "Co-CEO / Business Design" },
    { "@type": "Person", name: "Takashi Eguchi", jobTitle: "Co-CEO / Engineering & AI" },
  ],
  description:
    "Pursuing value that has yet to take shape — and protecting the value that emerges. Enterprise AI platform Pursuit of Sovereignty / AI development / business systems / web applications / business design / Web3 & RWA.",
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} bg-white text-neutral-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header locale="en" />
        <main>{children}</main>
        <Footer locale="en" />
        <CtaBar locale="en" />
      </body>
    </html>
  );
}
