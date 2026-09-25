import { SITE_NAME } from "@/lib/site";

const OFFICIAL_SITE_HREF = "https://www.007.com/";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <h2 className="font-serif text-xs tracking-[0.22em] text-gold">
          비공식 팬 아카이브
        </h2>
        <div className="mt-3 max-w-3xl space-y-3">
          <p>
            「{SITE_NAME}」는 비공식 팬 아카이브이며, 에온(Eon), MGM/Amazon,
            배우와 사진의 권리자를 포함한 저작권·상표권자와 무관합니다. 상업적
            공식 사이트가 아닙니다.
          </p>
          <p>
            본문은 바깥 자료를 참고한 재서술입니다. 출처는 각 페이지 하단에
            있습니다.
          </p>
          <p>권리자의 요청이 있으면 해당 내용을 삭제하거나 고칩니다.</p>
        </div>
        <p className="mt-4 text-xs">
          <a
            href={OFFICIAL_SITE_HREF}
            className="underline decoration-line underline-offset-4 hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 사이트 · 007.com
          </a>
        </p>
      </div>
    </footer>
  );
}
