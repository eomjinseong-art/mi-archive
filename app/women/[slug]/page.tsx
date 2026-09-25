import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { women } from "@/data/women";
import { pageSeo } from "@/lib/seo";

export function generateStaticParams() {
  return women.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = women.find((item) => item.slug === slug);
  if (!person) {
    return pageSeo({
      path: "/women",
      title: "미션 임파서블 여성 캐릭터",
      description: "요청한 여성 캐릭터 페이지가 없습니다.",
      index: false,
    });
  }
  return pageSeo({
    path: `/women/${person.slug}`,
    title: `여성 ${person.nameKo}`,
    description: `미션 임파서블 여성 캐릭터 ${person.nameKo} (${person.nameEn}). ${person.performerKo} 분. ${person.oneLiner}`,
  });
}

export default async function WomanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = women.find((item) => item.slug === slug);
  if (!person) notFound();
  return (
    <PersonDetailView
      person={person}
      basePath="/women"
      kindLabel="여성"
      crumbs={[
        { name: "여성", path: "/women" },
        { name: person.nameKo, path: `/women/${person.slug}` },
      ]}
    />
  );
}
