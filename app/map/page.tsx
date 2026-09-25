import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageSeo } from "@/lib/seo";
import { ArchiveMap } from "@/components/ArchiveMapClient";
import { displayFilmTitle, films, getFilm } from "@/data/films";

export const metadata = pageSeo({
  path: "/map",
  title: "미션 임파서블 촬영지 지도",
  description:
    "미션 임파서블 촬영지 지도. 극장판에 남은 도시와 랜드마크를 한 지도에 올립니다. 작품으로 좁혀 볼 수 있습니다.",
});

export default async function MapPage({
  searchParams,
}: {
  searchParams: Promise<{ film?: string }>;
}) {
  const { film: filmSlug } = await searchParams;
  const focused = filmSlug ? getFilm(filmSlug) : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "지도", path: "/map" }]} />
      <h1 className="font-serif text-3xl text-paper">촬영지 지도</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        극장판의 촬영지·랜드마크 핀입니다. 금색 점을 누르면 작품과 여행 코스가 열립니다.{" "}
        <Link href="/locations" className="text-gold hover:underline">
          목록으로 보기
        </Link>
        {" · "}
        <Link href="/trips" className="text-gold hover:underline">
          여행 코스
        </Link>
      </p>
      {focused ? (
        <p className="mt-3 text-sm text-gold">
          {displayFilmTitle(focused)} 핀만 표시 중 ·{" "}
          <Link href="/map" className="underline">
            전체 보기
          </Link>
        </p>
      ) : null}
      <div className="mt-6">
        <ArchiveMap filmSlug={focused?.slug} />
      </div>
      <section className="mt-8">
        <h2 className="font-serif text-lg text-gold">작품으로 열기</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {films.map((film) => (
            <Link
              key={film.slug}
              href={`/map?film=${film.slug}`}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-gold hover:text-gold"
            >
              {film.titleKo}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
