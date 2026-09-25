import type { GossipItem, Source } from "./types";

export type IssueSection = {
  heading: string;
  paragraphs: string[];
};

export type IssueArticle = {
  slug: string;
  title: string;
  teaser: string;
  status: "게시";
  excerpt: string;
  sections: IssueSection[];
  gossip?: GossipItem[];
  related: { href: string; label: string }[];
  sources: Source[];
};

export const issues: IssueArticle[] = [
  {
    slug: "actor-succession",
    title: "본드 배우 교체, 어디까지가 리부트인가",
    teaser:
      "코너리에서 크레이그까지, 시리즈가 ‘같은 사람’을 유지한 적과 시간축을 리셋한 적을 나란히 봅니다.",
    status: "게시",
    excerpt:
      "에온의 공식 25편은 여섯 배우가 한 이름을 잇습니다. 어떤 교체는 이어 보기이고, 어떤 교체는 처음부터입니다. 얼굴이 바뀌었다고 해서 세계가 지워진 것은 아닙니다.",
    sections: [
      {
        heading: "같은 이름, 다른 계약",
        paragraphs: [
          "제임스 본드는 소설의 인물이기 전에, 에온 프로덕션이 배우와 다시 계약하는 직함이다. 공식 25편을 배우별로 나누면 숀 코너리 여섯, 조지 레이즌비 하나, 로저 무어 일곱, 티모시 달튼 둘, 피어스 브로스넌 넷, 대니얼 크레이그 다섯이다. 007.com의 필름 목록이 같은 숫자를 쓴다. 1967년 패러디와 1983년 권리 분쟁 편은 그 합 밖에 있다.",
          "관객이 ‘같은 본드’로 느끼는 구간은 대개 한 배우의 재임이다. 무어의 일곱 편은 나이와 개그의 온도가 변해도 한 얼굴로 읽힌다. 반대로 레이즌비의 《여왕폐하 대작전》은 한 편의 배우가 결혼과 상실을 허용받은 예외다. 그 예외 뒤에 코너리가 《다이아몬드는 영원히》로 돌아오는 것은 시간축을 지우는 일이 아니라, 초대 얼굴의 재계약에 가깝다.",
          "한국 홍보가 007을 붙인 제목으로 배우를 가리기도 한다. 목록의 제목—닥터 노, 여왕폐하 대작전—은 그 습관과 거리를 둔다. 배우 교체는 포스터의 얼굴보다 공식 목록의 칸이 먼저다.",
        ],
      },
      {
        heading: "교체가 리부트가 아닌 경우",
        paragraphs: [
          "레이즌비의 한 편은 얼굴만 바뀌고 세계는 남는다. 블로펠드는 전편의 연속이고, M의 음역은 버나드 리의 것이다. 오프닝이 교체를 숨기지 않아도, 이야기는 전작의 복수를 이어 받는다. 첫 교체가 리부트처럼 들리는 것은 배우가 한 편뿐이기 때문이다. 화면의 연속은 그렇게 짧지 않다.",
          "달튼의 두 편은 유머를 줄이고 면허의 폭력을 앞에 둔다. 《살인면허》에서 본드가 복수로 빠지는 것은 세계관을 지우는 일이 아니라, 같은 국장이 요원을 정지시키는 일에 가깝다. Q가 퇴근하지 않은 척 장비를 들고 나타나는 컷이, 기관이 아직 같은 기관임을 말한다.",
          "브로스넌의 《골든아이》는 냉전 이후의 본드를 다시 소개하지만, 덴치의 M과 머니페니, Q의 실험실을 한 세계로 이어 준다. ‘구식 요원’이라는 국장의 핀잔은 리셋이 아니라, 같은 기관이 시대를 갱신하는 대사다. 6년 공백 뒤의 복귀는 리부트처럼 홍보되기 쉽다. 시간축을 처음부터 찍지 않으면, 그 편은 이어 보기다.",
        ],
      },
      {
        heading: "2006년의 리셋",
        paragraphs: [
          "《카지노 로얄》(2006)은 00이 되는 과정을 화면에 올린다. 총구 시퀀스가 엔딩으로 미뤄지고, 베스퍼의 선택이 이후 네 편의 동기가 된다. 이 다섯 편은 배우만이 아니라 시간축을 공유한다. ‘리부트’라는 말이 가장 좁게 쓰이는 구간이다. 자격을 막 받은 사람의 오만과 상처가, 완성된 신사를 보여 주는 네 배우의 재임과 갈린다.",
          "리부트 안에도 유산은 남는다. 주디 덴치의 M은 브로스넌 시기에서 넘어온 예외적 연속이다. 스카이폴의 DB5와 스코틀랜드 저택, 스펙터의 조직 이름은 고전 문법을 다시 입는 일에 가깝다. 리셋과 헌사가 한 연속성 안에서 싸운다. 《노 타임 투 다이》가 한 사람의 이야기로 닫히는 것도, 그 다섯 편이 공유한 시간축이 있기 때문이다.",
        ],
      },
      {
        heading: "아직 열리지 않은 다음",
        paragraphs: [
          "크레이그 이후의 배우 이름을 이 글은 단정하지 않는다. 007.com은 공식 시리즈를 25편으로 소개하고, 다음 편의 주연을 이 글을 쓰는 시점에 확정 이름으로 올리지 않는다. 캐스팅이 끝났다는 제3자 인터뷰와 후보 명단은 보도의 칸에 두고, 아카이브의 칸에는 올리지 않는다. 이름을 적는 순간 이 글이 가십이 된다.",
          "확인할 수 있는 제작 쪽 사실은 따로 있다. 2025년 아마존 MGM이 마이클 G. 윌슨·바바라 브로콜리와 합작 법인을 만들고 창작 주도권을 가져간 발표, 그리고 다음 편의 연출·각본 팀으로 이름이 공개된 라인업이다. 그 편이 리부트인지 연속인지는 화면이 나온 뒤에 이 글을 고치면 된다. 지금은 교체와 리부트를 같은 단어로 쓰지 않는 습관만 남긴다.",
        ],
      },
    ],
    related: [
      { href: "/films/casino-royale-2006", label: "카지노 로얄 (2006)" },
      { href: "/films/on-her-majestys-secret-service", label: "여왕폐하 대작전" },
      { href: "/films/goldeneye", label: "골든아이" },
      { href: "/bonds", label: "본드 허브" },
      { href: "/issues/after-craig", label: "크레이그 엔딩 이후" },
      { href: "/issues/official-and-unofficial", label: "공식 25와 비공식 2" },
    ],
    sources: [
      { label: "007.com — The Films", href: "https://www.007.com/the-films/" },
      {
        label: "007.com — Daniel Craig",
        href: "https://www.007.com/007-actors/daniel-craig/",
      },
      {
        label: "Wikipedia — List of James Bond films",
        href: "https://en.wikipedia.org/wiki/List_of_James_Bond_films",
      },
      {
        label: "AP — Amazon MGM takes creative reins of James Bond (2025-02-20)",
        href: "https://apnews.com/article/james-bond-mgm-amazon-broccoli-62db8105bb262e5bbea11b16e2edd9f2",
      },
    ],
  },
  {
    slug: "reread-bond-girls",
    title: "본드걸을 다시 읽기",
    teaser:
      "허니 라이더의 해변부터 베스퍼의 선택, 트레이시의 시간까지. 이름과 카메라가 만든 시선, 그리고 플롯에서의 역할.",
    status: "게시",
    excerpt:
      "본드걸이라는 말은 홍보의 칸과 플롯의 칸을 한 번에 삼킵니다. 다시 읽기는 그 두 칸을 나누는 일입니다. 카메라가 먼저 찍은 것과, 이야기가 필요로 한 것은 같은 층이 아닙니다.",
    sections: [
      {
        heading: "해변의 칼, 연락선의 미끼",
        paragraphs: [
          "《닥터 노》의 허니 라이더는 흰 수영복으로 포스터에 남지만, 잠입의 조건은 그녀가 크랩 키 해안을 안다는 점이다. 아버지는 그 섬에서 사라졌고, 칼과 조개망을 든 사람이 길을 연다. 카메라가 몸을 먼저 찍는 것과, 이야기가 길잡이를 필요로 하는 것은 같은 층이 아니다. 첫 작품의 식민지 풍경과 성별 연출은 이후 재평가의 입구다. 홍보 사진만 남기면 아카이브가 아니라 포스터가 된다.",
          "《위기일발》의 타티아나 로마노바는 렉터 암호기를 든 소련 연락선으로 등장한다. 미끼로 놓인 연락선과 냉전 접경의 시선이 한 몸에 겹친다. 마음이 먼저인지 명령이 먼저인지는 화면이 끝까지 겹쳐 둔다. 클레브가 설계하고 그랜트가 마지막을 맡는 함정에서, 그녀는 동행이자 함정이다. 허니가 길을 열면, 타티아나는 기차 칸의 증인이다. 두 사람을 한 단어—본드걸—로 묶으면 냉전의 미끼가 사라진다.",
        ],
      },
      {
        heading: "이름, 시계, 아내",
        paragraphs: [
          "푸시 갤로어는 이름이 먼저 화제가 되지만, 그랜드 슬램의 항공 키를 쥐고 있다. 포트 녹스의 문이 열릴지는 그녀의 비행팀에 달려 있다. 이름 개그만 읽으면 플롯이 사라진다. 동시에 그 이름이 1964년의 시선으로 소비된 사실도 지울 수 없다. 기능과 소비를 한 문장으로 합치면, 어느 쪽도 남지 않는다.",
          "트레이시 디 비첸초는 시리즈가 아내로 허용한 드문 상대다. 포르투갈 해변의 가로챔, 카지노의 빚, 드라코와의 거래가 임무와 사생활을 한 테이블에 앉힌다. 결말의 총이 배역의 핵심이 되는 자리이며, 이후 본드가 사람을 붙드는 방식의 원점 중 하나다. 허니가 길이고 푸시가 시계라면, 트레이시는 시간을 나눈 사람이다. 한 편의 배우가 그 시간을 허용받았다는 점은 배우 교체 글과 맞닿는다.",
        ],
      },
      {
        heading: "개그로 회수되는 자리, 적으로 뒤집히는 자리",
        paragraphs: [
          "메리 굿나잇은 정보를 쥐고도 개그의 소품으로 회수되는 연출의 한 예다. 아냐 아마소바는 동등한 소련 요원으로 시작되었다가 엔딩의 침실 개그로 접힌다. 기능이 있던 자리가 웃음의 타이밍에 삼켜지는 습관은 무어 시기 재시청의 논점이다. 코린 뒤포르가 금고를 연 대가로 받는 처벌도, 같은 습관의 잔혹한 변주다.",
          "엘렉트라 킹은 보호 대상이 적대자의 자리에 앉는 구도다. 납치의 서사가 상속의 계산으로 뒤집히고, 본드걸이라는 칸이 악당의 칸과 겹친다. 솔리테어의 점술이 처녀성 위에 세워진 장치라는 점도, 플롯의 열쇠와 카메라의 시선이 한 몸에 있음을 보여 준다. 허브가 본드걸·조연·카메오·반복 출연을 나눈 이유는 이 겹침을 한 포스터로 접지 않기 위해서다.",
        ],
      },
      {
        heading: "리부트 이후의 이름",
        paragraphs: [
          "베스퍼 린드는 재무부의 감시자에서 크레이그 본드가 끝내 넘지 못한 이름이 된다. 열차 칸의 심사는 구애처럼 들리고, 베네치아의 선택은 강한 스포일러이므로 영화 상세에 둔다. 여기서는 동기만 적는다. 사람이 판돈과 배신의 한가운데에 있었다는 점, 그리고 그 이름이 이후 네 편을 밀고 간다는 점이다.",
          "마들렌 스완은 두 편에 걸쳐 사적인 시간을 잇는다. 베스퍼가 단절이면 마들렌은 지속의 시도다. 세버린이 안내하는 폐허의 섬, 카밀이 메드라노에게 갚는 복수, 팔로마의 짧은 현장. 리부트 이후에도 홍보의 칸과 플롯의 칸은 어긋난다. 다시 읽기는 그 어긋남을 지우는 일이 아니라, 표시하는 일이다.",
        ],
      },
    ],
    related: [
      { href: "/bond-girls/honey-ryder", label: "허니 라이더" },
      { href: "/bond-girls/tatiana-romanova", label: "타티아나 로마노바" },
      { href: "/bond-girls/pussy-galore", label: "푸시 갤로어" },
      { href: "/bond-girls/tracy-di-vicenzo", label: "트레이시" },
      { href: "/bond-girls/vesper-lynd", label: "베스퍼 린드" },
      { href: "/bond-girls", label: "본드걸 허브" },
      { href: "/films/from-russia-with-love", label: "위기일발" },
    ],
    sources: [
      { label: "007.com — Dr. No", href: "https://www.007.com/the-films/dr-no/" },
      {
        label: "007.com — From Russia with Love",
        href: "https://www.007.com/the-films/from-russia-with-love/",
      },
      {
        label: "007.com — Goldfinger",
        href: "https://www.007.com/the-films/goldfinger/",
      },
      {
        label: "Wikipedia — Bond girl",
        href: "https://en.wikipedia.org/wiki/Bond_girl",
      },
    ],
  },
  {
    slug: "gadgets-and-reality",
    title: "가젯과 현실, 그 사이",
    teaser:
      "사출 시트와 원격 조종 세단. 제작 인터뷰와 팬 설을 라벨로 구분해 정리합니다.",
    status: "게시",
    excerpt:
      "본드카의 버튼이 모두 달리는 차는 아닙니다. 확인됨, 제작진 인터뷰, 팬 설, 미확인을 한 화면에 둡니다. 라벨 없이 ‘실제로 달렸다’고 적으면 아카이브가 아닙니다.",
    sections: [
      {
        heading: "확인됨 — 사출 시트와 DB5",
        paragraphs: [
          "《골드핑거》의 애스턴 마틴 DB5는 사출 시트와 기관총, 회전 번호판으로 본드카라는 말을 고정한다. 실제 촬영에 여러 대가 쓰였고, 가젯의 일부는 화면용 장치다. 시리즈가 아이콘 차량을 고르는 전환점은 이 편이다. 《닥터 노》의 썬빔은 이동 수단이지, 가젯 GT의 기원이 아니다. 차량 허브가 DB5를 두껍게 쓰는 이유는, 버튼이 요원을 설명하기 시작한 원점이 여기이기 때문이다.",
          "《썬더볼 작전》의 수중 전투는 잠수부와 세트가 한 해역을 나눈다. 제트팩은 짧게 스치고, 본편의 연장은 잠수복과 작살이다. 가젯이 아이콘이 되는 속도와, 현장이 물속을 버티는 속도는 같지 않다. 화면이 한 컷으로 붙인 것을 한 문장으로 믿으면, 바하마의 수심이 사라진다.",
        ],
      },
      {
        heading: "제작진 인터뷰 — 에스프리와 잠수",
        paragraphs: [
          "《나를 사랑한 스파이》의 로터스 에스프리는 수중 모드로 기억된다. 실제 잠수 샷과 모형, 물보라가 섞인다. 제작 특집은 차체 방수와 별도 추진을 나눈다. Wet Nellie라는 별칭은 007.com 차량 칸의 공식 표기다. 차량 상세가 그 층을 더 두껍게 적는 구간이다. 도로에서 바다로 들어가는 한 컷이, 차가 요원을 대신하기 시작한 선언처럼 읽히기도 한다.",
          "《네버 다이》의 BMW 750iL은 휴대전화 원격으로 스스로 달린다. 주차장 추격의 설득은 화면용 조작과 스턴트가 겹친 결과다. 버튼이 실차와 얼마나 같은가는 팬 설이 앞서는 칸이다. 원격이 ‘완전히 달렸다’고 적으면 라벨을 건너뛴 것이다. 뉴스 제국이 전쟁을 상품으로 만드는 구도와, 차가 운전자 없이 골목을 도는 구도는 한 편의 쌍이다. 둘 다 통제의 환상이다. Q 브리핑이 장비를 설명하는 의식은 골드핑거 이후 반복되지만, 브리핑의 문장이 도로에서 그대로 재현되지는 않는다.",
        ],
      },
      {
        heading: "팬 설과 미확인 — 과잉의 경고",
        paragraphs: [
          "《어나더데이》의 투명 밴할은 시각효과의 과잉으로 개봉 당시부터 논쟁되었다. 아이스 팰리스와 이카루스 위성, 호버크래프트가 한 편에 쌓인다. 40주년의 오마주가 가젯의 목록을 키운 자리다. 다음 선택이 《카지노 로얄》의 리부트—버튼을 거의 숨긴 DBS—인 이유를 이 편이 가장 잘 설명한다. 한반도 배경 묘사와 가젯의 과잉을 한 문장으로 묶지 않는다. 지리를 확정하지 않고, 과잉의 온도만 적는다.",
          "라벨 없이 ‘실제로 달렸다’고 적으면 아카이브가 아니다. 확인됨 / 제작진 인터뷰 / 팬 설 / 미확인을 차량 상세와 같은 네 칸으로 유지한다. 아래 보드가 그 네 칸을 한 화면에 펼친다. 소문의 이름을 사실의 칸에 앉히지 않는 습관이, 가젯을 두껍게 읽는 최소 조건이다.",
        ],
      },
    ],
    gossip: [
      {
        label: "확인됨",
        text: "골드핑거의 DB5가 사출 시트·기관총·회전 번호판으로 본드카 문법을 고정한 점은 007.com 작품·차량 서술과 화면이 일치한다. 촬영에 여러 대가 쓰였다.",
      },
      {
        label: "제작진 인터뷰",
        text: "나를 사랑한 스파이의 에스프리 수중 샷이 실차 방수와 모형·별도 추진을 나눈다는 설명은 007.com 트리비아·차량 칸에 반복된다. Wet Nellie는 공식 별칭이다.",
      },
      {
        label: "팬 설",
        text: "네버 다이의 750iL 버튼이 시판차와 같다는 단정이 있다. 화면의 원격은 스턴트와 조작이 겹친 연출이다. 실차 사양과 한 줄로 합치지 않는다.",
      },
      {
        label: "미확인",
        text: "어나더데이 투명 차량의 효과 샷 비율을 이 글은 퍼센트로 고정하지 않는다. 개봉 당시부터 시각효과 과잉으로 논쟁되었다는 점만 적는다.",
      },
    ],
    related: [
      { href: "/cars/aston-martin-db5", label: "DB5" },
      { href: "/cars/lotus-esprit", label: "로터스 에스프리" },
      { href: "/films/goldfinger", label: "골드핑거" },
      { href: "/films/thunderball", label: "썬더볼 작전" },
      { href: "/films/tomorrow-never-dies", label: "네버 다이" },
      { href: "/films/die-another-day", label: "어나더데이" },
      { href: "/cars", label: "차량 허브" },
    ],
    sources: [
      {
        label: "007.com — Goldfinger",
        href: "https://www.007.com/the-films/goldfinger/",
      },
      {
        label: "007.com — The Spy Who Loved Me",
        href: "https://www.007.com/the-films/the-spy-who-loved-me/",
      },
      {
        label: "007.com — Tomorrow Never Dies",
        href: "https://www.007.com/the-films/tomorrow-never-dies/",
      },
      {
        label: "Wikipedia — Aston Martin DB5",
        href: "https://en.wikipedia.org/wiki/Aston_Martin_DB5",
      },
    ],
  },
  {
    slug: "after-craig",
    title: "크레이그 엔딩 이후",
    teaser:
      "노 타임 투 다이가 남긴 결말을 시리즈가 어떻게 이어갈지는 아직 공식 발표를 기다려야 합니다.",
    status: "게시",
    excerpt:
      "확인할 수 있는 것과 소문을 가릅니다. 다음 배우의 이름은 아직 공식 발표가 없습니다.",
    sections: [
      {
        heading: "다섯 편이 닫은 것",
        paragraphs: [
          "대니얼 크레이그의 본드는 《카지노 로얄》에서 00이 되고 《노 타임 투 다이》에서 한 사람의 이야기를 닫는다. 베스퍼에서 마들렌으로 이어진 사적 시간이, 스펙터의 가족 은유와 겹친다. 엔딩의 구체—섬에 남는 선택, 무전의 작별—는 영화 상세의 스포일러 칸에 있다. 여기서는 연속성이 한 배우의 재임 안에서 완성되었다는 점만 적는다.",
          "스카이폴이 집을 태우고 국장을 보내며, 스펙터가 조직을 가족으로 묶는다. 나인 아이즈의 감시 논점은 00 섹션의 존폐를 한 편의 정치로 올린다. 그 정치가 다음 편의 세계인지는 아직 화면이 말하지 않는다. 크레이그 다섯 편을 ‘시리즈 전체의 결말’로 읽으면, 공식 25의 앞 스무 편이 서막이 되어 버린다. 한 배우의 닫힘과 시리즈의 닫힘은 같은 문장이 아니다.",
        ],
      },
      {
        heading: "알려진 것",
        paragraphs: [
          "007.com은 공식 시리즈를 25편으로 소개한다. 《닥터 노》부터 《노 타임 투 다이》까지의 에온 목록이다. 다음 편의 주연 이름을 공식 사이트에 올리지 않은 상태가, 이 글을 쓰는 시점의 확인된 공백이다.",
          "2025년 2월, 아마존 MGM 스튜디오는 마이클 G. 윌슨·바바라 브로콜리와 합작 법인을 만들어 007 지적재산의 공동 소유를 유지하되, 창작 주도권을 스튜디오가 가져간다고 발표했다. 윌슨은 제작에서 물러나고, 브로콜리는 다른 프로젝트에 집중하겠다고 밝혔다. AP와 아마존 회사 뉴스가 같은 뼈대를 적는다. 거래는 그해 3월 닫혔다.",
          "이후 보도는 다음 편의 연출로 드니 빌뇌브, 각본으로 스티븐 나이트, 제작으로 에이미 패스칼과 데이비드 헤이먼을 반복한다. 2026년 4월 시네마콘에서 아마존 MGM 영화 책임자 코트니 발렌티는 배우 발표를 서두르지 않겠다고 말했다. 팀을 공개하되 얼굴을 공개하지 않은 상태가, 공식에 가까운 중간 보고다.",
        ],
      },
      {
        heading: "모르는 것",
        paragraphs: [
          "다음 본드 배우의 이름은 이 글을 쓰는 시점에 007.com의 확정이 아니다. 2026년 9월 전후로 제작 관련자가 ‘이미 골랐다’고 한 인터뷰, 그리고 언론이 나열한 후보 명단은 보도와 가십의 칸이다. 확인되지 않은 캐스팅을 사실처럼 굳히지 않는다.",
          "캐스팅 후보 목록, 하차 설, 스트리밍 이관 설은 확인 전의 보도다. 패스칼이 ‘연말 발표가 타당한 베팅’이라고 한 발언도 일정의 힌트이지, 날짜의 확정이 아니다. 다음 편이 리부트인지 연속인지는 그 편이 나온 뒤에 배우 교체 글을 고치면 된다.",
        ],
      },
      {
        heading: "연속과 공백",
        paragraphs: [
          "공식 25와 비공식 2는 갈려 있고, 크레이그 다섯 편의 동기는 베스퍼와 마들렌 페이지에 남아 있다. 집을 방어선으로 쓴 스카이폴과, 마들렌을 고른 스펙터와, 섬에 남은 노 타임 투 다이를 한 연속으로 읽는 습관이다. 다음 얼굴이 그 연속을 받을지는 화면이 결정한다. 그 화면이 나오기 전의 이름은 공백이다.",
        ],
      },
    ],
    gossip: [
      {
        label: "확인됨",
        text: "크레이그의 공식 본드는 다섯 편이다. 카지노 로얄부터 노 타임 투 다이까지. 007.com 배우·필름 목록과 일치한다.",
      },
      {
        label: "확인됨",
        text: "2025년 아마존 MGM이 윌슨·브로콜리와 합작 법인을 만들고 창작 주도권을 가져간 발표는 AP·Deadline·아마존 회사 뉴스가 공유한다.",
      },
      {
        label: "제작진 인터뷰",
        text: "2026년 4월 시네마콘에서 코트니 발렌티가 배우 발표를 서두르지 않겠다고 한 발언은 Variety가 전한다. 연출·각본·제작 팀 이름은 그 자리에서 반복되었다.",
      },
      {
        label: "미확인",
        text: "다음 공식 본드 배우의 이름은 007.com이 올리지 않았다. ‘이미 골랐다’는 제3자 인터뷰와 후보 명단은 이 칸에만 둔다.",
      },
    ],
    related: [
      { href: "/films/no-time-to-die", label: "노 타임 투 다이" },
      { href: "/films/spectre", label: "스펙터" },
      { href: "/films/skyfall", label: "스카이폴" },
      { href: "/bonds/daniel-craig", label: "대니얼 크레이그" },
      { href: "/issues/actor-succession", label: "배우 교체와 리부트" },
      { href: "/issues/official-and-unofficial", label: "공식 25와 비공식 2" },
    ],
    sources: [
      {
        label: "007.com — No Time to Die",
        href: "https://www.007.com/the-films/no-time-to-die/",
      },
      { label: "007.com — The Films", href: "https://www.007.com/the-films/" },
      {
        label: "AP — Amazon MGM takes creative reins of James Bond (2025-02-20)",
        href: "https://apnews.com/article/james-bond-mgm-amazon-broccoli-62db8105bb262e5bbea11b16e2edd9f2",
      },
      {
        label: "Amazon — Amazon MGM Studios gains creative control (2025)",
        href: "https://www.aboutamazon.com/news/company-news/amazon-mgm-studios-james-bond",
      },
      {
        label: "Variety — Amazon MGM on Bond actor search (2026-04-15)",
        href: "https://variety.com/2026/film/news/amazon-james-bond-actor-search-taking-time-1236722826/",
      },
    ],
  },
  {
    slug: "official-and-unofficial",
    title: "공식 25와 비공식 2",
    teaser:
      "에온의 정식 시리즈 25편과, 제작사가 다른 비공식 작품 2편입니다.",
    status: "게시",
    excerpt:
      "에온 공식 시리즈는 25편입니다. 제작사가 다른 비공식 작품 2편은 별도 목록에 있습니다. 합계 27편입니다.",
    sections: [
      {
        heading: "숫자를 나누는 이유",
        paragraphs: [
          "에온 공식 시리즈는 25편이다. 1962년 《닥터 노》부터 2021년 《노 타임 투 다이》까지, 에온이 만든 본드다. 007.com의 필름 가이드도 공식 25편을 한 목록으로 소개한다. 한국에서 《닥터 노》는 《007 살인번호》로 불리기도 했지만, 목록의 제목은 닥터 노다. 제목의 습관과 제작의 소유권은 같은 목록이 아니다.",
          "비공식 두 편은 영화 허브의 아래칸과 각각의 상세에 있다. 공식 타임라인의 6번·13번이 아니다. 배우의 얼굴이 같아도—코너리가 1983년에 돌아와도—편수는 갈린다. 코너리의 공식 편수는 여섯이다. 일곱 번째가 아니다.",
        ],
      },
      {
        heading: "1967 패러디, 1983 권리",
        paragraphs: [
          "《카지노 로얄》(1967)은 첫 소설의 영화 권리가 에온 밖에 있던 시절의 패러디다. 찰스 K. 펠드먼 쪽이 컬럼비아 계열로 만들었고, 데이비드 니븐과 여러 감독의 풍자다. 같은 해 에온은 《두 번 산다》를 냈다. 2006년 에온의 《카지노 로얄》은 같은 제목의 리부트이지, 이 편의 속편이 아니다. 바카라의 긴장보다 스파이 영화 자체를 희화하는 쪽이 앞선다.",
          "《네버 세이 네버 어게인》(1983)은 《썬더볼 작전》을 둘러싼 케빈 매컬로리 쪽 권리의 결과로, 코너리가 에온 밖에서 복귀한 작품이다. 어빈 커슈너가 연출하고, 같은 해 에온은 《옥토퍼시》를 냈다. 줄거리의 뼈대—핵 탈취와 스펙터 계열의 협박—는 1965년 공식 4편과 겹친다. 리메이크인지 별도 작품인지를 한 단어로 닫지 않는다. 권리의 갈림이 만든 재촬영에 가깝고, 에온 연속성의 다음 편은 아니다.",
        ],
      },
      {
        heading: "원작과의 거리",
        paragraphs: [
          "이언 플레밍의 소설이 두 갈래의 권리 위에 놓인 적이 있다. 《카지노 로얄》의 영화 권리와 《썬더볼》 쪽 권리가 에온의 장기 계약과 어긋난 자리가, 비공식 두 편의 출발이다. 007.com은 2006년 공식 《카지노 로얄》 페이지에서, 첫 소설의 권리가 에온에 늦게 들어왔다는 점을 적는다. 플레밍의 문장이 한 줄이어도, 화면의 소유권은 여러 줄이다.",
          "검색과 포스터가 007을 붙인 제목으로 1967년과 1983년을 공식 칸에 앉히기도 한다. 비공식 상세는 열려 있되, 에온 공식 시리즈는 25편이다. 숫자의 갈림은 취향이 아니라 제작의 경계다. 경계가 흐려지면 리부트와 패러디가 한 목록의 6번·21번이 된다. 코너리의 얼굴로 썬더볼을 두 번 보는 경험은 가능하되, 공식 편수는 여섯이다.",
        ],
      },
    ],
    related: [
      { href: "/films", label: "영화 허브" },
      { href: "/films/casino-royale-1967", label: "카지노 로얄 (1967)" },
      { href: "/films/never-say-never-again", label: "네버 세이 네버 어게인" },
      { href: "/films/casino-royale-2006", label: "카지노 로얄 (2006) · 공식" },
      { href: "/films/thunderball", label: "썬더볼 작전 · 공식" },
      { href: "/ian-fleming", label: "원작 · 이언 플레밍" },
    ],
    sources: [
      { label: "007.com — The Films", href: "https://www.007.com/the-films/" },
      {
        label: "007.com — The James Bond Film Guide (official 25)",
        href: "https://www.007.com/the-james-bond-film-guide/",
      },
      {
        label: "Wikipedia — Casino Royale (1967 film)",
        href: "https://en.wikipedia.org/wiki/Casino_Royale_(1967_film)",
      },
      {
        label: "Wikipedia — Never Say Never Again",
        href: "https://en.wikipedia.org/wiki/Never_Say_Never_Again",
      },
    ],
  },
];

export function getIssue(slug: string) {
  return issues.find((issue) => issue.slug === slug);
}

export function liveIssueTeaser(raw: string) {
  return raw
    .replaceAll("이슈 허브에서 준비 중이다", "이슈 글로 이어집니다")
    .replaceAll("이슈 허브에서 준비 중입니다", "이슈 글로 이어집니다")
    .replaceAll("이슈 허브에 준비 중이다", "이슈 글로 이어집니다")
    .replaceAll("이슈 허브에 준비 중 카드로 올려 두었다", "이슈 글로 열어 두었습니다")
    .replaceAll("이슈 허브에 준비 중 카드로 남겨 두었다", "이슈 글로 남겨 두었습니다")
    .replaceAll("준비 중 카드로 올려 두었다", "글로 열어 두었습니다")
    .replaceAll("이슈 허브의 준비 중 카드와 맞닿아 있다", "이슈 글과 맞닿아 있습니다")
    .replaceAll("이슈 페이지에서 다룰 예정", "이슈 글에서 이어 읽습니다")
    .replaceAll("이슈 허브에서 다룰 예정", "이슈 글에서 이어 읽습니다")
    .replaceAll("이슈 허브의 성별·교체 항목에서 다룰 예정", "이슈 글에서 이어 읽습니다")
    .replaceAll("이슈 허브의 성별·과잉 항목에서 다룰 예정", "이슈 글에서 이어 읽습니다")
    .replaceAll("이슈 허브의 교체 항목에서 다룰 예정", "이슈 글에서 이어 읽습니다")
    .replaceAll("이슈 허브에서 따로 열 예정이다", "이슈 글로 이어집니다")
    .replaceAll("항목을 이슈 허브에서 준비 중이다", "글로 이어집니다")
    .replaceAll("이슈 허브에 열려 있다", "이슈 글로 열려 있습니다");
}

/** Film detail “이슈” chips → published essays. */
export const filmIssueSlug: Record<string, string> = {
  "dr-no": "reread-bond-girls",
  "from-russia-with-love": "reread-bond-girls",
  goldfinger: "gadgets-and-reality",
  thunderball: "gadgets-and-reality",
  "you-only-live-twice": "reread-bond-girls",
  "on-her-majestys-secret-service": "actor-succession",
  "diamonds-are-forever": "actor-succession",
  "live-and-let-die": "reread-bond-girls",
  "the-man-with-the-golden-gun": "reread-bond-girls",
  "the-spy-who-loved-me": "reread-bond-girls",
  moonraker: "reread-bond-girls",
  "for-your-eyes-only": "reread-bond-girls",
  octopussy: "reread-bond-girls",
  "a-view-to-a-kill": "actor-succession",
  "the-living-daylights": "actor-succession",
  "licence-to-kill": "reread-bond-girls",
  goldeneye: "actor-succession",
  "tomorrow-never-dies": "gadgets-and-reality",
  "the-world-is-not-enough": "reread-bond-girls",
  "die-another-day": "gadgets-and-reality",
  "casino-royale-2006": "actor-succession",
  "quantum-of-solace": "reread-bond-girls",
  skyfall: "after-craig",
  spectre: "after-craig",
  "no-time-to-die": "after-craig",
};
