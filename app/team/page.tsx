'use client';

import Navbar from '../components/Navbar';

export default function Team() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Our Team
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "President",
                image: "/team/president.jpg",
                linkedin: "#"
              },
              {
                name: "Sarah Williams",
                role: "Vice President",
                image: "/team/vice-president.jpg",
                linkedin: "#"
              },
              {
                name: "Michael Chen",
                role: "Technical Head",
                image: "/team/tech-head.jpg",
                linkedin: "#"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
              >
                <div className="h-64 overflow-hidden">
                  <div className="h-full w-full bg-gray-200 animate-pulse" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-4">
                    {member.role}
                  </div>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}