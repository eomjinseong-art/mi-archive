import type { Metadata } from "next";
import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import {
  CraigArticleSummaries,
  CraigBondFilmCards,
  CraigEraSignificance,
  CraigFilmography,
  CraigRicherBio,
} from "@/components/CraigDeepSections";
import { NationalityLine } from "@/components/NationalityLine";
import { Sources } from "@/components/Sources";
import { getBond } from "@/data/bonds";
import { craigDeepSources } from "@/data/craigDeepDive";
import { bondImages, portraitOrAtmosphere } from "@/data/licensedImages";

export const metadata: Metadata = {
  title: "크레이그",
};

export default function CraigHubPage() {
  const bond = getBond("daniel-craig");
  if (!bond) return null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[11px] uppercase tracking-wide text-gold">크레이그</p>
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
      <NationalityLine ko={bond.nationalityKo} en={bond.nationalityEn} />
      <p className="mt-1 text-xs text-muted">
        {bond.years} · 공식 {bond.filmCount}편
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">{bond.oneLiner}</p>
      <p className="mt-3 text-sm">
        <Link href="/bonds/daniel-craig" className="text-gold">
          배우 상세 · 가십 보드
        </Link>
      </p>

      <CraigEraSignificance />
      <CraigRicherBio />

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">공식 본드 5편</h2>
        <p className="mt-2 text-xs text-muted">
          카지노 로얄부터 노 타임 투 다이까지.
        </p>
        <CraigBondFilmCards />
      </section>

      <CraigFilmography />
      <CraigArticleSummaries />

      <p className="mt-8 text-sm">
        <Link href="/bonds" className="text-gold">
          본드 허브
        </Link>
      </p>

      <Sources sources={craigDeepSources} />
    </article>
  );
}
