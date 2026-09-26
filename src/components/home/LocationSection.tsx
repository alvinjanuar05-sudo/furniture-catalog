import React from 'react';
import { Container } from '../ui/Container';
import { STUDIO_DATA } from '../../data/furnitureData';
import { ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="py-20 sm:py-28 bg-[#d8d8d8] font-sans text-stone-900 border-b border-stone-300/70 overflow-hidden"
    >
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* MAPS EMBED FRAME */}
          <div className="lg:col-span-6 w-full h-[360px] sm:h-[420px] bg-stone-300 overflow-hidden shadow-md relative rounded-xs">
            <iframe
              title="Studio Location Map"
              src={
                STUDIO_DATA?.mapsEmbedUrl ||
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0268297424665!2d107.6111111!3d-6.8873222!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a6b0c360b%3A0x6b107e0c4b2b678!2sJl.%20Ir.%20H.%20Juanda%20No.128%2C%20Lebakgde%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040132!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid'
              }
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* ADDRESS & SHOWROOM INFO */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-6 px-4">
            <div className="space-y-1 text-stone-800 text-xs sm:text-sm font-normal">
              <p className="tracking-tight">
                Jl. Ir. H. Juanda No. 128, Bandung, West Java, Indonesia
              </p>
              <p className="text-stone-700">
                Monday – Saturday: 09:00 AM – 06:00 PM (GMT+7)
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 uppercase tracking-tight leading-none select-none"> 
              Visit our showroom.
            </h2>

            <div className="pt-2">
              <a
                href={
                  STUDIO_DATA?.mapsUrl ||
                  'https://maps.google.com/?q=Jl.+Ir.+H.+Juanda+No.+128,+Bandung'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="bg-stone-950 group-hover:bg-[#ff4500] text-white text-xs font-normal tracking-wide px-9 py-2.5 rounded-full transition-colors duration-300 shadow-md">
                  OPEN GOOGLE MAPS
                </div>

                <div className="w-9 h-9 rounded-full bg-stone-950 group-hover:bg-[#ff4500] text-white flex items-center justify-center transition-colors duration-300 shadow-md -ml-1.5 shrink-0">
                  <ExternalLink
                    size={15}
                    strokeWidth={2}
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default LocationSection;