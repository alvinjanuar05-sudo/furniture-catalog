import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowLeft,
  Headset,
  Compass,
  PackageCheck,
  Award,
  X,
  Plus,
  Check
} from 'lucide-react';
import type { Product } from '../../data/furnitureData';

// Import gambar produk khusus untuk Hero Beranda
import newChairHeroImg from '../../assets/images/8e423236-9904-49df-86f6-25be52abfe6d_removalai_preview.png';
import produk_1 from '../../assets/images/produk_1.svg';
import produk_2 from '../../assets/images/produk_2.svg';
import produk_3 from '../../assets/images/produk_3.svg';
import produk_4 from '../../assets/images/produk_4.svg';
import produk_5 from '../../assets/images/produk_5.svg';

interface HeroProps {
  onSelectProduct?: (product: Product) => void;
  onExploreCatalog?: () => void;
  onAddToCart?: (product: Product, quantity: number) => void;
}

const FEATURED_FLOATING_ITEMS = [
  {
    id: 'furn-01',
    name: 'Blue',
    price: 145.60,
    image: produk_1,
    category: 'living' as const,
    rating: 4.9,
    description: 'Minimalist wooden bar stool.',
    dimensions: { width: '40 cm', depth: '40 cm', height: '75 cm' },
    materials: ['Solid Oak'],
    inStock: true,
  },
  {
    id: 'furn-02',
    name: 'Brown',
    price: 265.50,
    image: produk_2,
    category: 'living' as const,
    rating: 5.0,
    description: 'Contemporary grey lounge chair.',
    dimensions: { width: '60 cm', depth: '60 cm', height: '80 cm' },
    materials: ['Fabric', 'Steel'],
    inStock: true,
  },
  {
    id: 'furn-03',
    name: 'Turquoise green',
    price: 160.00,
    image: produk_3,
    category: 'accent' as const,
    rating: 4.8,
    description: 'Scandinavian wooden dining chair.',
    dimensions: { width: '45 cm', depth: '45 cm', height: '85 cm' },
    materials: ['Wood'],
    inStock: true,
  },
  {
    id: 'furn-04',
    name: 'Silver',
    price: 310.00,
    image: produk_4,
    category: 'living' as const,
    rating: 4.9,
    description: 'Exotic style armchair.',
    dimensions: { width: '65 cm', depth: '65 cm', height: '82 cm' },
    materials: ['Premium Walnut'],
    inStock: true,
  },
  {
    id: 'furn-05',
    name: 'Yellow',
    price: 198.00,
    image: produk_5,
    category: 'accent' as const,
    rating: 4.7,
    description: 'Aesthetic wooden accent bench.',
    dimensions: { width: '50 cm', depth: '50 cm', height: '70 cm' },
    materials: ['Teak Wood'],
    inStock: true,
  },
];

const BRAND_FEATURES = [
  {
    id: 'feat-1',
    icon: Headset,
    title: 'PERSONAL SERVICE',
    subtitle: 'Dedicated assistance & custom sizing for your specific interior needs.',
  },
  {
    id: 'feat-2',
    icon: Compass,
    title: 'CRAFTED WITH CARE',
    subtitle: 'Thoughtful materials & refined details processed by master craftsmen.',
  },
  {
    id: 'feat-3',
    icon: PackageCheck,
    title: 'WHITE-GLOVE DELIVERY',
    subtitle: 'Safe nationwide delivery with full assembly and setup included.',
  },
  {
    id: 'feat-4',
    icon: Award,
    title: 'BUILT TO LAST',
    subtitle: 'Made from premium solid timber built for everyday long-lasting living.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onAddToCart }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // State trigger untuk Animasi Entrance Staggered Reveal
  const [isLoaded, setIsLoaded] = useState(false);

  // State untuk Pop-up Card Modal
  const [modalProduct, setModalProduct] = useState<typeof FEATURED_FLOATING_ITEMS[0] | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // FUNGSI SCROLL KANAN-KIRI NATIVE (1 KARTU PERSISI)
  const handleNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 280;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 280;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const openProductModal = (item: typeof FEATURED_FLOATING_ITEMS[0]) => {
    setModalProduct(item);
    setIsAdded(false);
  };

  const handleAddToCartModal = () => {
    if (!modalProduct) return;
    if (onAddToCart) {
      onAddToCart(modalProduct as unknown as Product, 1);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setModalProduct(null);
    }, 1200);
  };

  return (
    <section className="w-full bg-[#d8d8d8] font-sans text-stone-900 pb-0 pt-14 relative overflow-hidden flex flex-col justify-between">
      
      {/* 1. HERO SECTION */}
      <Container className="pt-4 sm:pt-6 pb-6 my-auto min-h-[58vh] flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto">
          
          {/* A. HEADLINE TEXT UPPERCASE */}
          <div
            className={`relative z-0 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[110px] font-normal text-stone-950 tracking-tight leading-[0.88] select-none uppercase">
              SHAPED FOR <br />
              LIVING. 
            </h1>
          </div>

          {/* B. GAMBAR KURSI & DESKRIPSI */}
          <div className="relative -mt-14 sm:-mt-20 lg:-mt-28 z-10 flex flex-col sm:flex-row items-end gap-6 sm:gap-12 pl-2 sm:pl-6">
            
            <div
              className={`w-64 sm:w-[320px] lg:w-[380px] shrink-0 transition-all duration-1000 delay-200 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <img
                src={newChairHeroImg}
                alt="Exotic Minimal Furniture"
                className="w-full h-auto object-contain drop-shadow-2xl transform -translate-y-2 lg:-translate-y-4"
              />
            </div>

            <div
              className={`space-y-3.5 pb-16 sm:pb-20 lg:pb-24 max-w-xs transition-all duration-1000 delay-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-stone-800 text-xs sm:text-sm font-normal leading-relaxed">
                Thoughtfully designed furniture made to bring comfort, character, and timeless style into every space.
              </p>

              <div className="pt-1 flex items-center">
                <button
                  onClick={onExploreCatalog}
                  type="button"
                  className="group inline-flex items-center justify-center focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="bg-stone-950 group-hover:bg-[#ff4500] text-white text-xs font-normal tracking-wide px-9 py-2.5 rounded-full transition-colors duration-300 shadow-md">
                    EXPLORE COLLECTION
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
      </Container>

      {/* 2. PRODUCT SLIDER CARDS (PERFECTLY CENTERED FIRST & LAST CARDS) */}
      <Container className="relative -mt-2 sm:-mt-4 pb-14 px-0 sm:px-6">
        <div className="mb-3 px-6 sm:px-1 flex items-center justify-between">
          <span className="text-[11px] font-normal tracking-[0.2em] uppercase text-stone-600 block">
            SELECTED PIECES
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 relative">
          {/* TOMBOL PANAH DESKTOP (KIRI) */}
          <div className="hidden md:flex items-center shrink-0 z-10">
            <button
              onClick={handlePrev}
              aria-label="Previous Products"
              className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-black text-white flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <ArrowLeft size={16} />
            </button>
          </div>

          {/* CONTAINER SLIDER PRESISI DENGAN OFFSET PADDING 100% DEAD CENTER */}
          <div
            ref={scrollContainerRef}
            className="w-full flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-[calc(50%-140px)] sm:px-0"
          >
            {FEATURED_FLOATING_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => openProductModal(item)}
                className="group cursor-pointer flex flex-col items-center space-y-3.5 shrink-0 w-[280px] sm:w-[calc(33.333%-1.25rem)] snap-center"
              >
                {/* BINGKAI KARTU GAMBAR PRESISI DI TENGAH */}
                <div className="w-full aspect-square bg-[#eae3d9] rounded-[32px] sm:rounded-[52px] overflow-hidden shadow-sm group-hover:shadow-md group-hover:ring-2 group-hover:ring-[#ff4500] transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* KOTAK TEKS SIMETRIS */}
                <div className="w-3/4 sm:w-2/3 bg-white rounded-2xl py-2.5 px-4 shadow-sm group-hover:shadow-md border border-white group-hover:border-[#ff4500]/50 text-center relative overflow-hidden h-[54px] flex items-center justify-center transition-all duration-300">
                  
                  {/* State Normal: Nama Produk & Harga */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                    <h3 className="font-normal text-stone-900 text-xs sm:text-sm tracking-wide truncate px-2">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-normal text-stone-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* State Hover: Transisi ke VIEW DETAILS */}
                  <div className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-normal tracking-widest text-[#ff4500] uppercase">
                      VIEW DETAILS
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* TOMBOL PANAH DESKTOP (KANAN) */}
          <div className="hidden md:flex items-center shrink-0 z-10">
            <button
              onClick={handleNext}
              aria-label="Next Products"
              className="w-10 h-10 rounded-full bg-stone-900 hover:bg-black text-white flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* CONTROLLER NAVIGASI MOBILE */}
        <div className="flex md:hidden items-center justify-center gap-6 pt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Products Mobile"
            className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <ArrowLeft size={16} />
          </button>

          <span className="text-xs font-normal tracking-widest text-stone-700 uppercase">
            MORE PIECES
          </span>

          <button
            onClick={handleNext}
            aria-label="Next Products Mobile"
            className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <ArrowRight size={16} />
          </button>
        </div>

      </Container>

      {/* 3. BRAND STANDARDS / WHY CHOOSE US SECTION */}
      <div className="w-full bg-[#e3e3e3] border-t border-b border-stone-300/70 py-16">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-start gap-4 md:gap-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-[#ff4500] tracking-tight uppercase leading-[0.9] select-none shrink-0">
                WHY CHOOSE <br />
                US
              </h2>

              <p className="text-stone-800 text-xs sm:text-sm max-w-xs font-normal leading-relaxed pb-1">
                We work to an extremely high standard of customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-2">
              {BRAND_FEATURES.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="flex flex-col items-center text-center space-y-3.5 group cursor-default"
                  >
                    <div className="text-stone-900 group-hover:text-[#ff4500] transition-colors duration-300 transform group-hover:scale-110">
                      <IconComponent
                        size={38}
                        strokeWidth={1.4}
                      />
                    </div>

                    <div className="space-y-1.5 px-1">
                      <h3 className="text-sm font-normal tracking-wider text-stone-900 uppercase">
                        {feat.title}
                      </h3>
                      <p className="text-xs font-normal text-stone-600 leading-relaxed">
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Container>
      </div>

      {/* 4. APPLE STYLE POP-UP CARD */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 font-sans">
          
          <div className="relative w-[320px] sm:w-[360px] h-[480px] sm:h-[520px] bg-[#eae3d9] rounded-[40px] shadow-2xl overflow-hidden border border-white/60 flex flex-col justify-between p-6 select-none font-sans">
            
            <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center p-6">
              <img
                src={modalProduct.image}
                alt={modalProduct.name}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-stone-900/40 via-stone-900/10 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-900/50 via-stone-900/10 to-transparent pointer-events-none z-10" />

            <div className="relative z-20 flex items-start justify-between w-full">
              <div className="text-left space-y-0.5">
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white font-sans drop-shadow-md">
                  {modalProduct.name}
                </h3>
                <p className="text-stone-200 text-sm font-normal font-sans drop-shadow-md">
                  ${modalProduct.price.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => setModalProduct(null)}
                className="w-9 h-9 rounded-full bg-white/70 hover:bg-white/90 backdrop-blur-md text-stone-700 flex items-center justify-center transition-colors cursor-pointer border border-white/40 shadow-xs"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative z-20 w-full pt-4">
              <button
                onClick={handleAddToCartModal}
                disabled={isAdded}
                className={`w-full py-3.5 px-6 rounded-full text-xs font-normal flex items-center justify-center gap-2 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer font-sans ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-950 hover:bg-[#ff4500] text-white hover:scale-[1.02] active:scale-98'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={16} />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} strokeWidth={2} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;