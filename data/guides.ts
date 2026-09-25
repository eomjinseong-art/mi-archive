export type GuideStep = {
  filmSlug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  why: string;
  hasDetail: boolean;
};

export type GuidePath = {
  slug: string;
  titleKo: string;
  titleEn: string;
  summary: string;
  steps: GuideStep[];
};

export const guides: GuidePath[] = [
  {
    slug: "first",
    titleKo: "처음",
    titleEn: "First",
    summary:
      "리부트의 충격으로 시작해, 시리즈의 유산을 확인한 뒤, 원점의 골드핑거로 돌아간다.",
    steps: [
      {
        filmSlug: "casino-royale-2006",
        titleKo: "카지노 로얄",
        titleEn: "Casino Royale",
        year: 2006,
        why: "00이 되는 과정부터 보여 주어 세계관 설명이 필요 없다.",
        hasDetail: true,
      },
      {
        filmSlug: "skyfall",
        titleKo: "스카이폴",
        titleEn: "Skyfall",
        year: 2012,
        why: "현대 본드가 옛 집과 DB5를 인정하는 작품. 시리즈 문법의 해설에 가깝다.",
        hasDetail: true,
      },
      {
        filmSlug: "goldfinger",
        titleKo: "골드핑거",
        titleEn: "Goldfinger",
        year: 1964,
        why: "앞의 두 편이 왜 고전을 호출하는지, 원본을 보면 분명해진다.",
        hasDetail: true,
      },
    ],
  },
  {
    slug: "classic",
    titleKo: "정통",
    titleEn: "Classic",
    summary: "코너리 초반 3부작. 이름, 기차, 금—본드 공식의 설계도.",
    steps: [
      {
        filmSlug: "dr-no",
        titleKo: "닥터 노",
        titleEn: "Dr. No",
        year: 1962,
        why: "문장과 톤이 처음 찍힌 작품. 본드카 이전의 본드를 볼 수 있다.",
        hasDetail: true,
      },
      {
        filmSlug: "from-russia-with-love",
        titleKo: "위기일발",
        titleEn: "From Russia with Love",
        year: 1963,
        why: "오리엔트 특급과 근접 격투. 시리즈가 스파이 스릴러에 가장 가까운 편.",
        hasDetail: true,
      },
      {
        filmSlug: "goldfinger",
        titleKo: "골드핑거",
        titleEn: "Goldfinger",
        year: 1964,
        why: "가젯·악당·본드카 템플릿이 완성된다.",
        hasDetail: true,
      },
    ],
  },
  {
    slug: "action",
    titleKo: "액션",
    titleEn: "Action",
    summary: "추격과 폭파를 우선할 때. 90년대 부활에서 리부트, 그리고 크레이그의 마지막.",
    steps: [
      {
        filmSlug: "goldeneye",
        titleKo: "골든아이",
        titleEn: "GoldenEye",
        year: 1995,
        why: "댐 점프와 탱크. 브로스넌 시대가 시리즈를 다시 크게 연다.",
        hasDetail: true,
      },
      {
        filmSlug: "casino-royale-2006",
        titleKo: "카지노 로얄",
        titleEn: "Casino Royale",
        year: 2006,
        why: "파쿠르와 근접전. 액션이 캐릭터를 만드는 리부트.",
        hasDetail: true,
      },
      {
        filmSlug: "no-time-to-die",
        titleKo: "노 타임 투 다이",
        titleEn: "No Time to Die",
        year: 2021,
        why: "마테라 DB5부터 섬의 공성까지, 크레이그 액션의 총량.",
        hasDetail: true,
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
