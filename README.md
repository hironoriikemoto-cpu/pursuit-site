# Pursuit inc. コーポレートサイト

https://pursuit-dao.com/ のソースコード。

## 技術構成

| 役割 | 技術 |
|---|---|
| フレームワーク | Next.js (App Router) + TypeScript + Tailwind CSS |
| コンテンツ管理 | microCMS（News / Insights / Works） |
| ホスティング | Vercel |
| DNS | Cloudflare（既存のまま） |
| 問い合わせフォーム | formsubmit.co 経由でメール送信 |

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認。microCMSの環境変数が未設定の間は、`lib/mock-content.ts` のサンプル記事で動作する。

## 環境変数

`.env.local.example` をコピーして `.env.local` を作成。

- `MICROCMS_SERVICE_DOMAIN` — microCMSのサービスドメイン（`xxxx.microcms.io` の `xxxx` 部分）
- `MICROCMS_API_KEY` — microCMSのAPIキー
- `NEXT_PUBLIC_SITE_URL` — 本番URL（`https://pursuit-dao.com`）

Vercelにも同じ3つを設定する。

## microCMS のAPI設計

サービス内に以下の3つのAPI（リスト形式）を作成する。

### news（お知らせ）/ insights（コラム）/ works（実績）共通フィールド

| フィールドID | 表示名 | 種類 | 必須 |
|---|---|---|---|
| title | タイトル | テキストフィールド | ✔ |
| excerpt | 抜粋（一覧・メタ説明用） | テキストエリア | |
| body | 本文 | リッチエディタ | ✔ |
| thumbnail | サムネイル | 画像 | |

### insights のみ追加

| フィールドID | 表示名 | 種類 |
|---|---|---|
| category | カテゴリ | テキストフィールド（例: AI / Web3・RWA / 事業開発） |

### works のみ追加

| フィールドID | 表示名 | 種類 |
|---|---|---|
| client | クライアント名 | テキストフィールド |

記事URLは microCMS のコンテンツID（`/news/{id}` 等）になる。コンテンツIDは編集画面で任意の英数字に変更可能（SEO的に意味のあるスラッグ推奨、例: `site-renewal-2026`）。

公開後60秒以内にサイトへ自動反映される（ISR: revalidate=60）。

## SEO実装済み項目

- `sitemap.xml`（記事公開で自動更新）/ `robots.txt`
- 全ページの title / description / canonical / OGP
- 構造化データ: Organization（全ページ）、Article + BreadcrumbList（記事詳細）
- favicon（ロゴマークのSVG）
- Noto Sans JP（next/font で最適化読み込み）

## デプロイ

GitHub の main ブランチに push すると Vercel が自動デプロイする。

## 本番公開時のチェックリスト

1. microCMS のサービス作成 → 上記スキーマでAPI作成 → 環境変数設定
2. `lib/mock-content.ts` のサンプル記事が表示されなくなったことを確認
3. Vercel でカスタムドメイン `pursuit-dao.com` を追加
4. Cloudflare の DNS を Vercel 向けに変更（AレコードまたはCNAME、プロキシは DNS only にする）
5. Google Search Console にドメインプロパティで登録（Cloudflare に TXT レコード追加）
6. GSC に `https://pursuit-dao.com/sitemap.xml` を送信
7. プライバシーポリシーの文面を法務観点で最終確認
