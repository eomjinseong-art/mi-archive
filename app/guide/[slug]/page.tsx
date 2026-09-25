import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { guides } from "@/data/guides";
import { pageSeo } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) {
    return pageSeo({
      path: "/guide",
      title: "미션 임파서블 보는 순서",
      description: "요청한 가이드가 없습니다.",
      index: false,
    });
  }
  return pageSeo({
    path: `/guide/${guide.slug}`,
    title: `보는 순서 · ${guide.titleKo}`,
    description: `미션 임파서블 보는 순서, ${guide.titleKo}. ${guide.summary}`,
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "가이드", path: "/guide" },
          { name: guide.titleKo, path: `/guide/${guide.slug}` },
        ]}
      />
      <h1 className="mt-2 font-serif text-3xl text-paper">
        {guide.titleKo} ({guide.titleEn})
      </h1>
      <p className="mt-3 text-sm leading-7 text-muted">{guide.summary}</p>
      <ol className="mt-8 space-y-4">
        {guide.steps.map((step, i) => (
          <li key={step.filmSlug} className="rounded-lg border border-line p-5">
            <p className="text-xs text-gold">{i + 1}</p>
            <h2 className="mt-1 font-serif text-xl text-paper">
              {step.titleKo} ({step.titleEn})
            </h2>
            <p className="text-xs text-muted">{step.year}</p>
            <p className="mt-2 text-sm leading-6 text-paper">{step.why}</p>
            {step.hasDetail ? (
              <Link
                href={`/films/${step.filmSlug}`}
                className="mt-3 inline-block text-sm text-gold"
              >
                작품 보기
              </Link>
            ) : (
              <p className="mt-3 text-xs text-muted">타임라인 카드만 있습니다.</p>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
