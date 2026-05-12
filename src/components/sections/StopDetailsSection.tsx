import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
} from "lucide-react";
import { interpretiveRouteMoments } from "../../data/routeMoments";
import type { RouteMoment } from "../../types/route";
import { ArExperienceCard } from "../ui/ArExperienceCard";
import { AudioPlayer } from "../ui/AudioPlayer";
import { ImageWithFallback } from "../ui/ImageWithFallback";

/**
 * StopDetailsSection component
 *
 * Renders detailed content only for interpretive stops.
 * Operational points are handled in the SupportPointsSection.
 */
export function StopDetailsSection() {
  return (
    <section
      id="detalles"
      className="relative overflow-hidden bg-[#12100d] px-4 py-20 text-[#F8F4EA]"
    >
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#1F3A2E]/40 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-[#C9A24D]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
            <MapPin size={15} />
            Detalle de paradas
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Explora el contenido interpretativo de cada parada
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#E8D8B8]/75">
            Cada parada incluye interpretación histórica, audio, ubicación y
            acceso a recursos interactivos o realidad aumentada.
          </p>
        </div>

        <div className="space-y-16">
          {interpretiveRouteMoments.map((moment, index) => {
            const previousMoment = interpretiveRouteMoments[index - 1];
            const nextMoment = interpretiveRouteMoments[index + 1];

            return (
              <StopDetailCard
                key={moment.id}
                moment={moment}
                previousMoment={previousMoment}
                nextMoment={nextMoment}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StopDetailCard({
  moment,
  previousMoment,
  nextMoment,
}: {
  moment: RouteMoment;
  previousMoment?: RouteMoment;
  nextMoment?: RouteMoment;
}) {
  return (
    <article
      id={`detalle-${moment.id}`}
      className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-[#F8F4EA] text-[#2B2118] shadow-2xl shadow-black/30"
    >
      <div className="relative h-72 overflow-hidden sm:h-96">
        <ImageWithFallback
          src={moment.image ?? ""}
          alt={moment.place}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#12100d]/90 via-[#12100d]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#C9A24D] px-4 py-2 text-xs font-black text-[#12100d]">
            Parada {moment.routeStopNumber} de {interpretiveRouteMoments.length}
          </div>

          <h3 className="text-3xl font-black leading-tight text-[#F8F4EA] sm:text-4xl">
            {moment.place}
          </h3>

          <p className="mt-2 text-sm font-bold text-[#C9A24D] sm:text-base">
            {moment.theme}
          </p>
        </div>
      </div>

      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            <InfoPill icon={<Clock size={14} />} label={`${moment.startTime} - ${moment.endTime}`} />
            <InfoPill icon={<Clock size={14} />} label={moment.duration} />
            <InfoPill icon={<Navigation size={14} />} label="Recorrido" />
          </div>

          <h4 className="text-2xl font-black text-[#1F3A2E]">
            ¿Qué representa este lugar?
          </h4>

          <p className="mt-4 text-base leading-8 text-[#4A4036]">
            {moment.description}
          </p>

          <div className="mt-6 rounded-3xl border border-[#C9A24D]/25 bg-[#C9A24D]/10 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F3A2E]">
              Mensaje interpretativo
            </p>
            <p className="mt-2 text-sm leading-7 text-[#4A4036]">
              Esta parada forma parte de una narrativa histórica que conecta la
              memoria local de Oruro con los acontecimientos de la Guerra del
              Chaco, fortaleciendo la interpretación patrimonial del recorrido.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {moment.googleMapsUrl && (
              <a
                href={moment.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F3A2E] px-6 py-4 text-sm font-black text-[#F8F4EA] shadow-lg shadow-[#1F3A2E]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A24D] hover:text-[#12100d] active:translate-y-0"
              >
                Abrir en Google Maps
                <ExternalLink size={17} />
              </a>
            )}

            <a
              href="#paradas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F3A2E]/15 bg-[#1F3A2E]/5 px-6 py-4 text-sm font-black text-[#1F3A2E] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D] hover:bg-[#C9A24D]/15 active:translate-y-0"
            >
              Volver a paradas
            </a>
          </div>
        </div>

        <div className="space-y-5">
          {moment.audioUrl && (
            <AudioPlayer audioUrl={moment.audioUrl} title={moment.place} />
          )}

          {moment.arUrl && (
            <ArExperienceCard
              arUrl={moment.arUrl}
              markerImage={moment.markerImage}
              title={moment.place}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[#1F3A2E]/10 bg-white/60 p-5 sm:flex-row sm:justify-between sm:p-6">
        {previousMoment ? (
          <a
            href={`#detalle-${previousMoment.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F3A2E]/15 bg-white px-5 py-3 text-sm font-black text-[#1F3A2E] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D] hover:bg-[#C9A24D]/15"
          >
            <ArrowLeft size={17} />
            Parada anterior
          </a>
        ) : (
          <div />
        )}

        {nextMoment ? (
          <a
            href={`#detalle-${nextMoment.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24D] px-5 py-3 text-sm font-black text-[#12100d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0B85A]"
          >
            Siguiente parada
            <ArrowRight size={17} />
          </a>
        ) : (
          <a
            href="#cierre"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24D] px-5 py-3 text-sm font-black text-[#12100d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0B85A]"
          >
            Finalizar recorrido
            <ArrowRight size={17} />
          </a>
        )}
      </div>
    </article>
  );
}

function InfoPill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#1F3A2E]/10 bg-white px-3 py-2 text-xs font-black text-[#1F3A2E]">
      <span className="text-[#C9A24D]">{icon}</span>
      {label}
    </span>
  );
}