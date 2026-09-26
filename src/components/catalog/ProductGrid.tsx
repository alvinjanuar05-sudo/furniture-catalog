import React, { useState, useEffect, useRef } from 'react';
import type { Product } from '../../data/furnitureData';

interface ProductGridProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

const ProductCardItem: React.FC<{
  product: Product;
  index: number;
  totalCount: number;
}> = ({ product, index, totalCount }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Parallax Shift Lambat dengan Batas Maksimal
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerOffset = rect.top - windowHeight / 2;
      setOffsetY(centerOffset * -0.015);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isEven = index % 2 === 0;
  const formattedIndex = String(index + 1).padStart(2, '0');
  const formattedTotal = String(totalCount).padStart(2, '0');

  return (
    <div
      ref={cardRef}
      className={`group relative w-full flex items-center min-h-[280px] sm:min-h-[340px] cursor-default transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14 ${
            isEven ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* TEKS & SPESIFIKASI */}
          <div
            className={`flex-1 space-y-3.5 max-w-sm sm:max-w-md ${
              isEven ? 'text-right' : 'text-left'
            }`}
          >
            <div className="text-[11px] font-normal tracking-[0.25em] text-[#ff4500] uppercase">
              {formattedIndex} &mdash; {formattedTotal}
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal text-black tracking-tight group-hover:text-[#ff4500] transition-colors duration-300">
              {product.name}
            </h3>

            <p className="text-black text-xs sm:text-sm font-normal leading-relaxed">
              {product.description ||
                'We believe furniture should do more than fill a space. It should complement the way you live, bring character to your surroundings, and remain timeless through the years.'}
            </p>

            <div className="pt-2 border-t border-stone-400/50 space-y-1 text-black text-xs font-normal">
              <p>
                <span className="font-semibold">Material:</span>{' '}
                {product.materials?.join(', ') || 'Solid Timber & Premium Fabric'}
              </p>
              <p>
                <span className="font-semibold">Dimensions:</span>{' '}
                {product.dimensions
                  ? `${product.dimensions.width} x ${product.dimensions.depth} x ${product.dimensions.height}`
                  : '78 cm x 82 cm x 75 cm'}
              </p>
              <p>
                <span className="font-semibold">Finishing:</span> Natural Organic Stain & Protective Coat
              </p>
            </div>
          </div>

          {/* BINGKAI FOTO LINGKARAN PRESISI */}
          <div className="shrink-0 relative flex items-center">
            <div
              className={`absolute top-0 bottom-0 bg-[#e8e8e8] group-hover:bg-[#dfdfdf] transition-colors duration-500 z-0 ${
                isEven
                  ? 'left-0 -right-[100vw] rounded-l-full'
                  : 'right-0 -left-[100vw] rounded-r-full'
              }`}
            />

            <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-stone-300 border-4 border-[#d8d8d8] group-hover:border-[#ff4500] overflow-hidden shadow-2xl flex items-center justify-center p-0 transition-colors duration-500">
              <img
                src={product.image}
                alt={product.name}
                style={{ transform: `translateY(${offsetY}px)` }}
                className="w-full h-full object-cover scale-[1.08]"
              />
            </div>
          </div>

          <div className="hidden md:block flex-1" />
        </div>
      </div>
    </div>
  );
};

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-black text-sm font-normal">
          No products found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-28 sm:space-y-40 py-12 w-full overflow-x-clip">
      {products.map((product, index) => (
        <ProductCardItem
          key={product.id}
          product={product}
          index={index}
          totalCount={products.length}
        />
      ))}
    </div>
  );
};

export default ProductGrid;