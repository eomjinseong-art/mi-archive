import type { Source } from "./types";

export type OtherVehicle = {
  nameKo: string;
  nameEn: string;
  note: string;
  popularity: string;
  carSlug?: string;
  sources?: Source[];
};

function filmPage(path: string, title: string): Source {
  return {
    label: `007.com — ${title}`,
    href: `https://www.007.com/the-films/${path}/`,
  };
}

const WIKI_VEHICLES: Source = {
  label: "Wikipedia — List of James Bond vehicles",
  href: "https://en.wikipedia.org/wiki/List_of_James_Bond_vehicles",
};

type Row = Omit<OtherVehicle, "sources"> & { sources?: Source[] };

function pack(path: string, title: string, rows: Row[]): OtherVehicle[] {
  const film = filmPage(path, title);
  return rows.map((row) => ({
    ...row,
    sources: row.sources ?? [film, WIKI_VEHICLES],
  }));
}

/**
 * Notable non-primary Bond cars per official (and two unofficial) films.
 * Checklist: Wikipedia “List of James Bond vehicles”. Hub `/cars` L2 cars
 * are omitted except brief cross-links. Notes rewritten in Korean.
 */
const other: Record<string, OtherVehicle[]> = {
  "dr-no": pack("dr-no", "Dr. No", [
    {
      nameKo: "포드 앵글리아 105E",
      nameEn: "Ford Anglia 105E",
      note: "퀸스 클럽 주차장에서 스트랭웨이즈가 암살조에게 쓰러질 때 옆에 있는 차입니다.",
      popularity: "시리즈가 열리기 직전, 연락관의 죽음과 붙는 첫 차입니다.",
    },
    {
      nameKo: "라살 장례 코치",
      nameEn: "LaSalle Funeral Coach",
      note: "세 명의 시각장애인 암살조가 도주에 쓰는 1939년 장의차입니다. 블루 마운틴 추격에도 다시 나옵니다.",
      popularity: "첫 편의 기이한 추격 차로 자주 꼽힙니다.",
    },
    {
      nameKo: "시보레 벨 에어",
      nameEn: "Chevrolet Bel Air",
      note: "미스터 존스가 공항에서 본드를 태운 도난차입니다. 존스가 죽은 뒤 본드가 몰고 가, 시리즈에서 본드가 처음 운전하는 차가 됩니다.",
      popularity: "본드카 이전, 본드가 핸들을 잡은 첫 기록입니다.",
    },
    {
      nameKo: "시보레 임팔라",
      nameEn: "Chevrolet Impala",
      note: "펠릭스 라이터와 쿼럴이 공항에서 본드를 뒤따르는 CIA 차입니다.",
      popularity: "라이터의 첫 현장 이동으로 남습니다.",
    },
    {
      nameKo: "썬빔 알파인",
      nameEn: "Sunbeam Alpine",
      note: "본드가 타로의 집으로 가는 렌터 컨버터블입니다. 가젯은 없고 이동 수단입니다.",
      popularity: "첫 편의 ‘본드카 이전’으로 자주 거론됩니다.",
    },
    {
      nameKo: "복스홀 PA 벨록스",
      nameEn: "Vauxhall PA Velox",
      note: "덴트가 크랩 키 쪽과 오가는 세단입니다. 암살 지시가 차로도 움직입니다.",
      popularity: "섬으로 이어지는 중간자의 차입니다.",
    },
    {
      nameKo: "드래곤 탱크",
      nameEn: "Dragon Tank",
      note: "크랩 키에서 닥터 노 측이 습지를 훑는 화염 장비입니다. 쿼럴이 이 불 속에서 죽습니다.",
      popularity: "잠입의 대가를 찍는 육상 병기입니다.",
    },
  ]),
  "from-russia-with-love": pack("from-russia-with-love", "From Russia with Love", [
    {
      nameKo: "롤스-로이스 실버 레이스",
      nameEn: "Rolls-Royce Silver Wraith",
      note: "케림 베이가 예실쾨이 공항에서 본드를 태우는 차입니다. 골드핑거의 팬텀 III와는 다른 롤스입니다.",
      popularity: "기차 육박전 앞의 이스탄불 이동으로 기억됩니다.",
    },
    {
      nameKo: "시트로엥 11 레제르",
      nameEn: "Citroën 11 Légère",
      note: "불가리아 측이 이스탄불에서 본드를 미행합니다. 레드 그랜트가 훔쳐 같은 차로 뒤를 잇습니다.",
      popularity: "오리엔트 특급 앞의 미행 차로 남습니다.",
    },
    {
      nameKo: "포드 랜치 왜건",
      nameEn: "Ford Ranch Wagon",
      note: "본드와 케림이 집시 캠프로 가는 왜건입니다. 특급 합류 지점에도 다시 나옵니다.",
      popularity: "이스탄불 육상의 현장 차로 인용됩니다.",
    },
    {
      nameKo: "벤틀리 3.5리터",
      nameEn: "Bentley 3.5 Litre drophead",
      note: "Q 작업실에 놓인 1938년 드롭헤드입니다. 소설 속 본드의 벤틀리가 화면으로 한 번 나옵니다.",
      popularity: "이후 시리즈가 애스턴으로 넘어가기 전의 잔상입니다.",
    },
    {
      nameKo: "오리엔트 특급",
      nameEn: "Orient Express",
      note: "이스탄불에서 베네치아로 가는 열차입니다. 그랜트와의 객실 육박전이 이 편의 중심입니다.",
      popularity: "차보다 먼저 떠오르는 이 편의 이동입니다.",
    },
  ]),
  goldfinger: pack("goldfinger", "Goldfinger", [
    {
      nameKo: "포드 머스탱 컨버터블",
      nameEn: "Ford Mustang convertible",
      note: "틸리 매스터슨의 크림색 컨버터블이 푸르카 고개에서 DB5와 엇갈립니다. 타이어를 DB5가 베고, 팬이 노란 차로 기억하는 경우가 있으나 화면은 밝은 크림입니다.",
      popularity: "DB5 추격의 상대 차로 팬 클립에 자주 남습니다.",
      carSlug: "ford-mustang-bond",
      sources: [
        filmPage("goldfinger", "Goldfinger"),
        WIKI_VEHICLES,
      ],
    },
    {
      nameKo: "롤스-로이스 팬텀 III",
      nameEn: "Rolls-Royce Phantom III",
      note: "골드핑거의 1937년 노란 팬텀이 금을 싣고 알프스를 오릅니다. 본드가 추적기를 붙이는 차입니다.",
      popularity: "악당의 차로 시리즈 초기의 과시를 보여 줍니다.",
    },
    {
      nameKo: "메르세데스-벤츠 190",
      nameEn: "Mercedes-Benz 190",
      note: "알프스 추격에서 골드핑거 측 검은 세단이 DB5와 맞붙습니다.",
      popularity: "가젯 애스턴의 첫 상대 유럽 차입니다.",
    },
    {
      nameKo: "포드 컨트리 스콰이어",
      nameEn: "Ford Country Squire",
      note: "오드잡이 본드를 블루그래스 비행장에서 켄터키 농장으로 옮기는 왜건입니다.",
      popularity: "미국 구간의 악당 수행 차로 남습니다.",
    },
    {
      nameKo: "포드 란체로",
      nameEn: "Ford Ranchero",
      note: "오드잡이 압착된 컨티넨탈을 싣고 농장으로 돌아가는 픽업입니다.",
      popularity: "모자와 짝을 이루는 악당 측 육상 이동입니다.",
    },
    {
      nameKo: "링컨 컨티넨탈 (압착)",
      nameEn: "Lincoln Continental (crushed)",
      note: "미스터 솔로의 1964년 컨티넨탈이 고철 압착기에 들어갑니다. 오드잡이 처리를 맡습니다.",
      popularity: "압착된 미국 세단으로 시리즈의 잔혹 개그가 됩니다.",
    },
    {
      nameKo: "포드 선더버드",
      nameEn: "Ford Thunderbird",
      note: "펠릭스 라이터가 루이빌에서 모는 흰 컨버터블입니다.",
      popularity: "미국 조의 현장 차로 짧게 남습니다.",
    },
    {
      nameKo: "닷지 M43 야전 구급차",
      nameEn: "Dodge M43 military ambulance",
      note: "골드핑거 측이 포트 녹스 문을 자를 레이저를 숨긴 군용 구급차입니다.",
      popularity: "금고 습격의 위장 병기로 남습니다.",
    },
  ]),
  thunderball: pack("thunderball", "Thunderball", [
    {
      nameKo: "포드 머스탱 컨버터블",
      nameEn: "Ford Mustang convertible",
      note: "피오나 볼페의 파란 1965년 머스탱입니다. 나소에서 본드를 태웁니다.",
      popularity: "틸리의 크림 머스탱 다음 해의 같은 차종입니다.",
      carSlug: "ford-mustang-bond",
    },
    {
      nameKo: "포드 페어레인 스카이라이너",
      nameEn: "Ford Fairlane 500 Skyliner",
      note: "카운트 리페가 몰다 피오나의 로켓에 터지는 차입니다. 스펙터가 실패를 정리하는 컷입니다.",
      popularity: "가젯이 악당 편에서 먼저 터지는 예입니다.",
    },
    {
      nameKo: "링컨 컨티넨탈 리무진",
      nameEn: "Lincoln Continental Executive Limousine",
      note: "자크 부바가 장례에서 스펙터 회의로 가는 리무진입니다. 본드가 위장해 올라탑니다.",
      popularity: "프리크레딧 위장의 차로 남습니다.",
    },
    {
      nameKo: "링컨 컨티넨탈 컨버터블",
      nameEn: "Lincoln Continental convertible",
      note: "바하마에서 본드가 빌리는 파우더 블루 컨버터블입니다. 이 편의 DB5는 허브의 본드카라 여기 반복하지 않습니다.",
      popularity: "수중 전투 밖의 밝은 육상 이동입니다.",
    },
    {
      nameKo: "포드 선더버드 (라르고)",
      nameEn: "Ford Thunderbird (Largo)",
      note: "에밀리오 라르고가 파리 스펙터 본부에 도착할 때 타는 차입니다.",
      popularity: "악당의 파리 입구 차로 인용됩니다.",
    },
    {
      nameKo: "BSA 라이트닝",
      nameEn: "BSA Lightning motorcycle",
      note: "스펙터 측이 나소에서 본드를 노리는 바이크입니다. 이 편의 DB5는 허브의 본드카라 여기 반복하지 않습니다.",
      popularity: "수중편 밖의 짧은 이륜 위협입니다.",
    },
  ]),
  "you-only-live-twice": pack("you-only-live-twice", "You Only Live Twice", [
    {
      nameKo: "토요타 2000GT",
      nameEn: "Toyota 2000GT",
      note: "아키가 운전하는 오픈 2000GT입니다. 양산 컨버터블이 없어 촬영용으로 한 대를 잘랐습니다. 허브 12대에는 없습니다.",
      popularity: "일본 본드카의 기원으로 자주 불립니다.",
    },
    {
      nameKo: "토요펫 크라운",
      nameEn: "Toyopet Crown Deluxe",
      note: "오사토 측이 본드와 아키를 쫓다 가와사키 헬기의 자석에 들려 도쿄만에 떨어집니다.",
      popularity: "헬기가 차를 집어 던지는 과잉 컷입니다.",
    },
    {
      nameKo: "닷지 폴라라",
      nameEn: "Dodge Polara",
      note: "딕코 헨더슨 암살 뒤 오사토 부하의 도주차입니다.",
      popularity: "도쿄 암살의 짧은 육상입니다.",
    },
    {
      nameKo: "폰티액 파리지엔",
      nameEn: "Pontiac Parisienne",
      note: "가고시마 Q 작업실에 놓인 금색 컨버터블입니다. 리틀 넬리를 보러 온 본드가 스칩니다.",
      popularity: "자이로콥터 앞의 미국차 소품입니다.",
    },
    {
      nameKo: "리틀 넬리",
      nameEn: "Little Nellie (Wallis WA-116)",
      note: "Q가 가방에서 꺼내 조립하는 자이로콥터입니다. 화산 기지 밖에서 헬기 편대와 맞붙습니다.",
      popularity: "이 편의 본드카 못지않은 공중 아이콘입니다.",
    },
  ]),
  "on-her-majestys-secret-service": pack(
    "on-her-majestys-secret-service",
    "On Her Majesty’s Secret Service",
    [
      {
        nameKo: "머큐리 쿠거 XR7",
        nameEn: "Mercury Cougar XR7",
        note: "트레이시가 포르투갈 해변과 스위스 빙상 레이스에서 모는 빨간 컨버터블입니다. 본드의 DBS와 나란히 달립니다.",
        popularity: "DBS 옆의 두 번째 아이콘으로 남습니다.",
      },
      {
        nameKo: "롤스-로이스 실버 섀도",
        nameEn: "Rolls-Royce Silver Shadow",
        note: "드라코가 쓰는 차입니다. 유니온 코르스의 권위가 차로도 보입니다.",
        popularity: "사위의 거래를 태우는 악당 측 고급차입니다.",
      },
      {
        nameKo: "메르세데스-벤츠 220S",
        nameEn: "Mercedes-Benz 220S",
        note: "피츠 글로리아 탈출 뒤 블로펠드 측이 마을에서 본드를 쫓는 차입니다.",
        popularity: "산악 도주의 추격 차로 남습니다.",
      },
      {
        nameKo: "메르세데스-벤츠 600",
        nameEn: "Mercedes-Benz 600",
        note: "결혼식 뒤 이르마 분트가 뒷좌석에서 총을 쏘는 은색 차입니다. 결말의 육상입니다.",
        popularity: "상실의 한 컷을 태운 차로 기억됩니다.",
      },
      {
        nameKo: "폭스바겐 비틀",
        nameEn: "Volkswagen Beetle",
        note: "숀 캠벨이 라우터브루넨에서 본드의 썰매를 뒤따르는 차입니다.",
        popularity: "헬기 구간 앞의 짧은 미행입니다.",
      },
      {
        nameKo: "롤스-로이스 팬텀 IV",
        nameEn: "Rolls-Royce Phantom IV",
        note: "M의 의전차로, 이 편의 DBS는 본드카라 여기 적지 않습니다.",
        popularity: "본부의 권위를 태운 짧은 컷입니다.",
      },
    ],
  ),
  "diamonds-are-forever": pack("diamonds-are-forever", "Diamonds Are Forever", [
    {
      nameKo: "포드 머스탱 마하 1",
      nameEn: "Ford Mustang Mach 1",
      note: "티파니 케이스의 차로, 라스베이거스 골목에서 본드가 두 바퀴로 세우는 추격입니다.",
      popularity: "달 버기와 함께 이 편의 기이한 추격으로 인용됩니다.",
      carSlug: "ford-mustang-bond",
    },
    {
      nameKo: "트라이엄프 스태그",
      nameEn: "Triumph Stag",
      note: "피터 프랭크스의 차를 본드가 도버에서 가로채 암스테르담으로 갑니다.",
      popularity: "유럽 구간의 신분 교체 차로 남습니다.",
    },
    {
      nameKo: "달 버기",
      nameEn: "Moon buggy",
      note: "왜트 시설의 달 풍경을 가로지르는 촬영용 버기입니다. 본드가 훔쳐 사막으로 달아납니다.",
      popularity: "과잉 코미디의 상징 컷입니다.",
    },
    {
      nameKo: "캐딜락 장의 코치",
      nameEn: "Cadillac Funeral Coach",
      note: "슬럼버 사의 장의차가 LA 공항에서 관을 받습니다. 다이아몬드 파이프라인의 위장입니다.",
      popularity: "장례로 위장한 밀수의 차로 남습니다.",
    },
    {
      nameKo: "포드 선더버드 (윈트·키드)",
      nameEn: "Ford Thunderbird (Wint and Kidd)",
      note: "윈트와 키드가 본드를 사막 파이프에 묻으러 태우는 차입니다.",
      popularity: "산 채로 묻히는 개그의 이동입니다.",
    },
    {
      nameKo: "메르세데스-벤츠 600 (블로펠드)",
      nameEn: "Mercedes-Benz 600 (Blofeld)",
      note: "블로펠드가 카지노에서 여장을 하고 빠져나갈 때 타는 차입니다. 티파니가 뒷좌석에 던져집니다.",
      popularity: "위장 도주의 고급차입니다.",
    },
    {
      nameKo: "혼다 ATC-90",
      nameEn: "Honda ATC-90",
      note: "왜트 시설에서 달 버기를 쫓는 삼륜 ATV입니다. 본드가 한 대를 가로채기도 합니다.",
      popularity: "사막 코미디 추격의 상대 편성입니다.",
    },
  ]),
  "live-and-let-die": pack("live-and-let-die", "Live and Let Die", [
    {
      nameKo: "이층 버스",
      nameEn: "AEC Regent RT double-decker",
      note: "본드가 산 모니크에서 지붕을 깎으며 낮은 다리를 통과합니다. 위키 목록은 AEC 리전트로 적습니다.",
      popularity: "무어 첫 편의 육상 추격으로 유명합니다.",
    },
    {
      nameKo: "미니 모크",
      nameEn: "Mini Moke",
      note: "산 모니크 섬 도로를 스치는 영국 소형입니다. 이 편의 주역은 버스와 보트이고, 모크는 배경입니다.",
      popularity: "허브의 미니 카드가 가리키는 화면입니다.",
      carSlug: "mini-bond",
    },
    {
      nameKo: "캐딜락 플리트우드",
      nameEn: "Cadillac Fleetwood 60 Special",
      note: "카낭가가 UN에서 할렘으로 이동할 때 타는 리무진입니다. 본드가 체커 택시로 뒤를 붙습니다.",
      popularity: "뉴욕 개막의 악당 차로 남습니다.",
    },
    {
      nameKo: "체커 택시",
      nameEn: "Checker Taxicab",
      note: "본드가 카낭가의 캐딜락을 따라 할렘으로 가는 택시입니다. 이후 맨해튼 추격의 몸도 됩니다.",
      popularity: "통제 불능 택시 추격의 입구입니다.",
    },
    {
      nameKo: "코보라도",
      nameEn: "Corvorado",
      note: "콜벳과 엘도라도를 붙인 카낭가의 맞춤 차입니다. 던햄 코치의 피프 스타일입니다.",
      popularity: "악당의 과시 차로 한 컷에 남습니다.",
    },
    {
      nameKo: "시보레 노바 경찰차",
      nameEn: "Chevrolet Nova police car",
      note: "산 모니크와 뉴올리언스에서 이층 버스와 보트를 쫓는 경찰차입니다.",
      popularity: "추격의 상대 편성입니다.",
    },
    {
      nameKo: "글래스트론 스피드보트",
      nameEn: "Glastron speedboats",
      note: "본드가 악어 농장에서 빼앗아 루이지애나 습지를 가로지르는 추격입니다. 위키는 GT-150 등 여러 글래스트론을 적습니다.",
      popularity: "무어 첫 편의 수상 절정입니다.",
    },
  ]),
  "the-man-with-the-golden-gun": pack(
    "the-man-with-the-golden-gun",
    "The Man with the Golden Gun",
    [
      {
        nameKo: "AMC 호넷",
        nameEn: "AMC Hornet X",
        note: "방콕 강 위 코르크스크루 점프에 쓰인 1974년 호넷입니다. 본드가 딜러십 쇼윈도를 뚫고 나갑니다. 허브 밖입니다.",
        popularity: "한 바퀴 회전 점프로 시리즈 스턴트의 한 절정입니다.",
      },
      {
        nameKo: "AMC 마타도르 쿠페",
        nameEn: "AMC Matador coupe",
        note: "스카라망가와 닉낵의 차로, 날개가 펴지며 비행기로 바뀝니다. 호넷과 짝을 이룹니다.",
        popularity: "변신 도주차로 시리즈 최강의 트릭 중 하나로 불립니다.",
      },
      {
        nameKo: "MGB",
        nameEn: "MGB",
        note: "메리 굿나이트의 탄색 MGB입니다. 본드와 함께 안드레아의 롤스를 따라 페닌슐라 호텔로 갑니다.",
        popularity: "홍콩 구간의 현장 차로 남습니다.",
      },
      {
        nameKo: "AMC 마타도르 세단",
        nameEn: "AMC Matador sedan",
        note: "방콕 경찰이 추격에 쓰는 세단입니다. 태국은 우측 통행인데 촬영차는 좌핸들입니다.",
        popularity: "호넷 점프 앞의 경찰 편성입니다.",
      },
      {
        nameKo: "토요타 셀리카 GT",
        nameEn: "Toyota Celica GT",
        note: "스카라망가가 보트로 갈아타기 전 짧게 내리는 차입니다.",
        popularity: "섬으로 가는 육상의 이음입니다.",
      },
      {
        nameKo: "메르세데스-벤츠 W115",
        nameEn: "Mercedes-Benz W115",
        note: "힙 경위가 방콕에서 본드를 태우는 세단입니다. 호넷 점프의 앞 구간입니다.",
        popularity: "현지 조의 현장 차로 남습니다.",
      },
    ],
  ),
  "the-spy-who-loved-me": pack("the-spy-who-loved-me", "The Spy Who Loved Me", [
    {
      nameKo: "포드 타우누스",
      nameEn: "Ford Taunus 2.3 Ghia",
      note: "조스와 스트롬버그 부하가 에스프리를 쫓다 페인트 분사에 미끄러지는 차입니다. 웨트 넬리는 본드카라 여기 적지 않습니다.",
      popularity: "잠수 쿠페 추격의 악당 쪽으로 남습니다.",
    },
    {
      nameKo: "가와사키 사이드카",
      nameEn: "Kawasaki Z900 with sidecar",
      note: "프리크레딧 알프스에서 사이드카가 미사일로 바뀝니다. 차가 아니라 오프닝의 이동 아이콘입니다.",
      popularity: "시리즈 오프닝 개그의 대표 컷입니다.",
    },
    {
      nameKo: "레이랜드 셔파 밴",
      nameEn: "Leyland Sherpa van",
      note: "조스가 전화 수리공으로 위장해 몰다, 본드와 아냐의 탈출을 막으려 뜯어 버립니다.",
      popularity: "조스의 완력 개그를 밴에 옮긴 컷입니다.",
    },
    {
      nameKo: "아틱 웻바이크",
      nameEn: "Arctic Wetbike",
      note: "Q가 건네 스트롬버그 해상 요새로 들어가는 수상 바이크입니다. 웨트 넬리는 본드카라 여기 적지 않습니다.",
      popularity: "잠수 쿠페 다음의 현장 진입입니다.",
    },
  ]),
  moonraker: pack("moonraker", "Moonraker", [
    {
      nameKo: "본돌라",
      nameEn: "Bondola hover gondola",
      note: "베네치아에서 곤돌라가 호버로 바뀌는 개그 장치입니다. 이 편의 눈에 띄는 육상 이동입니다.",
      popularity: "1979년 과잉의 이동 수단으로 기억됩니다.",
    },
    {
      nameKo: "AMC 콩코드 왜건",
      nameEn: "AMC Concord station wagon",
      note: "드랙스와 본드가 비둘기 사냥에 쓰는 왜건입니다.",
      popularity: "저택 구간의 짧은 미국차입니다.",
    },
    {
      nameKo: "시보레 C-10 구급차",
      nameEn: "Chevrolet C-10 ambulance",
      note: "드랙스 부하가 구급대원으로 위장해 본드와 홀리를 태우는 차입니다.",
      popularity: "납치 위장의 육상입니다.",
    },
    {
      nameKo: "MP 라페르 카브리올레",
      nameEn: "MP Lafer Cabriolet",
      note: "리우의 마누엘라가 본드를 호텔까지 미행할 때 타는 브라질 오픈카입니다.",
      popularity: "리우 구간의 드문 현지 차입니다.",
    },
    {
      nameKo: "이스파노-수이사 J12",
      nameEn: "Hispano-Suiza J12 cabriolet",
      note: "드랙스가 저택에서 쓰는 1936년 카브리올레입니다. 왜건과 짝을 이루는 악당의 과시입니다.",
      popularity: "우주편 악당의 지상 의전차로 남습니다.",
    },
  ]),
  "for-your-eyes-only": pack("for-your-eyes-only", "For Your Eyes Only", [
    {
      nameKo: "시트로엥 2CV",
      nameEn: "Citroën 2CV",
      note: "스페인 마을 추격에서 본드와 멜리나가 탄 노란 2CV입니다. 에스프리가 자폭한 뒤의 대체 이동입니다.",
      popularity: "소형차 추격의 대표 컷입니다.",
    },
    {
      nameKo: "푸조 504",
      nameEn: "Peugeot 504",
      note: "곤잘레스 부하가 2CV를 쫓는 두 대의 세단입니다.",
      popularity: "2CV 추격의 상대 편성입니다.",
    },
    {
      nameKo: "메르세데스-벤츠 450 SEL",
      nameEn: "Mercedes-Benz 450 SEL",
      note: "로크가 알바니아 기지에서 달아나다 절벽 도로에서 본드에게 막히는 차입니다.",
      popularity: "절벽의 복수 컷을 태운 차입니다.",
    },
    {
      nameKo: "야마하 XT 500",
      nameEn: "Yamaha XT 500",
      note: "에리히 크리글러가 쓰는 오프로드 바이크입니다. 스키·산악 구간의 이동입니다.",
      popularity: "겨울 액션의 이륜입니다.",
    },
    {
      nameKo: "GP 비치 버기",
      nameEn: "GP Beach Buggy",
      note: "로크가 이탈리아 해변에서 몰다 리스 백작부인을 치는 버기입니다. 에스프리는 이 편의 본드카라 여기 적지 않습니다.",
      popularity: "해변의 잔혹 컷을 태운 차입니다.",
    },
  ]),
  octopussy: pack("octopussy", "Octopussy", [
    {
      nameKo: "툭툭",
      nameEn: "Tuk-tuk",
      note: "비자이가 우다이푸르에서 본드를 태우는 개조 삼륜입니다. 007.com이 별도 차량 항목으로 올립니다.",
      popularity: "인도의 본드 추격을 상징하는 이동입니다.",
      sources: [
        {
          label: "007.com — Tuk-Tuk",
          href: "https://www.007.com/the-vehicles/tuk-tuk/",
        },
        WIKI_VEHICLES,
      ],
    },
    {
      nameKo: "알파 로메오 GTV6",
      nameEn: "Alfa Romeo GTV6",
      note: "본드가 서커스 열차를 쫓아 훔치는 차입니다. 바이에른 경찰 BMW가 뒤를 따릅니다.",
      popularity: "유럽 구간의 짧은 추격으로 남습니다.",
    },
    {
      nameKo: "메르세데스 250SE",
      nameEn: "Mercedes-Benz 250SE",
      note: "오를로프의 차로, 본드가 타이어를 잃고 철로 위를 달려 서커스 열차를 쫓습니다.",
      popularity: "철로 추격의 차로 한 번 보면 남습니다.",
    },
    {
      nameKo: "메르세데스-벤츠 600 (카말)",
      nameEn: "Mercedes-Benz 600 (Kamal Khan)",
      note: "카말 칸이 소더비에서 빠져나갈 때 타는 차입니다.",
      popularity: "경매 뒤의 악당 이동입니다.",
    },
    {
      nameKo: "오스틴 FX4 택시",
      nameEn: "Austin FX4 taxi",
      note: "스미더스가 소더비에서 카말을 미행할 때 쓰는 런던 택시입니다.",
      popularity: "본부의 짧은 미행 차로 남습니다.",
    },
    {
      nameKo: "레인지로버 클래식 컨버터블",
      nameEn: "Range Rover Classic convertible",
      note: "아크로스타 제트가 든 마차를 끄는 차입니다.",
      popularity: "미니제트 입구의 견인입니다.",
    },
    {
      nameKo: "아크로스타 미니제트",
      nameEn: "Bede BD-5J Acrostar",
      note: "격납고에서 이륙하는 Q의 초소형 제트입니다. 본드가 격납고 문을 아슬아슬하게 빠져나갑니다.",
      popularity: "프리크레딧의 공중 개그로 남습니다.",
    },
    {
      nameKo: "윌리스 MB",
      nameEn: "Willys MB",
      note: "카말 측이 시체를 나르다 산 본드를 함께 버리는 지프입니다.",
      popularity: "시체 더미 탈출의 차로 한 번 보면 남습니다.",
    },
  ]),
  "a-view-to-a-kill": pack("a-view-to-a-kill", "A View to a Kill", [
    {
      nameKo: "르노 11 택시",
      nameEn: "Renault 11 taxi",
      note: "파리에서 본드가 가로채 에펠탑 쪽으로 달립니다. 계단과 버스 지붕을 탑니다.",
      popularity: "조린 추격의 육상 입구입니다.",
    },
    {
      nameKo: "롤스-로이스 실버 클라우드 II",
      nameEn: "Rolls-Royce Silver Cloud II",
      note: "고드프리 티벳의 차입니다. 메이데이와 조린이 본드와 시신을 태워 호수에 밀어 넣습니다.",
      popularity: "익사 직전의 고급차로 기억됩니다.",
    },
    {
      nameKo: "지프 체로키",
      nameEn: "Jeep Cherokee (XJ)",
      note: "스테이시 서튼이 집으로 몰고 가는 차입니다.",
      popularity: "샌프란시스코 조의 현장 SUV입니다.",
    },
    {
      nameKo: "시보레 콜벳 C4",
      nameEn: "Chevrolet Corvette C4",
      note: "폴라 이바노바가 타는 차입니다.",
      popularity: "소련 측 여성의 짧은 미국차입니다.",
    },
    {
      nameKo: "레인지로버 클래식 (조린)",
      nameEn: "Range Rover Classic (Zorin)",
      note: "조린 부하가 프랑스에서 쓰는 5도어입니다.",
      popularity: "광산 음모의 육상 편성입니다.",
    },
    {
      nameKo: "아메리칸 라프랑스 사다리차",
      nameEn: "American LaFrance ladder truck",
      note: "샌프란시스코에서 본드와 스테이시가 시가지를 가로지르다 마주치는 소방차입니다.",
      popularity: "도심 추격의 장애물로 인용됩니다.",
    },
  ]),
  "the-living-daylights": pack("the-living-daylights", "The Living Daylights", [
    {
      nameKo: "아우디 200 콰트로",
      nameEn: "Audi 200 quattro",
      note: "코스코프 망명 구간과 오스트리아 국경에서 쓰인 세단입니다. 첼로 케이스 활강은 애스턴 V8 쪽이고, 허브의 밴티지가 본드카입니다.",
      popularity: "달튼 첫 편의 두 번째 차로 자주 적힙니다.",
    },
    {
      nameKo: "아우디 200 콰트로 아반트",
      nameEn: "Audi 200 quattro Avant",
      note: "같은 콰트로의 왜건입니다. 모로코 번호판이 붙어 영국 정보 쪽으로 움직입니다.",
      popularity: "세단과 짝을 이루는 현장 왜건입니다.",
    },
    {
      nameKo: "바즈-2106",
      nameEn: "VAZ-2106",
      note: "체코슬로바키아 경찰이 애스턴을 쫓다 레이저에 잘리는 차입니다.",
      popularity: "V8 가젯의 상대 동구권 세단입니다.",
    },
    {
      nameKo: "랜드로버 시리즈 III",
      nameEn: "Land Rover Series III",
      note: "지브롤터 프리크레딧에서 SAS 차가 절벽 아래로 떨어집니다.",
      popularity: "달튼 개막의 폭발 컷입니다.",
    },
    {
      nameKo: "GMC 밴두라 구급차",
      nameEn: "GMC Vandura ambulance",
      note: "네크로스가 탕헤르 공항에서 코스코프를 빼낼 때 모는 구급차입니다.",
      popularity: "납치 위장의 육상입니다.",
    },
    {
      nameKo: "랜드로버 경량 (탈출)",
      nameEn: "Land Rover 90 Lightweight",
      note: "본드와 카라가 C-130에서 빠져나올 때 쓰는 장갑 랜드로버입니다.",
      popularity: "수송기 추락 직전의 험지 차입니다.",
    },
  ]),
  "licence-to-kill": pack("licence-to-kill", "Licence to Kill", [
    {
      nameKo: "켄워스 탱크 트럭",
      nameEn: "Kenworth W900B tanker",
      note: "산체스의 마약이 실린 탱커를 본드가 절벽에서 다룹니다. 위키는 W900B로 적습니다.",
      popularity: "유조선 결전의 육상 버전으로 읽힙니다.",
    },
    {
      nameKo: "마세라티 비터보",
      nameEn: "Maserati Biturbo 425i",
      note: "산체스가 탱커 추격 중 몰다 버리는 세단입니다.",
      popularity: "결전 도로의 악당 차입니다.",
    },
    {
      nameKo: "지프 CJ-7",
      nameEn: "Jeep CJ-7",
      note: "페레즈가 스팅어 미사일을 탱커에 쏘는 지프입니다.",
      popularity: "결전의 화력 플랫폼입니다.",
    },
    {
      nameKo: "롤스-로이스 실버 섀도 II",
      nameEn: "Rolls-Royce Silver Shadow II",
      note: "이스머스 시티에서 Q가 본드의 기사로 위장해 모는 차입니다.",
      popularity: "Q의 현장 위장 차로 남습니다.",
    },
    {
      nameKo: "링컨 마크 VII",
      nameEn: "Lincoln Mark VII LSC",
      note: "본드가 마이애미에서 빌리는 쿠페입니다.",
      popularity: "복수극 입구의 렌터입니다.",
    },
    {
      nameKo: "M5A1 스튜어트 전차",
      nameEn: "M5A1 Stuart tank",
      note: "산체스 측이 중국계 은신처를 습격할 때 쓰는 경전차입니다. 본드가 갇혀 있던 곳입니다.",
      popularity: "이스머스 결전 앞의 육상 병기입니다.",
    },
  ]),
  goldeneye: pack("goldeneye", "GoldenEye", [
    {
      nameKo: "페라리 F355 GTS",
      nameEn: "Ferrari F355 GTS",
      note: "크세니아가 몬테카를로로 가는 산길에서 모는 빨간 페라리입니다. 촬영은 프랑스 토랑 일대입니다. DB5와 부딪힙니다.",
      popularity: "90년대 악당 차의 얼굴입니다.",
      sources: [
        filmPage("goldeneye", "GoldenEye"),
        {
          label: "007.com — Aston Martin DB5",
          href: "https://www.007.com/the-vehicles/aston-martin-db5/",
        },
      ],
    },
    {
      nameKo: "T-55 전차",
      nameEn: "T-55 tank",
      note: "상트페테르부르크 시내를 본드가 전차로 가로지릅니다. 오루모프의 GAZ를 쫓습니다.",
      popularity: "브로스넌 첫 편의 대형 추격입니다.",
    },
    {
      nameKo: "GAZ-31029",
      nameEn: "GAZ-31029",
      note: "오루모프가 전차 추격에서 타는 러시아 세단입니다.",
      popularity: "탱크 추격의 도망 차입니다.",
    },
    {
      nameKo: "자즈-965",
      nameEn: "ZAZ-965",
      note: "잭 웨이드가 공항에서 주코프스키의 건물까지 본드를 태우는 소형차입니다.",
      popularity: "CIA 조의 초라한 현장 차로 남습니다.",
    },
    {
      nameKo: "바즈-2106 경찰차",
      nameEn: "VAZ-2106 police car",
      note: "전차를 쫓다 시내에서 부서지는 상트페테르부르크 경찰차입니다.",
      popularity: "탱크 추격의 피해 편성입니다.",
    },
  ]),
  "tomorrow-never-dies": pack("tomorrow-never-dies", "Tomorrow Never Dies", [
    {
      nameKo: "BMW R1200",
      nameEn: "BMW R1200C motorcycle",
      note: "호치민 옥상에서 웨이 린과 함께 탄 바이크입니다. 원격 750iL은 본드카라 여기 적지 않습니다.",
      popularity: "가젯 세단 다음의 현장 이동으로 남습니다.",
    },
    {
      nameKo: "오펠 세나토르",
      nameEn: "Opel Senator",
      note: "카버 부하의 차로, 주차장에서 750iL의 로켓에 터집니다.",
      popularity: "원격 세단 추격의 희생 차입니다.",
    },
    {
      nameKo: "레인지로버 P38A",
      nameEn: "Range Rover P38A",
      note: "카버 측이 사이공 거리에서 본드를 쫓는 SUV입니다.",
      popularity: "옥상 바이크 앞의 육상 추격입니다.",
    },
    {
      nameKo: "지프 체로키 (웨이 린)",
      nameEn: "Jeep Cherokee (Wai Lin)",
      note: "웨이 린의 은신처 앞에 놓인 우핸들 체로키입니다.",
      popularity: "현장 요원의 짧은 SUV입니다.",
    },
    {
      nameKo: "애스턴 마틴 DB5 (옥스퍼드)",
      nameEn: "Aston Martin DB5 (Oxford cameo)",
      note: "본드가 옥스퍼드 뉴 칼리지 앞을 지날 때 보이는 카메오입니다. 이 편의 본드카는 750iL입니다.",
      popularity: "가젯 세단 시대에 원점을 한 컷 호출합니다.",
      carSlug: "aston-martin-db5",
    },
    {
      nameKo: "포드 스콜피오",
      nameEn: "Ford Scorpio",
      note: "카버 부하가 사이공과 주차장 추격에서 쓰는 세단입니다.",
      popularity: "원격 750iL 구간의 상대 편성입니다.",
    },
  ]),
  "the-world-is-not-enough": pack(
    "the-world-is-not-enough",
    "The World Is Not Enough",
    [
      {
        nameKo: "롤스-로이스 실버 섀도",
        nameEn: "Rolls-Royce Silver Shadow II",
        note: "발렌틴 주코프스키의 차입니다. 잘리는 BMW Z8은 이 편의 본드카라 허브 밖 목록에서 뺍니다.",
        popularity: "카스피 조의 이동으로 짧게 남습니다.",
      },
      {
        nameKo: "VAZ-2121 니바",
        nameEn: "VAZ-2121",
        note: "다비도프를 처리한 뒤 본드가 레나르드 작전에 잠입할 때 모는 러시아 SUV입니다.",
        popularity: "잠입의 현지 차입니다.",
      },
      {
        nameKo: "파라호크",
        nameEn: "Parahawk",
        note: "패러모터와 스노모빌을 붙인 추격 장비입니다. 본드가 산악에서 맞닥뜨립니다. BMW Z8은 이 편의 본드카라 허브 밖 목록에서 뺍니다.",
        popularity: "브로스넌 중반의 기이한 육상 병기입니다.",
      },
      {
        nameKo: "Q 보트",
        nameEn: "Q-boat",
        note: "템스강에서 암살조 선박을 쫓는 Q의 은퇴용 레저 보트입니다. 어뢰와 수류탄이 달립니다.",
        popularity: "이 편의 런던 개막을 여는 수상 추격입니다.",
      },
      {
        nameKo: "톱날 헬기",
        nameEn: "Buzz-saw helicopter",
        note: "킹 인더스트리의 개조 유로콥터입니다. 파이프라인 구간에서 본드를 노립니다.",
        popularity: "이 편의 산악 위협으로 자주 클립됩니다.",
      },
    ],
  ),
  "die-another-day": pack("die-another-day", "Die Another Day", [
    {
      nameKo: "포드 선더버드",
      nameEn: "Ford Thunderbird",
      note: "징크스가 쿠바에서 모는 차입니다. 이 편의 본드카는 밴퀴시입니다.",
      popularity: "아이스 팰리스 밖의 미국차 컷입니다.",
    },
    {
      nameKo: "포드 페어레인 (쿠바)",
      nameEn: "Ford Fairlane (Cuba)",
      note: "본드가 쿠바에서 짧게 모는 차입니다. 썬더볼의 리페 페어레인을 호출합니다.",
      popularity: "코너리 수중편의 육상 오마주입니다.",
    },
    {
      nameKo: "페라리 F355",
      nameEn: "Ferrari F355 Berlinetta",
      note: "문 대령의 수집차입니다. 그레이브스 비행기에서 떨어져 논에 꽂힙니다.",
      popularity: "과잉 수집의 한 대입니다.",
    },
    {
      nameKo: "오스프레이 호버크래프트",
      nameEn: "Osprey 5 hovercraft",
      note: "문 대령이 비무장지대에서 달아날 때 본드가 가로채는 호버크래프트입니다.",
      popularity: "브로스넌 마지막 편의 개막 추격입니다.",
    },
    {
      nameKo: "레인지로버 L322",
      nameEn: "Range Rover L322",
      note: "그레이브스 부하가 여러 대 운용하는 SUV입니다.",
      popularity: "아이스 팰리스의 육상 편성입니다.",
    },
    {
      nameKo: "람보르기니 디아블로",
      nameEn: "Lamborghini Diablo",
      note: "문 대령 수집차 중 하나로, 비행기에서 함께 떨어집니다.",
      popularity: "수집 과잉을 한 컷에 보여 줍니다.",
    },
    {
      nameKo: "재규어 XKR",
      nameEn: "Jaguar XKR",
      note: "자오가 아이스 팰리스에서 모는 악당 차입니다. 허브의 재규어 페이지와 얼굴을 나눕니다. 밴퀴시는 이 편의 본드카입니다.",
      popularity: "얼음 위 추격의 상대 차로 남습니다.",
      carSlug: "jaguar-xkr",
    },
  ]),
  "casino-royale-2006": pack("casino-royale", "Casino Royale", [
    {
      nameKo: "포드 몬데오",
      nameEn: "Ford Mondeo 2.5 ST",
      note: "바하마에서 본드가 처음 빌리는 평범한 세단입니다.",
      popularity: "리부트가 아이콘 차 없이 시작하는 증거로 읽힙니다.",
    },
    {
      nameKo: "공항 급유차",
      nameEn: "International 4900 fuel tanker",
      note: "카를로스가 스카이플릿 폭파에 쓰려다 본드가 가로채 활주로를 달리는 트럭입니다.",
      popularity: "크레이그 첫 편의 육상 절정 중 하나입니다.",
    },
    {
      nameKo: "재규어 XJ8",
      nameEn: "Jaguar XJ8",
      note: "르 시프르가 베스퍼를 옮기는 악당 세단입니다. 미스터 화이트도 비슷한 XJ를 탑니다.",
      popularity: "포커장 밖의 악당 차로 남습니다.",
    },
    {
      nameKo: "뉴 홀랜드 트랙터",
      nameEn: "New Holland tractor",
      note: "마다가스카르 공사현장에서 본드가 몰라카를 쫓으며 훔치는 로더입니다.",
      popularity: "공원 추격의 현장 장비입니다.",
    },
    {
      nameKo: "레인지로버 스포츠 (방해)",
      nameEn: "Range Rover Sport (distraction)",
      note: "본드가 호텔 주차장에서 일부러 들이받아 주의를 끄는 SUV입니다.",
      popularity: "위장의 소품 차입니다.",
    },
    {
      nameKo: "애스턴 마틴 DB5 (포커)",
      nameEn: "Aston Martin DB5 (poker prize)",
      note: "바하마 도박에서 본드가 악당에게서 따내는 차입니다. 가젯은 없고, 허브의 DB5와 얼굴을 나눕니다. DBS가 이 편의 본드카입니다.",
      popularity: "리부트가 원점을 상으로 호출한 컷입니다.",
      carSlug: "aston-martin-db5",
    },
    {
      nameKo: "포드 크라운 빅토리아 경찰차",
      nameEn: "Ford Crown Victoria Police Interceptor",
      note: "마이애미 활주로에서 급유차를 쫓는 경찰차입니다. 본드가 공항 추격을 벌입니다.",
      popularity: "리부트 첫 편의 미국 추격 편성입니다.",
    },
  ]),
  "quantum-of-solace": pack("quantum-of-solace", "Quantum of Solace", [
    {
      nameKo: "알파 로메오 159",
      nameEn: "Alfa Romeo 159",
      note: "가르다 호에서 시에나까지 본드의 DBS를 쫓는 차입니다. DBS는 허브의 본드카입니다.",
      popularity: "리부트 두 번째의 개막 추격입니다.",
    },
    {
      nameKo: "알파 로메오 156",
      nameEn: "Alfa Romeo 156",
      note: "미첼을 쏜 뒤 본드가 지나갈 때 경적을 울리는 카라비니에리 차입니다.",
      popularity: "시에나 지붕 전의 경찰 차입니다.",
    },
    {
      nameKo: "포드 카",
      nameEn: "Ford Ka",
      note: "카밀이 호텔에서 본드를 태우는 수소 연료전지 모델입니다.",
      popularity: "현장의 짧은 동행 차입니다.",
    },
    {
      nameKo: "포드 엣지",
      nameEn: "Ford Edge",
      note: "그린이 쓰다 본드가 이어 받는 SUV입니다. 촬영은 수소 모델입니다.",
      popularity: "볼리비아 구간의 현장 SUV입니다.",
    },
    {
      nameKo: "폭스바겐 비틀 (카밀)",
      nameEn: "Volkswagen Beetle (Camille)",
      note: "볼리비아에서 카밀이 본드를 태우는 비틀입니다.",
      popularity: "사막 앞의 소형 이동입니다.",
    },
    {
      nameKo: "다임러 슈퍼 V8",
      nameEn: "Daimler Super V8",
      note: "그린이 공항에서 스펙터 계열 회의로 가는 차입니다. 옥상에서 떨어진 요원이 이 차 위에 떨어집니다.",
      popularity: "개막 추격의 도착점입니다.",
    },
    {
      nameKo: "랜드로버 디펜더 90",
      nameEn: "Land Rover Defender 90",
      note: "카라비니에리가 개막 추격에 쓰다 뒤집히는 차입니다.",
      popularity: "시에나 도로의 험지 차입니다.",
      carSlug: "land-rover-defender",
    },
  ]),
  skyfall: pack("skyfall", "Skyfall", [
    {
      nameKo: "아우디 A5",
      nameEn: "Audi A5",
      note: "패트릭이 이스탄불 오프닝에서 몰다 뒤집히는 차입니다. 이후 오토바이로 이어집니다.",
      popularity: "50주년 개막 추격의 첫 차입니다.",
    },
    {
      nameKo: "혼다 CRF 250L",
      nameEn: "Honda CRF 250L",
      note: "이스탄불에서 패트릭과 본드가 시장과 지붕을 넘는 바이크입니다.",
      popularity: "오프닝 추격의 이륜 아이콘입니다.",
    },
    {
      nameKo: "재규어 XJ",
      nameEn: "Jaguar XJ (X351)",
      note: "M의 관용 세단입니다. 런던 청문회와 지하 본부 구간을 잇고, 마지막엔 본드가 직접 뭅니다.",
      popularity: "기관의 차로 이 편의 수도를 보여 줍니다.",
    },
    {
      nameKo: "랜드로버 디펜더",
      nameEn: "Land Rover Defender",
      note: "이스탄불 오프닝에서 이브가 운전하고, 스코틀랜드 저택으로도 이어집니다. DB5가 결전을 맡습니다.",
      popularity: "스카이폴의 험지 입구 차로 인용됩니다.",
      carSlug: "land-rover-defender",
    },
    {
      nameKo: "랜드로버 디스커버리 4",
      nameEn: "Land Rover Discovery 4",
      note: "실바가 경찰로 위장해 청문회로 들어가다 탈출에 쓰는 SUV입니다.",
      popularity: "도심 탈출의 차입니다.",
    },
    {
      nameKo: "굴착기",
      nameEn: "Excavator",
      note: "본드가 열차 위에서 다루는 굴착기입니다. 실바가 도심으로 들어오는 터널 구간과 맞닿습니다.",
      popularity: "지하철 추격의 현장 장비로 남습니다.",
    },
  ]),
  spectre: pack("spectre", "Spectre", [
    {
      nameKo: "재규어 C-X75",
      nameEn: "Jaguar C-X75",
      note: "힌스가 로마에서 DB10을 쫓는 프로토타입입니다. DB10은 허브의 본드카입니다.",
      popularity: "로마 야간 추격의 악당 차로 남습니다.",
    },
    {
      nameKo: "레인지로버 스포츠",
      nameEn: "Range Rover Sport",
      note: "같은 로마 추격과 마들렌 납치 구간의 두 번째 악당 차입니다.",
      popularity: "야간 로마의 육상 편성입니다.",
    },
    {
      nameKo: "랜드로버 디펜더 빅풋",
      nameEn: "Land Rover Defender Bigfoot",
      note: "힌스 일당이 마들렌을 납치할 때 쓰는 개조 디펜더입니다.",
      popularity: "알프스 구간의 험지 차입니다.",
      carSlug: "land-rover-defender",
    },
    {
      nameKo: "재규어 XJ8 (M)",
      nameEn: "Jaguar XJ8 (M)",
      note: "M의 차로, 블로펠드 측 매복에 파괴됩니다.",
      popularity: "런던 구간의 기관 세단입니다.",
    },
    {
      nameKo: "롤스-로이스 실버 레이스 (블로펠드)",
      nameEn: "Rolls-Royce Silver Wraith (Blofeld)",
      note: "1948년 적흑 모델이 기차역에서 본드와 마들렌을 데리러 옵니다.",
      popularity: "사막 본부 입구의 과시입니다.",
    },
    {
      nameKo: "토요타 하이럭스",
      nameEn: "Toyota Hilux",
      note: "M의 XJ8을 들이받아 본드를 붙잡는 매복 픽업입니다.",
      popularity: "런던 납치의 충돌 차입니다.",
    },
    {
      nameKo: "메르세데스 S클래스 (루시아)",
      nameEn: "Mercedes-Benz S-Class (Lucia)",
      note: "루시아 시아라가 로마 저택에 도착할 때 보이는 차입니다.",
      popularity: "과부 구간의 짧은 고급차입니다.",
    },
    {
      nameKo: "인터내셔널 4700 트럭",
      nameEn: "International 4700",
      note: "런던 매복 뒤 본드를 블로펠드 앞으로 옮기는 스펙터 트럭입니다.",
      popularity: "납치 구간의 육상입니다.",
    },
  ]),
  "no-time-to-die": pack("no-time-to-die", "No Time to Die", [
    {
      nameKo: "랜드로버 디펜더",
      nameEn: "Land Rover Defender (L663)",
      note: "노르웨이에서 로건 애시의 무리가 추격에 쓰는 험지 차입니다. 마테라 쪽은 DB5가 맡습니다.",
      popularity: "가족 구간 추격의 차로 남습니다.",
      carSlug: "land-rover-defender",
    },
    {
      nameKo: "토요타 랜드크루저 프라도",
      nameEn: "Toyota Land Cruiser Prado",
      note: "마들렌의 SUV입니다. 노르웨이 숲 가옥에서 빠져나올 때 본드가 운전합니다.",
      popularity: "결전 애스턴 밖의 현장 이동입니다.",
    },
    {
      nameKo: "트라이엄프 스크램블러 1200",
      nameEn: "Triumph Scrambler 1200",
      note: "마테라에서 프리모 일당이 본드를 쫓는 바이크입니다. 본드가 한 대를 빼앗습니다.",
      popularity: "석조 골목 추격의 이륜입니다.",
    },
    {
      nameKo: "시보레 벨 에어 (팔로마)",
      nameEn: "Chevrolet Bel Air (Paloma)",
      note: "쿠바에서 스펙터 요원이 본드를 치려다 팔로마가 가로채는 1957년 벨 에어입니다. 닥터 노의 첫 운전과 얼굴을 나눕니다.",
      popularity: "리부트 마지막이 시리즈 첫 차를 호출한 컷입니다.",
    },
    {
      nameKo: "마세라티 콰트로포르테",
      nameEn: "Maserati Quattroporte",
      note: "마테라에서 스펙터 요원이 본드를 들이받는 세단입니다.",
      popularity: "DB5 결전 앞의 충돌입니다.",
    },
    {
      nameKo: "란치아 테시스",
      nameEn: "Lancia Thesis",
      note: "마테라 추격의 스펙터 차입니다. DB5의 클러스터 폭탄에 한 대가 터집니다.",
      popularity: "골목 추격의 상대 편성입니다.",
    },
    {
      nameKo: "토요타 코롤라 (펠릭스)",
      nameEn: "Toyota Corolla (Felix)",
      note: "펠릭스가 자메이카에서 은퇴한 본드를 설득하러 올 때 타는 차입니다.",
      popularity: "호출의 소박한 현장 차입니다.",
    },
    {
      nameKo: "랜드로버 시리즈 III (자메이카)",
      nameEn: "Land Rover Series III (Jamaica)",
      note: "은퇴 구간의 본드가 자메이카에서 쓰는 올드 랜드로버입니다. 발할라와 DBS 슈퍼레제라는 이 편의 본드카라 여기 적지 않습니다.",
      popularity: "현역을 떠난 사람의 험지 차입니다.",
      carSlug: "land-rover-defender",
    },
    {
      nameKo: "트라이엄프 타이거 900",
      nameEn: "Triumph Tiger 900",
      note: "마테라에서 스펙터·사핀 측이 스크램블러와 함께 본드를 쫓는 바이크입니다.",
      popularity: "석조 골목 추격의 두 번째 이륜입니다.",
    },
  ]),
  "never-say-never-again": [
    {
      nameKo: "야마하 XJ650 터보",
      nameEn: "Yamaha XJ650 Turbo Seca",
      note: "Q가 본드에게 보내는 터보 바이크입니다. 야마하가 만든 유일한 터보 양산 바이크입니다. 공식 25의 본드카 허브와는 별도입니다.",
      popularity: "에온 밖 코너리 편의 가젯 이륜입니다.",
      sources: [WIKI_VEHICLES],
    },
  ],
  // Casino Royale (1967): Wikipedia film-cars tables have no section; do not invent.
};

export function otherVehiclesForFilm(filmSlug: string): OtherVehicle[] {
  return other[filmSlug] ?? [];
}

export type OtherVehicleListing = OtherVehicle & { filmSlug: string };

export function allOtherVehicles(): OtherVehicleListing[] {
  return Object.entries(other).flatMap(([filmSlug, vehicles]) =>
    vehicles.map((vehicle) => ({ ...vehicle, filmSlug })),
  );
}
