import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GadgetExplorer } from "@/components/GadgetExplorer";
import { JsonLd } from "@/components/JsonLd";
import { gadgets } from "@/data/gadgets";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/gadgets",
  title: "미션 임파서블 가젯",
  description:
    "미션 임파서블 가젯. 자동 파괴 메시지, 라텍스 가면, 콘택트렌즈, 스턴트 장비를 작품별로 정리했습니다. 추격 차량은 따로 둡니다.",
});

export default function GadgetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "가젯", path: "/gadgets" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 가젯",
          "/gadgets",
          gadgets.filter((item) => item.hasL2).map((item) => ({
            name: item.nameKo,
            path: `/gadgets/${item.slug}`,
          })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">가젯</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        자동 파괴 메시지, 가면, 스턴트 장비. 추격 차량은{" "}
        <Link href="/cars" className="text-gold hover:underline">
          미션 임파서블 차
        </Link>{" "}
        칸에 있습니다.
      </p>
      <div className="mt-8">
        <GadgetExplorer />
      </div>
    </div>
  );
}
