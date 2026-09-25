import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FilmDetailView } from "@/components/FilmDetailView";
import { UnofficialFilmView } from "@/components/UnofficialFilmView";
import { filmDetails } from "@/data/filmDetails";
import { displayFilmTitle, getFilm } from "@/data/films";
import {
  getUnofficialFilm,
  unofficialFilmDetails,
} from "@/data/unofficialFilms";

export function generateStaticParams() {
  return [
    ...Object.keys(filmDetails),
    ...Object.keys(unofficialFilmDetails),
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug) ?? getUnofficialFilm(slug);
  if (!film) return { title: "영화" };
  return { title: displayFilmTitle(film) };
}

export default async function FilmDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const official = filmDetails[slug];
  if (official) return <FilmDetailView detail={official} />;
  const unofficial = unofficialFilmDetails[slug];
  if (unofficial) return <UnofficialFilmView detail={unofficial} />;
  notFound();
}
