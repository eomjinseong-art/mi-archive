import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveProse } from "@/components/ArchiveProse";
import { CreditedMedia } from "@/components/CreditedMedia";
import { GossipBoard } from "@/components/GossipBoard";
import { NationalityLine } from "@/components/NationalityLine";
import { Fn, Sources } from "@/components/Sources";
import { bondGirlDetails } from "@/data/bondGirlDetails";
import { bondGirls, girlRoleKind } from "@/data/bondGirls";
import { quoteGroups } from "@/data/quotes";
import { displayFilmTitle, getFilm } from "@/data/films";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { bondGirlHeroImage, portraitOrAtmosphere } from "@/data/licensedImages";
import { girlFilmLookQuery } from "@/lib/bondGirlLook";

export function generateStaticParams() {
  return bondGirls.filter((g) => g.hasDetail).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const girl = bondGirls.find((g) => g.slug === slug);
  if (!girl) return { title: "본드걸" };
  return { title: `${girl.nameKo} (${girl.nameEn})` };
}

export default async function BondGirlDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const girl = bondGirls.find((g) => g.slug === slug && g.hasDetail);
  const detail = bondGirlDetails[slug];
  if (!girl || !detail) notFound();
  const film = getFilm(girl.filmSlug);
  const quotes =
    quoteGroups.find((g) => g.filmSlug === girl.filmSlug)?.items.slice(0, 3) ??
    [];
  const isVesper = slug === "vesper-lynd";
  const isMadeleine = slug === "madeleine-swann";
  const isTracy = slug === "tracy-di-vicenzo";
  const isSeverine = slug === "severine";

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={portraitOrAtmosphere(bondGirlHeroImage(girl.slug))}
        tone={girl.posterTone}
        alt={
          bondGirlHeroImage(girl.slug)?.alt ??
          `${girl.nameKo} (${girl.nameEn})`
        }
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={
          bondGirlHeroImage(girl.slug)
            ? undefined
            : { title: girl.nameKo, meta: `${girl.actressKo} · ${girl.filmTitleKo}` }
        }
      />
      <h1 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">
        {girl.nameKo} ({girl.nameEn})
      </h1>
      <p className="mt-2 text-sm text-paper">
        {girl.actressKo} ({girl.actressEn})
      </p>
      <NationalityLine ko={girl.nationalityKo} en={girl.nationalityEn} />
      <p className="mt-1 text-xs text-muted">
        {film ? displayFilmTitle(film) : girl.filmTitleKo}
        <span className="ml-2">{girlRoleKind(girl)}</span>
      </p>
      <div className="mt-4">
        <ImageSearchLink
          query={girlFilmLookQuery(girl)}
          label="영화 속 모습 검색"
        />
      </div>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {girl.oneLiner}
        <Fn n={1} />
      </p>

      {isVesper && (
        <div className="mt-6 rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — 베네치아와 엔딩의 대사. 첫 시청 전이라면 앞부분만
          읽어도 됩니다.
        </div>
      )}

      {isMadeleine && (
        <div className="mt-6 rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — 마테라와 가족, 섬의 선택. 스펙터만 본 뒤라면 앞부분만
          읽어도 됩니다.
        </div>
      )}

      {isTracy && (
        <div className="mt-6 rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — 결혼과 엔딩의 총. 첫 시청 전이라면 앞부분만 읽어도
          됩니다.
        </div>
      )}

      {isSeverine && (
        <div className="mt-6 rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — 실바의 섬에서 배역이 닫히는 방식. 첫 시청 전이라면
          개요와 배우 노트만 읽어도 됩니다.
        </div>
      )}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">캐릭터 개요</h2>
        <ArchiveProse
          paragraphs={detail.overview}
          footnote={{ index: 0, n: 2 }}
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">배우 노트</h2>
        <ArchiveProse paragraphs={detail.actressNotes} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">화면에서</h2>
        <ArchiveProse
          paragraphs={detail.onScreen}
          footnote={{ index: 0, n: 3 }}
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">문화적 잔상</h2>
        <ArchiveProse paragraphs={detail.culturalAfterimage} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연속성</h2>
        <ArchiveProse
          paragraphs={detail.continuity}
          footnote={{ index: 0, n: 4 }}
        />
      </section>

      {quotes.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">관련 명대사</h2>
          <ul className="mt-3 space-y-3">
            {quotes.map((q) => (
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
          <Link href="/quotes" className="mt-3 inline-block text-sm text-gold">
            인용 모음
          </Link>
        </section>
      )}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">가십 보드</h2>
        <p className="mt-2 text-xs text-muted">
          라벨: 확인됨 / 제작진 인터뷰 / 팬 설 / 미확인
        </p>
        <div className="mt-4">
          <GossipBoard items={detail.gossip} />
        </div>
      </section>

      {film && (
        <p className="mt-8 text-sm">
          {film.hasDetail ? (
            <Link href={`/films/${film.slug}`} className="text-gold">
              {displayFilmTitle(film)} →
            </Link>
          ) : (
            <Link href="/films" className="text-gold">
              {displayFilmTitle(film)} · 영화 허브
            </Link>
          )}
        </p>
      )}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">관련</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {detail.related.map((item) => (
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

      <p className="mt-6 text-sm">
        <Link href="/bond-girls" className="text-gold">
          본드걸 허브
        </Link>
      </p>

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
    </article>
  );
}
