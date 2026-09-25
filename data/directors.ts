import { directorImages } from "./licensedImages";
import type { Footnote, LicensedImage, Source } from "./types";

export type Director = {
  slug: string;
  nameKo: string;
  nameEn: string;
  years: string;
  filmCount: number;
  filmSlugs: string[];
  oneLiner: string;
  posterTone: string;
  image?: LicensedImage;
  nationalityKo: string;
  nationalityEn?: string;
};

export type DirectorDetail = {
  slug: string;
  bio: string[];
  craft: string[];
  filmNotes: { slug: string; text: string }[];
  continuity: string[];
  related: { href: string; label: string }[];
  sources: Source[];
  footnotes: Footnote[];
};

export const directors: Director[] = [
  {
    slug: "terence-young",
    nameKo: "테렌스 영",
    nameEn: "Terence Young",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1962–1965",
    filmCount: 3,
    filmSlugs: ["dr-no", "from-russia-with-love", "thunderball"],
    oneLiner: "정장과 이름 소개. 제임스 본드를 처음 스크린에 올린 감독.",
    posterTone:
      "linear-gradient(165deg,#1c3a2e 0%,#0B0D10 48%,#c6a75e22 100%)",
    image: directorImages["terence-young"],
  },
  {
    slug: "guy-hamilton",
    nameKo: "가이 해밀턴",
    nameEn: "Guy Hamilton",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1964–1974",
    filmCount: 4,
    filmSlugs: [
      "goldfinger",
      "diamonds-are-forever",
      "live-and-let-die",
      "the-man-with-the-golden-gun",
    ],
    oneLiner: "Q 브리핑과 은색 DB5. 《골드핑거》로 본드 문법을 남긴 감독.",
    posterTone:
      "linear-gradient(165deg,#4a3b12 0%,#0B0D10 45%,#C6A75E44 100%)",
    image: directorImages["guy-hamilton"],
  },
  {
    slug: "lewis-gilbert",
    nameKo: "루이스 길버트",
    nameEn: "Lewis Gilbert",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1967–1979",
    filmCount: 3,
    filmSlugs: ["you-only-live-twice", "the-spy-who-loved-me", "moonraker"],
    oneLiner: "화산 기지, 해저 유조선, 우주 정거장. 세트를 세계 규모로 키운 감독.",
    posterTone:
      "linear-gradient(165deg,#10283a 0%,#0B0D10 50%,#3aa0c622 100%)",
    image: directorImages["lewis-gilbert"],
  },
  {
    slug: "peter-hunt",
    nameKo: "피터 헌트",
    nameEn: "Peter Hunt",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1969",
    filmCount: 1,
    filmSlugs: ["on-her-majestys-secret-service"],
    oneLiner: "편집실에서 연출로. 결혼과 상실을 정면으로 찍은 한 편.",
    posterTone:
      "linear-gradient(165deg,#2a2040 0%,#0B0D10 50%,#8a6ac622 100%)",
    image: directorImages["peter-hunt"],
  },
  {
    slug: "john-glen",
    nameKo: "존 글렌",
    nameEn: "John Glen",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1981–1989",
    filmCount: 5,
    filmSlugs: [
      "for-your-eyes-only",
      "octopussy",
      "a-view-to-a-kill",
      "the-living-daylights",
      "licence-to-kill",
    ],
    oneLiner: "공식 시리즈에서 가장 많은 다섯 편. 무어의 끝과 달튼의 시작.",
    posterTone:
      "linear-gradient(165deg,#1a3040 0%,#0B0D10 50%,#5aa0b022 100%)",
    image: directorImages["john-glen"],
  },
  {
    slug: "martin-campbell",
    nameKo: "마틴 캠벨",
    nameEn: "Martin Campbell",
    nationalityKo: "뉴질랜드",
    nationalityEn: "New Zealand",
    years: "1995, 2006",
    filmCount: 2,
    filmSlugs: ["goldeneye", "casino-royale-2006"],
    oneLiner: "두 번의 출발. 공백 뒤의 브로스넌, 리부트의 크레이그.",
    posterTone:
      "linear-gradient(165deg,#3a3010 0%,#0B0D10 50%,#C6A75E33 100%)",
    image: directorImages["martin-campbell"],
  },
  {
    slug: "roger-spottiswoode",
    nameKo: "로저 스포티스우드",
    nameEn: "Roger Spottiswoode",
    nationalityKo: "캐나다 · 영국",
    nationalityEn: "Canada · United Kingdom",
    years: "1997",
    filmCount: 1,
    filmSlugs: ["tomorrow-never-dies"],
    oneLiner: "미디어 재벌과 원격 조종 세단. 90년대 가젯이 앞에 선 한 편.",
    posterTone:
      "linear-gradient(165deg,#101828 0%,#0B0D10 50%,#4a6ac622 100%)",
    image: directorImages["roger-spottiswoode"],
  },
  {
    slug: "michael-apted",
    nameKo: "마이클 앱티드",
    nameEn: "Michael Apted",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1999",
    filmCount: 1,
    filmSlugs: ["the-world-is-not-enough"],
    oneLiner: "석유와 파이프라인. 다큐 연출자가 맡은 브로스넌 세 번째.",
    posterTone:
      "linear-gradient(165deg,#281018 0%,#0B0D10 50%,#c65e6a22 100%)",
    image: directorImages["michael-apted"],
  },
  {
    slug: "lee-tamahori",
    nameKo: "리 타마호리",
    nameEn: "Lee Tamahori",
    nationalityKo: "뉴질랜드",
    nationalityEn: "New Zealand",
    years: "2002",
    filmCount: 1,
    filmSlugs: ["die-another-day"],
    oneLiner: "아이스 팰리스와 시각 효과. 브로스넌 시대를 닫는 과잉.",
    posterTone:
      "linear-gradient(165deg,#102030 0%,#0B0D10 50%,#8ac0d022 100%)",
    image: directorImages["lee-tamahori"],
  },
  {
    slug: "marc-forster",
    nameKo: "마크 포스터",
    nameEn: "Marc Forster",
    nationalityKo: "독일 · 스위스",
    nationalityEn: "Germany · Switzerland",
    years: "2008",
    filmCount: 1,
    filmSlugs: ["quantum-of-solace"],
    oneLiner: "카지노 로얄 직후의 추격. 리부트의 두 번째 문장을 찍은 감독.",
    posterTone:
      "linear-gradient(165deg,#2a1808 0%,#0B0D10 50%,#c68a3222 100%)",
    image: directorImages["marc-forster"],
  },
  {
    slug: "sam-mendes",
    nameKo: "샘 멘데스",
    nameEn: "Sam Mendes",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "2012–2015",
    filmCount: 2,
    filmSlugs: ["skyfall", "spectre"],
    oneLiner: "창고의 DB5와 로마의 DB10. 유산을 다시 전투로 부른 두 편.",
    posterTone:
      "linear-gradient(165deg,#1a2830 0%,#0B0D10 45%,#C6A75E28 100%)",
    image: directorImages["sam-mendes"],
  },
  {
    slug: "cary-fukunaga",
    nameKo: "캐리 후쿠나가",
    nameEn: "Cary Joji Fukunaga",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2021",
    filmCount: 1,
    filmSlugs: ["no-time-to-die"],
    oneLiner: "교체와 연기 끝에 닫힌 25편. 시리즈가 본드의 죽음을 허용한 자리.",
    posterTone:
      "linear-gradient(165deg,#10241c 0%,#0B0D10 45%,#C6A75E22 100%)",
    image: directorImages["cary-fukunaga"],
  },
];

export function getDirector(slug: string) {
  return directors.find((d) => d.slug === slug);
}

export function getDirectorByFilmSlug(filmSlug: string) {
  return directors.find((d) => d.filmSlugs.includes(filmSlug));
}
