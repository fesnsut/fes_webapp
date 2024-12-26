"use client";

import { useState, useEffect, useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once it's visible
          }
        },
        {
          threshold: 0.2, // Trigger when 20% of the section is visible
        }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
      <section
          ref={sectionRef}
          className="py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {isVisible && (
                <>
                  <AnimatedCounter
                      end={500}
                      duration={2000}
                      label="Active Members"
                  />
                  <AnimatedCounter
                      end={50}
                      duration={2000}
                      label="Events Organized"
                  />
                  <AnimatedCounter end={100} duration={2000} label="Workshops" />
                  <AnimatedCounter
                      end={30}
                      duration={2000}
                      label="Industry Partners"
                  />
                </>
            )}
          </div>
        </div>
      </section>
  );
}
