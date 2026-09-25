import { hotels } from "./hotels";
import { landmarks, type Landmark } from "./landmarks";
import type { BondHotel } from "./hotels";
import type { Source } from "./types";

export type MapPin = {
  id: string;
  lat: number;
  lng: number;
  placeKo: string;
  placeEn: string;
  city: string;
  country: string;
  filmSlugs: string[];
  sceneNote: string;
  hotelIds: string[];
  mapsQuery: string;
  whyPopular?: string;
  sources: Source[];
  kind: "landmark" | "hotel";
};

/** Approximate city centres for archive pins. Not survey-grade. */
const CITY_COORDS: Record<string, [number, number]> = {
  칼람바카: [39.704, 21.627],
  코르푸: [39.625, 19.922],
  암스테르담: [52.367, 4.904],
  "베스트란 피오르드 일대": [61.926, 5.121],
  함부르크: [53.551, 9.993],
  멕시칼리: [32.625, -115.452],
  "멕시코 현지 세트": [19.432, -99.133],
  멕시코시티: [19.432, -99.133],
  "멕시코시티 · 아카풀코": [16.853, -99.824],
  몬테카를로: [43.738, 7.427],
  에르푸드: [31.436, -4.233],
  탕헤르: [35.759, -5.834],
  뉴올리언스: [29.951, -90.072],
  뉴욕: [40.713, -74.006],
  라스베이거스: [36.17, -115.14],
  "마이애미 비치": [25.791, -80.13],
  샌프란시스코: [37.775, -122.419],
  키웨스트: [24.555, -81.78],
  하와이: [21.307, -157.858],
  나소: [25.048, -77.355],
  "뉴 프로비던스": [25.044, -77.35],
  "스태니엘 케이": [24.174, -76.447],
  리우데자네이루: [-22.907, -43.173],
  이과수: [-25.695, -54.437],
  라우터브루넨: [46.593, 7.909],
  뮈렌: [46.559, 7.892],
  "쉴트호른 · 뮈렌": [46.559, 7.892],
  "발레 주": [46.02, 7.749],
  스탄스: [46.958, 8.366],
  티치노: [46.004, 8.952],
  글렌코: [56.683, -5.102],
  빌바오: [43.263, -2.935],
  카디스: [36.527, -6.288],
  "쇠다이크뢰쿠르 일대": [64.151, -21.942],
  바쿠: [40.409, 49.867],
  런던: [51.507, -0.128],
  리브스든: [51.698, -0.424],
  "스토크 포지스": [51.535, -0.595],
  애스콧: [51.401, -0.676],
  "이버 히스": [51.547, -0.52],
  브레겐츠: [47.503, 9.747],
  빈: [48.208, 16.373],
  알타우세: [47.638, 13.77],
  죌덴: [46.97, 11.007],
  기자: [29.977, 31.132],
  룩소르: [25.687, 32.64],
  "가르다 호": [45.606, 10.696],
  로마: [41.903, 12.496],
  마테라: [40.666, 16.604],
  베네치아: [45.441, 12.315],
  시에나: [43.319, 11.331],
  "코르티나 담페초": [46.54, 12.135],
  트레메치나: [45.987, 9.229],
  "포르토 체르보": [41.133, 9.532],
  "포르토 체르보 해상": [41.12, 9.55],
  우다이푸르: [24.585, 73.712],
  고베: [34.69, 135.196],
  기리시마: [31.804, 130.766],
  나가사키: [32.75, 129.878],
  도쿄: [35.676, 139.65],
  히메지: [34.839, 134.694],
  "몬테고 베이 일대": [18.476, -77.893],
  오라카베사: [18.403, -76.946],
  "오초 리오스": [18.403, -77.109],
  킹스턴: [17.971, -76.793],
  "포트 로열": [17.937, -76.841],
  "포트 안토니오": [18.18, -76.451],
  "폴머스 일대": [18.494, -77.656],
  상하이: [31.23, 121.474],
  지브롤터: [36.141, -5.353],
  카를로비바리: [50.232, 12.871],
  "안토파가스타 사막": [-24.88, -69.0],
  "배핀 섬": [66.0, -72.0],
  방콕: [13.756, 100.502],
  팡응아: [8.274, 98.372],
  푸켓: [7.88, 98.392],
  이스탄불: [41.009, 28.978],
  파나마시티: [8.982, -79.52],
  칼소이: [62.333, -7.168],
  이스토릴: [38.703, -9.398],
  카스카이스: [38.697, -9.421],
  아레시보: [18.472, -66.716],
  맹시: [48.965, 2.888],
  샹티이: [49.194, 2.471],
  아네: [45.526, 4.753],
  오트피레네: [43.0, 0.15],
  파리: [48.857, 2.352],
  홍콩: [22.319, 114.169],
  마카오: [22.198, 113.544],
  마이애미: [25.762, -80.192],
  프라하: [50.075, 14.438],
  나소바하마: [25.048, -77.355],
};

const CITY_ALIAS: Record<string, string> = {
  "쉴트호른 · 뮈렌": "뮈렌",
};

function normalizeCity(city: string): string {
  return CITY_ALIAS[city] ?? city;
}

function coordsFor(city: string): [number, number] | undefined {
  return CITY_COORDS[city] ?? CITY_COORDS[normalizeCity(city)];
}

function jitter(index: number): [number, number] {
  const angle = (index * 2.4) % (Math.PI * 2);
  const radius = 0.08 + (index % 3) * 0.04;
  return [Math.cos(angle) * radius, Math.sin(angle) * radius];
}

function hotelsNearCity(city: string, filmSlug?: string): string[] {
  const needle = normalizeCity(city);
  return hotels
    .filter((hotel) => {
      const sameCity = normalizeCity(hotel.city) === needle;
      if (!sameCity) return false;
      if (filmSlug) return hotel.filmSlugs.includes(filmSlug);
      return true;
    })
    .map((hotel) => hotel.slug);
}

export function buildMapPins(): MapPin[] {
  const byCity = new Map<string, number>();
  const pins: MapPin[] = [];
  const citiesWithLandmarks = new Set<string>();

  for (const place of landmarks) {
    const coords = coordsFor(place.city);
    if (!coords) continue;
    const cityKey = normalizeCity(place.city);
    citiesWithLandmarks.add(cityKey);
    const n = byCity.get(cityKey) ?? 0;
    byCity.set(cityKey, n + 1);
    const [dx, dy] = jitter(n);
    pins.push({
      id: place.slug,
      lat: coords[0] + dx,
      lng: coords[1] + dy,
      placeKo: place.placeKo,
      placeEn: place.placeEn,
      city: place.city,
      country: place.country,
      filmSlugs: [place.filmSlug],
      sceneNote: place.sceneNote,
      hotelIds: hotelsNearCity(place.city, place.filmSlug).slice(0, 3),
      mapsQuery: place.mapsQuery,
      whyPopular: place.whyPopular,
      sources: place.sources.slice(0, 3),
      kind: "landmark",
    });
  }

  for (const hotel of hotels) {
    const cityKey = normalizeCity(hotel.city);
    if (citiesWithLandmarks.has(cityKey)) continue;
    const coords = coordsFor(hotel.city);
    if (!coords) continue;
    const n = byCity.get(cityKey) ?? 0;
    byCity.set(cityKey, n + 1);
    const [dx, dy] = jitter(n);
    pins.push({
      id: `hotel-${hotel.slug}`,
      lat: coords[0] + dx,
      lng: coords[1] + dy,
      placeKo: hotel.nameKo,
      placeEn: hotel.nameEn,
      city: hotel.city,
      country: hotel.country,
      filmSlugs: hotel.filmSlugs,
      sceneNote: hotel.sceneNote,
      hotelIds: [hotel.slug],
      mapsQuery: hotel.mapsQuery,
      whyPopular: hotel.fameNote,
      sources: hotel.sources.slice(0, 3),
      kind: "hotel",
    });
  }

  return pins;
}

export function pinsForFilm(filmSlug: string, all = buildMapPins()) {
  return all.filter((pin) => pin.filmSlugs.includes(filmSlug));
}

export function hotelById(id: string): BondHotel | undefined {
  return hotels.find((hotel) => hotel.slug === id);
}

export function landmarkBySlug(slug: string): Landmark | undefined {
  return landmarks.find((item) => item.slug === slug);
}
