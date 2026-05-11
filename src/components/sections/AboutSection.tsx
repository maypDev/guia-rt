import { Headphones, MapPinned, QrCode, Route, Smartphone } from "lucide-react";

/**
 * AboutSection component
 *
 * Explains the purpose of the route and highlights the main digital resources.
 * This section helps users understand the experience before starting the route.
 */
export function AboutSection() {
  return (
    <section
      id="sobre-la-ruta"
      className="relative overflow-hidden bg-[#F8F4EA] px-4 py-20 text-[#2B2118]"
    >
      {/* Decorative background */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#C9A24D]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#1F3A2E]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1F3A2E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1F3A2E]">
          <Route size={15} />
          Sobre la ruta
        </div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black leading-tight text-[#1F3A2E] sm:text-4xl">
              Una guía digital para recorrer la memoria histórica de Oruro
            </h2>

            <p className="mt-5 text-base leading-8 text-[#4A4036]">
              Esta experiencia propone una ruta turística interactiva basada en
              espacios de la ciudad de Oruro vinculados con la memoria de la
              Guerra del Chaco. La página funciona como una guía digital para
              acompañar al visitante antes, durante y después del recorrido.
            </p>

            <p className="mt-4 text-base leading-8 text-[#4A4036]">
              Cada parada integra una explicación breve, ubicación, audio
              interpretativo, enlace a realidad aumentada y navegación hacia el
              siguiente punto de la ruta.
            </p>

            {/* Callout card */}
            <div className="mt-7 rounded-3xl border border-[#C9A24D]/30 bg-white/70 p-5 shadow-xl shadow-[#2B2118]/5 backdrop-blur-md">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A24D] text-[#12100d]">
                  <Smartphone size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#2B2118]">
                    Pensada para celulares
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#6B6B6B]">
                    El turista podrá abrir la ruta desde un QR, consultar el
                    mapa, escuchar relatos y activar contenidos interactivos
                    desde su propio dispositivo móvil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <AboutFeatureCard
              icon={<MapPinned size={22} />}
              title="Mapa interactivo"
              description="Visualiza el inicio, el final y las seis paradas del recorrido."
            />

            <AboutFeatureCard
              icon={<Headphones size={22} />}
              title="Audios interpretativos"
              description="Escucha relatos breves adaptados para cada punto de la ruta."
            />

            <AboutFeatureCard
              icon={<QrCode size={22} />}
              title="QR y realidad aumentada"
              description="Accede a contenidos digitales y experiencias RA mediante enlaces por parada."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable feature card for the About section.
 */
function AboutFeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-3xl border border-[#1F3A2E]/10 bg-white/80 p-5 shadow-lg shadow-[#2B2118]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F3A2E] text-[#C9A24D] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#C9A24D] group-hover:text-[#12100d]">
        {icon}
      </div>

      <h3 className="text-lg font-black text-[#1F3A2E]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#6B6B6B]">{description}</p>
    </article>
  );
}