'use client';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';  // LinkedIn icon from react-icons

interface Alumni {
  id: number;
  name: string;
  image: string;
  placement: string;
  linkedin: string;  // Add LinkedIn URL for each alumni
}

export default function AlumniScroll() {
  const [isPaused, setIsPaused] = useState(false);

  const alumni: Alumni[] = [
    { id: 1, name: "Alumni 1", image: "/images/alumni/1.jpg", placement: "Goldman Sachs", linkedin: "https://linkedin.com/in/alumni1" },
    { id: 2, name: "Alumni 2", image: "/images/alumni/2.jpg", placement: "Morgan Stanley", linkedin: "https://linkedin.com/in/alumni2" },
    { id: 3, name: "Alumni 3", image: "/images/alumni/3.jpg", placement: "JP Morgan", linkedin: "https://linkedin.com/in/alumni3" },
    // Add more alumni here
  ];

  return (
      <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex gap-4 ${!isPaused ? 'animate-scroll' : ''}`}>
          {[...alumni, ...alumni].map((alum, index) => (
              <div
                  key={`${alum.id}-${index}`}
                  className="relative min-w-[300px] h-[400px] group"
              >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${alum.image})` }}
                />
                <div className="absolute inset-0 bg-white group-hover:bg-black/60 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-100 group-hover:text-white transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{alum.name}</h3>
                    <p className="text-sm">{alum.placement}</p>
                  </div>

                  <a
                      href={alum.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-3xl text-white"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}
