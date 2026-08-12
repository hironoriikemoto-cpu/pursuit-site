import type { Article, Endpoint } from "./microcms";

// microCMS 接続前のローカル確認用サンプルデータ。
// 本番では環境変数（MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY）を設定すると使われなくなる。
export const mockArticles: Record<Endpoint, Article[]> = {
  news: [
    {
      id: "sample-site-renewal",
      title: "【サンプル】コーポレートサイトをリニューアルしました",
      excerpt:
        "Pursuit inc.のコーポレートサイトをリニューアルし、News / Insights / Works の発信を開始しました。",
      body: "<p>Pursuit inc.のコーポレートサイトをリニューアルしました。今後は本サイトを通じて、お知らせ・コラム・実績を発信してまいります。</p><p>※これはmicroCMS接続前のサンプル記事です。</p>",
      publishedAt: "2026-08-12T00:00:00.000Z",
    },
    {
      id: "sample-founding",
      title: "【サンプル】株式会社Pursuitを設立しました",
      excerpt: "2026年2月5日、株式会社Pursuitを設立しました。",
      body: "<p>2026年2月5日、株式会社Pursuit（Pursuit inc.）を設立しました。「価値を追求し、守る」をミッションに、AI/System・Business Design・Web3/RWAの3領域で事業を展開してまいります。</p><p>※これはmicroCMS接続前のサンプル記事です。</p>",
      publishedAt: "2026-02-05T00:00:00.000Z",
    },
  ],
  insights: [
    {
      id: "sample-rwa-value-proof",
      title: "【サンプル】RWAトークンは「正しい価値の証明」である",
      excerpt:
        "投機ではなく、現実世界の価値を説明可能な形で証明するインフラとしてのRWAトークンを考える。",
      body: "<p>Pursuitが取り組むRWA（Real World Asset）トークン開発は、金融的な投機や価格変動を目的としたものではありません。</p><h2>価値証明のインフラ</h2><p>現実世界に存在する価値――事業、知的資産、権利、実績、信用――を「なぜ価値があるのか」「どのように生まれ、積み重ねられてきたのか」を含めて記録し、説明可能な形で証明するための仕組みとして設計しています。</p><p>※これはmicroCMS接続前のサンプル記事です。</p>",
      category: "Web3 / RWA",
      publishedAt: "2026-08-01T00:00:00.000Z",
    },
    {
      id: "sample-ai-implementation",
      title: "【サンプル】生成AIをPoCで終わらせないための実装設計",
      excerpt:
        "生成AI活用が定着しない典型パターンと、業務プロセスに組み込むための設計の考え方。",
      body: "<p>生成AIのPoC（概念実証）は多くの企業で行われていますが、業務への定着まで至るケースは多くありません。</p><h2>「作って終わり」にしない</h2><p>Pursuitは、運用・改善・定着までを前提に、業務プロセスへの組み込みから伴走します。</p><p>※これはmicroCMS接続前のサンプル記事です。</p>",
      category: "AI",
      publishedAt: "2026-07-15T00:00:00.000Z",
    },
  ],
  works: [
    {
      id: "sample-dx-project",
      title: "【サンプル】業務効率化DXプロジェクト",
      excerpt:
        "業務理解・要件整理から管理システムの再設計まで一貫して支援した事例。",
      body: "<p>業務理解・要件整理から、管理システムの企画・開発、既存システムの再設計・改善までを一貫して支援しました。</p><p>※これはmicroCMS接続前のサンプル記事です。実績が公開可能になり次第、差し替えてください。</p>",
      client: "サンプル株式会社",
      publishedAt: "2026-06-01T00:00:00.000Z",
    },
  ],
};
