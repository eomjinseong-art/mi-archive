import type { Metadata } from "next";
import Link from "next/link";
import { PosterCard } from "@/components/PosterCard";
import { FLEMING_HREF } from "@/data/fleming";
import {
  displayFilmTitle,
  officialFilmsByActor,
} from "@/data/films";
import { atmospherePlaceholder } from "@/data/licensedImages";
import { SERIES_FRAMING, SERIES_FRAMING_NOTE, SERIES_TOTAL } from "@/data/series";
import { unofficialFilms } from "@/data/unofficialFilms";

export const metadata: Metadata = {
  title: "영화",
};

export default function FilmsPage() {
  const byActor = officialFilmsByActor();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">영화</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-paper">{SERIES_FRAMING}</p>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        {SERIES_FRAMING_NOTE} 한국에서 《닥터 노》는 007 살인번호로, 《여왕폐하
        대작전》은 007과 여왕으로 불리기도 했습니다.
      </p>
      <p className="mt-3 text-sm text-muted">
        합계 {SERIES_TOTAL}편 가운데 공식 {byActor.reduce((n, g) => n + g.films.length, 0)}
        편 · 비공식 {unofficialFilms.length}편 ·{" "}
        <Link href={FLEMING_HREF} className="text-gold hover:underline">
          원작 이언 플레밍
        </Link>
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-gold">공식 25</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          에온 프로덕션 정식 시리즈. 배우별, 개봉 연도 순입니다.
        </p>
        <div className="mt-8 space-y-10">
          {byActor.map((group) => (
            <div key={group.actorSlug}>
              <div className="mb-4 flex items-end justify-between gap-3">
                <h3 className="font-serif text-xl text-paper">
                  {group.actorKo} ({group.actorEn})
                  <span className="ml-2 text-base text-muted">
                    {group.films.length}편
                  </span>
                </h3>
                <Link
                  href={`/bonds/${group.actorSlug}`}
                  className="text-sm text-muted hover:text-gold"
                >
                  배우 페이지
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.films.map((film) => (
                  <PosterCard
                    key={film.slug}
                    title={displayFilmTitle(film)}
                    meta={`${film.year} · ${film.actorKo}${film.akaKo ? ` · 다른 제목 ${film.akaKo}` : ""}`}
                    tone={film.posterTone}
                    href={film.hasDetail ? `/films/${film.slug}` : undefined}
                    image={atmospherePlaceholder}
                    overlayOnImage
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-gold">비공식 2</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
          제작사가 다른 비공식 작품입니다. 에온 공식 시리즈 25편과는 별도
          목록입니다.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {unofficialFilms.map((film) => (
            <PosterCard
              key={film.slug}
              title={displayFilmTitle(film)}
              meta={`${film.year} · ${film.actorKo} · ${film.statusKo}${film.akaKo ? ` · ${film.akaKo}` : ""}`}
              tone={film.posterTone}
              href={`/films/${film.slug}`}
              image={atmospherePlaceholder}
              overlayOnImage
            />
          ))}
        </div>
      </section>
    </div>
  );
}
