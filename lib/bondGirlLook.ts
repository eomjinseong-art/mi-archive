import type { BondGirl } from "@/data/bondGirls";
import { getFilm } from "@/data/films";
import { bondGirlImageQuery } from "@/lib/googleImages";

export function girlFilmLookQuery(girl: BondGirl) {
  const film = getFilm(girl.filmSlug);
  return bondGirlImageQuery({
    nameKo: girl.nameKo,
    nameEn: girl.nameEn,
    actressKo: girl.actressKo,
    actressEn: girl.actressEn,
    filmTitleKo: girl.filmTitleKo,
    filmTitleEn: film?.titleEn,
  });
}
