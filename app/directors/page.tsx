import type { Metadata } from "next";
import Link from "next/link";
import { PosterCard } from "@/components/PosterCard";
import { directors } from "@/data/directors";
import { portraitOrAtmosphere } from "@/data/licensedImages";

export const metadata: Metadata = {
  title: "감독",
};

export default function DirectorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">감독</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        에온 공식 25편을 연출한 열두 사람. 배우가 바뀌어도 같은 손을 남긴
        이력이 있습니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directors.map((director) => (
          <PosterCard
            key={director.slug}
            title={`${director.nameKo} (${director.nameEn})`}
            meta={`${director.nationalityKo} · ${director.years} · ${director.filmCount}편`}
            tone={director.posterTone}
            href={`/directors/${director.slug}`}
            image={portraitOrAtmosphere(director.image)}
          />
        ))}
      </div>
      <p className="mt-8 text-sm">
        <Link href="/films" className="text-gold">
          영화 타임라인
        </Link>
      </p>
    </div>
  );
}
