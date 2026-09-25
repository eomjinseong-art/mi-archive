import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { CriticNotes } from "@/components/CriticNotes";
import { HotelList, LandmarkList } from "@/components/PlaceLists";
import { Fn, Sources } from "@/components/Sources";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { getBond } from "@/data/bonds";
import { getBondGirl } from "@/data/bondGirls";
import { getDirectorByFilmSlug } from "@/data/directors";
import type { FilmDetail } from "@/data/filmDetails";
import { FilmPrevNext } from "@/components/FilmPrevNext";
import { RelatedLinks } from "@/components/RelatedLinks";
import { displayFilmTitle, getFilm, officialNeighbors } from "@/data/films";
import { secondaryRelated } from "@/lib/relatedLinks";
import { hotelsForFilm } from "@/data/hotels";
import { atmospherePlaceholder } from "@/data/licensedImages";
import { getIssue, filmIssueSlug, liveIssueTeaser } from "@/data/issues";
import { landmarksForFilm } from "@/data/landmarks";
import { leeNotesForFilm } from "@/data/leeDongjin";
import { otherVehiclesForFilm } from "@/data/otherVehicles";
import { FilmVehiclesBlock } from "@/components/FilmVehiclesBlock";

export function FilmDetailView({ detail }: { detail: FilmDetail }) {
  const film = getFilm(detail.slug);
  if (!film) return null;
  const director = getDirectorByFilmSlug(film.slug);
  const { prev, next } = officialNeighbors(film.slug);
  const landmarks = landmarksForFilm(film.slug);
  const filmHotels = hotelsForFilm(film.slug);
  const criticNotes = leeNotesForFilm(film.slug);
  const extras = otherVehiclesForFilm(film.slug);
  const linkedIssue = getIssue(filmIssueSlug[film.slug] ?? "");
  const related = secondaryRelated(
    [
      { href: "/ian-fleming", label: "원작 · 이언 플레밍" },
      ...(director
        ? [
            {
              href: `/directors/${director.slug}`,
              label: `감독 · ${director.nameKo} (${director.nameEn})`,
            },
          ]
        : []),
      ...(film.slug === "casino-royale-2006"
        ? [{ href: "/films/casino-royale-1967", label: "카지노 로얄 (1967) · 비공식" }]
        : []),
      ...(film.slug === "thunderball" || film.slug === "octopussy"
        ? [
            {
              href: "/films/never-say-never-again",
              label: "네버 세이 네버 어게인 · 비공식",
            },
          ]
        : []),
      ...detail.related,
    ],
    { prev, next },
  );

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
        {film.year} · 감독{" "}
        {director ? (
          <Link href={`/directors/${director.slug}`} className="hover:underline">
            {detail.director}
          </Link>
        ) : (
          detail.director
        )}{" "}
        · {film.actorKo} ({film.actorEn}) · {detail.runtime}
      </p>
      <p className="mt-1 text-xs text-muted">한국 개봉 {detail.krRelease}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {displayFilmTitle(film)}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {detail.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <div className="rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — {detail.spoilerWarning}
        </div>
        <h2 className="mt-5 font-serif text-xl text-gold">줄거리</h2>
        <div className="mt-3 space-y-4">
          {detail.plot.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-paper">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">출연 · 본드걸</h2>
        <ul className="mt-3 space-y-3">
          {detail.cast.map((person) => {
            const name = (
              <span className="text-sm text-paper">
                {person.nameKo} ({person.nameEn})
              </span>
            );
            const href = person.slug
              ? getBondGirl(person.slug)
                ? `/bond-girls/${person.slug}`
                : getBond(person.slug)
                  ? `/bonds/${person.slug}`
                  : undefined
              : undefined;
            return (
              <li
                key={person.nameEn}
                className="rounded-lg border border-line p-4"
              >
                <p>
                  {href ? <Link href={href}>{name}</Link> : name}
                  <span className="ml-2 text-xs text-muted">{person.role}</span>
                </p>
                {person.note && (
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {person.note}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <FilmVehiclesBlock
        cars={detail.cars}
        extras={extras}
        filmTitleKo={film.titleKo}
        filmTitleEn={film.titleEn}
      />

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">명대사</h2>
        <ul className="mt-3 space-y-3">
          {detail.quotes.map((q) => (
            <li key={q.textEn} className="rounded-lg border border-line p-4">
              {q.spoiler && (
                <span className="mb-2 inline-block text-[11px] text-gold">
                  스포일러
                </span>
              )}
              <p className="font-serif text-paper">“{q.textKo}”</p>
              <p className="mt-1 text-xs text-muted">
                {q.speaker} · {q.textEn}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">공식 예고편</h2>
        <div className="mt-3">
          <YouTubeEmbed
            id={detail.trailerYoutubeId}
            title={`${displayFilmTitle(film)} 예고편`}
          />
        </div>
      </section>

      {landmarks.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">영화 속 명소</h2>
          <LandmarkList items={landmarks} />
          <Link href="/locations" className="mt-3 inline-block text-sm text-gold">
            명소 허브
          </Link>
          <Link
            href={`/map?film=${film.slug}`}
            className="mt-3 ml-4 inline-block text-sm text-gold"
          >
            지도에서 보기
          </Link>
        </section>
      )}

      {filmHotels.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">영화 속 호텔</h2>
          <HotelList items={filmHotels} />
        </section>
      )}

      <CriticNotes notes={criticNotes} />

      {detail.issuesTeaser && (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">이슈</h2>
          <p className="mt-2 text-sm text-muted">
            {liveIssueTeaser(detail.issuesTeaser)}
          </p>
          <Link
            href={linkedIssue ? `/issues/${linkedIssue.slug}` : "/issues"}
            className="mt-2 inline-block text-sm text-gold"
          >
            {linkedIssue ? linkedIssue.title : "이슈 허브"}
          </Link>
        </section>
      )}

      <Sources sources={detail.sources} footnotes={detail.footnotes} />

      <FilmPrevNext prev={prev} next={next} />
      <RelatedLinks items={related} />
    </article>
  );
}
