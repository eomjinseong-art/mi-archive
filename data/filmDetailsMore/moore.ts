import type { FilmDetail } from "@/data/filmDetails";

export const mooreDetails: Record<string, FilmDetail> = {
  "live-and-let-die": {
    slug: "live-and-let-die",
    runtime: "121분",
    director: "가이 해밀턴 (Guy Hamilton)",
    krRelease: "1974년 (일자 미상)",
    oneLiner:
      "세 요원이 같은 날 죽고, 본드는 타로와 헤로인과 늪의 보트를 따라간다.",
    spoilerWarning:
      "카낭가의 정체와 솔리테어의 힘, 결말의 팽창 개그는 스포일러입니다.",
    plot: [
      "뉴욕, 뉴올리언스, 산 모니크에서 영국 요원 셋이 같은 날 죽는다. M은 본드를 그 공백을 메우라고 보낸다. 할렘의 장례 행렬이 암살이 되고, 얼굴은 갱스터 미스터 빅과 카리브 대통령 카낭가로 갈라져 보인다.",
      "본드는 타로를 읽는 솔리테어를 만난다. 산 모니크의 로지 카버는 이중 스파이로 드러나고, 펠릭스 라이터가 뉴올리언스에서 합류한다. 카낭가의 식당 체인 필레 오브 소울은 헤로인을 숨기는 위장이다.",
      "미스터 빅과 카낭가는 한 몸이다. 공짜 헤로인으로 경쟁자를 말리고 시장을 독점하려는 계산이다. 본드는 악어 농장의 등을 징검다리 삼아 건너고, 루이지애나 늪에서 보트 추격이 이어진다.",
      "산 모니크 지하에서 카낭가는 상어 총의 압축 펠릿을 삼키고 부풀어 터진다. 본드는 솔리테어와 함께 섬을 떠난다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "로저 무어의 첫 공식 본드. 주먹은 짧게, 눈썹과 한 줄이 더 길게 남는다. 배우 상세가 열려 있으니 그쪽으로 이어 읽으면 된다.",
      },
      {
        slug: "solitaire",
        nameKo: "솔리테어",
        nameEn: "Solitaire",
        role: "본드걸",
        note: "제인 시모어. 타로로 미래를 읽는 카낭가의 점술사. 힘의 조건이 신체에 묶여 있어, 연출 자체에 주석이 필요하다.",
      },
      {
        nameKo: "카낭가 / 미스터 빅",
        nameEn: "Kananga / Mr. Big",
        role: "적대자",
        note: "야펫 코토. 섬의 대통령과 할렘의 갱스터가 한 얼굴이다. 헤로인 독점의 계산가.",
      },
      {
        nameKo: "티 히",
        nameEn: "Tee Hee",
        role: "경호",
        note: "줄리어스 해리스. 의수 집게로 말하는 경호. 악어 농장의 다리와 열차 칸의 결투가 캐릭터의 전부다.",
      },
      {
        nameKo: "셰리프 J.W. 페퍼",
        nameEn: "Sheriff J.W. Pepper",
        role: "현지 치안",
        note: "클리프턴 제임스. 루이지애나 보안관. 본드를 재난으로 오해하는 확성기가, 다음 편 방콕까지 이어진다.",
      },
      {
        slug: "rosie-carver",
        nameKo: "로지 카버",
        nameEn: "Rosie Carver",
        role: "이중 스파이",
        note: "글로리아 헨드리. 공식 시리즈가 본드와 잠자리를 공유하는 첫 흑인 여성으로 자주 적힌다. 배신의 대가는 짧고 가혹하다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. 자기장 손목시계 브리핑이 짧게 스친다. 이 편의 현장은 Q 실험실보다 늪이 더 크다.",
      },
    ],
    cars: {
      density: "thin",
      title: "보트와 버스, 스치는 미니 모크",
      body: "이 작품의 이동 수단은 은색 쿠페가 아니다. 뉴올리언스 습지의 글래스트론 보트, 산 모니크에서 기울어지는 이층 버스, 그리고 섬 도로를 스치는 미니 모크 정도가 화면을 채운다. 공식 사이트의 차량 칸도 캐딜락과 스피드보트를 앞에 두고, 미니를 아이콘으로 부르지 않는다. 영국 소형—특히 미니 계열—의 결을 보고 싶다면 목록에서 이어갈 수 있다. 다만 본드카 칸은 의도적으로 얇다. 배경의 모크를 허브 차량으로 키우면 과잉이다.",
      carSlugs: ["mini-bond"],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "공식 시놉시스와 차량 목록의 주역은 보트·버스·현지 미국차다. 애스턴 계열의 가젯 GT는 등장하지 않는다.",
        },
        {
          label: "팬 설",
          text: "산 모니크의 미니 모크를 무어 첫 본드카로 세자는 이야기가 있다. 화면의 영국 소형인 것은 맞지만, 요원의 연장으로 보기에는 무리가 있다.",
        },
      ],
      ctaPath: "/cars",
      ctaLabel: "본드카 목록으로",
    },
    quotes: [
      {
        speaker: "미스터 빅",
        textKo: "이름은 묘비에나 쓰는 거야, 베이비.",
        textEn: "Names is for tombstones, baby.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo:
          "걱정 마. 모자일 뿐이야. 머리 작은 사람이 닭과 싸워 진 흔적이지.",
        textEn:
          "Don't worry darling, it's just a hat, belonging to a small-headed man of limited means, who lost a fight with a chicken.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo: "원래 자기 평가가 과하게 부풀던 사람이었지.",
        textEn: "Well he always did have an over-inflated opinion of himself.",
        spoiler: true,
      },
      {
        speaker: "셰리프 J.W. 페퍼",
        textKo: "비밀 요원? 어느 편이지?",
        textEn: "Secret AGENT? On WHOSE side?",
        spoiler: false,
      },
    ],
    trailerYoutubeId: "KTzsm9-XWQo",
    issuesTeaser:
      "할렘과 부두, 흑인 전형의 프레이밍은 무어 시기 재평가의 입구다. 본드걸을 다시 읽기 글과 겹치는 질문을 그 글에 열어 두었다.",
    sources: [
      {
        label: "007.com — Live and Let Die",
        href: "https://www.007.com/the-films/live-and-let-die/",
      },
      {
        label: "IMDb — Live and Let Die (1973)",
        href: "https://www.imdb.com/title/tt0070328/",
      },
      {
        label: "Wikipedia — Live and Let Die (film)",
        href: "https://en.wikipedia.org/wiki/Live_and_Let_Die_(film)",
      },
      {
        label: "씨네21 — 007 죽느냐 사느냐",
        href: "https://cine21.com/movie/info/?movie_id=4006",
      },
      {
        label: "Wikiquote — Live and Let Die (film)",
        href: "https://en.wikiquote.org/wiki/Live_and_Let_Die_(film)",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 시리즈 8편, 로저 무어의 첫 007. 영국 프리미어는 007.com이 1973년 7월 6일 오데온 레스터 스퀘어로 적는다.",
      },
      {
        n: 2,
        text: "차량의 주역은 글래스트론 보트와 이층 버스다. 미니 모크는 섬의 배경이며, 허브 아이콘으로 키우지 않는다.",
      },
      {
        n: 3,
        text: "한국 개봉은 1974년으로 적는 기록이 있으나 일자가 비어 있다. 씨네21은 121분과 제작 연도 1973을 적되, 이 편집에서 일자 단위 KMDb 항은 따로 고정하지 못했다.",
      },
      {
        n: 4,
        text: "예고편 임베드는 Rotten Tomatoes Classic Trailers의 Official Trailer(KTzsm9-XWQo)를 쓴다. oembed로 채널을 확인했다.",
      },
      {
        n: 5,
        text: "악어 점프 다섯 번의 기록은 007.com 트리비아(로스 카낭가)를 따른다. 줄거리 문장은 백과 원문을 옮기지 않았다.",
      },
    ],
    related: [
      { href: "/films/diamonds-are-forever", label: "이전 · 다이아몬드는 영원히" },
      {
        href: "/films/the-man-with-the-golden-gun",
        label: "다음 · 황금총을 가진 사나이",
      },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars", label: "본드카 목록" },
    ],
  },

  "the-man-with-the-golden-gun": {
    slug: "the-man-with-the-golden-gun",
    runtime: "125분",
    director: "가이 해밀턴 (Guy Hamilton)",
    krRelease: "1975년 (일자 미상)",
    oneLiner:
      "황금 총알 한 발이 본드를 지명하고, 결투의 섬에서 한 발을 겨룬다.",
    spoilerWarning:
      "하이 팻의 최후와 스카라망가의 결투, 솔렉스의 행방은 스포일러입니다.",
    plot: [
      "007이 적힌 황금 총알이 런던에 도착한다. 암살자 프란시스코 스카라망가는 한 건에 백만 달러를 받고, 그 총알은 본드에 대한 지명으로 읽힌다. M은 에너지 위기의 솔렉스 장치를 찾던 임무를 접고 본드를 보호하려 하지만, 본드는 그 보호를 거절한다.",
      "자취는 베이루트에서 마카오의 총기 장인 라자르로, 다시 홍콩의 안드레아 앤더스로 이어진다. 그녀는 스카라망가의 정부이자 밀수 창구다. 홍콩의 가짜 죽음과 해저 정비창을 지나, 방콕의 산업가 하이 팻이 솔렉스를 쥐려다 암살자에게 이사회를 빼앗긴다.",
        "동료 요원 메리 굿나잇이 합류하고, 닉 낵이 결투를 옆에서 지켜본다. 섬의 만찬이 결투의 계약이 된다. 황금총 한 발 대 월터 PPK 여섯 발.",
      "펀하우스 미로에서 본드는 자신의 밀랍 상을 방패로 쓰고 스카라망가를 쓰러뜨린다. 굿나잇이 밀어 넣은 보트가 솔라 장치를 과열시키고, 두 사람은 정크선으로 섬을 떠난다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "지명된 표적이 되어 암살자를 거꾸로 추적한다. 만찬 테이블의 거절이 캐릭터의 선이다.",
      },
      {
        nameKo: "프란시스코 스카라망가",
        nameEn: "Francisco Scaramanga",
        role: "적대자",
        note: "크리스토퍼 리. 황금총의 암살자. 서커스에서 자란 유년과 결투의 미학이 악당을 설명한다.",
      },
      {
        slug: "mary-goodnight",
        nameKo: "메리 굿나잇",
        nameEn: "Mary Goodnight",
        role: "본드걸",
        note: "브릿 에클란드. MI6 연락. 플롯의 키보다 옷장과 실수가 더 길게 남아, 따로 주석이 달린다.",
      },
      {
        nameKo: "안드레아 앤더스",
        nameEn: "Andrea Anders",
        role: "본드걸",
        note: "모드 애덤스. 스카라망가의 정부이자 총알의 창구. 링 옆의 죽음이 잔상으로 남는다.",
      },
      {
        nameKo: "닉 낵",
        nameEn: "Nick Nack",
        role: "경호",
        note: "에르베 빌레셰즈. 땅콩 봉지 속의 권총, 결투장의 사회자, 엔딩의 잔당.",
      },
      {
        nameKo: "J.W. 페퍼",
        nameEn: "J.W. Pepper",
        role: "현지 치안",
        note: "클리프턴 제임스. 방콕 관광으로 복귀하는 루이지애나 보안관. 호넷 조수석의 확성기다.",
      },
      {
        nameKo: "하이 팻",
        nameEn: "Hai Fat",
        role: "산업가",
        note: "리처드 루. 솔렉스를 사려다 부하에게 이사회를 빼앗긴다. ‘사임’은 한 발이다.",
      },
    ],
    cars: {
      density: "thin",
      title: "호넷의 배럴 롤, 허브는 비워 둔다",
      body: "방콕 수로를 가르는 AMC 호넷의 나선형 점프는 이 편의 가장 유명한 주행이다. 007.com은 스티어링을 중앙으로 옮긴 스턴트 차량과, 로렌 ‘범프스’ 윌러트의 원 테이크를 적는다. 스카라망가의 비행 마타도르는 차처럼 보이지만 날개 달린 소품이다. 둘 다 화면의 사건은 맞되, 차량 허브 슬롯은 비워 둔다. 호넷을 아이콘 페이지로 부풀리면 골드핑거의 DB5와 같은 무게를 허위로 얹게 된다. 본드카의 결은 목록에서 다른 영국차를 고르는 편이 정직하다.",
      carSlugs: [],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "호넷 배럴 롤과 비행 마타도르는 007.com 차량 칸에 올라 있다. 둘을 허브 아이콘으로 승격하지 않는다.",
        },
        {
          label: "제작진 인터뷰",
          text: "가이 해밀턴이 점프가 ‘너무 완벽해서’ 관객이 특촬로 의심할까 걱정했다는 제작 노트가 공식 사이트에 반복된다.",
        },
      ],
      ctaPath: "/cars",
      ctaLabel: "본드카 목록으로",
    },
    quotes: [
      {
        speaker: "제임스 본드",
        textKo:
          "내가 죽일 때는 정부의 구체적 명령이다. 그리고 내가 죽이는 자들은 그 자신이 살인자다.",
        textEn:
          "When I kill, it is on the specific orders of my government. And those I kill are themselves killers.",
        spoiler: false,
      },
      {
        speaker: "스카라망가",
        textKo: "거인들의 결투지. 내 황금총 대 자네의 월터 PPK.",
        textEn:
          "A duel between titans… my golden gun against your Walther PPK.",
        spoiler: true,
      },
      {
        speaker: "스카라망가",
        textKo: "난 한 발이면 충분해.",
        textEn: "I only need one.",
        spoiler: true,
      },
      {
        speaker: "스카라망가",
        textKo: "팻 씨는 방금 사임하셨어. 이제 회장은 나다.",
        textEn: "Mr. Fat has just resigned. I'm the new Chairman of the Board.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "gF5fr3Zhi7E",
    issuesTeaser:
      "굿나잇을 개그의 소품으로 두는 연출과, 정보를 비틀어 꺼내는 폭력은 현대 재시청의 논점이다. 본드걸을 다시 읽기 글이 그 자리를 적는다.",
    sources: [
      {
        label: "007.com — The Man with the Golden Gun",
        href: "https://www.007.com/the-films/the-man-with-the-golden-gun/",
      },
      {
        label: "IMDb — The Man with the Golden Gun (1974)",
        href: "https://www.imdb.com/title/tt0071807/",
      },
      {
        label: "Wikipedia — The Man with the Golden Gun (film)",
        href: "https://en.wikipedia.org/wiki/The_Man_with_the_Golden_Gun_(film)",
      },
      {
        label: "씨네21 — 007 황금총을 가진 사나이",
        href: "https://cine21.com/movie/info/?movie_id=4052",
      },
      {
        label: "Wikiquote — The Man with the Golden Gun (film)",
        href: "https://en.wikiquote.org/wiki/The_Man_with_the_Golden_Gun_(film)",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "이언 플레밍의 마지막 본드 장편을 각색한 공식 시리즈 9편. 해리 솔츠먼이 공동 제작으로 남는 마지막 작품이다.",
      },
      {
        n: 2,
        text: "호넷 배럴 롤은 화면의 사건이지 차량 허브가 아니다. 비행 마타도르 역시 차체 소품에 가깝다.",
      },
      {
        n: 3,
        text: "한국 개봉은 1975년으로 적는 기록이 있으나 일자가 비어 있다. 씨네21은 125분과 제작 연도 1974를 적는다.",
      },
      {
        n: 4,
        text: "예고편 임베드는 Rotten Tomatoes Classic Trailers의 Official Trailer(gF5fr3Zhi7E)를 쓴다.",
      },
      {
        n: 5,
        text: "황금총의 조립(담배갑·라이터·펜·커프스)은 007.com 가젯 목록을 따른다. 줄거리는 백과 원문을 옮기지 않았다.",
      },
    ],
    related: [
      { href: "/films/live-and-let-die", label: "이전 · 죽느냐 사느냐" },
      {
        href: "/films/the-spy-who-loved-me",
        label: "다음 · 나를 사랑한 스파이",
      },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars", label: "본드카 목록" },
    ],
  },

  "the-spy-who-loved-me": {
    slug: "the-spy-who-loved-me",
    runtime: "125분",
    director: "루이스 길버트 (Lewis Gilbert)",
    krRelease: "1978년 (일자 미상)",
    oneLiner:
      "영국과 소련이 같은 잠수함을 찾고, 에스프리가 도로에서 바다로 들어간다.",
    spoilerWarning:
      "아냐의 복수 선고와 리파루스·아틀란티스의 결말, 엔딩 한 줄은 스포일러입니다.",
    plot: [
      "영국과 소련의 핵 잠수함이 사라진다. 알프스에서 스키 점프를 마친 본드는 카이로에서 추적 시스템의 마이크로필름을 쫓다 KGB 소령 아냐 아마소바와 부딪친다. 사라진 배가 양쪽의 것이라, 두 기관은 한 팀이 된다.",
      "사르데냐에서 산업가 칼 스트롬버그가 얼굴을 내민다. 수중 도시 아틀란티스와 유조선 리파루스가 그의 무대다. 본드는 Q가 내준 로터스 에스프리로 부두를 지나 바다로 잠긴다.",
      "열차 칸에서 아냐는 복수를 선언한다. 알프스의 소련 요원은 그녀의 연인이었고, 본드는 그 죽음을 시인한다. 리파루스가 잠수함을 삼키고, 스트롬버그는 핵으로 지상을 지운 뒤 바다에서 다시 시작하려 한다.",
      "본드는 억류된 수병들을 무장시켜 유조선 내부를 뒤집는다. 스트롬버그는 아틀란티스에서 죽고, 아냐는 복수를 접은 채 본드와 남는다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "무어 시기의 정점에 가까운 여유. 스키와 에스프리, 그리고 열차 칸의 시인이 한 편에 들어 있다.",
      },
      {
        slug: "anya-amasova",
        nameKo: "아냐 아마소바",
        nameEn: "Anya Amasova",
        role: "본드걸",
        note: "바버라 바크. KGB 소령 트리플 X. 설계도를 훔친 동료이자, 임무가 끝나면 본드를 죽이겠다고 선언하는 상대.",
      },
      {
        nameKo: "칼 스트롬버그",
        nameEn: "Karl Stromberg",
        role: "적대자",
        note: "쿠르트 위르겐스. 지상을 지우고 바다에서 시작하려는 산업가. 상어 수조와 리파루스가 그의 말이지 대사가 아니다.",
      },
      {
        nameKo: "죠스",
        nameEn: "Jaws",
        role: "경호",
        note: "리처드 킬. 철니의 거구. 대사는 거의 없고, 피라미드의 밤과 열차·수중 추격이 캐릭터다. 다음 편에서 돌아온다.",
      },
      {
        nameKo: "나오미",
        nameEn: "Naomi",
        role: "추격",
        note: "캐럴라인 먼로. 스트롬버그의 헬기 조종. 에스프리의 미사일이 그녀의 하늘을 닫는다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. 에스프리 브리핑의 얼굴. 웻바이크를 포함해, 이 편의 물 가젯을 설명하는 창구다.",
      },
      {
        nameKo: "M",
        nameEn: "M",
        role: "국장",
        note: "버나드 리. 고골 장군과 나란히 앉아 협력을 명령한다. 엔딩의 탈출 포드에서 한 번 더 얼굴을 낸다.",
      },
    ],
    cars: {
      density: "thick",
      title: "로터스 에스프리 — 도로에서 바다로",
      body: "Q 브랜치가 내준 로터스 에스프리 S1은 사르데냐 도로의 쿠페로 보이다가 부두 끝에서 잠긴다. 수중의 미사일과 잉크, 기뢰, 그리고 육지의 시멘트 분사까지, 화면은 차를 요원의 연장으로 되돌린다. 공식 사이트는 이 변신을 Wet Nellie로 부르며 웻바이크를 별도 수상 장비로 열거한다. 바하마에서 찍은 수중 컷과 파인우드의 리파루스가 한 편의 물과 철을 나눈다. L2가 열려 있으니 변신과 웻바이크의 층은 그쪽으로 이어 읽는다. 가젯 대수를 한 숫자로 고정하는 홍보는 출처마다 갈리므로, 이 칸은 화면의 변신만 두껍게 적는다.",
      carSlugs: ["lotus-esprit"],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "에스프리가 바다로 들어가 잠수함처럼 기동한다는 점은 작품과 007.com 시놉시스·차량 칸이 일치한다. Wet Nellie라는 별칭도 공식 표기다.",
        },
        {
          label: "제작진 인터뷰",
          text: "수중 시퀀스를 바하마에서 찍었다는 기록과, 배핀 섬 유니언잭 낙하가 단 한 테이크였다는 설명이 007.com 트리비아에 올라 있다.",
        },
        {
          label: "팬 설",
          text: "후반의 웻바이크를 에스프리의 변신 최종형처럼 읽는 이야기가 있다. 공식 목록은 잠수 쿠페와 웻바이크를 따로 적는다.",
        },
        {
          label: "미확인",
          text: "주행용·수중용 에스프리가 몇 대인지, 뒤에 경매된 선체가 화면의 그 대인지는 출처마다 숫자가 갈린다.",
        },
      ],
      ctaPath: "/cars/lotus-esprit",
      ctaLabel: "로터스 에스프리 자세히",
    },
    quotes: [
      {
        speaker: "아냐 아마소바",
        textKo: "이 차의 설계도는 2년 전에 내가 훔쳤거든.",
        textEn: "I stole the blueprints to this car two years ago.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo:
          "우리 일에선 사람이 죽어, 아냐. 둘 다 알잖아. 그도 알았고. 그이거나 나거나였어. 질문의 답은 그렇다. 내가 죽였어.",
        textEn:
          "In our business, Anya, people get killed. We both know that. So did he. It was either him or me. The answer to the question is yes. I did kill him.",
        spoiler: true,
      },
      {
        speaker: "아냐 아마소바",
        textKo: "그럼 이 임무가 끝나면, 내가 당신을 죽이겠어.",
        textEn: "Then when this mission is over, I will kill you.",
        spoiler: true,
      },
      {
        speaker: "제임스 본드",
        textKo: "영국 쪽을 올리고 있는 중입니다, 국장님.",
        textEn: "Keeping the British end up, sir.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "UBxG_TJvYTg",
    issuesTeaser:
      "동등한 소련 요원으로 시작된 아냐가 엔딩의 침실 개그로 회수되는 방식은, 본드걸을 다시 읽기의 무어 항목이 된다.",
    sources: [
      {
        label: "007.com — The Spy Who Loved Me",
        href: "https://www.007.com/the-films/the-spy-who-loved-me/",
      },
      {
        label: "IMDb — The Spy Who Loved Me (1977)",
        href: "https://www.imdb.com/title/tt0076752/",
      },
      {
        label: "Wikipedia — The Spy Who Loved Me (film)",
        href: "https://en.wikipedia.org/wiki/The_Spy_Who_Loved_Me_(film)",
      },
      {
        label: "씨네21 — 007 나를 사랑한 스파이",
        href: "https://cine21.com/movie/info/?movie_id=7380",
      },
      {
        label: "KMDb — 007시리즈 홍보물 (나를 사랑한 스파이 1978)",
        href: "https://www.kmdb.or.kr/story/161/4504",
      },
      {
        label: "Wikiquote — The Spy Who Loved Me (film)",
        href: "https://en.wikiquote.org/wiki/The_Spy_Who_Loved_Me",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 시리즈 10편. 원작 소설과 줄거리는 거의 겹치지 않는다. 루이스 길버트가 두 번 산다 이후 시리즈로 돌아온 작품.",
      },
      {
        n: 2,
        text: "에스프리의 수중 변신은 이 편의 본드카 핵심이다. L2가 열려 있으므로 CTA는 에스프리 상세로 연다. 웻바이크는 별도 장비다.",
      },
      {
        n: 3,
        text: "한국 개봉 연도 1978은 KMDb 홍보물 아카이브의 괄호 표기를 따른다. 일자는 미상. 씨네21은 125분을 적는다.",
      },
      {
        n: 4,
        text: "예고편 임베드는 Rotten Tomatoes Classic Trailers의 Official Trailer(UBxG_TJvYTg)를 쓴다.",
      },
      {
        n: 5,
        text: "유니언잭 낙하의 단 테이크와 바하마 수중 촬영은 007.com 트리비아. 리파루스 세트의 규모는 켄 애덤의 작업으로 반복 인용된다.",
      },
    ],
    related: [
      {
        href: "/films/the-man-with-the-golden-gun",
        label: "이전 · 황금총을 가진 사나이",
      },
      { href: "/films/moonraker", label: "다음 · 문레이커" },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars/lotus-esprit", label: "로터스 에스프리 자세히" },
    ],
  },

  moonraker: {
    slug: "moonraker",
    runtime: "126분",
    director: "루이스 길버트 (Lewis Gilbert)",
    krRelease: "1980년 (일자 미상)",
    oneLiner:
      "빼앗긴 셔틀이 본드를 우주로 밀어 올리고, 드랙스의 가스를 궤도에서 끊는다.",
    spoilerWarning:
      "드랙스의 독가스 계획과 우주 정거장의 결말, 재진입 개그는 스포일러입니다.",
    plot: [
      "미국에서 영국으로 향하던 문레이커 셔틀이 공중에서 사라진다. M은 제작자 휴고 드랙스에게 본드를 보낸다. 드랙스의 저택 원심분리기와 금고, 베네치아의 유리 공방이 신경가스의 선을 드러낸다.",
      "코린 뒤포르는 금고를 연 대가로 사냥개에게 쫓긴다. 리오에서 CIA의 홀리 굿헤드가 합류하고, 죠스가 케이블카와 폭포를 가로막는다. 아마존의 사원처럼 보이는 입구 너머에 발사대가 있다.",
      "드랙스는 선택받은 남녀를 셔틀에 태워 정거장으로 올리고, 지구에는 인간만 죽이는 가스를 뿌리려 한다. 본드와 굿헤드는 그 셔틀에 섞여 궤도에 오른다.",
      "은폐 장치가 꺼지자 미국 해병의 셔틀이 레이저 전투를 연다. 본드는 드랙스를 에어록으로 밀어내고, 죠스는 돌리와 함께 전향해 살아남는다. 가스 구체는 궤도에서 파괴된다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "무어의 과잉이 궤도까지 올라간 편. 원심분리기 위의 여유와 에어록의 한 줄이 음역이다.",
      },
      {
        slug: "holly-goodhead",
        nameKo: "홀리 굿헤드",
        nameEn: "Holly Goodhead",
        role: "본드걸",
        note: "로이스 차일스. CIA 우주비행사. 이름보다 셔틀과 독가스 추적이 플롯의 키다.",
      },
      {
        nameKo: "휴고 드랙스",
        nameEn: "Hugo Drax",
        role: "적대자",
        note: "미셸 론스달. 예의를 지키는 목소리로 종족 개조를 말하는 산업가. 독가스와 정거장이 그의 문장이다.",
      },
      {
        nameKo: "죠스",
        nameEn: "Jaws",
        role: "경호",
        note: "리처드 킬. 전편의 철니가 케이블카와 무중력에서 돌아온다. 돌리와의 전향이 과잉 속의 동화다.",
      },
      {
        nameKo: "코린 뒤포르",
        nameEn: "Corinne Dufour",
        role: "조력",
        note: "코린 클레리. 저택의 파일럿. 금고를 연 대가가 사냥개다. 등장 시간은 짧고 잔인하다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. 손목 다트와 가방 속의 가젯, 그리고 엔딩 레이더의 재진입 한 줄.",
      },
    ],
    cars: {
      density: "thin",
      title: "곤돌라와 셔틀, 본드카는 궤도 밖에",
      body: "이 작품의 이동은 차가 아니다. 베네치아에서 호버로 변신하는 곤돌라, 리오의 보트와 행글라이더, 그리고 드랙스의 셔틀이 화면을 채운다. 전편의 에스프리 바다는 여기 없다. 공식 사이트의 차량 칸도 본돌라와 글래스트론, 히스파노 수이자 정도를 적을 뿐 영국 쿠페 아이콘을 내세우지 않는다. 우주로 간 본드에게 차고를 만들어 주면 과잉 위의 과잉이다. 이 칸은 얇게 두고, 목록에서 다른 본드카를 고르게 한다. 곤돌라의 변신을 본드카의 후계로 읽는 팬 설은 매력이 있으나, 배를 차로 승격하지 않는다. 궤도 위의 레이저가 사출 시트를 대신하는 편이다.",
      carSlugs: [],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "문레이커의 이동 주역은 셔틀과 곤돌라·보트다. 에스프리급 본드카 아이콘은 이 편에 없다.",
        },
        {
          label: "제작진 인터뷰",
          text: "곤돌라가 호버로 광장에 오르는 컷에 다섯 번의 시도가 들어갔고, 무어가 네 번 전복했다는 기록이 007.com에 있다.",
        },
      ],
      ctaPath: "/cars",
      ctaLabel: "본드카 목록으로",
    },
    quotes: [
      {
        speaker: "휴고 드랙스",
        textKo: "본드를 잘 보살펴. 무슨 일이 좀 생기도록.",
        textEn: "Look after Mr. Bond. See that some harm comes to him.",
        spoiler: false,
      },
      {
        speaker: "휴고 드랙스",
        textKo: "미스터 본드. 자네는 내가 재미있는 죽음을 설계하려는 시도를 모조리 거부하는군.",
        textEn:
          "Mr Bond… you defy all my attempts to plan an amusing death for you.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo: "인류를 위한 거대한 한 걸음을 밟게.",
        textEn: "Take a giant step for mankind!",
        spoiler: true,
      },
      {
        speaker: "Q",
        textKo: "재진입을 시도하는 것 같습니다, 국장님.",
        textEn: "I think he's attempting re-entry sir.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "KFOOjYU16KE",
    issuesTeaser:
      "코린을 개에게 맡기는 처벌과, 우주로 도피한 우생학은 과잉 코미디 뒤로도 남는다. 본드걸을 다시 읽기 글에서 이어 읽는다.",
    sources: [
      {
        label: "007.com — Moonraker",
        href: "https://www.007.com/the-films/moonraker/",
      },
      {
        label: "IMDb — Moonraker (1979)",
        href: "https://www.imdb.com/title/tt0079574/",
      },
      {
        label: "Wikipedia — Moonraker (film)",
        href: "https://en.wikipedia.org/wiki/Moonraker_(film)",
      },
      {
        label: "씨네21 — 007 문레이커",
        href: "https://cine21.com/movie/info/?movie_id=7381",
      },
      {
        label: "KMDb — 007시리즈 홍보물 (문레이커 표기 1981)",
        href: "https://www.kmdb.or.kr/story/161/4504",
      },
      {
        label: "Wikiquote — Moonraker (film)",
        href: "https://en.wikiquote.org/wiki/Moonraker_(film)",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 시리즈 11편. 유어 아이즈 온리보다 먼저 찍힌 순서는 007.com이 과학소설 유행 탓으로 설명한다. 버나드 리 M의 마지막 공식 출연.",
      },
      {
        n: 2,
        text: "본드카 아이콘은 비어 있다. 곤돌라·보트·셔틀이 이동을 맡고, 에스프리는 전편의 일이다.",
      },
      {
        n: 3,
        text: "한국 개봉은 1980년으로 두되 일자는 미상. KMDb 홍보물 아카이브는 1981을 적기도 한다. 씨네21은 126분.",
      },
      {
        n: 4,
        text: "예고편 임베드는 Rotten Tomatoes Classic Trailers의 Official Trailer(KFOOjYU16KE)를 쓴다.",
      },
      {
        n: 5,
        text: "드랙스의 ‘해코지를 좀 하게’ 류 대사는 작품과 Wikiquote에 반복된다. 한글은 아카이브 번역이며 더빙 대사를 옮기지 않았다.",
      },
    ],
    related: [
      {
        href: "/films/the-spy-who-loved-me",
        label: "이전 · 나를 사랑한 스파이",
      },
      { href: "/films/for-your-eyes-only", label: "다음 · 유어 아이즈 온리" },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars", label: "본드카 목록" },
    ],
  },

  "for-your-eyes-only": {
    slug: "for-your-eyes-only",
    runtime: "127분",
    director: "존 글렌 (John Glen)",
    krRelease: "1982년 (일자 미상)",
    oneLiner:
      "가라앉은 통신기를 그리스 암벽까지 쫓고, 기계를 절벽 아래로 던진다.",
    spoilerWarning:
      "크리스타토스의 정체와 ATAC의 최후, 절벽의 자동차는 스포일러입니다.",
    plot: [
      "이오니아해에서 영국 정보선 세인트 조지가 가라앉고, 자동 조준 통신기 ATAC가 함께 사라진다. 해양고고학자 해블록 부부가 암살당하고, 딸 멜리나가 석궁을 든다. 본드는 스페인의 곤잘레스를 심문하기도 전에 그녀의 화살을 본다.",
      "이탈리아 코르티나의 스키와 아이스하키를 지나, 사업가 크리스타토스가 밀수꾼 콜롬보를 적으로 가리킨다. 콜롬보의 입과 리스의 죽음이 그 손가락을 뒤집는다. 진짜 구매자는 소련이 아니라 크리스타토스 쪽이다.",
      "코르푸에서 두 사람은 ATAC를 인양하다 붙잡히고, 수장 시도를 견딘 다음 메테오라의 수도원으로 기어 오른다. 본드는 멜리나의 복수를 한 박자 멈추게 하고, 크리스타토스는 콜롬보의 손에 죽는다.",
      "고골이 ATAC를 받으러 헬기에 내렸을 때, 본드는 기계를 절벽 아래로 던진다. 어느 쪽에도 넘기지 않겠다는 한 줄로 일이 끝난다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "거대 세트를 접고 암벽과 수중으로 돌아온다. 국장의 빈 클럽을 먼저 보는 요원.",
      },
      {
        slug: "melina-havelock",
        nameKo: "멜리나 해블록",
        nameEn: "Melina Havelock",
        role: "본드걸",
        note: "카롤 부케. 석궁의 복수자. 부모의 죽음이 동기이고, 잠수는 내이 문제로 본인이 못 했다는 제작 노트가 007.com에 있다.",
      },
      {
        nameKo: "아리스토텔레스 크리스타토스",
        nameEn: "Aristotle Kristatos",
        role: "적대자",
        note: "줄리언 글로버. 사업가의 얼굴로 ATAC를 소련에 넘기려 한다. 비둘기 훈장이 거짓 표식이다.",
      },
      {
        nameKo: "밀로스 콜롬보",
        nameEn: "Milos Columbo",
        role: "조력",
        note: "토폴. 밀수의 거물로 보이다가 크리스타토스의 반대편이 된다. 수도원의 나이프가 결말이다.",
      },
      {
        nameKo: "비비 달",
        nameEn: "Bibi Dahl",
        role: "제자",
        note: "린홀리 존슨. 크리스타토스가 키운 스케이터. 침실 연출은 재시청에서 가장 먼저 주석이 달린다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. 아이덴티그래프와 고해소 변장. 에스프리 터보를 내주고 곧바로 잃는 브리핑의 얼굴.",
      },
    ],
    cars: {
      density: "solid",
      title: "에스프리 터보의 미끼, 그리고 2CV 추격",
      body: "흰 로터스 에스프리 터보는 Q가 내준 본드카로 등장하자마자 원격 폭파된다. 가젯 쿠페를 한 컷의 미끼로 쓰는 연출이다. 추격의 실제 호흡은 멜리나의 노란 시트로엥 2CV가 맡는다. 올리브 나무와 좁은 산길이, 전편 잠수함 에스프리와 다른 물성을 만든다. 슬롯은 이미 있는 에스프리 허브에만 연결한다. 2CV를 별도 아이콘으로 키우면 허브의 밀도 기준을 넘는다. 로터스의 두 얼굴—바다의 S1과 스페인의 터보—를 같은 목록에서 보는 편이 정확하다.",
      carSlugs: ["lotus-esprit"],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "007.com 차량 칸은 로터스 에스프리 터보와 시트로엥 2CV를 함께 적는다. 터보는 초반에 파괴되고 추격은 2CV가 이어받는다.",
        },
        {
          label: "제작진 인터뷰",
          text: "존 글렌 데뷔작이며 피터 라몬트가 프로덕션 디자이너로 현실 쪽 세트를 밀었다는 설명이 공식 트리비아에 있다.",
        },
        {
          label: "팬 설",
          text: "터보의 즉시 폭파를 문레이커 과잉에 대한 사과처럼 읽는 해석이 있다. 톤의 전환인 것은 맞지만, 제작진이 그 단어를 쓴 기록은 없다.",
        },
        {
          label: "미확인",
          text: "촬영에 동원된 에스프리 터보와 2CV의 정확한 대수는 공개 자료마다 다르다.",
        },
      ],
      ctaPath: "/cars/lotus-esprit",
      ctaLabel: "로터스 에스프리 자세히",
    },
    quotes: [
      {
        speaker: "제임스 본드",
        textKo: "고소 공포가 있었군.",
        textEn: "He had no head for heights.",
        spoiler: true,
      },
      {
        speaker: "제임스 본드",
        textKo: "그게 데탕트야, 동지. 자네도 없고 나도 없어!",
        textEn:
          "That's détente, comrade. You don't have it, I don't have it!",
        spoiler: true,
      },
      {
        speaker: "멜리나 해블록",
        textKo: "당신 눈에만, 자기.",
        textEn: "For your eyes only, darling.",
        spoiler: true,
      },
      {
        speaker: "Q",
        textKo: "그건 너무 약하게 말한 거지, 007.",
        textEn: "That's putting it mildly, 007!",
        spoiler: false,
      },
    ],
    trailerYoutubeId: "e0iF8TCk4Fw",
    issuesTeaser:
      "비비 달 연출과, 국장을 공석으로 남긴 선택이 한 편에 공존한다. 배우 교체 글과 본드걸을 다시 읽기 글이 그 겹침을 나눈다.",
    sources: [
      {
        label: "007.com — For Your Eyes Only",
        href: "https://www.007.com/the-films/for-your-eyes-only/",
      },
      {
        label: "IMDb — For Your Eyes Only (1981)",
        href: "https://www.imdb.com/title/tt0082398/",
      },
      {
        label: "Wikipedia — For Your Eyes Only (film)",
        href: "https://en.wikipedia.org/wiki/For_Your_Eyes_Only_(film)",
      },
      {
        label: "씨네21 — 007 유어 아이즈 온리",
        href: "https://cine21.com/movie/info/?movie_id=3616",
      },
      {
        label: "KMDb — 007시리즈 홍보물 (유어 아이스 온리 1982)",
        href: "https://www.kmdb.or.kr/story/161/4504",
      },
      {
        label: "Wikiquote — For Your Eyes Only (film)",
        href: "https://en.wikiquote.org/wiki/For_Your_Eyes_Only_(film)",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 시리즈 12편, 존 글렌 감독 데뷔. 버나드 리는 1981년 1월에 사망했고, 이 영화는 M을 교체하지 않은 채 공석으로 처리한다.",
      },
      {
        n: 2,
        text: "에스프리 터보는 즉시 폭파되고 추격은 2CV가 맡는다. 차량 슬롯은 기존 로터스 에스프리에만 연결한다.",
      },
      {
        n: 3,
        text: "한국 개봉 연도 1982는 KMDb 홍보물 표기를 따른다. 일자는 미상. 씨네21은 127분.",
      },
      {
        n: 4,
        text: "예고편 임베드는 Rotten Tomatoes Classic Trailers의 Official Trailer(e0iF8TCk4Fw)를 쓴다.",
      },
      {
        n: 5,
        text: "ATAC 파괴의 데탕트 한 줄과 절벽의 차는 Wikiquote에 올라 있는 화면 대사다. 한글은 아카이브 번역.",
      },
    ],
    related: [
      { href: "/films/moonraker", label: "이전 · 문레이커" },
      { href: "/films/octopussy", label: "다음 · 옥토퍼시" },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars/lotus-esprit", label: "로터스 에스프리 자세히" },
    ],
  },

  octopussy: {
    slug: "octopussy",
    runtime: "131분",
    director: "존 글렌 (John Glen)",
    krRelease: "1984년 7월 29일",
    oneLiner:
      "가짜 파베르제와 서커스 열차 안에, 사고처럼 보이게 만들 핵이 숨어 있다.",
    spoilerWarning:
      "오를로프의 핵 계획과 카말 칸의 배신, 서커스 광장의 해체는 스포일러입니다.",
    plot: [
      "009가 광대 분장으로 동베를린 대사관에 쓰러지고, 가짜 파베르제 알이 그의 손에 있다. 본드는 런던 경매에서 진품을 가짜와 바꿔 카말 칸의 호가를 끌어올린다. 알 속에는 발신기가 들어 있다.",
        "인도 라자스탄의 궁에서 카말과 고빈다, 마그다가 본드를 맞는다. 본드는 옥토퍼시의 섬으로 들어가 서커스 밀수의 겉면을 본다. 배후는 소련 장군 오를로프다.",
      "진품 보물을 빼돌리는 밀수가 껍데기고, 속은 서독 미 공군 기지에서 터뜨릴 핵탄두다. 사고처럼 보이게 하면 보복이 모스크바가 아닌 미국의 실수로 향한다. 본드는 열차에서 그 계획을 읽는다.",
        "광대 분장으로 서커스 막 안의 탄두에 손을 넣고, 옥토퍼시는 카말의 배신을 한발 늦게 읽는다. 오를로프는 국경에서 도둑으로 맞고, 인도 궁과 비행기 동체에서 남은 결투가 끝난다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "광대 분장과 미니제트 사이에서도 눈썹의 음역을 유지한다. 핵의 논리를 악당 대신 읽어 내는 후반.",
      },
      {
        slug: "octopussy",
        nameKo: "옥토퍼시",
        nameEn: "Octopussy",
        role: "본드걸",
        note: "모드 애덤스. 서커스와 밀수의 우두머리. 아버지의 명예와 카말의 배신 사이에서 전향한다. 황금총의 안드레아에 이은 두 번째 주역이다.",
      },
      {
        nameKo: "카말 칸",
        nameEn: "Kamal Khan",
        role: "적대자",
        note: "루이 주르당. 추방된 왕자의 예절과 조작된 주사위. 서커스를 핵의 운반 상자로 쓴다.",
      },
      {
        nameKo: "고빈다",
        nameEn: "Gobinda",
        role: "경호",
        note: "카비르 베디. 카말의 몸. 툭툭 추격과 비행기 동체의 결투가 대사를 대신한다.",
      },
      {
        slug: "magda",
        nameKo: "마그다",
        nameEn: "Magda",
        role: "연락",
        note: "크리스티나 웨이본. 문어 문신의 창구. 알과 목숨을 바꾸자는 거래의 얼굴.",
      },
      {
        nameKo: "오를로프 장군",
        nameEn: "General Orlov",
        role: "적대자",
        note: "스티븐 버코프. 군축을 혐오하는 소련 장군. 핵을 사고로 위장해 유럽의 국경을 열려 한다. 국경에서 탈영병처럼 맞는다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. 만년필과 열기구. 섬을 감시하다 007을 새벽까지 못 본다는 한 줄의 창구.",
      },
    ],
    cars: {
      density: "thin",
      title: "아크로스와 열차, 차고는 비워 둔다",
      body: "프리크레딧의 비드 아크로스타 미니제트는 격납고를 가로지르는 비행이지 본드카가 아니다. 본문의 이동은 툭툭과 서커스 열차, Q의 열기구다. 공식 사이트 차량 칸도 그 목록을 따르고 영국 쿠페 아이콘을 내세우지 않는다. 아크로스타를 차고에 넣으면 장르가 섞인다. 열차 지붕의 추격과 광대 마차 안의 탄두가 이 편의 진짜 이동 문법이다. 본드카 칸은 얇고, 목록에서 다른 편의 차를 고르게 한다.",
      carSlugs: [],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "아크로스타 미니제트와 서커스 열차가 이 편의 이동 주역이다. 에스프리·애스턴급 허브 차량은 없다.",
        },
        {
          label: "제작진 인터뷰",
          text: "아크로스타 프리크레딧은 원래 문레이커용으로 기획되었다가 옮겨 왔다는 설명이 007.com 트리비아에 있다.",
        },
      ],
      ctaPath: "/cars",
      ctaLabel: "본드카 목록으로",
    },
    quotes: [
      {
        speaker: "카말 칸",
        textKo: "본드 씨는 참으로 희귀한 혈통이지. 곧 멸종될 혈통이야.",
        textEn:
          "Mr. Bond is indeed of a very rare breed... soon to be made extinct.",
        spoiler: false,
      },
      {
        speaker: "카말 칸",
        textKo: "살아남는 고약한 버릇이 있군.",
        textEn: "You seem to have a nasty habit of surviving.",
        spoiler: false,
      },
      {
        speaker: "제임스 본드",
        textKo:
          "난 미 공군 기지에서 원자폭탄이 터지는 쪽이 더 걱정이야.",
        textEn:
          "I am more concerned about an atomic bomb exploding on a United States Air Force base.",
        spoiler: true,
      },
      {
        speaker: "Q",
        textKo: "이건 열기로 가는 거야.",
        textEn: "It goes by hot air.",
        spoiler: false,
      },
    ],
    trailerYoutubeId: "q1hLWZzgZvU",
    issuesTeaser:
      "서커스 천막 안의 핵과, 제목이 된 이름의 프레이밍이 한 편에 있다. 본드걸을 다시 읽기 글이 그 이름을 적는다.",
    sources: [
      {
        label: "007.com — Octopussy",
        href: "https://www.007.com/the-films/octopussy/",
      },
      {
        label: "IMDb — Octopussy (1983)",
        href: "https://www.imdb.com/title/tt0086034/",
      },
      {
        label: "Wikipedia — Octopussy",
        href: "https://en.wikipedia.org/wiki/Octopussy",
      },
      {
        label: "씨네21 — 007 옥토퍼시 (한국 개봉 1984-07-29)",
        href: "https://cine21.com/movie/info/?movie_id=7383",
      },
      {
        label: "KMDb — 007시리즈 홍보물 (옥터퍼시 1984)",
        href: "https://www.kmdb.or.kr/story/161/4504",
      },
      {
        label: "Wikiquote — Octopussy",
        href: "https://en.wikiquote.org/wiki/Octopussy",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 시리즈 13편. 모드 애덤스는 서로 다른 본드걸 주역을 두 번 맡은 유일한 배우로 007.com이 적는다. 로버트 브라운의 새 M이 이 편부터 브리핑실에 앉는다.",
      },
      {
        n: 2,
        text: "아크로스타는 제트, 열차는 무대다. 본드카 허브 슬롯은 비워 둔다.",
      },
      {
        n: 3,
        text: "한국 개봉 1984년 7월 29일은 씨네21 영화 정보. KMDb 홍보물은 연도만 1984로 적는다. 영어권 개봉은 1983년.",
      },
      {
        n: 4,
        text: "Rotten Tomatoes Classic Trailers 채널에서 옥토퍼시 극장 예고편을 oembed로 찾지 못했다. 임베드는 HD Retro Trailers의 오리지널 트레일러(q1hLWZzgZvU)를 쓴다.",
      },
      {
        n: 5,
        text: "상영 131분은 IMDb·공식 소개. 씨네21은 130분으로 적기도 한다. 컷 표기 차이로 본다.",
      },
    ],
    related: [
      { href: "/films/for-your-eyes-only", label: "이전 · 유어 아이즈 온리" },
      { href: "/films/a-view-to-a-kill", label: "다음 · 뷰 투 어 킬" },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars", label: "본드카 목록" },
    ],
  },

  "a-view-to-a-kill": {
    slug: "a-view-to-a-kill",
    runtime: "131분",
    director: "존 글렌 (John Glen)",
    krRelease: "1985년 12월 22일",
    oneLiner:
      "조린이 실리콘밸리를 단층 위에 올리고, 금문교에서 결투가 끝난다.",
    spoilerWarning:
      "메인 스트라이크와 메이 데이의 전향, 금문교의 추락은 스포일러입니다.",
    plot: [
      "시베리아의 눈 속에서 003의 시체가 마이크로칩을 돌려준다. 핵 펄스에도 견디는 복제품이고, 원본을 만든 영국 방산업체는 맥스 조린의 손에 넘어가 있다. 파리 에펠탑에서 탐정이 죽고, 조린의 경호 메이 데이가 낙하산으로 사라진다.",
      "본드는 마구간 조련사로 샹티이 저택에 들어가 경주마의 이식 칩을 읽는다. 정체가 드러난 뒤 자동차 광산에서 익사 직전까지 간다. 샌프란시스코의 지질학자 스테이시 서튼이 빼앗긴 땅을 들고 나타난다.",
      "조린의 계획은 실리콘밸리 아래 호수와 광산에 폭약을 넣고, 헤이워드와 샌안드레아스 단층을 동시에 흔들어 칩 산업을 지우는 것이다. 시티홀 화재와 광산 홍수 속에서 조린은 메이 데이마저 버리고 비행선으로 뜬다.",
      "폭약을 끊은 메이 데이가 죽고, 결투는 금문교 케이블 위에서 끝난다. 조린이 떨어지고, 본드는 스테이시와 함께 남는다.",
    ],
    cast: [
      {
        slug: "roger-moore",
        nameKo: "제임스 본드",
        nameEn: "James Bond",
        role: "007",
        note: "로저 무어의 마지막 공식 본드. 마구간과 금문교 사이에서, 긴 재임의 여유와 나이의 간극이 동시에 보인다. 다음 번호는 달튼에게 넘어간다.",
      },
      {
        slug: "stacey-sutton",
        nameKo: "스테이시 서튼",
        nameEn: "Stacey Sutton",
        role: "본드걸",
        note: "타냐 로버츠. 지질학자. 빼앗긴 땅과 단층의 지식이 메인 스트라이크를 읽는 키다.",
      },
      {
        nameKo: "맥스 조린",
        nameEn: "Max Zorin",
        role: "적대자",
        note: "크리스토퍼 월켄. 영불 합작의 산업가. 칩 독점과 단층 파괴를 같은 계산으로 묶는다.",
      },
      {
        slug: "may-day",
        nameKo: "메이 데이",
        nameEn: "May Day",
        role: "경호",
        note: "그레이스 존스. 조린의 몸이자 배신당한 동맹. 광산의 폭약을 끊는 선택이 캐릭터의 마지막 문장이다.",
      },
      {
        nameKo: "폴라 이바노바",
        nameEn: "Pola Ivanova",
        role: "KGB",
        note: "피오나 풀러턴. 온천에서 본드와 스치는 소련 측 감시. 등장 시간은 짧고, 칩 전쟁의 다른 창구를 보여 준다.",
      },
      {
        nameKo: "Q",
        nameEn: "Q",
        role: "장비",
        note: "데즈먼드 루엘린. 스누퍼 로봇과 감지 장비. 무어와 나누는 마지막 공식 브리핑의 얼굴.",
      },
    ],
    cars: {
      density: "thin",
      title: "롤스와 비행선, 본드카는 다리 밖에",
      body: "이 작품의 이동은 아이콘 쿠페가 아니다. 티벳 경의 실버 클라우드, 파리에서 잘려 나가는 르노 택시, 조린의 비행선, 스테이시의 지프가 화면을 나눈다. 공식 사이트 차량 칸도 그 목록을 따를 뿐 영국 스포츠카 허브를 내세우지 않는다. 금문교와 단층이 차고를 대신한다. 없는 본드카를 만들면 작별 편을 팬픽으로 닫게 된다. 이 칸은 얇게 두고 목록으로 보낸다.",
      carSlugs: [],
      gossipTeasers: [
        {
          label: "확인됨",
          text: "무어의 마지막 공식 007이다. 차량 주역은 롤스·택시·비행선이며 에스프리·애스턴급 허브는 없다.",
        },
        {
          label: "제작진 인터뷰",
          text: "패트릭 맥니가 브로콜리의 실제 롤스로이스를 몰았고, 무어와의 대사 일부가 즉흥이었다는 설명이 007.com 트리비아에 있다.",
        },
      ],
      ctaPath: "/cars",
      ctaLabel: "본드카 목록으로",
    },
    quotes: [
      {
        speaker: "메이 데이 / 맥스 조린",
        textKo: "와, 경치가 끝내주는데. / 죽이러 온 경치지.",
        textEn: "Wow! What a view... / ...to a kill!",
        spoiler: true,
      },
      {
        speaker: "제임스 본드",
        textKo: "훌륭해. 감탄해서 말이 안 나올 지경이야.",
        textEn: "Brilliant. I'm almost speechless with admiration.",
        spoiler: false,
      },
      {
        speaker: "맥스 조린",
        textKo: "직관적 즉흥이야말로 천재의 비결이지.",
        textEn: "Intuitive improvisation is the secret of genius.",
        spoiler: false,
      },
      {
        speaker: "메이 데이",
        textKo: "그 남자가 나를 사랑한다고 생각했는데!",
        textEn: "And I thought that man loved me!",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "pxQS8iAlr9w",
    issuesTeaser:
      "최장 재임의 작별과 배우의 나이가 액션과 어긋난다는 평은 개봉 때부터 있었다. 본드 배우 교체, 어디까지가 리부트인가 글이 그 거리를 적는다.",
    sources: [
      {
        label: "007.com — A View to a Kill",
        href: "https://www.007.com/the-films/a-view-to-a-kill/",
      },
      {
        label: "IMDb — A View to a Kill (1985)",
        href: "https://www.imdb.com/title/tt0090264/",
      },
      {
        label: "Wikipedia — A View to a Kill",
        href: "https://en.wikipedia.org/wiki/A_View_to_a_Kill",
      },
      {
        label: "씨네21 — 007 뷰 투 어 킬 (한국 개봉 1985-12-22)",
        href: "https://cine21.com/movie/info/?movie_id=7384",
      },
      {
        label: "한국어 위키백과 — 007 뷰 투 어 킬",
        href: "https://ko.wikipedia.org/wiki/007_%EB%B7%B0_%ED%88%AC_%EC%96%B4_%ED%82%AC",
      },
      {
        label: "Wikiquote — A View to a Kill",
        href: "https://en.wikiquote.org/wiki/A_View_to_a_Kill",
      },
    ],
    footnotes: [
      {
        n: 1,
        text: "공식 시리즈 14편, 로저 무어의 마지막 007. 로이스 맥스웰의 머니페니도 이 편에서 공식으로 끝난다. 네버 세이 네버 어게인은 계수 밖에 둔다.",
      },
      {
        n: 2,
        text: "본드카 허브는 없다. 롤스·택시·비행선이 이동을 맡고, 금문교가 차고를 대신한다.",
      },
      {
        n: 3,
        text: "한국 개봉 1985년 12월 22일은 씨네21 영화 정보. KMDb 홍보물도 1985를 적는다.",
      },
      {
        n: 4,
        text: "Rotten Tomatoes Classic Trailers 채널에서 이 편 극장 예고편을 oembed로 찾지 못했다. 임베드는 HD Retro Trailers의 오리지널 트레일러(pxQS8iAlr9w)를 쓰며, 채널을 각주로 남긴다.",
      },
      {
        n: 5,
        text: "주제곡의 빌보드 1위는 한국어 위키백과·영어권 차트 기록이 공통으로 적는 상업 사실. 상영 131분은 IMDb·공식, 씨네21은 132분으로 적기도 한다.",
      },
    ],
    related: [
      { href: "/films/octopussy", label: "이전 · 옥토퍼시" },
      { href: "/films/the-living-daylights", label: "다음 · 리빙 데이라이츠" },
      { href: "/bonds", label: "본드 배우 허브" },
      { href: "/cars", label: "본드카 목록" },
    ],
  },
};