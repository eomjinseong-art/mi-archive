export function googleImagesUrl(query: string) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
}

export function googleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function personLookQuery(person: {
  nameKo: string;
  nameEn: string;
  performerKo: string;
  performerEn: string;
}) {
  return `${person.nameEn} ${person.performerEn} Mission Impossible ${person.nameKo} ${person.performerKo}`.trim();
}
