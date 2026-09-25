import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { PosterCard } from "@/components/PosterCard";
import { SisterCta } from "@/components/SisterCta";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { bondGirls, isHomeBondGirl } from "@/data/bondGirls";
import { bonds } from "@/data/bonds";
import { cars } from "@/data/cars";
import { directors } from "@/data/directors";
import { featuredFilmSlugs, films, displayFilmTitle } from "@/data/films";
import { fleming, FLEMING_HREF } from "@/data/fleming";
import { guides } from "@/data/guides";
import { issues } from "@/data/issues";
import {
  atmospherePlaceholder,
  bondGirlHeroImage,
  bondImages,
  carImages,
  portraitOrAtmosphere,
} from "@/data/licensedImages";
import {
  OFFICIAL_CHANNEL,
  officialCategoryLinks,
  officialChannelTabs,
} from "@/data/officialVideos";
import { homeRecordTeasers } from "@/data/records";
import { girlFilmLookQuery } from "@/lib/bondGirlLook";
import { quoteGroups } from "@/data/quotes";
import { officialScenes } from "@/data/scenes";
import { SERIES_FRAMING, SERIES_FRAMING_NOTE } from "@/data/series";
import { unofficialFilms } from "@/data/unofficialFilms";
import { LEE_DONGJIN_HREF } from "@/data/leeDongjin";
import { SITE_NAME } from "@/lib/site";

const homeBondGirls = bondGirls.filter(isHomeBondGirl);
const supportingGirlCount = bondGirls.length - homeBondGirls.length;

const stats = [
  { n: films.length, label: "공식 영화" },
  { n: directors.length, label: "감독" },
  { n: bonds.length, label: "본드" },
  { n: homeBondGirls.length, label: "본드걸" },
  { n: cars.length, label: "차량" },
];

export default function HomePage() {
  const featured = featuredFilmSlugs
    .map((slug) => films.find((f) => f.slug === slug))
    .filter((f): f is (typeof films)[number] => Boolean(f));
  const teaserQuotes = [
    quoteGroups
      .find((g) => g.filmSlug === "goldfinger")
      ?.items.find((i) => i.textEn.includes("expect you to die")),
    quoteGroups
      .find((g) => g.filmSlug === "on-her-majestys-secret-service")
      ?.items.find((i) => i.textEn.includes("all the time in the world")),
    quoteGroups
      .find((g) => g.filmSlug === "casino-royale-2006")
      ?.items.find((i) => i.textEn.includes("Any thug can kill")),
  ].filter((q): q is NonNullable<typeof q> => Boolean(q));
  const sceneTeasers = officialScenes.slice(0, 3);

  return (
    <div>
      <section className="border-b border-line bg-[radial-gradient(circle_at_top,_#C6A75E22,_transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">
            Bond Archive
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-paper sm:text-5xl">
            「{SITE_NAME}」
          </h1>
          <div className="mt-6 max-w-3xl space-y-5">
            <p className="text-base leading-7 text-paper sm:text-lg sm:leading-8">
              1962년 《닥터 노》부터
              <br className="sm:hidden" /> 2021년 《노 타임 투 다이》까지.
              <br />
              에온 공식 시리즈 25편과 여섯 명의 제임스 본드.
              <br />
              인물, 차량, 감독, 명장면을 모았습니다.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
              제작사가 다른 비공식 작품 2편은 별도 목록에 있습니다.
              <br />
              합계 27편입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-5 gap-px bg-line">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-2 py-3 sm:px-4 sm:py-4">
              <p className="font-serif text-xl text-gold sm:text-2xl">{stat.n}</p>
              <p className="mt-1 text-[10px] text-muted sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <p className="text-xs leading-6 text-muted sm:text-sm">
            {SERIES_FRAMING} {SERIES_FRAMING_NOTE}{" "}
            <Link href="/films" className="text-gold hover:underline">
              영화 허브
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href={FLEMING_HREF}
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">원작</p>
            <h2 className="mt-2 font-serif text-xl text-paper">
              {fleming.nameKo} ({fleming.nameEn})
            </h2>
            <p className="mt-2 text-xs text-gold">{fleming.years}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{fleming.oneLiner}</p>
            <p className="mt-3 text-sm text-gold">원작 페이지 →</p>
          </Link>
          <Link
            href="/films"
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">
              공식 25 · 비공식 2
            </p>
            <h2 className="mt-2 font-serif text-xl text-paper">
              에온 공식 25편, 비공식 2편
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              에온 공식 시리즈는 25편입니다. 1967년 패러디 《카지노 로얄》과
              1983년 《네버 세이 네버 어게인》은 제작사가 다른 비공식 작품입니다.
            </p>
            <p className="mt-3 text-sm text-gold">배우별 공식 목록 →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">공식 영화 25</h2>
          <Link href="/films" className="text-sm text-muted hover:text-gold">
            타임라인
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {films.map((film) => {
            const href = film.hasDetail ? `/films/${film.slug}` : "/films";
            return (
              <article
                key={film.slug}
                className="rounded-lg border border-line bg-card p-3 hover:border-gold/60"
              >
                <CreditedMedia
                  image={atmospherePlaceholder}
                  tone={film.posterTone}
                  alt={`${film.titleKo} (${film.titleEn})`}
                  aspectClass="aspect-video"
                  sizes="(max-width: 640px) 50vw, 20vw"
                  overlay={{
                    title: film.titleKo,
                    meta: `${film.year} · ${film.actorKo}`,
                  }}
                  href={href}
                />
                <Link href={href} className="mt-2 block">
                  <p className="font-serif text-sm leading-snug text-paper">
                    {film.titleKo}
                  </p>
                  <p className="mt-1 text-[11px] text-muted">
                    {film.year} · {film.actorKo}
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">비공식 2</h2>
          <Link href="/films" className="text-sm text-muted hover:text-gold">
            공식 25와 함께 보기
          </Link>
        </div>
        <p className="mb-4 max-w-3xl text-sm leading-6 text-muted">
          제작사가 다른 비공식 작품 2편입니다. 에온 공식 시리즈와는 별도
          목록입니다.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {unofficialFilms.map((film) => (
            <article
              key={film.slug}
              className="rounded-xl border border-line bg-card p-4 hover:border-gold/60"
            >
              <CreditedMedia
                image={atmospherePlaceholder}
                tone={film.posterTone}
                alt={`${film.titleKo} (${film.titleEn})`}
                aspectClass="aspect-video"
                sizes="(max-width: 640px) 100vw, 50vw"
                overlay={{
                  title: film.titleKo,
                  meta: `${film.year} · ${film.actorKo}`,
                }}
                href={`/films/${film.slug}`}
              />
              <Link href={`/films/${film.slug}`} className="mt-3 block">
                <p className="text-[11px] uppercase tracking-wide text-gold">
                  {film.statusKo}
                </p>
                <h3 className="mt-1 font-serif text-lg text-paper">
                  {displayFilmTitle(film)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {film.year} · {film.actorKo} ({film.actorEn})
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">주목할 작품</h2>
          <Link href="/films" className="text-sm text-muted hover:text-gold">
            25편 타임라인
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((film) => (
            <PosterCard
              key={film.slug}
              title={displayFilmTitle(film)}
              meta={`${film.year} · ${film.actorKo}`}
              tone={film.posterTone}
              href={`/films/${film.slug}`}
              image={atmospherePlaceholder}
              overlayOnImage
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">감독 {directors.length}</h2>
          <Link href="/directors" className="text-sm text-muted hover:text-gold">
            감독 허브
          </Link>
        </div>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {directors.map((director) => (
            <article
              key={director.slug}
              className="w-[46%] shrink-0 rounded-xl border border-line bg-card p-3 hover:border-gold/60 sm:w-auto"
            >
              <CreditedMedia
                image={portraitOrAtmosphere(director.image)}
                tone={director.posterTone}
                alt={
                  director.image?.alt ?? `${director.nameKo} (${director.nameEn})`
                }
                aspectClass="aspect-[3/4]"
                sizes="(max-width: 640px) 46vw, 16vw"
                href={`/directors/${director.slug}`}
              />
              <Link href={`/directors/${director.slug}`} className="mt-2 block">
                <p className="font-serif text-sm leading-snug text-paper">
                  {director.nameKo}
                </p>
                <p className="mt-1 text-[11px] text-gold">
                  {director.nationalityKo} · {director.years} · {director.filmCount}편
                </p>
                <p className="mt-1 text-[11px] leading-4 text-muted">
                  {director.oneLiner}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">기록</h2>
          <Link href="/records" className="text-sm text-muted hover:text-gold">
            흥행 · 관객
          </Link>
        </div>
        <p className="mb-4 max-w-3xl text-sm leading-6 text-muted">
          명목 흥행, 물가 보정, 한국 통합전산망 인용.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {homeRecordTeasers.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
            >
              <p className="text-[11px] uppercase tracking-wide text-gold">
                {item.label}
              </p>
              <h3 className="mt-2 font-serif text-xl text-paper">{item.value}</h3>
              <p className="mt-2 text-sm text-muted">{item.meta}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">본드 6</h2>
          <div className="flex gap-3 text-sm">
            <Link href="/craig" className="text-gold hover:underline">
              크레이그
            </Link>
            <Link href="/bonds" className="text-muted hover:text-gold">
              배우 허브
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bonds.map((bond) => {
            const href = bond.hasDetail ? `/bonds/${bond.slug}` : "/bonds";
            return (
              <article
                key={bond.slug}
                className="rounded-xl border border-line bg-card p-4 hover:border-gold/60"
              >
                <CreditedMedia
                  image={portraitOrAtmosphere(bondImages[bond.slug])}
                  tone={bond.posterTone}
                  alt={
                    bondImages[bond.slug]?.alt ??
                    `${bond.nameKo} (${bond.nameEn})`
                  }
                  href={href}
                />
                <Link href={href} className="mt-3 block">
                  <p className="font-serif text-lg text-paper">
                    {bond.nameKo} ({bond.nameEn})
                  </p>
                  <p className="mt-1 text-xs text-gold">
                    {bond.nationalityKo} · {bond.years} · {bond.filmCount}편
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{bond.oneLiner}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">본드걸 {homeBondGirls.length}</h2>
          <Link href="/bond-girls" className="text-sm text-muted hover:text-gold">
            조연·카메오 포함 허브 · +{supportingGirlCount}명
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeBondGirls.map((girl) => {
            const href = girl.hasDetail ? `/bond-girls/${girl.slug}` : "/bond-girls";
            return (
              <article
                key={girl.slug}
                className="rounded-xl border border-line bg-card p-4 hover:border-gold/60"
              >
                <CreditedMedia
                  image={portraitOrAtmosphere(bondGirlHeroImage(girl.slug))}
                  tone={girl.posterTone}
                  alt={
                    bondGirlHeroImage(girl.slug)?.alt ??
                    `${girl.nameKo} (${girl.nameEn})`
                  }
                  href={href}
                  overlay={
                    bondGirlHeroImage(girl.slug)
                      ? undefined
                      : {
                          title: girl.nameKo,
                          meta: `${girl.actressKo} · ${girl.filmTitleKo}`,
                        }
                  }
                />
                <Link href={href} className="mt-3 block">
                  <p className="font-serif text-lg text-paper">
                    {girl.nameKo} ({girl.nameEn})
                  </p>
                  <p className="mt-1 text-xs text-gold">
                    {girl.actressKo} · {girl.nationalityKo} · {girl.filmTitleKo}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{girl.oneLiner}</p>
                </Link>
                <ImageSearchLink
                  query={girlFilmLookQuery(girl)}
                  label="영화 속 모습 검색"
                />
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">차량 12</h2>
          <Link href="/cars" className="text-sm text-muted hover:text-gold">
            차량 허브
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => {
            const href = car.hasL2 ? `/cars/${car.slug}` : "/cars";
            return (
              <article
                key={car.slug}
                className="rounded-xl border border-line bg-card p-4 hover:border-gold/60"
              >
                <CreditedMedia
                  image={carImages[car.slug]}
                  tone={car.posterTone}
                  alt={carImages[car.slug]?.alt ?? `${car.nameKo} (${car.nameEn})`}
                  href={href}
                />
                <Link href={href} className="mt-3 block">
                  <p className="text-[11px] uppercase tracking-wide text-gold">
                    {car.badges.join(" · ")}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-paper">
                    {car.nameKo} ({car.nameEn})
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{car.oneLiner}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-serif text-xl text-gold">에디토리얼</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/cars/aston-martin-db5"
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">
              DB5와 DBS
            </p>
            <h3 className="mt-2 font-serif text-xl text-paper">
              유산의 은색, 리부트의 전복
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              골드핑거의 DB5가 본드카라는 말을 만들었다면, 카지노 로얄의 DBS는
              버튼을 거의 숨긴 채 활주로에서 뒤집힙니다. 같은 브랜드의 두 쿠페가
              고전 문법과 리부트를 나눠 집니다. 크레이그 후반이 DB5를 다시 전투에
              넣는 이유도 이 분업 위에 있습니다.
            </p>
            <p className="mt-3 text-sm text-gold">DB5 L2 →</p>
          </Link>
          <Link
            href="/guide/first"
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">
              처음이라면
            </p>
            <h3 className="mt-2 font-serif text-xl text-paper">
              왜 카지노 로얄부터인가
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              00이 되는 과정이 화면에 있어 세계관 설명이 필요 없습니다. 스카이폴에서
              유산을 확인한 뒤 골드핑거의 원점으로 돌아가면, 리부트가 무엇을
              벗기고 무엇을 다시 입었는지가 선명해집니다.
            </p>
            <p className="mt-3 text-sm text-gold">처음 가이드 →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">명대사</h2>
          <Link href="/quotes" className="text-sm text-muted hover:text-gold">
            인용 모음
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {teaserQuotes.map((q) => (
            <blockquote
              key={q.textEn}
              className="rounded-xl border border-line bg-card p-4"
            >
              {q.spoiler && (
                <span className="mb-2 inline-block text-[11px] text-gold">
                  스포일러
                </span>
              )}
              <p className="font-serif text-lg text-paper">“{q.textKo}”</p>
              <p className="mt-2 text-xs text-muted">{q.speaker}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">공식 영상 · @007</h2>
          <Link href="/videos" className="text-sm text-muted hover:text-gold">
            채널 탭
          </Link>
        </div>
        <p className="mb-4 max-w-3xl text-sm leading-6 text-muted">
          공식 YouTube {OFFICIAL_CHANNEL.handle} 채널의 예고편과 제작기입니다.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {officialChannelTabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-card p-3 hover:border-gold/60"
            >
              <p className="font-serif text-sm text-paper">{tab.labelKo}</p>
              <p className="mt-1 text-[11px] text-gold">{tab.labelEn}</p>
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {officialCategoryLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold hover:bg-gold/10"
            >
              {item.labelKo} ↗
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">명장면</h2>
          <Link href="/scenes" className="text-sm text-muted hover:text-gold">
            공식 예고편
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {sceneTeasers.map((scene) => (
            <div key={scene.youtubeId} className="rounded-xl border border-line p-4">
              <h3 className="font-serif text-lg text-paper">{scene.titleKo}</h3>
              <p className="mt-1 text-xs text-muted">{scene.filmTitleKo}</p>
              <p className="mt-2 text-sm text-muted">{scene.note}</p>
              <div className="mt-3">
                <YouTubeEmbed id={scene.youtubeId} title={scene.titleKo} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">가이드</h2>
          <Link href="/guide" className="text-sm text-muted hover:text-gold">
            세 갈래
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="rounded-xl border border-line bg-card p-5 hover:border-gold"
            >
              <h3 className="font-serif text-xl text-gold">
                {guide.titleKo}
                <span className="ml-2 text-base text-muted">
                  ({guide.titleEn})
                </span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-paper">{guide.summary}</p>
              <p className="mt-3 text-xs text-muted">
                {guide.steps.map((s) => s.titleKo).join(" → ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">이슈 허브</h2>
          <Link href="/issues" className="text-sm text-muted hover:text-gold">
            글 다섯 편
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              href={`/issues/${issue.slug}`}
              className="rounded-lg border border-line bg-card p-5 hover:border-gold/60"
            >
              <span className="inline-block rounded-full border border-gold/50 px-2 py-0.5 text-[11px] text-gold">
                {issue.status}
              </span>
              <h3 className="mt-3 font-serif text-lg text-paper">{issue.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{issue.teaser}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/locations"
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">명소</p>
            <h2 className="mt-2 font-serif text-xl text-paper">
              런던 · 이스탄불 · 베네치아
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              공식 25편의 촬영지와 화면의 랜드마크입니다.
            </p>
            <p className="mt-3 text-sm text-gold">명소 허브 →</p>
          </Link>
          <Link
            href="/hotels"
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">호텔</p>
            <h2 className="mt-2 font-serif text-xl text-paper">
              폰텐블로 · 푸프 · 칼라 디 볼페
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              화면에 남는 실제 숙소와 별장입니다.
            </p>
            <p className="mt-3 text-sm text-gold">호텔 허브 →</p>
          </Link>
          <Link
            href={LEE_DONGJIN_HREF}
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">국내 평론</p>
            <h2 className="mt-2 font-serif text-xl text-paper">이동진과 007</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              씨네21에서 확인한 스카이폴·퀀텀·스펙터 한줄평, 그리고 언론·위키에
              인용된 요약.
            </p>
            <p className="mt-3 text-sm text-gold">이동진 메모 →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-4">
        <div className="rounded-xl border border-line bg-card p-5 sm:p-8">
          <p className="text-[11px] uppercase tracking-wide text-gold">
            British Motors
          </p>
          <h2 className="mt-2 font-serif text-2xl text-paper">
            은색 실루엣을 영국차 큐레이션에서
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            DB5와 DBS, 1960년대 애스턴의 선을 영국차 큐레이션에서 이어볼 수
            있습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/cars/aston-martin-db5"
              className="rounded-full border border-line px-4 py-2 text-sm text-paper hover:border-gold"
            >
              DB5 자세히
            </Link>
            <SisterCta label="애스턴 마틴 이어보기" />
          </div>
        </div>
      </section>
    </div>
  );
}
