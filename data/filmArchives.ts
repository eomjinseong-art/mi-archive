import { archiveNetworkUrl } from "@/lib/site";

/**
 * 한 편짜리 영화 아카이브 세 곳. 2026-10-03에 각 주소와 차량 페이지가 HTTP 200인 것을 확인했습니다.
 */
export const FILM_ARCHIVES = [
  {
    id: "fvf",
    label: "포드 V 페라리 아카이브",
    url: process.env.NEXT_PUBLIC_FVF_ARCHIVE_URL ?? "https://fordvferrari-archive.vercel.app",
    blurb: "《포드 V 페라리》(2019). 1966년 르망의 GT40 Mk II와 페라리 330 P3, 실화와 영화의 차이.",
  },
  {
    id: "rush",
    label: "러쉬 아카이브",
    url: process.env.NEXT_PUBLIC_RUSH_ARCHIVE_URL ?? "https://rush-archive.vercel.app",
    blurb: "《러시: 더 라이벌》(2013). 1976년 F1, 헌트의 맥라렌 M23과 라우다의 페라리 312T2.",
  },
  {
    id: "gt",
    label: "그란 투리스모 아카이브",
    url: process.env.NEXT_PUBLIC_GT_ARCHIVE_URL ?? "https://granturismo-archive.vercel.app",
    blurb: "《그란 투리스모》(2023). 게이머 출신 레이서의 실화와 닛산 GT-R GT3, 르망의 차.",
  },
] as const;

export type FilmArchiveId = (typeof FILM_ARCHIVES)[number]["id"];

export type FilmArchiveCar = {
  archive: FilmArchiveId;
  brand: string;
  slug: string;
  nameKo: string;
  nameEn: string;
};

/** 이 아카이브와 브랜드가 겹치는 차만 둡니다. */
export const FILM_ARCHIVE_CARS: FilmArchiveCar[] = [
  { archive: "gt", brand: "Lamborghini", slug: "lamborghini-huracan-gt3", nameKo: "람보르기니 우라칸 GT3", nameEn: "Lamborghini Huracán GT3" },
  { archive: "gt", brand: "Lamborghini", slug: "lamborghini-huracan-sto", nameKo: "람보르기니 우라칸 STO", nameEn: "Lamborghini Huracán STO" },
  { archive: "gt", brand: "Honda", slug: "honda-nsx-r", nameKo: "혼다 NSX-R", nameEn: "Honda NSX Type R" },
  { archive: "gt", brand: "Audi", slug: "audi-r8-lms-evo", nameKo: "아우디 R8 LMS 에보", nameEn: "Audi R8 LMS Evo" },
];

function archiveOf(id: FilmArchiveId) {
  return FILM_ARCHIVES.find((a) => a.id === id)!;
}

export function filmArchiveCarsForBrand(brand: string) {
  return FILM_ARCHIVE_CARS.filter((car) => car.brand === brand).map((car) => {
    const archive = archiveOf(car.archive);
    return {
      ...car,
      siteLabel: archive.label,
      href: archiveNetworkUrl(archive.url, `/cars/${car.slug}`, "car"),
    };
  });
}
