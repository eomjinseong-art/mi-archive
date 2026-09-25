import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { agents } from "@/data/agents";
import { pageSeo } from "@/lib/seo";

export function generateStaticParams() {
  return agents.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = agents.find((item) => item.slug === slug);
  if (!person) {
    return pageSeo({
      path: "/agents",
      title: "미션 임파서블 요원",
      description: "요청한 요원 페이지가 없습니다.",
      index: false,
    });
  }
  return pageSeo({
    path: `/agents/${person.slug}`,
    title: `요원 ${person.nameKo}`,
    description: `미션 임파서블 요원 ${person.nameKo} (${person.nameEn}). ${person.performerKo} 분. ${person.oneLiner}`,
  });
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = agents.find((item) => item.slug === slug);
  if (!person) notFound();
  return (
    <PersonDetailView
      person={person}
      basePath="/agents"
      kindLabel="요원"
      crumbs={[
        { name: "요원", path: "/agents" },
        { name: person.nameKo, path: `/agents/${person.slug}` },
      ]}
    />
  );
}
