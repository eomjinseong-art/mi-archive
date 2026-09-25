import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveProse } from "@/components/ArchiveProse";
import { CreditedMedia } from "@/components/CreditedMedia";
import { Fn, Sources } from "@/components/Sources";
import { fleming, flemingDetail, flemingNovels } from "@/data/fleming";
import { displayFilmTitle, getFilm } from "@/data/films";
import { atmospherePlaceholder } from "@/data/licensedImages";

export const metadata: Metadata = {
  title: `${fleming.nameKo} (${fleming.nameEn})`,
};

export default function IanFlemingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={atmospherePlaceholder}
        tone={fleming.posterTone}
        alt={`${fleming.nameKo} (${fleming.nameEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={{ title: fleming.nameKo, meta: fleming.nameEn }}
      />
      <p className="mt-4 text-sm text-gold">원작 · {fleming.years}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {fleming.nameKo} ({fleming.nameEn})
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {fleming.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">생애</h2>
        <ArchiveProse paragraphs={flemingDetail.bio} footnote={{ index: 0, n: 2 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">해군 정보부</h2>
        <ArchiveProse paragraphs={flemingDetail.naval} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">첫 소설 《카지노 로얄》</h2>
        <ArchiveProse
          paragraphs={flemingDetail.firstNovel}
          footnote={{ index: 0, n: 3 }}
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">본드 소설 목록</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          장편 12권과 단편집 2권. 제목은 영화에서 쓰인 표기입니다.
          <Fn n={4} />
        </p>
        <ul className="mt-3 space-y-3">
          {flemingNovels.map((novel) => {
            const film = novel.filmSlug ? getFilm(novel.filmSlug) : undefined;
            return (
              <li
                key={novel.titleEn}
                className="rounded-lg border border-line p-4"
              >
                <p className="text-xs text-gold">
                  {novel.year} · {novel.kind}
                </p>
                <p className="mt-1 font-serif text-paper">
                  {novel.titleKo} ({novel.titleEn})
                </p>
                <p className="mt-2 text-sm leading-7 text-paper">{novel.note}</p>
                {film ? (
                  <p className="mt-2 text-sm">
                    <Link
                      href={`/films/${film.slug}`}
                      className="text-gold hover:underline"
                    >
                      공식 영화 · {displayFilmTitle(film)} →
                    </Link>
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">에온 영화와의 관계</h2>
        <ArchiveProse paragraphs={flemingDetail.eon} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">유산</h2>
        <ArchiveProse
          paragraphs={flemingDetail.legacy}
          footnote={{ index: 1, n: 5 }}
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">관련</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {flemingDetail.related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold"
            >
              {item.label} →
            </Link>
          ))}
        </div>
      </section>

      <Sources sources={flemingDetail.sources} footnotes={flemingDetail.footnotes} />
    </article>
  );
}
