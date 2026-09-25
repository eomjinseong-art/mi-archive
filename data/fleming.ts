import type { Footnote, Source } from "./types";

export const FLEMING_HREF = "/ian-fleming";

export const fleming = {
  slug: "ian-fleming",
  nameKo: "이언 플레밍",
  nameEn: "Ian Fleming",
  years: "1908–1964",
  oneLiner:
    "제임스 본드를 소설로 만든 사람. 해군 정보부의 사령관 계급이, 요원의 계급이 됩니다.",
  posterTone:
    "linear-gradient(165deg,#2a2418 0%,#0B0D10 48%,#C6A75E28 100%)",
};

export type FlemingNovel = {
  titleKo: string;
  titleEn: string;
  year: number;
  kind: "장편" | "단편집";
  note: string;
  filmSlug?: string;
};

export const flemingNovels: FlemingNovel[] = [
  {
    titleKo: "카지노 로얄",
    titleEn: "Casino Royale",
    year: 1953,
    kind: "장편",
    note: "첫 본드 소설. 카드 테이블과 고문, 베스퍼. 영화 권리는 한동안 에온 밖에 있었습니다.",
    filmSlug: "casino-royale-2006",
  },
  {
    titleKo: "죽느냐 사느냐",
    titleEn: "Live and Let Die",
    year: 1954,
    kind: "장편",
    note: "미국과 카리브. 무어 시대의 첫 공식 편이 이 제목을 가져갑니다.",
    filmSlug: "live-and-let-die",
  },
  {
    titleKo: "문레이커",
    titleEn: "Moonraker",
    year: 1955,
    kind: "장편",
    note: "소설은 영국 안의 로켓이고, 1979년 영화는 궤도까지 밀어 올립니다.",
    filmSlug: "moonraker",
  },
  {
    titleKo: "다이아몬드는 영원히",
    titleEn: "Diamonds Are Forever",
    year: 1956,
    kind: "장편",
    note: "밀수와 미국. 코너리 귀환 편의 제목이 됩니다.",
    filmSlug: "diamonds-are-forever",
  },
  {
    titleKo: "위기일발",
    titleEn: "From Russia, with Love",
    year: 1957,
    kind: "장편",
    note: "이스탄불과 오리엔트 특급. 공식 2편이 비교적 곧게 옮긴 축입니다.",
    filmSlug: "from-russia-with-love",
  },
  {
    titleKo: "닥터 노",
    titleEn: "Dr. No",
    year: 1958,
    kind: "장편",
    note: "자메이카의 섬. 공식 시리즈가 스크린을 연 첫 제목입니다.",
    filmSlug: "dr-no",
  },
  {
    titleKo: "골드핑거",
    titleEn: "Goldfinger",
    year: 1959,
    kind: "장편",
    note: "금과 포트 녹스. 화면의 본드 문법이 여기서 단단해집니다.",
    filmSlug: "goldfinger",
  },
  {
    titleKo: "유어 아이즈 온리",
    titleEn: "For Your Eyes Only",
    year: 1960,
    kind: "단편집",
    note: "단편 다섯 편. 1981년 영화는 그중 두 편의 뼈대를 빌려 땅을 되찾습니다.",
    filmSlug: "for-your-eyes-only",
  },
  {
    titleKo: "썬더볼 작전",
    titleEn: "Thunderball",
    year: 1961,
    kind: "장편",
    note: "핵과 바하마. 각본 협력과 권리 분쟁이 훗날 비공식 편으로 갈라집니다.",
    filmSlug: "thunderball",
  },
  {
    titleKo: "나를 사랑한 스파이",
    titleEn: "The Spy Who Loved Me",
    year: 1962,
    kind: "장편",
    note: "소설은 여성 화자의 한 밤이고, 영화는 제목만 빌려 대형 세트로 갑니다.",
    filmSlug: "the-spy-who-loved-me",
  },
  {
    titleKo: "여왕폐하 대작전",
    titleEn: "On Her Majesty's Secret Service",
    year: 1963,
    kind: "장편",
    note: "결혼과 상실. 공식 6편이 이 뼈대를 정면으로 찍습니다.",
    filmSlug: "on-her-majestys-secret-service",
  },
  {
    titleKo: "두 번 산다",
    titleEn: "You Only Live Twice",
    year: 1964,
    kind: "장편",
    note: "일본. 플레밍이 생전에 낸 마지막 장편입니다.",
    filmSlug: "you-only-live-twice",
  },
  {
    titleKo: "황금총을 가진 사나이",
    titleEn: "The Man with the Golden Gun",
    year: 1965,
    kind: "장편",
    note: "사후 출간. 무어의 두 번째 공식 편이 이 제목을 씁니다.",
    filmSlug: "the-man-with-the-golden-gun",
  },
  {
    titleKo: "옥토퍼시와 리빙 데이라이츠",
    titleEn: "Octopussy and The Living Daylights",
    year: 1966,
    kind: "단편집",
    note: "사후 단편집. 제목 두 개가 1980년대 공식 편으로 갈라져 나갑니다.",
  },
];

export const flemingDetail = {
  bio: [
    "이언 랭커스터 플레밍은 1908년 5월 28일 런던 메이페어에서 태어났습니다. 한국어로는 이언 플레밍이 흔하고, 이안 플레밍으로 적는 표기도 있습니다. 이튼을 다녔고, 샌드허스트를 거쳐 오스트리아와 제네바에서 언어를 익혔습니다. 통신사 로이터의 기자, 짧은 은행·증권 일을 지난 뒤, 제2차 세계대전에서 영국 해군 정보부에 들어갑니다. 그 이력이 요원의 계급과 취향의 뼈대가 됩니다.",
    "전후 그는 케임즈 신문 그룹의 해외 담당으로 일하면서, 자메이카 북쪽 해안의 골든아이를 겨울 집필의 자리로 씁니다. 1952년 앤 차터리스와 결혼하고, 같은 해의 그 집에서 첫 본드 소설을 씁니다. 《카지노 로얄》은 1953년 4월에 나옵니다. 이후 거의 해마다 장편 또는 단편집이 이어지고, 1964년 8월 12일 캔터베리에서 56세로 숨집니다. 심장의 병이 오래 있었고, 마지막 장편 《황금총을 가진 사나이》는 사후에 다듬어 나왔습니다.",
    "플레밍은 본드를 한 편의 영화 주인공으로 설계하지 않았습니다. 신문과 클럽, 여행과 식사, 그리고 전쟁의 실무에서 나온 취향을 소설의 호흡으로 옮겼습니다. 화면의 은색 쿠페와 Q의 버튼은 후대의 일입니다. 원점의 문장은 카드 테이블과 고통, 짧은 유머와 제국의 자신감입니다. 그 자신감의 한계—인종과 여성을 바라보는 시선—도 같은 문장 안에 있습니다.",
  ],
  naval: [
    "전시 해군 정보부에서 플레밍은 존 고드프리 제독의 보좌로 일합니다. 계급은 커맨더, 본드가 물려받는 그 계급입니다. M의 윤곽에 고드프리를 겹쳐 읽는 해석이 오래 있습니다. 확정된 초상화라기보다, 상관의 말투와 방이 소설의 본부에 스몄다는 쪽에 가깝습니다.",
    "그는 특공과 정보 수집의 계획을 도왔고, 30 어설트 유닛 같은 부대의 구상에 이름이 남습니다. 스페인·지브롤터 방면의 대비 계획 이름은 골든아이였습니다. 훗날 자메이카 저택과 1995년 공식 편의 제목이 그 단어를 다시 씁니다. 전쟁 소설을 쓴 것은 아닙니다. 전쟁의 습관—암호, 습격, 상부의 한 줄—을 오락의 호흡으로 옮긴 쪽에 가깝습니다.",
  ],
  firstNovel: [
    "《카지노 로얄》은 1953년의 첫 본드입니다. 배경은 프랑스의 카지노, 상대는 소비에트 쪽 자금줄 르 시프르, 동행은 베스퍼 린드. 포커가 아니라 바카라에 가깝고, 고문은 신체를 조준합니다. 엔딩의 배신은 이후 공식 시리즈가 오래 미뤄 두었다가, 2006년 에온 편이 다시 꺼낸 뼈대입니다.",
    "첫 소설의 영화 권리는 일찍 다른 손으로 넘어갑니다. 그 갈림이 1967년 패러디와, 수십 년 뒤 에온의 리부트를 한 제목 아래 갈라 놓습니다. 소설이 먼저이고, 공식 스크린의 첫 편은 1962년 《닥터 노》입니다. 원작의 출발과 시리즈의 출발이 같은 제목이 아닙니다.",
  ],
  eon: [
    "해리 솔츠먼과 앨버트 ‘큐비’ 브로콜리의 에온 프로덕션이 본드 영화 권리를 모으기 시작한 것은 1961년 전후입니다. 다만 《카지노 로얄》은 이미 밖으로 나가 있었고, 《썬더볼 작전》은 케빈 매컬로리 등과의 각본·권리 다툼이 붙어 있었습니다. 공식 시리즈는 그 빈칸을 안고 문을 엽니다.",
    "플레밍은 《닥터 노》와 《위기일발》의 제작을 생전에 보았습니다. 코너리의 얼굴이 소설의 신사와 다르다는 첫 반응은 후일담에 반복되고, 스크린을 본 뒤에는 마음이 누그러졌다는 층도 함께 남습니다. 확인과 일화가 섞이므로, 한 문장으로 닫지 않습니다. 《골드핑거》의 영국 개봉은 그의 사망 뒤입니다. 촬영장을 방문한 기록은 남아 있습니다.",
    "에온 25편은 플레밍의 제목을 빌려 쓰거나, 뼈대만 남기거나, 제목을 버리기도 합니다. 《살인면허》는 플레밍 장편 제목을 쓰지 않은 첫 공식 편으로 자주 적힙니다. 《퀀텀 오브 솔러스》는 단편에서 제목만 가져옵니다. 원작 충실을 점수로 매기지 않습니다. 소설이 준 이름과, 화면이 고른 호흡을 나란히 두는 것이 이 칸의 일입니다.",
  ],
  legacy: [
    "1964년 여름, 시리즈는 아직 다섯 편도 채우지 못한 채 작가를 잃습니다. 이후의 본드는 플레밍 출판과 에온과, 권리가 갈라진 두 편의 비공식 영화가 함께 키운 이름입니다. 이언 플레밍 퍼블리케이션스가 소설의 계보를 잇고, 이언 플레밍 재단이 소품과 차량의 기록을 돕습니다. 화면의 유산은 공식 25편의 타임라인에 있습니다.",
    "한국어로 본드를 처음 만난 독자와 관객에게 플레밍은 종종 영화의 뒤쪽 이름입니다. 스크린이 먼저여도, 요원의 계급과 첫 배신과 자메이카의 집은 소설가의 이력에서 왔습니다. 원작을 신화로 올리기보다, 생년과 전쟁과 열네 권의 본드 책을 한국어로 모아 둡니다.",
  ],
  related: [
    { href: "/films", label: "공식 25 · 비공식 2" },
    { href: "/films/dr-no", label: "닥터 노 — 공식 1편" },
    { href: "/films/casino-royale-2006", label: "카지노 로얄 (2006)" },
    { href: "/films/casino-royale-1967", label: "카지노 로얄 (1967) · 비공식" },
    { href: "/films/never-say-never-again", label: "네버 세이 네버 어게인 · 비공식" },
    { href: "/bonds/sean-connery", label: "숀 코너리" },
  ],
  sources: [
    { label: "007.com — The World of Bond", href: "https://www.007.com/" },
    { label: "007.com — Dr. No", href: "https://www.007.com/the-films/dr-no/" },
    { label: "007.com — Casino Royale (2006)", href: "https://www.007.com/the-films/casino-royale/" },
    { label: "Wikipedia — Ian Fleming", href: "https://en.wikipedia.org/wiki/Ian_Fleming" },
    { label: "Wikipedia — James Bond (literary character)", href: "https://en.wikipedia.org/wiki/James_Bond_(literary_character)" },
    { label: "Ian Fleming Publications", href: "https://www.ianfleming.com/" },
    { label: "BFI — Bond 50주년 맥락", href: "https://www.bfi.org.uk/features/happy-50th-anniversary-mr-bond" },
  ] satisfies Source[],
  footnotes: [
    {
      n: 1,
      text: "생년월일 1908년 5월 28일, 사망 1964년 8월 12일은 영어 위키백과 이언 플레밍 항목과 여러 전기가 공유합니다. 한국어 표기 이언/이안은 음역의 갈림입니다. 본문은 이언을 씁니다.",
    },
    {
      n: 2,
      text: "해군 정보부 보좌와 커맨더 계급, 고드프리 제독과의 관계는 전기와 007.com 계열 정리가 반복합니다. M이 고드프리의 초상이라는 문장은 해석으로 둡니다.",
    },
    {
      n: 3,
      text: "《카지노 로얄》 초판은 1953년 4월입니다. 첫 소설의 영화 권리가 에온 밖에 있었다는 점은 제작사·권리 서술이 일치합니다.",
    },
    {
      n: 4,
      text: "본드 장편 12권과 단편집 2권의 연도는 영어 위키백과 James Bond 문학 목록을 기준으로 합니다. 논픽션과 《치티치티뱅뱅》은 본드 계보 바깥의 참고입니다.",
    },
    {
      n: 5,
      text: "재사용이 확인된 단독 초상을 이 칸에 올리지 않습니다. 히어로는 아카이브 플레이스홀더입니다. 게티 등 라이선스 사진을 쓰지 않습니다.",
    },
  ] satisfies Footnote[],
};
