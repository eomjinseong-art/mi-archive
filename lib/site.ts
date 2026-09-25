export const SITE_NAME = "본드 필름 아카이브";
export const SITE_TAGLINE =
  "1962년 《닥터 노》부터 2021년 《노 타임 투 다이》까지";
export const SITE_SUB =
  "에온 공식 시리즈 25편과 여섯 명의 제임스 본드. 인물, 차량, 감독, 명장면을 모았습니다.";

export const SISTER_SITE_URL =
  process.env.NEXT_PUBLIC_SISTER_SITE_URL ??
  "https://british-motors.vercel.app";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/films", label: "영화" },
  { href: "/records", label: "기록" },
  { href: "/ian-fleming", label: "원작" },
  { href: "/directors", label: "감독" },
  { href: "/bonds", label: "본드" },
  { href: "/craig", label: "크레이그" },
  { href: "/bond-girls", label: "본드걸" },
  { href: "/cars", label: "차량" },
  { href: "/scenes", label: "명장면" },
  { href: "/videos", label: "영상" },
  { href: "/locations", label: "명소" },
  { href: "/hotels", label: "호텔" },
  { href: "/map", label: "지도" },
  { href: "/quotes", label: "명대사" },
  { href: "/issues", label: "이슈" },
  { href: "/guide", label: "가이드" },
] as const;

export function sisterUrl(
  path = "/",
  opts?: { medium?: string; campaign?: string },
) {
  const url = new URL(path, SISTER_SITE_URL);
  url.searchParams.set("utm_source", "bond-archive");
  url.searchParams.set("utm_medium", opts?.medium ?? "header");
  url.searchParams.set("utm_campaign", opts?.campaign ?? "sister-site");
  return url.toString();
}

export function bondCarCta(path = "/brands/aston-martin") {
  return sisterUrl(path, { medium: "cta", campaign: "bond-car" });
}

export function displayTitle(titleKo: string, titleEn: string) {
  return `${titleKo} (${titleEn})`;
}
