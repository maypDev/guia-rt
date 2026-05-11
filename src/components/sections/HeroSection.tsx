import { ArrowRight, Clock, Map, QrCode, Sparkles } from "lucide-react";

/**
 * HeroSection component
 * 
 * This is the first visual section of the route.
 * It introduces the tourism experience and provides the main actions.
 */
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#12100d] px-4 pt-24"
    >
      {/* Background decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F3A2E_0%,#12100d_45%,#080706_100%)]" />

      {/* Vintage texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:42px_42px]" />

      {/* Warm glowing shape */}
      <div className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#C9A24D]/20 blur-3xl" />
      <div className="absolute -left-16 bottom-24 h-72 w-72 rounded-full bg-[#1F3A2E]/50 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Small route label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-4 py-2 text-xs font-semibold text-[#E8D8B8] shadow-lg shadow-black/20">
          <Sparkles size={15} className="text-[#C9A24D]" />
          Experiencia turística interactiva
        </div>

        {/* Main title */}
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#F8F4EA] sm:text-5xl md:text-6xl">
          Oruro del alma
          <span className="mt-2 block bg-gradient-to-r from-[#E8D8B8] via-[#C9A24D] to-[#F8F4EA] bg-clip-text text-transparent">
            Ecos del Infierno Verde
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8D8B8]/85 sm:text-lg">
          Ruta turística interactiva sobre la memoria de la Guerra del Chaco en
          Oruro, con mapa digital, audios, códigos QR y recursos de realidad
          aumentada.
        </p>

        {/* Information badges */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <InfoBadge icon={<Clock size={16} />} label="3 h 30 min" />
          <InfoBadge icon={<Map size={16} />} label="6 paradas" />
          <InfoBadge icon={<QrCode size={16} />} label="QR + RA" />
        </div>

        {/* Main actions */}
        <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="#sobre-la-ruta"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#12100d] shadow-xl shadow-[#C9A24D]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0B85A] hover:shadow-2xl hover:shadow-[#C9A24D]/30 active:translate-y-0"
          >
            Conocer la ruta
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#paradas"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8D8B8]/25 bg-white/5 px-7 py-4 text-sm font-bold text-[#F8F4EA] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D] hover:bg-[#C9A24D]/10 hover:text-[#C9A24D] active:translate-y-0"
          >
            Ver paradas
          </a>
        </div>

        {/* Feature preview cards */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-3">
          <FeatureCard title="Mapa" description="Recorrido guiado" />
          <FeatureCard title="Audio" description="Relatos breves" />
          <FeatureCard title="RA" description="Contenido digital" />
        </div>
      </div>
    </section>
  );
}

/**
 * Small badge used to display route metadata.
 */
function InfoBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F8F4EA] backdrop-blur-md transition-all duration-300 hover:border-[#C9A24D]/60 hover:bg-[#C9A24D]/10 hover:text-[#C9A24D]">
      <span className="text-[#C9A24D]">{icon}</span>
      {label}
    </div>
  );
}

/**
 * Small feature card displayed at the bottom of the hero section.
 */
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/50 hover:bg-[#C9A24D]/10">
      <p className="text-sm font-bold text-[#F8F4EA]">{title}</p>
      <p className="mt-1 text-xs text-[#E8D8B8]/70">{description}</p>
    </div>
  );
}