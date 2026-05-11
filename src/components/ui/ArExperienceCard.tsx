import { ExternalLink, QrCode, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

/**
 * ArExperienceCard component
 *
 * Shows the AR activation area for a route stop.
 * The AR experience is opened through an external link, for example Kivicube.
 */
export function ArExperienceCard({
  arUrl,
  markerImage,
  title,
}: {
  arUrl: string;
  markerImage?: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-[#1F3A2E]/10 bg-white/85 p-5 shadow-xl shadow-[#2B2118]/5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1F3A2E] text-[#C9A24D]">
          <Sparkles size={22} />
        </div>

        <div>
          <h4 className="font-black text-[#1F3A2E]">Experiencia RA</h4>
          <p className="text-sm text-[#6B6B6B]">
            Activa el contenido interactivo de esta parada.
          </p>
        </div>
      </div>

      {markerImage && (
        <div className="mb-4 overflow-hidden rounded-2xl border border-[#1F3A2E]/10">
          <ImageWithFallback
            src={markerImage}
            alt={`Imagen marcador de ${title}`}
            className="h-40 w-full object-cover"
          />
        </div>
      )}

      <div className="rounded-2xl bg-[#F8F4EA] p-4">
        <div className="flex gap-3">
          <QrCode className="mt-1 shrink-0 text-[#C9A24D]" size={22} />

          <p className="text-sm leading-6 text-[#6B6B6B]">
            Escanea la imagen marcador o pulsa el botón para abrir la experiencia
            de realidad aumentada. Si la RA no carga, puedes continuar leyendo y
            escuchando el relato desde esta página.
          </p>
        </div>
      </div>

      <a
        href={arUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A24D] px-5 py-4 text-sm font-black text-[#12100d] shadow-lg shadow-[#C9A24D]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0B85A] hover:shadow-xl active:translate-y-0"
      >
        Activar experiencia RA
        <ExternalLink size={17} />
      </a>
    </div>
  );
}