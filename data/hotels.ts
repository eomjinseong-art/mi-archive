import type { Source } from "./types";

export type BondHotel = {
  slug: string;
  nameKo: string;
  nameEn: string;
  screenNameKo?: string;
  city: string;
  country: string;
  filmSlugs: string[];
  sceneNote: string;
  fameNote: string;
  mapsQuery: string;
  sources: Source[];
};

function officialFilm(path: string, title: string): Source {
  return {
    label: `007.com — ${title}`,
    href: `https://www.007.com/the-films/${path}/`,
  };
}

function wikiEn(path: string, title: string): Source {
  return {
    label: `Wikipedia — ${title}`,
    href: `https://en.wikipedia.org/wiki/${path}`,
  };
}

const CNN_BOND_HOTELS: Source = {
  label: "CNN Travel — Hotels from James Bond movies",
  href: "https://www.cnn.com/travel/article/james-bond-hotels",
};

const TELEGRAPH_BOND_HOTELS: Source = {
  label: "The Telegraph — James Bond's favourite hotels through the ages",
  href: "https://www.telegraph.co.uk/travel/arts-and-culture/James-Bond-hotels/",
};

export const hotels: BondHotel[] = [
  {
    slug: "morgans-harbour-port-royal",
    nameKo: "모건스 하버",
    nameEn: "Morgan's Harbour Hotel",
    screenNameKo: "퍼스펠러스 바",
    city: "포트 로열",
    country: "자메이카",
    filmSlugs: ["dr-no"],
    sceneNote:
      "본드가 쿼럴을 만나는 선착장 바로 읽히는 항구 호텔입니다. 화면의 바 이름은 퍼스펠러스이고, 촬영은 이 마리나 일대입니다.",
    fameNote:
      "숙박보다 선착장·바의 입구로 남는 현장입니다. 킹스턴 공항과 포트 로열 사이에 있어, 닥터 노의 자메이카를 해안에서 시작합니다.",
    mapsQuery: "Morgan's Harbour Hotel Port Royal Jamaica",
    sources: [
      officialFilm("dr-no", "Dr. No"),
      wikiEn("Dr._No_(film)", "Dr. No (film)"),
    ],
  },
  {
    slug: "fontainebleau-miami-beach",
    nameKo: "폰텐블로 마이애미 비치",
    nameEn: "Fontainebleau Miami Beach",
    city: "마이애미 비치",
    country: "미국",
    filmSlugs: ["goldfinger"],
    sceneNote:
      "본드가 골드핑거의 카드 사기를 적발하는 초승달 호텔입니다. 항공과 풀장 외경은 마이애미이고, 코너리의 근접 연기는 파인우드에서 붙였습니다.",
    fameNote:
      "모리스 라피더스가 지은 1950년대 리조트가 본드의 미국 입구가 됩니다. 객실 905는 화면의 번호일 뿐, 실내는 영국 세트입니다.",
    mapsQuery: "Fontainebleau Miami Beach",
    sources: [
      officialFilm("goldfinger", "Goldfinger"),
      wikiEn("Goldfinger_(film)", "Goldfinger (film)"),
      wikiEn("Fontainebleau_Miami_Beach", "Fontainebleau Miami Beach"),
      CNN_BOND_HOTELS,
    ],
  },
  {
    slug: "stoke-park",
    nameKo: "스토크 파크",
    nameEn: "Stoke Park",
    city: "스토크 포지스",
    country: "영국",
    filmSlugs: ["goldfinger", "tomorrow-never-dies"],
    sceneNote:
      "골드핑거의 골프와 오드잡의 모자가 이 컨트리 클럽에서 열립니다. 《네버 다이》에서는 함부르크 호텔 실내의 일부 대역으로도 쓰였습니다.",
    fameNote:
      "호텔이라기보다 별장형 숙소와 골프가 있는 클럽입니다. 숙박·라운드가 열려, 영국 본드 순례에서 파인우드 다음으로 찾기 쉽습니다.",
    mapsQuery: "Stoke Park Stoke Poges",
    sources: [
      officialFilm("goldfinger", "Goldfinger"),
      officialFilm("tomorrow-never-dies", "Tomorrow Never Dies"),
      wikiEn("Goldfinger_(film)", "Goldfinger (film)"),
    ],
  },
  {
    slug: "belvedere-furka",
    nameKo: "호텔 벨베데레 (푸르카 고개)",
    nameEn: "Hotel Belvédère, Furka Pass",
    city: "발레 주",
    country: "스위스",
    filmSlugs: ["goldfinger"],
    sceneNote:
      "골드핑거의 롤스와 본드의 DB5가 헤어핀을 도는 고개의 호텔입니다. 숙박 장면이 아니라, 추격의 첫 건물로 화면에 남습니다.",
    fameNote:
      "1882년 론 빙하를 보던 고개 호텔입니다. 영어 위키와 텔레그래프가 《골드핑거》 출연을 적고, 2015년부터는 문을 닫았습니다. 숙박은 안 되고, 사진의 정점으로 남습니다.",
    mapsQuery: "Hotel Belvedere Furka Pass",
    sources: [
      officialFilm("goldfinger", "Goldfinger"),
      wikiEn("Goldfinger_(film)", "Goldfinger (film)"),
      wikiEn("Belv%C3%A9d%C3%A8re_Hotel,_Furka_Pass", "Belvédère Hotel, Furka Pass"),
      {
        label:
          "The Telegraph — The grand Swiss hotel that starred in Bond",
        href: "https://www.telegraph.co.uk/travel/news/grand-swiss-hotel-starred-bond-killed-climate-change/",
      },
    ],
  },
  {
    slug: "british-colonial-nassau",
    nameKo: "브리티시 콜로니얼 나소",
    nameEn: "British Colonial, Nassau",
    city: "나소",
    country: "바하마",
    filmSlugs: ["thunderball"],
    sceneNote:
      "썬더볼 작전의 나소 시내와 붙는 식민지풍 해안 호텔입니다. 의회 광장과 항구 사이의 본드 도보 코스에 들어갑니다.",
    fameNote:
      "텔레그래프 등 여행지가 공식 편의 나소 호텔로 올립니다. 비공식 《네버 세이 네버 어게인》의 부두 장면도 같은 건물과 연결되나, 목록은 공식 편입니다.",
    mapsQuery: "British Colonial Hotel Nassau",
    sources: [
      officialFilm("thunderball", "Thunderball"),
      wikiEn("Thunderball_(film)", "Thunderball (film)"),
      TELEGRAPH_BOND_HOTELS,
    ],
  },
  {
    slug: "new-otani-tokyo",
    nameKo: "호텔 뉴오타니 도쿄",
    nameEn: "Hotel New Otani Tokyo",
    screenNameKo: "오사토 케미컬",
    city: "도쿄",
    country: "일본",
    filmSlugs: ["you-only-live-twice"],
    sceneNote:
      "오사토 케미컬 본사로 나오는 고층입니다. 회전 레스토랑과 정원이 스펙터의 일본 위장 얼굴입니다.",
    fameNote:
      "CNN이 본드 호텔로 반복해 소개하는 도쿄의 주소입니다. 숙박이 가능한 악당 본사라, 히메지성과 짝을 이루는 실사 현장입니다.",
    mapsQuery: "Hotel New Otani Tokyo",
    sources: [
      officialFilm("you-only-live-twice", "You Only Live Twice"),
      wikiEn("You_Only_Live_Twice_(film)", "You Only Live Twice (film)"),
      CNN_BOND_HOTELS,
    ],
  },
  {
    slug: "palacio-estoril",
    nameKo: "호텔 팔라시우 이스토릴",
    nameEn: "Hotel Palácio Estoril",
    city: "이스토릴",
    country: "포르투갈",
    filmSlugs: ["on-her-majestys-secret-service"],
    sceneNote:
      "본드가 로비에서 팔라시우의 수준을 말하고, 트레이시와 카지노를 오가는 해안 호텔입니다. 외관·로비·풀이 화면에 남습니다.",
    fameNote:
      "플레밍이 전시 정보 장교로 머물던 자리라는 기록이 호텔과 여행지에 반복됩니다. 카지노가 바로 옆이라, 소설 카지노 로얄의 공기와 영화 현장이 한 해안에 붙습니다.",
    mapsQuery: "Hotel Palacio Estoril",
    sources: [
      officialFilm(
        "on-her-majestys-secret-service",
        "On Her Majesty's Secret Service",
      ),
      wikiEn(
        "On_Her_Majesty%27s_Secret_Service_(film)",
        "On Her Majesty's Secret Service (film)",
      ),
      {
        label:
          "Radio Times — Bond's favourite hotel on Portugal's Estoril coast",
        href: "https://www.radiotimes.com/movies/discover-james-bonds-favourite-hotel-on-portugals-estoril-coast/",
      },
      {
        label: "Hotel Palácio Estoril — James Bond",
        href: "https://www.palacioestorilhotel.com/hotel/james-bond/",
      },
    ],
  },
  {
    slug: "piz-gloria",
    nameKo: "피츠 글로리아",
    nameEn: "Piz Gloria",
    screenNameKo: "블로펠드 클리닉",
    city: "쉴트호른 · 뮈렌",
    country: "스위스",
    filmSlugs: ["on-her-majestys-secret-service"],
    sceneNote:
      "블로펠드의 알레르기 클리닉으로 나오는 정상 회전 레스토랑입니다. 호텔 객실이 아니라, 봉우리 위의 식당입니다.",
    fameNote:
      "영화 제목이 상호가 된 드문 현장입니다. 케이블카와 007 전시가 있어 알프스 본드 순례의 정점에 가깝고, 숙박은 뮈렌 쪽 산촌 호텔을 씁니다.",
    mapsQuery: "Piz Gloria Schilthorn",
    sources: [
      officialFilm(
        "on-her-majestys-secret-service",
        "On Her Majesty's Secret Service",
      ),
      wikiEn("Piz_Gloria", "Piz Gloria"),
      wikiEn(
        "On_Her_Majesty%27s_Secret_Service_(film)",
        "On Her Majesty's Secret Service (film)",
      ),
    ],
  },
  {
    slug: "westgate-las-vegas",
    nameKo: "웨스트게이트 라스베이거스",
    nameEn: "Westgate Las Vegas Resort & Casino",
    screenNameKo: "왜트 하우스",
    city: "라스베이거스",
    country: "미국",
    filmSlugs: ["diamonds-are-forever"],
    sceneNote:
      "윌러드 왜트의 카지노 호텔 외경입니다. 촬영 당시 인터내셔널 호텔이었고, 이후 힐튼을 거쳐 지금 이름입니다. 탑 하나는 합성입니다.",
    fameNote:
      "블로펠드가 점거한 베가스 본거지로 읽힙니다. 스트립의 서커스 서커스와 묶어, 숙박이 가능한 1971년의 네온을 재구성합니다.",
    mapsQuery: "Westgate Las Vegas Resort",
    sources: [
      officialFilm("diamonds-are-forever", "Diamonds Are Forever"),
      wikiEn("Diamonds_Are_Forever_(film)", "Diamonds Are Forever (film)"),
      wikiEn("Westgate_Las_Vegas", "Westgate Las Vegas"),
    ],
  },
  {
    slug: "circus-circus-las-vegas",
    nameKo: "서커스 서커스",
    nameEn: "Circus Circus Las Vegas",
    city: "라스베이거스",
    country: "미국",
    filmSlugs: ["diamonds-are-forever"],
    sceneNote:
      "본드와 티파니가 공중 묘기를 스치는 카지노 호텔입니다. 당시 주인이 촬영을 열었고, 화면의 텐트 지붕이 스트립에 남아 있습니다.",
    fameNote:
      "이름이 바뀌지 않은 베가스 본드 현장입니다. 왜트 하우스(웨스트게이트)와 한 동선으로 묶입니다.",
    mapsQuery: "Circus Circus Las Vegas",
    sources: [
      officialFilm("diamonds-are-forever", "Diamonds Are Forever"),
      wikiEn("Diamonds_Are_Forever_(film)", "Diamonds Are Forever (film)"),
      wikiEn("Circus_Circus_Las_Vegas", "Circus Circus Las Vegas"),
    ],
  },
  {
    slug: "mandarin-oriental-bangkok",
    nameKo: "만다린 오리엔탈 방콕",
    nameEn: "Mandarin Oriental, Bangkok",
    screenNameKo: "더 오리엔탈",
    city: "방콕",
    country: "태국",
    filmSlugs: ["the-man-with-the-golden-gun"],
    sceneNote:
      "본드와 메리 굿나이트가 차오프라야를 보며 저녁을 먹는 테라스입니다. 화면의 푸욕 와인은 소품이고, 호텔은 당시 오리엔탈로 불렸습니다.",
    fameNote:
      "1876년 개업한 강변 특급입니다. 스카라망가의 섬이 세트를 섞는 것과 달리, 이 테라스는 실사로 남아 방콕 본드 순례의 숙소가 됩니다.",
    mapsQuery: "Mandarin Oriental Bangkok",
    sources: [
      officialFilm(
        "the-man-with-the-golden-gun",
        "The Man with the Golden Gun",
      ),
      wikiEn(
        "The_Man_with_the_Golden_Gun_(film)",
        "The Man with the Golden Gun (film)",
      ),
      {
        label: "On the tracks of 007 — Bangkok Oriental",
        href: "https://www.onthetracksof007.com/oriental",
      },
    ],
  },
  {
    slug: "cala-di-volpe",
    nameKo: "호텔 칼라 디 볼페",
    nameEn: "Hotel Cala di Volpe",
    city: "포르토 체르보",
    country: "이탈리아",
    filmSlugs: ["the-spy-who-loved-me"],
    sceneNote:
      "본드와 아냐가 스털링 이름으로 체크인하는 사르데냐 리조트입니다. 나오미의 보트가 선착장에 대고, 로터스가 바다로 들어가기 전의 로비입니다.",
    fameNote:
      "코스타 스메랄다의 첫 호텔 축에 가깝습니다. CNN이 본드 호텔로 올리고, 화면의 스위트 일부는 실제 바를 거실처럼 찍었습니다.",
    mapsQuery: "Hotel Cala di Volpe Porto Cervo",
    sources: [
      officialFilm("the-spy-who-loved-me", "The Spy Who Loved Me"),
      wikiEn("The_Spy_Who_Loved_Me_(film)", "The Spy Who Loved Me (film)"),
      CNN_BOND_HOTELS,
    ],
  },
  {
    slug: "danieli-venice",
    nameKo: "호텔 다니엘리",
    nameEn: "Hotel Danieli",
    city: "베네치아",
    country: "이탈리아",
    filmSlugs: ["moonraker"],
    sceneNote:
      "홀리 굿헤드가 유럽 우주 위원회 일정을 위해 머무는 베네치아 호텔로 여행지가 적습니다. 산마르코 운하 추격의 숙소 축입니다.",
    fameNote:
      "텔레그래프가 《문레이커》의 베네치아 호텔로 올립니다. 궁전 로비는 공개 공간이 섞여 있어, 투숙과 카페만으로도 화면의 돌과 맞댈 수 있습니다.",
    mapsQuery: "Hotel Danieli Venice",
    sources: [
      officialFilm("moonraker", "Moonraker"),
      wikiEn("Moonraker_(film)", "Moonraker (film)"),
      TELEGRAPH_BOND_HOTELS,
    ],
  },
  {
    slug: "miramonti-cortina",
    nameKo: "미라몬티 마제스틱",
    nameEn: "Miramonti Majestic Grand Hotel",
    city: "코르티나 담페초",
    country: "이탈리아",
    filmSlugs: ["for-your-eyes-only"],
    sceneNote:
      "본드가 발코니에서 계곡을 내려다보는 돌로미티 호텔입니다. 화면의 300호는 없고, 발코니는 실제 108호 쪽으로 확인됩니다. 실내 일부는 세트입니다.",
    fameNote:
      "무어가 촬영 중 머문 산장 호텔입니다. 아이스 링크와 스키점프가 같은 마을에 있어, 숙박이 곧 촬영지 지도입니다.",
    mapsQuery: "Miramonti Majestic Cortina d'Ampezzo",
    sources: [
      officialFilm("for-your-eyes-only", "For Your Eyes Only"),
      wikiEn("For_Your_Eyes_Only_(film)", "For Your Eyes Only (film)"),
      TELEGRAPH_BOND_HOTELS,
    ],
  },
  {
    slug: "taj-lake-palace",
    nameKo: "타지 레이크 팰리스",
    nameEn: "Taj Lake Palace",
    screenNameKo: "옥토퍼시의 궁전",
    city: "우다이푸르",
    country: "인도",
    filmSlugs: ["octopussy"],
    sceneNote:
      "옥토퍼시의 호수 궁전입니다. 식당과 테라스, 배의 입성이 실제 궁전 호텔에서 찍혔습니다.",
    fameNote:
      "CNN이 본드 호텔로 소개하는 우다이푸르의 섬입니다. 몬순 팰리스가 언덕의 악당 별장이라면, 이곳은 물에 뜬 숙소입니다.",
    mapsQuery: "Taj Lake Palace Udaipur",
    sources: [
      officialFilm("octopussy", "Octopussy"),
      wikiEn("Octopussy", "Octopussy"),
      wikiEn("Lake_Palace", "Lake Palace"),
      CNN_BOND_HOTELS,
    ],
  },
  {
    slug: "palais-schwarzenberg",
    nameKo: "팔레 슈바르첸베르크",
    nameEn: "Hotel Im Palais Schwarzenberg",
    city: "빈",
    country: "오스트리아",
    filmSlugs: ["the-living-daylights"],
    sceneNote:
      "본드와 카라가 마차로 도착해 한스 지배인의 인사를 받는 빈의 궁전 호텔입니다. 로비는 대리석 갤러리에서 찍었습니다.",
    fameNote:
      "벨베데레 정원 옆의 바로크 궁전입니다. 촬영 당시 호텔로 쓰였고, 이후 오랜 개보수에 들어가 일반 숙박은 닫혀 있습니다. 외관은 남아, 빈 본드 지도의 숙소 칸입니다.",
    mapsQuery: "Palais Schwarzenberg Vienna",
    sources: [
      officialFilm("the-living-daylights", "The Living Daylights"),
      wikiEn("The_Living_Daylights", "The Living Daylights"),
      {
        label: "On the tracks of 007 — Palais Schwarzenberg",
        href: "https://www.onthetracksof007.com/hotels",
      },
    ],
  },
  {
    slug: "hotel-de-paris-monte-carlo",
    nameKo: "호텔 드 파리 몬테카를로",
    nameEn: "Hôtel de Paris Monte-Carlo",
    city: "몬테카를로",
    country: "모나코",
    filmSlugs: ["goldeneye"],
    sceneNote:
      "카지노 드 몬테카를로와 같은 광장을 공유하는 호텔입니다. 본드와 세니아가 타이거 헬리콥터를 스치는 밤의 배경입니다.",
    fameNote:
      "영어 위키백과가 공식 《골든아이》와 비공식 《네버 세이 네버 어게인》에 등장한다고 적습니다. 목록은 공식 편입니다.",
    mapsQuery: "Hotel de Paris Monte-Carlo",
    sources: [
      officialFilm("goldeneye", "GoldenEye"),
      wikiEn("GoldenEye", "GoldenEye"),
      wikiEn("H%C3%B4tel_de_Paris_Monte-Carlo", "Hôtel de Paris Monte-Carlo"),
    ],
  },
  {
    slug: "langham-london",
    nameKo: "랭엄 런던",
    nameEn: "The Langham, London",
    screenNameKo: "그랜드 호텔 유럽 (상트페테르부르크)",
    city: "런던",
    country: "영국",
    filmSlugs: ["goldeneye"],
    sceneNote:
      "상트페테르부르크의 그랜드 호텔 유럽으로 나오는 런던 호텔입니다. 브로스넌이 러시아로 읽히는 로비에 들어섭니다.",
    fameNote:
      "CNN·텔레그래프가 본드 호텔로 올립니다. 실제 페테르부르크 호텔이 아니라, 리전트 스트리트의 대역입니다.",
    mapsQuery: "The Langham London",
    sources: [
      officialFilm("goldeneye", "GoldenEye"),
      wikiEn("GoldenEye", "GoldenEye"),
      CNN_BOND_HOTELS,
      TELEGRAPH_BOND_HOTELS,
    ],
  },
  {
    slug: "atlantic-hamburg",
    nameKo: "호텔 애틀랜틱 함부르크",
    nameEn: "Hotel Atlantic Hamburg",
    city: "함부르크",
    country: "독일",
    filmSlugs: ["tomorrow-never-dies"],
    sceneNote:
      "본드가 파리 카버와 머물고, 원격 BMW가 옥상과 차고를 누비는 알스터 호숫가 호텔입니다. 외경은 함부르크고, 일부 실내는 영국 스토크 파크가 대역입니다.",
    fameNote:
      "텔레그래프가 브로스넌 편의 함부르크 호텔로 적습니다. 항구 도시의 본드 숙소로, 미디어 재벌 편의 유럽 축입니다.",
    mapsQuery: "Hotel Atlantic Hamburg",
    sources: [
      officialFilm("tomorrow-never-dies", "Tomorrow Never Dies"),
      wikiEn("Tomorrow_Never_Dies", "Tomorrow Never Dies"),
      TELEGRAPH_BOND_HOTELS,
    ],
  },
  {
    slug: "seven-hills-istanbul",
    nameKo: "세븐 힐스 호텔",
    nameEn: "Seven Hills Hotel",
    city: "이스탄불",
    country: "터키",
    filmSlugs: ["the-world-is-not-enough"],
    sceneNote:
      "결말에서 MI6 위성이 본드의 숙소를 찾는 술탄아흐메트의 건물입니다. 옥상 샴페인 컷은 세트로 읽히고, 외관은 이 호텔로 맞춰집니다.",
    fameNote:
      "아야소피아와 블루 모스크 사이의 4성급입니다. 팬 로케이션 가이드가 위성 줌의 건물로 적으며, 옥상 식당에서 같은 전망을 대조할 수 있습니다. 객실 촬영은 현지가 아닙니다.",
    mapsQuery: "Seven Hills Hotel Istanbul Sultanahmet",
    sources: [
      officialFilm("the-world-is-not-enough", "The World Is Not Enough"),
      wikiEn("The_World_Is_Not_Enough", "The World Is Not Enough"),
      {
        label: "James Bond Locations — Seven Hills Hotel",
        href: "https://jamesbondlocations.blogspot.com/2015/08/christmas-in-turkey-seven-hills-hotel.html",
      },
    ],
  },
  {
    slug: "grandhotel-pupp",
    nameKo: "그랜드호텔 푸프",
    nameEn: "Grandhotel Pupp",
    screenNameKo: "호텔 스플렌디드",
    city: "카를로비바리",
    country: "체코",
    filmSlugs: ["casino-royale-2006"],
    sceneNote:
      "몬테네그로 호텔 스플렌디드의 외경입니다. 본드와 베스퍼가 머무는 온천 도시의 궁전 호텔이고, 카지노 외경은 바로 옆 라즈네 1세입니다.",
    fameNote:
      "호텔 공식 페이지와 체코 필름 커미션이 촬영을 명시합니다. 몬테네그로에 가지 않고도, 카를로비바리에서 리부트의 포커 주간을 재구성할 수 있습니다.",
    mapsQuery: "Grandhotel Pupp Karlovy Vary",
    sources: [
      officialFilm("casino-royale", "Casino Royale"),
      wikiEn("Casino_Royale_(2006_film)", "Casino Royale (2006 film)"),
      {
        label: "Grandhotel Pupp — Film",
        href: "https://www.pupp.cz/en/film",
      },
      {
        label: "Czech Film Commission — Karlovy Vary",
        href: "https://www.filmcommission.cz/en/featured-location-karlovy-vary/",
      },
    ],
  },
  {
    slug: "ocean-club-paradise-island",
    nameKo: "오션 클럽 파라다이스 아일랜드",
    nameEn: "Ocean Club, Paradise Island",
    city: "나소",
    country: "바하마",
    filmSlugs: ["casino-royale-2006"],
    sceneNote:
      "본드가 디미트리오스를 쫓아 체크인하는 리조트입니다. 라이브러리 바의 포커와 솔랑주, 캐비지 비치가 이 단지에 붙습니다.",
    fameNote:
      "촬영 당시 원앤온리 오션 클럽으로 불렸고, 이후 운영 브랜드가 바뀌었습니다. 썬더볼의 파라다이스 아일랜드와 같은 섬이나, 이 호텔 자체의 본드 숙박은 2006년 편입니다.",
    mapsQuery: "Ocean Club Paradise Island Bahamas",
    sources: [
      officialFilm("casino-royale", "Casino Royale"),
      wikiEn("Casino_Royale_(2006_film)", "Casino Royale (2006 film)"),
      {
        label: "The James Bond Dossier — Bond in The Bahamas: Ocean Club",
        href: "https://www.thejamesbonddossier.com/films/casino-royale/locations/bond-in-the-bahamas-the-one-and-only-ocean-club.htm",
      },
    ],
  },
  {
    slug: "villa-del-balbianello",
    nameKo: "빌라 델 발비아넬로",
    nameEn: "Villa del Balbianello",
    city: "트레메치나",
    country: "이탈리아",
    filmSlugs: ["casino-royale-2006"],
    sceneNote:
      "본드가 회복기를 보내는 코모 호수의 별장입니다. 호텔이 아니라 정원 별장이고, 화면의 테라스와 선착장이 이 축선입니다.",
    fameNote:
      "호텔 목록에 넣는 이유는 숙박 검색과 혼동을 막기 위해서입니다. 국립신탁 정원으로 관람하고, 투숙은 호숫가의 다른 호텔을 씁니다.",
    mapsQuery: "Villa del Balbianello Lenno",
    sources: [
      officialFilm("casino-royale", "Casino Royale"),
      wikiEn("Casino_Royale_(2006_film)", "Casino Royale (2006 film)"),
      wikiEn("Villa_del_Balbianello", "Villa del Balbianello"),
    ],
  },
  {
    slug: "paranal-residencia",
    nameKo: "파라날 레지던시아",
    nameEn: "ESO Paranal Residencia",
    screenNameKo: "페를라 데 라스 두나스",
    city: "안토파가스타 사막",
    country: "칠레",
    filmSlugs: ["quantum-of-solace"],
    sceneNote:
      "그린의 에코 호텔 외경입니다. 유럽남천문대 직원 숙소이고, 폭발이 있는 실내는 파인우드입니다.",
    fameNote:
      "일반 예약 리조트가 아니라 관측 기지의 숙소입니다. ESO가 촬영을 공식 발표했고, 방문은 천문대 투어 규칙에 따릅니다.",
    mapsQuery: "ESO Paranal Residencia Chile",
    sources: [
      officialFilm("quantum-of-solace", "Quantum of Solace"),
      wikiEn("Quantum_of_Solace", "Quantum of Solace"),
      {
        label: "ESO — Blockbuster starring ESO Paranal",
        href: "https://www.eso.org/public/news/eso0838/",
      },
    ],
  },
  {
    slug: "gran-hotel-ciudad-de-mexico",
    nameKo: "그란 호텔 시우다드 데 멕시코",
    nameEn: "Gran Hotel Ciudad de México",
    city: "멕시코시티",
    country: "멕시코",
    filmSlugs: ["spectre"],
    sceneNote:
      "망자의 날 오프닝에서 본드가 오르는 아르누보 엘리베이터의 호텔입니다. 로고가 붙은 외관 입구는 타쿠바 거리의 다른 건물이고, 새장형 승강기는 이 호텔 실내입니다.",
    fameNote:
      "소칼로와 한 동선입니다. 007.com이 역사 중심지 촬영을 기록하고, 팬은 로비의 유리 지붕을 화면과 맞댑니다.",
    mapsQuery: "Gran Hotel Ciudad de Mexico",
    sources: [
      officialFilm("spectre", "Spectre"),
      wikiEn("Spectre_(2015_film)", "Spectre (2015 film)"),
      wikiEn(
        "Gran_Hotel_Ciudad_de_M%C3%A9xico",
        "Gran Hotel Ciudad de México",
      ),
      {
        label: "007.com — On Location With Spectre",
        href: "https://www.007.com/on-location-with-spectre/",
      },
    ],
  },
  {
    slug: "ice-q-solden",
    nameKo: "아이스 Q",
    nameEn: "Ice Q",
    screenNameKo: "호플러 클리닉",
    city: "죌덴",
    country: "오스트리아",
    filmSlugs: ["spectre"],
    sceneNote:
      "마들렌 스완의 호플러 클리닉으로 나오는 봉우리 유리 레스토랑입니다. 호텔 본관이 아니라, 케이블카 정상의 식당입니다.",
    fameNote:
      "007.com이 오스트리아 촬영의 축이라고 적습니다. 피츠 글로리아처럼 정상 식당이 본드 클리닉이 되었고, 옆에 007 엘리먼츠 전시가 있습니다.",
    mapsQuery: "Ice Q Solden",
    sources: [
      officialFilm("spectre", "Spectre"),
      wikiEn("Spectre_(2015_film)", "Spectre (2015 film)"),
      {
        label: "007.com — On Location With Spectre",
        href: "https://www.007.com/on-location-with-spectre/",
      },
    ],
  },
  {
    slug: "four-seasons-canary-wharf",
    nameKo: "포시즌스 카나리 워프",
    nameEn: "Four Seasons Hotel London at Canary Wharf",
    screenNameKo: "상하이 호텔 풀",
    city: "런던",
    country: "영국",
    filmSlugs: ["skyfall"],
    sceneNote:
      "본드가 상하이 호텔에서 수영하는 장면의 풀입니다. 상하이 항공 컷은 현지 2유닛이고, 이 풀은 카나리 워프의 포시즌스·버진 액티브 일대에서 찍었습니다.",
    fameNote:
      "파리의 조지 5세가 아니라 런던 도크랜즈의 포시즌스입니다. 객실 투숙 장면이 아니라 대역 수영장이므로, 상하이 호텔을 여기서 찾으면 어긋납니다. 마카오 수상 카지노(플로팅 드래곤)는 파인우드 세트라 숙소 목록에서 뺍니다.",
    mapsQuery: "Four Seasons Hotel Canary Wharf London",
    sources: [
      officialFilm("skyfall", "Skyfall"),
      wikiEn("Skyfall", "Skyfall"),
    ],
  },
  {
    slug: "goldeneye-oracabessa",
    nameKo: "골든아이 리조트",
    nameEn: "GoldenEye Hotel & Resort",
    city: "오라카베사",
    country: "자메이카",
    filmSlugs: ["no-time-to-die"],
    sceneNote:
      "이언 플레밍이 본드 장편을 쓴 집입니다. 《노 타임 투 다이》의 은퇴 가옥은 여기가 아니라 포트 안토니오 근처 만에 지은 임시 세트이고, 제작진은 이 단지를 몇 마일 밖의 기준으로 삼았습니다.",
    fameNote:
      "문학의 본드와 마지막 편의 자메이카가 한 해안에 붙습니다. 2019년 작품 발표 행사가 여기서 열렸고, 플레밍 빌라는 숙박이 가능합니다. 화면의 데크를 여기서 찾으면 어긋납니다.",
    mapsQuery: "GoldenEye Hotel Oracabessa Jamaica",
    sources: [
      officialFilm("no-time-to-die", "No Time to Die"),
      wikiEn("No_Time_to_Die", "No Time to Die"),
      wikiEn("Goldeneye_(estate)", "Goldeneye (estate)"),
      {
        label: "007.com — Bringing Bond’s Jamaican Retreat to Life",
        href: "https://www.007.com/bonds-jamaican-retreat/",
      },
    ],
  },
  {
    slug: "palazzo-viceconte-matera",
    nameKo: "팔라초 비체콘테",
    nameEn: "Albergo Palazzo Viceconte",
    screenNameKo: "팔라초 루카레스키 (합성)",
    city: "마테라",
    country: "이탈리아",
    filmSlugs: ["no-time-to-die"],
    sceneNote:
      "화면의 팔라초 루카레스키는 없는 호텔입니다. 본드가 바이크를 두고 들어가는 입구가 이 알베르고이고, 동굴 스위트 실내는 피아체타 파스콜리에 올린 세트입니다.",
    fameNote:
      "사시 지구의 실제 숙소입니다. 로비·창문의 전망을 한 건물에서 찾으면 어긋나고, 입구만 여기서 맞춰 볼 수 있습니다.",
    mapsQuery: "Albergo Palazzo Viceconte Matera",
    sources: [
      officialFilm("no-time-to-die", "No Time to Die"),
      wikiEn("No_Time_to_Die", "No Time to Die"),
      {
        label: "Movie-Locations — No Time To Die",
        href: "https://movie-locations.com/movies/n/No-Time-To-Die.php",
      },
    ],
  },
];

export function hotelsForFilm(filmSlug: string): BondHotel[] {
  return hotels.filter((item) => item.filmSlugs.includes(filmSlug));
}
