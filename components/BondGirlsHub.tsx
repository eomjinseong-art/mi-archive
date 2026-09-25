"use client";

import { useMemo, useState } from "react";
import { PosterCard } from "@/components/PosterCard";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import {
  bondGirls,
  girlRoleKind,
  type BondGirlRoleKind,
} from "@/data/bondGirls";
import { bondGirlHeroImage, portraitOrAtmosphere } from "@/data/licensedImages";
import { girlFilmLookQuery } from "@/lib/bondGirlLook";

const FILTERS: { id: "전체" | BondGirlRoleKind | "조연·카메오"; label: string }[] =
  [
    { id: "전체", label: "전체" },
    { id: "본드걸", label: "본드걸" },
    { id: "조연·카메오", label: "조연·카메오" },
    { id: "반복 출연", label: "반복 출연" },
  ];

export function BondGirlsHub() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("전체");
  const visible = useMemo(() => {
    return bondGirls.filter((girl) => {
      const role = girlRoleKind(girl);
      if (filter === "전체") return true;
      if (filter === "조연·카메오") return role === "조연" || role === "카메오";
      return role === filter;
    });
  }, [filter]);

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-full border px-3 py-1 text-xs ${
              filter === item.id
                ? "border-gold bg-gold/10 text-gold"
                : "border-line text-muted hover:text-paper"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        {visible.length}명
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((girl) => (
          <div key={girl.slug}>
            <PosterCard
              title={`${girl.nameKo} (${girl.nameEn})`}
              meta={`${girl.nationalityKo} · ${girlRoleKind(girl)} · ${girl.filmTitleKo} · ${girl.actressKo}`}
              tone={girl.posterTone}
              image={portraitOrAtmosphere(bondGirlHeroImage(girl.slug))}
              overlayOnImage={!bondGirlHeroImage(girl.slug)}
              href={girl.hasDetail ? `/bond-girls/${girl.slug}` : undefined}
            />
            <div className="px-1">
              <ImageSearchLink
                query={girlFilmLookQuery(girl)}
                label="영화 속 모습 검색"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
