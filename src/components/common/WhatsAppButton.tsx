import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_DATA } from '../../data/furnitureData';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={STUDIO_DATA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-stone-900 text-stone-50 px-4 py-3 shadow-xl hover:bg-stone-800 transition-all duration-300 group font-sans"
      aria-label="Konsultasi via WhatsApp"
    >
      <MessageCircle size={20} className="text-amber-400 group-hover:scale-110 transition-transform" />
      <span className="text-xs font-medium tracking-wide">Konsultasi Studio</span>
    </a>
  );
};