import {
  CheckCircle2,
  Clock,
  Coffee,
  Flag,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";
import { routeMoments } from "../../data/routeMoments";
import type { RouteMoment, RouteMomentType } from "../../types/route";

/**
 * ItinerarySection component
 *
 * Displays the full route itinerary with times, activities and descriptions.
 */
export function ItinerarySection() {
  return (
    <section
      id="itinerario"
      className="relative overflow-hidden bg-[#F8F4EA] px-4 py-20 text-[#2B2118]"
    >
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#1F3A2E]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C9A24D]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1F3A2E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1F3A2E]">
            <Clock size={15} />
            Itinerario sugerido
          </div>

          <h2 className="text-3xl font-black leading-tight text-[#1F3A2E] sm:text-4xl">
            Horarios y momentos del recorrido
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B6B6B]">
            Este horario es referencial y puede variar según el ritmo del grupo,
            accesos institucionales y condiciones del recorrido.
          </p>
        </div>

        <div className="space-y-4">
          {routeMoments.map((moment) => (
            <ItineraryCard key={moment.id} moment={moment} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ItineraryCard({ moment }: { moment: RouteMoment }) {
  const config = getMomentVisualConfig(moment.type);

  return (
    <article className="group rounded-3xl border border-[#1F3A2E]/10 bg-white/85 p-5 shadow-lg shadow-[#2B2118]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl">
      <div className="flex gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#12100d]"
          style={{ backgroundColor: config.color }}
        >
          {config.icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#1F3A2E]/10 px-3 py-1 text-xs font-black text-[#1F3A2E]">
              {moment.startTime} - {moment.endTime}
            </span>

            <span
              className="rounded-full px-3 py-1 text-xs font-black"
              style={{
                backgroundColor: config.softColor,
                color: config.textColor,
              }}
            >
              {config.label}
            </span>

            <span className="rounded-full bg-[#C9A24D]/15 px-3 py-1 text-xs font-black text-[#1F3A2E]">
              {moment.duration}
            </span>
          </div>

          <h3 className="text-lg font-black text-[#1F3A2E]">{moment.activity}</h3>

          <p className="mt-1 text-sm font-bold text-[#C9A24D]">{moment.place}</p>

          <p className="mt-3 text-sm leading-7 text-[#6B6B6B]">
            {moment.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function getMomentVisualConfig(type: RouteMomentType) {
  const config = {
    meeting: {
      label: "Encuentro",
      color: "#1F3A2E",
      softColor: "#1F3A2E20",
      textColor: "#1F3A2E",
      icon: <Flag size={22} className="text-[#C9A24D]" />,
    },
    intro: {
      label: "Introducción",
      color: "#C9A24D",
      softColor: "#C9A24D30",
      textColor: "#1F3A2E",
      icon: <Sparkles size={22} />,
    },
    interpretive: {
      label: "Interpretativo",
      color: "#C9A24D",
      softColor: "#C9A24D30",
      textColor: "#1F3A2E",
      icon: <MapPin size={22} />,
    },
    rest: {
      label: "Descanso",
      color: "#E8D8B8",
      softColor: "#E8D8B850",
      textColor: "#2B2118",
      icon: <Coffee size={22} />,
    },
    transition: {
      label: "Transición",
      color: "#6B6B6B",
      softColor: "#6B6B6B20",
      textColor: "#2B2118",
      icon: <Navigation size={22} className="text-[#F8F4EA]" />,
    },
    service: {
      label: "Servicio",
      color: "#6B6B6B",
      softColor: "#6B6B6B20",
      textColor: "#2B2118",
      icon: <Clock size={22} className="text-[#F8F4EA]" />,
    },
    closing: {
      label: "Cierre",
      color: "#2B2118",
      softColor: "#2B211820",
      textColor: "#2B2118",
      icon: <CheckCircle2 size={22} className="text-[#C9A24D]" />,
    },
  };

  return config[type];
}