import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { ArrowDownRight } from 'lucide-react';
import showroomNewImg from '../../assets/images/pict_toko.jpg';

interface FeaturedCollectionsProps {
  onSelectProduct?: (product: any) => void;
  onNavigateToCatalog?: () => void;
}

const STATS_DATA = [
  {
    value: '100+',
    label: 'Pieces Sold',
  },
  {
    value: '4.9',
    label: 'Customer Rating',
  },
];

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onNavigateToCatalog,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // 1. Scroll Reveal Observer
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

    // 2. Parallax Scroll Effect for Showroom Image
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

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#d8d8d8] font-sans text-stone-900 border-b border-stone-300/70 overflow-hidden"
    >
      {/* 1. LARGE HEADING ON TOP */}
      <Container className="mb-8 sm:mb-12">
        <div
          className={`max-w-6xl mx-auto text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#ff4500] tracking-tight uppercase leading-none select-none">
            THE COLLECTION PIECES FOR EVERY SPACE
          </h2>
        </div>
      </Container>

      {/* 2. IMAGE FULL-LEFT & DESCRIPTIONS + STATS ON RIGHT */}
      <div className="w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: STORE SHOWROOM IMAGE (FLUSH SIKU LURUS / NO ROUNDED) */}
          <div className="lg:col-span-8 w-full pr-0">
            <div
              onClick={onNavigateToCatalog}
              className={`group cursor-pointer relative w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-stone-300 rounded-none overflow-hidden shadow-md transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src={showroomNewImg}
                alt="Furniture Studio Showroom"
                style={{ transform: `translateY(${offsetY}px) scale(1.1)` }}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
              />
            </div>
          </div>

          {/* RIGHT SIDE: TEXT, STATS, DIVIDER, & HERO-STYLE PILL BUTTON */}
          <div
            className={`lg:col-span-4 px-6 sm:px-12 lg:px-0 lg:pr-12 space-y-6 text-center flex flex-col items-center justify-center transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Description */}
            <p className="text-stone-800 text-xs sm:text-sm font-normal leading-relaxed max-w-xs text-center">
              Explore thoughtfully designed furniture and objects created to
              bring balance, character, and warmth to your space.
            </p>

            {/* Sales Stats Section */}
            <div className="grid grid-cols-2 gap-6 pt-2 w-full max-w-xs">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="space-y-1 text-center">
                  <span className="block text-2xl sm:text-3xl font-normal tracking-tight text-stone-950 font-sans">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-normal tracking-widest text-stone-600 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full max-w-xs border-b border-stone-400/60 my-2" />

            {/* Hero-Style Pill Button */}
            <div className="pt-1 flex items-center">
              <button
                onClick={onNavigateToCatalog}
                type="button"
                className="group inline-flex items-center justify-center focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="bg-stone-950 group-hover:bg-[#ff4500] text-white text-xs font-normal tracking-wide px-9 py-2.5 rounded-full transition-colors duration-300 shadow-md uppercase">
                  View all collections
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

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;