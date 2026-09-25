import type { LeeDongjinNote } from "@/data/leeDongjin";
import { LEE_DONGJIN_HREF } from "@/data/leeDongjin";
import Link from "next/link";

export function CriticNotes({ notes }: { notes: LeeDongjinNote[] }) {
  if (notes.length === 0) return null;
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">국내 평론 · 이동진</h2>
      {notes.map((note) => (
        <article
          key={`${note.filmSlug}-${note.sources[0]?.href}`}
          className="mt-3 rounded-lg border border-line p-4"
        >
          {note.scoreLabel ? (
            <p className="text-sm text-gold">{note.scoreLabel}</p>
          ) : null}
          {note.quoteKo ? (
            <p className="mt-2 font-serif text-paper">
              {note.paraphrase ? "요지 · " : "한줄평 · "}
              「{note.quoteKo}」
            </p>
          ) : null}
          <p className="mt-2 text-[11px] text-muted">
            {note.verification === "primary"
              ? "1차 출처"
              : "2차 인용 · 언론·위키 등에서 인용된 요약"}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">{note.noteKo}</p>
          <ul className="mt-2 space-y-1 text-xs">
            {note.sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[11px] text-muted">{note.accessedNote}</p>
        </article>
      ))}
      <Link href={LEE_DONGJIN_HREF} className="mt-3 inline-block text-sm text-gold">
        이동진 007 메모
      </Link>
    </section>
  );
}
