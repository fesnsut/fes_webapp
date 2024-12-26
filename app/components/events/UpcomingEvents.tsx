export default function UpcomingEvents() {
  const events = [
    {
      title: "Trading Masterclass",
      date: "15 Dec 2023",
      time: "2:00 PM",
      venue: "Seminar Hall",
      description: "Learn advanced trading strategies from market experts"
    },
    // Add more events
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-primary font-semibold mb-2">{event.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>🕐 {event.time}</span>
                <span>📍 {event.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}