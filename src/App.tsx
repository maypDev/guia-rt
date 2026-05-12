import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { FeedbackSection } from "./components/sections/FeedbackSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ItinerarySection } from "./components/sections/ItinerarySection";
import { RouteMapSection } from "./components/sections/RouteMapSection";
import { StopDetailsSection } from "./components/sections/StopDetailsSection";
import { SupportPointsSection } from "./components/sections/SupportPointsSection";
import { TimelineStops } from "./components/sections/TimelineStops";

/**
 * Main application component
 *
 * This component organizes the one-page tourism guide.
 */
function App() {
  return (
    <main className="min-h-screen bg-[#12100d] text-[#F8F4EA]">
      <Header />
      <HeroSection />
      <AboutSection />
      <RouteMapSection />
      <ItinerarySection />
      <TimelineStops />
      <SupportPointsSection />
      <StopDetailsSection />
      <FeedbackSection />
    </main>
  );
}

export default App;