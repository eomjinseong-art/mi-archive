import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImageCredit } from "@/components/ImageCredit";
import { cars } from "@/data/cars";
import { displayFilmTitle, getFilm } from "@/data/films";
import { carImages, otherVehicleImage } from "@/data/licensedImages";
import { allOtherVehicles } from "@/data/otherVehicles";
import { pageSeo } from "@/lib/seo";
import { FAN_DISCLAIMER } from "@/lib/site";

export const metadata = pageSeo({
  path: "/credits",
  title: "사진 출처",
  description:
    "미션 임파서블 아카이브 차량 사진의 위키미디어 공용 출처와 라이선스.",
});

export default function CreditsPage() {
  const featured = cars.map((car) => ({
    key: car.slug,
    nameKo: car.nameKo,
    nameEn: car.nameEn,
    href: car.hasL2 ? `/cars/${car.slug}` : "/cars",
    context: car.filmTitleKo,
    image: carImages[car.slug],
  }));
  const extras = allOtherVehicles().map((vehicle) => {
    const film = getFilm(vehicle.filmSlug);
    return {
      key: `${vehicle.filmSlug}-${vehicle.imageSlug ?? vehicle.nameEn}`,
      nameKo: vehicle.nameKo,
      nameEn: vehicle.nameEn,
      href: "/cars",
      context: film ? displayFilmTitle(film) : vehicle.filmSlug,
      image: otherVehicleImage(vehicle),
    };
  });
  const rows = [...featured, ...extras].filter(
    (row): row is typeof row & { image: NonNullable<(typeof row)["image"]> } =>
      Boolean(row.image),
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "사진 출처", path: "/credits" }]} />
      <h1 className="font-serif text-3xl text-paper">사진 출처</h1>
      <p className="mt-4 text-sm leading-7 text-paper">{FAN_DISCLAIMER}</p>
      <p className="mt-3 text-sm leading-6 text-muted">
        차량 {rows.length}대의 사진입니다. 모두 위키미디어 공용의 자유 이용
        라이선스이며, 촬영에 쓴 그 차가 아닙니다.
      </p>
      <ul className="mt-8 space-y-8">
        {rows.map((row, index) => (
          <li key={row.key} className="rounded-lg border border-line bg-card p-4">
            <Image
              src={row.image.src}
              alt={row.image.alt}
              width={row.image.width}
              height={row.image.height}
              sizes="(max-width: 768px) 100vw, 720px"
              className="h-auto w-full rounded-md"
              {...(index === 0
                ? { priority: true as const }
                : { loading: "lazy" as const })}
            />
            <h2 className="mt-3 font-serif text-xl text-paper">
              <Link href={row.href} className="hover:text-gold">
                {row.nameKo} ({row.nameEn})
              </Link>
            </h2>
            <p className="mt-1 text-xs text-gold">{row.context}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{row.image.alt}</p>
            <ImageCredit image={row.image} vehicle />
          </li>
        ))}
      </ul>
    </div>
  );
}
