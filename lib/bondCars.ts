import { bondArchiveUrl } from "@/lib/site";

/**
 * Bond car pages checked on 2026-09-25 against the live film archive
 * (https://bond-archive-two.vercel.app/cars). Each href returned HTTP 200
 * and a film-archive title. Other Mission: Impossible brands had no match.
 */
export const VERIFIED_BOND_CARS = [
  {
    brand: "BMW",
    slug: "bmw-z3",
    nameKo: "BMW Z3",
    nameEn: "BMW Z3",
    filmKo: "골든아이",
  },
  {
    brand: "BMW",
    slug: "bmw-750il",
    nameKo: "BMW 750iL",
    nameEn: "BMW 750iL",
    filmKo: "네버 다이",
  },
] as const;

export function bondCarsForBrand(brand: string) {
  const key = brand.trim().toLowerCase();
  return VERIFIED_BOND_CARS.filter((car) => car.brand.toLowerCase() === key).map(
    (car) => ({
      ...car,
      href: bondArchiveUrl("car", `/cars/${car.slug}`),
    }),
  );
}
