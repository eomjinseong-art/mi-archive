import type { Source } from "./types";

export function wiki(path: string, label: string): Source {
  return { label: `Wikipedia — ${label}`, href: `https://en.wikipedia.org/wiki/${path}` };
}

export const WIKI_SERIES = wiki(
  "Mission:_Impossible_(film_series)",
  "Mission: Impossible (film series)",
);

export const WIKI_TV = wiki(
  "Mission:_Impossible_(1966_TV_series)",
  "Mission: Impossible (1966 TV series)",
);

export const BMW_ROGUE = {
  label: "BMW Group — Rogue Nation partnership",
  href: "https://www.press.bmwgroup.com/global/article/detail/T0209809EN/high-speed-high-tech-high-excitement?language=en",
};
