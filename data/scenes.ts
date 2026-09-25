import { filmDetails } from "./filmDetails";
import { films } from "./films";

export type OfficialScene = {
  filmSlug: string;
  titleKo: string;
  filmTitleKo: string;
  youtubeId: string;
  note: string;
};

export type FanClip = {
  titleKo: string;
  href: string;
  note: string;
};

const sceneNotes: Record<string, { titleKo: string; note: string }> = {
  "dr-no": {
    titleKo: "닥터 노 공식 예고편",
    note: "시리즈의 첫 톤—자메이카, 이름 소개, 해변—이 압축된 트레일러. 필름 상세와 같은 007 채널 예고.",
  },
  "from-russia-with-love": {
    titleKo: "위기일발 공식 예고편",
    note: "오리엔트 특급과 이스탄불. 시리즈가 스릴러에 가장 가까운 편의 홍보.",
  },
  goldfinger: {
    titleKo: "골드핑거 예고편",
    note: "금과 레이저, DB5의 윤곽이 처음 관객에게 제시된 홍보 영상.",
  },
  thunderball: {
    titleKo: "썬더볼 작전 예고편",
    note: "바하마의 수중 작전과 스펙터의 핵 협박. 필름 페이지와 같은 공식 트레일러.",
  },
  "you-only-live-twice": {
    titleKo: "두 번 산다 예고편",
    note: "일본의 화산 기지와 우주선. 코너리 시대가 가장 크게 벌어진 편의 홍보.",
  },
  "on-her-majestys-secret-service": {
    titleKo: "여왕폐하 대작전 예고편",
    note: "알프스와 결혼. 레이즌비 한 편의 스키와 결말이 예고에 스친다.",
  },
  "diamonds-are-forever": {
    titleKo: "다이아몬드는 영원히 예고편",
    note: "라스베이거스와 위장. 코너리가 돌아온 편의 공식 트레일러.",
  },
  "live-and-let-die": {
    titleKo: "죽느냐 사느냐 예고편",
    note: "무어 첫 편. 보트 추격과 카리브의 톤이 압축된 공식 예고.",
  },
  "the-man-with-the-golden-gun": {
    titleKo: "황금총을 가진 사나이 예고편",
    note: "스카라망가의 한 발과 방콕·섬. 필름 상세와 같은 트레일러.",
  },
  "the-spy-who-loved-me": {
    titleKo: "나를 사랑한 스파이 예고편",
    note: "스키 점프와 에스프리가 바다로 들어가는 1970년대 대형 세트.",
  },
  moonraker: {
    titleKo: "문레이커 예고편",
    note: "우주 정거장과 낙하산. 시리즈가 가장 크게 열린 편의 공식 홍보.",
  },
  "for-your-eyes-only": {
    titleKo: "유어 아이즈 온리 예고편",
    note: "그리스 절벽과 ATAC. 거대 기지보다 잠수를 고른 편의 예고.",
  },
  octopussy: {
    titleKo: "옥토퍼시 예고편",
    note: "서커스 열차와 인도. 무어 후반의 대형 세트가 압축된 공식 트레일러.",
  },
  "a-view-to-a-kill": {
    titleKo: "뷰 투 어 킬 예고편",
    note: "금문교와 실리콘 밸리. 무어 마지막 편의 공식 예고.",
  },
  "the-living-daylights": {
    titleKo: "리빙 데이라이츠 예고편",
    note: "달튼 첫 편. 스키와 V8 밴티지의 윤곽.",
  },
  "licence-to-kill": {
    titleKo: "살인면허 예고편",
    note: "면허 박탈과 유조선. 복수가 임무를 대신하는 달튼 두 번째 편의 홍보.",
  },
  goldeneye: {
    titleKo: "골든아이 공식 예고편 2",
    note: "댐 점프와 006. 6년 공백 뒤 부활을 알리는 트레일러.",
  },
  "tomorrow-never-dies": {
    titleKo: "네버 다이 예고편",
    note: "미디어 재벌과 원격 조종 세단. 필름 페이지와 같은 공식 트레일러.",
  },
  "the-world-is-not-enough": {
    titleKo: "언리미티드 예고편",
    note: "파이프라인과 템스. 브로스넌 세 번째 편의 공식 홍보.",
  },
  "die-another-day": {
    titleKo: "어나더데이 예고편",
    note: "아이스 팰리스와 호버크래프트. 브로스넌 마지막 편의 공식 트레일러.",
  },
  "casino-royale-2006": {
    titleKo: "카지노 로얄 퍼스트 풀 트레일러",
    note: "공식 제임스 본드 채널에 올라 있는 2006년 트레일러.",
  },
  "quantum-of-solace": {
    titleKo: "퀀텀 오브 솔러스 예고편",
    note: "시에나와 사막. 카지노 로얄의 한 시간 뒤를 잇는 공식 예고.",
  },
  skyfall: {
    titleKo: "스카이폴 인터내셔널 트레일러",
    note: "런던과 스카이폴 저택, DB5 귀환이 섞인 공식 예고.",
  },
  spectre: {
    titleKo: "스펙터 트레일러",
    note: "공식 007 채널. 로마 추격과 조직의 얼굴.",
  },
  "no-time-to-die": {
    titleKo: "노 타임 투 다이 파이널 인터내셔널 트레일러",
    note: "007.com에도 안내된 공식 채널 트레일러.",
  },
};

export const officialScenes: OfficialScene[] = films.flatMap((film) => {
  const detail = filmDetails[film.slug];
  if (!detail?.trailerYoutubeId) return [];
  const meta = sceneNotes[film.slug];
  return [
    {
      filmSlug: film.slug,
      titleKo: meta?.titleKo ?? `${film.titleKo} 공식 예고편`,
      filmTitleKo: film.titleKo,
      youtubeId: detail.trailerYoutubeId,
      note:
        meta?.note ??
        `${film.year}년 공식 시리즈 예고. 필름 상세와 같은 트레일러.`,
    },
  ];
});

export const fanClips: FanClip[] = [
  {
    titleKo: "허니 라이더 해변 장면 — 팬 업로드 검색",
    href: "https://www.youtube.com/results?search_query=Dr+No+Honey+Ryder+beach",
    note: "공식 채널 외 클립. 저작권 상태에 따라 영상이 사라질 수 있다.",
  },
  {
    titleKo: "골드핑거 레이저 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=Goldfinger+laser+scene+Bond",
    note: "산업용 레이저 아래의 대사. 전문은 영화를 기준으로 한다.",
  },
  {
    titleKo: "DB5 가젯 모음 — 팬 편집 검색",
    href: "https://www.youtube.com/results?search_query=Aston+Martin+DB5+Bond+gadgets",
    note: "골드핑거·스카이폴·NTTD 컷을 이어 붙인 비공식 편집이 많다.",
  },
  {
    titleKo: "썬더볼 수중 전투 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=Thunderball+underwater+battle",
    note: "바하마에서 찍은 잠수 작전. 공식 채널 밖 업로드가 대부분이다.",
  },
  {
    titleKo: "여왕폐하 스키·bobsled — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=OHMSS+ski+chase+bobsled",
    note: "알프스 추격. 팬 업로드는 잘리거나 사라질 수 있다.",
  },
  {
    titleKo: "에스프리 바다 진입 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=Lotus+Esprit+submarine+The+Spy+Who+Loved+Me",
    note: "사를다의 잠수함 쿠페. 비공식 편집이 많다.",
  },
  {
    titleKo: "골든아이 댐 점프 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=GoldenEye+dam+bungee+jump",
    note: "오프닝 벙지. 전문은 영화를 기준으로 한다.",
  },
  {
    titleKo: "카지노 로얄 파쿠르 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=Casino+Royale+parkour+scene",
    note: "프리릴 아카데미 추격. 전문은 영화를 기준으로 한다.",
  },
  {
    titleKo: "스카이폴 런던 추격 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=Skyfall+London+Underground+chase",
    note: "지하철과 의사당. 공식 예고에 스친 컷의 팬 업로드.",
  },
  {
    titleKo: "노 타임 투 다이 마테라 — 팬 클립 검색",
    href: "https://www.youtube.com/results?search_query=No+Time+to+Die+Matera+DB5+chase",
    note: "이탈리아 석조 도시의 DB5. 비공식 클립은 외부 링크입니다.",
  },
];
