import Link from "next/link";
import { AutopixBanner } from "@/components/AutopixBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarExplorer } from "@/components/CarExplorer";
import { JsonLd } from "@/components/JsonLd";
import { cars } from "@/data/cars";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/cars",
  title: "미션 임파서블 차",
  description:
    "미션 임파서블 차 목록. BMW M3·M5와 바이크, 아우디 TT, 람보르기니 가야르도, 트라이엄프, 피아트 500, 혼다 CRF를 작품별로 정리했습니다. 사진은 같은 계열의 위키미디어 공용 사진입니다.",
});

export default function CarsPage() {
  const bmw = cars.filter((car) => car.brand === "BMW");
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "미션 임파서블 차", path: "/cars" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 차",
          "/cars",
          cars
            .filter((car) => car.hasL2)
            .map((car) => ({ name: car.nameKo, path: `/cars/${car.slug}` })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">미션 임파서블 차</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        보도자료나 IMCDb로 역할이 확인된 차와 바이크 {cars.length}대입니다. 세대가
        갈리거나 배경으로만 스친 차는 빼 두었습니다. 주요 차량은 아이콘·브랜드·시대로
        볼 수 있습니다. 사진은 촬영 차량이 아닙니다.{" "}
        <Link href="/films" className="text-gold hover:underline">
          작품별 목록
        </Link>
        과 함께 보면 어느 추격인지 이어집니다.
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        미션 임파서블 BMW는{" "}
        {bmw.map((car, index) => (
          <span key={car.slug}>
            {index > 0 ? " · " : null}
            <Link href={`/cars/${car.slug}`} className="text-gold hover:underline">
              {car.nameKo.replace(/^(\d{4}\s+)?BMW\s+/, "")}
            </Link>
          </span>
        ))}
        입니다.
      </p>
      <div className="mt-6">
        <AutopixBanner showCarsLink={false} />
      </div>
      <div className="mt-8">
        <CarExplorer />
      </div>
    </div>
  );
}
