export function googleImagesUrl(query: string) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
}

export function googleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function otherVehicleLookQuery(vehicle: {
  nameKo: string;
  nameEn: string;
  filmTitleKo?: string;
  filmTitleEn?: string;
}) {
  const film = [vehicle.filmTitleEn, vehicle.filmTitleKo].filter(Boolean).join(" ");
  return `${film} ${vehicle.nameEn} James Bond 007 ${vehicle.nameKo}`.trim();
}

export function bondGirlImageQuery(girl: {
  nameKo: string;
  nameEn: string;
  actressKo: string;
  actressEn: string;
  filmTitleKo?: string;
  filmTitleEn?: string;
}) {
  const film = [girl.filmTitleEn, girl.filmTitleKo].filter(Boolean).join(" ");
  return `${film} ${girl.nameEn} ${girl.actressEn} James Bond 007 ${girl.nameKo} ${girl.actressKo}`.trim();
}
