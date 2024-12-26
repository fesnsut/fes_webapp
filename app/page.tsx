import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ActivitiesSection from './components/ActivitiesSection';
import ContactSection from './components/ContactSection';
import ParallaxSection from './components/ParallaxSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ParallaxSection />
      <ActivitiesSection />
      <ContactSection />
    </main>
  );
}