import {
  ArrowRight,
  Clock,
  Headphones,
  MapPin,
  Sparkles,
} from "lucide-react";
import { routeStops } from "../../data/stops";
import type { RouteStop } from "../../types/route";
import { ImageWithFallback } from "../ui/ImageWithFallback";

/**
 * TimelineStops component
 *
 * Displays the six route stops as a vertical mobile-first timeline.
 * Each stop card gives a quick overview of the place, theme, duration,
 * and available interactive resources.
 */
export function TimelineStops() {
  return (
    <section
      id="paradas"
      className="relative overflow-hidden bg-[#F8F4EA] px-4 py-20 text-[#2B2118]"
    >
      {/* Decorative background lights */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#1F3A2E]/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#C9A24D]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1F3A2E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1F3A2E]">
            <MapPin size={15} />
            Paradas principales
          </div>

          <h2 className="text-3xl font-black leading-tight text-[#1F3A2E] sm:text-4xl">
            Seis espacios para recorrer la memoria de Oruro
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B6B6B]">
            Cada parada representa una dimensión distinta de la ruta: inicio,
            memoria documental, educación cívica, asistencia humanitaria,
            despedida ferroviaria y homenaje final.
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#C9A24D] via-[#1F3A2E]/40 to-[#C9A24D] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-6">
            {routeStops.map((stop, index) => (
              <TimelineStopCard
                key={stop.id}
                stop={stop}
                alignRight={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * TimelineStopCard component
 *
 * Renders a single stop card inside the timeline.
 */
function TimelineStopCard({
  stop,
  alignRight,
}: {
  stop: RouteStop;
  alignRight: boolean;
}) {
  return (
    <article
      id={stop.id}
      className={`relative flex ${
        alignRight ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      {/* Timeline number marker */}
      <div className="absolute left-0 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F3A2E] text-sm font-black text-[#C9A24D] ring-4 ring-[#F8F4EA] sm:left-1/2 sm:-translate-x-1/2">
        {stop.number}
      </div>

      {/* Stop card */}
      <div
        className={`group ml-14 w-full rounded-[2rem] border border-[#1F3A2E]/10 bg-white/85 p-5 shadow-xl shadow-[#2B2118]/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-2xl sm:ml-0 sm:w-[46%] ${
          alignRight ? "sm:mr-0" : "sm:ml-0"
        }`}
      >
        {/* Stop metadata */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#C9A24D]/15 px-3 py-1 text-xs font-bold text-[#1F3A2E]">
            Parada {stop.number}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#1F3A2E]/10 px-3 py-1 text-xs font-semibold text-[#1F3A2E]">
            <Clock size={13} />
            {stop.duration}
          </span>
        </div>

        {/* Image placeholder / real image */}
        <div className="mb-4 overflow-hidden rounded-3xl bg-[#1F3A2E]/10">
          <ImageWithFallback
            src={stop.image}
            alt={stop.title}
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        <h3 className="text-xl font-black leading-tight text-[#1F3A2E]">
          {stop.shortTitle}
        </h3>

        <p className="mt-2 text-sm font-bold text-[#C9A24D]">{stop.theme}</p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6B6B6B]">
          {stop.description}
        </p>

        {/* Resource chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          <ResourceChip icon={<Headphones size={13} />} label="Audio" />
          <ResourceChip icon={<Sparkles size={13} />} label="RA" />
          <ResourceChip icon={<MapPin size={13} />} label="Mapa" />
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex flex-col gap-2">
          <a
            href={`#detalle-${stop.id}`}
            className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-[#1F3A2E] px-5 py-3 text-sm font-bold text-[#F8F4EA] shadow-lg shadow-[#1F3A2E]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A24D] hover:text-[#12100d] active:translate-y-0"
          >
            Ver parada
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </a>

          <a
            href={stop.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F3A2E]/15 bg-[#1F3A2E]/5 px-5 py-3 text-sm font-bold text-[#1F3A2E] transition-all duration-300 hover:border-[#C9A24D] hover:bg-[#C9A24D]/15"
          >
            Abrir ubicación
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * ResourceChip component
 *
 * Small label used to show what resources are available for each stop.
 */
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