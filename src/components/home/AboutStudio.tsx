import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

export const AboutStudio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 bg-[#d8d8d8] font-sans text-stone-900 border-b border-stone-300/70 overflow-hidden"
    >
      <Container>
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* 1. MAIN HEADLINE (FADE IN SLIDE UP) */}
          <div
            className={`text-center px-2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-stone-950 tracking-tight uppercase leading-none select-none">
              FURNITURE MADE TO BELONG
            </h2>
          </div>

          {/* 2. TWO-COLUMN ARTICLE (STAGGERED DELAY 200ms & 400ms) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 text-stone-800 text-sm sm:text-base font-normal leading-relaxed pt-2">
            <p
              className={`text-left transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              We believe furniture should do more than fill a space. It should complement the way you live, bring character to your surroundings, and remain timeless through the years.
            </p>
            <p
              className={`text-right transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              At KALA Studio, we combine natural materials, thoughtful craftsmanship, and modern forms to create furniture that feels as considered as the spaces they inhabit.
            </p>
          </div>

          {/* 3. DIVIDER LINE & CLOSING ACCENT TEXT (STAGGERED DELAY 600ms) */}
          <div
            className={`pt-10 border-t border-stone-400/60 text-center transition-all duration-1000 delay-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-950 tracking-tight leading-snug">
              Crafted with intention. Made for living.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutStudio;