import { supportingBondGirls } from "./bondGirlsSupporting";

export type BondGirlRoleKind = "본드걸" | "조연" | "카메오" | "반복 출연";

export type BondGirl = {
  slug: string;
  nameKo: string;
  nameEn: string;
  actressKo: string;
  actressEn: string;
  filmSlug: string;
  filmTitleKo: string;
  hasDetail: boolean;
  oneLiner: string;
  posterTone: string;
  bio?: string;
  notes?: string;
  sources?: { label: string; href: string }[];
  /** Defaults to 본드걸 when omitted (original hub twelve). */
  roleKind?: BondGirlRoleKind;
  /** Defaults to true. Supporting entries set this to false. */
  featuredOnHome?: boolean;
  nationalityKo: string;
  nationalityEn?: string;
};

export const bondGirls: BondGirl[] = [
  {
    slug: "honey-ryder",
    nameKo: "허니 라이더",
    nameEn: "Honey Ryder",
    nationalityKo: "스위스",
    nationalityEn: "Switzerland",
    actressKo: "우르술라 안드레스",
    actressEn: "Ursula Andress",
    filmSlug: "dr-no",
    filmTitleKo: "닥터 노",
    hasDetail: true,
    oneLiner: "해변에서 칼과 조개를 든 등장. 시리즈 본드걸 이미지의 출발점.",
    posterTone:
      "linear-gradient(165deg,#1c3a2e 0%,#0B0D10 50%,#c6a75e22 100%)",
    bio: "자메이카 해변에서 본드와 마주치는 허니는 조개 채집과 복수—아버지의 죽음—를 동시에 들고 있다. 흰 수영복 등장은 이후 무수한 오마주의 원본이 되었고, 동시에 1960년대 시선이 캐릭터를 어떻게 프레이밍했는지를 보여주는 장면이기도 하다. 크랩 키 잠입에서는 길잡이이자 생존자로 움직인다.",
    notes:
      "배우 우르술라 안드레스의 등장은 시리즈 홍보 사진에서도 반복 인용된다. 인물 자체는 플레밍 소설의 허니 실러와 연결된다.",
    sources: [
      {
        label: "007.com — Dr. No",
        href: "https://www.007.com/dr-no/",
      },
      {
        label: "Wikipedia — Honey Ryder",
        href: "https://en.wikipedia.org/wiki/Honey_Ryder",
      },
    ],
  },
  {
    slug: "pussy-galore",
    nameKo: "푸시 갤로어",
    nameEn: "Pussy Galore",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    actressKo: "오너 블랙먼",
    actressEn: "Honor Blackman",
    filmSlug: "goldfinger",
    filmTitleKo: "골드핑거",
    hasDetail: true,
    oneLiner: "파일럿이자 골드핑거의 카드. 이름이 먼저 화제가 된 인물.",
    posterTone:
      "linear-gradient(165deg,#4a3b12 0%,#0B0D10 50%,#C6A75E44 100%)",
    bio: "골드핑거의 항공 팀을 이끄는 푸시 갤로어는 본드와 대등하게 말을 섞는 몇 안 되는 초기 상대다. 비행과 유도, 그리고 그랜드 슬램 작전의 실행을 담당한다. 이름과 전향 연출은 현대 시청자가 가장 먼저 주석을 달게 되는 지점이다. 캐릭터를 볼 때는 이름 개그보다 그녀가 작전의 키를 쥐고 있다는 구조가 더 중요하다.",
    notes:
      "오너 블랙먼은 촬영 당시 이미 TV로 알려진 배우였다. 비행 시퀀스와 포트 녹스 침투는 본드걸을 ‘장식’이 아니라 플롯 장치로 쓰는 예.",
    sources: [
      {
        label: "007.com — Goldfinger",
        href: "https://www.007.com/goldfinger/",
      },
      {
        label: "Wikipedia — Pussy Galore",
        href: "https://en.wikipedia.org/wiki/Pussy_Galore",
      },
    ],
  },
  {
    slug: "vesper-lynd",
    nameKo: "베스퍼 린드",
    nameEn: "Vesper Lynd",
    nationalityKo: "프랑스",
    nationalityEn: "France",
    actressKo: "에바 그린",
    actressEn: "Eva Green",
    filmSlug: "casino-royale-2006",
    filmTitleKo: "카지노 로얄",
    hasDetail: true,
    oneLiner: "재무부의 감시자에서, 크레이그 본드가 끝내 넘지 못한 이름이 된다.",
    posterTone:
      "linear-gradient(165deg,#1a1208 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: "본드의 판돈을 들고 몬테네그로에 도착한 베스퍼는 말로 요원을 시험하고, 독이 오른 본드를 살리며, 베네치아에서 선택을 내린다. 크레이그 시기의 연속성은 이 인물에서 시작된다고 해도 과하지 않다. 이후 작품에서 본드가 사람을 믿지 못하는 방식은 대부분 이곳으로 돌아간다.",
    notes:
      "소설의 베스퍼를 2006년 영화가 거의 중심축으로 끌어올렸다. 엔딩 대사는 강한 스포일러이므로 명대사 페이지에서 표시한다.",
    sources: [
      {
        label: "007.com — Casino Royale",
        href: "https://www.007.com/casino-royale/",
      },
      {
        label: "Wikipedia — Vesper Lynd",
        href: "https://en.wikipedia.org/wiki/Vesper_Lynd",
      },
    ],
  },
  {
    slug: "tatiana-romanova",
    nameKo: "타티아나 로마노바",
    nameEn: "Tatiana Romanova",
    nationalityKo: "이탈리아",
    nationalityEn: "Italy",
    actressKo: "다니엘라 비안키",
    actressEn: "Daniela Bianchi",
    filmSlug: "from-russia-with-love",
    filmTitleKo: "위기일발",
    hasDetail: true,
    oneLiner: "이스탄불의 암호 기계와 함께 등장하는 소련 측 연락.",
    posterTone:
      "linear-gradient(165deg,#3a1c1c 0%,#0B0D10 50%,#8a5a3222 100%)",
    bio: "이스탄불의 소련 연락선으로 등장하는 타티아나 로마노바는 렉터 암호기를 미끼로 본드를 끌어들이는 스펙터의 함정에 놓여 있다. 호텔 방과 오리엔트 특급, 클레브의 구두끝이 한 몸에 겹친다. 마음이 먼저인지 명령이 먼저인지는 화면이 끝까지 겹쳐 둔다. 플롯의 키는 그녀가 쥐지 않은 암호기다. 허니가 길을 열고 푸시가 시계를 쥐면, 타티아나는 미끼이자 동행이다.",
    notes:
      "다니엘라 비안키의 영어 대사는 본편 트랙에서 다른 배우의 더빙으로 들어간다. 얼굴의 아이콘과 음성의 아이콘이 갈리는 초기 예이며, 허니 라이더와 같은 층이다. 결말의 방아쇠는 영화 상세와 가십에서 층을 나눈다.",
    sources: [
      {
        label: "007.com — From Russia with Love",
        href: "https://www.007.com/from-russia-with-love/",
      },
      {
        label: "Wikipedia — Tatiana Romanova",
        href: "https://en.wikipedia.org/wiki/Tatiana_Romanova",
      },
    ],
  },
  {
    slug: "madeleine-swann",
    nameKo: "마들렌 스완",
    nameEn: "Madeleine Swann",
    nationalityKo: "프랑스",
    nationalityEn: "France",
    actressKo: "레아 세두",
    actressEn: "Léa Seydoux",
    filmSlug: "spectre",
    filmTitleKo: "스펙터 / 노 타임 투 다이",
    hasDetail: true,
    oneLiner: "두 편에 걸쳐 본드의 사적인 시간을 담당하는 인물.",
    posterTone:
      "linear-gradient(165deg,#181010 0%,#0B0D10 50%,#8a303022 100%)",
    bio: "미스터 화이트의 딸인 마들렌 스완은 스펙터에서 본드의 사적 시간을 열고, 노 타임 투 다이에서 그 시간을 두 편째로 이어 간다. 오스트리아 클리닉과 탕헤르의 열차, 조직을 가족으로 읽는 블로펠드가 한 인물에 쌓인다. 베스퍼가 단절이라면 마들렌은 지속의 시도다. 가족—아버지와, 후반에 드러나는 아이—이 동기가 되는 자리는 시리즈에서 드물다. 결말의 무게는 영화 상세에 두고, 이 칸은 두 편에 걸친 지속만 적는다.",
    notes:
      "레아 세두는 같은 배역으로 공식 시리즈에 연속 출연한 드문 경우다. 엔딩과 가족 관계는 시리즈를 가르는 스포일러이므로 상세 페이지와 영화 쪽에서 층을 나눈다.",
    sources: [
      {
        label: "007.com — Spectre",
        href: "https://www.007.com/spectre/",
      },
      {
        label: "007.com — No Time to Die",
        href: "https://www.007.com/no-time-to-die/",
      },
      {
        label: "Wikipedia — Madeleine Swann",
        href: "https://en.wikipedia.org/wiki/Madeleine_Swann",
      },
    ],
  },
  {
    slug: "xenia-onatopp",
    nameKo: "크세니아 오나톱",
    nameEn: "Xenia Onatopp",
    nationalityKo: "네덜란드",
    nationalityEn: "Netherlands",
    actressKo: "파미케 얀센",
    actressEn: "Famke Janssen",
    filmSlug: "goldeneye",
    filmTitleKo: "골든아이",
    hasDetail: true,
    oneLiner: "액션 입문 경로에서 악역 카리스마의 한 축.",
    posterTone:
      "linear-gradient(165deg,#3a3010 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: "야누스의 암살자 크세니아 오나톱은 골든아이에서 로맨스의 상대가 아니라 습격의 몸으로 등장한다. 몬테카를로의 페라리와 타이거 헬기, 허벅지의 살인이 악역 카리스마를 먼저 고정한다. 본드걸 카드에 올라가 있으나, 플롯의 길이는 암살 쪽에 있다. 결말의 잔여를 함께하는 쪽은 나탈리아 시모노바다. 90년대 제품 배치 시대의 얼굴이기도 하다.",
    notes:
      "파미케 얀센의 등장은 브로스넌 첫 편의 악역 카리스마를 한 몸에 모은다. 이름 말장난과 페라리 배치는 가십과 화면을 나눠 적는다.",
    sources: [
      {
        label: "007.com — GoldenEye",
        href: "https://www.007.com/goldeneye/",
      },
      {
        label: "Wikipedia — Xenia Onatopp",
        href: "https://en.wikipedia.org/wiki/Xenia_Onatopp",
      },
    ],
  },
  {
    slug: "tracy-di-vicenzo",
    nameKo: "트레이시 디 비첸초",
    nameEn: "Tracy di Vicenzo",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    actressKo: "다이애나 리그",
    actressEn: "Diana Rigg",
    filmSlug: "on-her-majestys-secret-service",
    filmTitleKo: "여왕폐하 대작전",
    hasDetail: true,
    oneLiner: "시리즈가 아내로 허용한 드문 상대. 이름보다 최후가 먼저 인용된다.",
    posterTone:
      "linear-gradient(165deg,#2a2040 0%,#0B0D10 50%,#8a6ac622 100%)",
    bio: "백작 부인 테레사 디 비첸초는 드라코의 딸이자, 본드가 이름을 다시 대는 상대다. 카지노의 빚과 산정의 클리닉, 포르투갈의 결혼식이 한 인물에 쌓인다. 시리즈가 사생활을 허용한 드문 자리이며, 결말의 무게가 배역의 핵심이다. 허니가 길이고 푸시가 시계라면, 트레이시는 시간을 나눈 사람이다.",
    notes:
      "다이애나 리그는 어벤저스의 얼굴로 이미 알려진 배우였다. 엔딩과 결혼은 스포일러이므로 상세 페이지에서 층을 나눈다.",
    sources: [
      {
        label: "007.com — On Her Majesty's Secret Service",
        href: "https://www.007.com/the-films/on-her-majestys-secret-service/",
      },
      {
        label: "Wikipedia — Tracy Bond",
        href: "https://en.wikipedia.org/wiki/Tracy_Bond",
      },
    ],
  },
  {
    slug: "domino",
    nameKo: "도미노",
    nameEn: "Domino",
    nationalityKo: "프랑스",
    nationalityEn: "France",
    actressKo: "클로딘 오제",
    actressEn: "Claudine Auger",
    filmSlug: "thunderball",
    filmTitleKo: "썬더볼 작전",
    hasDetail: true,
    oneLiner: "요트의 연인으로 보이지만, 작살의 방향이 결말을 가른다.",
    posterTone:
      "linear-gradient(165deg,#12344a 0%,#0B0D10 50%,#2a6a8a22 100%)",
    bio: "도미니크 데르발—도미노—는 라르고의 요트에서 본드를 맞는다. 혈연의 증거가 전향의 열쇠가 되고, 작살이 협박의 무대를 닫는다. 코너리 시기 물의 사람 칸이다. DB5는 잔향이고, 본편은 해역이다.",
    notes:
      "클로딘 오제의 얼굴이 물의 본드걸로 고정되는 속도가 빨랐다. 결말의 작살은 영화 상세와 가십에서 층을 나눈다.",
    sources: [
      {
        label: "007.com — Thunderball",
        href: "https://www.007.com/the-films/thunderball/",
      },
      {
        label: "Wikipedia — Domino (James Bond)",
        href: "https://en.wikipedia.org/wiki/Domino_(James_Bond)",
      },
    ],
  },
  {
    slug: "anya-amasova",
    nameKo: "아냐 아마소바",
    nameEn: "Anya Amasova",
    nationalityKo: "미국",
    nationalityEn: "United States",
    actressKo: "바버라 바크",
    actressEn: "Barbara Bach",
    filmSlug: "the-spy-who-loved-me",
    filmTitleKo: "나를 사랑한 스파이",
    hasDetail: true,
    oneLiner: "KGB 소령 트리플 X. 설계도를 훔친 동료이자, 일이 끝나면 죽이겠다고 선언하는 상대.",
    posterTone:
      "linear-gradient(165deg,#10283a 0%,#0B0D10 50%,#3aa0c622 100%)",
    bio: "아냐 아마소바는 카이로에서 본드의 신원을 맞히고, 에스프리의 설계도를 이미 읽었다고 말하며, 열차 칸에서 복수를 선언한다. 냉전 협력의 한 편이 동등한 기관의 입을 필요로 하는 자리다. 엔딩의 개그는 이슈 칸으로 내린다.",
    notes:
      "바버라 바크의 트리플 X는 무어 시기 정점에 가까운 상대다. 에스프리 L2가 같은 해의 차 칸을 나눠 받는다.",
    sources: [
      {
        label: "007.com — The Spy Who Loved Me",
        href: "https://www.007.com/the-films/the-spy-who-loved-me/",
      },
      {
        label: "Wikipedia — Anya Amasova",
        href: "https://en.wikipedia.org/wiki/Anya_Amasova",
      },
    ],
  },
  {
    slug: "octopussy",
    nameKo: "옥토퍼시",
    nameEn: "Octopussy",
    nationalityKo: "스웨덴",
    nationalityEn: "Sweden",
    actressKo: "모드 애덤스",
    actressEn: "Maud Adams",
    filmSlug: "octopussy",
    filmTitleKo: "옥토퍼시",
    hasDetail: true,
    oneLiner: "서커스와 밀수의 우두머리. 황금총의 안드레아에 이은 두 번째 주역.",
    posterTone:
      "linear-gradient(165deg,#2a1040 0%,#0B0D10 50%,#a05ec622 100%)",
    bio: "옥토퍼시는 여성만의 궁에서 본드를 맞고, 서커스를 밀수의 겉면으로 쓰다가, 아버지의 명예와 카말의 배신 사이에서 전향한다. 모드 애덤스는 공식 시리즈에서 서로 다른 본드걸 주역을 두 번 맡은 유일한 배우로 007.com이 적는다.",
    notes:
      "제목이 인물을 삼키기 쉽다. 상세는 문어 문양보다 파이프라인의 키를 앞에 둔다.",
    sources: [
      {
        label: "007.com — Octopussy",
        href: "https://www.007.com/the-films/octopussy/",
      },
      {
        label: "Wikipedia — Octopussy (character)",
        href: "https://en.wikipedia.org/wiki/Octopussy_(character)",
      },
    ],
  },
  {
    slug: "wai-lin",
    nameKo: "웨이 린",
    nameEn: "Wai Lin",
    nationalityKo: "말레이시아",
    nationalityEn: "Malaysia",
    actressKo: "양자경",
    actressEn: "Michelle Yeoh",
    filmSlug: "tomorrow-never-dies",
    filmTitleKo: "네버 다이",
    hasDetail: true,
    oneLiner: "중국 측 현장 요원. 같은 잔해를 쫓다 동등한 상대로 합류한다.",
    posterTone:
      "linear-gradient(165deg,#101828 0%,#0B0D10 50%,#4a6ac622 100%)",
    bio: "웨이 린은 남중국해의 잔해에서 본드와 맞닥뜨리고, 호치민의 옥상과 오토바이로 달아난 뒤, 스텔스함 위에서 특종을 멈춘다. 함부르크의 버튼은 750iL의 몫이고, 현장의 손은 이쪽이다. 스턴트의 상당을 직접 했다는 기록이 반복된다.",
    notes:
      "양자경은 촬영 당시 이미 홍콩 액션의 얼굴이었다. 패리스 카버와 한 편에 두 칸이 오르는 분업이다.",
    sources: [
      {
        label: "007.com — Tomorrow Never Dies",
        href: "https://www.007.com/the-films/tomorrow-never-dies/",
      },
      {
        label: "Wikipedia — Wai Lin",
        href: "https://en.wikipedia.org/wiki/Wai_Lin",
      },
    ],
  },
  {
    slug: "jinx",
    nameKo: "징크스",
    nameEn: "Jinx",
    nationalityKo: "미국",
    nationalityEn: "United States",
    actressKo: "할리 베리",
    actressEn: "Halle Berry",
    filmSlug: "die-another-day",
    filmTitleKo: "어나더데이",
    hasDetail: true,
    oneLiner: "하바나 해안의 오마주가 입구이고, 화물기의 결전이 역할이다.",
    posterTone:
      "linear-gradient(165deg,#102030 0%,#0B0D10 50%,#8ac0d022 100%)",
    bio: "자친타 존슨—징크스—는 허니 라이더의 해변을 40주년이 호출하는 입구로 등장한다. 호출은 찬양이지 원본의 복수가 아니다. 현장의 일은 그레이브스를 쫓는 손과 화물기의 결전에 있다. 미란다 프로스트가 문을 택하는 동안, 잔여를 함께하는 쪽은 이쪽이다.",
    notes:
      "할리 베리의 해안은 허니 상세가 이미 오마주로 적는다. 이 칸은 호출을 찬양으로 키우지 않고 결전을 되돌린다.",
    sources: [
      {
        label: "007.com — Die Another Day",
        href: "https://www.007.com/the-films/die-another-day/",
      },
      {
        label: "Wikipedia — Jinx (James Bond)",
        href: "https://en.wikipedia.org/wiki/Jinx_(James_Bond)",
      },
    ],
  },
  ...supportingBondGirls,
];

export function getBondGirl(slug: string) {
  return bondGirls.find((g) => g.slug === slug);
}

export function girlRoleKind(girl: BondGirl): BondGirlRoleKind {
  return girl.roleKind ?? "본드걸";
}

export function isHomeBondGirl(girl: BondGirl) {
  return girl.featuredOnHome !== false;
}
