import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { FeedbackSection } from "./components/sections/FeedbackSection";
import { HeroSection } from "./components/sections/HeroSection";
import { RouteMapSection } from "./components/sections/RouteMapSection";
import { StopDetailsSection } from "./components/sections/StopDetailsSection";
import { TimelineStops } from "./components/sections/TimelineStops";

/**
 * Main application component
 *
 * This component organizes the one-page tourism guide.
 * The page is built section by section to keep the architecture clean.
 */
function App() {
  return (
    <main className="min-h-screen bg-[#12100d] text-[#F8F4EA]">
      <Header />
      <HeroSection />
      <AboutSection />
      <RouteMapSection />
      <TimelineStops />
      <StopDetailsSection />
      <FeedbackSection />
    </main>
  );
}

export default App;