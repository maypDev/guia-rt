import { useState } from "react";
import {
  BookOpen,
  Home,
  Map,
  MapPin,
  Menu,
  MessageSquareText,
  Route,
  X,
} from "lucide-react";

/**
 * Navigation item type
 *
 * Defines each menu option used in the header navigation.
 */
type NavigationItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

/**
 * Header component
 *
 * Displays a fixed top navigation bar with a mobile menu.
 * The menu allows users to jump quickly to the main sections of the page.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    {
      label: "Inicio",
      href: "#inicio",
      icon: <Home size={18} />,
    },
    {
      label: "Sobre la ruta",
      href: "#sobre-la-ruta",
      icon: <BookOpen size={18} />,
    },
    {
      label: "Mapa",
      href: "#mapa",
      icon: <Map size={18} />,
    },
    {
      label: "Paradas",
      href: "#paradas",
      icon: <Route size={18} />,
    },
    {
      label: "Detalles",
      href: "#detalles",
      icon: <MapPin size={18} />,
    },
    {
      label: "Encuesta",
      href: "#cierre",
      icon: <MessageSquareText size={18} />,
    },
  ];

  /**
   * Closes the menu after selecting a navigation option.
   * This improves the mobile experience.
   */
  const handleNavigationClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#12100d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Left side: hamburger menu */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-[#F8F4EA] transition-all duration-300 hover:scale-105 hover:bg-[#C9A24D] hover:text-[#12100d] active:scale-95"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center: route name */}
          <a
            href="#inicio"
            onClick={handleNavigationClick}
            className="flex items-center gap-2 no-underline"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A24D]/20 text-[#C9A24D] ring-1 ring-[#C9A24D]/40">
              <MapPin size={17} />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-[#F8F4EA]">
                Oruro del alma
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A24D]">
                Ruta histórica
              </p>
            </div>
          </a>

          {/* Right side: small status badge */}
          <a
            href="#detalles"
            onClick={handleNavigationClick}
            className="rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-3 py-1 text-[11px] font-semibold text-[#C9A24D] no-underline transition-all duration-300 hover:bg-[#C9A24D] hover:text-[#12100d]"
          >
            QR + RA
          </a>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#12100d]/70 backdrop-blur-sm">
          {/* Clickable background to close menu */}
          <button
            type="button"
            aria-label="Close navigation menu overlay"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default"
          />

          {/* Menu panel */}
          <nav className="absolute left-4 right-4 top-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#F8F4EA] p-4 text-[#2B2118] shadow-2xl shadow-black/40">
            <div className="mb-4 rounded-3xl bg-[#12100d] p-5 text-[#F8F4EA]">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A24D]">
                Menú de navegación
              </p>

              <h2 className="mt-2 text-xl font-black">
                Explora la ruta
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#E8D8B8]/75">
                Accede rápidamente al mapa, las paradas, los detalles y la
                encuesta final.
              </p>
            </div>

            <div className="grid gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigationClick}
                  className="group flex items-center justify-between rounded-2xl border border-[#1F3A2E]/10 bg-white px-4 py-4 text-[#1F3A2E] no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A24D]/60 hover:bg-[#C9A24D]/15 hover:shadow-md active:translate-y-0"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F3A2E] text-[#C9A24D] transition-all duration-300 group-hover:bg-[#C9A24D] group-hover:text-[#12100d]">
                      {item.icon}
                    </span>

                    <span className="font-black">{item.label}</span>
                  </span>

                  <span className="text-lg font-black text-[#C9A24D] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}