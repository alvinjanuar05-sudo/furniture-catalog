import React from 'react';
import { Container } from '../ui/Container';
import { STUDIO_DATA } from '../../data/furnitureData';

export const Footer: React.FC = () => {
  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-stone-950 text-white font-sans pt-20 pb-12 border-t border-stone-800 selection:bg-white selection:text-stone-950">
      <Container>
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* TOP SECTION: VSCO-STYLE LARGE HEADLINE & COLUMNS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* LEFT SIDE: GIANT TAGLINE (VSCO STYLE) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white uppercase leading-[0.95] select-none">
                CRAFTED FOR <br />
                TIMELESS <br />
                LIVING.
              </h2>
              <p className="text-stone-400 text-xs sm:text-sm font-normal max-w-sm pt-2 leading-relaxed">
                Independent interior design studio and woodworking workshop producing contemporary, solid timber furniture objects.
              </p>
            </div>

            {/* RIGHT SIDE: 4 CLEAN LINK COLUMNS */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
              
              {/* COLUMN 1: STUDIO */}
              <div className="space-y-4">
                <span className="block text-[11px] font-normal tracking-[0.2em] text-stone-400 uppercase">
                  STUDIO
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-stone-300">
                  <li>
                    <button
                      onClick={() => handleNavClick('home')}
                      className="hover:text-[#ff4500] transition-colors cursor-pointer"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="hover:text-[#ff4500] transition-colors cursor-pointer"
                    >
                      About Studio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick('philosophy')}
                      className="hover:text-[#ff4500] transition-colors cursor-pointer"
                    >
                      Design Philosophy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick('location')}
                      className="hover:text-[#ff4500] transition-colors cursor-pointer"
                    >
                      Showroom
                    </button>
                  </li>
                </ul>
              </div>

              {/* COLUMN 2: COLLECTIONS */}
              <div className="space-y-4">
                <span className="block text-[11px] font-normal tracking-[0.2em] text-stone-400 uppercase">
                  COLLECTIONS
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-stone-300">
                  <li><a href="#catalog" className="hover:text-[#ff4500] transition-colors">Living Room</a></li>
                  <li><a href="#catalog" className="hover:text-[#ff4500] transition-colors">Dining Room</a></li>
                  <li><a href="#catalog" className="hover:text-[#ff4500] transition-colors">Lighting</a></li>
                  <li><a href="#catalog" className="hover:text-[#ff4500] transition-colors">Accent Pieces</a></li>
                </ul>
              </div>

              {/* COLUMN 3: SERVICES */}
              <div className="space-y-4">
                <span className="block text-[11px] font-normal tracking-[0.2em] text-stone-400 uppercase">
                  SERVICES
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-stone-300">
                  <li><span className="text-stone-400 cursor-default">Spatial Layout</span></li>
                  <li><span className="text-stone-400 cursor-default">Custom Timber</span></li>
                  <li><span className="text-stone-400 cursor-default">White-Glove Delivery</span></li>
                  <li><span className="text-stone-400 cursor-default">3D Visualization</span></li>
                </ul>
              </div>

              {/* COLUMN 4: CONNECT */}
              <div className="space-y-4">
                <span className="block text-[11px] font-normal tracking-[0.2em] text-stone-400 uppercase">
                  CONNECT
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-stone-300">
                  <li>
                    <a
                      href={`mailto:${STUDIO_DATA?.email || 'hello@decorstudio.co.id'}`}
                      className="hover:text-[#ff4500] transition-colors block truncate"
                    >
                      Email Us
                    </a>
                  </li>
                  <li>
                    <a
                      href={STUDIO_DATA?.whatsapp || 'https://wa.me/6282112345678'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff4500] transition-colors block"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href={STUDIO_DATA?.instagram || 'https://instagram.com/decorstudio'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff4500] transition-colors block"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={STUDIO_DATA?.mapsUrl || 'https://maps.google.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff4500] transition-colors block"
                    >
                      Google Maps
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* BOTTOM BAR / COPYRIGHT LINE */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-center text-xs font-normal text-stone-500 gap-4">
            <p>© {new Date().getFullYear()} {STUDIO_DATA?.name || 'FORMA'} Studio. All rights reserved.</p>
            <p className="text-stone-500 tracking-wide">Designed with intention & craft.</p>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;