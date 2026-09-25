import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PosterCard } from "@/components/PosterCard";
import { atmospherePlaceholder } from "@/data/licensedImages";
import { villains } from "@/data/villains";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/villains",
  title: "미션 임파서블 악당",
  description:
    "미션 임파서블 악당. 짐 펠프스, 오웬 데이비언, 솔로몬 레인, 엔티티까지 배신한 요원과 조직을 작품별로 정리했습니다.",
});

export default function VillainsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "악당", path: "/villains" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 악당",
          "/villains",
          villains.map((person) => ({ name: person.nameKo, path: `/villains/${person.slug}` })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">악당</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        배신한 요원, 조직, 그리고 얼굴이 없는 엔티티. 펠프스와 크리거는 한 카드입니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {villains.map((person) => (
          <PosterCard
            key={person.slug}
            title={`${person.nameKo} (${person.nameEn})`}
            meta={`${person.roleKind} · ${person.performerKo} · ${person.years}`}
            tone={person.posterTone}
            image={atmospherePlaceholder}
            overlayOnImage
            href={`/villains/${person.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
