export type Source = {
  label: string;
  href: string;
};

export type Footnote = {
  n: number;
  text: string;
};

export type GossipLabel = "확인됨" | "제작진 인터뷰" | "팬 설" | "미확인";

export type GossipItem = {
  label: GossipLabel;
  text: string;
};

export type QuoteItem = {
  textKo: string;
  textEn: string;
  speaker: string;
  spoiler: boolean;
};

export type SearchKind =
  | "영화"
  | "차량"
  | "가젯"
  | "인물"
  | "악당"
  | "감독"
  | "원작"
  | "이슈"
  | "명소"
  | "여행"
  | "기록"
  | "영상";

export type LicensedImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  isPlaceholder?: boolean;
  /** Site-owned stand-in. Caption is 대표 이미지, with no third-party credit. */
  isSiteDefault?: boolean;
  objectPosition?: string;
  /** Shown when the photo is a same-model production car, not the film vehicle. */
  referenceNote?: string;
};

export type SearchHit = {
  kind: SearchKind;
  href: string;
  title: string;
  hint: string;
  keywords?: string;
};
