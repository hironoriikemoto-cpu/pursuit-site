import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pursuit-dao.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pursuit inc. | 価値を追求し、守る",
    template: "%s | Pursuit inc.",
  },
  description:
    "まだ形になっていない価値を追求し続けること。そして、生まれた価値を守ること。Enterprise AI基盤「Pursuit Sovereignty」／AI開発／業務システム開発／Webアプリ開発／構想設計・伴走支援／Web3・RWA。株式会社Pursuit。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Pursuit inc.",
    title: "Pursuit inc. | 価値を追求し、守る",
    description:
      "まだ形になっていない価値を追求し続けること。そして、生まれた価値を守ること。Enterprise AI基盤「Pursuit Sovereignty」／AI開発／業務システム開発／Webアプリ開発／構想設計・伴走支援／Web3・RWA。",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "/",
    languages: { ja: "/", en: "/en" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社Pursuit",
  alternateName: "Pursuit inc.",
  url: siteUrl,
  logo: `${siteUrl}/logo/pursuit_logo_horizontal_color.svg`,
  foundingDate: "2026-02-05",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "中央区",
    streetAddress: "銀座一丁目12番4号 N&E BLD.6階",
  },
  founders: [
    { "@type": "Person", name: "池本 博則", jobTitle: "共同代表 / Business Design" },
    { "@type": "Person", name: "江口 天", jobTitle: "共同代表 / Engineering & AI" },
  ],
  description:
    "まだ形になっていない価値を追求し続けること。そして、生まれた価値を守ること。Enterprise AI基盤「Pursuit Sovereignty」／AI開発／業務システム開発／Webアプリ開発／構想設計・伴走支援／Web3・RWA。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} bg-white text-neutral-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
