import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import { mockArticles } from "./mock-content";

// microCMS の記事型（news / insights / works 共通）
export type Article = {
  id: string;
  title: string;
  excerpt?: string;
  body: string; // リッチエディタのHTML
  // 英語版フィールド（未入力の記事は英語サイトに表示されない）
  title_en?: string;
  excerpt_en?: string;
  body_en?: string;
  thumbnail?: { url: string; width: number; height: number };
  category?: string;
  client?: string; // works用: クライアント名
  publishedAt: string;
  revisedAt?: string;
};

// 英語フィールドを主フィールドに差し替えた記事を返す（英語版がない記事はnull）
export function toEnArticle(a: Article): Article | null {
  if (!a.title_en || !a.body_en) return null;
  return {
    ...a,
    title: a.title_en,
    excerpt: a.excerpt_en,
    body: a.body_en,
  };
}

export type Endpoint = "news" | "insights" | "works";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

// 環境変数が未設定の間はモックデータで動作する（microCMS契約前でもビルド可能）
const cmsEnabled = Boolean(serviceDomain && apiKey);

const client = cmsEnabled
  ? createClient({ serviceDomain: serviceDomain!, apiKey: apiKey! })
  : null;

export async function getArticles(
  endpoint: Endpoint,
  queries?: MicroCMSQueries
): Promise<{ contents: Article[]; totalCount: number }> {
  if (!client) {
    const contents = mockArticles[endpoint];
    return { contents, totalCount: contents.length };
  }
  const res = await client.getList<Article>({
    endpoint,
    queries: { orders: "-publishedAt", ...queries },
  });
  return { contents: res.contents, totalCount: res.totalCount };
}

export async function getArticle(
  endpoint: Endpoint,
  id: string
): Promise<Article | null> {
  if (!client) {
    return mockArticles[endpoint].find((a) => a.id === id) ?? null;
  }
  try {
    return await client.getListDetail<Article>({ endpoint, contentId: id });
  } catch {
    return null;
  }
}

export function isCmsEnabled() {
  return cmsEnabled;
}
