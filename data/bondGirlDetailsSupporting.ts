import type { BondGirlDetail } from "./bondGirlDetails";

const wiki = (path: string, label: string) => ({
  label,
  href: `https://en.wikipedia.org/wiki/${path}`,
});
const o07 = (path: string, label: string) => ({
  label,
  href: `https://www.007.com/${path}`,
});

export const supportingBondGirlDetails: Record<string, BondGirlDetail> = {
  "miss-moneypenny": {
    slug: "miss-moneypenny",
    overview: [
      "미스 머니페니는 M의 비서로, 현장 본드걸이 아니라 본부의 반복 배역입니다. 닥터 노부터 로이스 맥스웰이 자리를 잡고, 이후 캐럴라인 블리스, 서맨사 본드, 나오미 해리스로 이어집니다. 크레이그 시기에는 이브 머니페니로 현장에 나가기도 합니다.",
      "반복 출연입니다. 농담과 시선, 출입증과 타자기—본부가 요원을 보내는 온도가 이 배역에 모여 있습니다.",
    ],
    actressNotes: [
      "로이스 맥스웰은 캐나다 배우로, 코너리·레이즌비·무어 시기를 관통합니다. 달튼 시기 캐럴라인 블리스, 브로스넌 시기 서맨사 본드, 크레이그 시기 나오미 해리스는 영국 배우입니다. 국적 표기는 첫 얼굴과 후대를 함께 적어 캐나다 · 영국입니다.",
    ],
    onScreen: [
      "초기는 복도 농담과 서류입니다. 스카이폴에서는 이스탄불 열차 위의 오인이 배역을 현장으로 끌어올리고, 이후 본부의 이브로 정착합니다. 한 배우의 연속이 아니라, 직함의 연속입니다.",
    ],
    culturalAfterimage: [
      "본드걸이라는 말과 자주 혼용되지만, 플롯의 키는 보통 다른 인물이 쥡니다. 반복 자체가 팬 기억의 축입니다.",
    ],
    continuity: [
      "이름은 유지되고 얼굴은 교체됩니다. 크레이그 연속성 안에서만 이브가 같은 사람으로 이어집니다. 맥스웰에서 해리스로 이어지는 선을 한 인물로 읽지는 않습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "공식 시리즈에서 머니페니 역은 여러 배우가 맡았습니다. 007.com과 크레딧이 이름을 나눕니다.",
      },
    ],
    related: [
      { href: "/films/dr-no", label: "닥터 노" },
      { href: "/films/skyfall", label: "스카이폴" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/dr-no/", "007.com — Dr. No"),
      wiki("Miss_Moneypenny", "Wikipedia — Miss Moneypenny"),
      wiki("Lois_Maxwell", "Wikipedia — Lois Maxwell"),
    ],
    footnotes: [
      { n: 1, text: "반복 출연. 허브 열두 칸의 본드걸과 역할을 갈라 둡니다." },
      { n: 2, text: "배우 교체는 공식 크레딧 기준입니다." },
      { n: 3, text: "스카이폴의 현장 배역은 같은 이름, 다른 시기입니다." },
      { n: 4, text: "연속성은 크레이그 다섯 편 안에서만 인물로 잇습니다." },
      { n: 5, text: "국적은 배우 기준입니다. 맥스웰은 캐나다, 이후 공식 머니페니는 영국입니다." },
    ],
  },
  "sylvia-trench": {
    slug: "sylvia-trench",
    overview: [
      "실비아 트렌치는 닥터 노 클럽 장면에서 본드가 「본드. 제임스 본드」를 대는 상대입니다. 위기일발 초반에도 다시 등장하지만, 두 편 이후로는 화면에서 사라집니다.",
      "시리즈가 사생활을 본부에 두기 전의 짧은 연인입니다. 허니 라이더와 자리가 겹치지 않습니다.",
    ],
    actressNotes: [
      "유니스 게이슨은 공식 시리즈 첫 두 편에 같은 배역으로 출연합니다. 초기의 ‘본드걸’ 후보로 거론되기도 했으나, 조연입니다.",
    ],
    onScreen: [
      "카드 테이블과 런던 아파트의 짧은 컷입니다. 현장의 잠입과는 거리가 있습니다.",
    ],
    culturalAfterimage: [
      "이름 소개의 상대라는 점이 팬 기억에 남습니다. 배역의 길이보다 문장의 길이입니다.",
    ],
    continuity: [
      "위기일발 이후 같은 인물은 이어지지 않습니다. 머니페니가 본부의 여성 반복을 대신합니다.",
    ],
    gossip: [
      {
        label: "제작진 인터뷰",
        text: "초기에 연속 출연하는 연인으로 두었다가, 한 편 한 편의 본드걸로 무게가 옮겨 갔다는 제작 후일담이 있습니다.",
      },
    ],
    related: [
      { href: "/films/dr-no", label: "닥터 노" },
      { href: "/bond-girls/honey-ryder", label: "허니 라이더" },
    ],
    sources: [
      o07("the-films/dr-no/", "007.com — Dr. No"),
      wiki("Sylvia_Trench", "Wikipedia — Sylvia Trench"),
    ],
    footnotes: [
      { n: 1, text: "이름 소개 장면의 상대입니다." },
      { n: 2, text: "출연은 공식 시리즈 1·2편입니다." },
      { n: 3, text: "조연입니다." },
      { n: 4, text: "연속성은 두 편에서 끊깁니다." },
    ],
  },
  "jill-masterson": {
    slug: "jill-masterson",
    overview: [
      "질 마스터슨은 골드핑거 마이애미에서 본드와 잠시 동행합니다. 골드핑거의 속임수를 돕다 배신으로 읽히고, 금가루로 덮인 이미지가 시리즈 바깥까지 퍼집니다.",
      "언니 틸리 매스터슨이 복수를 이어 가지만, 질의 화면 시간은 짧습니다. 조연입니다.",
    ],
    actressNotes: [
      "셜리 이튼의 금색 분장은 홍보 사진의 원본이 됩니다. 배우와 배역이 한 스틸에 붙는 속도가 허니 라이더 다음으로 빠릅니다.",
    ],
    onScreen: [
      "호텔 방의 짧은 유머 뒤에, 본드가 되돌아와 금색의 몸을 발견합니다. 결말의 과학 설명은 가십과 화면을 나눕니다.",
    ],
    culturalAfterimage: [
      "금색 여인은 패러디와 광고가 끝없이 호출합니다. 인물의 이름보다 색이 먼저입니다.",
    ],
    continuity: [
      "같은 인물은 후속편에 없습니다. 퀀텀 오브 솔러스의 스트로베리 필즈가 검은 오일로 이 컷을 호출합니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "금색 분장은 실제 분장으로 촬영되었습니다. 질식 여부는 영화 속 설정이며, 제작 안전 후일담은 가십 칸에서 층을 나눕니다.",
      },
      {
        label: "팬 설",
        text: "피부의 호흡을 막는다는 설명이 과학적으로 단순한가 하는 논쟁은 오래되었습니다. 단정하지 않습니다.",
      },
    ],
    related: [
      { href: "/films/goldfinger", label: "골드핑거" },
      { href: "/bond-girls/pussy-galore", label: "푸시 갤로어" },
      { href: "/bond-girls/strawberry-fields", label: "스트로베리 필즈" },
    ],
    sources: [
      o07("goldfinger/", "007.com — Goldfinger"),
      wiki("Jill_Masterson", "Wikipedia — Jill Masterson"),
    ],
    footnotes: [
      { n: 1, text: "마이애미 구간의 조연입니다." },
      { n: 2, text: "분장 스틸이 배역을 앞섭니다." },
      { n: 3, text: "스포일러는 화면 칸에 있습니다." },
      { n: 4, text: "오마주는 퀀텀에서 한 번 더 호출됩니다." },
    ],
  },
  "fiona-volpe": {
    slug: "fiona-volpe",
    overview: [
      "피오나 볼페는 썬더볼 작전의 스펙터 암살자입니다. 나소에서 본드를 유혹하지만, 목적은 제거입니다. 도미노와 자리를 나눕니다.",
      "악역 카리스마가 본드걸 카드보다 먼저입니다. 조연입니다.",
    ],
    actressNotes: [
      "루치아나 팔루치는 이탈리아 배우로, 코너리 시기 악역 여성의 한 얼굴입니다.",
    ],
    onScreen: [
      "나이트클럽의 춤과 총격, 본드를 태운 차. 최후의 총은 스펙터가 아군을 정리하는 방식과 겹칩니다.",
    ],
    culturalAfterimage: [
      "유혹이 곧 암살인 구도는 이후 크세니아 오나톱 등으로 이어집니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 도미노가 같은 편의 본드걸 자리를 가져갑니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧과 007.com이 팔루치를 피오나 볼페로 적습니다.",
      },
    ],
    related: [
      { href: "/films/thunderball", label: "썬더볼 작전" },
      { href: "/bond-girls/domino", label: "도미노" },
    ],
    sources: [
      o07("the-films/thunderball/", "007.com — Thunderball"),
      wiki("Fiona_Volpe", "Wikipedia — Fiona Volpe"),
    ],
    footnotes: [
      { n: 1, text: "스펙터 암살자입니다." },
      { n: 2, text: "조연 분류입니다." },
      { n: 3, text: "결말은 영화 상세에 있습니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "kissy-suzuki": {
    slug: "kissy-suzuki",
    overview: [
      "키시 스즈키는 《두 번 산다》에서 아마쿠사 쪽 아마로 등장합니다. 본드의 위장 결혼과 화산 기지 잠입의 동행입니다.",
      "원작 소설의 키시와 이름이 이어지지만, 영화의 일본 표상은 재평가의 대상입니다. 본드걸로 분류하되, 허브 열두 칸에는 뒤늦게 올립니다.",
    ],
    actressNotes: [
      "미에 하마는 일본 배우입니다. 아키코 와카바야시(아키)와 한 편에 두 칸이 오릅니다.",
    ],
    onScreen: [
      "어촌과 암벽, 화산 기지의 잠입. 위장 부부의 연출이 유머와 잠입을 겹칩니다.",
    ],
    culturalAfterimage: [
      "분장과 일본 표상은 이슈 「본드걸을 다시 읽기」와 맞닿습니다. 이 칸은 설교로 닫지 않습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 공식 시리즈에 같은 인물은 돌아오지 않습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Mie Hama를 Kissy Suzuki로 적습니다.",
      },
    ],
    related: [
      { href: "/films/you-only-live-twice", label: "두 번 산다" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/you-only-live-twice/", "007.com — You Only Live Twice"),
      wiki("Kissy_Suzuki", "Wikipedia — Kissy Suzuki"),
    ],
    footnotes: [
      { n: 1, text: "아마쿠사 구간의 본드걸입니다." },
      { n: 2, text: "배우 표기는 크레딧을 따릅니다." },
      { n: 3, text: "표상 논점은 이슈 에세이에 잇습니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "tiffany-case": {
    slug: "tiffany-case",
    overview: [
      "티파니 케이스는 《다이아몬드는 영원히》의 본드걸입니다. 네덜란드에서 라스베이거스로 이어지는 보석 파이프라인의 중간입니다.",
      "코너리가 한 편 만에 복귀한 작품의 상대입니다. 플렌티 오툴과 한 편을 나눕니다.",
    ],
    actressNotes: [
      "질 세인트 존은 붉은 머리와 라스베이거스 톤으로 기억됩니다. 1971년의 본드걸입니다.",
    ],
    onScreen: [
      "암스테르담의 접선, 크레이머의 시체, 카지노와 오일 굴착 장치. 왜스커의 세계를 통과하는 동행입니다.",
    ],
    culturalAfterimage: [
      "이름 자체가 보석 브랜드를 연상시킵니다. 플레밍 소설의 티파니를 영화가 이어 받습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 레이즌비 다음의 코너리 복귀와만 맞닿습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Jill St. John을 Tiffany Case로 적습니다.",
      },
    ],
    related: [
      { href: "/films/diamonds-are-forever", label: "다이아몬드는 영원히" },
      { href: "/bond-girls/plenty-otoole", label: "플렌티 오툴" },
    ],
    sources: [
      o07("the-films/diamonds-are-forever/", "007.com — Diamonds Are Forever"),
      wiki("Tiffany_Case", "Wikipedia — Tiffany Case"),
    ],
    footnotes: [
      { n: 1, text: "보석 파이프라인의 본드걸입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "같은 편의 조연과 자리를 나눕니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "plenty-otoole": {
    slug: "plenty-otoole",
    overview: [
      "플렌티 오툴은 라스베이거스 카지노에서 본드와 짧게 만납니다. 이름 개그 직후 창밖으로 던져지는 컷이 배역을 삼킵니다.",
      "조연입니다. 티파니 케이스가 본드걸 자리를 가져갑니다.",
    ],
    actressNotes: [
      "라나 우드는 나탈리 우드의 여동생입니다. 짧은 출연이 팬 사이 인용은 깁니다.",
    ],
    onScreen: [
      "카지노, 호텔 방, 창밖. 수행원들의 폭력이 개그 톤과 겹칩니다. 현대 재시청의 논점입니다.",
    ],
    culturalAfterimage: [
      "이름과 투척 컷이 클립으로 순환합니다. 인물의 동기는 거의 남지 않습니다.",
    ],
    continuity: [
      "한 편, 한 장면입니다. 이후 호출은 패러디뿐입니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Lana Wood를 Plenty O’Toole로 적습니다.",
      },
    ],
    related: [
      { href: "/films/diamonds-are-forever", label: "다이아몬드는 영원히" },
      { href: "/bond-girls/tiffany-case", label: "티파니 케이스" },
    ],
    sources: [
      o07("the-films/diamonds-are-forever/", "007.com — Diamonds Are Forever"),
      wiki("Plenty_O%27Toole", "Wikipedia — Plenty O'Toole"),
    ],
    footnotes: [
      { n: 1, text: "짧은 조연입니다." },
      { n: 2, text: "배우 관계는 공개된 가족 정보입니다." },
      { n: 3, text: "폭력 연출은 재평가 대상입니다." },
      { n: 4, text: "연속성 없음." },
    ],
  },
  solitaire: {
    slug: "solitaire",
    overview: [
      "솔리테어는 《죽느냐 사느냐》에서 카낭가의 점술사로 등장합니다. 처녀성과 타로가 초능력의 조건으로 설정되고, 그 설정이 깨지면서 악당의 확신이 흔들립니다.",
      "본드걸입니다. 인종·주술 프레이밍은 이슈 에세이에서 다시 읽습니다.",
    ],
    actressNotes: [
      "제인 시모어의 초기 국제 출연입니다. 이후 다른 장르의 얼굴이 되지만, 이 칸은 1973년 배역만 적습니다.",
    ],
    onScreen: [
      "할렘과 카리브, 타로, 악어 농장과 양귀비 밭. 본드가 예언을 깨는 연출이 플롯의 기계입니다.",
    ],
    culturalAfterimage: [
      "점술과 신체의 설정을 현대 시청자가 그대로 받기 어렵습니다. 설정을 숨기지 않고, 찬양하지 않습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 무어 첫 편의 본드걸입니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Jane Seymour를 Solitaire로 적습니다.",
      },
    ],
    related: [
      { href: "/films/live-and-let-die", label: "죽느냐 사느냐" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/live-and-let-die/", "007.com — Live and Let Die"),
      wiki("Solitaire_(James_Bond)", "Wikipedia — Solitaire (James Bond)"),
    ],
    footnotes: [
      { n: 1, text: "무어 첫 편의 본드걸입니다." },
      { n: 2, text: "배우의 이후 경력은 펼치지 않습니다." },
      { n: 3, text: "주술 설정은 재평가 대상입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "mary-goodnight": {
    slug: "mary-goodnight",
    overview: [
      "메리 굿나잇은 《황금총을 가진 사나이》의 본드걸입니다. MI6 동료로 정보를 쥐지만, 화면은 자주 개그와 속박 연출로 회수합니다.",
      "소설의 굿나잇을 영화가 한 편에 몰아 넣습니다. 현대 재시청의 논점이 분명한 배역입니다.",
    ],
    actressNotes: [
      "브리트 에클란드는 스웨덴 배우입니다. 1974년 본드걸 홍보의 얼굴이었습니다.",
    ],
    onScreen: [
      "홍콩 호텔, 방콕, 스카라망가의 섬. 트렁크와 레이저 장면이 배역의 주체성을 흔듭니다.",
    ],
    culturalAfterimage: [
      "이슈 「본드걸을 다시 읽기」의 무어 항목과 맞닿습니다. 정보는 쥐고, 연출은 빼앗습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 소설처럼 여러 편을 잇지 않습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Britt Ekland를 Mary Goodnight로 적습니다.",
      },
    ],
    related: [
      { href: "/films/the-man-with-the-golden-gun", label: "황금총을 가진 사나이" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/the-man-with-the-golden-gun/", "007.com — The Man with the Golden Gun"),
      wiki("Mary_Goodnight", "Wikipedia — Mary Goodnight"),
    ],
    footnotes: [
      { n: 1, text: "동료 요원 설정입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "연출 논점은 이슈로 잇습니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "holly-goodhead": {
    slug: "holly-goodhead",
    overview: [
      "홀리 굿헤드는 《문레이커》의 본드걸입니다. NASA 과학자이자 CIA로, 드로크의 우주 계획을 본드와 함께 막습니다.",
      "이름 개그가 먼저 화제가 되지만, 플롯에서는 우주 정거장의 동등한 손에 가깝습니다.",
    ],
    actressNotes: [
      "로이스 차일스는 미국 배우입니다. 1979년 SF 톤의 본드걸입니다.",
    ],
    onScreen: [
      "캘리포니아 실험실, 베니스, 리우, 우주. 글라이더와 레이저가 한 몸에 겹칩니다.",
    ],
    culturalAfterimage: [
      "이름과 우주 결전이 1979년의 과잉을 나눠 집니다. 실제 궤도물이 아니라 세트와 미니어처입니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 문레이커의 우주 일탈과 같이 닫힙니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Lois Chiles를 Holly Goodhead로 적습니다.",
      },
    ],
    related: [
      { href: "/films/moonraker", label: "문레이커" },
      { href: "/bond-girls/anya-amasova", label: "아냐 아마소바" },
    ],
    sources: [
      o07("the-films/moonraker/", "007.com — Moonraker"),
      wiki("Holly_Goodhead", "Wikipedia — Holly Goodhead"),
    ],
    footnotes: [
      { n: 1, text: "CIA·NASA 설정입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "이름 개그는 홍보의 층입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "melina-havelock": {
    slug: "melina-havelock",
    overview: [
      "멜리나 해블록은 《유어 아이즈 온리》에서 살해당한 해양학자의 딸입니다. 석궁으로 복수를 앞에 두고, 본드의 임무와 겹칩니다.",
      "무어 후반의 본드걸로, 코미디보다 복수가 앞서는 편입니다.",
    ],
    actressNotes: [
      "캐롤 부케는 프랑스 배우입니다. 지중해의 얼굴로 홍보되었습니다.",
    ],
    onScreen: [
      "마드리드, 코르푸, 알바니아 해안. 잠수와 암벽, 석궁이 플롯의 도구입니다.",
    ],
    culturalAfterimage: [
      "주제곡과 크로스보우 이미지가 배역을 고정합니다. 비비 달 연출과 한 편에 공존하는 온도 차이는 이슈로 잇습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Carole Bouquet를 Melina Havelock로 적습니다.",
      },
    ],
    related: [
      { href: "/films/for-your-eyes-only", label: "유어 아이즈 온리" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/for-your-eyes-only/", "007.com — For Your Eyes Only"),
      wiki("Melina_Havelock", "Wikipedia — Melina Havelock"),
    ],
    footnotes: [
      { n: 1, text: "복수의 본드걸입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "같은 편의 다른 연출과 온도가 갈립니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "may-day": {
    slug: "may-day",
    overview: [
      "메이 데이는 《뷰 투 어 킬》에서 막스 조린의 오른팔입니다. 에펠탑과 샌프란시스코 광산에서 몸이 플롯을 밉니다.",
      "악역 쪽입니다. 조연입니다. 스테이시 서튼이 본드걸 자리를 가져갑니다.",
    ],
    actressNotes: [
      "그레이스 존스는 가수·모델·배우로, 1985년 본드 악역의 얼굴이었습니다.",
    ],
    onScreen: [
      "파리의 추격, 비행선, 광산의 배신과 희생. 전향의 순간이 배역의 두께입니다.",
    ],
    culturalAfterimage: [
      "뮤직비디오적 카리스마가 본드 악역에 들어온 사례로 자주 인용됩니다.",
    ],
    continuity: [
      "한 편에서 끝납니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Grace Jones를 May Day로 적습니다.",
      },
    ],
    related: [
      { href: "/films/a-view-to-a-kill", label: "뷰 투 어 킬" },
      { href: "/bond-girls/stacey-sutton", label: "스테이시 서튼" },
    ],
    sources: [
      o07("the-films/a-view-to-a-kill/", "007.com — A View to a Kill"),
      wiki("May_Day_(James_Bond)", "Wikipedia — May Day (James Bond)"),
    ],
    footnotes: [
      { n: 1, text: "조린의 실행자입니다." },
      { n: 2, text: "배우의 가수 경력은 공개 정보입니다." },
      { n: 3, text: "전향은 스포일러입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "stacey-sutton": {
    slug: "stacey-sutton",
    overview: [
      "스테이시 서튼은 조린이 삼키려는 유정 회사의 상속자입니다. 시청 공무원 출신으로, 샌프란시스코 결전에서 본드와 동행합니다.",
      "무어 마지막 편의 본드걸입니다.",
    ],
    actressNotes: [
      "태냐 로버츠는 1980년대 장르 영화의 얼굴이었습니다. 이 칸은 1985년 배역만 적습니다.",
    ],
    onScreen: [
      "시청, 엘리베이터, 광산과 금문. 시청 폭파 시퀀스의 동행입니다.",
    ],
    culturalAfterimage: [
      "메이 데이의 카리스마 옆에 두면 배역이 얇아 보입니다. 플롯의 키는 유정과 단층입니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 무어의 작별과 같이 닫힙니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Tanya Roberts를 Stacey Sutton로 적습니다.",
      },
    ],
    related: [
      { href: "/films/a-view-to-a-kill", label: "뷰 투 어 킬" },
      { href: "/bond-girls/may-day", label: "메이 데이" },
    ],
    sources: [
      o07("the-films/a-view-to-a-kill/", "007.com — A View to a Kill"),
      wiki("Stacey_Sutton", "Wikipedia — Stacey Sutton"),
    ],
    footnotes: [
      { n: 1, text: "유정 상속자 설정입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "같은 편의 악역과 자리를 나눕니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "kara-milovy": {
    slug: "kara-milovy",
    overview: [
      "카라 밀로비는 《리빙 데이라이츠》의 첼리스트입니다. 가짜 암살의 미끼로 등장했다가, 빈과 아프가니스탄에서 본드의 동행이 됩니다.",
      "달튼 첫 편의 본드걸입니다. 코미디보다 냉전의 잔여가 앞섭니다.",
    ],
    actressNotes: [
      "메리엄 다보는 영국·네덜란드 배우입니다. 첼로가 홍보의 소품이었습니다.",
    ],
    onScreen: [
      "브라티슬라바의 콘서트, 파이프 오르간, 사파드의 기지. 첼로 케이스가 무기의 위장이 됩니다.",
    ],
    culturalAfterimage: [
      "달튼 본드가 사람을 지키는 방식의 입구입니다. 무어 말기의 개그와 온도가 갈립니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 살인면허의 팸 부비에와는 다른 인물입니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Maryam d’Abo를 Kara Milovy로 적습니다.",
      },
    ],
    related: [
      { href: "/films/the-living-daylights", label: "리빙 데이라이츠" },
      { href: "/bond-girls/pam-bouvier", label: "팸 부비에" },
    ],
    sources: [
      o07("the-films/the-living-daylights/", "007.com — The Living Daylights"),
      wiki("Kara_Milovy", "Wikipedia — Kara Milovy"),
    ],
    footnotes: [
      { n: 1, text: "달튼 첫 편의 본드걸입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "미끼 설정은 초반 스포일러입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "pam-bouvier": {
    slug: "pam-bouvier",
    overview: [
      "팸 부비에는 《살인면허》에서 CIA 쪽 파일럿·정보원으로 등장합니다. 라이터의 복수에 본드가 빠질 때, 현장을 아는 손으로 합류합니다.",
      "달튼 두 번째 편의 본드걸입니다. 루페 라모라와 자리를 나눕니다.",
    ],
    actressNotes: [
      "캐리 로웰은 이후 다른 장르로 알려지지만, 이 칸은 1989년 배역만 적습니다.",
    ],
    onScreen: [
      "플로리다와 이스모 시우다드, 유조선과 사원. 총과 비행이 개그보다 앞섭니다.",
    ],
    culturalAfterimage: [
      "복수가 임무를 대신하는 이야기에서, 동료로 남는 여성 배역의 예로 자주 읽힙니다.",
    ],
    continuity: [
      "한 편에서 끝납니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Carey Lowell을 Pam Bouvier로 적습니다.",
      },
    ],
    related: [
      { href: "/films/licence-to-kill", label: "살인면허" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/licence-to-kill/", "007.com — Licence to Kill"),
      wiki("Pam_Bouvier", "Wikipedia — Pam Bouvier"),
    ],
    footnotes: [
      { n: 1, text: "CIA 협력 설정입니다." },
      { n: 2, text: "배우의 이후 경력은 펼치지 않습니다." },
      { n: 3, text: "같은 편의 루페와 자리를 나눕니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "natalya-simonova": {
    slug: "natalya-simonova",
    overview: [
      "나탈리아 시모노바는 《골든아이》에서 세베르나야 시설의 프로그래머입니다. 위성 무기 골든아이를 막을 수 있는 손에 가깝습니다.",
      "브로스넌 첫 편의 본드걸입니다. 크세니아 오나톱이 악역 카리스마를 가져가고, 나탈리아가 플롯의 키를 쥐습니다.",
    ],
    actressNotes: [
      "이자벨라 스코럽코는 폴란드 출생·스웨덴에서 성장한 배우입니다. 1995년 본드걸 홍보의 한쪽입니다.",
    ],
    onScreen: [
      "세베르나야의 학살, 상트페테르부르크, 쿠바의 안테. 해킹과 생존이 유혹보다 앞섭니다.",
    ],
    culturalAfterimage: [
      "허브 열두 칸이 크세니아를 넣은 것과 달리, 이 칸은 프로그래머를 본드걸로 되돌립니다.",
    ],
    continuity: [
      "한 편에서 끝납니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Izabella Scorupco를 Natalya Simonova로 적습니다.",
      },
    ],
    related: [
      { href: "/films/goldeneye", label: "골든아이" },
      { href: "/bond-girls/xenia-onatopp", label: "크세니아 오나톱" },
    ],
    sources: [
      o07("goldeneye/", "007.com — GoldenEye"),
      wiki("Natalya_Simonova", "Wikipedia — Natalya Simonova"),
      wiki("Izabella_Scorupco", "Wikipedia — Izabella Scorupco"),
    ],
    footnotes: [
      { n: 1, text: "프로그래머 본드걸입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "악역 여성과 자리를 나눕니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "paris-carver": {
    slug: "paris-carver",
    overview: [
      "패리스 카버는 《네버 다이》에서 미디어 재벌 엘리엇 카버의 아내이자 본드의 옛 연인입니다. 함부르크에서 짧게 다시 만납니다.",
      "조연입니다. 웨이 린이 현장의 본드걸 자리를 가져갑니다.",
    ],
    actressNotes: [
      "테리 해처는 촬영 당시 이미 텔레비전으로 얼굴이 알려진 배우였습니다.",
    ],
    onScreen: [
      "함부르크 파티와 호텔. 정보는 짧고, 결말은 가혹합니다. 카버의 보복이 배역을 닫습니다.",
    ],
    culturalAfterimage: [
      "옛 연인을 한 편에 호출하는 습관의 1997년 예입니다. 길이는 카메오에 가깝습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 본드의 과거는 대사로만 남습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Teri Hatcher를 Paris Carver로 적습니다.",
      },
    ],
    related: [
      { href: "/films/tomorrow-never-dies", label: "네버 다이" },
      { href: "/bond-girls/wai-lin", label: "웨이 린" },
    ],
    sources: [
      o07("the-films/tomorrow-never-dies/", "007.com — Tomorrow Never Dies"),
      wiki("Paris_Carver", "Wikipedia — Paris Carver"),
    ],
    footnotes: [
      { n: 1, text: "함부르크 구간의 조연입니다." },
      { n: 2, text: "배우의 TV 경력은 공개 정보입니다." },
      { n: 3, text: "결말은 스포일러입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "elektra-king": {
    slug: "elektra-king",
    overview: [
      "엘렉트라 킹은 《언리미티드》에서 보호 대상으로 보이던 석유 상속자입니다. 납치의 과거가 동기로 읽히다, 파이프라인의 키가 적대자로 뒤집힙니다.",
      "조연·적대자입니다. 크리스마스 존스가 본드걸 자리를 가져가지만, 플롯의 무게는 이쪽입니다.",
    ],
    actressNotes: [
      "소피 마르소는 프랑스 배우입니다. 1999년 본드 악역 여성의 얼굴이었습니다.",
    ],
    onScreen: [
      "스코틀랜드 은행, 바쿠, 카자흐의 핵시설, 보스포루스. 본드를 함정에 빠뜨리는 연출이 배역의 핵심입니다.",
    ],
    culturalAfterimage: [
      "본드걸이 적대자의 자리에 앉는 구도는 이슈 「본드걸을 다시 읽기」의 한 칸입니다.",
    ],
    continuity: [
      "한 편에서 끝납니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Sophie Marceau를 Elektra King으로 적습니다.",
      },
    ],
    related: [
      { href: "/films/the-world-is-not-enough", label: "언리미티드" },
      { href: "/bond-girls/christmas-jones", label: "크리스마스 존스" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/the-world-is-not-enough/", "007.com — The World Is Not Enough"),
      wiki("Elektra_King", "Wikipedia — Elektra King"),
    ],
    footnotes: [
      { n: 1, text: "적대자 쪽 조연입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "반전은 스포일러입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "christmas-jones": {
    slug: "christmas-jones",
    overview: [
      "크리스마스 존스는 《언리미티드》의 핵물리학자입니다. 카자흐 시설에서 본드와 만나 파이프라인 결전까지 동행합니다.",
      "이름 개그가 배역을 삼키기 쉽습니다. 본드걸로 분류하되, 플롯의 키는 엘렉트라 쪽에 더 있습니다.",
    ],
    actressNotes: [
      "데니스 리처즈는 1990년대 말 할리우드의 얼굴이었습니다. 과학자의 설득력 논쟁은 개봉 때부터 있었습니다.",
    ],
    onScreen: [
      "방호복, 핵탄두, 이스탄불 지하. 기술적 설명은 얇고, 장면의 속도는 빠릅니다.",
    ],
    culturalAfterimage: [
      "이름과 엔딩 대사가 클립으로 남습니다. 배역의 전문성은 재평가 대상입니다.",
    ],
    continuity: [
      "한 편에서 끝납니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Denise Richards를 Dr. Christmas Jones로 적습니다.",
      },
    ],
    related: [
      { href: "/films/the-world-is-not-enough", label: "언리미티드" },
      { href: "/bond-girls/elektra-king", label: "엘렉트라 킹" },
    ],
    sources: [
      o07("the-films/the-world-is-not-enough/", "007.com — The World Is Not Enough"),
      wiki("Christmas_Jones", "Wikipedia — Christmas Jones"),
    ],
    footnotes: [
      { n: 1, text: "핵물리학자 설정입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "이름 개그는 홍보의 층입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "strawberry-fields": {
    slug: "strawberry-fields",
    overview: [
      "스트로베리 필즈는 《퀀텀 오브 솔러스》에서 볼리비아 영국 대사관 쪽 접선입니다. 골드핑거의 금색을 검은 원유로 호출하는 조연입니다.",
      "화면 시간은 짧습니다. 카밀 몬테스가 본드걸 자리를 가져갑니다.",
    ],
    actressNotes: [
      "제마 아터튼의 짧은 출연이 팬 사이 인용이 깁니다. 이름도 비틀즈 제목을 빌려 옵니다.",
    ],
    onScreen: [
      "호텔과 대사관, 원유로 덮인 발견. 결말의 이미지는 화면 칸에 둡니다.",
    ],
    culturalAfterimage: [
      "오마주가 인물을 대신합니다. 질 마스터슨 페이지와 나란히 읽히라고 허브에 올립니다.",
    ],
    continuity: [
      "한 편, 한 구간입니다. 크레이그 연속성의 본드걸은 카밀·베스퍼 쪽입니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Gemma Arterton을 Strawberry Fields로 적습니다.",
      },
    ],
    related: [
      { href: "/films/quantum-of-solace", label: "퀀텀 오브 솔러스" },
      { href: "/bond-girls/jill-masterson", label: "질 마스터슨" },
      { href: "/bond-girls/camille-montes", label: "카밀 몬테스" },
    ],
    sources: [
      o07("the-films/quantum-of-solace/", "007.com — Quantum of Solace"),
      wiki("Strawberry_Fields_(character)", "Wikipedia — Strawberry Fields (character)"),
    ],
    footnotes: [
      { n: 1, text: "볼리비아 구간의 조연입니다." },
      { n: 2, text: "이름 출처는 대중문화 인용입니다." },
      { n: 3, text: "오마주는 골드핑거입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "camille-montes": {
    slug: "camille-montes",
    overview: [
      "카밀 몬테스는 《퀀텀 오브 솔러스》의 본드걸입니다. 볼리비아 군부 메들라노에 대한 복수가 본드의 퀀텀 추적과 겹칩니다.",
      "크레이그 시기 여성 배역 가운데, 연인보다 동기에 가까운 상대입니다.",
    ],
    actressNotes: [
      "올가 쿠릴렌코는 우크라이나 출생으로, 영어 위키백과는 프랑스 국적을 함께 적습니다. 2008년 본드걸 홍보의 얼굴이었습니다.",
    ],
    onScreen: [
      "아이티, 볼리비아 사막, 호텔과 광산. 화재의 과거가 결전의 이유를 만듭니다.",
    ],
    culturalAfterimage: [
      "베스퍼의 잔여를 본드가 들고 있는 동안, 카밀은 자신의 복수를 닫습니다. 겹치되 합쳐지지는 않습니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 스펙터의 마들렌과는 다른 인물입니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Olga Kurylenko를 Camille로 적습니다.",
      },
    ],
    related: [
      { href: "/films/quantum-of-solace", label: "퀀텀 오브 솔러스" },
      { href: "/bond-girls/vesper-lynd", label: "베스퍼 린드" },
      { href: "/bond-girls/strawberry-fields", label: "스트로베리 필즈" },
    ],
    sources: [
      o07("the-films/quantum-of-solace/", "007.com — Quantum of Solace"),
      wiki("Camille_Montes", "Wikipedia — Camille Montes"),
      wiki("Olga_Kurylenko", "Wikipedia — Olga Kurylenko"),
    ],
    footnotes: [
      { n: 1, text: "복수의 본드걸입니다." },
      { n: 2, text: "배우 표기는 크레딧입니다." },
      { n: 3, text: "베스퍼와 연속되지 않습니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  severine: {
    slug: "severine",
    overview: [
      "세버린은 《스카이폴》의 이차 본드걸입니다. 마카오 수상 카지노에서 본드와 만나고, 실바—전직 요원—의 세계로 들어가는 문입니다. 홍보 사진은 본드걸의 얼굴을 빌리지만, 화면 시간은 짧고 이야기의 중심 여성 관계는 M 쪽에 있습니다.",
      "설정은 실바의 측근입니다. 카지노의 경호와 섬으로 가는 배가 역할의 뼈대이고, 과거의 복종은 짧은 대사로만 스칩니다. 화보를 다시 쓰지 않습니다. 문이 어디에 있는지만 적습니다.",
    ],
    actressNotes: [
      "베레니스 말로(Bérénice Marlohe)는 프랑스 배우입니다. 한글 표기는 자료마다 말로·말로히·말로에·마를로로 갈립니다. 영화 상세와 같이 「말로」를 쓰고, 검색은 다른 표기도 받습니다.",
      "2012년 본드 홍보에 얼굴이 올랐으나 배역은 한 편의 중간 구간에 머뭅니다. 배우의 다른 작품을 다 적지는 않습니다. 세버린이라는 자리와의 접점만 남깁니다.",
    ],
    onScreen: [
      "상하이의 암살 뒤, 본드는 카지노에서 그녀를 찾습니다. 용머리와 등롱의 수상 카지노—촬영은 파인우드 세트—에서 경호를 거두고 실바의 섬으로 향합니다.",
      "스포일러 — 섬에서 실바가 사격 게임으로 배역을 닫습니다. 본드가 막지 못한 죽음이, 전직 요원의 잔인함을 한 컷에 보여 줍니다. 줄거리의 나머지는 스카이폴 상세에 있습니다.",
    ],
    culturalAfterimage: [
      "인신매매와 악당의 처벌이 한 몸에 겹칩니다. 재평가에서 자주 거론되는 짧은 배역이며, 본드걸이라는 말이 홍보와 플롯에서 어긋나는 크레이그 시기의 한 예입니다.",
    ],
    continuity: [
      "한 편에서 끝납니다. 스카이폴의 중심 여성 관계는 M과 이브 머니페니 쪽에 있고, 다음 편의 본드걸 자리는 마들렌 스완이 받습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Bérénice Marlohe를 Sévérine으로 적습니다. 한글 배우명은 말로·말로히 등으로 갈립니다.",
      },
      {
        label: "확인됨",
        text: "마카오 수상 카지노는 파인우드 패독 탱크의 세트입니다. 랜드마크 칸이 같은 장소를 적습니다.",
      },
    ],
    related: [
      { href: "/films/skyfall", label: "스카이폴" },
      { href: "/bond-girls/miss-moneypenny", label: "이브 머니페니" },
      { href: "/bond-girls/strawberry-fields", label: "스트로베리 필즈" },
      { href: "/issues/reread-bond-girls", label: "본드걸을 다시 읽기" },
    ],
    sources: [
      o07("the-films/skyfall/", "007.com — Skyfall"),
      wiki("S%C3%A9v%C3%A9rine_(James_Bond)", "Wikipedia — Sévérine"),
      wiki("B%C3%A9r%C3%A9nice_Marlohe", "Wikipedia — Bérénice Marlohe"),
      {
        label: "씨네21 — 베레니스 말로에",
        href: "https://cine21.com/db/person/info/?person_id=82305",
      },
    ],
    footnotes: [
      { n: 1, text: "이차 본드걸이며 허브 배지는 조연입니다. 편 중반에 이야기가 닫힙니다." },
      { n: 2, text: "배우 한글 표기는 「말로」를 쓰고, 말로히·말로에·마를로는 이명으로 검색에 둡니다." },
      { n: 3, text: "섬의 사격은 스포일러입니다. 화면 칸에만 적습니다." },
      { n: 4, text: "한 편 한정입니다. 마들렌과 이어지지 않습니다." },
    ],
  },
  "lucia-sciarra": {
    slug: "lucia-sciarra",
    overview: [
      "루시아 시아라는 《스펙터》 로마에서 과부로 등장합니다. 정보는 짧고, 캐스팅 화제가 배역의 길이보다 앞섰습니다.",
      "카메오입니다.",
    ],
    actressNotes: [
      "모니카 벨루치는 시리즈 사상 나이 많은 본드 상대 중 하나로 보도되었습니다. 이 칸은 홍보 숫자를 신화로 키우지 않습니다.",
    ],
    onScreen: [
      "장례와 저택, 짧은 밤. 스펙터 회의로 가는 이정표입니다.",
    ],
    culturalAfterimage: [
      "화제 캐스팅이 배역을 삼킵니다. 마들렌 스완이 같은 편의 본드걸 자리를 가져갑니다.",
    ],
    continuity: [
      "한 편, 한 밤입니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Monica Bellucci를 Lucia Sciarra로 적습니다.",
      },
    ],
    related: [
      { href: "/films/spectre", label: "스펙터" },
      { href: "/bond-girls/madeleine-swann", label: "마들렌 스완" },
    ],
    sources: [
      o07("spectre/", "007.com — Spectre"),
      wiki("Spectre_(2015_film)", "Wikipedia — Spectre (2015 film)"),
    ],
    footnotes: [
      { n: 1, text: "로마 구간의 카메오입니다." },
      { n: 2, text: "나이 보도는 언론 층입니다." },
      { n: 3, text: "정보는 짧게 끝납니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  paloma: {
    slug: "paloma",
    overview: [
      "팔로마는 《노 타임 투 다이》 쿠바에서 CIA 협력으로 등장합니다. 사흘 훈련이라는 대사와 함께, 짧은 파티 침투가 팬 하이라이트가 됩니다.",
      "조연입니다. 마들렌이 본드걸 자리를 가져갑니다.",
    ],
    actressNotes: [
      "아나 데 아르마스는 쿠바 출생으로, 영어 위키백과는 스페인 국적을 함께 적습니다. 촬영 당시 이미 국제 작품으로 얼굴이 알려진 배우였습니다. 짧은 출연이 클립으로 순환합니다.",
    ],
    onScreen: [
      "하바나 파티, 계단과 총격, 차. 현장의 유머가 크레이그 말기의 무거움을 잠시 걷습니다.",
    ],
    culturalAfterimage: [
      "‘더 있었으면’이라는 팬의 문장이 배역을 키웁니다. 길이를 과장하지 않습니다.",
    ],
    continuity: [
      "한 편, 한 작전입니다. 이후 공식 발표는 없습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "007.com이 Ana de Armas를 Paloma로 적습니다.",
      },
    ],
    related: [
      { href: "/films/no-time-to-die", label: "노 타임 투 다이" },
      { href: "/bond-girls/madeleine-swann", label: "마들렌 스완" },
    ],
    sources: [
      o07("no-time-to-die/", "007.com — No Time to Die"),
      wiki("No_Time_to_Die", "Wikipedia — No Time to Die"),
      wiki("Ana_de_Armas", "Wikipedia — Ana de Armas"),
    ],
    footnotes: [
      { n: 1, text: "쿠바 작전의 조연입니다." },
      { n: 2, text: "배우의 다른 작품은 펼치지 않습니다." },
      { n: 3, text: "훈련 대사는 코미디 층입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "tilly-masterson": {
    slug: "tilly-masterson",
    overview: [
      "틸리 마스터슨은 골드핑거에서 언니 질이 죽은 뒤 알프스에 총을 들고 나타납니다. 노란 머스탱이 DB5와 산길에서 엇갈리고, 복수는 공장 앞에서 끊깁니다.",
      "허브의 본드걸 자리는 푸시 갤로어가 가져갑니다. 틸리는 조연입니다.",
    ],
    actressNotes: [
      "타니아 말렛은 전 모델 출신으로, 이 한 편이 본드 출연의 전부입니다. 머스탱 컷이 배역보다 자주 인용됩니다.",
    ],
    onScreen: [
      "스위스 도로의 추격, 공장 주변의 저격, 오드잡의 모자. 질의 금색과 달리 움직임이 먼저입니다.",
    ],
    culturalAfterimage: [
      "노란 머스탱은 본드카 외 차량 칸에서도 적습니다. 언니의 이미지에 가려진 복수극입니다.",
    ],
    continuity: [
      "같은 인물은 후속편에 없습니다. 질의 금색 오마주만 퀀텀에서 한 번 더 호출됩니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Tania Mallet를 Tilly Masterson으로 적습니다. 질의 동생입니다.",
      },
    ],
    related: [
      { href: "/films/goldfinger", label: "골드핑거" },
      { href: "/bond-girls/jill-masterson", label: "질 마스터슨" },
      { href: "/bond-girls/pussy-galore", label: "푸시 갤로어" },
    ],
    sources: [
      o07("goldfinger/", "007.com — Goldfinger"),
      wiki("Tilly_Masterson", "Wikipedia — Tilly Masterson"),
    ],
    footnotes: [
      { n: 1, text: "알프스 구간의 조연입니다." },
      { n: 2, text: "출연은 골드핑거 한 편입니다." },
      { n: 3, text: "머스탱은 차량 칸과 교차합니다." },
      { n: 4, text: "연속성은 없습니다." },
    ],
  },
  aki: {
    slug: "aki",
    overview: [
      "아키는 《두 번 산다》에서 타이거 다나카 쪽 운전자이자 수사의 리듬입니다. 토요타 2000GT를 몰고, 본드는 조수석에 앉습니다.",
      "키시 스즈키가 후반의 본드걸 자리를 가져갑니다. 아키는 조연으로 적되, 화면의 전반을 엽니다.",
    ],
    actressNotes: [
      "와카바야시 아키코는 일본 배우입니다. 영어 대사와 화면의 운전이 배역을 나눕니다.",
    ],
    onScreen: [
      "도쿄 야간의 추격, 신칸센, 독이 입술에 떨어지는 컷. 잔상이 키시보다 먼저 남기도 합니다.",
    ],
    culturalAfterimage: [
      "2000GT 오픈카는 이 편의 도로 아이콘입니다. 본드카 허브에는 아직 없고, 아키의 핸들로 기억됩니다.",
    ],
    continuity: [
      "한 편입니다. 키시와 이름을 섞어 읽지 않습니다.",
    ],
    gossip: [
      {
        label: "제작진 인터뷰",
        text: "쿠페를 오픈카로 손본 이유로 촬영 각도와 키 큰 배우를 동시에 넣기 위해서라는 설명이 반복됩니다.",
      },
    ],
    related: [
      { href: "/films/you-only-live-twice", label: "두 번 산다" },
      { href: "/bond-girls/kissy-suzuki", label: "키시 스즈키" },
    ],
    sources: [
      o07("you-only-live-twice/", "007.com — You Only Live Twice"),
      wiki("Aki_(James_Bond)", "Wikipedia — Aki (James Bond)"),
    ],
    footnotes: [
      { n: 1, text: "도쿄 구간의 조연입니다." },
      { n: 2, text: "2000GT는 허브 밖입니다." },
      { n: 3, text: "독 장면은 스포일러 층입니다." },
      { n: 4, text: "키시와 배역을 갈라 둡니다." },
    ],
  },
  "rosie-carver": {
    slug: "rosie-carver",
    overview: [
      "로지 카버는 《죽느냐 사느냐》 산 모니크의 이중 스파이입니다. CIA 쪽으로 보이지만 카낭가의 줄에 묶여 있고, 배신의 대가는 짧습니다.",
      "솔리테어가 본드걸 자리를 가져갑니다. 로지는 조연입니다.",
    ],
    actressNotes: [
      "글로리아 헨드리는 공식 시리즈가 본드와 잠자리를 공유하는 첫 흑인 여성으로 자주 적힙니다. 이 칸은 그 기록을 홍보 문장으로 키우지 않고, 배역의 이중만 적습니다.",
    ],
    onScreen: [
      "섬의 접선, 버스 추격 앞의 불안, scarecrow 구간의 결말. 화면 시간은 짧고 라벨은 깁니다.",
    ],
    culturalAfterimage: [
      "‘첫 흑인 본드걸’로 불리는 경우가 있으나, 허브 분류는 조연입니다. 솔리테어와 자리를 섞지 않습니다.",
    ],
    continuity: [
      "한 편입니다. 후속 무어 편에 같은 인물은 없습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Gloria Hendry를 Rosie Carver로 적습니다. 미국 개봉 등급 과정에서 일부 컷이 잘렸다는 제작 후일담이 있습니다.",
      },
    ],
    related: [
      { href: "/films/live-and-let-die", label: "죽느냐 사느냐" },
      { href: "/bond-girls/solitaire", label: "솔리테어" },
    ],
    sources: [
      o07("live-and-let-die/", "007.com — Live and Let Die"),
      wiki("Rosie_Carver", "Wikipedia — Rosie Carver"),
    ],
    footnotes: [
      { n: 1, text: "산 모니크 구간의 조연입니다." },
      { n: 2, text: "첫 흑인 상대라는 기록은 크레딧·보도 층입니다." },
      { n: 3, text: "결말은 스포일러 층입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  magda: {
    slug: "magda",
    overview: [
      "마그다는 《옥토퍼시》에서 옥토퍼시 서클의 연락입니다. 문어 문신, 파베르제 알, 카말 칸의 궁이 창구입니다. 본드걸 자리는 옥토퍼시가 가져갑니다.",
      "사용자가 적은 ‘옥토퍼시의 동료’에 해당하는 조연입니다.",
    ],
    actressNotes: [
      "크리스티나 웨이본(Kristina Wayborn)은 스웨덴 배우입니다. 주사위와 문신이 배역의 얼굴입니다.",
    ],
    onScreen: [
      "경매 뒤의 거래, 궁의 밤, 섬에서 본드를 맞이하는 창구. 플롯의 핵은 오를로프와 카말이 쥐고, 마그다는 문을 엽니다.",
    ],
    culturalAfterimage: [
      "문어 문신이 배역 이름보다 먼저 인용됩니다. 옥토퍼시 페이지와 역할을 갈라 둡니다.",
    ],
    continuity: [
      "한 편입니다. 모드 애덤스의 다른 본드 배역(안드레아 앤더스)과도 섞지 않습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Kristina Wayborn를 Magda로 적습니다.",
      },
    ],
    related: [
      { href: "/films/octopussy", label: "옥토퍼시" },
      { href: "/bond-girls/octopussy", label: "옥토퍼시" },
    ],
    sources: [
      o07("octopussy/", "007.com — Octopussy"),
      wiki("Magda_(James_Bond)", "Wikipedia — Magda (James Bond)"),
    ],
    footnotes: [
      { n: 1, text: "옥토퍼시 서클의 조연입니다." },
      { n: 2, text: "스웨덴 배우입니다." },
      { n: 3, text: "문신은 화면의 표식입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
  "miranda-frost": {
    slug: "miranda-frost",
    overview: [
      "미란다 프로스트는 《어나더데이》에서 M이 그레이브스 곁에 심은 요원으로 등장합니다. 아이스 팰리스에서 줄이 뒤집히고, 징크스와 검으로 맞섭니다.",
      "본드걸 자리는 징크스가 가져갑니다. 프로스트는 조연·이중입니다.",
    ],
    actressNotes: [
      "로저먼드 파이크의 본드 데뷔입니다. 이후 경력은 펼치지 않고, 아이스 팰리스의 배역만 적습니다.",
    ],
    onScreen: [
      "펜싱 클럽의 입구, 얼음 호텔의 배신, 화물기의 결전. 이중 스파이의 문법이 브로스넌 말기를 설명합니다.",
    ],
    culturalAfterimage: [
      "화제 캐스팅이 배역을 앞선 경우는 루시아 시아라와 겹치지만, 프로스트는 플롯의 칼입니다.",
    ],
    continuity: [
      "한 편입니다. 크레이그 연속성과는 이어지지 않습니다.",
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레딧은 Rosamund Pike를 Miranda Frost로 적습니다.",
      },
    ],
    related: [
      { href: "/films/die-another-day", label: "어나더데이" },
      { href: "/bond-girls/jinx", label: "징크스" },
    ],
    sources: [
      o07("the-films/die-another-day/", "007.com — Die Another Day"),
      wiki("Miranda_Frost", "Wikipedia — Miranda Frost"),
    ],
    footnotes: [
      { n: 1, text: "아이스 팰리스 구간의 조연입니다." },
      { n: 2, text: "파이크의 다른 작품은 펼치지 않습니다." },
      { n: 3, text: "배신은 스포일러 층입니다." },
      { n: 4, text: "한 편 한정입니다." },
    ],
  },
};
