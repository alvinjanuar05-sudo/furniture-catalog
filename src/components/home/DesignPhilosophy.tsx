import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { ArrowDownRight } from 'lucide-react';

interface DesignPhilosophyProps {
  onOrderNow?: () => void;
}

const PHOTO_1 = 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop';
const PHOTO_2 = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop';

const WA_NUMBER = '6282112345678';
const WA_MESSAGE = encodeURIComponent('Hello KALA Studio, I am interested in ordering or consulting about furniture products.');

export const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({
  onOrderNow,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerOffset = rect.top - windowHeight / 2;
      setOffsetY(centerOffset * -0.06);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOrderNow = () => {
    if (onOrderNow) {
      onOrderNow();
    } else {
      window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`, '_blank');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-24 sm:py-32 bg-white font-sans text-stone-900 border-b border-stone-200 overflow-hidden"
    >
      <div
        className={`absolute top-0 right-24 sm:right-36 lg:right-48 w-36 sm:w-44 h-[410px] sm:h-[460px] bg-[#ff4500] z-0 transition-all duration-1000 ease-out origin-top ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-12 scale-95'
        }`}
      />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div
            className={`lg:col-span-6 space-y-6 text-left transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block text-5xl sm:text-6xl font-serif text-stone-950 leading-none select-none">
              “
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 uppercase tracking-tight leading-[1.15] max-w-lg">
              WE BELIEVE FURNITURE SHOULD AGE BEAUTIFULLY WITH YOU.
            </h2>

            <div className="pt-4 flex items-center">
              <button
                onClick={handleOrderNow}
                type="button"
                className="group inline-flex items-center justify-center focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="bg-stone-950 group-hover:bg-[#ff4500] text-white text-xs font-normal tracking-wide px-9 py-2.5 rounded-full transition-colors duration-300 shadow-md">
                  ORDER NOW
                </div>

                <div className="w-9 h-9 rounded-full bg-stone-950 group-hover:bg-[#ff4500] text-white flex items-center justify-center transition-colors duration-300 shadow-md -ml-1.5 shrink-0">
                  <ArrowDownRight
                    size={15}
                    strokeWidth={2}
                    className="transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center min-h-[460px] sm:min-h-[520px]">
            <div className="relative w-full max-w-md h-[460px] sm:h-[520px]">
              <div
                style={{ transform: `translateY(${offsetY * 0.8}px)` }}
                className={`absolute top-12 left-0 sm:left-2 w-48 sm:w-60 h-[280px] sm:h-[340px] bg-stone-800 z-10 overflow-hidden shadow-2xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <img
                  src={PHOTO_1}
                  alt="Furniture Detail 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                style={{ transform: `translateY(${offsetY * -0.8}px)` }}
                className={`absolute bottom-4 right-0 sm:right-2 w-44 sm:w-56 h-[260px] sm:h-[320px] bg-stone-700 z-20 overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 delay-200 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <img
                  src={PHOTO_2}
                  alt="Furniture Detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default DesignPhilosophy;