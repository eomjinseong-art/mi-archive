import type { LicensedImage } from "./types";

const COMMONS = "Wikimedia Commons";

function img(
  file: string,
  width: number,
  height: number,
  alt: string,
  author: string,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
  objectPosition?: string,
): LicensedImage {
  return {
    src: `/images/licensed/${file}`,
    width,
    height,
    alt,
    author,
    license,
    licenseUrl,
    sourceUrl,
    sourceLabel: COMMONS,
    objectPosition,
  };
}

/** Abstract stand-in. Not a film still. */
export const atmospherePlaceholder: LicensedImage = {
  src: "/images/placeholders/archive-atmosphere.png",
  width: 1600,
  height: 900,
  alt: "어두운 바탕에 금색 호만 있는 아카이브 플레이스홀더",
  author: "아카이브 플레이스홀더",
  license: "사이트 제작 이미지",
  licenseUrl: "",
  sourceUrl: "",
  sourceLabel: "",
  isPlaceholder: true,
  objectPosition: "70% center",
};

export function portraitOrAtmosphere(image?: LicensedImage): LicensedImage {
  return image ?? atmospherePlaceholder;
}

const CC_BY_SA_20 = "https://creativecommons.org/licenses/by-sa/2.0";
const CC_BY_20 = "https://creativecommons.org/licenses/by/2.0";
const CC_BY_SA_30 = "https://creativecommons.org/licenses/by-sa/3.0";
const CC_BY_SA_40 = "https://creativecommons.org/licenses/by-sa/4.0";
const CC_BY_40 = "https://creativecommons.org/licenses/by/4.0";
const FAL = "http://artlibre.org/licence/lal/en";

export const placeImages = {
  prague: img(
    "prague.jpg",
    5021,
    3347,
    "페트르진 전망대에서 본 프라하 카를교. 영화 스틸이 아닙니다.",
    "A.Savin",
    "FAL",
    FAL,
    "https://commons.wikimedia.org/wiki/File:Prague_07-2016_View_from_Petrinska_Tower_img2.jpg",
  ),
  sydney: img(
    "sydney-opera.jpg",
    2544,
    1406,
    "시드니 오페라 하우스. 영화 스틸이 아닙니다.",
    "Diliff",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_-_Dec_2008.jpg",
  ),
  burj: img(
    "burj-khalifa.jpg",
    5184,
    3456,
    "두바이 부르즈 할리파. 영화 스틸이 아닙니다.",
    "Laika ac",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Burj_Khalifa_(16260269606).jpg",
    "center 30%",
  ),
  vienna: img(
    "vienna-opera.jpg",
    4984,
    2859,
    "빈 국립오페라 정면. 영화 스틸이 아닙니다.",
    "P e z i",
    "CC BY-SA 3.0 at",
    "https://creativecommons.org/licenses/by-sa/3.0/at/deed.en",
    "https://commons.wikimedia.org/wiki/File:Staatsoper_Wien_DSC_5273w.jpg",
  ),
};

export const filmImages: Record<string, LicensedImage> = {
  "mission-impossible": placeImages.prague,
  "mission-impossible-2": placeImages.sydney,
  "ghost-protocol": placeImages.burj,
  "rogue-nation": placeImages.vienna,
};

export const directorImages: Record<string, LicensedImage> = {
  "brian-de-palma": img(
    "brian-de-palma.jpg",
    2000,
    3008,
    "2008년 과달라하라 영화제 기자회견의 브라이언 드 팔마",
    "Festival Internacional de Cine en Guadalajara",
    "CC BY 2.0",
    CC_BY_20,
    "https://commons.wikimedia.org/wiki/File:Brian_De_Palma_(Guadalajara_2008)_6.jpg",
  ),
  "john-woo": img(
    "john-woo.jpg",
    374,
    410,
    "2005년 칸 영화제의 존 우",
    "Wikimedia Commons 파일 기여자",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:John_Woo_Cannes_2005.jpg",
  ),
  "jj-abrams": img(
    "jj-abrams.jpg",
    1490,
    2151,
    "몬트클레어 영화제의 J. J. 에이브럼스",
    "Neil Grabowsky / Montclair Film Festival",
    "CC BY 2.0",
    CC_BY_20,
    "https://commons.wikimedia.org/wiki/File:J._J._Abrams_(23175170706)_(cropped).jpg",
  ),
  "brad-bird": img(
    "brad-bird.jpg",
    248,
    332,
    "2009년 베네치아 영화제의 브래드 버드",
    "nicolas genin",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Brad_bird_cropped_2009.jpg",
  ),
  "christopher-mcquarrie": img(
    "christopher-mcquarrie.jpg",
    1000,
    1464,
    "시드니 시사회의 크리스토퍼 맥쿼리",
    "Eva Rinaldi",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Christopher_McQuarrie_(2).jpg",
  ),
};

export const personImages: Record<string, LicensedImage> = {
  "ethan-hunt": img(
    "tom-cruise.jpg",
    1827,
    2711,
    "2025년 칸 영화제의 톰 크루즈. 배역 스틸이 아닙니다.",
    "Harald Krichel",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Tom_Cruise-2428_(cropped).jpg",
  ),
  "luther-stickell": img(
    "ving-rhames.jpg",
    1236,
    2140,
    "2010년의 빙 라메스. 배역 스틸이 아닙니다.",
    "Chris Yarzab",
    "CC BY 2.0",
    CC_BY_20,
    "https://commons.wikimedia.org/wiki/File:Ving_Rhames_2010_(4710601891).jpg",
  ),
  "benji-dunn": img(
    "simon-pegg.jpg",
    2048,
    2552,
    "2010년 코믹콘의 사이먼 페그. 배역 스틸이 아닙니다.",
    "Gage Skidmore",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Simon_Pegg_by_Gage_Skidmore.jpg",
  ),
  "ilsa-faust": img(
    "rebecca-ferguson.jpg",
    3619,
    5429,
    "2025년 베네치아 영화제의 레베카 퍼거슨. 배역 스틸이 아닙니다.",
    "LucaFazPhoto",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Rebecca_Ferguson_at_82nd_Venice_International_Film_Festival-1.jpg",
  ),
  grace: img(
    "hayley-atwell.jpg",
    3989,
    5319,
    "2025년 칸 영화제의 헤일리 앳웰. 배역 스틸이 아닙니다.",
    "Harald Krichel",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Hayley_Atwell-2771.jpg",
  ),
};

export const gadgetImages: Record<string, LicensedImage> = {
  "bmw-m3": img(
    "bmw-m3.jpg",
    4608,
    3456,
    "2024년 브뤼셀 모터쇼의 BMW M3. 로그네이션 촬영 차량이 아닙니다.",
    "Matti Blume",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_M3,_BAS_24,_Brussels_(P1170489).jpg",
  ),
  a400m: img(
    "a400m.jpg",
    5793,
    4345,
    "2025년 에어 타투의 독일 공군 에어버스 A400M. 로그네이션 촬영기는 아닙니다.",
    "Julian Herzog",
    "CC BY 4.0",
    CC_BY_40,
    "https://commons.wikimedia.org/wiki/File:Luftwaffe_Airbus_A400M_54-21_Royal_International_Air_Tattoo_2025_02.jpg",
  ),
};

export function personImage(slug: string) {
  return personImages[slug];
}
