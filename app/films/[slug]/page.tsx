import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { FilmDetailView } from "@/components/FilmDetailView";
import { filmDetails } from "@/data/filmDetails";
import { displayFilmTitle, getFilm } from "@/data/films";
import { movieJsonLd, pageSeo } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(filmDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);
  const detail = filmDetails[slug];
  if (!film || !detail) {
    return pageSeo({
      path: "/films",
      title: "미션 임파서블 영화",
      description: "요청한 작품 페이지가 없습니다.",
      index: false,
    });
  }
  return pageSeo({
    path: `/films/${film.slug}`,
    title: displayFilmTitle(film),
    description: `${film.year}년 ${film.titleKo}. 감독 ${film.directorKo}, ${film.actorKo}. ${detail.oneLiner}`,
  });
}

export default async function FilmDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const official = filmDetails[slug];
  const film = getFilm(slug);
  if (!official || !film) notFound();
  return (
    <>
      <JsonLd
        data={movieJsonLd({
          slug: film.slug,
          titleKo: film.titleKo,
          titleEn: film.titleEn,
          year: film.year,
          directorKo: film.directorKo,
          actorKo: film.actorKo,
          description: official.oneLiner,
        })}
      />
      <FilmDetailView
        detail={official}
        crumbs={[
          { name: "영화", path: "/films" },
          { name: film.titleKo, path: `/films/${film.slug}` },
        ]}
      />
    </>
  );
}
