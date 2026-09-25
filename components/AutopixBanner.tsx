import Link from "next/link";
import { SisterCta } from "@/components/SisterCta";
import { AUTOPIX_LABEL, MI_CAR_CTA_LABEL } from "@/lib/site";

export function AutopixBanner({ showCarsLink = true }: { showCarsLink?: boolean }) {
  return (
    <div className="rounded-xl border border-gold/50 bg-card p-5 sm:p-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{AUTOPIX_LABEL}</p>
      <h2 className="mt-2 font-serif text-2xl text-paper">영화 속 차량 다음, 자동차 용품</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        차량 목록과 각 상세 페이지의 버튼은 {AUTOPIX_LABEL}로 갑니다. 촬영 차량을
        판매하지 않습니다.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {showCarsLink ? (
          <Link
            href="/cars"
            className="rounded-full border border-line px-4 py-2 text-sm text-paper hover:border-gold"
          >
            영화 속 차량
          </Link>
        ) : null}
        <SisterCta label={MI_CAR_CTA_LABEL} />
      </div>
    </div>
  );
}
