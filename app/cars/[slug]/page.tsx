import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CreditedMedia } from "@/components/CreditedMedia";
import { GossipBoard } from "@/components/GossipBoard";
import { SisterCta } from "@/components/SisterCta";
import { Fn, Sources } from "@/components/Sources";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { carDetails, getCar, type IconCar } from "@/data/cars";
import { carImages } from "@/data/licensedImages";

const sisterCtaByBrand: Record<string, { label: string; path: string }> = {
  "Aston Martin": { label: "애스턴 마틴 이어보기", path: "/brands/aston-martin" },
  "Land Rover": { label: "랜드로버 이어보기", path: "/brands/land-rover" },
  Mini: { label: "미니 이어보기", path: "/brands/mini" },
  Lotus: { label: "로터스 이어보기", path: "/brands/lotus" },
  Jaguar: { label: "재규어 이어보기", path: "/brands/jaguar" },
};

function getSisterCta(car: IconCar) {
  return sisterCtaByBrand[car.brand] ?? null;
}

export function generateStaticParams() {
  return Object.keys(carDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "차량" };
  return { title: `${car.nameKo} (${car.nameEn})` };
}

function Prose({
  paragraphs,
  footnote,
}: {
  paragraphs: string[];
  footnote?: { index: number; n: number };
}) {
  return (
    <div className="mt-3 space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 20)}`} className="text-sm leading-7 text-paper">
          {paragraph}
          {footnote && footnote.index === index ? <Fn n={footnote.n} /> : null}
        </p>
      ))}
    </div>
  );
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCar(slug);
  const detail = carDetails[slug];
  if (!car || !detail) notFound();
  const sisterCta = getSisterCta(car);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={carImages[car.slug]}
        tone={car.posterTone}
        alt={carImages[car.slug]?.alt ?? `${car.nameKo} (${car.nameEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {car.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold"
          >
            {b}
          </span>
        ))}
      </div>
      <h1 className="mt-3 font-serif text-3xl text-paper">
        {car.nameKo} ({car.nameEn})
      </h1>
      <p className="mt-2 text-sm text-muted">
        {car.brandKo} · {car.era} · {car.filmTitleKo}
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {car.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">개요</h2>
        <Prose paragraphs={detail.overview} footnote={{ index: 0, n: 2 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">타임라인</h2>
        <ol className="mt-3 space-y-3">
          {detail.timeline.map((row, index) => (
            <li key={`${row.year}-${index}`} className="rounded-lg border border-line p-4">
              <p className="text-xs text-gold">{row.year}</p>
              <p className="mt-1 text-sm leading-6 text-paper">{row.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">화면에서</h2>
        <Prose paragraphs={detail.onScreen} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">제작</h2>
        <Prose paragraphs={detail.production} footnote={{ index: 0, n: 3 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">가십 보드</h2>
        <p className="mt-2 text-xs text-muted">
          라벨: 확인됨 / 제작진 인터뷰 / 팬 설 / 미확인
        </p>
        <div className="mt-4">
          <GossipBoard items={detail.gossip} />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연속성</h2>
        <Prose paragraphs={detail.continuity} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">영상</h2>
        <div className="mt-3 space-y-6">
          {detail.videos.map((video) => (
            <div key={video.id}>
              <YouTubeEmbed id={video.id} title={video.title} />
              <p className="mt-2 text-xs text-muted">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {sisterCta ? (
        <div className="mt-8 rounded-lg border border-line bg-card p-4">
          <p className="text-sm text-muted">
            실차의 선과 브랜드 이야기를 영국차 큐레이션에서 이어볼 수 있습니다.
          </p>
          <div className="mt-4">
            <SisterCta label={sisterCta.label} path={sisterCta.path} />
          </div>
        </div>
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">관련</h2>
        <ul className="mt-3 space-y-2">
          {detail.related.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-paper hover:text-gold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6 text-sm">
        <Link href="/cars" className="text-gold">
          차량 허브
        </Link>
      </p>

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
    </article>
  );
}
