import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveProse } from "@/components/ArchiveProse";
import { CreditedMedia } from "@/components/CreditedMedia";
import { GossipBoard } from "@/components/GossipBoard";
import { NationalityLine } from "@/components/NationalityLine";
import { Fn, Sources } from "@/components/Sources";
import { bondDetails } from "@/data/bondDetails";
import { bonds } from "@/data/bonds";
import { displayFilmTitle, films } from "@/data/films";
import {
  CraigArticleSummaries,
  CraigFilmography,
} from "@/components/CraigDeepSections";
import { bondImages, portraitOrAtmosphere } from "@/data/licensedImages";

export function generateStaticParams() {
  return bonds.filter((b) => b.hasDetail).map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bond = bonds.find((b) => b.slug === slug);
  if (!bond) return { title: "본드" };
  return { title: `${bond.nameKo} (${bond.nameEn})` };
}

export default async function BondDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bond = bonds.find((b) => b.slug === slug && b.hasDetail);
  const detail = bondDetails[slug];
  if (!bond || !detail) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={portraitOrAtmosphere(bondImages[bond.slug])}
        tone={bond.posterTone}
        alt={bondImages[bond.slug]?.alt ?? `${bond.nameKo} (${bond.nameEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
      />
      <h1 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">
        {bond.nameKo} ({bond.nameEn})
      </h1>
      <NationalityLine
        ko={bond.nationalityKo}
        en={bond.nationalityEn}
        footnote={
          slug === "sean-connery" || slug === "timothy-dalton" ? 5 : undefined
        }
      />
      <p className="mt-1 text-xs text-muted">
        {bond.years} · 공식 {bond.filmCount}편
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {bond.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">이 배우의 본드</h2>
        <ArchiveProse paragraphs={detail.bio} footnote={{ index: 1, n: 2 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">시대의 문법</h2>
        <ArchiveProse
          paragraphs={detail.eraContext}
          footnote={{ index: 3, n: 3 }}
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연기 노트</h2>
        <ArchiveProse paragraphs={detail.performanceNotes} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">작품별 노트</h2>
        <ul className="mt-3 space-y-3">
          {detail.filmNotes.map((note) => {
            const film = films.find((f) => f.slug === note.slug);
            if (!film) return null;
            const title = `${displayFilmTitle(film)} · ${film.year}`;
            return (
              <li key={note.slug} className="rounded-lg border border-line p-4">
                <p className="text-sm text-gold">
                  {film.hasDetail ? (
                    <Link href={`/films/${film.slug}`} className="hover:underline">
                      {title}
                    </Link>
                  ) : (
                    <Link href="/films" className="hover:underline">
                      {title}
                    </Link>
                  )}
                </p>
                <p className="mt-2 text-sm leading-7 text-paper">{note.text}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연속성</h2>
        <ArchiveProse
          paragraphs={detail.continuity}
          footnote={{ index: 0, n: 4 }}
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">가십 보드</h2>
        <p className="mt-2 text-xs text-muted">
          라벨: 확인됨 / 제작진 인터뷰 / 팬 설 / 미확인
        </p>
        <div className="mt-4">
          <GossipBoard items={detail.gossip} />
        </div>
      </section>

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

      {slug === "daniel-craig" ? (
        <>
          <p className="mt-8 text-sm">
            <Link href="/craig" className="text-gold">
              크레이그 허브
            </Link>
          </p>
          <CraigFilmography />
          <CraigArticleSummaries />
        </>
      ) : null}

      <p className="mt-6 text-sm">
        <Link href="/bonds" className="text-gold">
          본드 허브
        </Link>
      </p>

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
    </article>
  );
}
