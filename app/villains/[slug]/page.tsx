import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { villains } from "@/data/villains";
import { pageSeo } from "@/lib/seo";

export function generateStaticParams() {
  return villains.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = villains.find((item) => item.slug === slug);
  if (!person) {
    return pageSeo({
      path: "/villains",
      title: "미션 임파서블 악당",
      description: "요청한 악당 페이지가 없습니다.",
      index: false,
    });
  }
  return pageSeo({
    path: `/villains/${person.slug}`,
    title: `악당 ${person.nameKo}`,
    description: `미션 임파서블 악당 ${person.nameKo} (${person.nameEn}). ${person.performerKo} 분. ${person.oneLiner}`,
  });
}

export default async function VillainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = villains.find((item) => item.slug === slug);
  if (!person) notFound();
  return (
    <PersonDetailView
      person={person}
      basePath="/villains"
      kindLabel="악당"
      crumbs={[
        { name: "악당", path: "/villains" },
        { name: person.nameKo, path: `/villains/${person.slug}` },
      ]}
    />
  );
}
