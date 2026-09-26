import React from 'react';
import type { Product } from '../../data/furnitureData';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative aspect-3/4 w-full overflow-hidden bg-stone-900 cursor-pointer shadow-xl transition-all"
    >
      {/* Gambar Full-Bleed Mentok Pinggir Card */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

      {/* Teks Diskonto & Nama Produk Overlay */}
      <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight block text-white">
          -30%
        </span>
        <span className="text-base sm:text-lg font-bold tracking-wide block text-white/90">
          {product.name}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;