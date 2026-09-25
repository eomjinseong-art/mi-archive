import { officialScenes } from "./scenes";

export const OFFICIAL_CHANNEL = {
  handle: "@007",
  nameKo: "James Bond 007",
  href: "https://www.youtube.com/@007",
};

/** Official YouTube channel chrome as of this edit — outbound only. */
export const officialChannelTabs = [
  {
    id: "home",
    labelKo: "홈",
    labelEn: "Home",
    href: "https://www.youtube.com/@007",
    note: "공식 채널 첫 화면. 최근 업로드와 선별 선반이 보입니다.",
  },
  {
    id: "videos",
    labelKo: "동영상",
    labelEn: "Videos",
    href: "https://www.youtube.com/@007/videos",
    note: "채널에 올라 있는 공식 장편·예고·특집의 목록.",
  },
  {
    id: "shorts",
    labelKo: "Shorts",
    labelEn: "Shorts",
    href: "https://www.youtube.com/@007/shorts",
    note: "공식 계정 숏폼.",
  },
  {
    id: "live",
    labelKo: "실시간",
    labelEn: "Live",
    href: "https://www.youtube.com/@007/streams",
    note: "공식 라이브·지난 스트림 탭.",
  },
  {
    id: "playlists",
    labelKo: "재생목록",
    labelEn: "Playlists",
    href: "https://www.youtube.com/@007/playlists",
    note: "채널이 묶어 둔 공식 재생목록.",
  },
  {
    id: "posts",
    labelKo: "게시물",
    labelEn: "Posts",
    href: "https://www.youtube.com/@007/posts",
    note: "채널 커뮤니티 게시물.",
  },
] as const;

export const officialCategoryLinks = [
  {
    id: "trailers",
    labelKo: "공식 예고편",
    query: "Official Trailer",
    href: "https://www.youtube.com/@007/search?query=Official%20Trailer",
    note: "Official Trailer 검색.",
  },
  {
    id: "behind",
    labelKo: "비하인드",
    query: "Behind the Scenes",
    href: "https://www.youtube.com/@007/search?query=Behind%20the%20Scenes",
    note: "제작기·현장.",
  },
  {
    id: "featurette",
    labelKo: "특집",
    query: "Featurette",
    href: "https://www.youtube.com/@007/search?query=Featurette",
    note: "작품별 특집 클립입니다.",
  },
  {
    id: "music",
    labelKo: "주제가 · 뮤직비디오",
    query: "Official Music Video",
    href: "https://www.youtube.com/@007/search?query=Official%20Music%20Video",
    note: "공식 계정에 올라 있는 타이틀곡·뮤직비디오 검색.",
  },
  {
    id: "bond60",
    labelKo: "60주년 · 기념",
    query: "Bond 60",
    href: "https://www.youtube.com/@007/search?query=Bond%2060",
    note: "60주년 기념 캠페인.",
  },
] as const;

export const officialTrailerEmbeds = officialScenes.map((scene) => ({
  filmSlug: scene.filmSlug,
  titleKo: scene.titleKo,
  filmTitleKo: scene.filmTitleKo,
  youtubeId: scene.youtubeId,
  note: scene.note,
}));

export const videosIntro = {
  title: "영상",
  lede: "공식 YouTube @007 채널의 예고편과 제작기입니다.",
};
