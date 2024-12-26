'use client';
import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
}

export default function AnimatedCounter({ end, duration, label }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">{count}+</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}