import {
  BOND_NETWORK_LABEL,
  FF_ARCHIVE_LABEL,
  NETWORK_LABEL,
  bondArchiveUrl,
  ffArchiveUrl,
} from "@/lib/site";

export function ArchiveNetworkSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{NETWORK_LABEL}</p>
      <h2 className="mt-2 font-serif text-2xl text-paper">세 아카이브</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        미션 임파서블, 007, 분노의 질주는 영화 속 자동차로 이어집니다. 차량
        페이지에는 주소가 확인된 같은 브랜드만 붙입니다.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href={bondArchiveUrl("home")}
          className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[11px] uppercase tracking-wide text-gold">007</p>
          <h3 className="mt-2 font-serif text-xl text-paper">{BOND_NETWORK_LABEL}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            본드카와 그 바깥의 차. BMW는 Z3(골든아이)와 750iL(네버 다이)이
            확인됩니다.
          </p>
          <p className="mt-3 text-sm text-gold">아카이브 열기 →</p>
        </a>
        <a
          href={ffArchiveUrl("home", "/cars")}
          className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[11px] uppercase tracking-wide text-gold">곧 열림</p>
          <h3 className="mt-2 font-serif text-xl text-paper">{FF_ARCHIVE_LABEL}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            아직 개별 차량 주소는 확인하지 않습니다. 차량 목록으로 잇습니다.
          </p>
          <p className="mt-3 text-sm text-gold">차량 목록 →</p>
        </a>
      </div>
    </section>
  );
}
