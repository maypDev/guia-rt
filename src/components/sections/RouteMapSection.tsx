import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { ExternalLink, MapPin, Navigation, Route } from "lucide-react";
import { routeStops } from "../../data/stops";
import type { RouteStop } from "../../types/route";
import "leaflet/dist/leaflet.css";

/**
 * RouteMapSection component
 *
 * Displays the interactive route map using Leaflet and OpenStreetMap.
 * It shows all route stops, connects them with a route line, and allows
 * users to jump to each stop detail.
 */
export function RouteMapSection() {
  const routeCoordinates = routeStops.map((stop) => stop.coordinates);

  /**
   * The map center is calculated using the first route stop.
   * Later, this can be improved by calculating the geographic center.
   */
  const initialMapCenter = routeStops[0]?.coordinates ?? [-17.9642, -67.1061];

  return (
    <section
      id="mapa"
      className="relative overflow-hidden bg-[#12100d] px-4 py-20 text-[#F8F4EA]"
    >
      {/* Decorative background */}
      <div className="absolute left-0 top-10 h-96 w-96 rounded-full bg-[#1F3A2E]/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#C9A24D]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
            <Route size={15} />
            Mapa del recorrido
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Ubica el inicio, las paradas y el cierre de la ruta
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#E8D8B8]/75">
            Explora el recorrido completo de la ruta turística interactiva.
            Toca cada marcador para conocer su función dentro de la experiencia.
          </p>
        </div>

        {/* Route summary cards */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <RouteSummaryCard
            label="Inicio"
            title="Parque Magdalena Postel"
            description="Punto de encuentro y bienvenida."
          />

          <RouteSummaryCard
            label="Recorrido"
            title="6 paradas"
            description="Historia, memoria, audios y RA."
          />

          <RouteSummaryCard
            label="Final"
            title="Cementerio General"
            description="Cierre conmemorativo y reflexivo."
          />
        </div>

        {/* Map container card */}
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

              {/* Route line */}
              <Polyline
                positions={routeCoordinates}
                pathOptions={{
                  color: "#C9A24D",
                  weight: 5,
                  opacity: 0.9,
                }}
              />

              {/* Stop markers */}
              {routeStops.map((stop) => (
                <Marker
                  key={stop.id}
                  position={stop.coordinates}
                  icon={createNumberedMarkerIcon(stop.number)}
                >
                  <Popup>
                    <StopMapPopup stop={stop} />
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Map note */}
        <div className="mt-5 rounded-3xl border border-[#C9A24D]/20 bg-[#C9A24D]/10 p-5 text-sm leading-7 text-[#E8D8B8]">
          <strong className="text-[#C9A24D]">Nota:</strong> Las coordenadas
          actuales pueden ajustarse cuando se definan los puntos exactos de
          visita. La línea del mapa representa el recorrido general de la ruta.
        </div>
      </div>
    </section>
  );
}

/**
 * Creates a custom numbered marker icon for Leaflet.
 *
 * This avoids using default Leaflet marker images and gives the route
 * a branded visual style.
 */
function createNumberedMarkerIcon(number: number) {
  return L.divIcon({
    className: "custom-route-marker",
    html: `
      <div style="
        width: 38px;
        height: 38px;
        border-radius: 999px;
        background: #C9A24D;
        color: #12100d;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 14px;
        border: 4px solid #F8F4EA;
        box-shadow: 0 12px 28px rgba(0,0,0,.35);
      ">
        ${number}
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -18],
  });
}

/**
 * Popup content displayed when the user taps a stop marker.
 */
function StopMapPopup({ stop }: { stop: RouteStop }) {
  return (
    <div className="w-56 font-sans">
      <div className="mb-2 inline-flex rounded-full bg-[#C9A24D] px-3 py-1 text-xs font-black text-[#12100d]">
        Parada {stop.number}
      </div>

      <h3 className="text-base font-black text-[#1F3A2E]">{stop.shortTitle}</h3>

      <p className="mt-1 text-xs font-bold text-[#C9A24D]">{stop.theme}</p>

      <p className="mt-2 text-xs leading-5 text-[#6B6B6B]">
        {stop.description}
      </p>

      <div className="mt-3 flex flex-col gap-2">
        <a
          href={`#detalle-${stop.id}`}
          className="inline-flex items-center justify-center gap-1 rounded-full bg-[#1F3A2E] px-3 py-2 text-xs font-black text-white no-underline transition hover:bg-[#C9A24D] hover:text-[#12100d]"
        >
          Ver parada
          <MapPin size={13} />
        </a>

        <a
          href={stop.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-full border border-[#1F3A2E]/20 bg-white px-3 py-2 text-xs font-black text-[#1F3A2E] no-underline transition hover:bg-[#C9A24D]/15"
        >
          Abrir ubicación
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

/**
 * Small summary card displayed above the map.
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