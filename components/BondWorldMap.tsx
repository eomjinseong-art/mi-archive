"use client";

import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { googleMapsSearchUrl } from "@/lib/googleImages";
import {
  buildMapPins,
  hotelById,
  pinsForFilm,
  type MapPin,
} from "@/data/mapPins";
import { displayFilmTitle, getFilm } from "@/data/films";

type LeafletNS = typeof import("leaflet");

const IDLE = {
  radius: 7,
  color: "#C6A75E",
  weight: 2,
  fillColor: "#0B0D10",
  fillOpacity: 0.9,
};

const ACTIVE = {
  radius: 9,
  color: "#C6A75E",
  weight: 2,
  fillColor: "#C6A75E",
  fillOpacity: 0.95,
};

export function BondWorldMap({ filmSlug }: { filmSlug?: string }) {
  const mapEl = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Map<string, import("leaflet").CircleMarker>>(
    new Map(),
  );
  const allPins = useMemo(() => buildMapPins(), []);
  const pins = useMemo(
    () => (filmSlug ? pinsForFilm(filmSlug, allPins) : allPins),
    [allPins, filmSlug],
  );
  const [activeId, setActiveId] = useState<string | null>(pins[0]?.id ?? null);
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;
  const active = pins.find((pin) => pin.id === activeId) ?? pins[0];

  useEffect(() => {
    setActiveId(pins[0]?.id ?? null);
  }, [pins]);

  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      marker.setStyle(id === activeId ? ACTIVE : IDLE);
    });
    markersRef.current.get(activeId ?? "")?.bringToFront();
  }, [activeId]);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    async function mount() {
      const L: LeafletNS = await import("leaflet");
      if (cancelled) return;
      const el = mapEl.current;
      if (!el) return;
      el.replaceChildren();
      map = L.map(el, {
        worldCopyJump: true,
        minZoom: 2,
        maxZoom: 8,
        attributionControl: true,
      }).setView([24, 10], filmSlug ? 4 : 2.4);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const nextMarkers = new Map<string, import("leaflet").CircleMarker>();
      const bounds: import("leaflet").LatLngExpression[] = [];
      for (const pin of pins) {
        const marker = L.circleMarker([pin.lat, pin.lng], IDLE).addTo(map);
        marker.bindTooltip(`${pin.placeKo}`, {
          direction: "top",
          className: "bond-map-tip",
        });
        marker.on("click", () => setActiveId(pin.id));
        nextMarkers.set(pin.id, marker);
        bounds.push([pin.lat, pin.lng]);
      }
      markersRef.current = nextMarkers;
      const selected = activeIdRef.current;
      nextMarkers.forEach((marker, id) => {
        marker.setStyle(id === selected ? ACTIVE : IDLE);
      });
      if (selected) nextMarkers.get(selected)?.bringToFront();
      if (filmSlug && bounds.length > 0) {
        map.fitBounds(L.latLngBounds(bounds).pad(0.35), { maxZoom: 6 });
      }
    }

    void mount();
    return () => {
      cancelled = true;
      markersRef.current = new Map();
      map?.remove();
    };
  }, [pins, filmSlug]);

  return (
    <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-lg border border-line lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.9fr)] lg:gap-4 lg:overflow-visible lg:border-0">
      <div
        ref={mapEl}
        className="h-[52vh] min-h-[320px] overflow-hidden bg-card sm:h-[560px] lg:rounded-lg lg:border lg:border-line"
      />
      <aside className="max-h-[42vh] overflow-y-auto border-t border-line bg-card p-4 lg:max-h-none lg:min-h-[560px] lg:rounded-lg lg:border lg:border-line">
        <p className="mb-3 text-[11px] text-muted lg:hidden">
          핀을 누르면 아래에 장소가 열립니다.
        </p>
        {active ? (
          <PinDetail pin={active} />
        ) : (
          <p className="text-sm text-muted">핀을 눌러 장소를 엽니다.</p>
        )}
      </aside>
    </div>
  );
}

function PinDetail({ pin }: { pin: MapPin }) {
  const films = pin.filmSlugs
    .map((slug) => getFilm(slug))
    .filter((film): film is NonNullable<typeof film> => Boolean(film));
  const relatedHotels = pin.hotelIds
    .map((id) => hotelById(id))
    .filter((hotel): hotel is NonNullable<typeof hotel> => Boolean(hotel));

  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-gold">
        {pin.kind === "hotel" ? "호텔" : "명소"}
      </p>
      <h2 className="mt-1 font-serif text-xl text-paper">
        {pin.placeKo} ({pin.placeEn})
      </h2>
      <p className="mt-1 text-xs text-gold">
        {pin.city} · {pin.country}
      </p>
      <p className="mt-1 text-xs text-muted">
        대략 위치 · {pin.lat.toFixed(2)}, {pin.lng.toFixed(2)}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{pin.sceneNote}</p>
      {pin.whyPopular ? (
        <p className="mt-2 text-sm leading-6 text-paper">{pin.whyPopular}</p>
      ) : null}
      <div className="mt-4">
        <p className="text-xs text-gold">출연 작품</p>
        <ul className="mt-2 space-y-1">
          {films.map((film) => (
            <li key={film.slug}>
              <Link
                href={`/films/${film.slug}`}
                className="text-sm text-paper hover:text-gold"
              >
                {displayFilmTitle(film)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {relatedHotels.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-gold">근처 호텔</p>
          <ul className="mt-2 space-y-2">
            {relatedHotels.map((hotel) => (
              <li key={hotel.slug}>
                <Link
                  href={`/hotels#${hotel.slug}`}
                  className="text-sm text-paper hover:text-gold"
                >
                  {hotel.nameKo} ({hotel.nameEn})
                </Link>
                <p className="text-xs text-muted">{hotel.sceneNote}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <a
        href={googleMapsSearchUrl(pin.mapsQuery)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-xs text-gold hover:underline"
      >
        Google 지도에서 보기
      </a>
      {pin.sources.length > 0 ? (
        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {pin.sources.slice(0, 2).map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {source.label}
            </a>
          ))}
        </p>
      ) : null}
    </div>
  );
}
