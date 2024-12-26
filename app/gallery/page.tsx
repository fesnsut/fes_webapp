'use client';
import Navbar from '../components/Navbar';

export default function Gallery() {
  const images = [
    {
      src: "/gallery/event1.jpg",
      title: "Annual Trading Competition 2023",
      description: "Students participating in our flagship trading competition"
    },
    {
      src: "/gallery/event2.jpg",
      title: "Workshop on Market Analysis",
      description: "Industry experts sharing their knowledge"
    },
    {
      src: "/gallery/event3.jpg",
      title: "Team Building Activity",
      description: "Society members during our annual retreat"
    },
    {
      src: "/gallery/event4.jpg",
      title: "Guest Lecture Series",
      description: "Interactive session with finance professionals"
    },
    {
      src: "/gallery/event5.jpg",
      title: "Research Presentation",
      description: "Members presenting their research findings"
    },
    {
      src: "/gallery/event6.jpg",
      title: "Networking Event",
      description: "Building connections with industry leaders"
    }
  ];

  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Gallery
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="aspect-video bg-gray-200 animate-pulse">
                  {/* Replace with actual images */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}