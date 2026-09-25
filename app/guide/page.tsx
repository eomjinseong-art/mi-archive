import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/guide",
  title: "미션 임파서블 보는 순서",
  description:
    "미션 임파서블 보는 순서. 처음, 정통, 액션 세 갈래로 극장판 8편 가운데 어디서 시작할지 고릅니다.",
});

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "가이드", path: "/guide" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 보는 순서",
          "/guide",
          guides.map((guide) => ({ name: guide.titleKo, path: `/guide/${guide.slug}` })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">가이드</h1>
      <p className="mt-2 text-sm text-muted">
        세 갈래. 처음 · 정통 · 액션. 각 경로 세 편입니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="rounded-xl border border-line bg-card p-5 hover:border-gold"
          >
            <h2 className="font-serif text-2xl text-gold">
              {guide.titleKo}
              <span className="ml-2 text-base text-muted">({guide.titleEn})</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-paper">{guide.summary}</p>
            <p className="mt-3 text-xs text-muted">
              {guide.steps.map((s) => s.titleKo).join(" → ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
