import type { Metadata } from "next";
import Link from "next/link";
import { hotels, hotelsForFilm } from "@/data/hotels";
import { displayFilmTitle, films, getFilm } from "@/data/films";
import { googleImagesUrl, googleMapsSearchUrl } from "@/lib/googleImages";

export const metadata: Metadata = {
  title: "호텔",
};

export default function HotelsPage() {
  const filmsWithHotels = films.filter(
    (film) => hotelsForFilm(film.slug).length > 0,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs text-gold">
        <Link href="/locations">명소</Link>
        {" · "}
        <Link href="/map">지도</Link>
      </p>
      <h1 className="mt-2 font-serif text-3xl text-paper">영화 속 호텔</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        화면에 실제 이름이 남는 숙소와 별장입니다. 마이애미의 폰텐블로,
        카를로비바리의 푸프, 사르데냐의 칼라 디 볼페.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {filmsWithHotels.map((film) => (
          <Link
            key={film.slug}
            href={`/films/${film.slug}`}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-gold hover:text-gold"
          >
            {film.titleKo}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {hotels.map((hotel) => (
          <article
            id={hotel.slug}
            key={hotel.slug}
            className="scroll-mt-24 rounded-lg border border-line bg-card p-5"
          >
            <h2 className="font-serif text-xl text-paper">
              {hotel.nameKo} ({hotel.nameEn})
            </h2>
            {hotel.screenNameKo ? (
              <p className="mt-1 text-xs text-muted">화면 · {hotel.screenNameKo}</p>
            ) : null}
            <p className="mt-1 text-xs text-gold">
              {hotel.city} · {hotel.country}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{hotel.sceneNote}</p>
            <p className="mt-2 text-sm leading-6 text-paper">{hotel.fameNote}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hotel.filmSlugs.map((slug) => {
                const film = getFilm(slug);
                if (!film) return null;
                return (
                  <Link
                    key={slug}
                    href={`/films/${slug}`}
                    className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold"
                  >
                    {displayFilmTitle(film)}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-xs">
              <a
                href={googleMapsSearchUrl(hotel.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                지도에서 찾기
              </a>
              <a
                href={googleImagesUrl(`${hotel.nameEn} ${hotel.city} James Bond`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                구글에서 이미지 보기
              </a>
            </div>
            {hotel.sources.length > 0 ? (
              <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                {hotel.sources.slice(0, 3).map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    {source.label}
                  </a>
                ))}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
