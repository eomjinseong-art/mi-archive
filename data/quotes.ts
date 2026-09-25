import { filmDetails } from "./filmDetails";
import { films } from "./films";
import type { QuoteItem } from "./types";

export type QuoteGroup = {
  filmSlug: string;
  filmTitleKo: string;
  filmTitleEn: string;
  year: number;
  items: QuoteItem[];
};

/** 필름 상세에 없는, 허브에서만 보강하는 화면 인용. 영어 원문으로 중복을 가린다. */
const extraQuotes: Record<string, QuoteItem[]> = {
  "on-her-majestys-secret-service": [
    {
      speaker: "트레이시",
      textKo: "제임스… 난 알아. 당신 같은 남자는 다시 없을 거야.",
      textEn: "I know I'll never find another man like you.",
      spoiler: false,
    },
  ],
  "the-spy-who-loved-me": [
    {
      speaker: "아냐 아마소바",
      textKo: "내가 당신을 죽일 때는, 기쁠 거예요.",
      textEn: "When I kill you, it will be a pleasure.",
      spoiler: false,
    },
  ],
  "the-living-daylights": [
    {
      speaker: "제임스 본드",
      textKo: "난 프로만 죽여. 그 애인은 총의 앞뒤도 몰랐어.",
      textEn:
        "I only kill professionals. That girl didn't know one end of a rifle from the other.",
      spoiler: false,
    },
    {
      speaker: "제임스 본드",
      textKo: "그 여자 간담을 서늘하게 한 모양이군.",
      textEn:
        "Whoever she was, I must have scared the living daylights out of her.",
      spoiler: false,
    },
  ],
  "casino-royale-2006": [
    {
      speaker: "제임스 본드",
      textKo: "내가 상관이나 해 보이냐?",
      textEn: "Do I look like I give a damn?",
      spoiler: false,
    },
  ],
  "quantum-of-solace": [
    {
      speaker: "M",
      textKo: "자네에게 필요한 건 위안 한 줌이야.",
      textEn: "I think you need a quantum of solace.",
      spoiler: false,
    },
  ],
  skyfall: [
    {
      speaker: "Q",
      textKo: "덜 무작위적인 살인 기계, 더 개인적인 진술이지.",
      textEn:
        "Less of a random killing machine, more of a personal statement.",
      spoiler: false,
    },
  ],
  spectre: [
    {
      speaker: "블로펠드",
      textKo: "자네는 허리케인 속의 연이야, 미스터 본드.",
      textEn: "You're a kite dancing in a hurricane, Mr Bond.",
      spoiler: false,
    },
  ],
};

function mergeQuotes(base: QuoteItem[], extra: QuoteItem[] = []): QuoteItem[] {
  const seen = new Set(base.map((q) => q.textEn.trim().toLowerCase()));
  return [
    ...base,
    ...extra.filter((q) => !seen.has(q.textEn.trim().toLowerCase())),
  ];
}

export const quoteGroups: QuoteGroup[] = films.flatMap((film) => {
  const detail = filmDetails[film.slug];
  if (!detail?.quotes.length) return [];
  return [
    {
      filmSlug: film.slug,
      filmTitleKo: film.titleKo,
      filmTitleEn: film.titleEn,
      year: film.year,
      items: mergeQuotes(detail.quotes, extraQuotes[film.slug]),
    },
  ];
});
