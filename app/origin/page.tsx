import Link from "next/link";
import { ArchiveProse } from "@/components/ArchiveProse";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreditedMedia } from "@/components/CreditedMedia";
import { Fn, Sources } from "@/components/Sources";
import { origin, originDetail } from "@/data/origin";
import { atmospherePlaceholder } from "@/data/licensedImages";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/origin",
  title: "미션 임파서블 원작 1966",
  description: `${origin.oneLiner} CBS 시리즈의 팀, 임무 테이프, 1988년 리바이벌과 1996년 극장판의 차이를 적습니다.`,
});

export default function OriginPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ name: "원작", path: "/origin" }]} />
      <CreditedMedia
        image={atmospherePlaceholder}
        tone={origin.posterTone}
        alt={`${origin.nameKo} (${origin.nameEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={{ title: origin.nameKo, meta: "1966 · CBS" }}
      />
      <p className="mt-4 text-sm text-gold">원작 · {origin.years}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {origin.nameKo} ({origin.nameEn})
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {origin.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">시리즈</h2>
        <ArchiveProse paragraphs={originDetail.bio} footnote={{ index: 0, n: 1 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">팀과 테이프</h2>
        <ArchiveProse paragraphs={originDetail.series} footnote={{ index: 0, n: 2 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">리바이벌과 극장판</h2>
        <ArchiveProse paragraphs={originDetail.revival} footnote={{ index: 0, n: 3 }} />
      </section>

      <p className="mt-8 text-sm">
        <Link href="/films/mission-impossible" className="text-gold">
          1996년 극장판
        </Link>
        {" · "}
        <Link href="/issues/tv-phelps" className="text-gold">
          펠프스 이슈
        </Link>
      </p>

      <Sources sources={originDetail.sources} footnotes={originDetail.footnotes} />
    </article>
  );
}
