import type { Footnote, GossipItem, QuoteItem, Source } from "./types";
import { conneryLazenbyDetails } from "./filmDetailsMore/conneryLazenby";
import { mooreDetails } from "./filmDetailsMore/moore";
import { daltonBrosnanDetails } from "./filmDetailsMore/daltonBrosnan";
import { craigRestDetails } from "./filmDetailsMore/craigRest";

export type CastChip = {
  slug?: string;
  nameKo: string;
  nameEn: string;
  role: string;
  note?: string;
};

export type CarL1 = {
  density: "thin" | "thick" | "solid";
  title: string;
  body: string;
  carSlugs: string[];
  gossipTeasers?: GossipItem[];
  ctaPath: string;
  ctaLabel: string;
};

export type FilmDetail = {
  slug: string;
  runtime: string;
  director: string;
  krRelease: string;
  oneLiner: string;
  spoilerWarning: string;
  plot: string[];
  cast: CastChip[];
  cars: CarL1;
  quotes: QuoteItem[];
  trailerYoutubeId: string;
  issuesTeaser?: string;
  sources: Source[];
  footnotes: Footnote[];
  related: { href: string; label: string }[];
};

export const filmDetails: Record<string, FilmDetail> = {
  "dr-no": {
    slug: "dr-no",
    runtime: "110분",
    director: "테렌스 영 (Terence Young)",
    krRelease: "1963년 8월 20일",
    oneLiner:
      "자메이카에서 연락관이 죽고, 본드는 크랩 키의 전파 방해를 끊으러 간다.",
    spoilerWarning:
      "아래 줄거리는 결말과 주요 반전을 포함합니다. 첫 시청 전이라면 예고편과 한 줄 소개만 보고 넘어가도 됩니다.",
    plot: [
      "자메이카 주재 영국 연락관 스트랭웨이즈가 살해된다. 같은 무렵 미국의 로켓 시험을 흔드는 전파 방해가 잡히고, M은 제임스 본드를 킹스턴으로 보낸다. 본드는 정장과 권총을 들고 섬에 내린다.",
      "킹스턴에서 본드는 시각장애인으로 위장한 암살조를 만나고, 지질학자 덴트의 거짓말을 듣는다. 비서 타로의 별장 침대 위에는 독거미가 올라온다. 현지 어부 쿼럴과 CIA의 펠릭스 라이터가 단서를 나누고, 바위 표본은 출입 금지 섬 크랩 키(Crab Key)를 가리킨다.",
      "해변에서 허니 라이더가 칼과 조개망을 들고 나타난다. 아버지는 크랩 키에서 사라졌고, 그녀는 그 해안을 안다. 세 사람은 배로 잠입하지만 화염 방사 장비가 습지를 훑고, 쿼럴은 그 불 속에서 죽는다.",
      "붙잡힌 본드는 지하 시설에서 닥터 노를 만난다. 금속 의수, 스펙터(SPECTRE), 로켓을 교란하는 원자로. 만찬 자리의 대화는 곧 협박이다. 본드는 원자로를 과열시켜 시설을 무너뜨리고, 허니와 함께 뗏목을 타고 섬을 떠난다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "숀 코너리가 처음으로 이름을 대는 자리. 아직 만능 요원이라기보다, 정장과 권총으로 섬을 걷는 영국 스파이의 초상이다.",
      },
      {
        slug: "honey-ryder",
        nameKo: "허니 라이더",
        nameEn: "Honey Ryder",
        role: "본드걸",
        note: "우르술라 안드레스. 해변의 흰 수영복은 홍보 사진의 원본이 되었지만, 인물은 아버지의 죽음과 섬의 지리를 들고 움직인다.",
      },
      {
        nameKo: "닥터 노",
        nameEn: "Dr. No",
        role: "적대자",
        note: "조지프 와이즈먼. 금속 손으로 식사하는 과학자가 스펙터와 원자로를 연결한다. 시리즈가 이후에 반복할 거대 악당의 첫 얼굴.",
      },
      {
        nameKo: "펠릭스 라이터",
        nameEn: "Felix Leiter",
        role: "CIA",
        note: "잭 로드. 이후 배우가 여러 번 바뀌는 역할의 첫 화면. 본드에게 정보를 나누되, 섬의 잠입은 맡기지 않는다.",
      },
      {
        nameKo: "M",
        nameEn: "M",
        role: "국장",
        note: "버나드 리. 브리핑실의 낮고 짧은 명령이 이후 시리즈 국장의 기본 음역이 된다.",
      },
      {
        nameKo: "쿼럴",
        nameEn: "Quarrel",
        role: "현지 협력",
        note: "존 키츠밀러. 배와 지리를 제공하는 동행이자, 크랩 키에서 시리즈가 처음 잃는 조력자.",
      },
      {
        slug: "miss-moneypenny",
        nameKo: "미스 머니페니",
        nameEn: "Miss Moneypenny",
        role: "비서",
        note: "로이스 맥스웰. 런던 사무실의 농담과 시선이, 현장보다 본부의 온도를 먼저 만든다.",
      },
      {
        slug: "sylvia-trench",
        nameKo: "실비아 트렌치",
        nameEn: "Sylvia Trench",
        role: "조연",
        note: "유니스 게이슨. 클럽에서 본드가 이름을 대는 상대. 허니와 자리가 겹치지 않는다.",
      },
    ],
    cars: {
      density: "thin",
      title: "본드카 이전, 1960년대의 입구",
      body: "이 작품에서 본드가 몰고 다니는 상징 차는 애스턴이 아니다. 자메이카 도로의 썬빔 알파인 정도가 스치듯 보일 뿐, 가젯이 달린 영국 그랜드 투어러라는 공식은 아직 없다. 시리즈가 아이콘 차량을 고르는 전환점은 2년 뒤 골드핑거의 DB5다. 60년대 영국차—특히 애스턴 마틴—의 결을 보고 싶다면 여기서 바로 이어갈 수 있다. 본드카 칸은 얇다. 없는 차를 부풀리지 않는다.",
      carSlugs: [],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "공식 시리즈 첫 작품에 애스턴 마틴은 등장하지 않는다. 본드카라는 말이 고정되는 지점은 골드핑거의 DB5다.",
        },
        {
          label: "팬 설",
          text: "킹스턴의 썬빔 알파인 정도를 첫 본드카로 세자는 이야기가 있다. 화면의 이동 수단인 것은 맞지만, 가젯 GT의 기원으로 보기에는 무리가 있다.",
        },
      ],
      ctaPath: "/brands/aston-martin",
      ctaLabel: "60년대 애스턴 이어보기",
    },
    quotes: [
      {
        speaker: "제임스 본드",
        textKo: "본드. 제임스 본드.",
        textEn: "Bond. James Bond.",
        spoiler: false,
      },
      {
        speaker: "닥터 노",
        textKo: "그건 스미스 앤 웨슨이고, 여섯 발은 이미 다 썼어.",
        textEn: "That's a Smith & Wesson, and you've had your six.",
        spoiler: true,
      },
      {
        speaker: "허니 라이더",
        textKo: "이름요? 라이더. 허니 라이더.",
        textEn: "My name is Ryder. Honey Ryder.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo: "미디엄 드라이 마티니. 레몬 필. 흔들어, 젓지 말고.",
        textEn: "A medium dry martini, lemon peel. Shaken, not stirred.",
        spoiler: false,
      },
    ],
    trailerYoutubeId: "pw61uyA0F8A",
    issuesTeaser:
      "첫 작품의 식민지 풍경과 성별 연출은 이후 시리즈 재평가에서 자주 거론된다. 허니 라이더의 해변과 길잡이는 본드걸을 다시 읽기 글로 이어진다.",
    sources: [
      {
        label: "007.com — Dr. No",
        href: "https://www.007.com/the-films/dr-no/",
      },
      {
        label: "IMDb — Dr. No (1962)",
        href: "https://www.imdb.com/title/tt0055928/",
      },
      {
        label: "Wikipedia — Dr. No (film)",
        href: "https://en.wikipedia.org/wiki/Dr._No_(film)",
      },
      {
        label: "한국어 위키백과 — 007 살인번호 (한국 개봉일)",
        href: "https://ko.wikipedia.org/wiki/007_%EC%82%B4%EC%9D%B8%EB%B2%88%ED%98%B8",
      },
      {
        label: "BFI — Dr. No (1962)",
        href: "https://www.bfi.org.uk/film/cc5ed8bb-1ce4-538d-882f-a196d6f2a12d/dr-no",
      },
      {
        label: "BFI — Happy 50th anniversary, Mr Bond",
        href: "https://www.bfi.org.uk/features/happy-50th-anniversary-mr-bond",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 에온(Eon) 프로덕션 작품 중 첫 편으로 집계한다. 1967년 카지노 로얄 패러디는 공식 시리즈에 넣지 않는다.",
      },
      {
        n: 2,
        text: "본드의 자메이카 차량은 썬빔 알파인으로 기록되는 경우가 많다. 애스턴 DB5는 골드핑거(1964)에서 본격 아이콘이 된다.",
      },
      {
        n: 3,
        text: "한국 개봉일 1963년 8월 20일은 한국어 위키백과 항목의 표기. 일자 단위 1차 자료는 따로 대조하지 못했으므로, 더 정확한 배급 기록이 나오면 수정한다.",
      },
      {
        n: 4,
        text: "상영 시간 110분은 IMDb·공식 소개와 같다. BFI 필름 페이지는 109분으로 적기도 한다. 컷과 프레임레이트 차이에 가까운 표기 차이로 본다.",
      },
      {
        n: 5,
        text: "줄거리는 원문 백과를 옮기지 않고 아카이브 문장으로 다시 썼다. 제작·개봉 숫자는 출처 목록의 페이지를 기준으로 한다.",
      },
    ],
    related: [
      { href: "/films/goldfinger", label: "다음 아이콘 · 골드핑거" },
      { href: "/bond-girls/honey-ryder", label: "허니 라이더" },
      { href: "/bonds/sean-connery", label: "숀 코너리" },
      { href: "/guide/classic", label: "정통 입문 경로" },
    ],
  },
  goldfinger: {
    slug: "goldfinger",
    runtime: "110분",
    director: "가이 해밀턴 (Guy Hamilton)",
    krRelease: "1967년 1월 (일자 미상)",
    oneLiner:
      "금괴와 레이저, 은색 DB5. 포트 녹스를 오염시키려는 계산을 막는다.",
    spoilerWarning:
      "줄거리에는 포트 녹스 계획과 주요 인물의 최후가 포함됩니다.",
    plot: [
      "마이애미에서 본드는 오릭 골드핑거의 카드 속임수를 망가뜨린다. 다음 날 질 마스터슨은 온몸이 금색으로 굳은 채 죽어 있고, 런던의 임무는 금 밀수의 실체를 확인하는 일이다. 골드핑거는 금을 모으는 사람이 아니라, 금의 가치를 오염시킬 수 있는 사람이다.",
      "본드는 Q가 손본 은색 애스턴 마틴 DB5를 타고 스위스 공장으로 향한다. 언니의 죽음에 총을 든 틸리 마스터슨이 알프스에서 엇갈리고, 오드잡은 모자로 사람을 벤다. 공장에서 붙잡힌 본드 앞으로 레이저가 테이블을 가른다.",
      "켄터키 농장에서 본드는 조종사 푸시 갤로어와 맞선다. 그랜드 슬램은 금괴 도난처럼 보이지만, 진짜 목표는 포트 녹스의 비축을 방사능으로 더럽혀 남은 금값을 올리는 것이다. 문이 열릴지는 그녀의 비행팀에 달려 있다.",
      "신경가스와 가짜 사망 뒤로 금고 안의 대치가 열린다. 오드잡과의 결투가 끝나면 비행기 안에서 마지막 주먹이 오가고, 골드핑거는 창밖으로 빨려 나간다. 본드는 낙하산을 펼친 채 살아남는다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "코너리 본드가 가장 편안하게 웃는 편. 골프와 카드, 레이저 테이블 위에서도 문장의 리듬을 놓치지 않는다.",
      },
      {
        slug: "pussy-galore",
        nameKo: "푸시 갤로어",
        nameEn: "Pussy Galore",
        role: "본드걸",
        note: "오너 블랙먼. 이름이 먼저 화제가 되지만, 플롯에서는 그랜드 슬램의 하늘을 쥔 조종사다. 전향 연출은 따로 주석이 필요하다.",
      },
      {
        nameKo: "오릭 골드핑거",
        nameEn: "Auric Goldfinger",
        role: "적대자",
        note: "거트 프뢰베. 금을 모으는 사람이 아니라 금의 가치를 오염시키려는 계산가. 악당 대사의 기준점을 남긴다.",
      },
      {
        nameKo: "오드잡",
        nameEn: "Oddjob",
        role: "경호",
        note: "해럴드 사카타. 대사 없이 모자로 말하는 경호. 포트 녹스 금괴 더미 위의 결투가 캐릭터의 전부다.",
      },
      {
        slug: "jill-masterson",
        nameKo: "질 마스터슨",
        nameEn: "Jill Masterson",
        role: "조력",
        note: "셜리 이튼. 금색으로 굳은 피부는 시리즈에서 가장 오래 인용되는 이미지 중 하나다. 등장 시간은 짧고 잔상은 길다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. DB5 브리핑이 이후 모든 Q 장면의 템플릿이 된다. 차를 발명한 것이 아니라, 소품 부서의 장치를 설명하는 얼굴이다.",
      },
      {
        nameKo: "틸리 마스터슨",
        nameEn: "Tilly Masterson",
        slug: "tilly-masterson",
        role: "복수",
        note: "타니아 말렛. 언니의 죽음에 총을 들고 알프스에 나타난다. 노란 머스탱은 미국차 라인의 작은 출발점이기도 하다.",
      },
    ],
    cars: {
      density: "thick",
      title: "애스턴 마틴 DB5 — 본드카의 원점",
      body: "Q 브랜치가 내준 은색 DB5는 기관총, 연막, 오일 스프레이, 회전 번호판, 그리고 조수석 사출 시트로 관객의 기억을 고정한다. 이 한 대로 시리즈는 영국 스포츠카가 본드의 이동 수단이라는 공식을 만든다. 알프스 산길의 추격과 공장 진입은 차가 개그이자 전투임을 동시에 보여 준다. 스카이폴 창고와 노 타임 투 다이 마테라에서 같은 실루엣이 귀환하는 이유도 여기에 있다. 가젯 목록은 홍보 자료마다 조금씩 다르게 열거되므로, 골드핑거 화면의 핵심 세트만 기준으로 한다.",
      carSlugs: ["aston-martin-db5", "ford-mustang-bond"],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "골드핑거가 DB5를 본드카 아이콘으로 만든 작품이라는 점은 제작사와 공식 사이트 서술과 일치한다.",
        },
        {
          label: "제작진 인터뷰",
          text: "사출 시트 연출에 실제 기계 장치가 쓰였다는 특수효과 쪽 증언이 여러 다큐멘터리에서 반복된다.",
        },
        {
          label: "팬 설",
          text: "번호판 BMT 216A를 행운의 코드처럼 읽는 해석이 있다. 후속작 오마주인 것은 맞지만, 숫자 자체에 숨은 뜻은 확인되지 않는다.",
        },
        {
          label: "미확인",
          text: "현재 남은 오리지널 개조 차량이 정확히 몇 대인지, 특정 경매 물건이 그 한 대인지는 출처마다 숫자가 갈린다.",
        },
      ],
      ctaPath: "/brands/aston-martin",
      ctaLabel: "애스턴 마틴 이어보기",
    },
    quotes: [
      {
        speaker: "제임스 본드",
        textKo: "내가 말하길 바라나?",
        textEn: "Do you expect me to talk?",
        spoiler: true,
      },
      {
        speaker: "골드핑거",
        textKo: "아니, 미스터 본드. 죽길 바라지.",
        textEn: "No, Mr Bond, I expect you to die!",
        spoiler: true,
      },
      {
        speaker: "제임스 본드",
        textKo: "조금 흔들면, 마시면 됩니다.",
        textEn: "A martini. Shaken, not stirred.",
        spoiler: false,
      },
      {
        speaker: "골드핑거",
        textKo: "다음 재담은 신중히 고르게, 미스터 본드. 마지막이 될 테니.",
        textEn:
          "Choose your next witticism carefully, Mr Bond. It may be your last.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "MA65V-oLKa8",
    issuesTeaser:
      "캐릭터 이름과 성별 연출은 현대 재개봉에서도 논쟁 지점이다. 사출 시트와 DB5의 경계는 가젯과 현실, 그 사이 글에서 이어 읽는다.",
    sources: [
      {
        label: "007.com — Goldfinger",
        href: "https://www.007.com/the-films/goldfinger/",
      },
      {
        label: "IMDb — Goldfinger (1964)",
        href: "https://www.imdb.com/title/tt0058150/",
      },
      {
        label: "Wikipedia — Goldfinger (film)",
        href: "https://en.wikipedia.org/wiki/Goldfinger_(film)",
      },
      {
        label: "KMDb — 007 골드핑거 (한국 개봉 1967-01)",
        href: "https://www.kmdb.or.kr/db/kor/detail/movie/F/00523",
      },
      {
        label: "Roger Ebert — Great Movie: Goldfinger (1964)",
        href: "https://www.rogerebert.com/reviews/great-movie-goldfinger-1964",
      },
      {
        label: "007.com — Under the bonnet of the DB5 in Matera",
        href: "https://www.007.com/under-the-bonnet/",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "DB5는 골드핑거에서 시리즈 아이콘이 되었다. 상세 가젯과 제작 일화는 차량 L2 페이지를 참고.",
      },
      {
        n: 2,
        text: "포트 녹스 시퀀스는 실내 세트로 재현된 것으로 알려진다. 실제 금괴 보관소 내부가 아님.",
      },
      {
        n: 3,
        text: "한국 개봉은 KMDb가 1967년 1월로 기록한다. 일자가 00으로 비어 있어 월 단위만 적는다.",
      },
      {
        n: 4,
        text: "로저 이버트 Great Movie 에세이는 골드핑거를 시리즈 문법이 고정된 지점으로 읽는다. 줄거리 문장은 그 에세이를 옮기지 않았다.",
      },
      {
        n: 5,
        text: "가젯 목록(기관총, 연막, 오일, 번호판, 사출 시트)은 작품과 홍보 자료에서 조금씩 다르게 열거된다. 핵심 세트는 골드핑거 화면을 기준으로 한다.",
      },
    ],
    related: [
      { href: "/cars/aston-martin-db5", label: "DB5 자세히" },
      { href: "/bond-girls/pussy-galore", label: "푸시 갤로어" },
      { href: "/films/dr-no", label: "이전 · 닥터 노" },
      { href: "/guide/classic", label: "정통 입문 경로" },
    ],
  },
  "casino-royale-2006": {
    slug: "casino-royale-2006",
    runtime: "144분",
    director: "마틴 캠벨 (Martin Campbell)",
    krRelease: "2006년 12월 21일",
    oneLiner:
      "00 배지를 막 받은 본드가 포커 테이블에서 파산을, 그리고 사람을 배운다.",
    spoilerWarning: "베스퍼의 선택과 엔딩 대사는 강한 스포일러입니다.",
    plot: [
      "흑백 프롤로그에서 본드는 두 건의 살인을 마무리하고 00 자격을 받는다. 자격을 막 받은 사람이 오만과 상처 사이로 걸어 들어가는 과정이다.",
      "마다가스카르의 공사 현장 추격은 대사관 난입으로 이어지고, 마이애미 공항에서는 연료 트럭과 비행기가 터진다. 상대는 금융 중개인 르 시프르다. 테러 자금을 운용하다 오계산을 했고, 손실을 몬테네그로의 포커 테이블에서 메우려 한다. M은 본드를 그 테이블에 앉힌다.",
      "재무부에서 파견된 베스퍼 린드가 판돈을 들고 도착한다. 열차 칸의 대화는 구애처럼 들리지만 실상은 심사다. 테이블에서는 텍사스 홀덤이 펼쳐지고, 독이 들어간 잔이 본드의 심장을 흔든다. 베스퍼가 제세동기를 연결한다.",
      "본드는 게임을 이기지만 끝은 카지노가 아니다. 르 시프르의 고문 방을 펠릭스 라이터가 열고, 베네치아에서 베스퍼의 다른 소속이 드러난다. 침수되는 건물 안에서 본드는 철창을 열지 못하고, 그녀는 물을 선택한다. 본드는 그 이름을 암살 명단에 올리고, 다시 요원으로 돌아간다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "대니얼 크레이그. 자격을 막 받은 요원의 오만과 상처를 몸이 먼저 설명한다. 이후 네 편의 출발점.",
      },
      {
        slug: "vesper-lynd",
        nameKo: "베스퍼 린드",
        nameEn: "Vesper Lynd",
        role: "본드걸",
        note: "에바 그린. 판돈의 감시자에서 크레이그 본드가 끝내 넘지 못한 이름이 된다. 베네치아의 선택은 시리즈 전체의 감정축.",
      },
      {
        nameKo: "르 시프르",
        nameEn: "Le Chiffre",
        role: "적대자",
        note: "매즈 미켈슨. 피눈물과 포커 테이블의 계산가. 테러의 이념보다 손실과 추심이 동기다.",
      },
      {
        nameKo: "M",
        nameEn: "M",
        role: "국장",
        note: "주디 덴치. 브로스넌 시기에서 넘어온 예외적 연속. 신참을 꾸짖는 목소리가 스카이폴의 관계를 예고한다.",
      },
      {
        nameKo: "펠릭스 라이터",
        nameEn: "Felix Leiter",
        role: "CIA",
        note: "제프리 라이트. 테이블의 동맹이자 고문실의 구원. 크레이그 시기 우정의 얼굴을 여기서 시작한다.",
      },
      {
        nameKo: "마티스",
        nameEn: "Mathis",
        role: "연락",
        note: "잔카를로 잔니니. 몬테네그로의 현지 연락. 배신의 혐의와 오해가 리부트의 불신을 한 겹 더 쌓는다.",
      },
      {
        nameKo: "솔란주",
        nameEn: "Solange",
        role: "본드걸",
        note: "카테리나 무리노. 바하마에서 짧게 스치는 인물. 리부트도 초반의 유혹과 대가를 완전히 지우지는 않는다.",
      },
    ],
    cars: {
      density: "solid",
      title: "DBS 리부트, 그리고 DB5로 이어지는 선",
      body: "크레이그 본드의 첫 애스턴은 가젯을 거의 벗긴 DBS다. 바하마의 직선과 공항 활주로의 전복이, 차가 요원을 대신하지 않는다는 리부트 선언처럼 읽힌다. 에어백과 뒤집힌 차체가 물성을 설명하고, 버튼 대신 운전과 충돌이 캐릭터를 말한다. 동시에 시리즈는 고전 DB5를 완전히 버리지 않는다. 이후 스카이폴 창고와 노 타임 투 다이의 가젯 복원은, 이 영화가 연 상처 위에 옛 은색 실루엣을 다시 올리는 연속성이다. 대수와 차대번호 같은 숫자는 매체마다 갈리므로 차량 L2에서 미확인으로 구분한다.",
      carSlugs: ["aston-martin-dbs-2006", "aston-martin-db5"],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "카지노 로얄에서 크레이그 본드의 주력 애스턴이 DBS라는 점은 작품과 공식 시놉시스가 일치한다.",
        },
        {
          label: "제작진 인터뷰",
          text: "활주로 전복을 실차 스턴트로 찍었다는 설명이 메이킹에서 반복된다.",
        },
        {
          label: "팬 설",
          text: "전복 각도를 완벽한 몇 회전으로 고정하는 숫자 신화가 있다. 화면의 인상과 스턴트 리포트가 섞인 이야기로 보는 편이 안전하다.",
        },
        {
          label: "미확인",
          text: "촬영에 동원·파괴된 DBS의 정확한 대수는 공개 자료마다 다르다.",
        },
      ],
      ctaPath: "/brands/aston-martin",
      ctaLabel: "애스턴 마틴 이어보기",
    },
    quotes: [
      {
        speaker: "베스퍼 린드",
        textKo: "아무 깡패나 죽일 수 있지. 난 자네 자아가 방정식 밖으로 나가길 원해.",
        textEn:
          "Any thug can kill. I want you to take your ego out of the equation.",
        spoiler: false,
      },
      {
        speaker: "베스퍼 린드",
        textKo: "난 돈이야.",
        textEn: "I'm the money.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo: "일은 끝났고, 그 여자는 죽었다.",
        textEn: "The job's done and the bitch is dead.",
        spoiler: true,
      },
      {
        speaker: "제임스 본드",
        textKo: "이름은 본드. 제임스 본드.",
        textEn: "The name's Bond, James Bond.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "GV_18deeAXk",
    issuesTeaser:
      "리부트가 본드 배우 교체를 어디까지 리셋으로 보는지는 열린 질문이다. 본드 배우 교체, 어디까지가 리부트인가 글이 그 경계를 적는다.",
    sources: [
      {
        label: "007.com — Casino Royale",
        href: "https://www.007.com/the-films/casino-royale/",
      },
      {
        label: "IMDb — Casino Royale (2006)",
        href: "https://www.imdb.com/title/tt0381061/",
      },
      {
        label: "Wikipedia — Casino Royale (2006 film)",
        href: "https://en.wikipedia.org/wiki/Casino_Royale_(2006_film)",
      },
      {
        label: "Empire — Casino Royale Review",
        href: "https://www.empireonline.com/movies/reviews/casino-royale-review/",
      },
      {
        label: "Roger Ebert — Casino Royale (2007)",
        href: "https://www.rogerebert.com/reviews/casino-royale-2007",
      },
      {
        label: "씨네21 — 변한 듯 그대로인 제임스 본드",
        href: "https://cine21.com/news/view/?mag_id=43520",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "이언 플레밍의 첫 본드 소설을 공식 시리즈가 본격 각색한 작품. 1967년 동명 영화는 별개 제작이다.",
      },
      {
        n: 2,
        text: "활주로 전복에는 실제 DBS 차체가 사용되었다는 제작 기록이 있다. 대수 등 세부 숫자는 차량 L2에서 미확인으로 구분.",
      },
      {
        n: 3,
        text: "한국 개봉 2006년 12월 21일은 국내 개봉 보도와 씨네21 당시 기사들이 공통으로 적는 날짜. KMDb 상세 항은 이 편집에서 따로 고정하지 못했다.",
      },
      {
        n: 4,
        text: "공식 예고편 임베드는 007 채널의 Casino Royale First Full Trailer(GV_18deeAXk)를 쓴다.",
      },
      {
        n: 5,
        text: "소설 원작의 본드 차량과 2006년 영화의 DBS는 다르다. 영화 선택을 기준으로 서술한다.",
      },
    ],
    related: [
      { href: "/cars/aston-martin-dbs-2006", label: "DBS (2006) 자세히" },
      { href: "/bond-girls/vesper-lynd", label: "베스퍼 린드" },
      { href: "/films/skyfall", label: "다음 추천 · 스카이폴" },
      { href: "/guide/first", label: "처음 보는 경로" },
    ],
  },
  skyfall: {
    slug: "skyfall",
    runtime: "143분",
    director: "샘 멘데스 (Sam Mendes)",
    krRelease: "2012년 10월 26일",
    oneLiner:
      "사고로 죽은 줄 알았던 요원이, 고향 집의 지붕 아래에서 기관의 얼굴을 지킨다.",
    spoilerWarning: "M의 운명과 스카이폴 저택 결말은 스포일러입니다.",
    plot: [
      "이스탄불의 추격은 하드 드라이브 회수로 시작되어 열차 지붕에서 빗나간다. M의 무전은 짧다. 쏴. 이브의 탄환은 표적이 아니라 본드를 맞히고, 그는 강으로 떨어진다. 공식 기록은 사망이다. 기관의 명단이 새고, M의 권위가 국내 정치의 대상이 된다.",
      "섬에서 술을 마시던 본드는 런던 폭파 소식을 듣고 돌아온다. 심리와 신체 테스트는 기준 미달인데, M은 그를 현장에 다시 넣는다. 상하이와 마카오를 지나 세버린이 안내하는 폐허의 섬. 적대자 실바는 전직 요원이다. 그는 M이 자신을 버린 이야기를 가족처럼 말한다.",
      "실바를 런던으로 압송하는 것은 승리가 아니라 설계다. Q의 분석이 함정을 열고, 지하철과 청문회가 전장이 된다. 본드는 전산을 끄고 집을 고른다. 런던 창고에서 DB5가 나오고, M을 태워 스코틀랜드의 스카이폴—어린 시절의 집—으로 향한다.",
      "킨케이드와 함께 덫을 놓고 디펜더와 진흙과 다이너마이트로 버틴다. 집은 방어선이 되었다가 불타고, M은 그 잔해 안에서 숨을 거둔다. 말로리가 새로운 M이 되고, 이브는 머니페니라는 이름을 받으며 현장 대신 본부의 문을 연다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "죽은 줄 알았던 요원의 복귀. 테스트는 미달이고, 선택은 집을 방어선으로 쓰는 쪽이다.",
      },
      {
        nameKo: "M",
        nameEn: "M",
        role: "국장",
        note: "주디 덴치. 크레이그 시기 국장의 마지막. 쏴 라는 한 마디와 청문회, 그리고 잔해 속의 작별.",
      },
      {
        nameKo: "실바",
        nameEn: "Raoul Silva",
        role: "적대자",
        note: "하비에르 바르뎀. 버려진 전직 요원. 해킹과 가족 언어로 M을 조준한다.",
      },
      {
        slug: "miss-moneypenny",
        nameKo: "이브 머니페니",
        nameEn: "Eve Moneypenny",
        role: "현장/본부",
        note: "나오미 해리스. 오탄의 현장에서 시작해, 엔딩에서 이름을 받고 본부의 문을 연다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "벤 위쇼. 폭발하는 펜 대신 라디오와 노트북. 함정을 여는 실수도, 아날로그로 되돌리는 재치도 그의 몫.",
      },
      {
        slug: "severine",
        nameKo: "세버린",
        nameEn: "Sévérine",
        role: "조연",
        note: "베레니스 말로. 마카오 카지노에서 실바로 가는 이차 본드걸. 등장 시간은 짧고, 섬의 사격은 가혹하다.",
      },
      {
        nameKo: "말로리 / 신임 M",
        nameEn: "Gareth Mallory",
        role: "국장",
        note: "랠프 파인스. 청문회의 감독자에서 다음 국장이 된다. 크레이그 후반부의 본부 얼굴을 여기서 받는다.",
      },
      {
        nameKo: "킨케이드",
        nameEn: "Kincade",
        role: "조력",
        note: "앨버트 피니. 스카이폴 저택의 관리인. 가끔은 옛 방식이 최고라는 한 줄이 결전의 장비를 설명한다.",
      },
    ],
    cars: {
      density: "solid",
      title: "DB5의 귀환, 그리고 흙먼지 위의 랜드로버",
      body: "런던 창고에서 나온 DB5는 기관총과 이젝터 시트 개그를 다시 켠다. 가젯은 향수가 아니라, 해킹 시대에 아날로그가 더 안전하다는 영화의 논지와 맞물린다. 스코틀랜드로 향하는 은색 실루엣은 골드핑거의 원점을 직접 호출한다. 저택으로 깔리는 길은 랜드로버 디펜더 계열의 영국 오프로더가 맡는다. 애스턴이 스타라면, 디펜더는 집의 바닥이다. 가젯 복원의 세부 배분은 노 타임 투 다이 L1·L2와 함께 보는 편이 정확하다.",
      carSlugs: ["aston-martin-db5", "land-rover-defender"],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "스카이폴의 런던 창고에서 DB5가 귀환한다는 점은 작품과 공식 소개가 일치한다. 골드핑거 계보를 화면에서 직접 호출한다.",
        },
        {
          label: "제작진 인터뷰",
          text: "스카이폴 저택 파괴는 서레이의 행클리 커먼에서 특수효과·미니어처 팀이 폭발과 헬기 추락을 설계했다고 007.com이 전한다.",
        },
        {
          label: "팬 설",
          text: "창고의 차가 골드핑거의 그 차대라는 연속성 해석이 있다. 크레이그 시기 세계관에서 같은 실루엣인 것은 맞지만, 차대번호까지 잇는 공식 서술은 없다.",
        },
        {
          label: "미확인",
          text: "촬영에 쓰인 DB5가 몇 대인지, 어떤 대가 주행용이고 어떤 대가 가젯용인지는 자료마다 갈린다.",
        },
      ],
      ctaPath: "/brands/aston-martin",
      ctaLabel: "애스턴 마틴 이어보기",
    },
    quotes: [
      {
        speaker: "M",
        textKo: "쏴.",
        textEn: "Take the bloody shot.",
        spoiler: true,
      },
      {
        speaker: "Q",
        textKo: "폭발하는 펜을 기대했나? 우린 이제 그런 건 잘 안 하지.",
        textEn: "Were you expecting an exploding pen? We don't really go in for that anymore.",
        spoiler: false,
      },
      {
        speaker: "실바 / 본드",
        textKo: "취미가 뭐지? / 부활.",
        textEn: "So what's yours? / Resurrection.",
        spoiler: false,
      },
      {
        speaker: "킨케이드",
        textKo: "가끔은 옛 방식이 최고지.",
        textEn: "Sometimes the old ways are the best.",
        spoiler: false,
      },
    ],
    trailerYoutubeId: "vgr2syY_OU4",
    issuesTeaser:
      "국장이 요원을 현장에 다시 넣는 선택과, 집이 불탄 뒤의 본부. 크레이그 엔딩 이후 글이 그 연속을 적는다.",
    sources: [
      {
        label: "007.com — Skyfall",
        href: "https://www.007.com/the-films/skyfall/",
      },
      {
        label: "IMDb — Skyfall (2012)",
        href: "https://www.imdb.com/title/tt1074638/",
      },
      {
        label: "Wikipedia — Skyfall",
        href: "https://en.wikipedia.org/wiki/Skyfall",
      },
      {
        label: "KMDb — 007 스카이폴 (한국 개봉 2012-10-26)",
        href: "https://www.kmdb.or.kr/db/kor/detail/movie/F/29001",
      },
      {
        label: "씨네21 — 007 스카이폴",
        href: "https://cine21.com/movie/info/?movie_id=33948",
      },
      {
        label: "Empire — Skyfall Review",
        href: "https://www.empireonline.com/movies/reviews/skyfall-review/",
      },
      {
        label: "007.com — Destruction of Skyfall Lodge",
        href: "https://www.007.com/skyfall-2/",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "50주년 작품. 오프닝 타이틀과 테마곡은 시리즈 상업 기록에서도 자주 언급된다.",
      },
      {
        n: 2,
        text: "창고의 DB5는 골드핑거 계보를 화면에서 직접 호출한다. 가젯 복원 여부는 노 타임 투 다이 L1·L2와 함께 보는 편이 정확하다.",
      },
      {
        n: 3,
        text: "한국 개봉 2012년 10월 26일은 KMDb와 씨네21이 일치한다.",
      },
      {
        n: 4,
        text: "공식 예고편 임베드는 007 채널의 Skyfall International Trailer(vgr2syY_OU4)를 쓴다. 소니 쪽 Official Trailer(6kw1UVovByw)도 유효하다.",
      },
      {
        n: 5,
        text: "저택 파괴의 미니어처·폭발 설계는 007.com 제작 노트에 특수효과 슈퍼바이저 크리스 코볼드의 설명으로 올라 있다.",
      },
    ],
    related: [
      { href: "/cars/aston-martin-db5", label: "DB5 자세히" },
      { href: "/bond-girls/severine", label: "세버린" },
      { href: "/films/casino-royale-2006", label: "이전 · 카지노 로얄" },
      { href: "/films/no-time-to-die", label: "다음 · 노 타임 투 다이" },
      { href: "/bonds/daniel-craig", label: "대니얼 크레이그" },
    ],
  },
  "no-time-to-die": {
    slug: "no-time-to-die",
    runtime: "163분",
    director: "캐리 후쿠나가 (Cary Joji Fukunaga)",
    krRelease: "2021년 9월 29일",
    oneLiner:
      "현역을 떠난 본드가 다시 호출되고, 오염된 섬에 남는다.",
    spoilerWarning:
      "엔딩과 가족 관계는 시리즈 전체를 가르는 스포일러입니다.",
    plot: [
      "마테라의 석조 골목에서 본드와 마들렌은 여행을 가장한 도피 중이다. 베스퍼의 묘 앞에서 과거의 조직이 다시 나타나고, 은색 DB5가 골목을 메운다. 본드는 배신을 읽고 마들렌을 기차에 남겨 둔 채 현역을 떠난다.",
      "자메이카의 평화는 짧게 유지된다. 펠릭스 라이터가 찾아와 납치된 과학자 발도 오브루체프와 생물 무기 헤라클레스를 부탁한다. 쿠바에서 본드는 CIA 측 팔로마와 함께 스펙터 모임에 끼어들고, 새 00 요원 노미와 경합한다. 펠릭스는 배신 속에서 죽는다.",
      "사핀은 스펙터와 다른 원한을 들고 나온다. 마들렌의 어린 시절, 가면을 쓴 침입자, 독과 정원. 노르웨이의 숨겨진 집에서 본드는 마들렌과 다시 만나고, 아이—자신의 피—를 확인한다.",
      "섬의 기지에서 헤라클레스의 실체가 드러난다. 특정 DNA를 표적으로 삼는 무기는, 본드가 누구를 사랑하는지와 정면으로 충돌한다. 본드와 노미가 침투해 사핀을 쓰러뜨리지만, 본드는 이미 오염된 몸이다. 미사일이 섬을 지울 때까지 그는 남고, 무전으로 마들렌과 딸에게 작별한다.",
    ],
    cast: [
      {
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "대니얼 크레이그의 마지막. 현역을 떠난 사람이 가족과 오염 사이에서 잔류를 고른다.",
      },
      {
        slug: "madeleine-swann",
        nameKo: "마들렌 스완",
        nameEn: "Madeleine Swann",
        role: "본드걸",
        note: "레아 세두. 스펙터에서 이어진 사적인 시간. 과거의 비밀과 아이의 존재가 후반의 동기가 된다.",
      },
      {
        nameKo: "사핀",
        nameEn: "Lyutsifer Safin",
        role: "적대자",
        note: "라미 말렉. 스펙터와 다른 원한. 정원과 가면, 그리고 사람을 고르는 무기.",
      },
      {
        nameKo: "노미",
        nameEn: "Nomi",
        role: "00",
        note: "라샤나 린치. 본드가 비운 번호를 잠시 가진 요원. DBS 슈퍼레제라와 함께 지금의 00을 보여 준다.",
      },
      {
        slug: "paloma",
        nameKo: "팔로마",
        nameEn: "Paloma",
        role: "CIA",
        note: "아나 데 아르마스. 쿠바에서 짧게, 그러나 정확하게 움직이는 현장 요원. 혼자 일하는 편이지만 이번엔 아니다.",
      },
      {
        nameKo: "펠릭스 라이터",
        nameEn: "Felix Leiter",
        role: "CIA",
        note: "제프리 라이트. 자메이카로 찾아와 마지막 부탁을 한다. 크레이그 시기 우정의 끝이 여기서 난다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "벤 위쇼. 생물 무기의 설계를 읽고, 본드에게 남은 선택지를 기술로 번역한다.",
      },
      {
        nameKo: "블로펠드",
        nameEn: "Ernst Stavro Blofeld",
        role: "수감",
        note: "크리스토프 왈츠. 수감 중에도 끈이 남아 있다는 착각을 심는다. 사핀의 원한이 그 착각을 끊는다.",
      },
    ],
    cars: {
      density: "solid",
      title: "DB5 풀 가젯, 그리고 현대 애스턴",
      body: "마테라 시퀀스는 DB5를 박물관 소품이 아니라 다시 전술 차량으로 쓴다. 기관총과 연막이 좁은 석조 골목에서 작동하고, 관객은 골드핑거의 장난감이 여전히 위협이 된다는 점을 확인한다. 공식 제작 노트는 히어로 차량 두 대와 스턴트용 복제 여러 대를 섞어 찍었다고 설명한다. 동시에 런던 차고의 V8이 달튼 시기를 한 컷으로 소환하고, 발할라 프로토타입과 최신 밴티지·슈퍼레제라 계열이 본드의 지금을 맡는다. 영국차 큐레이션으로 건너가면 이 공존—고전 은색과 현대 라인—이 더 선명하다.",
      carSlugs: [
        "aston-martin-db5",
        "aston-martin-valhalla",
        "land-rover-defender",
      ],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "노 타임 투 다이는 DB5, V8, DBS 슈퍼레제라, 발할라를 한 서사 안에 올린다. 마테라 추격의 주역은 DB5다.",
        },
        {
          label: "제작진 인터뷰",
          text: "007.com은 마테라 촬영에 클래식 DB5 히어로 두 대와 애스턴 Q 어드밴스드 오퍼레이션이 만든 스턴트 복제 여덟 대를 썼다고 적는다. 대니얼 크레이그는 DB5를 거대한 캐릭터라고 부른다.",
        },
        {
          label: "팬 설",
          text: "엔딩이 다음 본드의 번호 리셋을 강제한다는 해석이 있다. 크레이그 시기가 닫힌 것은 맞지만, 차기 연속성은 아직 공식 발표를 기다려야 한다.",
        },
        {
          label: "미확인",
          text: "화면에서 파괴된 복제 차량과 실제로 남은 히어로 차량을 한 대 단위로 대응시키는 목록은 출처마다 다르다.",
        },
      ],
      ctaPath: "/brands/aston-martin",
      ctaLabel: "애스턴 마틴 이어보기",
    },
    quotes: [
      {
        speaker: "제임스 본드",
        textKo: "라이선스 투 킬.",
        textEn: "Licence to kill.",
        spoiler: false,
      },
      {
        speaker: "팔로마",
        textKo: "난 보통 혼자 일하는데.",
        textEn: "I usually work alone.",
        spoiler: false,
      },
      {
        speaker: "펠릭스 라이터",
        textKo: "부탁이 있어, 형제.",
        textEn: "I need a favor, brother.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo: "널 사랑해.",
        textEn: "I love you.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "FREBR6FH1rg",
    issuesTeaser:
      "엔딩 해석과 본드는 어떤 결말을 허용하는가는 팬 이슈로 남아 있다. 크레이그 엔딩 이후 글이 확인된 것과 소문을 가른다.",
    sources: [
      {
        label: "007.com — No Time to Die",
        href: "https://www.007.com/the-films/no-time-to-die/",
      },
      {
        label: "IMDb — No Time to Die (2021)",
        href: "https://www.imdb.com/title/tt2382320/",
      },
      {
        label: "Wikipedia — No Time to Die",
        href: "https://en.wikipedia.org/wiki/No_Time_to_Die",
      },
      {
        label: "씨네21 — 007 노 타임 투 다이 (한국 개봉 2021-09-29)",
        href: "https://www.cine21.com/movie/info/?movie_id=54726",
      },
      {
        label: "Empire — No Time To Die Review",
        href: "https://www.empireonline.com/movies/reviews/no-time-to-die/",
      },
      {
        label: "007.com — Under the bonnet of the DB5 in Matera",
        href: "https://www.007.com/under-the-bonnet/",
      },
      {
        label: "007.com — Aston Martin V8",
        href: "https://www.007.com/the-vehicles/aston-martin-v8/",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "크레이그 본드 5편의 마지막. 개봉 연도는 지역에 따라 2021년으로 기록.",
      },
      {
        n: 2,
        text: "마테라 DB5 가젯은 제작진이 실제 작동 소품과 시각효과를 섞었다고 설명한다. 히어로 두 대와 스턴트 복제 여덟 대라는 숫자는 007.com 제작 노트를 따른다.",
      },
      {
        n: 3,
        text: "한국 개봉 2021년 9월 29일과 상영 163분은 씨네21 영화 정보와 같다.",
      },
      {
        n: 4,
        text: "공식 예고편 임베드는 007 채널의 Final International Trailer(FREBR6FH1rg)를 쓴다.",
      },
      {
        n: 5,
        text: "대니 보일 하차와 팬데믹 연기는 제작사·배급 보도에 반복된다. 일정 서사만 적고, 내부 창작 갈등은 단정하지 않는다.",
      },
    ],
    related: [
      { href: "/cars/aston-martin-db5", label: "DB5 자세히" },
      { href: "/films/skyfall", label: "이전 · 스카이폴" },
      { href: "/bonds/daniel-craig", label: "대니얼 크레이그" },
      { href: "/guide/action", label: "액션 입문 경로" },
    ],
  },
  ...conneryLazenbyDetails,
  ...mooreDetails,
  ...daltonBrosnanDetails,
  ...craigRestDetails,
};

export function getFilmDetail(slug: string) {
  return filmDetails[slug];
}
