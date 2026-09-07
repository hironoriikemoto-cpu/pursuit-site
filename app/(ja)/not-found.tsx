import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center md:px-8">
        <p className="text-sm font-medium tracking-wide text-neutral-500">404</p>
        <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
          ページが見つかりませんでした。
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
        >
          TOPへ戻る
        </Link>
      </div>
    </section>
  );
}
