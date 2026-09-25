export type BondActor = {
  slug: string;
  nameKo: string;
  nameEn: string;
  years: string;
  filmCount: number;
  hasDetail: boolean;
  oneLiner: string;
  posterTone: string;
  bio?: string;
  style?: string;
  filmSlugs?: string[];
  sources?: { label: string; href: string }[];
  nationalityKo: string;
  nationalityEn?: string;
};

export const bonds: BondActor[] = [
  {
    slug: "sean-connery",
    nameKo: "숀 코너리",
    nameEn: "Sean Connery",
    nationalityKo: "스코틀랜드(영국)",
    nationalityEn: "Scotland (United Kingdom)",
    years: "1962–1967, 1971",
    filmCount: 6,
    hasDetail: true,
    oneLiner: "이름을 소개하는 방식부터, 본드의 기본형을 고정한 초대 배우.",
    posterTone:
      "linear-gradient(165deg,#2a2418 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: "에딘버러 출신 배우가 닥터 노에서 00 요원을 처음 스크린에 올렸다. 낮은 목소리와 짧은 유머, 그리고 폭력의 무게가 동시에 실린다. 공식 시리즈 6편(연속 5편 + 다이아몬드는 영원히)을 맡았고, 이후 배우들이 의식하든 거부하든 코너리의 윤곽을 기준으로 삼는 경우가 많다.",
    style:
      "정장과 유머가 먼저 보이고, 싸움은 짧게 끝난다. 본드카와 Q 브리핑 공식도 이 시기에 자리 잡는다.",
    filmSlugs: [
      "dr-no",
      "from-russia-with-love",
      "goldfinger",
      "thunderball",
      "you-only-live-twice",
      "diamonds-are-forever",
    ],
    sources: [
      {
        label: "007.com — Sean Connery",
        href: "https://www.007.com/007-actors/sean-connery/",
      },
      {
        label: "Wikipedia — Sean Connery",
        href: "https://en.wikipedia.org/wiki/Sean_Connery",
      },
    ],
  },
  {
    slug: "george-lazenby",
    nameKo: "조지 레이즌비",
    nameEn: "George Lazenby",
    nationalityKo: "호주",
    nationalityEn: "Australia",
    years: "1969",
    filmCount: 1,
    hasDetail: true,
    oneLiner: "단 한 편, 그러나 결혼과 상실을 본드 서사에 넣은 배우.",
    posterTone:
      "linear-gradient(165deg,#241828 0%,#0B0D10 50%,#8a6ac622 100%)",
    bio: "오스트레일리아 출신의 모델이 코너리 다음의 공식 본드로 단 한 편을 찍었다. 여왕폐하 대작전은 요원의 결혼과 그 상실을 시리즈가 처음으로 허용한 작품이다. 이후 코너리가 돌아오고, 레이즌비의 얼굴은 한 편의 예외로 남는다.",
    style:
      "교체를 한 줄로 농담하면서도, 연애는 느리게 찍는다. 가젯보다 스키와 1969년형 애스턴이 이동을 맡는다.",
    filmSlugs: ["on-her-majestys-secret-service"],
    sources: [
      {
        label: "007.com — George Lazenby",
        href: "https://www.007.com/007-actors/george-lazenby/",
      },
      {
        label: "Wikipedia — George Lazenby",
        href: "https://en.wikipedia.org/wiki/George_Lazenby",
      },
    ],
  },
  {
    slug: "roger-moore",
    nameKo: "로저 무어",
    nameEn: "Roger Moore",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "1973–1985",
    filmCount: 7,
    hasDetail: true,
    oneLiner: "가장 긴 재임. 눈썹과 위트, 그리고 대형 세트 피스가 상징.",
    posterTone:
      "linear-gradient(165deg,#182428 0%,#0B0D10 50%,#5aa0b033 100%)",
    bio: "공식 시리즈에서 가장 오래 본드를 맡은 배우다. 1973년 죽느냐 사느냐부터 1985년 뷰 투 어 킬까지 일곱 편을 찍으며, 눈썹과 한 줄 농담으로 시리즈의 온도를 바꿨다. 대형 세트와 에스프리, 그리고 우주로 커진 과잉이 이 재임을 요약한다.",
    style:
      "주먹보다 눈썹이 먼저 움직인다. 유머가 세계를 덮고, 잠수함 기지와 우주 정거장이 그 유머의 무대가 된다.",
    filmSlugs: [
      "live-and-let-die",
      "the-man-with-the-golden-gun",
      "the-spy-who-loved-me",
      "moonraker",
      "for-your-eyes-only",
      "octopussy",
      "a-view-to-a-kill",
    ],
    sources: [
      {
        label: "007.com — Roger Moore",
        href: "https://www.007.com/007-actors/roger-moore/",
      },
      {
        label: "Wikipedia — Roger Moore",
        href: "https://en.wikipedia.org/wiki/Roger_Moore",
      },
    ],
  },
  {
    slug: "timothy-dalton",
    nameKo: "티모시 달튼",
    nameEn: "Timothy Dalton",
    nationalityKo: "웨일스(영국)",
    nationalityEn: "Wales (United Kingdom)",
    years: "1987–1989",
    filmCount: 2,
    hasDetail: true,
    oneLiner: "소설에 가깝게, 유머를 줄이고 분노를 남긴 짧은 시대.",
    posterTone:
      "linear-gradient(165deg,#182018 0%,#0B0D10 50%,#5e8a6a33 100%)",
    bio: "셰익스피어 무대의 배우가 무어의 눈썹을 접고 두 편만 남겼다. 리빙 데이라이츠의 판단과 살인면허의 복수가, 짧은 시대의 전부다. 유머는 줄고 분노가 얼굴에 남으며, 은색 V8이 그 온도를 한 대로 요약한다.",
    style:
      "한 줄 농담보다 침묵이 길다. 명령을 의심하고, 면허가 끊긴 뒤에도 복수를 이어 간다.",
    filmSlugs: ["the-living-daylights", "licence-to-kill"],
    sources: [
      {
        label: "007.com — Timothy Dalton",
        href: "https://www.007.com/007-actors/timothy-dalton/",
      },
      {
        label: "Wikipedia — Timothy Dalton",
        href: "https://en.wikipedia.org/wiki/Timothy_Dalton",
      },
    ],
  },
  {
    slug: "pierce-brosnan",
    nameKo: "피어스 브로스넌",
    nameEn: "Pierce Brosnan",
    nationalityKo: "아일랜드",
    nationalityEn: "Ireland",
    years: "1995–2002",
    filmCount: 4,
    hasDetail: true,
    oneLiner: "냉전 이후의 매끈한 본드. 가젯과 글로벌 스케일이 다시 커진다.",
    posterTone:
      "linear-gradient(165deg,#1c2430 0%,#0B0D10 50%,#C6A75E28 100%)",
    bio: "골든아이로 시리즈를 6년 공백 뒤에 되살렸다. 정장의 선과 액션의 속도가 동시에 강조되고, BMW 시대와 아이스 팰리스 같은 대형 시각 효과가 따라온다. 네 편 모두 ‘완성된 요원’으로 등장한다는 점에서 크레이그 리부트와 대비된다.",
    style:
      "한 줄 농담과 폭발이 리듬을 나누고, 본드걸·악당의 스케일이 크다. 입문용 액션 경로의 출발점으로 자주 추천된다.",
    filmSlugs: [
      "goldeneye",
      "tomorrow-never-dies",
      "the-world-is-not-enough",
      "die-another-day",
    ],
    sources: [
      {
        label: "007.com — Pierce Brosnan",
        href: "https://www.007.com/007-actors/pierce-brosnan/",
      },
      {
        label: "Wikipedia — Pierce Brosnan",
        href: "https://en.wikipedia.org/wiki/Pierce_Brosnan",
      },
    ],
  },
  {
    slug: "daniel-craig",
    nameKo: "대니얼 크레이그",
    nameEn: "Daniel Craig",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    years: "2006–2021",
    filmCount: 5,
    hasDetail: true,
    oneLiner: "몸을 앞세운 리부트. 상처가 다음 편으로 넘어가는 본드.",
    posterTone:
      "linear-gradient(165deg,#1a1a14 0%,#0B0D10 50%,#C6A75E22 100%)",
    bio: "카지노 로얄에서 00이 되는 과정을 보여 주며 시리즈의 시간축을 다시 썼다. 다섯 편은 느슨한 연작처럼 연결되어 베스퍼의 상실, M과의 관계, 스펙터, 그리고 노 타임 투 다이의 선택으로 이어진다. 액션은 근접 격투와 추격 중심이고, 정장의 광택보다 타박상이 먼저 보인다.",
    style:
      "유머는 짧고, 연속성이 길다. DBS로 시작해 DB5로 회귀하는 차량 라인도 이 배우의 시대를 요약한다.",
    filmSlugs: [
      "casino-royale-2006",
      "quantum-of-solace",
      "skyfall",
      "spectre",
      "no-time-to-die",
    ],
    sources: [
      {
        label: "007.com — Daniel Craig",
        href: "https://www.007.com/007-actors/daniel-craig/",
      },
      {
        label: "Wikipedia — Daniel Craig",
        href: "https://en.wikipedia.org/wiki/Daniel_Craig",
      },
    ],
  },
];

export function getBond(slug: string) {
  return bonds.find((b) => b.slug === slug);
}
