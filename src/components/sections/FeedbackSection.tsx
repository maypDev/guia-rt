import {
  ArrowUp,
  ExternalLink,
  MessageSquareText,
  Route,
  Sparkles,
} from "lucide-react";

/**
 * FeedbackSection component
 *
 * This section closes the tourism route experience.
 * It invites visitors to reflect on the route and complete a Google Forms
 * evaluation to help improve the proposal.
 */
export function FeedbackSection() {
  const feedbackFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeTCHFlGHJYPLXuk19dp71vUveSkvOYVWKamD1q-KUgn50nyQ/viewform";

  return (
    <section
      id="cierre"
      className="relative overflow-hidden bg-[#F8F4EA] px-4 py-20 text-[#2B2118]"
    >
      {/* Decorative background */}
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#1F3A2E]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C9A24D]/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#1F3A2E]/10 bg-white/80 shadow-2xl shadow-[#2B2118]/10 backdrop-blur-md">
          {/* Header area */}
          <div className="relative overflow-hidden bg-[#12100d] px-6 py-12 text-center text-[#F8F4EA] sm:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F3A2E_0%,#12100d_55%,#080706_100%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#C9A24D] text-[#12100d] shadow-xl shadow-[#C9A24D]/20">
                <Route size={30} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A24D]">
                Fin del recorrido
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Gracias por recorrer esta memoria
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#E8D8B8]/80">
                La ruta concluye como un espacio de homenaje, reflexión e
                identidad. Cada parada permite reconocer cómo la memoria de la
                Guerra del Chaco permanece en distintos espacios de Oruro.
              </p>
            </div>
          </div>

          {/* Body area */}
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
            {/* Reflection card */}
            <div className="rounded-3xl border border-[#1F3A2E]/10 bg-[#F8F4EA] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F3A2E] text-[#C9A24D]">
                <Sparkles size={24} />
              </div>

              <h3 className="text-2xl font-black text-[#1F3A2E]">
                Reflexión final
              </h3>

              <p className="mt-4 text-base leading-8 text-[#4A4036]">
                Esta experiencia busca fortalecer la interpretación del
                patrimonio histórico local mediante recursos digitales,
                promoviendo una forma más accesible, participativa y significativa
                de conocer la ciudad.
              </p>

              <p className="mt-4 text-base leading-8 text-[#4A4036]">
                Tu opinión ayudará a mejorar la ruta, sus contenidos, sus audios,
                el uso de códigos QR y la experiencia de realidad aumentada.
              </p>
            </div>

            {/* Feedback card */}
            <div className="rounded-3xl border border-[#C9A24D]/30 bg-[#C9A24D]/10 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A24D] text-[#12100d]">
                <MessageSquareText size={24} />
              </div>

              <h3 className="text-2xl font-black text-[#1F3A2E]">
                Cuéntanos tu experiencia
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#4A4036]">
                Responde un formulario breve para valorar la ruta, las paradas,
                los audios, los recursos interactivos y la facilidad de uso de la
                página.
              </p>

              <a
                href={feedbackFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F3A2E] px-6 py-4 text-sm font-black text-[#F8F4EA] shadow-lg shadow-[#1F3A2E]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A24D] hover:text-[#12100d] active:translate-y-0"
              >
                Responder encuesta
                <ExternalLink size={17} />
              </a>

              <a
                href="#inicio"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1F3A2E]/15 bg-white px-6 py-4 text-sm font-black text-[#1F3A2E] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D] hover:bg-[#C9A24D]/15 active:translate-y-0"
              >
                Volver al inicio
                <ArrowUp size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-[#6B6B6B]">
          “Oruro del alma: Ecos del Infierno Verde” es una propuesta de ruta
          turística interactiva orientada a la valorización de la memoria
          histórica, el patrimonio local y la innovación turística.
        </p>
      </div>
    </section>
  );
}