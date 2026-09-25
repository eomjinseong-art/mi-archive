import type { Metadata } from "next";
import Link from "next/link";
import { CriticNotes } from "@/components/CriticNotes";
import { displayFilmTitle, getFilm } from "@/data/films";
import {
  leeDongjinBio,
  leeDongjinNotes,
} from "@/data/leeDongjin";

export const metadata: Metadata = {
  title: "이동진",
};

export default function LeeDongjinPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs text-gold">국내 평론</p>
      <h1 className="mt-2 font-serif text-3xl text-paper">
        {leeDongjinBio.nameKo} ({leeDongjinBio.nameEn})
      </h1>
      <p className="mt-4 text-sm leading-7 text-paper">{leeDongjinBio.oneLiner}</p>
      <div className="mt-6 space-y-4">
        {leeDongjinBio.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-muted">
            {paragraph}
          </p>
        ))}
      </div>
      <ul className="mt-4 space-y-1 text-sm">
        {leeDongjinBio.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">확인한 007 기록</h2>
        <p className="mt-2 text-sm text-muted">
          씨네21 원문과 언론·위키에 인용된 요약입니다.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {leeDongjinNotes.map((note) => {
            const film = getFilm(note.filmSlug);
            return (
              <li key={note.filmSlug}>
                {film ? (
                  <Link href={`/films/${film.slug}`} className="text-gold hover:underline">
                    {displayFilmTitle(film)}
                  </Link>
                ) : (
                  note.filmTitleKo
                )}
                <span className="ml-2 text-muted">
                  {note.verification === "primary" ? "1차" : "2차"}
                  {note.scoreLabel ? ` · ${note.scoreLabel}` : ""}
                </span>
              </li>
            );
          })}
        </ul>
        <CriticNotes notes={leeDongjinNotes} />
      </section>
    </article>
  );
}
