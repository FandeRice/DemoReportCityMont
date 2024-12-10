"use client";
import React, { useEffect, useRef, useState } from 'react';

const SlideInEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 } // 20% del componente visible para activar el efecto
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default SlideInEffect;
