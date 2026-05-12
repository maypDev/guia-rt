import {
  ArrowRight,
  Clock,
  Headphones,
  MapPin,
  Sparkles,
} from "lucide-react";
import { interpretiveRouteMoments } from "../../data/routeMoments";
import type { RouteMoment } from "../../types/route";
import { ImageWithFallback } from "../ui/ImageWithFallback";

/**
 * TimelineStops component
 *
 * Displays only the main interpretive route stops.
 * Operational points such as rest, service and closing are shown in other sections.
 */
export function TimelineStops() {
  return (
    <section
      id="paradas"
      className="relative overflow-hidden bg-[#F8F4EA] px-4 py-20 text-[#2B2118]"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#1F3A2E]/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#C9A24D]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1F3A2E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1F3A2E]">
            <MapPin size={15} />
            Paradas interpretativas
          </div>

          <h2 className="text-3xl font-black leading-tight text-[#1F3A2E] sm:text-4xl">
            Espacios con contenido histórico, audio y realidad aumentada
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B6B6B]">
            Estas paradas concentran la interpretación histórica principal de la
            ruta y cuentan con recursos digitales de apoyo.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#C9A24D] via-[#1F3A2E]/40 to-[#C9A24D] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-6">
            {interpretiveRouteMoments.map((moment, index) => (
              <TimelineStopCard
                key={moment.id}
                moment={moment}
                alignRight={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStopCard({
  moment,
  alignRight,
}: {
  moment: RouteMoment;
  alignRight: boolean;
}) {
  return (
    <article
      id={moment.id}
      className={`relative flex ${
        alignRight ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      <div className="absolute left-0 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F3A2E] text-sm font-black text-[#C9A24D] ring-4 ring-[#F8F4EA] sm:left-1/2 sm:-translate-x-1/2">
        {moment.routeStopNumber}
      </div>

      <div className="group ml-14 w-full rounded-[2rem] border border-[#1F3A2E]/10 bg-white/85 p-5 shadow-xl shadow-[#2B2118]/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-2xl sm:ml-0 sm:w-[46%]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#C9A24D]/15 px-3 py-1 text-xs font-bold text-[#1F3A2E]">
            Parada {moment.routeStopNumber}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#1F3A2E]/10 px-3 py-1 text-xs font-semibold text-[#1F3A2E]">
            <Clock size={13} />
            {moment.startTime} - {moment.endTime}
          </span>
        </div>

        <div className="mb-4 overflow-hidden rounded-3xl bg-[#1F3A2E]/10">
          <ImageWithFallback
            src={moment.image ?? ""}
            alt={moment.place}
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <h3 className="text-xl font-black leading-tight text-[#1F3A2E]">
          {moment.place}
        </h3>

        <p className="mt-2 text-sm font-bold text-[#C9A24D]">{moment.theme}</p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6B6B6B]">
          {moment.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {moment.hasAudio && <ResourceChip icon={<Headphones size={13} />} label="Audio" />}
          {moment.hasAR && <ResourceChip icon={<Sparkles size={13} />} label="RA" />}
          <ResourceChip icon={<MapPin size={13} />} label="Mapa" />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <a
            href={`#detalle-${moment.id}`}
            className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-[#1F3A2E] px-5 py-3 text-sm font-bold text-[#F8F4EA] shadow-lg shadow-[#1F3A2E]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A24D] hover:text-[#12100d] active:translate-y-0"
          >
            Ver parada
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </a>

          {moment.googleMapsUrl && (
            <a
              href={moment.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F3A2E]/15 bg-[#1F3A2E]/5 px-5 py-3 text-sm font-bold text-[#1F3A2E] transition-all duration-300 hover:border-[#C9A24D] hover:bg-[#C9A24D]/15"
            >
              Abrir ubicación
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ResourceChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[#1F3A2E]/10 bg-[#F8F4EA] px-3 py-1 text-xs font-bold text-[#1F3A2E]">
      <span className="text-[#C9A24D]">{icon}</span>
      {label}
    </span>
  );
}