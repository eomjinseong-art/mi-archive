import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { FilmPrevNext } from "@/components/FilmPrevNext";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Fn, Sources } from "@/components/Sources";
import { atmospherePlaceholder } from "@/data/licensedImages";
import {
  getUnofficialFilm,
  unofficialNeighbors,
  type UnofficialFilmDetail,
} from "@/data/unofficialFilms";
import { displayFilmTitle } from "@/data/films";
import { otherVehiclesForFilm } from "@/data/otherVehicles";
import { FilmVehiclesBlock } from "@/components/FilmVehiclesBlock";
import { secondaryRelated } from "@/lib/relatedLinks";

export function UnofficialFilmView({ detail }: { detail: UnofficialFilmDetail }) {
  const film = getUnofficialFilm(detail.slug);
  if (!film) return null;
  const { prev, next } = unofficialNeighbors(film.slug);
  const related = secondaryRelated(detail.related, { prev, next }, ["/films"]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={atmospherePlaceholder}
        tone={film.posterTone}
        alt={`${film.titleKo} (${film.titleEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={{ title: film.titleKo, meta: film.titleEn }}
      />
      <p className="mt-4 text-sm text-gold">
        {film.year} · 비공식 · {detail.director} · {film.actorKo} ({film.actorEn}){" "}
        · {detail.runtime}
      </p>
      <p className="mt-1 text-xs text-muted">{detail.krRelease}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {displayFilmTitle(film)}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {detail.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">왜 비공식인가</h2>
        <div className="mt-3 space-y-4">
          {detail.status.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-sm leading-7 text-paper"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — {detail.spoilerWarning}
        </div>
        <h2 className="mt-5 font-serif text-xl text-gold">줄거리</h2>
        <div className="mt-3 space-y-4">
          {detail.plot.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-sm leading-7 text-paper"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">출연</h2>
        <ul className="mt-3 space-y-3">
          {detail.cast.map((person) => (
            <li
              key={person.nameEn}
              className="rounded-lg border border-line p-4"
            >
              <p>
                <span className="text-sm text-paper">
                  {person.nameKo} ({person.nameEn})
                </span>
                <span className="ml-2 text-xs text-muted">{person.role}</span>
              </p>
              {person.note ? (
                <p className="mt-2 text-sm leading-6 text-muted">{person.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <FilmVehiclesBlock
        extras={otherVehiclesForFilm(film.slug)}
        showSisterCta={false}
        filmTitleKo={film.titleKo}
        filmTitleEn={film.titleEn}
      />

      <Sources sources={detail.sources} footnotes={detail.footnotes} />

      <FilmPrevNext prev={prev} next={next} unofficial />
      <p className="mt-3 text-sm">
        <Link href="/films" className="text-gold">
          영화 허브 · 공식 25와 비공식 2
        </Link>
      </p>
      <RelatedLinks items={related} />
    </article>
  );
}
