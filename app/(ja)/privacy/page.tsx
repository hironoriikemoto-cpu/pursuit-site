import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社Pursuit（Pursuit inc.）のプライバシーポリシー。",
  alternates: { canonical: "/privacy", languages: { ja: "/privacy", en: "/en/privacy" } },
};

const sections = [
  {
    heading: "1. 事業者情報",
    body: [
      "名称: 株式会社Pursuit（Pursuit inc.）",
      "所在地: 東京都中央区銀座一丁目12番4号 N&E BLD.6階",
      "代表者: 代表取締役 池本 博則",
    ],
  },
  {
    heading: "2. 取得する個人情報",
    body: [
      "当社は、お問い合わせフォームを通じて、お名前、会社名、メールアドレス、電話番号、お問い合わせ内容を取得します。",
    ],
  },
  {
    heading: "3. 個人情報の利用目的",
    body: [
      "取得した個人情報は、以下の目的で利用します。",
      "・お問い合わせへの回答、および必要な情報のご連絡のため",
      "・当社サービスに関するご案内のため",
      "・サービスの改善、新規サービスの検討のため",
    ],
  },
  {
    heading: "4. 個人情報の第三者提供",
    body: [
      "当社は、法令に基づく場合を除き、ご本人の同意を得ることなく個人情報を第三者に提供しません。",
    ],
  },
  {
    heading: "5. 業務委託に伴う取り扱い",
    body: [
      "お問い合わせフォームの送信処理等、業務の一部を外部サービスに委託する場合があります。委託先に対しては、個人情報の適切な管理を求めます。",
    ],
  },
  {
    heading: "6. アクセス解析ツールについて",
    body: [
      "当サイトでは、サービス向上のためにアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用してトラフィックデータを収集しますが、データは匿名で収集されており、個人を特定するものではありません。",
    ],
  },
  {
    heading: "7. 安全管理措置",
    body: [
      "当社は、個人情報の漏えい、滅失または毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。",
    ],
  },
  {
    heading: "8. 開示・訂正・削除等の請求",
    body: [
      "ご本人からの個人情報の開示、訂正、追加、削除、利用停止のご請求に対して、法令に基づき速やかに対応します。ご請求は下記の窓口までご連絡ください。",
    ],
  },
  {
    heading: "9. お問い合わせ窓口",
    body: [
      "本ポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。",
    ],
  },
  {
    heading: "10. プライバシーポリシーの改定",
    body: [
      "当社は、法令の変更や事業内容の変更に応じて、本ポリシーを改定することがあります。改定後の内容は当ページに掲載した時点から効力を生じるものとします。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-medium tracking-wide text-neutral-500">Privacy Policy</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-neutral-700">
          株式会社Pursuit（以下「当社」）は、当社が運営するWebサイト（以下「当サイト」）における
          個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
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
        <p className="mt-12 text-xs text-neutral-500">制定日: 2026年8月12日</p>
      </div>
    </section>
  );
}
