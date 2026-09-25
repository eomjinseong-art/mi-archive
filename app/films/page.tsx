import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PosterCard } from "@/components/PosterCard";
import { ORIGIN_HREF } from "@/data/origin";
import { displayFilmTitle, films, filmsByDirector } from "@/data/films";
import { atmospherePlaceholder, filmImages } from "@/data/licensedImages";
import { SERIES_FRAMING, SERIES_FRAMING_NOTE, SERIES_TOTAL } from "@/data/series";
import { itemListJsonLd, pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/films",
  title: "미션 임파서블 영화 순서",
  description:
    "미션 임파서블 영화 순서. 1996년 1편부터 2025년 파이널 레코닝까지 극장판 8편의 감독, 개봉년, 보는 순서를 정리했습니다.",
});

export default function FilmsPage() {
  const byDirector = filmsByDirector();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "영화", path: "/films" }]} />
      <JsonLd
        data={itemListJsonLd(
          "미션 임파서블 영화 순서",
          "/films",
          films.map((film) => ({ name: film.titleKo, path: `/films/${film.slug}` })),
        )}
      />
      <h1 className="font-serif text-3xl text-paper">영화</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-paper">{SERIES_FRAMING}</p>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{SERIES_FRAMING_NOTE}</p>
      <p className="mt-3 text-sm text-muted">
        극장판 {SERIES_TOTAL}편 ·{" "}
        <Link href={ORIGIN_HREF} className="text-gold hover:underline">
          원작 1966년 텔레비전
        </Link>
        {" · "}
        <Link href="/series" className="text-gold hover:underline">
          시리즈 설명
        </Link>
        {" · "}
        <Link href="/cars" className="text-gold hover:underline">
          미션 임파서블 차
        </Link>
      </p>

      <div className="mt-10 space-y-10">
        {byDirector.map((group) => (
          <section key={group.directorSlug}>
            <div className="mb-4 flex items-end justify-between gap-3">
              <h2 className="font-serif text-xl text-paper">
                {group.directorKo} ({group.directorEn})
                <span className="ml-2 text-base text-muted">{group.films.length}편</span>
              </h2>
              <Link href={`/directors/${group.directorSlug}`} className="text-sm text-muted hover:text-gold">
                감독 페이지
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.films.map((film) => (
                <PosterCard
                  key={film.slug}
                  title={displayFilmTitle(film)}
                  meta={`${film.year} · ${film.directorKo}`}
                  tone={film.posterTone}
                  href={`/films/${film.slug}`}
                  image={filmImages[film.slug] ?? atmospherePlaceholder}
                  overlayOnImage={!filmImages[film.slug]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
