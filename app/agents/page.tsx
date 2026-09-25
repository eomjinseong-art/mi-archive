import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PosterCard } from "@/components/PosterCard";
import { agents } from "@/data/agents";
import { personImage, portraitOrAtmosphere } from "@/data/licensedImages";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/agents",
  title: "미션 임파서블 요원",
  description:
    "미션 임파서블 요원. 에단 헌트, 루터 스티켈, 벤지 던, 일사 파우스트 등 IMF와 협력 인물을 작품별로 정리했습니다.",
});

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "요원", path: "/agents" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 요원",
          "/agents",
          agents.map((person) => ({ name: person.nameKo, path: `/agents/${person.slug}` })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">요원</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        IMF 현장과, 그 옆에 선 MI6·협력. 일사는 소속이 다릅니다. 짐 펠프스는 악당 칸에도 있습니다.
      </p>
      <p className="mt-4">
        <Link href="/mcquarrie-era" className="inline-flex rounded-full border border-gold/50 px-3 py-1 text-xs text-gold hover:bg-gold/10">
          맥쿼리 시대
        </Link>
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((person) => {
          const image = personImage(person.slug);
          return (
            <PosterCard
              key={person.slug}
              title={`${person.nameKo} (${person.nameEn})`}
              meta={`${person.affiliation} · ${person.performerKo} · ${person.filmCount}편`}
              tone={person.posterTone}
              image={portraitOrAtmosphere(image)}
              overlayOnImage={!image}
              href={`/agents/${person.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
}
