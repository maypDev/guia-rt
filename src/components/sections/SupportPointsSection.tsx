import { Coffee, Flag, MapPin, MessageSquareText, Sparkles } from "lucide-react";
import { supportRouteMoments } from "../../data/routeMoments";
import type { RouteMoment, RouteMomentType } from "../../types/route";

/**
 * SupportPointsSection component
 *
 * Displays operational points such as meeting, intro, rest,
 * service and closing points.
 */
export function SupportPointsSection() {
  return (
    <section
      id="puntos-apoyo"
      className="relative overflow-hidden bg-[#12100d] px-4 py-20 text-[#F8F4EA]"
    >
      <div className="absolute left-0 top-10 h-96 w-96 rounded-full bg-[#1F3A2E]/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#C9A24D]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
            <Sparkles size={15} />
            Puntos de apoyo
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Momentos que mejoran la experiencia del visitante
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#E8D8B8]/75">
            Estos puntos no siempre son atractivos históricos, pero ayudan a
            organizar el recorrido, facilitar el descanso, orientar al grupo y
            cerrar la experiencia.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {supportRouteMoments.map((moment) => (
            <SupportPointCard key={moment.id} moment={moment} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportPointCard({ moment }: { moment: RouteMoment }) {
  const config = getSupportConfig(moment.type);

  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/50 hover:bg-[#C9A24D]/10">
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl text-[#12100d]"
          style={{ backgroundColor: config.color }}
        >
          {config.icon}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
            {config.label}
          </p>
          <h3 className="text-lg font-black text-[#F8F4EA]">
            {moment.activity}
          </h3>
        </div>
      </div>

      <p className="text-sm font-bold text-[#C9A24D]">
        {moment.startTime} - {moment.endTime} · {moment.duration}
      </p>

      <p className="mt-2 text-base font-black text-[#F8F4EA]">{moment.place}</p>

      <p className="mt-3 text-sm leading-7 text-[#E8D8B8]/75">
        {moment.description}
      </p>

      {moment.googleMapsUrl && (
        <a
          href={moment.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A24D] px-5 py-3 text-sm font-black text-[#12100d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0B85A]"
        >
          Abrir ubicación
          <MapPin size={17} />
        </a>
      )}
    </article>
  );
}

function getSupportConfig(type: RouteMomentType) {
  const config = {
    meeting: {
      label: "Encuentro",
      color: "#1F3A2E",
      icon: <Flag size={22} className="text-[#C9A24D]" />,
    },
    intro: {
      label: "Introducción",
      color: "#C9A24D",
      icon: <Sparkles size={22} />,
    },
    interpretive: {
      label: "Interpretativo",
      color: "#C9A24D",
      icon: <MapPin size={22} />,
    },
    rest: {
      label: "Descanso",
      color: "#E8D8B8",
      icon: <Coffee size={22} />,
    },
    transition: {
      label: "Transición",
      color: "#6B6B6B",
      icon: <MapPin size={22} className="text-[#F8F4EA]" />,
    },
    service: {
      label: "Servicio",
      color: "#6B6B6B",
      icon: <MapPin size={22} className="text-[#F8F4EA]" />,
    },
    closing: {
      label: "Cierre",
      color: "#2B2118",
      icon: <MessageSquareText size={22} className="text-[#C9A24D]" />,
    },
  };

  return config[type];
}