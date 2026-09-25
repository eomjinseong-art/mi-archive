import type { Source } from "./types";

export type Landmark = {
  slug: string;
  placeKo: string;
  placeEn: string;
  city: string;
  country: string;
  filmSlug: string;
  sceneNote: string;
  whyPopular: string;
  isSet?: boolean;
  mapsQuery: string;
  sources: Source[];
};

const BFI_BOND_50: Source = {
  label: "BFI — Happy 50th anniversary, Mr Bond",
  href: "https://www.bfi.org.uk/features/happy-50th-anniversary-mr-bond",
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

const FILM = {
  "dr-no": {
    official: officialFilm("dr-no", "Dr. No"),
    wiki: wikiEn("Dr._No_(film)", "Dr. No (film)"),
  },
  "from-russia-with-love": {
    official: officialFilm("from-russia-with-love", "From Russia with Love"),
    wiki: wikiEn("From_Russia_with_Love_(film)", "From Russia with Love (film)"),
  },
  goldfinger: {
    official: officialFilm("goldfinger", "Goldfinger"),
    wiki: wikiEn("Goldfinger_(film)", "Goldfinger (film)"),
  },
  thunderball: {
    official: officialFilm("thunderball", "Thunderball"),
    wiki: wikiEn("Thunderball_(film)", "Thunderball (film)"),
  },
  "you-only-live-twice": {
    official: officialFilm("you-only-live-twice", "You Only Live Twice"),
    wiki: wikiEn("You_Only_Live_Twice_(film)", "You Only Live Twice (film)"),
  },
  "on-her-majestys-secret-service": {
    official: officialFilm(
      "on-her-majestys-secret-service",
      "On Her Majesty's Secret Service",
    ),
    wiki: wikiEn(
      "On_Her_Majesty%27s_Secret_Service_(film)",
      "On Her Majesty's Secret Service (film)",
    ),
  },
  "diamonds-are-forever": {
    official: officialFilm("diamonds-are-forever", "Diamonds Are Forever"),
    wiki: wikiEn("Diamonds_Are_Forever_(film)", "Diamonds Are Forever (film)"),
  },
  "live-and-let-die": {
    official: officialFilm("live-and-let-die", "Live and Let Die"),
    wiki: wikiEn("Live_and_Let_Die_(film)", "Live and Let Die (film)"),
  },
  "the-man-with-the-golden-gun": {
    official: officialFilm(
      "the-man-with-the-golden-gun",
      "The Man with the Golden Gun",
    ),
    wiki: wikiEn(
      "The_Man_with_the_Golden_Gun_(film)",
      "The Man with the Golden Gun (film)",
    ),
  },
  "the-spy-who-loved-me": {
    official: officialFilm("the-spy-who-loved-me", "The Spy Who Loved Me"),
    wiki: wikiEn("The_Spy_Who_Loved_Me_(film)", "The Spy Who Loved Me (film)"),
  },
  moonraker: {
    official: officialFilm("moonraker", "Moonraker"),
    wiki: wikiEn("Moonraker_(film)", "Moonraker (film)"),
  },
  "for-your-eyes-only": {
    official: officialFilm("for-your-eyes-only", "For Your Eyes Only"),
    wiki: wikiEn("For_Your_Eyes_Only_(film)", "For Your Eyes Only (film)"),
  },
  octopussy: {
    official: officialFilm("octopussy", "Octopussy"),
    wiki: wikiEn("Octopussy", "Octopussy"),
  },
  "a-view-to-a-kill": {
    official: officialFilm("a-view-to-a-kill", "A View to a Kill"),
    wiki: wikiEn("A_View_to_a_Kill", "A View to a Kill"),
  },
  "the-living-daylights": {
    official: officialFilm("the-living-daylights", "The Living Daylights"),
    wiki: wikiEn("The_Living_Daylights", "The Living Daylights"),
  },
  "licence-to-kill": {
    official: officialFilm("licence-to-kill", "Licence to Kill"),
    wiki: wikiEn("Licence_to_Kill", "Licence to Kill"),
  },
  goldeneye: {
    official: officialFilm("goldeneye", "GoldenEye"),
    wiki: wikiEn("GoldenEye", "GoldenEye"),
  },
  "tomorrow-never-dies": {
    official: officialFilm("tomorrow-never-dies", "Tomorrow Never Dies"),
    wiki: wikiEn("Tomorrow_Never_Dies", "Tomorrow Never Dies"),
  },
  "the-world-is-not-enough": {
    official: officialFilm("the-world-is-not-enough", "The World Is Not Enough"),
    wiki: wikiEn("The_World_Is_Not_Enough", "The World Is Not Enough"),
  },
  "die-another-day": {
    official: officialFilm("die-another-day", "Die Another Day"),
    wiki: wikiEn("Die_Another_Day", "Die Another Day"),
  },
  "casino-royale-2006": {
    official: officialFilm("casino-royale", "Casino Royale"),
    wiki: wikiEn("Casino_Royale_(2006_film)", "Casino Royale (2006 film)"),
  },
  "quantum-of-solace": {
    official: officialFilm("quantum-of-solace", "Quantum of Solace"),
    wiki: wikiEn("Quantum_of_Solace", "Quantum of Solace"),
  },
  skyfall: {
    official: officialFilm("skyfall", "Skyfall"),
    wiki: wikiEn("Skyfall", "Skyfall"),
  },
  spectre: {
    official: officialFilm("spectre", "Spectre"),
    wiki: wikiEn("Spectre_(2015_film)", "Spectre (2015 film)"),
  },
  "no-time-to-die": {
    official: officialFilm("no-time-to-die", "No Time to Die"),
    wiki: wikiEn("No_Time_to_Die", "No Time to Die"),
  },
} as const;

type FilmKey = keyof typeof FILM;

function cite(film: FilmKey, extra: Source[] = []): Source[] {
  return [FILM[film].official, FILM[film].wiki, ...extra];
}

export const landmarks: Landmark[] = [
  // --- 닥터 노 ---
  {
    slug: "dr-no-laughing-waters",
    placeKo: "래핑 워터스 해변",
    placeEn: "Laughing Waters Beach",
    city: "오초 리오스",
    country: "자메이카",
    filmSlug: "dr-no",
    sceneNote:
      "허니 라이더가 조개망을 들고 물 밖으로 나오는 해변입니다. 화면의 크랩 키로 읽히지만, 촬영지는 오초 리오스의 래핑 워터스입니다.",
    whyPopular:
      "공식 시리즈가 처음 찍은 본드걸 등장의 원본 지점입니다. 던스 리버와 붙어 있어, 자메이카 본드 순례의 첫 정거장으로 남습니다.",
    mapsQuery: "Laughing Waters Beach Ocho Rios Jamaica",
    sources: cite("dr-no", [BFI_BOND_50]),
  },
  {
    slug: "dr-no-dunns-river",
    placeKo: "던스 리버 폭포",
    placeEn: "Dunn's River Falls",
    city: "오초 리오스",
    country: "자메이카",
    filmSlug: "dr-no",
    sceneNote:
      "본드와 허니, 쿼럴이 추적조를 피해 숨는 폭포와 바위입니다. 크랩 키의 습지로 이어지는 잠입의 중간 지점입니다.",
    whyPopular:
      "오초 리오스에서 가장 알려진 관광 폭포이고, 첫 본드 영화의 섬 추격과 겹칩니다. 해변 장면과 한 코스로 묶입니다.",
    mapsQuery: "Dunn's River Falls Ocho Rios Jamaica",
    sources: cite("dr-no"),
  },
  {
    slug: "dr-no-kingston",
    placeKo: "킹스턴",
    placeEn: "Kingston",
    city: "킹스턴",
    country: "자메이카",
    filmSlug: "dr-no",
    sceneNote:
      "본드가 스트랭웨이즈의 공백을 쫓아 공항과 시내, 항구를 도는 도시입니다. 시리즈의 첫 현장 브리핑이 런던이 아니라 이곳에서 시작됩니다.",
    whyPopular:
      "플레밍이 살던 북해안과 달리, 행정과 항구의 자메이카를 보여 줍니다. 팬은 팔리세이즈와 포트 로열 쪽 도로를 따라갑니다.",
    mapsQuery: "Kingston Jamaica waterfront",
    sources: cite("dr-no"),
  },
  {
    slug: "dr-no-pinewood-lair",
    placeKo: "파인우드 — 닥터 노의 기지",
    placeEn: "Pinewood Studios, Dr. No's lair",
    city: "이버 히스",
    country: "영국",
    filmSlug: "dr-no",
    sceneNote:
      "원자로와 만찬 홀은 자메이카가 아니라 켄 애덤이 파인우드에 지은 지하 세트입니다. 섬의 해변과 악당의 실내가 여기서 갈라집니다.",
    whyPopular:
      "시리즈가 이후에 반복할 거대 악당 세트의 첫 뼈대입니다. 방문은 스튜디오 투어 일정에 따르며, 크랩 키라는 섬 자체는 없습니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios Iver Heath",
    sources: cite("dr-no", [BFI_BOND_50]),
  },

  // --- 위기일발 ---
  {
    slug: "frwl-hagia-sophia",
    placeKo: "하기아 소피아",
    placeEn: "Hagia Sophia",
    city: "이스탄불",
    country: "터키",
    filmSlug: "from-russia-with-love",
    sceneNote:
      "타티아나가 렉터의 단서를 남기고, 그랜트가 소련 측 요원을 처리하는 모스크로 나옵니다. 냉전의 접경이 관광 명소의 안마당에서 열립니다.",
    whyPopular:
      "이스탄불 본드 순례의 중심입니다. 비잔틴 성당이 모스크와 박물관을 거친 자리가, 스파이 스릴러의 배경이 됩니다.",
    mapsQuery: "Hagia Sophia Istanbul",
    sources: cite("from-russia-with-love"),
  },
  {
    slug: "frwl-basilica-cistern",
    placeKo: "예레바탄 지하 궁전",
    placeEn: "Basilica Cistern",
    city: "이스탄불",
    country: "터키",
    filmSlug: "from-russia-with-love",
    sceneNote:
      "본드와 케림 베이가 소련 영사관 아래로 잠입하는 저수조입니다. 화면의 잠망경은 연출이고, 기둥과 물은 실제 유스티니아누스의 저수조입니다.",
    whyPopular:
      "술탄아흐메드 광장 바로 아래라 하기아 소피아와 한 동선으로 묶입니다. 복원 뒤 박물관으로 열려, 팬이 가장 정확히 겹쳐 보는 실내입니다.",
    mapsQuery: "Basilica Cistern Istanbul",
    sources: cite("from-russia-with-love"),
  },
  {
    slug: "frwl-sirkeci",
    placeKo: "시르케지 역",
    placeEn: "Sirkeci railway station",
    city: "이스탄불",
    country: "터키",
    filmSlug: "from-russia-with-love",
    sceneNote:
      "본드와 타티아나가 오리엔트 특급에 오르는 출발점입니다. 이후의 객실 격투는 세트로 이어지지만, 도시의 출구는 이 역입니다.",
    whyPopular:
      "기차가 본드 문법의 이동 수단이 된 지점입니다. 역사 건물과 보스포루스 사이가 팬 사진의 기본 구도가 됩니다.",
    mapsQuery: "Sirkeci railway station Istanbul",
    sources: cite("from-russia-with-love"),
  },
  {
    slug: "frwl-venice",
    placeKo: "베네치아",
    placeEn: "Venice",
    city: "베네치아",
    country: "이탈리아",
    filmSlug: "from-russia-with-love",
    sceneNote:
      "특급을 빠져나온 뒤, 본드와 타티아나가 머무는 결말의 도시입니다. 거대 기지의 붕괴가 아니라 호텔 방에서 암살이 끝납니다.",
    whyPopular:
      "시리즈가 베네치아를 처음 찍는 편입니다. 이후 문레이커와 카지노 로얄이 같은 운하를 더 크게 쓰므로, 원점의 온도를 보러 옵니다.",
    mapsQuery: "Venice Grand Canal",
    sources: cite("from-russia-with-love"),
  },
  {
    slug: "frwl-pinewood-spectre",
    placeKo: "파인우드 — 스펙터 훈련장",
    placeEn: "Pinewood Studios, SPECTRE training",
    city: "이버 히스",
    country: "영국",
    filmSlug: "from-russia-with-love",
    sceneNote:
      "가짜 본드가 목줄에 당하는 정원과 스펙터 본부는 이스탄불이 아닙니다. 헤더든 홀을 포함한 파인우드 구내가 그 섬으로 읽힙니다.",
    whyPopular:
      "오프닝의 잔혹한 훈련이 시리즈 티저의 원본이 됩니다. 현장은 스튜디오라, 팬은 이스탄불 실사와 구분해 적습니다.",
    isSet: true,
    mapsQuery: "Heatherden Hall Pinewood Studios",
    sources: cite("from-russia-with-love"),
  },

  // --- 골드핑거 ---
  {
    slug: "goldfinger-furka",
    placeKo: "푸르카 패스",
    placeEn: "Furka Pass",
    city: "발레 주",
    country: "스위스",
    filmSlug: "goldfinger",
    sceneNote:
      "틸리 마스터슨이 골드핑거를 저격하려 하고, DB5가 알프스 도로를 쫓는 고갯길입니다. 실프와 안더마트 사이의 굽은 길이 화면의 스위스입니다.",
    whyPopular:
      "은색 그랜드 투어러와 알프스가 처음 포개진 도로입니다. 벨베데레 호텔이 고개 위에 있어, 팬 사진의 정점이 됩니다.",
    mapsQuery: "Furka Pass Switzerland",
    sources: cite("goldfinger", [
      wikiEn("Furka_Pass", "Furka Pass"),
      BFI_BOND_50,
    ]),
  },
  {
    slug: "goldfinger-fort-knox",
    placeKo: "포트 녹스 금괴 금고",
    placeEn: "Fort Knox vault (Pinewood)",
    city: "이버 히스",
    country: "영국",
    filmSlug: "goldfinger",
    sceneNote:
      "골드핑거가 금을 오염시키려는 금고 안은 켄터키의 실내가 아닙니다. 외경 일부를 실제 포트 녹스에서 찍고, 금괴 홀은 파인우드·블랙 파크에 지었습니다.",
    whyPopular:
      "관객이 기억하는 금의 대성당은 세트입니다. 실제 요새는 출입이 막혀 있어, 팬은 화면과 실물을 나누어 찾습니다.",
    isSet: true,
    mapsQuery: "Fort Knox Kentucky",
    sources: cite("goldfinger"),
  },
  {
    slug: "goldfinger-miami",
    placeKo: "마이애미 비치",
    placeEn: "Miami Beach",
    city: "마이애미 비치",
    country: "미국",
    filmSlug: "goldfinger",
    sceneNote:
      "본드가 골드핑거의 카드 사기를 적발하는 리조트 해안입니다. 코너리의 근접 연기는 파인우드에서 붙였고, 풀장과 항공 컷은 현지입니다.",
    whyPopular:
      "폰텐블로 호텔의 초승달 외관이 1960년대 본드의 미국 입구가 됩니다. 호텔 항목과 같은 자리를 해변 쪽에서 봅니다.",
    mapsQuery: "Miami Beach Fontainebleau Hotel",
    sources: cite("goldfinger", [
      wikiEn("Fontainebleau_Miami_Beach", "Fontainebleau Miami Beach"),
    ]),
  },
  {
    slug: "goldfinger-stoke-park",
    placeKo: "스토크 파크",
    placeEn: "Stoke Park",
    city: "스토크 포지스",
    country: "영국",
    filmSlug: "goldfinger",
    sceneNote:
      "본드와 골드핑거가 골프를 치고, 오드잡이 모자로 석상을 베는 클럽입니다. 대본의 샌드위치 코스를 버킹엄셔의 이 잔디가 대신합니다.",
    whyPopular:
      "DB5 다음으로 팬이 많이 찾는 영국 현장입니다. 컨트리 클럽으로 남아, 숙박·골프와 촬영지를 한 번에 볼 수 있습니다.",
    mapsQuery: "Stoke Park Stoke Poges",
    sources: cite("goldfinger"),
  },
  {
    slug: "goldfinger-stans",
    placeKo: "스탄스 필라투스 공장",
    placeEn: "Pilatus Aircraft, Stans",
    city: "스탄스",
    country: "스위스",
    filmSlug: "goldfinger",
    sceneNote:
      "골드핑거의 스위스 제련·공장 외경으로 쓰인 항공기 공장입니다. 레이저와 실내는 파인우드이고, 알프스 쪽 입구는 이곳입니다.",
    whyPopular:
      "푸르카 패스의 추격과 짝을 이루는 산업 풍경입니다. 현역 공장이라 내부 관광은 기대하기 어렵고, 외관만 대조합니다.",
    mapsQuery: "Pilatus Aircraft Stans Switzerland",
    sources: cite("goldfinger"),
  },

  // --- 썬더볼 작전 ---
  {
    slug: "thunderball-nassau",
    placeKo: "나소",
    placeEn: "Nassau",
    city: "나소",
    country: "바하마",
    filmSlug: "thunderball",
    sceneNote:
      "본드가 라고의 핵 협박을 쫓아 내리는 항구 수도입니다. 정크누와 시내 광장, 해안의 수중 작전이 이 섬을 중심으로 펼쳐집니다.",
    whyPopular:
      "시리즈가 처음으로 물속을 길게 찍은 현장입니다. 브리티시 콜로니얼 호텔과 의회 광장이 팬의 도보 코스가 됩니다.",
    mapsQuery: "Nassau Bahamas Parliament Square",
    sources: cite("thunderball"),
  },
  {
    slug: "thunderball-paradise-island",
    placeKo: "파라다이스 아일랜드",
    placeEn: "Paradise Island",
    city: "나소",
    country: "바하마",
    filmSlug: "thunderball",
    sceneNote:
      "헌팅턴 하트퍼드의 섬에서 카페 마르티니크와 북해안이 찍혔습니다. 라고와 도미노의 바하마는 나소 다리 건너가 중심입니다.",
    whyPopular:
      "이후 카지노 로얄의 오션 클럽이 같은 섬에 있습니다. 1965년의 수중 본드와 2006년의 리조트 본드가 한 해협을 공유합니다.",
    mapsQuery: "Paradise Island Nassau Bahamas",
    sources: cite("thunderball"),
  },
  {
    slug: "thunderball-grotto",
    placeKo: "썬더볼 그로토",
    placeEn: "Thunderball Grotto",
    city: "스태니엘 케이",
    country: "바하마",
    filmSlug: "thunderball",
    sceneNote:
      "엑수마 케이의 석회 동굴로, 수중 장면과 이름으로 묶인 관광지입니다. 나소 본촬영과 별도로, 팬과 여행 안내가 이 그로토를 작품에 연결합니다.",
    whyPopular:
      "스노클링 코스 이름이 영화 제목입니다. 나소보다 멀리 있으나, 바하마 본드 지도에서 빼기 어렵습니다.",
    mapsQuery: "Thunderball Grotto Staniel Cay",
    sources: cite("thunderball", [
      wikiEn("Thunderball_Grotto", "Thunderball Grotto"),
    ]),
  },
  {
    slug: "thunderball-palmyra",
    placeKo: "팔미라 저택 (록 포인트)",
    placeEn: "Palmyra estate, Rock Point",
    city: "뉴 프로비던스",
    country: "바하마",
    filmSlug: "thunderball",
    sceneNote:
      "에밀리오 라고의 바하마 별장 팔미라로 나오는 해안 저택입니다. 상어 풀과 부두는 실제 록 포인트의 민가를 썼습니다.",
    whyPopular:
      "악당의 카리브 본거지로 자주 인용됩니다. 사유지라 출입은 제한되고, 해안 도로에서 위치만 가늠하는 편이 맞습니다.",
    mapsQuery: "Rock Point West Bay Street Nassau",
    sources: cite("thunderball"),
  },
  {
    slug: "thunderball-anet",
    placeKo: "샤토 다네",
    placeEn: "Château d'Anet",
    city: "아네",
    country: "프랑스",
    filmSlug: "thunderball",
    sceneNote:
      "오프닝에서 본드가 과부와 스펙터 요원을 상대하는 프랑스 성입니다. 바하마로 가기 전, 유럽의 짧은 티저가 여기서 끝납니다.",
    whyPopular:
      "나소만 기억하는 팬이 놓치는 현지입니다. 르네상스 성이 본드 티저의 배경이 된 드문 사례입니다.",
    mapsQuery: "Chateau d'Anet France",
    sources: cite("thunderball"),
  },

  // --- 두 번 산다 ---
  {
    slug: "yolt-himeji",
    placeKo: "히메지성",
    placeEn: "Himeji Castle",
    city: "히메지",
    country: "일본",
    filmSlug: "you-only-live-twice",
    sceneNote:
      "타나카의 닌자 훈련 학교 외경으로 쓰인 국보 성입니다. 본드가 일본 정보부와 합류하는 입구가 흰 성벽입니다.",
    whyPopular:
      "일본 본드 순례에서 가장 찾기 쉬운 실사 명소입니다. 화산 세트와 달리, 성이 그대로 남아 있습니다.",
    mapsQuery: "Himeji Castle",
    sources: cite("you-only-live-twice"),
  },
  {
    slug: "yolt-new-otani",
    placeKo: "호텔 뉴오타니 도쿄",
    placeEn: "Hotel New Otani Tokyo",
    city: "도쿄",
    country: "일본",
    filmSlug: "you-only-live-twice",
    sceneNote:
      "오사토 케미컬의 본사로 나오는 고층 호텔입니다. 회전 레스토랑과 정원 탑이 스펙터의 일본 위장 얼굴입니다.",
    whyPopular:
      "숙박이 가능한 악당 본사입니다. CNN 등 여행지가 본드 호텔로 반복해 올리는 도쿄의 주소입니다.",
    mapsQuery: "Hotel New Otani Tokyo",
    sources: cite("you-only-live-twice", [
      {
        label: "CNN Travel — Hotels from James Bond movies",
        href: "https://www.cnn.com/travel/article/james-bond-hotels",
      },
    ]),
  },
  {
    slug: "yolt-kobe-docks",
    placeKo: "고베 부두",
    placeEn: "Kobe docks",
    city: "고베",
    country: "일본",
    filmSlug: "you-only-live-twice",
    sceneNote:
      "아키와 본드가 닝포 호를 쫓는 부두 격투의 현장입니다. 도쿄의 호텔과 규슈의 화산 사이를 항구가 잇습니다.",
    whyPopular:
      "산업 항구가 본드 액션의 골목이 된 장면입니다. 히메지·도쿄와 묶어 간사이 쪽 지도를 채웁니다.",
    mapsQuery: "Kobe Port Island docks",
    sources: cite("you-only-live-twice"),
  },
  {
    slug: "yolt-shinmoedake",
    placeKo: "신모에다케",
    placeEn: "Mount Shinmoedake",
    city: "기리시마",
    country: "일본",
    filmSlug: "you-only-live-twice",
    sceneNote:
      "블로펠드 화산 기지의 외경으로 쓰인 규슈의 활화산입니다. 내부의 로켓 격납고는 파인우드의 거대한 세트입니다.",
    whyPopular:
      "화면의 분화구를 실제 산에서 확인하려는 팬이 찾습니다. 분화와 출입 제한이 잦아, 여행 전에 개방 여부를 봐야 합니다.",
    mapsQuery: "Shinmoedake Kirishima",
    sources: cite("you-only-live-twice"),
  },
  {
    slug: "yolt-volcano-set",
    placeKo: "파인우드 — 화산 기지",
    placeEn: "Pinewood volcano lair",
    city: "이버 히스",
    country: "영국",
    filmSlug: "you-only-live-twice",
    sceneNote:
      "로켓이 출입하는 분화구 기지는 켄 애덤이 파인우드에 통째로 지은 세트입니다. 일본 외경과 영국 실내가 한 악당의 집을 나눕니다.",
    whyPopular:
      "시리즈 사상 가장 큰 세트 중 하나로 남습니다. 현장은 철거되었고, 팬은 신모에다케 외경과 기록 사진으로 가늠합니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios Iver Heath",
    sources: cite("you-only-live-twice", [BFI_BOND_50]),
  },

  // --- 여왕폐하 대작전 ---
  {
    slug: "ohmss-piz-gloria",
    placeKo: "피츠 글로리아 (쉴트호른)",
    placeEn: "Piz Gloria, Schilthorn",
    city: "뮈렌",
    country: "스위스",
    filmSlug: "on-her-majestys-secret-service",
    sceneNote:
      "블로펠드의 알레르기 클리닉으로 나오는 정상의 회전 레스토랑입니다. 스키 추격의 출발점이 이 봉우리입니다.",
    whyPopular:
      "영화 때문에 이름이 붙은 정상 레스토랑입니다. 케이블카와 007 전시가 있어, 알프스 본드 순례의 정점에 가깝습니다.",
    mapsQuery: "Piz Gloria Schilthorn",
    sources: cite("on-her-majestys-secret-service", [
      wikiEn("Piz_Gloria", "Piz Gloria"),
    ]),
  },
  {
    slug: "ohmss-murren",
    placeKo: "라우터브루넨 · 뮈렌",
    placeEn: "Lauterbrunnen and Mürren",
    city: "라우터브루넨",
    country: "스위스",
    filmSlug: "on-her-majestys-secret-service",
    sceneNote:
      "본드가 클리닉으로 오르는 계곡과 차 없는 산촌입니다. 스키와 봅슬레이 추격이 이 빙하 마을을 무대로 이어집니다.",
    whyPopular:
      "피츠 글로리아로 가는 길 자체가 촬영지입니다. 차 없는 뮈렌은 팬과 하이커가 같은 열차를 탑니다.",
    mapsQuery: "Muerren Lauterbrunnen Switzerland",
    sources: cite("on-her-majestys-secret-service"),
  },
  {
    slug: "ohmss-estoril",
    placeKo: "이스토릴 해안",
    placeEn: "Estoril coast",
    city: "이스토릴",
    country: "포르투갈",
    filmSlug: "on-her-majestys-secret-service",
    sceneNote:
      "본드가 트레이시를 만나 카지노와 호텔을 오가는 리스본 근교입니다. 플레밍이 전쟁 중 머물던 해안이 화면의 포르투갈이 됩니다.",
    whyPopular:
      "팔라시우 호텔과 카지노, 긴슈 해변이 한 해안에 붙습니다. 알프스 클리닉과 짝을 이루는 남쪽의 현장입니다.",
    mapsQuery: "Estoril Portugal",
    sources: cite("on-her-majestys-secret-service", [
      {
        label:
          "Radio Times — Bond's favourite hotel on Portugal's Estoril coast",
        href: "https://www.radiotimes.com/movies/discover-james-bonds-favourite-hotel-on-portugals-estoril-coast/",
      },
    ]),
  },
  {
    slug: "ohmss-guincho",
    placeKo: "긴슈 해변",
    placeEn: "Guincho Beach",
    city: "카스카이스",
    country: "포르투갈",
    filmSlug: "on-her-majestys-secret-service",
    sceneNote:
      "본드와 트레이시의 해안 드라이브와 습격이 열리는 대서양 해변입니다. 카지노의 조명 뒤에 거친 파도가 있습니다.",
    whyPopular:
      "이스토릴에서 차로 이어지는 본드 해안입니다. 서핑 해변으로도 알려져, 영화 팬과 바다 관광이 겹칩니다.",
    mapsQuery: "Praia do Guincho Cascais",
    sources: cite("on-her-majestys-secret-service"),
  },
  {
    slug: "ohmss-college-of-arms",
    placeKo: "칼리지 오브 암스",
    placeEn: "College of Arms",
    city: "런던",
    country: "영국",
    filmSlug: "on-her-majestys-secret-service",
    sceneNote:
      "본드가 문장을 구실로 블로펠드의 신분을 캐는 런던의 문장학 기관입니다. 알프스로 가기 전, 영국의 서류 작업이 여기서 열립니다.",
    whyPopular:
      "시티 근처의 실제 문장원입니다. 관광 개방은 제한적이라, 외관과 제도의 설명을 읽는 방문에 가깝습니다.",
    mapsQuery: "College of Arms London",
    sources: cite("on-her-majestys-secret-service"),
  },

  // --- 다이아몬드는 영원히 ---
  {
    slug: "daf-las-vegas-strip",
    placeKo: "라스베이거스 스트립",
    placeEn: "Las Vegas Strip",
    city: "라스베이거스",
    country: "미국",
    filmSlug: "diamonds-are-forever",
    sceneNote:
      "본드가 다이아몬드 파이프라인을 따라 들어오는 네온의 거리입니다. 야간 추격은 실제 조명을 거의 그대로 썼습니다.",
    whyPopular:
      "공식 시리즈가 라스베이거스를 전면으로 쓴 유일한 편에 가깝습니다. 카지노 외관은 바뀌었으나, 스트립이라는 골격은 남습니다.",
    mapsQuery: "Las Vegas Strip",
    sources: cite("diamonds-are-forever"),
  },
  {
    slug: "daf-circus-circus",
    placeKo: "서커스 서커스",
    placeEn: "Circus Circus",
    city: "라스베이거스",
    country: "미국",
    filmSlug: "diamonds-are-forever",
    sceneNote:
      "본드와 티파니가 공중 묘기를 스치는 카지노입니다. 당시 주인이 본드 팬이라 촬영을 열었고, 본인도 카메오에 가깝게 등장합니다.",
    whyPopular:
      "스트립에서 이름이 바뀌지 않고 남은 촬영지입니다. 왜트 하우스(힐튼)와 묶어 1971년의 베가스를 재구성합니다.",
    mapsQuery: "Circus Circus Las Vegas",
    sources: cite("diamonds-are-forever"),
  },
  {
    slug: "daf-whyte-house",
    placeKo: "왜트 하우스 (구 인터내셔널 호텔)",
    placeEn: "Whyte House / International Hotel",
    city: "라스베이거스",
    country: "미국",
    filmSlug: "diamonds-are-forever",
    sceneNote:
      "윌러드 왜트의 카지노 호텔로 나오는 고층입니다. 실제는 당시 인터내셔널 호텔(이후 힐튼, 지금 웨스트게이트) 외경에 탑을 합성했습니다.",
    whyPopular:
      "블로펠드가 점거한 베가스 본거지입니다. 숙박이 가능한 악당 호텔로, 호텔 항목과 같은 건물입니다.",
    mapsQuery: "Westgate Las Vegas Resort",
    sources: cite("diamonds-are-forever"),
  },
  {
    slug: "daf-amsterdam",
    placeKo: "암스테르담",
    placeEn: "Amsterdam",
    city: "암스테르담",
    country: "네덜란드",
    filmSlug: "diamonds-are-forever",
    sceneNote:
      "다이아몬드 밀수의 유럽 기점입니다. 운하와 보석 상점이 베가스로 넘어가기 전의 짧은 추리를 맡습니다.",
    whyPopular:
      "코너리 귀환 편의 유럽 프롤로그입니다. 네온 이전의 운하를 보러 오는 팬이 적지 않습니다.",
    mapsQuery: "Amsterdam canal district",
    sources: cite("diamonds-are-forever"),
  },

  // --- 죽느냐 사느냐 ---
  {
    slug: "lald-new-orleans",
    placeKo: "뉴올리언스 베이우",
    placeEn: "Louisiana bayou",
    city: "뉴올리언스",
    country: "미국",
    filmSlug: "live-and-let-die",
    sceneNote:
      "무어 첫 편의 보트 추격이 펼쳐지는 루이지애나 습지입니다. 시내의 재즈와 강의 직선 점프가 한 주에 붙습니다.",
    whyPopular:
      "본드 보트 추격의 원본 지점에 가깝습니다. 팬은 실제 점프 지점과 관광 에어보트 코스를 구분해서 찾습니다.",
    mapsQuery: "Louisiana bayou New Orleans boat tour",
    sources: cite("live-and-let-die"),
  },
  {
    slug: "lald-harlem",
    placeKo: "할렘",
    placeEn: "Harlem",
    city: "뉴욕",
    country: "미국",
    filmSlug: "live-and-let-die",
    sceneNote:
      "본드가 미스터 빅의 식당 필레 오브 소울로 들어가는 뉴욕입니다. 카리브로 가기 전, 미국의 거리가 먼저 열립니다.",
    whyPopular:
      "시리즈가 할렘을 현장으로 쓴 드문 편입니다. 식당은 세트가 섞여 있어, 거리의 분위기만 대조하는 편이 안전합니다.",
    mapsQuery: "Harlem New York City",
    sources: cite("live-and-let-die"),
  },
  {
    slug: "lald-jamaica",
    placeKo: "자메이카 (산 모니크 대역)",
    placeEn: "Jamaica as San Monique",
    city: "몬테고 베이 일대",
    country: "자메이카",
    filmSlug: "live-and-let-die",
    sceneNote:
      "카난가의 섬 산 모니크는 허구이고, 촬영은 자메이카에서 이루어졌습니다. 닥터 노 이후 시리즈가 다시 이 섬을 씁니다.",
    whyPopular:
      "플레밍의 섬이 무어 시대의 활극으로 돌아옵니다. 북해안 리조트와 농장 도로가 허구의 독재 국가로 읽힙니다.",
    mapsQuery: "Montego Bay Jamaica",
    sources: cite("live-and-let-die"),
  },
  {
    slug: "lald-crocodile-farm",
    placeKo: "악어 농장",
    placeEn: "Kananga's crocodile farm",
    city: "폴머스 일대",
    country: "자메이카",
    filmSlug: "live-and-let-die",
    sceneNote:
      "본드가 악어 등 위로 건너뛰는 농장입니다. 실제 자메이카 악어 사육장을 썼고, 스턴트는 현지 운영자와 연결됩니다.",
    whyPopular:
      "무어 시대를 한 장면으로 요약하는 현장입니다. 농장 이름은 바뀌었을 수 있어, 방문 전에 현지 안내를 확인하는 것이 맞습니다.",
    mapsQuery: "Falmouth Jamaica crocodile farm",
    sources: cite("live-and-let-die"),
  },

  // --- 황금총을 가진 사나이 ---
  {
    slug: "tmwtgg-khao-phing-kan",
    placeKo: "카오핑간 (제임스 본드 섬)",
    placeEn: "Khao Phing Kan / James Bond Island",
    city: "팡응아",
    country: "태국",
    filmSlug: "the-man-with-the-golden-gun",
    sceneNote:
      "스카라망가의 섬 외경입니다. 옆의 석회 기둥 코타푸가 태양 전지의 버섯 바위로 나오고, 실내는 세트입니다.",
    whyPopular:
      "영화 이후 현지와 가이드가 제임스 본드 섬이라 부릅니다. 태국 본드 관광의 상징이 되었고, 배 관광으로만 닫힌 섬에 닿습니다.",
    mapsQuery: "James Bond Island Khao Phing Kan",
    sources: cite("the-man-with-the-golden-gun", [
      wikiEn("Khao_Phing_Kan", "Khao Phing Kan"),
    ]),
  },
  {
    slug: "tmwtgg-bangkok",
    placeKo: "방콕 클롱",
    placeEn: "Bangkok khlongs",
    city: "방콕",
    country: "태국",
    filmSlug: "the-man-with-the-golden-gun",
    sceneNote:
      "본드의 차량 추격과 무에타이, 운하가 겹치는 도시입니다. 하이에이스가 다리를 접고 강을 건너는 장면의 배경입니다.",
    whyPopular:
      "섬 관광 전에 거치는 수도의 본드 지도입니다. 룽피니 경기장 쪽 복싱과 끄룽카셈 도로가 자주 거론됩니다.",
    mapsQuery: "Bangkok khlong Krung Kasem Road",
    sources: cite("the-man-with-the-golden-gun"),
  },
  {
    slug: "tmwtgg-queen-elizabeth",
    placeKo: "퀸 엘리자베스 호 잔해",
    placeEn: "RMS Queen Elizabeth wreck",
    city: "홍콩",
    country: "홍콩",
    filmSlug: "the-man-with-the-golden-gun",
    sceneNote:
      "빅토리아 항에 반잠수된 여객선이 MI6 기지로 나옵니다. 실제 잔해를 외경에 썼고, 그 선체는 이후 해체되었습니다.",
    whyPopular:
      "사라진 촬영지입니다. 팬은 항만의 스카이라인만 대조하고, 선체 자체는 지도에 없다고 적습니다.",
    mapsQuery: "Victoria Harbour Hong Kong",
    sources: cite("the-man-with-the-golden-gun"),
  },
  {
    slug: "tmwtgg-funhouse",
    placeKo: "스카라망가의 펀하우스",
    placeEn: "Scaramanga's funhouse",
    city: "이버 히스",
    country: "영국",
    filmSlug: "the-man-with-the-golden-gun",
    sceneNote:
      "거울과 마네킹의 결투장은 섬 외경이 아니라 파인우드 세트입니다. 카오핑간의 바위와 실내 미로를 나누어 읽습니다.",
    whyPopular:
      "황금총 결투의 이미지는 세트에서 나왔습니다. 섬 관광만으로는 그 복도를 만날 수 없습니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios Iver Heath",
    sources: cite("the-man-with-the-golden-gun"),
  },

  // --- 나를 사랑한 스파이 ---
  {
    slug: "tswlm-giza",
    placeKo: "기자의 피라미드",
    placeEn: "Giza pyramids",
    city: "기자",
    country: "이집트",
    filmSlug: "the-spy-who-loved-me",
    sceneNote:
      "본드와 아냐가 스핑크스와 피라미드 앞에서 정보를 주고받는 밤입니다. 사운드와 라이트 쇼가 스파이의 접선으로 읽힙니다.",
    whyPopular:
      "시리즈가 이집트 고대 유적을 전면으로 쓴 장면입니다. 사르데냐의 호텔과 짝을 이루는 대륙의 입구입니다.",
    mapsQuery: "Giza pyramid complex",
    sources: cite("the-spy-who-loved-me"),
  },
  {
    slug: "tswlm-karnak",
    placeKo: "카르나크 신전",
    placeEn: "Karnak Temple",
    city: "룩소르",
    country: "이집트",
    filmSlug: "the-spy-who-loved-me",
    sceneNote:
      "본드가 유적을 따라 추적하는 룩소르의 신전입니다. 기자와 함께 이집트 편의 고고학 축을 맡습니다.",
    whyPopular:
      "나일 상류의 본드 현장입니다. 피라미드만 보고 돌아가는 일정에, 카르나크를 더하면 촬영 지도가 완성됩니다.",
    mapsQuery: "Karnak Temple Luxor",
    sources: cite("the-spy-who-loved-me"),
  },
  {
    slug: "tswlm-sardinia",
    placeKo: "코스타 스메랄다",
    placeEn: "Costa Smeralda",
    city: "포르토 체르보",
    country: "이탈리아",
    filmSlug: "the-spy-who-loved-me",
    sceneNote:
      "본드와 아냐가 스트롬버그를 탐문하는 사르데냐 해안입니다. 로터스 에스프리가 바다로 들어가는 추격의 출발점입니다.",
    whyPopular:
      "칼라 디 볼페 호텔과 에메랄드 해안이 본드 리조트의 상징이 됩니다. 이집트 유적과 대비되는 1970년대의 휴양 악당입니다.",
    mapsQuery: "Hotel Cala di Volpe Porto Cervo",
    sources: cite("the-spy-who-loved-me"),
  },
  {
    slug: "tswlm-mount-asgard",
    placeKo: "마운트 애스가르드",
    placeEn: "Mount Asgard",
    city: "배핀 섬",
    country: "캐나다",
    filmSlug: "the-spy-who-loved-me",
    sceneNote:
      "오프닝 스키 점프 뒤 낙하산이 열리는 절벽입니다. 알프스로 읽히지만, 실제 점프는 캐나다 북극의 이 봉우리에서 찍었습니다.",
    whyPopular:
      "본드 오프닝 스턴트의 전설로 남습니다. 접근이 극히 어려워, 팬은 기록과 원정 이야기로 방문합니다.",
    mapsQuery: "Mount Asgard Baffin Island",
    sources: cite("the-spy-who-loved-me", [
      {
        label: "007.com — Location, Location, Location",
        href: "https://www.007.com/location-location-location/",
      },
    ]),
  },
  {
    slug: "tswlm-liparus",
    placeKo: "파인우드 — 리파루스 잠수함 독",
    placeEn: "Liparus submarine dock, 007 Stage",
    city: "이버 히스",
    country: "영국",
    filmSlug: "the-spy-who-loved-me",
    sceneNote:
      "유조선 안의 잠수함 도크는 007 스테이지를 위해 지은 초대형 세트입니다. 사르데냐 해안의 아틀란티스와 짝을 이룹니다.",
    whyPopular:
      "본드 스테이지의 존재 이유가 된 세트입니다. 스튜디오 화재와 재건의 역사와 함께 인용됩니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios 007 Stage",
    sources: cite("the-spy-who-loved-me", [BFI_BOND_50]),
  },
  {
    slug: "tswlm-atlantis",
    placeKo: "아틀란티스 (스트롬버그 해상 기지)",
    placeEn: "Atlantis sea base",
    city: "포르토 체르보 해상",
    country: "이탈리아",
    filmSlug: "the-spy-who-loved-me",
    sceneNote:
      "스트롬버그의 해상 거점으로, 사르데냐 앞바다 외경과 미니어처·세트가 겹칩니다. 호텔 선착장에서 보트로 향하는 길이 실사입니다.",
    whyPopular:
      "칼라 디 볼페에서 바다를 바라보는 이유가 됩니다. 구조물 자체는 남아 있지 않아, 해안선만 대조합니다.",
    isSet: true,
    mapsQuery: "Costa Smeralda Sardinia",
    sources: cite("the-spy-who-loved-me"),
  },

  // --- 문레이커 ---
  {
    slug: "moonraker-venice",
    placeKo: "베네치아 산마르코",
    placeEn: "Venice, St Mark's",
    city: "베네치아",
    country: "이탈리아",
    filmSlug: "moonraker",
    sceneNote:
      "유리 박물관과 곤돌라, 시계탑이 추격의 운하가 됩니다. 본드가 유리 공방을 따라 드락스의 단서를 쫓습니다.",
    whyPopular:
      "위기일발 이후 베네치아를 액션으로 다시 연 편입니다. 산마르코 일대는 도보로 겹쳐 보기 쉽습니다.",
    mapsQuery: "Piazza San Marco Venice",
    sources: cite("moonraker"),
  },
  {
    slug: "moonraker-sugarloaf",
    placeKo: "슈거로프 산",
    placeEn: "Sugarloaf Mountain",
    city: "리우데자네이루",
    country: "브라질",
    filmSlug: "moonraker",
    sceneNote:
      "본드와 조스가 케이블카에서 싸우는 봉우리입니다. 리우의 카니발과 함께 남반구의 본드를 열어둡니다.",
    whyPopular:
      "리우 관광의 필수 봉우리가 본드 결투장이 됩니다. 그리스도와 케이블카가 한 엽서에 들어갑니다.",
    mapsQuery: "Sugarloaf Mountain Rio de Janeiro",
    sources: cite("moonraker"),
  },
  {
    slug: "moonraker-christ-redeemer",
    placeKo: "구세주 그리스도상",
    placeEn: "Christ the Redeemer",
    city: "리우데자네이루",
    country: "브라질",
    filmSlug: "moonraker",
    sceneNote:
      "리우 시퀀스의 스카이라인에 반복해 들어오는 코르코바두의 성상입니다. 슈거로프 추격의 방향 감각을 이 실루엣이 잡습니다.",
    whyPopular:
      "영화가 리우를 고른 이유를 한눈에 보여 줍니다. 본드 팬과 일반 관광의 동선이 완전히 겹칩니다.",
    mapsQuery: "Christ the Redeemer Rio de Janeiro",
    sources: cite("moonraker"),
  },
  {
    slug: "moonraker-iguazu",
    placeKo: "이과수 폭포",
    placeEn: "Iguazu Falls",
    city: "이과수",
    country: "브라질",
    filmSlug: "moonraker",
    sceneNote:
      "본드가 폭포 너머 아마존 쪽으로 넘어가는 국경의 물줄기입니다. 브라질·아르헨티나 경계의 실제 폭포를 썼습니다.",
    whyPopular:
      "리우 다음으로 남미 본드 지도에 찍히는 자리입니다. 케이블카 다음의 자연 스펙터클을 보러 옵니다.",
    mapsQuery: "Iguazu Falls",
    sources: cite("moonraker"),
  },
  {
    slug: "moonraker-vaux-le-vicomte",
    placeKo: "보 르 비콩트 성",
    placeEn: "Château de Vaux-le-Vicomte",
    city: "맹시",
    country: "프랑스",
    filmSlug: "moonraker",
    sceneNote:
      "드락스의 프랑스 저택 외경으로 쓰인 17세기 성입니다. 사냥과 실험실의 입구가 이 정원의 축선입니다.",
    whyPopular:
      "베르사유 이전의 고전 정원을 본드 악당이 빌립니다. 파리에서 당일치기로 닿는 촬영지입니다.",
    mapsQuery: "Chateau de Vaux-le-Vicomte",
    sources: cite("moonraker"),
  },
  {
    slug: "moonraker-space-station",
    placeKo: "파인우드 — 우주 정거장",
    placeEn: "Moonraker space station set",
    city: "이버 히스",
    country: "영국",
    filmSlug: "moonraker",
    sceneNote:
      "궤도 위의 드락스 기지는 전부 스튜디오입니다. 베네치아와 리우가 실사라도, 결말의 중력은 파인우드에서 만들어집니다.",
    whyPopular:
      "시리즈가 가장 크게 벌어진 세트로 기억됩니다. 현장은 없고, 007 스테이지의 후일담으로만 남습니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios Iver Heath",
    sources: cite("moonraker"),
  },

  // --- 유어 아이즈 온리 ---
  {
    slug: "fyeo-meteora",
    placeKo: "메테오라 수도원",
    placeEn: "Meteora monasteries",
    city: "칼람바카",
    country: "그리스",
    filmSlug: "for-your-eyes-only",
    sceneNote:
      "본드가 절벽을 올라 들어가는 성 키릴 수도원의 외경입니다. 실제 메테오라의 암벽 수도원을 썼습니다.",
    whyPopular:
      "그리스 본드 순례의 정점입니다. 등반은 영화의 스턴트이고, 방문은 계단과 관람 규칙을 따릅니다.",
    mapsQuery: "Meteora monasteries Greece",
    sources: cite("for-your-eyes-only"),
  },
  {
    slug: "fyeo-cortina",
    placeKo: "코르티나 담페초",
    placeEn: "Cortina d'Ampezzo",
    city: "코르티나 담페초",
    country: "이탈리아",
    filmSlug: "for-your-eyes-only",
    sceneNote:
      "아이스 링크와 스키점프, 봅슬레이가 암살 시도가 되는 돌로미티 마을입니다. 본드가 머무는 미라몬티 호텔이 이 계곡을 내려다봅니다.",
    whyPopular:
      "동계 스포츠 리조트가 본드 액션장이 된 편입니다. 호텔과 점프대, 광장을 걸어 한 지도를 만들 수 있습니다.",
    mapsQuery: "Cortina d'Ampezzo",
    sources: cite("for-your-eyes-only"),
  },
  {
    slug: "fyeo-achilleion",
    placeKo: "아킬레온 궁전",
    placeEn: "Achilleion Palace",
    city: "코르푸",
    country: "그리스",
    filmSlug: "for-your-eyes-only",
    sceneNote:
      "곤잘레스의 스페인 별장으로 나오는 코르푸의 궁전입니다. 마드리드 대역으로 이 아드리아 해 별장을 썼습니다.",
    whyPopular:
      "메테오라와 함께 그리스 편의 두 축입니다. 박물관으로 열려, 테라스와 정원을 화면과 대조하기 쉽습니다.",
    mapsQuery: "Achilleion Palace Corfu",
    sources: cite("for-your-eyes-only"),
  },
  {
    slug: "fyeo-corfu-coast",
    placeKo: "코르푸 해안",
    placeEn: "Corfu coastline",
    city: "코르푸",
    country: "그리스",
    filmSlug: "for-your-eyes-only",
    sceneNote:
      "ATAC가 가라앉은 해역과 잠수, 해안 별장이 이어지는 이오니아 해입니다. 팔라이오카스트리차 일대가 자주 거론됩니다.",
    whyPopular:
      "거대 기지 대신 잠수를 고른 편의 바다입니다. 궁전 관람과 해안 드라이브를 한 섬에서 끝낼 수 있습니다.",
    mapsQuery: "Palaiokastritsa Corfu",
    sources: cite("for-your-eyes-only"),
  },

  // --- 옥토퍼시 ---
  {
    slug: "octopussy-lake-palace",
    placeKo: "타지 레이크 팰리스",
    placeEn: "Taj Lake Palace",
    city: "우다이푸르",
    country: "인도",
    filmSlug: "octopussy",
    sceneNote:
      "옥토퍼시의 호수 궁전으로 나오는 섬 호텔입니다. 식당과 테라스, 배의 입성이 실제 궁전 호텔에서 찍혔습니다.",
    whyPopular:
      "숙박이 가능한 본드걸의 본거지입니다. 우다이푸르 호수 관광의 중심과 촬영지가 같습니다.",
    mapsQuery: "Taj Lake Palace Udaipur",
    sources: cite("octopussy", [
      {
        label: "CNN Travel — Hotels from James Bond movies",
        href: "https://www.cnn.com/travel/article/james-bond-hotels",
      },
    ]),
  },
  {
    slug: "octopussy-monsoon-palace",
    placeKo: "몬순 팰리스",
    placeEn: "Monsoon Palace (Sajjan Garh)",
    city: "우다이푸르",
    country: "인도",
    filmSlug: "octopussy",
    sceneNote:
      "칸의 언덕 별장 외경으로 쓰인 산정의 궁전입니다. 호수 위의 레이크 팰리스와 높이를 나눕니다.",
    whyPopular:
      "우다이푸르를 내려다보는 전망이 화면과 같습니다. 레이크 팰리스와 한 쌍으로 찾는 언덕입니다.",
    mapsQuery: "Monsoon Palace Udaipur",
    sources: cite("octopussy"),
  },
  {
    slug: "octopussy-udaipur",
    placeKo: "우다이푸르 피촐라 호수",
    placeEn: "Lake Pichola, Udaipur",
    city: "우다이푸르",
    country: "인도",
    filmSlug: "octopussy",
    sceneNote:
      "본드가 배로 궁전에 잠입하는 호수 도시입니다. 시티 팰리스와 자그 만디르가 서커스 이전의 인도를 채웁니다.",
    whyPopular:
      "인도 본드 관광이 한 도시에 모여 있습니다. 호수 보트와 궁전 호텔이 같은 일정입니다.",
    mapsQuery: "Lake Pichola Udaipur",
    sources: cite("octopussy"),
  },
  {
    slug: "octopussy-east-germany",
    placeKo: "동독 서커스 열차 (영국 세트)",
    placeEn: "East German circus train (UK/set)",
    city: "이버 히스",
    country: "영국",
    filmSlug: "octopussy",
    sceneNote:
      "서커스 열차와 체크포인트의 상당 부분은 영국 현지와 파인우드입니다. 우다이푸르가 실사라도, 냉전 국경은 세트에 가깝습니다.",
    whyPopular:
      "인도 궁전만 순례하면 플롯의 절반이 빠집니다. 팬은 호수와 열차를 구분해 적습니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios Iver Heath",
    sources: cite("octopussy"),
  },

  // --- 뷰 투 어 킬 ---
  {
    slug: "avtak-golden-gate",
    placeKo: "금문교",
    placeEn: "Golden Gate Bridge",
    city: "샌프란시스코",
    country: "미국",
    filmSlug: "a-view-to-a-kill",
    sceneNote:
      "조린의 비행선과 본드가 마지막에 얽히는 다리입니다. 실리콘 밸리를 잠기게 하려는 계획의 하늘 출구입니다.",
    whyPopular:
      "무어 마지막 편의 상징 장소입니다. 시내 시청과 묶어 샌프란시스코 본드 지도를 만듭니다.",
    mapsQuery: "Golden Gate Bridge San Francisco",
    sources: cite("a-view-to-a-kill"),
  },
  {
    slug: "avtak-city-hall",
    placeKo: "샌프란시스코 시청",
    placeEn: "San Francisco City Hall",
    city: "샌프란시스코",
    country: "미국",
    filmSlug: "a-view-to-a-kill",
    sceneNote:
      "본드와 스테이시가 조린의 화재·추격에 휘말리는 돔 건물입니다. 실제 시청 실내를 썼습니다.",
    whyPopular:
      "금문교만큼 찾기 쉬운 도심 촬영지입니다. 호텔이 아니라 공공 건물이라, 관람 규칙을 따릅니다.",
    mapsQuery: "San Francisco City Hall",
    sources: cite("a-view-to-a-kill"),
  },
  {
    slug: "avtak-eiffel",
    placeKo: "에펠탑",
    placeEn: "Eiffel Tower",
    city: "파리",
    country: "프랑스",
    filmSlug: "a-view-to-a-kill",
    sceneNote:
      "본드가 메이 데이를 쫓아 탑을 오르고, 낙하산이 센강을 향하는 오프닝 뒤의 파리입니다. 조린의 경매와 레스토랑이 탑 주변에 붙습니다.",
    whyPopular:
      "파리 본드 장면 중 가장 식별이 쉽습니다. 샌프란시스코 결말과 대비되는 유럽의 입구입니다.",
    mapsQuery: "Eiffel Tower Paris",
    sources: cite("a-view-to-a-kill"),
  },
  {
    slug: "avtak-chantilly",
    placeKo: "샹티이 성",
    placeEn: "Château de Chantilly",
    city: "샹티이",
    country: "프랑스",
    filmSlug: "a-view-to-a-kill",
    sceneNote:
      "조린의 프랑스 승마 저택 외경으로 쓰인 성입니다. 본드가 조련사로 잠입하는 정원과 마구간이 이 축선입니다.",
    whyPopular:
      "에펠탑만 보고 빠지는 팬이 놓치는 현장입니다. 파리 근교에서 당일로 대조할 수 있습니다.",
    mapsQuery: "Chateau de Chantilly",
    sources: cite("a-view-to-a-kill"),
  },
  {
    slug: "avtak-ascot",
    placeKo: "애스콧 경마장",
    placeEn: "Ascot Racecourse",
    city: "애스콧",
    country: "영국",
    filmSlug: "a-view-to-a-kill",
    sceneNote:
      "조린의 부정 경마를 본드가 지켜보는 영국의 경마장입니다. 파리와 샌프란시스코 사이의 사교 현장입니다.",
    whyPopular:
      "실제 레이스 일정과 겹치면 화면의 관중석을 체험할 수 있습니다. 출입은 경마 일정에 따릅니다.",
    mapsQuery: "Ascot Racecourse",
    sources: cite("a-view-to-a-kill"),
  },

  // --- 리빙 데이라이츠 ---
  {
    slug: "tld-gibraltar",
    placeKo: "지브롤터 바위",
    placeEn: "Rock of Gibraltar",
    city: "지브롤터",
    country: "지브롤터",
    filmSlug: "the-living-daylights",
    sceneNote:
      "00 요원 훈련이 사고로 바뀌는 오프닝의 바위산입니다. 달튼 첫 편의 티저가 지중해 요새로 열립니다.",
    whyPopular:
      "짧은 오프닝이지만 식별이 분명합니다. 케이블카와 정상 도로가 팬 사진의 구도가 됩니다.",
    mapsQuery: "Rock of Gibraltar",
    sources: cite("the-living-daylights"),
  },
  {
    slug: "tld-riesenrad",
    placeKo: "빈 리젠라트",
    placeEn: "Wiener Riesenrad",
    city: "빈",
    country: "오스트리아",
    filmSlug: "the-living-daylights",
    sceneNote:
      "본드와 카라가 프라터의 대관람차에 오르는 빈입니다. 브라티슬라바 대역과 실제 빈이 한 도시 지도에서 만납니다.",
    whyPopular:
      "제3의 사나이를 본드가 인용하는 자리로 읽힙니다. 슈테판 대성당·쇤브룬과 묶어 걷는 코스가 됩니다.",
    mapsQuery: "Wiener Riesenrad Vienna",
    sources: cite("the-living-daylights"),
  },
  {
    slug: "tld-vienna",
    placeKo: "빈 구시가",
    placeEn: "Vienna historic centre",
    city: "빈",
    country: "오스트리아",
    filmSlug: "the-living-daylights",
    sceneNote:
      "콘서트와 가스홀, 도심 추격이 이어지는 합스부르크의 수도입니다. 체코슬로바키아로 읽히는 거리의 일부도 이 도시에서 찍었습니다.",
    whyPopular:
      "달튼 본드가 가장 오래 머무는 유럽 도시입니다. 대관람차만 찍고 가기에는 아쉬운 밀도입니다.",
    mapsQuery: "Vienna Innere Stadt",
    sources: cite("the-living-daylights"),
  },
  {
    slug: "tld-tangier",
    placeKo: "탕헤르",
    placeEn: "Tangier",
    city: "탕헤르",
    country: "모로코",
    filmSlug: "the-living-daylights",
    sceneNote:
      "본드가 소련 쪽 배신과 밀수를 쫓아 들어오는 모로코의 항구입니다. 아프가니스탄으로 읽히는 전투의 일부도 모로코에서 찍었습니다.",
    whyPopular:
      "빈과 대비되는 남쪽 축입니다. 스펙터·노 타임 투 다이가 다시 모로코를 쓰므로, 달튼의 탕헤르가 앞선 기록이 됩니다.",
    mapsQuery: "Tangier Morocco medina",
    sources: cite("the-living-daylights"),
  },

  // --- 살인면허 ---
  {
    slug: "ltk-key-west",
    placeKo: "키웨스트",
    placeEn: "Key West",
    city: "키웨스트",
    country: "미국",
    filmSlug: "licence-to-kill",
    sceneNote:
      "펠릭스 라이터의 결혼식과 배신이 열리는 플로리다의 끝입니다. 본드가 면허를 내려놓고 복수에 들어가는 항구입니다.",
    whyPopular:
      "달튼 두 번째 편의 미국 입구입니다. 하버와 말러리 스퀘어 일대를 걸으면 오프닝의 공기가 남습니다.",
    mapsQuery: "Key West Mallory Square",
    sources: cite("licence-to-kill"),
  },
  {
    slug: "ltk-isthmus",
    placeKo: "이스트무스 시티 (멕시코 대역)",
    placeEn: "Isthmus City (Mexico stand-in)",
    city: "멕시코시티 · 아카풀코",
    country: "멕시코",
    filmSlug: "licence-to-kill",
    sceneNote:
      "산체스의 허구 도시 이스트무스는 파나마를 연상하지만, 촬영은 멕시코시티와 아카풀코 등에서 이루어졌습니다.",
    whyPopular:
      "카리브와 중미를 한 나라의 현지가 대신합니다. 팬은 허구 국명과 실제 멕시코를 구분해 적습니다.",
    mapsQuery: "Acapulco historic centre",
    sources: cite("licence-to-kill"),
  },
  {
    slug: "ltk-mexicali",
    placeKo: "멕시칼리 사막 유조선 도로",
    placeEn: "Mexicali desert tanker chase",
    city: "멕시칼리",
    country: "멕시코",
    filmSlug: "licence-to-kill",
    sceneNote:
      "산체스의 유조선 행렬을 본드가 따라붙는 사막 도로입니다. 스튜디오가 아니라 바하칼리포르니아의 실제 직선입니다.",
    whyPopular:
      "달튼 편의 액션을 한 장면으로 요약하는 현장입니다. 관광 코스는 없고, 위치의 기록으로 남습니다.",
    mapsQuery: "Mexicali Baja California desert highway",
    sources: cite("licence-to-kill"),
  },
  {
    slug: "ltk-olympatec",
    placeKo: "올림파텍 명상 연구소",
    placeEn: "Olimpatec Meditation Institute",
    city: "멕시코 현지 세트",
    country: "멕시코",
    filmSlug: "licence-to-kill",
    sceneNote:
      "산체스의 위장 종교 시설로, 멕시코 현지에 지은 세트에 가깝습니다. 별장의 사치와 마약이 수련원 간판 뒤로 숨습니다.",
    whyPopular:
      "방문 가능한 테마파크가 아닙니다. 키웨스트·사막 도로와 구분해, 허구 시설로 적습니다.",
    isSet: true,
    mapsQuery: "Mexico City film studios",
    sources: cite("licence-to-kill"),
  },

  // --- 골든아이 ---
  {
    slug: "goldeneye-contra-dam",
    placeKo: "콘트라 댐 (베르차스카 댐)",
    placeEn: "Contra / Verzasca Dam",
    city: "티치노",
    country: "스위스",
    filmSlug: "goldeneye",
    sceneNote:
      "본드가 소련 화학 무기고로 뛰어내리는 아치 댐입니다. 아르한겔스크로 읽히지만, 촬영은 로카르노 근처입니다.",
    whyPopular:
      "영화 이후 번지점프 명소가 되었습니다. 브로스넌 부활 오프닝의 현장으로, 알프스 본드 지도의 남쪽 끝입니다.",
    mapsQuery: "Verzasca Dam Contra Switzerland",
    sources: cite("goldeneye", [
      wikiEn("Contra_Dam", "Contra Dam"),
      {
        label: "007.com — Location, Location, Location",
        href: "https://www.007.com/location-location-location/",
      },
    ]),
  },
  {
    slug: "goldeneye-monte-carlo",
    placeKo: "몬테카를로 카지노",
    placeEn: "Casino de Monte-Carlo",
    city: "몬테카를로",
    country: "모나코",
    filmSlug: "goldeneye",
    sceneNote:
      "본드가 세니아 오나탑과 타이거 헬리콥터를 스치는 카지노와 항구입니다. 호텔 드 파리와 같은 광장을 공유합니다.",
    whyPopular:
      "플레밍 소설의 카지노와 가장 가까운 실제 도박장 중 하나입니다. 도보로 호텔·카지노·항구가 한 블록입니다.",
    mapsQuery: "Casino de Monte-Carlo",
    sources: cite("goldeneye"),
  },
  {
    slug: "goldeneye-arecibo",
    placeKo: "아레시보 천문대",
    placeEn: "Arecibo Observatory",
    city: "아레시보",
    country: "푸에르토리코",
    filmSlug: "goldeneye",
    sceneNote:
      "쿠바 정글의 골든아이 접시로 나오는 전파 망원경입니다. 접시가 호수에 잠기는 연출은 미니어처이고, 외경은 푸에르토리코입니다.",
    whyPopular:
      "실재했던 거대 접시를 본드가 빌린 현장입니다. 천문대는 이후 붕괴·폐쇄의 기록이 있어, 방문 가능 여부를 따로 확인해야 합니다.",
    mapsQuery: "Arecibo Observatory Puerto Rico",
    sources: cite("goldeneye", [
      {
        label: "007.com — Location, Location, Location",
        href: "https://www.007.com/location-location-location/",
      },
    ]),
  },
  {
    slug: "goldeneye-st-petersburg",
    placeKo: "상트페테르부르크 (리브스든 세트)",
    placeEn: "St. Petersburg streets (Leavesden)",
    city: "리브스든",
    country: "영국",
    filmSlug: "goldeneye",
    sceneNote:
      "탱크 추격의 네바 거리 상당 부분은 러시아 현지가 아니라 리브스든에 지은 세트입니다. 일부 실사와 영국 재현이 겹칩니다.",
    whyPopular:
      "화면의 러시아를 그대로 걸을 수는 없습니다. 팬은 실제 페테르부르크와 스튜디오를 나누어 적습니다.",
    isSet: true,
    mapsQuery: "Leavesden Studios Warner Bros",
    sources: cite("goldeneye"),
  },
  {
    slug: "goldeneye-statue-park",
    placeKo: "소비에트 동상 공원 (세트)",
    placeEn: "Soviet statue graveyard set",
    city: "리브스든",
    country: "영국",
    filmSlug: "goldeneye",
    sceneNote:
      "쓰러진 레닌과 전차 동상 사이를 본드가 지나는 장면은 영국 세트입니다. 부다페스트의 메멘토 공원에서 힌트를 얻었을 뿐, 그곳이 촬영지는 아닙니다.",
    whyPopular:
      "냉전 이후 본드의 상징 이미지입니다. 실체를 메멘토 공원에서 찾는 것은 분위기 대조이지, 같은 장소가 아닙니다.",
    isSet: true,
    mapsQuery: "Leavesden Studios",
    sources: cite("goldeneye"),
  },

  // --- 네버 다이 ---
  {
    slug: "tnd-hamburg",
    placeKo: "함부르크",
    placeEn: "Hamburg",
    city: "함부르크",
    country: "독일",
    filmSlug: "tomorrow-never-dies",
    sceneNote:
      "본드가 원격 BMW로 주차장과 옥상을 누비는 항구 도시입니다. 애틀랜틱 호텔 외관과 시내 차고가 미디어 재벌 편의 유럽 축입니다.",
    whyPopular:
      "브로스넌 시대의 독일 현장입니다. 호텔과 차고를 걸어, 원격 운전 시퀀스의 지상 부분을 가늠합니다.",
    mapsQuery: "Hotel Atlantic Hamburg",
    sources: cite("tomorrow-never-dies"),
  },
  {
    slug: "tnd-thailand-vietnam",
    placeKo: "푸켓 · 방콕 (베트남 대역)",
    placeEn: "Phuket and Bangkok as Vietnam",
    city: "푸켓",
    country: "태국",
    filmSlug: "tomorrow-never-dies",
    sceneNote:
      "사이공과 하롱 베이로 읽히는 해안·시내는 태국에서 찍었습니다. 스텔스 함의 정글 쪽 출입구가 이 대역입니다.",
    whyPopular:
      "황금총 섬과 가까운 해안이 다시 본드에 등장합니다. 베트남 여행과 촬영지를 혼동하지 않는 것이 이 항목의 요지입니다.",
    mapsQuery: "Phuket Thailand James Bond Island",
    sources: cite("tomorrow-never-dies", [
      wikiEn("Khao_Phing_Kan", "Khao Phing Kan"),
    ]),
  },
  {
    slug: "tnd-stealth-ship",
    placeKo: "스테이지 — 스텔스 함",
    placeEn: "Stealth ship set",
    city: "이버 히스",
    country: "영국",
    filmSlug: "tomorrow-never-dies",
    sceneNote:
      "카버의 투명 전함 실내는 파인우드 세트입니다. 태국 해안 외경과 영국 갑판이 한 척으로 붙습니다.",
    whyPopular:
      "화면의 함선을 항구에서 찾을 수는 없습니다. 팬은 푸켓 바다와 스튜디오를 나눕니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios 007 Stage",
    sources: cite("tomorrow-never-dies"),
  },
  {
    slug: "tnd-pyrenees",
    placeKo: "피레네 페르수르드 고개",
    placeEn: "Peyresourde, French Pyrenees",
    city: "오트피레네",
    country: "프랑스",
    filmSlug: "tomorrow-never-dies",
    sceneNote:
      "국경의 무기 시장으로 열리는 오프닝 산악입니다. 아프간·러시아 접경으로 읽히지만, 촬영은 프랑스 피레네입니다.",
    whyPopular:
      "함부르크만 기억하는 편이 놓치는 티저 현장입니다. 고개 도로는 실제 알프스보다 덜 알려져 있습니다.",
    mapsQuery: "Col de Peyresourde France",
    sources: cite("tomorrow-never-dies"),
  },

  // --- 언리미티드 ---
  {
    slug: "twine-mi6-vauxhall",
    placeKo: "MI6 건물 (복스홀 크로스)",
    placeEn: "SIS Building, Vauxhall Cross",
    city: "런던",
    country: "영국",
    filmSlug: "the-world-is-not-enough",
    sceneNote:
      "템스 강변의 실제 비밀정보부 건물이 폭격의 표적으로 나옵니다. Q의 보트 시연이 이 강에서 시작됩니다.",
    whyPopular:
      "시리즈가 실제 MI6 외관을 전면에 쓴 편입니다. 강변 보행로에서 건물을 볼 수 있으나, 출입은 불가합니다.",
    mapsQuery: "SIS Building Vauxhall Cross London",
    sources: cite("the-world-is-not-enough"),
  },
  {
    slug: "twine-millennium-dome",
    placeKo: "밀레니엄 돔 (O2)",
    placeEn: "Millennium Dome / The O2",
    city: "런던",
    country: "영국",
    filmSlug: "the-world-is-not-enough",
    sceneNote:
      "템스 추격의 도착점으로 나오는 그리니치의 돔입니다. 열기구와 강변 크레인이 이 지붕을 향합니다.",
    whyPopular:
      "1999년의 런던을 한 건축으로 찍은 현장입니다. 지금은 O2로 남아, 콘서트 관객과 팬이 같은 지붕을 봅니다.",
    mapsQuery: "The O2 Arena London",
    sources: cite("the-world-is-not-enough"),
  },
  {
    slug: "twine-guggenheim-bilbao",
    placeKo: "구겐하임 빌바오",
    placeEn: "Guggenheim Museum Bilbao",
    city: "빌바오",
    country: "스페인",
    filmSlug: "the-world-is-not-enough",
    sceneNote:
      "은행가 암살 직후 본드가 내리는 티타늄 미술관입니다. 바쿠로 가기 전의 짧은 유럽 기착지입니다.",
    whyPopular:
      "본드가 현대 건축을 전면으로 쓴 드문 컷입니다. 미술관 관람과 촬영지 확인이 같습니다.",
    mapsQuery: "Guggenheim Museum Bilbao",
    sources: cite("the-world-is-not-enough"),
  },
  {
    slug: "twine-maiden-tower",
    placeKo: "처녀의 탑",
    placeEn: "Maiden's Tower",
    city: "이스탄불",
    country: "터키",
    filmSlug: "the-world-is-not-enough",
    sceneNote:
      "보스포루스 한가운데의 탑이 핵 위기와 잠수의 무대로 나옵니다. 위기일발 이후 시리즈가 이스탄불로 돌아온 편입니다.",
    whyPopular:
      "하기아 소피아와 다른 이스탄불입니다. 배편으로 탑에 닿을 수 있어, 팬 순례가 구체적입니다.",
    mapsQuery: "Maiden's Tower Istanbul",
    sources: cite("the-world-is-not-enough"),
  },
  {
    slug: "twine-baku",
    placeKo: "바쿠 유전",
    placeEn: "Baku oil fields",
    city: "바쿠",
    country: "아제르바이잔",
    filmSlug: "the-world-is-not-enough",
    sceneNote:
      "일렉트라 킹의 파이프라인이 지나는 카스피해 유전입니다. 석유와 왕조가 본드 플롯의 동기가 되는 현장입니다.",
    whyPopular:
      "시리즈가 코카서스를 실사로 연 편입니다. 런던·이스탄불과 함께 이 편의 삼각형을 이룹니다.",
    mapsQuery: "Baku oil fields Azerbaijan",
    sources: cite("the-world-is-not-enough"),
  },

  // --- 어나더데이 ---
  {
    slug: "dad-ice-palace",
    placeKo: "아이스 팰리스 (파인우드 세트)",
    placeEn: "Ice palace set",
    city: "이버 히스",
    country: "영국",
    filmSlug: "die-another-day",
    sceneNote:
      "구스타브 그레이브스의 얼음 궁전은 스웨덴 아이스호텔이 아닙니다. 외경 일부는 아이슬란드 빙하 호수이고, 궁전 실내는 파인우드입니다.",
    whyPopular:
      "아이스호텔을 본드 현장으로 적는 안내가 있으나, 그곳은 촬영지가 아닙니다. 세트와 요쿨살론을 나눕니다.",
    isSet: true,
    mapsQuery: "Pinewood Studios Iver Heath",
    sources: cite("die-another-day"),
  },
  {
    slug: "dad-jokulsarlon",
    placeKo: "요쿨살론 빙하 호수",
    placeEn: "Jökulsárlón",
    city: "쇠다이크뢰쿠르 일대",
    country: "아이슬란드",
    filmSlug: "die-another-day",
    sceneNote:
      "인비저블 카의 빙판 추격 외경입니다. 궁전은 세트이고, 유빙과 검은 모래는 실제 아이슬란드입니다.",
    whyPopular:
      "브로스넌 마지막 편의 자연 스펙터클입니다. 뷰 투 어 킬 오프닝도 이 호수를 쓴 적이 있어, 두 편이 겹칩니다.",
    mapsQuery: "Jokulsarlon glacier lagoon",
    sources: cite("die-another-day"),
  },
  {
    slug: "dad-cadiz",
    placeKo: "카디스 (하바나 대역)",
    placeEn: "Cádiz as Havana",
    city: "카디스",
    country: "스페인",
    filmSlug: "die-another-day",
    sceneNote:
      "본드가 진스를 만나는 하바나 거리는 쿠바가 아니라 카디스입니다. 식민 시대 석조 도심이 카리브를 대신합니다.",
    whyPopular:
      "실제 하바나와 혼동하기 쉬운 대역입니다. 안달루시아 본드 지도의 항구 도시로 적습니다.",
    mapsQuery: "Cadiz old town Spain",
    sources: cite("die-another-day"),
  },
  {
    slug: "dad-hawaii",
    placeKo: "하와이 서핑 해안",
    placeEn: "Hawaii surf coast",
    city: "하와이",
    country: "미국",
    filmSlug: "die-another-day",
    sceneNote:
      "북한 해안으로 읽히는 서핑 오프닝은 하와이에서 찍었습니다. 호버크래프트 일부는 콘월 등 영국 해안입니다.",
    whyPopular:
      "티저의 파도는 실제 태평양입니다. 정치 지리를 촬영 지리와 나누어 보는 항목입니다.",
    mapsQuery: "Pipeline Beach Oahu Hawaii",
    sources: cite("die-another-day"),
  },

  // --- 카지노 로얄 ---
  {
    slug: "cr-ocean-club",
    placeKo: "파라다이스 아일랜드 오션 클럽 일대",
    placeEn: "Ocean Club, Paradise Island",
    city: "나소",
    country: "바하마",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "본드가 디미트리오스를 쫓아 머무는 리조트 해변입니다. 포커로 DB5를 얻고 솔랑주를 만나는 바하마의 중심입니다.",
    whyPopular:
      "썬더볼의 섬이 크레이그 리부트의 휴양이 됩니다. 호텔 항목의 오션 클럽과 같은 모래입니다.",
    mapsQuery: "Ocean Club Paradise Island Bahamas",
    sources: cite("casino-royale-2006"),
  },
  {
    slug: "cr-karlovy-vary",
    placeKo: "카를로비바리",
    placeEn: "Karlovy Vary",
    city: "카를로비바리",
    country: "체코",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "몬테네그로 리조트로 나오는 온천 도시입니다. 그랜드호텔 푸프가 호텔 스플렌디드 외경이고, 근처 라즈네 1세가 카지노 외경입니다.",
    whyPopular:
      "체코 영화 위원회가 본드 대역 도시로 소개하는 현장입니다. 콜로네이드와 호텔을 걸어 몬테네그로를 재구성합니다.",
    mapsQuery: "Grandhotel Pupp Karlovy Vary",
    sources: cite("casino-royale-2006", [
      {
        label: "Czech Film Commission — Karlovy Vary",
        href: "https://www.filmcommission.cz/en/featured-location-karlovy-vary/",
      },
    ]),
  },
  {
    slug: "cr-venice",
    placeKo: "베네치아 대운하",
    placeEn: "Venice Grand Canal",
    city: "베네치아",
    country: "이탈리아",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "본드와 베스퍼가 도착하는 결말의 운하입니다. 가라앉는 팔라초는 세트와 특수효과가 섞이고, 운하 외경은 실사입니다.",
    whyPopular:
      "위기일발·문레이커에 이은 세 번째 베네치아입니다. 리부트의 감정선이 같은 돌 위에 앉습니다.",
    mapsQuery: "Grand Canal Venice",
    sources: cite("casino-royale-2006"),
  },
  {
    slug: "cr-villa-balbianello",
    placeKo: "빌라 델 발비아넬로",
    placeEn: "Villa del Balbianello",
    city: "트레메치나",
    country: "이탈리아",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "본드가 회복기를 보내는 코모 호수의 별장입니다. 호텔이 아니라 정원 별장이고, 화면의 병원·정원이 이 테라스입니다.",
    whyPopular:
      "호수 보트 관광의 본드 정거장입니다. 스타워즈 프리퀄과 촬영지를 공유해, 안내가 두 작품을 나란히 적습니다.",
    mapsQuery: "Villa del Balbianello Lenno",
    sources: cite("casino-royale-2006", [
      wikiEn("Villa_del_Balbianello", "Villa del Balbianello"),
    ]),
  },
  {
    slug: "cr-bahamas-madagascar",
    placeKo: "나소 건설 현장 (마다가스카르 대역)",
    placeEn: "Nassau construction site as Madagascar",
    city: "나소",
    country: "바하마",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "몰라카와의 프리러닝 추격은 마다가스카르로 읽히지만, 촬영은 바하마의 미완 건물입니다. 오션 클럽과 같은 나라의 다른 얼굴입니다.",
    whyPopular:
      "리부트 액션의 첫 추격입니다. 현지 건물 상태는 변하므로, 팬은 기록 사진과 현재를 대조합니다.",
    mapsQuery: "Coral Harbour Nassau construction",
    sources: cite("casino-royale-2006"),
  },
  {
    slug: "cr-kaiserbad",
    placeKo: "라즈네 1세 (카지노 로얄 외경)",
    placeEn: "Lázně I / Emperor's Baths",
    city: "카를로비바리",
    country: "체코",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "몬테네그로 카지노 로얄의 외경으로 단장한 옛 황제 온천입니다. 푸프 호텔에서 몇 걸음입니다.",
    whyPopular:
      "호텔과 카지노를 한 온천 도시에 나란히 둘 수 있습니다. 체코 필름 커미션이 이 대역을 명시합니다.",
    mapsQuery: "Lazne I Karlovy Vary",
    sources: cite("casino-royale-2006", [
      {
        label: "Czech Film Commission — Karlovy Vary",
        href: "https://www.filmcommission.cz/en/featured-location-karlovy-vary/",
      },
    ]),
  },
  {
    slug: "cr-mill-colonnade",
    placeKo: "밀 콜로네이드 (몬테네그로 역 대역)",
    placeEn: "Mill Colonnade as Montenegro station",
    city: "카를로비바리",
    country: "체코",
    filmSlug: "casino-royale-2006",
    sceneNote:
      "본드와 베스퍼가 침대 열차로 도착한 몬테네그로 역으로 읽히는 온천 회랑입니다. 실제 철도역이 아니라 밀 콜로네이드이고, 리무진은 옆 라젠스카 거리에서 탑니다. 객실 대화는 세트입니다.",
    whyPopular:
      "리부트가 오리엔트 특급의 문법을 다시 쓰는 입구입니다. 카지노·푸프와 같은 온천 축에 있어, 팬이 한 번에 걷는 정거장입니다.",
    mapsQuery: "Mill Colonnade Karlovy Vary",
    sources: cite("casino-royale-2006", [
      {
        label: "Czech Film Commission — Karlovy Vary",
        href: "https://www.filmcommission.cz/en/featured-location-karlovy-vary/",
      },
    ]),
  },

  // --- 퀀텀 오브 솔러스 ---
  {
    slug: "qos-siena",
    placeKo: "시에나 캄포 광장",
    placeEn: "Piazza del Campo, Siena",
    city: "시에나",
    country: "이탈리아",
    filmSlug: "quantum-of-solace",
    sceneNote:
      "팔리오가 열리는 광장과 지붕 위로 본드가 미첼을 쫓습니다. 지하 수로의 일부는 세트이고, 광장과 기와는 실사입니다.",
    whyPopular:
      "크레이그 시대 이탈리아 추격의 원점입니다. 시 당국이 비아 두프레 등을 촬영 골목으로 안내합니다.",
    mapsQuery: "Piazza del Campo Siena",
    sources: cite("quantum-of-solace", [
      {
        label: "Visit Siena — Via Duprè 007 film set",
        href: "https://www.visitsiena.it/en/via-dupre/",
      },
    ]),
  },
  {
    slug: "qos-garda-carrara",
    placeKo: "가르다 호 · 카라라 채석장",
    placeEn: "Lake Garda and Carrara quarry",
    city: "가르다 호",
    country: "이탈리아",
    filmSlug: "quantum-of-solace",
    sceneNote:
      "오프닝에서 DBS가 알파로메오에 쫓기는 호숫가 터널과 대리석 채석장입니다. 시에나 지붕 추격의 도로 버전입니다.",
    whyPopular:
      "카 추격 팬이 시에나보다 먼저 찾는 구간입니다. 터널과 채석장은 영업·안전을 확인해 방문합니다.",
    mapsQuery: "Lake Garda Gardesana Occidentale",
    sources: cite("quantum-of-solace"),
  },
  {
    slug: "qos-bregenz",
    placeKo: "브레겐츠 호상 무대",
    placeEn: "Bregenz floating opera stage",
    city: "브레겐츠",
    country: "오스트리아",
    filmSlug: "quantum-of-solace",
    sceneNote:
      "그린이 토스카를 보는 콘스탄츠 호의 떠 있는 무대입니다. 거대한 눈이 퀀텀의 회합을 가립니다.",
    whyPopular:
      "여름 페스티벌이 실제 열리므로, 촬영지와 공연장이 같습니다. 빈 리젠라트와 다른 오스트리아 본드입니다.",
    mapsQuery: "Bregenz Seebuehne Lake Constance",
    sources: cite("quantum-of-solace"),
  },
  {
    slug: "qos-paranal",
    placeKo: "파라날 천문대 레지던시아",
    placeEn: "ESO Paranal Residencia",
    city: "안토파가스타 사막",
    country: "칠레",
    filmSlug: "quantum-of-solace",
    sceneNote:
      "볼리비아 에코 호텔 페를라 데 라스 두나스의 외경입니다. 유럽남천문대 직원 숙소이고, 폭발 실내는 파인우드입니다.",
    whyPopular:
      "아타카마의 망원경 기지가 본드 악당의 호텔이 됩니다. ESO가 촬영을 공식 기록으로 남겼습니다.",
    mapsQuery: "ESO Paranal Observatory Residencia Chile",
    sources: cite("quantum-of-solace", [
      {
        label: "ESO — Blockbuster starring ESO Paranal",
        href: "https://www.eso.org/public/news/eso0838/",
      },
    ]),
  },
  {
    slug: "qos-panama",
    placeKo: "파나마시티 (아이티 대역)",
    placeEn: "Panama City as Haiti",
    city: "파나마시티",
    country: "파나마",
    filmSlug: "quantum-of-solace",
    sceneNote:
      "카미유를 만나는 아이티 항구·호텔 거리는 파나마에서 찍었습니다. 콜론과 카브라 섬도 같은 대역에 들어갑니다.",
    whyPopular:
      "화면의 카리브와 촬영의 지협을 나누는 항목입니다. 칠레 사막과 함께 이 편의 아메리카 축입니다.",
    mapsQuery: "Casco Viejo Panama City",
    sources: cite("quantum-of-solace"),
  },

  // --- 스카이폴 ---
  {
    slug: "skyfall-istanbul",
    placeKo: "이스탄불 에미뇌뉘 · 그랜드 바자르",
    placeEn: "Istanbul, Eminönü and Grand Bazaar",
    city: "이스탄불",
    country: "터키",
    filmSlug: "skyfall",
    sceneNote:
      "본드가 패트리스를 오토바이와 지붕, 시장 골목으로 쫓는 오프닝입니다. 아다나 쪽 철교와 페티예의 해안이 터키 추격을 보탭니다.",
    whyPopular:
      "위기일발·언리미티드에 이은 이스탄불입니다. 에미뇌뉘 광장과 바자르는 도보로 겹쳐 보기 가장 쉽습니다.",
    mapsQuery: "Eminonu Square Istanbul Grand Bazaar",
    sources: cite("skyfall", [
      {
        label: "007.com — Skyfall filming notes",
        href: "https://www.007.com/the-films/skyfall/",
      },
    ]),
  },
  {
    slug: "skyfall-shanghai",
    placeKo: "상하이 푸둥 스카이라인",
    placeEn: "Shanghai Pudong skyline",
    city: "상하이",
    country: "중국",
    filmSlug: "skyfall",
    sceneNote:
      "본드가 패트리스를 따라가는 고층 도시입니다. 항공·택시 2유닛은 상하이고, 호텔 풀과 사무실 로비는 런던(카나리 워프·브로드게이트)이 대역입니다.",
    whyPopular:
      "화면의 네온을 상하이에서 확인하고, 실내는 런던에서 찾는 이중 지도입니다. 팬은 두 도시를 한 장면으로 읽지 않습니다.",
    mapsQuery: "Pudong Shanghai skyline",
    sources: cite("skyfall"),
  },
  {
    slug: "skyfall-macau",
    placeKo: "플로팅 드래곤 카지노",
    placeEn: "Golden Dragon casino, Macau (Pinewood)",
    city: "이버 히스",
    country: "영국",
    filmSlug: "skyfall",
    sceneNote:
      "세버린이 이끄는 마카오 수상 카지노는 파인우드 패독 탱크에 지은 세트입니다. 용머리와 등롱은 스튜디오이고, 마카오 시내는 거의 1유닛이 들어가지 않았습니다.",
    whyPopular:
      "실제 마카오 카지노에서 같은 다리를 찾을 수는 없습니다. 여행 안내는 분위기 대조로만 적는 것이 맞습니다.",
    isSet: true,
    mapsQuery: "Macau harbour casinos",
    sources: cite("skyfall"),
  },
  {
    slug: "skyfall-whitehall",
    placeKo: "화이트홀",
    placeEn: "Whitehall",
    city: "런던",
    country: "영국",
    filmSlug: "skyfall",
    sceneNote:
      "MI6 폭격 이후 본드가 정부 청사와 조사 위원회 주변을 도는 거리입니다. 결말의 지붕 전망은 화이트홀 55번지 일대에서 찍었습니다.",
    whyPopular:
      "국회의사당을 바라보는 본드의 런던입니다. 출입 제한 건물이 많아, 거리와 광장이 순례의 단위입니다.",
    mapsQuery: "Whitehall London Houses of Parliament",
    sources: cite("skyfall"),
  },
  {
    slug: "skyfall-tube",
    placeKo: "런던 지하철",
    placeEn: "London Underground",
    city: "런던",
    country: "영국",
    filmSlug: "skyfall",
    sceneNote:
      "실바가 열차에 실려 도심으로 들어오는 지하입니다. 채링크로스 미사용 승강장 등 실제 구간과 충돌 세트가 겹칩니다.",
    whyPopular:
      "화이트홀 위의 본드와 짝을 이루는 지하입니다. 영업 노선에서 같은 충돌을 재현할 수는 없고, 역의 공기만 대조합니다.",
    mapsQuery: "Charing Cross Underground Station London",
    sources: cite("skyfall"),
  },
  {
    slug: "skyfall-scotland",
    placeKo: "스카이폴 저택 (글렌코)",
    placeEn: "Skyfall estate, Glencoe",
    city: "글렌코",
    country: "스코틀랜드",
    filmSlug: "skyfall",
    sceneNote:
      "본드의 어린 집 스카이폴은 글렌코·글렌 에티브 풍경 위에 지어 불태운 세트입니다. 하이랜드의 산은 실재하고, 그 집은 남아 있지 않습니다.",
    whyPopular:
      "DB5가 안개 속으로 들어가는 도로를 보러 옵니다. 부어하일 에티브 모어 앞 A82가 팬 사진의 정점입니다.",
    isSet: true,
    mapsQuery: "Glencoe Buachaille Etive Mor A82",
    sources: cite("skyfall"),
  },
  {
    slug: "skyfall-hashima",
    placeKo: "하시마 (군함도)",
    placeEn: "Hashima Island",
    city: "나가사키",
    country: "일본",
    filmSlug: "skyfall",
    sceneNote:
      "실바의 버려진 섬은 하시마의 실루엣에서 왔습니다. 장거리 컷에 실제 섬이 쓰였고, 상륙·실내는 파인우드 세트입니다. 1유닛은 섬에 상륙하지 않았습니다.",
    whyPopular:
      "나가사키에서 유네스코 유적으로 배 관광이 열립니다. 영화의 마카오 앞바다가 아니라, 일본 탄광섬이 시각적 대역입니다.",
    mapsQuery: "Hashima Island Nagasaki",
    sources: cite("skyfall", [wikiEn("Hashima_Island", "Hashima Island")]),
  },
  {
    slug: "skyfall-national-gallery",
    placeKo: "내셔널 갤러리",
    placeEn: "The National Gallery",
    city: "런던",
    country: "영국",
    filmSlug: "skyfall",
    sceneNote:
      "본드가 Q를 처음 만나는 전시실입니다. 터너의 《파이팅 테메레르》 앞에서 두 사람이 짧게 말을 나눕니다.",
    whyPopular:
      "예약 없이 그림 앞까지 갈 수 있는 드문 본드 실내입니다. 화이트홀·지하철과 같은 날의 도보 코스가 됩니다.",
    mapsQuery: "National Gallery Trafalgar Square London",
    sources: cite("skyfall"),
  },

  // --- 스펙터 ---
  {
    slug: "spectre-mexico-city",
    placeKo: "멕시코시티 소칼로",
    placeEn: "Zócalo, Mexico City",
    city: "멕시코시티",
    country: "멕시코",
    filmSlug: "spectre",
    sceneNote:
      "망자의 날 행렬을 따라 본드가 암살자를 쫓고, 헬기가 광장 위로 구르는 오프닝입니다. 당시 실제 퍼레이드는 없었고, 제작진이 연출했습니다.",
    whyPopular:
      "영화 다음 해 시 당국이 실제 대규모 퍼레이드를 열었습니다. 그란 호텔과 대성당, 소칼로가 한 동선입니다.",
    mapsQuery: "Zocalo Mexico City",
    sources: cite("spectre", [
      {
        label: "007.com — On Location With Spectre",
        href: "https://www.007.com/on-location-with-spectre/",
      },
    ]),
  },
  {
    slug: "spectre-rome",
    placeKo: "로마 테베레 · 구시가",
    placeEn: "Rome, Tiber and historic centre",
    city: "로마",
    country: "이탈리아",
    filmSlug: "spectre",
    sceneNote:
      "본드가 스펙터 회합 뒤 로마 밤길을 질주하는 추격입니다. 장례는 현지 교회에서, 회의 탁자는 세트에 가깝습니다.",
    whyPopular:
      "시에나·마테라와 다른 로마의 본드입니다. 바티칸 성벽과 강변이 팬 드라이브의 골격입니다.",
    mapsQuery: "Tiber River Rome historic centre",
    sources: cite("spectre"),
  },
  {
    slug: "spectre-solden",
    placeKo: "죌덴 아이스 Q",
    placeEn: "Ice Q, Sölden",
    city: "죌덴",
    country: "오스트리아",
    filmSlug: "spectre",
    sceneNote:
      "마들렌의 호플러 클리닉으로 나오는 봉우리 유리 레스토랑입니다. 007.com이 이 건물을 오스트리아 촬영의 축이라고 적습니다.",
    whyPopular:
      "피츠 글로리아 이후 알프스 정상 레스토랑이 다시 본드 클리닉이 됩니다. 케이블카와 007 엘리먼츠 전시가 붙습니다.",
    mapsQuery: "Ice Q Solden",
    sources: cite("spectre", [
      {
        label: "007.com — On Location With Spectre",
        href: "https://www.007.com/on-location-with-spectre/",
      },
    ]),
  },
  {
    slug: "spectre-altaussee",
    placeKo: "알타우세 호",
    placeEn: "Lake Altaussee",
    city: "알타우세",
    country: "오스트리아",
    filmSlug: "spectre",
    sceneNote:
      "미스터 화이트가 숨는 호숫가 별장 일대입니다. 죌덴 클리닉에서 내려온 본드가 약속을 받는 호수입니다.",
    whyPopular:
      "아이스 Q만 보고 빠지면 플롯의 호수가 빠집니다. 잘츠캄머구트의 본드 지도로 남습니다.",
    mapsQuery: "Lake Altaussee Austria",
    sources: cite("spectre"),
  },
  {
    slug: "spectre-morocco",
    placeKo: "에르푸드 사막 운석 기지",
    placeEn: "Erfoud desert crater lair",
    city: "에르푸드",
    country: "모로코",
    filmSlug: "spectre",
    sceneNote:
      "본드와 마들렌이 열차 끝에 도착하는 스펙터의 사막 관측 기지입니다. 탕헤르에서 기차를 타고 온 허구의 종점이 실제 사하라 가장자리입니다.",
    whyPopular:
      "달튼의 탕헤르 이후 모로코가 다시 본드 악당의 땅이 됩니다. 기지는 철거되었고, 사막과 기차가 순례의 단위입니다.",
    isSet: true,
    mapsQuery: "Erfoud Morocco Sahara",
    sources: cite("spectre"),
  },
  {
    slug: "spectre-london",
    placeKo: "런던 웨스트민스터 · 템스",
    placeEn: "Westminster and the Thames",
    city: "런던",
    country: "영국",
    filmSlug: "spectre",
    sceneNote:
      "공동 정보망과 폐허의 MI6가 맞서는 결말의 런던입니다. 멕시코·로마·알프스 다음의 본부 거리입니다.",
    whyPopular:
      "스카이폴의 화이트홀을 이 편이 이어 씁니다. 강변과 의회가 크레이그 후반의 반복 배경입니다.",
    mapsQuery: "Westminster London Thames",
    sources: cite("spectre"),
  },

  // --- 노 타임 투 다이 ---
  {
    slug: "nttd-matera",
    placeKo: "마테라",
    placeEn: "Matera",
    city: "마테라",
    country: "이탈리아",
    filmSlug: "no-time-to-die",
    sceneNote:
      "본드와 마들렌이 과거의 그림자를 만나는 석굴 도시입니다. 그라비나 인 풀리아의 다리 점프가 같은 추격에 붙습니다.",
    whyPopular:
      "크레이그 마지막 편의 가장 식별 쉬운 실사 도시입니다. 2019 유럽 문화수도 이후의 관광과 촬영지가 겹칩니다.",
    mapsQuery: "Matera Sassi Italy",
    sources: cite("no-time-to-die", [
      {
        label: "British GQ — Every location in No Time To Die",
        href: "https://www.gq-magazine.co.uk/culture/article/no-time-to-die-locations-james-bond",
      },
    ]),
  },
  {
    slug: "nttd-san-san",
    placeKo: "산산 베이 코코 워크",
    placeEn: "Coco Walk, San San Bay",
    city: "포트 안토니오",
    country: "자메이카",
    filmSlug: "no-time-to-die",
    sceneNote:
      "은퇴한 본드의 해변 집은 골든아이 리조트가 아니라, 포트 안토니오 근처 만의 임시 세트입니다. 촬영 뒤 철거되었고, 만의 지형은 남습니다.",
    whyPopular:
      "007.com이 플레밍의 골든아이에서 몇 마일 떨어진 만이라고 적습니다. 사유지라 배편 조망이 현실적인 순례입니다.",
    isSet: true,
    mapsQuery: "San San Bay Port Antonio Jamaica",
    sources: cite("no-time-to-die", [
      {
        label: "007.com — Bringing Bond’s Jamaican Retreat to Life",
        href: "https://www.007.com/bonds-jamaican-retreat/",
      },
      {
        label: "Condé Nast Traveler — Where Was No Time to Die Filmed?",
        href: "https://www.cntraveler.com/story/on-location-no-time-to-die",
      },
    ]),
  },
  {
    slug: "nttd-goldeneye-estate",
    placeKo: "골든아이 단지 (오라카베사)",
    placeEn: "GoldenEye estate, Oracabessa",
    city: "오라카베사",
    country: "자메이카",
    filmSlug: "no-time-to-die",
    sceneNote:
      "플레밍이 본드 소설을 쓴 집입니다. 은퇴 가옥의 촬영지는 아니고, 제작진이 몇 마일 밖의 만을 고른 기준점이자 작품 발표 행사 장소입니다.",
    whyPopular:
      "닥터 노의 섬과 마지막 편의 은퇴가 한 작가의 집에서 만납니다. 리조트로 열려, 문학 순례와 호텔이 겹칩니다.",
    mapsQuery: "GoldenEye Hotel Oracabessa Jamaica",
    sources: cite("no-time-to-die", [
      {
        label: "007.com — Bringing Bond’s Jamaican Retreat to Life",
        href: "https://www.007.com/bonds-jamaican-retreat/",
      },
      wikiEn("Goldeneye_(estate)", "Goldeneye (estate)"),
    ]),
  },
  {
    slug: "nttd-kalsoy",
    placeKo: "칼소이 칼루르 등대",
    placeEn: "Kalsoy, Kallur lighthouse",
    city: "칼소이",
    country: "페로 제도",
    filmSlug: "no-time-to-die",
    sceneNote:
      "사핀의 섬 외경으로 쓰인 북대서양의 등대 능선입니다. 미사일 사일로와 정원은 합성·세트이고, 절벽은 실재합니다.",
    whyPopular:
      "하시마와 같이, 실재 섬이 악당의 끝을 대신합니다. 도보 능선은 날씨와 안내를 보고 오릅니다.",
    mapsQuery: "Kallur lighthouse Kalsoy Faroe Islands",
    sources: cite("no-time-to-die", [
      {
        label: "British GQ — Every location in No Time To Die",
        href: "https://www.gq-magazine.co.uk/culture/article/no-time-to-die-locations-james-bond",
      },
    ]),
  },
  {
    slug: "nttd-london",
    placeKo: "런던 화이트홀 · 밀뱅크",
    placeEn: "London Whitehall and Millbank",
    city: "런던",
    country: "영국",
    filmSlug: "no-time-to-die",
    sceneNote:
      "본부가 다시 호출하는 런던입니다. 스카이폴·스펙터와 같은 강변 축이 마지막 편의 공무 공간이 됩니다.",
    whyPopular:
      "마테라·자메이카로 떠나기 전의 영국입니다. 크레이그 오 편의 런던을 한 강으로 잇습니다.",
    mapsQuery: "Whitehall Millbank London",
    sources: cite("no-time-to-die"),
  },
  {
    slug: "nttd-norway",
    placeKo: "노르웨이 피오르드 별장",
    placeEn: "Norwegian fjord cabin",
    city: "베스트란 피오르드 일대",
    country: "노르웨이",
    filmSlug: "no-time-to-die",
    sceneNote:
      "마들렌의 어린 집이 있는 북쪽의 물가입니다. 대서양 도로 등 노르웨이 해안이 회상의 지리를 맡습니다.",
    whyPopular:
      "이탈리아·자메이카만 기억하는 편이 놓치는 축입니다. 별장 자체는 사적·세트에 가깝고, 해안 도로가 열린 순례입니다.",
    mapsQuery: "Atlantic Ocean Road Norway",
    sources: cite("no-time-to-die", [
      {
        label: "Condé Nast Traveler — Where Was No Time to Die Filmed?",
        href: "https://www.cntraveler.com/story/on-location-no-time-to-die",
      },
    ]),
  },
];

export function landmarksForFilm(filmSlug: string): Landmark[] {
  return landmarks.filter((item) => item.filmSlug === filmSlug);
}

export function landmarksByCountry(): { country: string; items: Landmark[] }[] {
  const groups = new Map<string, Landmark[]>();
  for (const item of landmarks) {
    const existing = groups.get(item.country);
    if (existing) {
      existing.push(item);
    } else {
      groups.set(item.country, [item]);
    }
  }
  return [...groups.entries()]
    .map(([country, items]) => ({ country, items }))
    .sort((a, b) => a.country.localeCompare(b.country, "ko"));
}
