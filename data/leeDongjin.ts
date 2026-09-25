import type { Source } from "./types";

export type CriticVerification = "primary" | "secondary";

export type LeeDongjinNote = {
  filmSlug: string;
  filmTitleKo: string;
  scoreLabel: string | null;
  quoteKo: string;
  paraphrase: boolean;
  verification: CriticVerification;
  noteKo: string;
  sources: Source[];
  accessedNote: string;
};

export const leeDongjinBio = {
  nameKo: "이동진",
  nameEn: "Lee Dong-jin",
  oneLiner:
    "영화 평론가입니다. 씨네21과 왓챠피디아에 공개된 007 별점·한줄평입니다.",
  about: [
    "이동진은 한국에서 영화 소개와 별점으로 널리 알려진 평론가입니다. 왓챠피디아와 네이버 블로그(lifeisntcool), 씨네21 전문가 별점 칸이 1차 창구입니다.",
    "씨네21 원문과, 언론·위키에 인용된 요약입니다. 확인된 기록은 에온 공식 시리즈입니다.",
  ],
  links: [
    {
      label: "왓챠피디아 — 이동진 영화 평가",
      href: "https://pedia.watcha.com/ko/users/3Bnvw8pdM5PAY/contents/movies/ratings",
    },
    {
      label: "네이버 블로그 — lifeisntcool",
      href: "https://blog.naver.com/lifeisntcool",
    },
    {
      label: "씨네21 — 007 스카이폴 전문가 별점",
      href: "https://cine21.com/movie/info/?movie_id=33948",
    },
  ] satisfies Source[],
};

export const leeDongjinNotes: LeeDongjinNote[] = [
  {
    filmSlug: "casino-royale-2006",
    filmTitleKo: "카지노 로얄",
    scoreLabel: "★★★½ (3.5/5)",
    quoteKo: "탄탄하게 잘 짜여진 블록버스터",
    paraphrase: true,
    verification: "secondary",
    noteKo:
      "언론·위키 등에서 인용된 요약입니다. 나무위키가 이동진의 별 3.5와 「탄탄하게 잘 짜여진 블록버스터」라는 요지를 전합니다. 씨네21 작품 전문가 칸·왓챠 개인 별점 칸에서 같은 숫자를 직접 확인하지는 못했습니다.",
    sources: [
      {
        label: "나무위키 — 007 카지노 로얄 (국내 평가 요약)",
        href: "https://namu.wiki/w/007%20%EC%B9%B4%EC%A7%80%EB%85%B8%20%EB%A1%9C%EC%96%84",
      },
      {
        label: "왓챠피디아 — 007 카지노 로얄 (2006)",
        href: "https://pedia.watcha.com/ko/contents/mYdEMpd",
      },
    ],
    accessedNote:
      "1차(씨네21 전문가 칸·왓챠 별점 칸)는 미확인. 위키 요약과 왓챠 작품 페이지만 대조했습니다.",
  },
  {
    filmSlug: "quantum-of-solace",
    filmTitleKo: "퀀텀 오브 솔러스",
    scoreLabel: "5/10 · ★★☆",
    quoteKo: "카지노 로얄에서 뒤로 두 걸음",
    paraphrase: false,
    verification: "primary",
    noteKo:
      "씨네21 전문가 별점 칸에 이동진 5점과 한줄평 「카지노 로얄에서 뒤로 두 걸음」이 실려 있습니다. 10점 만점입니다. 전편을 기준으로 한 짧은 비교평입니다.",
    sources: [
      {
        label: "씨네21 — 007 퀀텀 오브 솔러스 전문가 별점 (이동진 5)",
        href: "https://cine21.com/movie/info/?movie_id=20680",
      },
    ],
    accessedNote: "씨네21 작품 페이지에서 전문가 별점·한줄평을 확인했습니다.",
  },
  {
    filmSlug: "skyfall",
    filmTitleKo: "스카이폴",
    scoreLabel: "9/10 · ★★★★☆",
    quoteKo: "올해의 블록버스터",
    paraphrase: false,
    verification: "primary",
    noteKo:
      "씨네21 전문가 별점 칸에 이동진 9점과 한줄평 「올해의 블록버스터」가 실려 있습니다. 5점 만점으로 환산하면 4.5에 해당합니다. 같은 칸에서 김혜리는 6점을 줘, 전문가 안에서도 온도가 갈립니다. 긴 리뷰 원문은 붙이지 않습니다.",
    sources: [
      {
        label: "씨네21 — 007 스카이폴 전문가 별점 (이동진 9 · 올해의 블록버스터)",
        href: "https://cine21.com/movie/info/?movie_id=33948",
      },
      {
        label: "왓챠피디아 — 007 스카이폴",
        href: "https://pedia.watcha.com/ko/contents/m5x42l5",
      },
    ],
    accessedNote: "씨네21 작품 페이지에서 전문가 별점·한줄평을 확인했습니다.",
  },
  {
    filmSlug: "spectre",
    filmTitleKo: "스펙터",
    scoreLabel: "5/10 · ★★☆",
    quoteKo: "007 시리즈와 가족영화의 부정교합.",
    paraphrase: false,
    verification: "primary",
    noteKo:
      "씨네21 전문가 별점 칸에 이동진 5점과 한줄평 「007 시리즈와 가족영화의 부정교합.」이 실려 있습니다. 「멘데스답지 않은 안일함과 경박함」은 같은 칸의 박평식 한줄평이며, 이동진의 문장이 아닙니다.",
    sources: [
      {
        label: "씨네21 — 007 스펙터 전문가 별점 (이동진 5)",
        href: "https://cine21.com/movie/info/?movie_id=43891",
      },
    ],
    accessedNote: "씨네21 작품 페이지에서 전문가 별점·한줄평을 확인했습니다.",
  },
  {
    filmSlug: "no-time-to-die",
    filmTitleKo: "노 타임 투 다이",
    scoreLabel: "★★☆ (2.5/5)",
    quoteKo: "",
    paraphrase: true,
    verification: "secondary",
    noteKo:
      "언론·위키 등에서 인용된 요약입니다. 나무위키가 이동진 별점을 ★★☆(2.5/5)로 적습니다. 씨네21 《노 타임 투 다이》 전문가 별점 칸은 배동미·박평식·이용철·김철홍이며 이동진은 없습니다. 왓챠 작품 페이지에서도 개인 별점을 특정하지 못했습니다. 숫자는 확정하지 않고 2차로만 남깁니다.",
    sources: [
      {
        label: "나무위키 — 007 노 타임 투 다이 (국내 평가)",
        href: "https://namu.wiki/w/007%20%EB%85%B8%20%ED%83%80%EC%9E%84%20%ED%88%AC%20%EB%8B%A4%EC%9D%B4",
      },
      {
        label: "씨네21 — 007 노 타임 투 다이 전문가 별점 (이동진 없음)",
        href: "https://cine21.com/movie/info/?movie_id=54726",
      },
      {
        label: "왓챠피디아 — 007 노 타임 투 다이",
        href: "https://pedia.watcha.com/ko/contents/m5Zz795",
      },
    ],
    accessedNote:
      "씨네21 전문가 칸에 이동진이 없어, 별점 숫자는 위키 2차 인용으로 표시합니다.",
  },
];

export function leeNotesForFilm(filmSlug: string) {
  return leeDongjinNotes.filter((note) => note.filmSlug === filmSlug);
}

export const LEE_DONGJIN_HREF = "/critics/lee-dong-jin";
