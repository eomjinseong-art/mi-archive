import type { Metadata } from "next";
import Link from "next/link";
import { PosterCard } from "@/components/PosterCard";
import { bonds } from "@/data/bonds";
import { bondImages, portraitOrAtmosphere } from "@/data/licensedImages";

export const metadata: Metadata = {
  title: "본드",
};

export default function BondsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">본드</h1>
      <p className="mt-2 text-sm text-muted">
        공식 시리즈를 맡은 여섯 배우. 숀 코너리의 공식 편수는 여섯입니다.
        1983년 《네버 세이 네버 어게인》은 비공식입니다.
      </p>
      <p className="mt-4">
        <Link
          href="/craig"
          className="inline-flex rounded-full border border-gold/50 px-3 py-1 text-xs text-gold hover:bg-gold/10"
        >
          크레이그 허브
        </Link>
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bonds.map((bond) => (
          <PosterCard
            key={bond.slug}
            title={`${bond.nameKo} (${bond.nameEn})`}
            meta={`${bond.nationalityKo} · ${bond.years} · ${bond.filmCount}편`}
            tone={bond.posterTone}
            image={portraitOrAtmosphere(bondImages[bond.slug])}
            href={bond.hasDetail ? `/bonds/${bond.slug}` : undefined}
          />
        ))}
      </div>
    </div>
  );
}
