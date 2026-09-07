import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Pursuit inc.へのお問い合わせ。まだ整理できていなくて構いません。「事業として成立させたい」という想いを起点に、最適な形を一緒に追求します。",
  alternates: { canonical: "/contact", languages: { ja: "/contact", en: "/en/contact" } },
  robots: { index: true, follow: true },
};

const topics = [
  { value: "sovereignty", label: "Enterprise AI基盤 / Pursuit Sovereignty" },
  { value: "new-business", label: "新規事業 / 事業化支援" },
  { value: "ai", label: "AI開発 / 生成AI活用" },
  { value: "system", label: "業務システム開発 / 再設計" },
  { value: "webapp", label: "Webアプリ開発" },
  { value: "web3", label: "Web3 / RWA（価値証明・保護・継承）" },
  { value: "other", label: "その他" },
];

const inputClass =
  "w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm shadow-sm outline-none focus:border-neutral-900";

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-medium tracking-wide text-neutral-500">Contact</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">お問い合わせ</h1>
        <p className="mt-6 text-base leading-relaxed text-neutral-700">
          まだ整理できていなくて構いません。Pursuitは「価値の追求」と「社会への定着」を一体で設計します。
        </p>

        <form
          className="mt-8 space-y-5"
          action="https://formsubmit.co/takashieguchi@pursuit-dao.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="【Pursuit inc.】Webサイトからのお問い合わせ" />
          <input type="text" style={{ display: "none" }} name="_honey" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://pursuit-dao.com/contact/thanks" />

          <div className="grid gap-5 md:grid-cols-2">
            <input required placeholder="お名前 *" name="name" className={inputClass} />
            <input placeholder="会社名（任意）" name="company" className={inputClass} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <input required type="email" placeholder="メールアドレス *" name="email" className={inputClass} />
            <input type="tel" placeholder="電話番号（任意）" name="phone" className={inputClass} />
          </div>
          <select required name="topic" defaultValue="" className={inputClass}>
            <option value="" disabled>
              相談テーマ *
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
            placeholder="相談内容 *（箇条書きOK）"
            className={inputClass}
          />
          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300" />
            <span>
              <Link
                href="/privacy"
                className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
              >
                プライバシーポリシー
              </Link>
              に同意します。 *
            </span>
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
