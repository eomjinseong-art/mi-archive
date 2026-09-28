import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreditedMedia } from "@/components/CreditedMedia";
import { agents } from "@/data/agents";
import { cars } from "@/data/cars";
import { directors } from "@/data/directors";
import { displayFilmTitle, films } from "@/data/films";
import { gadgets } from "@/data/gadgets";
import {
  carImages,
  defaultImageNotes,
  filmImages,
  gadgetImages,
  imageOrDefault,
  otherVehicleImage,
  personImage,
} from "@/data/licensedImages";
import { allOtherVehicles } from "@/data/otherVehicles";
import { villains } from "@/data/villains";
import { women } from "@/data/women";
import { pageSeo } from "@/lib/seo";
import { FAN_DISCLAIMER } from "@/lib/site";
import type { LicensedImage } from "@/data/types";

export const metadata = pageSeo({
  path: "/credits",
  title: "사진 출처",
  description:
    "미션 임파서블 아카이브 차량 사진의 위키미디어 공용 출처와 라이선스.",
});

function CreditCard({
  href,
  title,
  image,
  tone,
}: {
  href: string;
  title: string;
  image: LicensedImage;
  tone: string;
}) {
  return (
    <li className="rounded-lg border border-line bg-card p-3">
      <CreditedMedia
        image={image}
        tone={tone}
        alt={image.alt}
        aspectClass="aspect-video"
        sizes="(max-width: 640px) 100vw, 50vw"
        compactCredit={false}
        href={href}
      />
      <Link href={href} className="mt-2 block font-serif text-sm text-paper hover:text-gold">
        {title}
      </Link>
    </li>
  );
}

export default function CreditsPage() {
  const tone = "linear-gradient(165deg,#1a1a14 0%,#0B0D10 50%,#C6A75E22 100%)";
  const people = [
    ...agents.map((person) => ({ person, href: `/agents/${person.slug}` })),
    ...women
      .filter((person) => !agents.some((agent) => agent.slug === person.slug))
      .map((person) => ({ person, href: `/women/${person.slug}` })),
    ...villains
      .filter((person) => !agents.some((agent) => agent.slug === person.slug))
      .map((person) => ({ person, href: `/villains/${person.slug}` })),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "사진 출처", path: "/credits" }]} />
      <p className="max-w-3xl text-sm leading-7 text-paper">{FAN_DISCLAIMER}</p>
      <h1 className="mt-8 font-serif text-3xl text-paper">사진 출처</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        차량과 인물 사진은 위키미디어 공용의 퍼블릭 도메인, CC0, CC BY, CC BY-SA
        사진만 씁니다. 영화 포스터, 스틸, 배급사 보도 사진이 아닙니다. 영화
        페이지의 차는 그 편에 나온 양산 모델의 참고 사진이고, 설명에 같은 모델
        참고 사진이라고 적습니다. 자유 이용 사진이 없는 칸은 대표 이미지를 씁니다.
      </p>

      <h2 className="mt-8 font-serif text-xl text-gold">주요 차량</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cars.map((car) => (
          <CreditCard
            key={car.slug}
            href={car.hasL2 ? `/cars/${car.slug}` : "/cars"}
            title={`${car.nameKo} (${car.nameEn})`}
            image={carImages[car.slug]}
            tone={car.posterTone}
          />
        ))}
      </ul>

      <h2 className="mt-12 font-serif text-xl text-gold">그 밖의 차량</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {allOtherVehicles().map((vehicle) => {
          const image = otherVehicleImage(vehicle);
          if (!image) return null;
          return (
            <CreditCard
              key={`${vehicle.filmSlug}-${vehicle.nameEn}`}
              href={`/films/${vehicle.filmSlug}`}
              title={`${vehicle.nameKo} (${vehicle.nameEn})`}
              image={image}
              tone={tone}
            />
          );
        })}
      </ul>

      <h2 className="mt-12 font-serif text-xl text-gold">영화</h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        빈 칸이었던 편은 그 편의 대표 양산 차량입니다. 이미 있던 랜드마크 사진은
        그대로 두었습니다. 같은 차량 파일은 차량 칸에도 있습니다.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {films.flatMap((film) => {
          const image = filmImages[film.slug];
          if (!image || image.isSiteDefault) return [];
          return [
            <CreditCard
              key={film.slug}
              href={`/films/${film.slug}`}
              title={displayFilmTitle(film)}
              image={image}
              tone={film.posterTone}
            />,
          ];
        })}
      </ul>

      <h2 className="mt-12 font-serif text-xl text-gold">감독</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {directors.flatMap((director) => {
          if (!director.image || director.image.isSiteDefault) return [];
          return [
            <CreditCard
              key={director.slug}
              href={`/directors/${director.slug}`}
              title={`${director.nameKo} (${director.nameEn})`}
              image={director.image}
              tone={director.posterTone}
            />,
          ];
        })}
      </ul>

      <h2 className="mt-12 font-serif text-xl text-gold">인물</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {people.flatMap(({ person, href }) => {
          const image = personImage(person.slug);
          if (!image || image.isSiteDefault) return [];
          return [
            <CreditCard
              key={href}
              href={href}
              title={`${person.nameKo} · ${person.performerKo}`}
              image={image}
              tone={person.posterTone}
            />,
          ];
        })}
      </ul>

      <h2 className="mt-12 font-serif text-xl text-gold">가젯</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {gadgets.flatMap((item) => {
          const image = gadgetImages[item.slug];
          if (!image || image.isSiteDefault) return [];
          return [
            <CreditCard
              key={item.slug}
              href={`/gadgets/${item.slug}`}
              title={`${item.nameKo} (${item.nameEn})`}
              image={image}
              tone={item.posterTone}
            />,
          ];
        })}
      </ul>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-gold">대표 이미지를 쓰는 항목</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          자유 이용 사진이 없는 칸은 사이트 대표 이미지(밤의 젖은 도로 위 스포츠카)를
          씁니다. 제삼자 출처는 적지 않고 대표 이미지만 표시합니다.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {defaultImageNotes.map((item) => (
            <li key={item.href} className="rounded-lg border border-line bg-card p-3">
              <CreditedMedia
                image={imageOrDefault(undefined, item.name)}
                tone={tone}
                alt={item.name}
                aspectClass="aspect-video"
                sizes="(max-width: 640px) 100vw, 50vw"
                compactCredit={false}
                href={item.href}
              />
              <Link href={item.href} className="mt-2 block font-serif text-sm text-paper hover:text-gold">
                {item.name}
              </Link>
              <p className="mt-2 text-sm leading-6 text-muted">{item.why}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
