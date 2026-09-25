export type FilmCardData = {
  slug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  actorSlug: string;
  actorKo: string;
  actorEn: string;
  hasDetail: boolean;
  posterTone: string;
  /** Korean alternate title shown on the series hub, not on every card. */
  akaKo?: string;
};

export const films: FilmCardData[] = [
  {
    slug: "dr-no",
    titleKo: "닥터 노",
    titleEn: "Dr. No",
    year: 1962,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    akaKo: "007 살인번호",
    posterTone:
      "linear-gradient(165deg,#1c3a2e 0%,#0B0D10 42%,#c6a75e22 100%)",
  },
  {
    slug: "from-russia-with-love",
    titleKo: "위기일발",
    titleEn: "From Russia with Love",
    year: 1963,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#3a1c1c 0%,#0B0D10 50%,#8a5a3222 100%)",
  },
  {
    slug: "goldfinger",
    titleKo: "골드핑거",
    titleEn: "Goldfinger",
    year: 1964,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#4a3b12 0%,#0B0D10 45%,#C6A75E44 100%)",
  },
  {
    slug: "thunderball",
    titleKo: "썬더볼 작전",
    titleEn: "Thunderball",
    year: 1965,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#12344a 0%,#0B0D10 50%,#2a6a8a22 100%)",
  },
  {
    slug: "you-only-live-twice",
    titleKo: "두 번 산다",
    titleEn: "You Only Live Twice",
    year: 1967,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#1a2a12 0%,#0B0D10 48%,#6a8a3222 100%)",
  },
  {
    slug: "on-her-majestys-secret-service",
    titleKo: "여왕폐하 대작전",
    titleEn: "On Her Majesty's Secret Service",
    year: 1969,
    actorSlug: "george-lazenby",
    actorKo: "조지 레이즌비",
    actorEn: "George Lazenby",
    hasDetail: true,
    akaKo: "007과 여왕",
    posterTone:
      "linear-gradient(165deg,#2a2040 0%,#0B0D10 50%,#8a6ac622 100%)",
  },
  {
    slug: "diamonds-are-forever",
    titleKo: "다이아몬드는 영원히",
    titleEn: "Diamonds Are Forever",
    year: 1971,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#2a2a40 0%,#0B0D10 50%,#c0c8d422 100%)",
  },
  {
    slug: "live-and-let-die",
    titleKo: "죽느냐 사느냐",
    titleEn: "Live and Let Die",
    year: 1973,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#3a2010 0%,#0B0D10 50%,#c65e3222 100%)",
  },
  {
    slug: "the-man-with-the-golden-gun",
    titleKo: "황금총을 가진 사나이",
    titleEn: "The Man with the Golden Gun",
    year: 1974,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#4a3a10 0%,#0B0D10 50%,#C6A75E33 100%)",
  },
  {
    slug: "the-spy-who-loved-me",
    titleKo: "나를 사랑한 스파이",
    titleEn: "The Spy Who Loved Me",
    year: 1977,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#10283a 0%,#0B0D10 50%,#3aa0c622 100%)",
  },
  {
    slug: "moonraker",
    titleKo: "문레이커",
    titleEn: "Moonraker",
    year: 1979,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#101830 0%,#0B0D10 50%,#6a8ac622 100%)",
  },
  {
    slug: "for-your-eyes-only",
    titleKo: "유어 아이즈 온리",
    titleEn: "For Your Eyes Only",
    year: 1981,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#1a3040 0%,#0B0D10 50%,#5aa0b022 100%)",
  },
  {
    slug: "octopussy",
    titleKo: "옥토퍼시",
    titleEn: "Octopussy",
    year: 1983,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#2a1040 0%,#0B0D10 50%,#a05ec622 100%)",
  },
  {
    slug: "a-view-to-a-kill",
    titleKo: "뷰 투 어 킬",
    titleEn: "A View to a Kill",
    year: 1985,
    actorSlug: "roger-moore",
    actorKo: "로저 무어",
    actorEn: "Roger Moore",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#401020 0%,#0B0D10 50%,#c65e8a22 100%)",
  },
  {
    slug: "the-living-daylights",
    titleKo: "리빙 데이라이츠",
    titleEn: "The Living Daylights",
    year: 1987,
    actorSlug: "timothy-dalton",
    actorKo: "티모시 달튼",
    actorEn: "Timothy Dalton",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#102018 0%,#0B0D10 50%,#5e8a6a22 100%)",
  },
  {
    slug: "licence-to-kill",
    titleKo: "살인면허",
    titleEn: "Licence to Kill",
    year: 1989,
    actorSlug: "timothy-dalton",
    actorKo: "티모시 달튼",
    actorEn: "Timothy Dalton",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#301010 0%,#0B0D10 50%,#c64a3222 100%)",
  },
  {
    slug: "goldeneye",
    titleKo: "골든아이",
    titleEn: "GoldenEye",
    year: 1995,
    actorSlug: "pierce-brosnan",
    actorKo: "피어스 브로스넌",
    actorEn: "Pierce Brosnan",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#3a3010 0%,#0B0D10 50%,#C6A75E33 100%)",
  },
  {
    slug: "tomorrow-never-dies",
    titleKo: "네버 다이",
    titleEn: "Tomorrow Never Dies",
    year: 1997,
    actorSlug: "pierce-brosnan",
    actorKo: "피어스 브로스넌",
    actorEn: "Pierce Brosnan",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#101828 0%,#0B0D10 50%,#4a6ac622 100%)",
  },
  {
    slug: "the-world-is-not-enough",
    titleKo: "언리미티드",
    titleEn: "The World Is Not Enough",
    year: 1999,
    actorSlug: "pierce-brosnan",
    actorKo: "피어스 브로스넌",
    actorEn: "Pierce Brosnan",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#281018 0%,#0B0D10 50%,#c65e6a22 100%)",
  },
  {
    slug: "die-another-day",
    titleKo: "어나더데이",
    titleEn: "Die Another Day",
    year: 2002,
    actorSlug: "pierce-brosnan",
    actorKo: "피어스 브로스넌",
    actorEn: "Pierce Brosnan",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#102030 0%,#0B0D10 50%,#8ac0d022 100%)",
  },
  {
    slug: "casino-royale-2006",
    titleKo: "카지노 로얄",
    titleEn: "Casino Royale",
    year: 2006,
    actorSlug: "daniel-craig",
    actorKo: "대니얼 크레이그",
    actorEn: "Daniel Craig",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#1a1208 0%,#0B0D10 42%,#C6A75E33 100%)",
  },
  {
    slug: "quantum-of-solace",
    titleKo: "퀀텀 오브 솔러스",
    titleEn: "Quantum of Solace",
    year: 2008,
    actorSlug: "daniel-craig",
    actorKo: "대니얼 크레이그",
    actorEn: "Daniel Craig",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#2a1808 0%,#0B0D10 50%,#c68a3222 100%)",
  },
  {
    slug: "skyfall",
    titleKo: "스카이폴",
    titleEn: "Skyfall",
    year: 2012,
    actorSlug: "daniel-craig",
    actorKo: "대니얼 크레이그",
    actorEn: "Daniel Craig",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#1a2830 0%,#0B0D10 45%,#C6A75E28 100%)",
  },
  {
    slug: "spectre",
    titleKo: "스펙터",
    titleEn: "Spectre",
    year: 2015,
    actorSlug: "daniel-craig",
    actorKo: "대니얼 크레이그",
    actorEn: "Daniel Craig",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#181010 0%,#0B0D10 50%,#8a303022 100%)",
  },
  {
    slug: "no-time-to-die",
    titleKo: "노 타임 투 다이",
    titleEn: "No Time to Die",
    year: 2021,
    actorSlug: "daniel-craig",
    actorKo: "대니얼 크레이그",
    actorEn: "Daniel Craig",
    hasDetail: true,
    posterTone:
      "linear-gradient(165deg,#10241c 0%,#0B0D10 45%,#C6A75E22 100%)",
  },
];

export const featuredFilmSlugs = [
  "casino-royale-2006",
  "skyfall",
  "no-time-to-die",
] as const;

export const OFFICIAL_BOND_ACTOR_ORDER = [
  "sean-connery",
  "george-lazenby",
  "roger-moore",
  "timothy-dalton",
  "pierce-brosnan",
  "daniel-craig",
] as const;

export function officialFilmsByActor() {
  return OFFICIAL_BOND_ACTOR_ORDER.map((actorSlug) => {
    const actorFilms = films.filter((film) => film.actorSlug === actorSlug);
    const first = actorFilms[0];
    return {
      actorSlug,
      actorKo: first?.actorKo ?? "",
      actorEn: first?.actorEn ?? "",
      films: actorFilms,
    };
  }).filter((group) => group.films.length > 0);
}

export function getFilm(slug: string) {
  return films.find((f) => f.slug === slug);
}

/** Chronological neighbors in official `films[]` order (series release order). */
export function officialNeighbors(slug: string) {
  const index = films.findIndex((film) => film.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? films[index - 1] : undefined,
    next: index < films.length - 1 ? films[index + 1] : undefined,
  };
}

export function displayFilmTitle(film: Pick<FilmCardData, "titleKo" | "titleEn">) {
  return `${film.titleKo} (${film.titleEn})`;
}
