import { noteUrl } from "./site-config";

// noteのRSSフィードから最新記事を取得する（noteUrl未設定・取得失敗時は空配列）
export type NoteArticle = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
};

function extract(block: string, tag: string): string {
  const m = block.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`)
  );
  return m ? m[1].trim() : "";
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function getNoteArticles(limit = 3): Promise<NoteArticle[]> {
  if (!noteUrl) return [];
  try {
    const res = await fetch(`${noteUrl.replace(/\/$/, "")}/rss`, {
      next: { revalidate: 1800 }, // 30分ごとに更新
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
    return items
      .slice(0, limit)
      .map((item) => ({
        title: decodeEntities(extract(item, "title")),
        link: extract(item, "link"),
        pubDate: extract(item, "pubDate"),
        thumbnail:
          (item.match(/<media:thumbnail>\s*([^<\s]+)\s*<\/media:thumbnail>/) ?? [])[1],
      }))
      .filter((a) => a.title && a.link);
  } catch {
    return [];
  }
}
