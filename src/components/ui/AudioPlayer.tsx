import { Headphones } from "lucide-react";

/**
 * AudioPlayer component
 *
 * Displays a styled audio player for each route stop.
 * The native HTML audio element is used to keep the experience lightweight
 * and compatible with most mobile browsers.
 */
export function AudioPlayer({
  audioUrl,
  title,
}: {
  audioUrl: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-[#C9A24D]/25 bg-[#12100d]/90 p-5 text-[#F8F4EA] shadow-xl shadow-black/20">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A24D] text-[#12100d]">
          <Headphones size={22} />
        </div>

        <div>
          <h4 className="font-black">Escuchar relato</h4>
          <p className="text-sm text-[#E8D8B8]/70">{title}</p>
        </div>
      </div>

      <audio controls className="w-full">
        <source src={audioUrl} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  );
}