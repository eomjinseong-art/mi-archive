import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { GossipBoard } from "@/components/GossipBoard";
import { SisterCta } from "@/components/SisterCta";
import { Fn } from "@/components/Sources";
import { getCar } from "@/data/cars";
import type { CarL1 } from "@/data/filmDetails";
import { carImages, otherVehicleImage } from "@/data/licensedImages";
import type { OtherVehicle } from "@/data/otherVehicles";

export function FilmVehiclesBlock({
  cars,
  extras,
}: {
  cars?: CarL1;
  extras: OtherVehicle[];
  filmTitleKo?: string;
  filmTitleEn?: string;
}) {
  const featured =
    cars?.carSlugs
      .map((slug) => {
        const car = getCar(slug);
        if (!car) return null;
        return { car, slug };
      })
      .filter((row): row is { car: NonNullable<ReturnType<typeof getCar>>; slug: string } =>
        Boolean(row),
      ) ?? [];
  const featuredSlugs = new Set(featured.map((row) => row.slug));
  const extraRows = extras.filter(
    (vehicle) => !vehicle.carSlug || !featuredSlugs.has(vehicle.carSlug),
  );

  if (!cars && extraRows.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">이 영화의 차량</h2>
      <p className="mt-2 text-xs text-muted">
        문서가 있는 추격 차량과, 그 밖의 차입니다. 사진은 같은 모델의 공용 사진입니다.
      </p>

      {cars ? (
        <div className="mt-4 rounded-lg border border-line bg-card p-4">
          <p className="text-[11px] uppercase tracking-wide text-gold">주요 차량</p>
          <h3 className="mt-1 font-serif text-lg text-paper">{cars.title}</h3>
          <p className="mt-3 text-sm leading-7 text-paper">
            {cars.body}
            {cars.footnoteN ? <Fn n={cars.footnoteN} /> : null}
          </p>
        </div>
      ) : null}

      {featured.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {featured.map(({ car, slug }) => {
            const image = carImages[slug];
            if (!image) throw new Error(`차량 사진이 없습니다: ${slug}`);
            return (
            <article key={slug} className="rounded-lg border border-line p-3">
              <CreditedMedia
                image={image}
                tone={car.posterTone}
                alt={image.alt}
                aspectClass="aspect-video"
                sizes="(max-width: 640px) 100vw, 50vw"
                href={car.hasL2 ? `/cars/${slug}` : undefined}
                vehicleCredit
              />
              <p className="mt-2 text-[11px] text-gold">{car.badges.join(" · ")}</p>
              {car.hasL2 ? (
                <Link
                  href={`/cars/${slug}`}
                  className="mt-1 block font-serif text-sm text-paper hover:text-gold"
                >
                  {car.nameKo} ({car.nameEn})
                </Link>
              ) : (
                <p className="mt-1 font-serif text-sm text-paper">
                  {car.nameKo} ({car.nameEn})
                </p>
              )}
            </article>
            );
          })}
        </div>
      ) : null}

      {extraRows.length > 0 ? (
        <div className="mt-6">
          <h3 className="font-serif text-lg text-gold">그 밖의 차량</h3>
          <ul className="mt-3 space-y-3">
            {extraRows.map((vehicle) => {
              const linked = vehicle.carSlug ? getCar(vehicle.carSlug) : undefined;
              const image = otherVehicleImage(vehicle);
              if (!image) throw new Error(`차량 사진이 없습니다: ${vehicle.nameEn}`);
              return (
                <li
                  key={`${vehicle.nameEn}-${vehicle.nameKo}`}
                  className="rounded-lg border border-line p-3 sm:p-4"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[11rem_1fr]">
                    <CreditedMedia
                      image={image}
                      tone={
                        linked?.posterTone ??
                        "linear-gradient(165deg,#1a1a14 0%,#0B0D10 50%,#C6A75E22 100%)"
                      }
                      alt={image.alt}
                      aspectClass="aspect-video"
                      sizes="(max-width: 640px) 100vw, 11rem"
                      href={linked?.hasL2 ? `/cars/${vehicle.carSlug}` : undefined}
                      vehicleCredit
                    />
                    <div>
                      <p className="text-sm text-paper">
                        {vehicle.nameKo} ({vehicle.nameEn})
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">{vehicle.note}</p>
                      <p className="mt-2 text-xs text-gold">{vehicle.popularity}</p>
                      <div className="mt-2 flex flex-wrap gap-3">
                        {linked?.hasL2 ? (
                          <Link
                            href={`/cars/${vehicle.carSlug}`}
                            className="text-xs text-gold hover:underline"
                          >
                            차량 허브
                          </Link>
                        ) : null}
                        {vehicle.sources?.slice(0, 2).map((source) => (
                          <a
                            key={source.href}
                            href={source.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gold hover:underline"
                          >
                            {source.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {cars?.gossipTeasers && cars.gossipTeasers.length > 0 ? (
        <div className="mt-5">
          <p className="text-[11px] text-muted">
            가십 티저 · 확인됨 / 제작진 인터뷰 / 팬 설 / 미확인
          </p>
          <div className="mt-3">
            <GossipBoard items={cars.gossipTeasers} />
          </div>
        </div>
      ) : null}

      {cars ? (
        <div className="mt-5">
          <SisterCta label={cars.ctaLabel} path={cars.ctaPath} />
        </div>
      ) : null}
    </section>
  );
}
