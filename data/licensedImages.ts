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

/** Owner photo. Used when no free-license photo exists, and when a photo fails to load. */
export const defaultCarImage: LicensedImage = {
  src: "/images/default-car.webp",
  width: 1672,
  height: 941,
  alt: "밤의 젖은 도로 위 스포츠카 두 대. 사이트 대표 이미지",
  author: "",
  license: "",
  licenseUrl: "",
  sourceUrl: "",
  sourceLabel: "",
  isSiteDefault: true,
  objectPosition: "center",
};

/** @deprecated Use defaultCarImage. Kept so existing fallbacks stay one image. */
export const atmospherePlaceholder: LicensedImage = defaultCarImage;

export function portraitOrAtmosphere(image?: LicensedImage, alt?: string): LicensedImage {
  if (image) return image;
  return alt ? { ...defaultCarImage, alt } : defaultCarImage;
}

export function imageOrDefault(image: LicensedImage | undefined, alt: string): LicensedImage {
  return image ?? { ...defaultCarImage, alt };
}

const CC_BY_SA_20 = "https://creativecommons.org/licenses/by-sa/2.0";
const CC_BY_20 = "https://creativecommons.org/licenses/by/2.0";
const CC_BY_SA_30 = "https://creativecommons.org/licenses/by-sa/3.0";
const CC_BY_SA_40 = "https://creativecommons.org/licenses/by-sa/4.0";
const CC_BY_40 = "https://creativecommons.org/licenses/by/4.0";
const CC_BY_30 = "https://creativecommons.org/licenses/by/3.0";
const FAL = "http://artlibre.org/licence/lal/en";

function withFace(images: Record<string, LicensedImage>): Record<string, LicensedImage> {
  return Object.fromEntries(
    Object.entries(images).map(([key, image]) => [
      key,
      image.objectPosition ? image : { ...image, objectPosition: "center 18%" },
    ]),
  );
}

function portrait(
  file: string,
  width: number,
  height: number,
  alt: string,
  author: string,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
): LicensedImage {
  return {
    src: `/images/people/${file}`,
    width,
    height,
    alt,
    author,
    license,
    licenseUrl,
    sourceUrl,
    sourceLabel: COMMONS,
    objectPosition: "center 18%",
  };
}

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

const directorImageSources: Record<string, LicensedImage> = {
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

export const directorImages = withFace(directorImageSources);

const personImageSources: Record<string, LicensedImage> = {
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
  "william-brandt": portrait(
    "jeremy-renner.jpg",
    1689,
    2200,
    "2013년 피닉스 행사의 제레미 레너. 배역 스틸이 아닙니다.",
    "Gage Skidmore",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Jeremy_Renner_by_Gage_Skidmore_2.jpg",
  ),
  "jim-phelps": portrait(
    "jon-voight.jpg",
    1920,
    2334,
    "존 보이트 초상. 짐 펠프스 역의 배우 사진이며 영화 스틸이 아닙니다.",
    "Greg2600",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Jon_Voight_(22811479478).jpg",
  ),
  "white-widow": portrait(
    "vanessa-kirby.jpg",
    1826,
    2738,
    "2024년 토론토 영화제의 바네사 커비. 배역 스틸이 아닙니다.",
    "Jay Dixit",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Vanessa_Kirby_at_the_2024_Toronto_International_Film_Festival_08_(Cropped).jpg",
  ),
  paris: portrait(
    "pom-klementieff.jpg",
    1920,
    2688,
    "2025년 칸 영화제 포토콜의 폼 클레멘티에프. 배역 스틸이 아닙니다.",
    "Gabriel Hutchinson",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Pom_Klementieff_at_the_2025_Cannes_Film_Festival_01.jpg",
  ),
  "nyah-nordoff-hall": portrait(
    "thandie-newton.jpg",
    1601,
    2033,
    "2019년 코믹콘의 탠디 뉴턴. 배역 스틸이 아닙니다.",
    "Gage Skidmore",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Thandie_Newton_by_Gage_Skidmore_2.jpg",
  ),
  "julia-meade": portrait(
    "michelle-monaghan.jpg",
    1920,
    2475,
    "2011년 토론토 영화제의 미셸 모나한. 배역 스틸이 아닙니다.",
    "Tabercil",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Michelle_Monaghan_at_TIFF.jpg",
  ),
  "claire-phelps": portrait(
    "emmanuelle-beart.jpg",
    1920,
    2409,
    "2022년 베를린 영화제의 에마뉘엘 베아르. 배역 스틸이 아닙니다.",
    "Harald Krichel",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Emmanuelle_B%C3%A9art-5709.jpg",
  ),
  "jane-carter": portrait(
    "paula-patton.jpg",
    1920,
    2642,
    "2015년 코믹콘의 폴라 패튼. 배역 스틸이 아닙니다.",
    "Gage Skidmore",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Paula_Patton_by_Gage_Skidmore.jpg",
  ),
  "sean-ambrose": portrait(
    "dougray-scott.jpg",
    609,
    752,
    "2023년 토론토 영화제의 더그레이 스콧. 배역 스틸이 아닙니다.",
    "Kuya JDL",
    "CC BY 3.0",
    CC_BY_30,
    "https://commons.wikimedia.org/wiki/File:Dougray_Scott_at_Tiff_2023.jpg",
  ),
  "owen-davian": portrait(
    "philip-seymour-hoffman.jpg",
    451,
    781,
    "2011년 토론토 영화제 《머니볼》 시사회장의 필립 시모어 호프만. 배역 스틸이 아닙니다.",
    "Josh Jensen",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Philip_Seymour_Hoffman_crop.jpg",
  ),
  "kurt-hendricks": portrait(
    "michael-nyqvist.jpg",
    1920,
    1837,
    "2016년 빈 시사회의 미카엘 뉘크비스트. 배역 스틸이 아닙니다.",
    "Manfred Werner",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Michael_Nyqvist_2016.jpg",
  ),
  "august-walker": portrait(
    "henry-cavill.jpg",
    1920,
    2880,
    "2024년 런던 《아가일》 시사회의 헨리 카빌. 배역 스틸이 아닙니다.",
    "Daltoncitys",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Henry_Cavill_attending_the_World_premier_of_%22Argylle%22_in_London_,_January_2024.jpg",
  ),
  gabriel: portrait(
    "esai-morales.jpg",
    1920,
    2688,
    "2025년 칸 영화제 포토콜의 에사이 모랄레스. 배역 스틸이 아닙니다.",
    "Gabriel Hutchinson",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Esai_Morales_at_the_2025_Cannes_Film_Festival_05_Cropped.jpg",
  ),
};

export const personImages = withFace(personImageSources);

const CC_BY_SA_20_DE = "https://creativecommons.org/licenses/by-sa/2.0/de/deed.en";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/deed.en";
const PD = "https://creativecommons.org/publicdomain/mark/1.0/";

function carImg(
  slug: string,
  width: number,
  height: number,
  alt: string,
  author: string,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
): LicensedImage {
  return {
    src: `/cars/${slug}.jpg`,
    width,
    height,
    alt,
    author,
    license,
    licenseUrl,
    sourceUrl,
    sourceLabel: COMMONS,
  };
}

export const carImages: Record<string, LicensedImage> = {
  "bmw-vision-efficientdynamics": carImg(
    "bmw-vision-efficientdynamics",
    1200,
    616,
    "양산 BMW i8의 측면. 고스트 프로토콜의 비전 이피션트다이내믹스 콘셉트가 아니고, 영화 스틸이 아닙니다.",
    "Ermell",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_i8_Seitenansicht_17RM0777.jpg",
  ),
  "bmw-6-series": carImg(
    "bmw-6-series",
    1200,
    657,
    "BMW 6시리즈 컨버터블 F12. 고스트 프로토콜 촬영 차량이 아닙니다.",
    "Dinkun Chen",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_6_SERIES_CONVERTIBLE_(F12)_China.jpg",
  ),
  "bmw-m3-f80": carImg(
    "bmw-m3-f80",
    1200,
    800,
    "5세대 BMW M3 F80. 로그네이션 촬영 차량이 아니고, E92도 아닙니다.",
    "Alexandre Prévot",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:BMW_M3_F80_(38282109285).jpg",
  ),
  "bmw-s1000rr": carImg(
    "bmw-s1000rr",
    1200,
    800,
    "뮌헨 BMW 박물관의 S 1000 RR. 로그네이션 촬영 바이크가 아닙니다.",
    "Jiří Sedláček",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_S1000RR_3asy_Ride_in_BMW-Museum_in_Munich,_Bayern.jpg",
  ),
  "bmw-m5-f90": carImg(
    "bmw-m5-f90",
    1200,
    638,
    "2018년 BMW M5. 폴아웃 촬영 차량이 아닙니다.",
    "Vauxford",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:2018_BMW_M5_Automatic_4.4.jpg",
  ),
  "bmw-r-ninet": carImg(
    "bmw-r-ninet",
    1200,
    800,
    "일반 BMW R nineT. 폴아웃의 R nineT 스크램블러 촬영 바이크가 아닙니다.",
    "Wikisympathisant",
    "CC0",
    CC0,
    "https://commons.wikimedia.org/wiki/File:719-look_BMW_R_NineT.jpg",
  ),
  "bmw-5-series-e28": carImg(
    "bmw-5-series-e28",
    1200,
    800,
    "미네르바 블루 BMW M5 E28. 폴아웃의 1986년 5시리즈와 같은 차라고 말하지 않으며, 영화 스틸이 아닙니다.",
    "HLW",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:BMW_M5_E28_Minervablau.jpg",
  ),
  "fiat-500": carImg(
    "fiat-500",
    1200,
    800,
    "2007년형 시판 피아트 500. 데드 레코닝의 촬영용 커스텀 차가 아닙니다.",
    "Lothar Spurzem",
    "CC BY-SA 2.0 de",
    CC_BY_SA_20_DE,
    "https://commons.wikimedia.org/wiki/File:Fiat_500_2007_(2012-07-14).JPG",
  ),
  "audi-tt": carImg(
    "audi-tt",
    1200,
    960,
    "아우디 TT 로드스터 8N. 미션 임파서블 2의 양산 전 프로토타입이 아닙니다.",
    "OWS Photography",
    "CC BY 4.0",
    CC_BY_40,
    "https://commons.wikimedia.org/wiki/File:Audi_TT_Roadster_(8N)_Washington_DC_Metro_Area,_USA.jpg",
  ),
  "triumph-speed-triple": carImg(
    "triumph-speed-triple",
    1200,
    723,
    "2011년 트라이엄프 스피드 트리플 1050. 2000년 2편 촬영 바이크가 아닙니다.",
    "DeFacto",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Triumph_Speed_Triple_1050_2011.jpg",
  ),
  "triumph-daytona": carImg(
    "triumph-daytona",
    1200,
    900,
    "1999년형 트라이엄프 데이토나 955i. 미션 임파서블 2 촬영 바이크가 아닙니다.",
    "Daytonaman955",
    "Public domain",
    PD,
    "https://commons.wikimedia.org/wiki/File:Triumph_Daytona_955i_model_year_1999.jpg",
  ),
  "lamborghini-gallardo": carImg(
    "lamborghini-gallardo",
    1200,
    600,
    "람보르기니 가야르도. 미션 임파서블 3 촬영 차량이 아닙니다.",
    "IFCAR",
    "Public domain",
    PD,
    "https://commons.wikimedia.org/wiki/File:Lamborghini-Gallardo.jpg",
  ),
  "bmw-g310gs": carImg(
    "bmw-g310gs",
    1200,
    799,
    "BMW G 310 GS. 데드 레코닝 촬영 바이크가 아닙니다.",
    "Wikisympathisant",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_G310_GS_2023-08.jpg",
  ),
  "honda-crf250": carImg(
    "honda-crf250",
    1024,
    768,
    "혼다 CRF250L 듀얼스포츠. 데드 레코닝 절벽 점프의 CRF 250과 같은 세부모델이라고 말하지 않습니다.",
    "Takoyashi",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Honda_CRF250L.jpg",
  ),
  "bmw-118i-f20": carImg(
    "bmw-118i-f20",
    1200,
    890,
    "BMW 118i (F20) 정면. 고스트 프로토콜에 짧게 나온 118i와 같은 세대의 시판 차이며, 촬영 차량이 아닙니다.",
    "Tokumeigakarinoaoshima",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_118i_(F20)_front.jpg",
  ),
  "bmw-7-series": carImg(
    "bmw-7-series",
    1200,
    900,
    "2019년 BMW 740Le xDrive. 폴아웃 IMCDb의 2017년 740Le와 같은 G12 7시리즈 세단의 시판 차이며, 촬영 차량이 아닙니다. 보도자료는 7시리즈 세단이라고만 적습니다.",
    "Bindydad123",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:2019_BMW_740Le_xDrive_(1).jpg",
  ),
};

export function otherVehicleImage(vehicle: {
  nameEn: string;
  carSlug?: string;
  imageSlug?: string;
}): LicensedImage | undefined {
  if (vehicle.carSlug && carImages[vehicle.carSlug]) return carImages[vehicle.carSlug];
  if (vehicle.imageSlug) return carImages[vehicle.imageSlug];
  return undefined;
}

export const gadgetImages: Record<string, LicensedImage> = {
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
  halo: img(
    "halo-jump.jpg",
    1920,
    2880,
    "2019년 탈리스만 세이버 훈련의 미군 고고도 저개산 낙하. 폴아웃의 파리 촬영이 아닙니다.",
    "Lance Cpl. Nicole Rogge (U.S. Army)",
    "Public domain",
    PD,
    "https://commons.wikimedia.org/wiki/File:US_-_ADF_special_operations_forces_HALO_parachute_jump_Talisman_Sabre_2019_(5599608).jpg",
    "center",
  ),
};

function filmCar(slug: string, alt: string): LicensedImage {
  const photo = carImages[slug];
  if (!photo) throw new Error(`missing car photo ${slug}`);
  return { ...photo, alt, referenceNote: "같은 모델 참고 사진" };
}

export const filmImages: Record<string, LicensedImage> = {
  "mission-impossible": placeImages.prague,
  "mission-impossible-2": placeImages.sydney,
  "mission-impossible-3": filmCar(
    "lamborghini-gallardo",
    "람보르기니 가야르도 양산 차량. 미션 임파서블 3과 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "ghost-protocol": placeImages.burj,
  "rogue-nation": placeImages.vienna,
  fallout: filmCar(
    "bmw-m5-f90",
    "2018년 BMW M5 양산 차량. 미션 임파서블: 폴아웃과 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "dead-reckoning": filmCar(
    "fiat-500",
    "2007년형 시판 피아트 500. 데드 레코닝의 커스텀 500과 같은 모델의 참고 사진이며 촬영 차량이 아닙니다.",
  ),
  "final-reckoning": {
    ...defaultCarImage,
    alt: "미션 임파서블: 파이널 레코닝",
  },
};

export const defaultImageNotes: { href: string; name: string; why: string }[] = [
  {
    href: "/films/final-reckoning",
    name: "파이널 레코닝",
    why: "이 편의 상징은 잠수함과 복엽기입니다. 아카이브가 기종을 특정하지 않아 다른 복엽기를 같은 모델이라고 적지 않았고, 대표로 쓸 도로 차량도 없습니다.",
  },
  {
    href: "/gadgets/self-destruct",
    name: "자동 파괴 메시지",
    why: "임무 테이프는 영화·텔레비전 소품입니다. 일반 릴 테이프 레코더는 다른 물건이라 쓰지 않았습니다.",
  },
  {
    href: "/gadgets/latex-mask",
    name: "라텍스 가면",
    why: "분장 소품입니다. 시판 가면 사진은 다른 물건입니다.",
  },
  {
    href: "/gadgets/contact-lens",
    name: "스마트 콘택트렌즈",
    why: "영화 속 스마트 렌즈입니다. 일반 콘택트렌즈는 다른 물건입니다.",
  },
  {
    href: "/gadgets/gecko-gloves",
    name: "등반 장갑",
    why: "촬영용 흡착 장갑의 양산 모델 사진이 없습니다. 우주정거장의 게코 접착 실험은 다른 물건입니다.",
  },
  {
    href: "/gadgets/entity-key",
    name: "십자가 열쇠",
    why: "가공의 열쇠라 양산 모델이 없습니다.",
  },
  {
    href: "/villains/the-entity",
    name: "엔티티",
    why: "얼굴이 없는 인공지능입니다. 화면 캡처는 쓰지 않습니다.",
  },
  {
    href: "/villains/solomon-lane",
    name: "솔로몬 레인",
    why: "숀 해리스의 자유 이용 초상은 맥베스 촬영장 스틸뿐이라 쓰지 않았습니다.",
  },
  {
    href: "/origin",
    name: "브루스 겔러",
    why: "위키미디어 공용에 자유 이용 초상이 없습니다. 시리즈 로고는 쓰지 않습니다.",
  },
];

export function personImage(slug: string) {
  return personImages[slug];
}
