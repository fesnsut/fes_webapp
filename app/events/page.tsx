import Navbar from '../components/Navbar';
import ConsiliumSection from '../components/events/ConsiliumSection';
import UpcomingEvents from '../components/events/UpcomingEvents';

export default function Events() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <ConsiliumSection />
        <UpcomingEvents />
      </div>
    </main>
  );
}