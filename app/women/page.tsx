import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WomenHub } from "@/components/WomenHub";
import { women } from "@/data/women";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/women",
  title: "미션 임파서블 여성 캐릭터",
  description:
    "미션 임파서블 여성 캐릭터. 일사 파우스트, 화이트 위도우, 그레이스, 줄리아 미드 등 요원과 협력, 조연을 모았습니다.",
});

export default function WomenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "여성", path: "/women" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 여성 캐릭터",
          "/women",
          women.map((person) => ({ name: person.nameKo, path: `/women/${person.slug}` })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">여성</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        요원, 협력, 조연. 일사와 그레이스는 요원 칸에도 있습니다. 포스터는 쓰지 않습니다.
      </p>
      <WomenHub />
    </div>
  );
}
