import type { CastChip } from "./filmDetails";
import type { FilmCardData } from "./films";
import type { Footnote, QuoteItem, Source } from "./types";

export type UnofficialFilmCard = FilmCardData & {
  statusKo: string;
  director: string;
};

export const unofficialFilms: UnofficialFilmCard[] = [
  {
    slug: "casino-royale-1967",
    titleKo: "카지노 로얄 (1967)",
    titleEn: "Casino Royale",
    year: 1967,
    actorSlug: "david-niven",
    actorKo: "데이비드 니븐",
    actorEn: "David Niven",
    hasDetail: true,
    akaKo: "007 카지노 로얄",
    statusKo: "패러디 · 첫 소설의 별도 권리",
    director: "존 휴스턴 등 (복수 감독)",
    posterTone:
      "linear-gradient(165deg,#3a3018 0%,#0B0D10 50%,#C6A75E33 100%)",
  },
  {
    slug: "never-say-never-again",
    titleKo: "네버 세이 네버 어게인",
    titleEn: "Never Say Never Again",
    year: 1983,
    actorSlug: "sean-connery",
    actorKo: "숀 코너리",
    actorEn: "Sean Connery",
    hasDetail: true,
    statusKo: "썬더볼 권리 분쟁 · 에온 밖 코너리",
    director: "어빈 커슈너 (Irvin Kershner)",
    posterTone:
      "linear-gradient(165deg,#12344a 0%,#0B0D10 50%,#2a6a8a22 100%)",
  },
];

export type UnofficialFilmDetail = {
  slug: string;
  runtime: string;
  director: string;
  krRelease: string;
  oneLiner: string;
  status: string[];
  spoilerWarning: string;
  plot: string[];
  cast: CastChip[];
  quotes: QuoteItem[];
  trailerYoutubeId?: string;
  related: { href: string; label: string }[];
  sources: Source[];
  footnotes: Footnote[];
};

export const unofficialFilmDetails: Record<string, UnofficialFilmDetail> = {
  "casino-royale-1967": {
    slug: "casino-royale-1967",
    runtime: "131분",
    director: "존 휴스턴, 켄 휴스, 밸 게스트, 조 맥그래스, 로버트 패리시, 리처드 탤매지",
    krRelease: "국내 개봉 일자는 월 단위로 닫히지 않습니다",
    oneLiner:
      "첫 본드 소설의 제목을 빌린 패러디. 여러 감독이 나눠 찍은 풍자입니다.",
    status: [
      "에온 프로덕션의 공식 시리즈가 아닙니다. 찰스 K. 펠드먼 쪽이 《카지노 로얄》 소설의 영화 권리를 갖고 컬럼비아 계열로 만든 1967년 작품입니다. 같은 해 에온은 《두 번 산다》를 냈습니다. 두 편은 한 목록의 연속이 아닙니다.",
      "데이비드 니븐이 연기하는 것은 은퇴한 경의 제임스 본드에 가깝고, 피터 셀러스와 우디 앨런, 우르술라 안드레스, 오슨 웰스가 저마다의 호흡으로 끼어듭니다. 감독 크레딧이 여럿인 것은 제작이 한 사람의 메가폰으로 닫히지 않았다는 뜻입니다. 바카라의 긴장보다, 스파이 영화 자체를 희화하는 쪽이 앞섭니다.",
      "2006년 에온의 《카지노 로얄》은 같은 제목의 리부트이지, 이 편의 속편이 아닙니다. 에온 공식 시리즈 25편에 1967년작은 없습니다. 한국어 홍보에서는 007 카지노 로얄로 불리기도 했습니다. 목록의 제목은 연도를 붙여 2006년 공식 편과 가릅니다.",
    ],
    spoilerWarning:
      "아래 줄거리는 패러디의 큰 반전과 결말 쪽 장난을 포함합니다. 첫 시청 전이라면 지위 설명만 보고 넘어가도 됩니다.",
    plot: [
      "스머시가 현직 007들을 제거하자, 본부는 은퇴한 제임스 본드를 다시 불러들인다. 경의 본드는 요원의 이름 자체를 여러 사람에게 나눠 주고, 르 시프르의 카지노는 소설의 바카라 대신 소동의 무대로 남는다.",
      "에블린 트림블이 카드 전문가로 투입되고, 경의 조카 지미 본드가 반대편을 민다. 베스퍼와 르 시프르가 저마다의 에피소드를 밀고 간다. 한 편의 잠입이라기보다, 스케치가 제목을 공유한다.",
      "결말의 소동은 요원 영화의 무게를 일부러 무너뜨린다. 카지노는 폭발로 닫히고, 살아남은 얼굴들은 천국과 지옥으로 흩어진다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "Sir James Bond",
        role: "본드 (비공식)",
        note: "데이비드 니븐. 은퇴한 경의 본드. 코너리의 공식 연속과 이어지지 않습니다.",
      },
      {
        nameKo: "에블린 트림블",
        nameEn: "Evelyn Tremble",
        role: "007로 위장",
        note: "피터 셀러스. 카지노의 전문가로 투입되는 코미디의 축.",
      },
      {
        nameKo: "베스퍼 린드",
        nameEn: "Vesper Lynd",
        role: "베스퍼",
        note: "우르술라 안드레스. 공식 1편의 허니를 연기한 배우가, 여기서는 다른 호흡의 베스퍼를 맡습니다.",
      },
      {
        nameKo: "르 시프르",
        nameEn: "Le Chiffre",
        role: "적대자",
        note: "오슨 웰스. 소설의 악당 이름을 패러디의 테이블에 올립니다.",
      },
    ],
    quotes: [],
    related: [
      { href: "/films", label: "영화 허브 · 공식/비공식" },
      { href: "/films/casino-royale-2006", label: "카지노 로얄 (2006) · 공식" },
      { href: "/ian-fleming", label: "원작 · 이언 플레밍" },
      { href: "/films/you-only-live-twice", label: "같은 해 에온 · 두 번 산다" },
      { href: "/bond-girls/honey-ryder", label: "허니 라이더 · 안드레스" },
    ],
    sources: [
      {
        label: "IMDb — Casino Royale (1967)",
        href: "https://www.imdb.com/title/tt0061452/",
      },
      {
        label: "Wikipedia — Casino Royale (1967 film)",
        href: "https://en.wikipedia.org/wiki/Casino_Royale_(1967_film)",
      },
      {
        label: "007.com — Casino Royale (2006, 공식 편)",
        href: "https://www.007.com/the-films/casino-royale/",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "에온 공식 목록에 1967년 카지노 로얄이 없는 것은 007.com의 필름 목록과 제작사 서술이 공유합니다.",
      },
      {
        n: 2,
        text: "복수 감독 크레딧은 IMDb·영어 위키백과가 열거하는 여섯 이름을 따릅니다. 한 사람의 연출로 읽지 않습니다.",
      },
      {
        n: 3,
        text: "상영 시간 131분은 IMDb를 따릅니다. 컷에 따라 길이가 갈릴 수 있습니다.",
      },
      {
        n: 4,
        text: "공식 유튜브 채널의 확인된 예고편이 없어 이 칸은 비어 있습니다.",
      },
    ],
  },
  "never-say-never-again": {
    slug: "never-say-never-again",
    runtime: "134분",
    director: "어빈 커슈너 (Irvin Kershner)",
    krRelease: "국내 개봉은 1984년 기록이 있으나, 제작·영어권은 1983년입니다",
    oneLiner:
      "썬더볼의 권리가 에온 밖에서 다시 찍은 편. 코너리가 돌아오되, 에온 공식 시리즈 25편에는 없습니다.",
    status: [
      "에온 프로덕션의 공식 시리즈가 아닙니다. 《썬더볼 작전》을 둘러싼 케빈 매컬로리 쪽 권리가, 1983년 워너 계열의 이 편으로 이어집니다. 어빈 커슈너가 연출하고, 숀 코너리가 제임스 본드로 돌아옵니다. 같은 해 에온은 《옥토퍼시》를 냈습니다. 배우의 얼굴이 같아도 목록은 갈립니다.",
      "줄거리의 뼈대는 핵 무기 탈취와 스펙터 계열의 협박으로, 1965년 공식 4편과 겹칩니다. 리메이크인지 별도 작품인지를 한 단어로 닫지 않습니다. 권리의 갈림이 만든 재촬영에 가깝고, 에온 연속성의 다음 편은 아닙니다. 코너리의 공식 편수는 여섯입니다. 이 편은 일곱 번째가 아닙니다.",
      "한국어 개봉·홍보에서는 007을 붙인 제목이 보이기도 합니다. 목록의 제목은 네버 세이 네버 어게인입니다. 공식 유튜브 예고편은 확인되지 않습니다.",
    ],
    spoilerWarning:
      "아래 줄거리는 핵 협박의 전개와 결말의 대결을 포함합니다. 첫 시청 전이라면 지위 설명만 보고 넘어가도 됩니다.",
    plot: [
      "스펙터 쪽의 파투마 블러시와 막시밀리안 라고가 핵탄두를 손에 넣고 몸값을 요구한다. 도미노의 형제—미 공군 조종사—가 그 탈취의 입구다. 본드는 바하마와 남프랑스의 요양소와 카지노를 오가며 탄두의 행방을 쫓는다.",
      "도미노 페타치와 파투마가 이 편의 상대 축이다. 본드는 카지노와 요트, 수중을 오가며 도미노를 전향시킨다. 라고는 요트의 주인으로 남는다.",
        "결말의 수중·요새 대결에서 탄두는 회수되고, 라고와의 마지막 대치가 끝난다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007 (비공식)",
        note: "숀 코너리. 공식 6편 밖의 귀환. 에온 연속성의 일곱 번째가 아닙니다.",
      },
      {
        nameKo: "도미노 페타치",
        nameEn: "Domino Petachi",
        role: "도미노",
        note: "킴 베이싱어. 공식 썬더볼의 도미노와 이름이 맞닿되, 같은 연속은 아닙니다.",
      },
      {
        nameKo: "파투마",
        nameEn: "Fatima Blush",
        role: "스펙터 측",
        note: "바버라 카레라. 이 편이 공식 목록과 갈리는 악역 축의 한쪽.",
      },
      {
        nameKo: "막시밀리안 라고",
        nameEn: "Maximilian Largo",
        role: "적대자",
        note: "클라우스 마리아 브란다우어. 공식 편의 라르고에 대응하는 자리.",
      },
    ],
    quotes: [],
    related: [
      { href: "/films", label: "영화 허브 · 공식/비공식" },
      { href: "/films/thunderball", label: "썬더볼 작전 · 공식 4편" },
      { href: "/films/octopussy", label: "같은 해 에온 · 옥토퍼시" },
      { href: "/bonds/sean-connery", label: "숀 코너리" },
      { href: "/ian-fleming", label: "원작 · 이언 플레밍" },
    ],
    sources: [
      {
        label: "IMDb — Never Say Never Again (1983)",
        href: "https://www.imdb.com/title/tt0086006/",
      },
      {
        label: "Wikipedia — Never Say Never Again",
        href: "https://en.wikipedia.org/wiki/Never_Say_Never_Again",
      },
      {
        label: "007.com — Thunderball (공식 4편)",
        href: "https://www.007.com/the-films/thunderball/",
      },
      {
        label: "007.com — Octopussy (같은 해 에온)",
        href: "https://www.007.com/the-films/octopussy/",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "매컬로리 측 권리와 썬더볼의 재촬영이라는 정리는 영어 위키백과와 제작 후일담이 공유합니다. 에온 공식 목록에는 올라 있지 않습니다.",
      },
      {
        n: 2,
        text: "코너리의 공식 편수 6은 에온 목록(닥터 노부터 다이아몬드는 영원히)입니다. 이 편은 그 밖에 있습니다.",
      },
      {
        n: 3,
        text: "상영 시간 134분은 IMDb를 따릅니다. 같은 해 옥토퍼시와의 박스오피스 숫자는 집계마다 갈려, 맞붙었다는 사실만 적습니다.",
      },
      {
        n: 4,
        text: "공식 유튜브 채널의 확인된 예고편이 없어 이 칸은 비어 있습니다.",
      },
    ],
  },
};

export function getUnofficialFilm(slug: string) {
  return unofficialFilms.find((film) => film.slug === slug);
}

export function unofficialNeighbors(slug: string) {
  const index = unofficialFilms.findIndex((film) => film.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? unofficialFilms[index - 1] : undefined,
    next: index < unofficialFilms.length - 1 ? unofficialFilms[index + 1] : undefined,
  };
}
