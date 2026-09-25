import { bondGirls } from "@/data/bondGirls";
import { bonds } from "@/data/bonds";
import { cars } from "@/data/cars";
import { directors } from "@/data/directors";
import { fleming } from "@/data/fleming";
import { films } from "@/data/films";
import { displayFilmTitle } from "@/data/films";
import { hotels } from "@/data/hotels";
import { issues } from "@/data/issues";
import { landmarks } from "@/data/landmarks";
import { unofficialFilms } from "@/data/unofficialFilms";
import type { SearchHit } from "@/data/types";

export function buildSearchIndex(): SearchHit[] {
  const filmHits: SearchHit[] = films.map((film) => ({
    kind: "영화",
    href: film.hasDetail ? `/films/${film.slug}` : "/films",
    title: displayFilmTitle(film),
    hint: `${film.year} · ${film.actorKo}`,
    keywords: film.akaKo ?? "",
  }));

  const carHits: SearchHit[] = cars.map((car) => ({
    kind: "차량",
    href: car.hasL2 ? `/cars/${car.slug}` : "/cars",
    title: `${car.nameKo} (${car.nameEn})`,
    hint: `${car.brandKo} · ${car.filmTitleKo}`,
  }));

  const bondHits: SearchHit[] = bonds.map((bond) => ({
    kind: "인물",
    href: bond.hasDetail ? `/bonds/${bond.slug}` : "/bonds",
    title: `${bond.nameKo} (${bond.nameEn})`,
    hint: `본드 · ${bond.years}`,
  }));

  const girlHits: SearchHit[] = bondGirls.map((girl) => ({
    kind: "인물",
    href: girl.hasDetail ? `/bond-girls/${girl.slug}` : "/bond-girls",
    title: `${girl.nameKo} (${girl.nameEn})`,
    hint: `${girl.filmTitleKo} · ${girl.actressKo}`,
    keywords: [
      girl.actressEn,
      girl.actressKo,
      girl.nameEn,
      girl.nameKo,
      "본드걸",
      girl.roleKind ?? "",
      girl.slug === "severine"
        ? "말로히 말로에 마를로 Séverine Severine Marlohe 이차"
        : "",
    ].join(" "),
  }));

  const unofficialHits: SearchHit[] = unofficialFilms.map((film) => ({
    kind: "영화",
    href: `/films/${film.slug}`,
    title: displayFilmTitle(film),
    hint: `${film.year} · 비공식 · ${film.actorKo}`,
    keywords: `${film.statusKo} ${film.akaKo ?? ""} Never Say Never Casino Royale 1967`,
  }));

  const flemingHit: SearchHit = {
    kind: "원작",
    href: "/ian-fleming",
    title: `${fleming.nameKo} (${fleming.nameEn})`,
    hint: `원작 · ${fleming.years}`,
    keywords: `이안 플레밍 Ian Fleming 소설 카지노 로얄 골든아이 ${fleming.oneLiner}`,
  };

  const directorHits: SearchHit[] = directors.map((director) => {
    const filmTitles = director.filmSlugs
      .map((slug) => films.find((film) => film.slug === slug))
      .filter((film): film is (typeof films)[number] => Boolean(film))
      .map((film) => `${film.titleKo} ${film.titleEn}`)
      .join(" ");
    return {
      kind: "감독" as const,
      href: `/directors/${director.slug}`,
      title: `${director.nameKo} (${director.nameEn})`,
      hint: `${director.years} · ${director.filmCount}편`,
      keywords: `${director.oneLiner} ${filmTitles}`,
    };
  });

  const issueHits: SearchHit[] = issues.map((issue) => ({
    kind: "이슈" as const,
    href: `/issues/${issue.slug}`,
    title: issue.title,
    hint: issue.teaser,
    keywords: issue.excerpt,
  }));

  const landmarkHits: SearchHit[] = landmarks.map((place) => ({
    kind: "명소" as const,
    href: `/films/${place.filmSlug}`,
    title: `${place.placeKo} (${place.placeEn})`,
    hint: `${place.city} · ${place.country}`,
    keywords: `${place.mapsQuery} ${place.filmSlug} ${place.whyPopular}`,
  }));

  const hotelHits: SearchHit[] = hotels.map((hotel) => ({
    kind: "호텔" as const,
    href: `/hotels#${hotel.slug}`,
    title: `${hotel.nameKo} (${hotel.nameEn})`,
    hint: `${hotel.city} · ${hotel.country}`,
    keywords: hotel.mapsQuery,
  }));

  const criticHit: SearchHit = {
    kind: "평론",
    href: "/critics/lee-dong-jin",
    title: "이동진",
    hint: "국내 평론 · 007",
    keywords: "Lee Dong-jin 왓챠 씨네21 스카이폴",
  };

  const mapHit: SearchHit = {
    kind: "명소",
    href: "/map",
    title: "007 세계 지도",
    hint: "촬영지 핀",
    keywords: "지도 map OSM 랜드마크 호텔",
  };

  const recordsHit: SearchHit = {
    kind: "기록",
    href: "/records",
    title: "기록 · 흥행과 관객",
    hint: "세계 박스오피스 · KOBIS",
    keywords:
      "기록 records box office Skyfall 스카이폴 관객 KOBIS 흥행 명목 물가",
  };

  const craigHit: SearchHit = {
    kind: "인물",
    href: "/craig",
    title: "크레이그 허브",
    hint: "대니얼 크레이그 · 다섯 편",
    keywords: "Daniel Craig 크레이그 리부트 카지노 로얄 스카이폴",
  };

  const videosHit: SearchHit = {
    kind: "영상",
    href: "/videos",
    title: "공식 영상 · @007",
    hint: "YouTube 공식 채널",
    keywords: "유튜브 YouTube 007 예고편 비하인드 Shorts 재생목록",
  };

  return [
    ...filmHits,
    ...unofficialHits,
    flemingHit,
    ...carHits,
    ...bondHits,
    ...girlHits,
    ...directorHits,
    ...issueHits,
    ...landmarkHits,
    ...hotelHits,
    criticHit,
    mapHit,
    recordsHit,
    craigHit,
    videosHit,
  ];
}

export function searchArchive(query: string, index = buildSearchIndex()): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  return index
    .filter((item) => {
      const blob =
        `${item.title} ${item.hint} ${item.kind} ${item.keywords ?? ""}`.toLowerCase();
      return blob.includes(q);
    })
    .slice(0, 12);
}
