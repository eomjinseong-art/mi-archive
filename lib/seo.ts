import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export type Crumb = { name: string; path: string };

export function absoluteUrl(path: string) {
  if (!path || path === "/") return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function clipText(text: string, max = 150) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export function pageSeo({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} · ${SITE_NAME}`;
  const text = clipText(description);
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  };
  return {
    title: path === "/" ? { absolute: title } : title,
    description: text,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: SITE_NAME,
      url: canonical,
      title: fullTitle,
      description: text,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: text,
      images: [image.url],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export function carDocumentTitle(car: { brand: string; nameKo: string }) {
  if (car.brand === "BMW") {
    const model = car.nameKo.replace(/^(\d{4}\s+)?BMW\s+/, "");
    return `미션 임파서블 BMW ${model}`;
  }
  return `미션 임파서블 ${car.nameKo}`;
}

export function breadcrumbJsonLd(items: Crumb[]) {
  const crumbs = [{ name: "홈", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function websiteJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "ko",
    description: clipText(description),
  };
}

export function itemListJsonLd(
  name: string,
  path: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function movieJsonLd(film: {
  slug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  directorKo: string;
  actorKo: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: film.titleKo,
    alternateName: film.titleEn,
    datePublished: String(film.year),
    inLanguage: "en",
    director: { "@type": "Person", name: film.directorKo },
    actor: [{ "@type": "Person", name: film.actorKo }],
    description: clipText(film.description),
    url: absoluteUrl(`/films/${film.slug}`),
  };
}
