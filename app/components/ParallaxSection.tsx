'use client';
import { useEffect, useState } from 'react';

export default function ParallaxSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/stock-market.jpg')] bg-cover bg-center"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm">
          <div className="container mx-auto h-full flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl text-white font-bold text-center">
              Shaping Future Financial Leaders
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}