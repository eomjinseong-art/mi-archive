import type { Metadata } from "next";
import Link from "next/link";
import { Sources } from "@/components/Sources";
import {
  bomOriginalWorldwide,
  formatMillions,
  formatUsd,
  homeRecordTeasers,
  koreanAudience,
  notableRecords,
  recordsIntro,
  recordsSources,
  worldBoxOffice,
} from "@/data/records";

export const metadata: Metadata = {
  title: "기록",
};

const nominalRank = [...worldBoxOffice].sort(
  (a, b) => b.wikiNominalMillions - a.wikiNominalMillions,
);
const adjustedRank = [...worldBoxOffice].sort(
  (a, b) => b.wikiAdjusted2024Millions - a.wikiAdjusted2024Millions,
);

export default function RecordsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">{recordsIntro.title}</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        {recordsIntro.lede}
      </p>
      <ul className="mt-4 max-w-3xl space-y-2 text-xs leading-6 text-muted">
        {recordsIntro.notes.map((note) => (
          <li key={note}>· {note}</li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {homeRecordTeasers.map((item) => (
          <div key={item.label} className="rounded-lg border border-line bg-card p-4">
            <p className="text-[11px] uppercase tracking-wide text-gold">
              {item.label}
            </p>
            <p className="mt-2 font-serif text-xl text-paper">{item.value}</p>
            <p className="mt-1 text-xs text-muted">{item.meta}</p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-gold">세계 흥행 · 두 기준</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          왼쪽은 위키 표 Actual $(명목), 오른쪽은 같은 표의 Adjusted $(2024).
          단위는 백만 달러입니다.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-x-auto rounded-lg border border-line">
            <table className="min-w-full text-left text-xs">
              <caption className="border-b border-line px-3 py-2 text-left text-[11px] text-gold">
                명목 · Wikipedia Actual $
              </caption>
              <thead className="bg-card text-muted">
                <tr>
                  <th className="px-3 py-2 font-normal">#</th>
                  <th className="px-3 py-2 font-normal">작품</th>
                  <th className="px-3 py-2 font-normal">연도</th>
                  <th className="px-3 py-2 font-normal">백만 $</th>
                </tr>
              </thead>
              <tbody>
                {nominalRank.map((row, index) => (
                  <tr key={row.slug} className="border-t border-line">
                    <td className="px-3 py-2 text-muted">{index + 1}</td>
                    <td className="px-3 py-2">
                      <Link href={`/films/${row.slug}`} className="text-paper hover:text-gold">
                        {row.titleKo}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-muted">{row.year}</td>
                    <td className="px-3 py-2 text-gold">
                      {formatMillions(row.wikiNominalMillions)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto rounded-lg border border-line">
            <table className="min-w-full text-left text-xs">
              <caption className="border-b border-line px-3 py-2 text-left text-[11px] text-gold">
                물가 보정 · Wikipedia Adjusted $ (2024)
              </caption>
              <thead className="bg-card text-muted">
                <tr>
                  <th className="px-3 py-2 font-normal">#</th>
                  <th className="px-3 py-2 font-normal">작품</th>
                  <th className="px-3 py-2 font-normal">연도</th>
                  <th className="px-3 py-2 font-normal">백만 $</th>
                </tr>
              </thead>
              <tbody>
                {adjustedRank.map((row, index) => (
                  <tr key={row.slug} className="border-t border-line">
                    <td className="px-3 py-2 text-muted">{index + 1}</td>
                    <td className="px-3 py-2">
                      <Link href={`/films/${row.slug}`} className="text-paper hover:text-gold">
                        {row.titleKo}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-muted">{row.year}</td>
                    <td className="px-3 py-2 text-gold">
                      {formatMillions(row.wikiAdjusted2024Millions)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-gold">
          Box Office Mojo · 원출시 정밀
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          위키 백만 달러 표와는 다른 원출시 전 세계 숫자입니다. 재개봉 합계는
          주에 있습니다.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-card text-xs text-muted">
              <tr>
                <th className="px-3 py-2 font-normal">작품</th>
                <th className="px-3 py-2 font-normal">원출시 전 세계</th>
                <th className="px-3 py-2 font-normal">주</th>
              </tr>
            </thead>
            <tbody>
              {bomOriginalWorldwide.map((row) => (
                <tr key={row.slug} className="border-t border-line">
                  <td className="px-3 py-3">
                    <Link href={`/films/${row.slug}`} className="text-paper hover:text-gold">
                      {row.titleKo}
                    </Link>
                  </td>
                  <td className="px-3 py-3 text-gold">{formatUsd(row.amountUsd)}</td>
                  <td className="px-3 py-3 text-xs leading-5 text-muted">
                    {row.note}{" "}
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      BOM ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-gold">한국 관객</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          통합전산망(KOBIS)과 그것을 인용한 언론·아카이브. 중간 집계와 최종
          인용은 시점이 다릅니다. 2004년 이전은 집계 체계가 달라 숫자가 없습니다.
        </p>
        <ul className="mt-4 space-y-3">
          {koreanAudience.map((row) => (
            <li key={`${row.slug}-${row.asOf}`} className="rounded-lg border border-line p-4">
              <p className="text-xs text-gold">
                {row.year} · {row.basis === "press-checkpoint" ? "중간 집계" : "최종 인용"}
              </p>
              <p className="mt-1 font-serif text-lg text-paper">
                <Link href={`/films/${row.slug}`} className="hover:text-gold">
                  {row.titleKo}
                </Link>
              </p>
              <p className="mt-2 text-sm text-gold">{row.admissionsLabel}</p>
              <p className="mt-1 text-xs text-muted">시점 · {row.asOf}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{row.note}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {row.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:underline"
                  >
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-gold">눈에 띄는 기록</h2>
        <ul className="mt-4 space-y-3">
          {notableRecords.map((item) => (
            <li key={item.title} className="rounded-lg border border-line p-4">
              <p className="text-[11px] uppercase tracking-wide text-gold">
                {item.criterion}
              </p>
              <h3 className="mt-1 font-serif text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {item.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:underline"
                  >
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm">
        <Link href="/films" className="text-gold">
          영화 타임라인
        </Link>
      </p>

      <Sources sources={recordsSources} />
    </div>
  );
}
