import type { Source } from "./types";

export type FigureBasis = "nominal" | "inflation-adjusted";

export type WorldBoxOfficeRow = {
  slug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  actorKo: string;
  /** Wikipedia “List of James Bond films” Actual $ column, millions. */
  wikiNominalMillions: number;
  /** Wikipedia table Adjusted $ (2024) column, millions. */
  wikiAdjusted2024Millions: number;
};

export type PreciseWorldwide = {
  slug: string;
  titleKo: string;
  amountUsd: number;
  note: string;
  href: string;
};

export type KoreanAudienceRow = {
  slug: string;
  titleKo: string;
  year: number;
  admissions?: number;
  admissionsLabel: string;
  asOf: string;
  basis: "kofic-cited" | "press-checkpoint" | "wiki-kofic-citation";
  note: string;
  sources: Source[];
};

export type NotableRecord = {
  title: string;
  criterion: string;
  basis: FigureBasis | "count" | "first";
  text: string;
  sources: Source[];
};

const WIKI_LIST: Source = {
  label: "Wikipedia — List of James Bond films (box-office table)",
  href: "https://en.wikipedia.org/wiki/List_of_James_Bond_films",
};

const BOM_FRANCHISE: Source = {
  label: "Box Office Mojo — James Bond franchise",
  href: "https://www.boxofficemojo.com/franchise/fr2605158149/",
};

const SITE_007: Source = {
  label: "007.com — The Films",
  href: "https://www.007.com/the-films/",
};

const KOBIS: Source = {
  label: "KOBIS · 영화진흥위원회 통합전산망",
  href: "https://www.kobis.or.kr/",
};

/** Official 25, Wikipedia Actual $ / Adjusted $ (2024), millions. Unofficial 2 omitted. */
export const worldBoxOffice: WorldBoxOfficeRow[] = [
  {
    slug: "dr-no",
    titleKo: "닥터 노",
    titleEn: "Dr. No",
    year: 1962,
    actorKo: "숀 코너리",
    wikiNominalMillions: 59.5,
    wikiAdjusted2024Millions: 720.9,
  },
  {
    slug: "from-russia-with-love",
    titleKo: "위기일발",
    titleEn: "From Russia with Love",
    year: 1963,
    actorKo: "숀 코너리",
    wikiNominalMillions: 78.9,
    wikiAdjusted2024Millions: 873.5,
  },
  {
    slug: "goldfinger",
    titleKo: "골드핑거",
    titleEn: "Goldfinger",
    year: 1964,
    actorKo: "숀 코너리",
    wikiNominalMillions: 124.9,
    wikiAdjusted2024Millions: 1317.8,
  },
  {
    slug: "thunderball",
    titleKo: "썬더볼 작전",
    titleEn: "Thunderball",
    year: 1965,
    actorKo: "숀 코너리",
    wikiNominalMillions: 141.2,
    wikiAdjusted2024Millions: 1362.2,
  },
  {
    slug: "you-only-live-twice",
    titleKo: "두 번 산다",
    titleEn: "You Only Live Twice",
    year: 1967,
    actorKo: "숀 코너리",
    wikiNominalMillions: 111.6,
    wikiAdjusted2024Millions: 825.9,
  },
  {
    slug: "on-her-majestys-secret-service",
    titleKo: "여왕폐하 대작전",
    titleEn: "On Her Majesty's Secret Service",
    year: 1969,
    actorKo: "조지 레이즌비",
    wikiNominalMillions: 64.6,
    wikiAdjusted2024Millions: 468.2,
  },
  {
    slug: "diamonds-are-forever",
    titleKo: "다이아몬드는 영원히",
    titleEn: "Diamonds Are Forever",
    year: 1971,
    actorKo: "숀 코너리",
    wikiNominalMillions: 116.0,
    wikiAdjusted2024Millions: 710.8,
  },
  {
    slug: "live-and-let-die",
    titleKo: "죽느냐 사느냐",
    titleEn: "Live and Let Die",
    year: 1973,
    actorKo: "로저 무어",
    wikiNominalMillions: 126.4,
    wikiAdjusted2024Millions: 739.4,
  },
  {
    slug: "the-man-with-the-golden-gun",
    titleKo: "황금총을 가진 사나이",
    titleEn: "The Man with the Golden Gun",
    year: 1974,
    actorKo: "로저 무어",
    wikiNominalMillions: 97.6,
    wikiAdjusted2024Millions: 536.5,
  },
  {
    slug: "the-spy-who-loved-me",
    titleKo: "나를 사랑한 스파이",
    titleEn: "The Spy Who Loved Me",
    year: 1977,
    actorKo: "로저 무어",
    wikiNominalMillions: 185.4,
    wikiAdjusted2024Millions: 856.1,
  },
  {
    slug: "moonraker",
    titleKo: "문레이커",
    titleEn: "Moonraker",
    year: 1979,
    actorKo: "로저 무어",
    wikiNominalMillions: 210.3,
    wikiAdjusted2024Millions: 859.3,
  },
  {
    slug: "for-your-eyes-only",
    titleKo: "유어 아이즈 온리",
    titleEn: "For Your Eyes Only",
    year: 1981,
    actorKo: "로저 무어",
    wikiNominalMillions: 194.9,
    wikiAdjusted2024Millions: 721.8,
  },
  {
    slug: "octopussy",
    titleKo: "옥토퍼시",
    titleEn: "Octopussy",
    year: 1983,
    actorKo: "로저 무어",
    wikiNominalMillions: 183.7,
    wikiAdjusted2024Millions: 600.4,
  },
  {
    slug: "a-view-to-a-kill",
    titleKo: "뷰 투 어 킬",
    titleEn: "A View to a Kill",
    year: 1985,
    actorKo: "로저 무어",
    wikiNominalMillions: 152.4,
    wikiAdjusted2024Millions: 442,
  },
  {
    slug: "the-living-daylights",
    titleKo: "리빙 데이라이츠",
    titleEn: "The Living Daylights",
    year: 1987,
    actorKo: "티모시 달튼",
    wikiNominalMillions: 191.2,
    wikiAdjusted2024Millions: 503.6,
  },
  {
    slug: "licence-to-kill",
    titleKo: "살인면허",
    titleEn: "Licence to Kill",
    year: 1989,
    actorKo: "티모시 달튼",
    wikiNominalMillions: 156.2,
    wikiAdjusted2024Millions: 403,
  },
  {
    slug: "goldeneye",
    titleKo: "골든아이",
    titleEn: "GoldenEye",
    year: 1995,
    actorKo: "피어스 브로스넌",
    wikiNominalMillions: 352.0,
    wikiAdjusted2024Millions: 832.8,
  },
  {
    slug: "tomorrow-never-dies",
    titleKo: "네버 다이",
    titleEn: "Tomorrow Never Dies",
    year: 1997,
    actorKo: "피어스 브로스넌",
    wikiNominalMillions: 333.0,
    wikiAdjusted2024Millions: 744,
  },
  {
    slug: "the-world-is-not-enough",
    titleKo: "언리미티드",
    titleEn: "The World Is Not Enough",
    year: 1999,
    actorKo: "피어스 브로스넌",
    wikiNominalMillions: 361.8,
    wikiAdjusted2024Millions: 705.9,
  },
  {
    slug: "die-another-day",
    titleKo: "어나더데이",
    titleEn: "Die Another Day",
    year: 2002,
    actorKo: "피어스 브로스넌",
    wikiNominalMillions: 432.0,
    wikiAdjusted2024Millions: 747.5,
  },
  {
    slug: "casino-royale-2006",
    titleKo: "카지노 로얄",
    titleEn: "Casino Royale",
    year: 2006,
    actorKo: "대니얼 크레이그",
    wikiNominalMillions: 606.0,
    wikiAdjusted2024Millions: 947,
  },
  {
    slug: "quantum-of-solace",
    titleKo: "퀀텀 오브 솔러스",
    titleEn: "Quantum of Solace",
    year: 2008,
    actorKo: "대니얼 크레이그",
    wikiNominalMillions: 586.1,
    wikiAdjusted2024Millions: 825.9,
  },
  {
    slug: "skyfall",
    titleKo: "스카이폴",
    titleEn: "Skyfall",
    year: 2012,
    actorKo: "대니얼 크레이그",
    wikiNominalMillions: 1108.6,
    wikiAdjusted2024Millions: 1514.8,
  },
  {
    slug: "spectre",
    titleKo: "스펙터",
    titleEn: "Spectre",
    year: 2015,
    actorKo: "대니얼 크레이그",
    wikiNominalMillions: 880.7,
    wikiAdjusted2024Millions: 1165.6,
  },
  {
    slug: "no-time-to-die",
    titleKo: "노 타임 투 다이",
    titleEn: "No Time to Die",
    year: 2021,
    actorKo: "대니얼 크레이그",
    wikiNominalMillions: 771.2,
    wikiAdjusted2024Millions: 892.8,
  },
];

/** Box Office Mojo title-page original-release worldwide (USD). Not mixed with Wikipedia millions. */
export const bomOriginalWorldwide: PreciseWorldwide[] = [
  {
    slug: "skyfall",
    titleKo: "스카이폴",
    amountUsd: 1_108_561_013,
    note: "원출시 전 세계. All Releases 합계는 재개봉을 더해 $1,108,594,137.",
    href: "https://www.boxofficemojo.com/title/tt1074638/",
  },
  {
    slug: "spectre",
    titleKo: "스펙터",
    amountUsd: 880_674_609,
    note: "원출시 전 세계. All Releases 합계는 $880,707,597.",
    href: "https://www.boxofficemojo.com/title/tt2379713/",
  },
  {
    slug: "no-time-to-die",
    titleKo: "노 타임 투 다이",
    amountUsd: 774_153_007,
    note: "원출시 전 세계. 이후 재개봉 행이 붙는 All Releases 합계는 이 칸에 쓰지 않음.",
    href: "https://www.boxofficemojo.com/title/tt2382320/",
  },
  {
    slug: "casino-royale-2006",
    titleKo: "카지노 로얄",
    amountUsd: 606_000_350,
    note: "원출시 전 세계. All Releases 합계는 $606,278,957.",
    href: "https://www.boxofficemojo.com/title/tt0381061/",
  },
  {
    slug: "quantum-of-solace",
    titleKo: "퀀텀 오브 솔러스",
    amountUsd: 589_580_939,
    note: "원출시 전 세계. All Releases 합계는 $589,593,933.",
    href: "https://www.boxofficemojo.com/title/tt0830515/",
  },
];

export const koreanAudience: KoreanAudienceRow[] = [
  {
    slug: "quantum-of-solace",
    titleKo: "퀀텀 오브 솔러스",
    year: 2008,
    admissions: 2_205_159,
    admissionsLabel: "2,205,159명",
    asOf: "2012-10-31 전후, 전작 최종으로 인용",
    basis: "kofic-cited",
    note: "한국영상자료원 스카이폴 리뷰가 영화진흥위원회 통합전산망을 들어 전작 최종으로 적은 숫자. 2004년 이후 발권 집계.",
    sources: [
      {
        label: "한국영상자료원 — 007 스카이폴 리뷰 (전작 관객 인용)",
        href: "http://www.koreafilm.co.kr/movie/review/007skyfall.htm",
      },
      KOBIS,
    ],
  },
  {
    slug: "skyfall",
    titleKo: "스카이폴",
    year: 2012,
    admissions: 2_376_266,
    admissionsLabel: "2,376,266명",
    asOf: "2012-12-18 전후 누적",
    basis: "wiki-kofic-citation",
    note: "영진위 통합전산망 역대 박스오피스를 이차 문헌이 같은 숫자로 인용. 이 편집은 KOBIS 원표를 다시 긁지 않았고, 재개봉 뒤 변동은 비움.",
    sources: [
      {
        label: "우만위키 — 스카이폴 (KOBIS 역대 박스오피스 각주)",
        href: "https://tcatmon.com/wiki/%EC%8A%A4%EC%B9%B4%EC%9D%B4%ED%8F%B4",
      },
      KOBIS,
    ],
  },
  {
    slug: "spectre",
    titleKo: "스펙터",
    year: 2015,
    admissions: 1_185_182,
    admissionsLabel: "개봉 5일 1,185,182명",
    asOf: "개봉 5일 차 (2015)",
    basis: "press-checkpoint",
    note: "SBS 연예뉴스가 전한 중간 집계. 최종 누적이 아니므로 ‘한국 최고’ 비교에 쓰지 않음.",
    sources: [
      {
        label: "SBS 연예뉴스 — 007 스펙터 개봉 5일 관객",
        href: "https://ent.sbs.co.kr/news/article.do?article_id=E10007280031",
      },
      KOBIS,
    ],
  },
  {
    slug: "no-time-to-die",
    titleKo: "노 타임 투 다이",
    year: 2021,
    admissions: 1_200_000,
    admissionsLabel: "120만 돌파",
    asOf: "2021-10-25",
    basis: "press-checkpoint",
    note: "뉴스핌이 영진위 통합전산망을 들어 전날(25일) 120만 돌파로 전한 중간 집계. 최종 확정 숫자는 이 칸에 고정하지 않음.",
    sources: [
      {
        label: "뉴스핌 — 노 타임 투 다이 120만 돌파 (영진위)",
        href: "https://www.newspim.com/news/view/20211026000127",
      },
      KOBIS,
    ],
  },
];

export const notableRecords: NotableRecord[] = [
  {
    title: "명목 세계 흥행 1위 — 스카이폴",
    criterion: "전 세계 박스오피스, 명목 달러, 재개봉을 크게 섞지 않은 원출시",
    basis: "nominal",
    text: "스카이폴은 Box Office Mojo 원출시 전 세계 $1,108,561,013으로, 공식 25편 중 명목 최고다. 위키 표의 Actual $ 1,108.6 million과 같은 순이다. ‘시리즈 최고’를 말할 때는 이 명목 기준을 밝힌다.",
    sources: [
      {
        label: "Box Office Mojo — Skyfall",
        href: "https://www.boxofficemojo.com/title/tt1074638/",
      },
      WIKI_LIST,
    ],
  },
  {
    title: "물가 보정 순위는 기준 연도에 따라 갈린다",
    criterion: "위키 표 Adjusted $ (2024) · 다른 CPI 표와 섞지 않음",
    basis: "inflation-adjusted",
    text: "같은 위키 표의 2024년 환산에서는 스카이폴(1,514.8)이 여전히 1위이나, 썬더볼(1,362.2)과 골드핑거(1,317.8)가 2·3위로 올라 명목 순위와 갈린다. 방법·기준 연도가 바뀌면 1위가 달라질 수 있어, 물가 보정을 ‘최고’로 부를 때는 표를 명시한다.",
    sources: [WIKI_LIST],
  },
  {
    title: "공식 시리즈 최초 10억 달러 — 스카이폴",
    criterion: "명목 전 세계 10억 달러 돌파",
    basis: "first",
    text: "스카이폴은 공식 에온 본드 중 처음으로 전 세계 명목 10억 달러를 넘긴 작품이다. 이후 편도 그 선을 넘지 못했다.",
    sources: [
      {
        label: "Box Office Mojo — Skyfall",
        href: "https://www.boxofficemojo.com/title/tt1074638/",
      },
      WIKI_LIST,
      SITE_007,
    ],
  },
  {
    title: "에온 25편의 합계 — 표와 머리글을 갈라 읽기",
    criterion: "위키 머리글 명목 약 $78억 · 표 Actual 합 7,623 million",
    basis: "nominal",
    text: "위키 머리글은 에온 시리즈 명목 합계를 약 $78억, 2022년 달러 환산을 약 $192억으로 적는다. 같은 문서 표의 Actual 합은 7,623 million, 2024 환산 합은 20,319 million이다. 두 숫자를 한 줄로 합치지 않는다.",
    sources: [WIKI_LIST],
  },
  {
    title: "공식 본드 최다 편수 — 로저 무어 7편",
    criterion: "에온 공식 배우별 편수",
    basis: "count",
    text: "공식 25편 기준 로저 무어가 일곱 편으로 가장 많다. 코너리 여섯, 크레이그 다섯, 브로스넌 넷. 비공식작은 이 편수에 넣지 않는다.",
    sources: [
      SITE_007,
      {
        label: "007.com — Roger Moore",
        href: "https://www.007.com/007-actors/roger-moore/",
      },
    ],
  },
  {
    title: "공식 감독 최다 편수 — 존 글렌 5편",
    criterion: "에온 공식 감독별 편수",
    basis: "count",
    text: "존 글렌이 유어 아이즈 온리부터 살인면허까지 다섯 편을 연출해 공식 감독 중 가장 많다.",
    sources: [
      SITE_007,
      {
        label: "007.com — For Your Eyes Only",
        href: "https://www.007.com/the-films/for-your-eyes-only/",
      },
    ],
  },
  {
    title: "한국 관객 — 통합전산망이 닫는 구간만",
    criterion: "KOBIS/영진위 인용 · 중간 집계와 최종을 분리",
    basis: "count",
    text: "2004년 이후 발권 집계가 열린 구간에서,  최종 인용분 중 스카이폴 2,376,266명이 가장 크다. 어나더데이 이전 등 집계 체계가 다른 해는 비운다. 스펙터·노 타임 투 다이의 언론 중간 집계는 최종과 비교하지 않는다.",
    sources: [
      KOBIS,
      {
        label: "한국영상자료원 — 007 스카이폴 리뷰",
        href: "http://www.koreafilm.co.kr/movie/review/007skyfall.htm",
      },
    ],
  },
];

export const recordsSources: Source[] = [
  WIKI_LIST,
  BOM_FRANCHISE,
  SITE_007,
  KOBIS,
  {
    label: "Box Office Mojo — Skyfall",
    href: "https://www.boxofficemojo.com/title/tt1074638/",
  },
  {
    label: "Box Office Mojo — Spectre",
    href: "https://www.boxofficemojo.com/title/tt2379713/",
  },
  {
    label: "Box Office Mojo — No Time to Die",
    href: "https://www.boxofficemojo.com/title/tt2382320/",
  },
  {
    label: "Box Office Mojo — Casino Royale (2006)",
    href: "https://www.boxofficemojo.com/title/tt0381061/",
  },
  {
    label: "Box Office Mojo — Quantum of Solace",
    href: "https://www.boxofficemojo.com/title/tt0830515/",
  },
];

export function formatUsd(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function formatMillions(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 1 });
}

export const recordsIntro = {
  title: "기록",
  lede: "세계 흥행과 한국 관객, 편수 기록입니다.",
  notes: [
    "명목(nominal)은 당시 달러, 물가 보정은 위키 표의 2024년 환산입니다.",
    "Box Office Mojo 원출시와 위키 백만 달러 표, All Releases 재개봉 합계는 열이 다릅니다.",
    "한국 숫자는 영화진흥위원회 통합전산망(KOBIS)과 그것을 인용한 언론·아카이브입니다. 2004년 이전 집계는 체계가 달라 숫자가 없습니다.",
  ],
};

export const homeRecordTeasers = [
  {
    label: "명목 세계 1위",
    value: "스카이폴",
    meta: "BOM 원출시 $1,108,561,013",
    href: "/records",
  },
  {
    label: "2024 환산 2·3위",
    value: "썬더볼 · 골드핑거",
    meta: "위키 표 · 물가 보정",
    href: "/records",
  },
  {
    label: "한국 인용 최종분",
    value: "스카이폴 237만",
    meta: "영진위 인용 · 2012-12",
    href: "/records",
  },
];
