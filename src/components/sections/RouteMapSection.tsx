import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import {
  Coffee,
  ExternalLink,
  Flag,
  MapPin,
  Navigation,
  Route,
  Sparkles,
} from "lucide-react";
import { mapRouteMoments } from "../../data/routeMoments";
import { routePathCoordinates } from "../../data/routePath";
import type { RouteMoment, RouteMomentType } from "../../types/route";
import "leaflet/dist/leaflet.css";

/**
 * RouteMapSection component
 *
 * Displays the interactive route map using Leaflet and OpenStreetMap.
 * The map shows interpretive stops, support points and a realistic path
 * based on intermediate coordinates.
 */
export function RouteMapSection() {
  const initialMapCenter =
    mapRouteMoments[0]?.coordinates ?? [-17.9642, -67.1061];

  return (
    <section
      id="mapa"
      className="relative overflow-hidden bg-[#12100d] px-4 py-20 text-[#F8F4EA]"
    >
      <div className="absolute left-0 top-10 h-96 w-96 rounded-full bg-[#1F3A2E]/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#C9A24D]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
            <Route size={15} />
            Mapa del recorrido
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Ubica la ruta, sus paradas y puntos de apoyo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#E8D8B8]/75">
            El mapa muestra las paradas interpretativas, puntos de descanso,
            servicios, inicio, cierre y una línea referencial del recorrido por
            calles.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <RouteSummaryCard
            label="Inicio"
            title="Parque Magdalena Postel"
            description="Encuentro, registro e introducción."
          />

          <RouteSummaryCard
            label="Duración"
            title="08:30 - 13:15"
            description="Horario referencial de la ruta."
          />

          <RouteSummaryCard
            label="Cierre"
            title="Plaza Ángel Mendizábal"
            description="Encuesta, fotografía y despedida."
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-md">
          <div className="h-[520px] overflow-hidden rounded-[1.5rem]">
            <MapContainer
              center={initialMapCenter}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Polyline
                positions={routePathCoordinates}
                pathOptions={{
                  color: "#C9A24D",
                  weight: 5,
                  opacity: 0.9,
                }}
              />

              {mapRouteMoments.map((moment) => {
                if (!moment.coordinates) return null;

                return (
                  <Marker
                    key={moment.id}
                    position={moment.coordinates}
                    icon={createRouteMarkerIcon(moment)}
                  >
                    <Popup>
                      <RouteMomentPopup moment={moment} />
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>

        <MapLegend />

        <div className="mt-5 rounded-3xl border border-[#C9A24D]/20 bg-[#C9A24D]/10 p-5 text-sm leading-7 text-[#E8D8B8]">
          <strong className="text-[#C9A24D]">Nota:</strong> La línea dorada
          representa el recorrido sugerido por calles. Las coordenadas pueden
          ajustarse cuando se definan los puntos exactos de visita.
        </div>
      </div>
    </section>
  );
}

/**
 * Creates a custom marker icon according to the route moment type.
 */
function createRouteMarkerIcon(moment: RouteMoment) {
  const config = getMomentTypeConfig(moment.type);
  const label = moment.markerLabel ?? String(moment.order);

  return L.divIcon({
    className: "custom-route-marker",
    html: `
      <div style="
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: ${config.markerBg};
        color: ${config.markerText};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 13px;
        border: 4px solid #F8F4EA;
        box-shadow: 0 12px 28px rgba(0,0,0,.35);
      ">
        ${label}
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -18],
  });
}

/**
 * Popup content displayed when the user taps a map marker.
 */
function RouteMomentPopup({ moment }: { moment: RouteMoment }) {
  const config = getMomentTypeConfig(moment.type);

  return (
    <div className="w-60 font-sans">
      <div
        className="mb-2 inline-flex rounded-full px-3 py-1 text-xs font-black"
        style={{
          background: config.badgeBg,
          color: config.badgeText,
        }}
      >
        {config.label}
      </div>

      <h3 className="text-base font-black text-[#1F3A2E]">{moment.place}</h3>

      <p className="mt-1 text-xs font-bold text-[#C9A24D]">
        {moment.startTime} - {moment.endTime} · {moment.duration}
      </p>

      <p className="mt-2 text-xs font-bold text-[#2B2118]">
        {moment.activity}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#6B6B6B]">
        {moment.description}
      </p>

      <div className="mt-3 flex flex-col gap-2">
        {moment.type === "interpretive" && (
          <a
            href={`#detalle-${moment.id}`}
            className="inline-flex items-center justify-center gap-1 rounded-full bg-[#1F3A2E] px-3 py-2 text-xs font-black text-white no-underline transition hover:bg-[#C9A24D] hover:text-[#12100d]"
          >
            Ver parada
            <MapPin size={13} />
          </a>
        )}

        {moment.googleMapsUrl && (
          <a
            href={moment.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-full border border-[#1F3A2E]/20 bg-white px-3 py-2 text-xs font-black text-[#1F3A2E] no-underline transition hover:bg-[#C9A24D]/15"
          >
            Abrir ubicación
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * Route summary card displayed above the map.
 */
function RouteSummaryCard({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/50 hover:bg-[#C9A24D]/10">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A24D]/15 text-[#C9A24D]">
        <Navigation size={22} />
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
        {label}
      </p>

      <h3 className="mt-2 text-lg font-black text-[#F8F4EA]">{title}</h3>

      <p className="mt-1 text-sm text-[#E8D8B8]/70">{description}</p>
    </article>
  );
}

/**
 * MapLegend component
 *
 * Explains the meaning of marker colors and labels.
 */
function MapLegend() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <LegendItem label="Interpretativo" color="#C9A24D" icon={<MapPin size={15} />} />
      <LegendItem label="Encuentro / inicio" color="#1F3A2E" icon={<Flag size={15} />} />
      <LegendItem label="Descanso" color="#E8D8B8" icon={<Coffee size={15} />} />
      <LegendItem label="Servicio / cierre" color="#6B6B6B" icon={<Sparkles size={15} />} />
    </div>
  );
}

function LegendItem({
  label,
  color,
  icon,
}: {
  label: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-[#E8D8B8]">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full text-[#12100d]"
        style={{ backgroundColor: color }}
      >
        {icon}
      </span>
      {label}
    </div>
  );
}

/**
 * Returns visual settings according to the moment type.
 */
function getMomentTypeConfig(type: RouteMomentType) {
  const config = {
    meeting: {
      label: "Encuentro",
      markerBg: "#1F3A2E",
      markerText: "#C9A24D",
      badgeBg: "#1F3A2E",
      badgeText: "#F8F4EA",
    },
    intro: {
      label: "Introducción",
      markerBg: "#C9A24D",
      markerText: "#12100d",
      badgeBg: "#C9A24D",
      badgeText: "#12100d",
    },
    interpretive: {
      label: "Parada interpretativa",
      markerBg: "#C9A24D",
      markerText: "#12100d",
      badgeBg: "#C9A24D",
      badgeText: "#12100d",
    },
    rest: {
      label: "Descanso",
      markerBg: "#E8D8B8",
      markerText: "#12100d",
      badgeBg: "#E8D8B8",
      badgeText: "#12100d",
    },
    transition: {
      label: "Transición",
      markerBg: "#6B6B6B",
      markerText: "#F8F4EA",
      badgeBg: "#6B6B6B",
      badgeText: "#F8F4EA",
    },
    service: {
      label: "Servicio",
      markerBg: "#6B6B6B",
      markerText: "#F8F4EA",
      badgeBg: "#6B6B6B",
      badgeText: "#F8F4EA",
    },
    closing: {
      label: "Cierre",
      markerBg: "#2B2118",
      markerText: "#C9A24D",
      badgeBg: "#2B2118",
      badgeText: "#C9A24D",
    },
  };

  return config[type];
}