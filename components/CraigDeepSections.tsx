import Link from "next/link";
import { ArchiveProse } from "@/components/ArchiveProse";
import {
  craigArticleSummaries,
  craigBondSlugs,
  craigEraSignificance,
  craigFilmography,
  craigRicherBio,
} from "@/data/craigDeepDive";
import { displayFilmTitle, films } from "@/data/films";

export function CraigBondFilmCards() {
  const items = craigBondSlugs
    .map((slug) => films.find((film) => film.slug === slug))
    .filter((film): film is (typeof films)[number] => Boolean(film));

  return (
    <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((film) => (
        <li key={film.slug} className="rounded-lg border border-line p-4">
          <p className="text-xs text-gold">
            {film.year} · 공식 본드
          </p>
          <Link
            href={`/films/${film.slug}`}
            className="mt-1 block font-serif text-base text-paper hover:text-gold"
          >
            {displayFilmTitle(film)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CraigRicherBio() {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">한국어 전기</h2>
      <ArchiveProse paragraphs={craigRicherBio} />
    </section>
  );
}

export function CraigEraSignificance() {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">시대의 의미</h2>
      <ArchiveProse paragraphs={craigEraSignificance} />
    </section>
  );
}

export function CraigFilmography() {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">필모그래피</h2>
      <p className="mt-2 text-xs text-muted">
        본드 다섯 편과, 그 전후를 설명하는 대표작입니다.
      </p>
      <ol className="mt-4 space-y-3">
        {craigFilmography.map((item) => (
          <li
            key={`${item.year}-${item.titleEn}`}
            className="rounded-lg border border-line p-4"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">
              {item.year} · {item.kind}
            </p>
            <p className="mt-1 font-serif text-base text-paper">
              {item.href ? (
                <Link href={item.href} className="hover:text-gold">
                  {item.titleKo} ({item.titleEn})
                </Link>
              ) : (
                `${item.titleKo} (${item.titleEn})`
              )}
            </p>
            <p className="mt-2 text-sm leading-7 text-muted">{item.summary}</p>
            <a
              href={item.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-gold hover:underline"
            >
              {item.source.label} ↗
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CraigArticleSummaries() {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">기사 · 위키 요약</h2>
      <p className="mt-2 text-xs text-muted">
        출처를 읽고 한국어로 요약한 글입니다.
      </p>
      <ul className="mt-4 space-y-3">
        {craigArticleSummaries.map((item) => (
          <li key={item.source.href} className="rounded-lg border border-line p-4">
            <h3 className="font-serif text-base text-paper">{item.titleKo}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{item.summary}</p>
            <a
              href={item.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-gold hover:underline"
            >
              {item.source.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
