import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hitungan persentase acak cepat & halus
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 300);

      const destroyTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(destroyTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#d8d8d8] flex flex-col justify-between p-8 sm:p-12 font-sans select-none transition-all duration-700 ease-in-out ${
        isFadingOut
          ? 'opacity-0 -translate-y-8 pointer-events-none'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {/* ATAS: HEADER EDITORIAL */}
      <div className="flex justify-between items-center text-stone-600 text-[11px] font-normal tracking-[0.2em] uppercase">
        <span>FORMA STUDIO &copy; {new Date().getFullYear()}</span>
        <span>INTERIOR & FURNISHING</span>
      </div>

      {/* TENGAH: LOGO & PROGRESS LINE */}
      <div className="flex flex-col items-center justify-center space-y-6 my-auto">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-widest text-stone-950 uppercase">
          FORMA
        </h1>

        {/* PROGRESS BAR TIPIS */}
        <div className="w-48 sm:w-64 h-[2px] bg-stone-300/80 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-[#ff4500] transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* COUNTER PERCENTAGE */}
        <div className="text-xs font-normal tracking-widest text-[#ff4500]">
          {String(progress).padStart(2, '0')}%
        </div>
      </div>

      {/* BAWAH: FOOTER TAGLINE */}
      <div className="text-center text-stone-500 text-[10px] font-normal tracking-[0.25em] uppercase">
        CRAFTED FOR TIMELESS LIVING
      </div>
    </div>
  );
};

export default Preloader;