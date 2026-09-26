import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { STUDIO_DATA } from '../../data/furnitureData';
import type { Product } from '../../data/furnitureData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const formattedPrice = `$${product.price.toFixed(2)}`;

  const waNumber = STUDIO_DATA.phone ? STUDIO_DATA.phone.replace(/[^0-9]/g, '') : '6282112345678';
  const waMessage = encodeURIComponent(
    `Hello ${STUDIO_DATA.name}, I am interested in the product "${product.name}" (${formattedPrice}). Could you please share availability and custom options?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-stone-50 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-500 hover:text-stone-900 bg-stone-100/80 rounded-full cursor-pointer transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Image Side */}
          <div className="md:col-span-6 bg-[#eae3d9] aspect-square md:aspect-auto flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Info Side */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#ff4500]">
                {product.category} COLLECTION
              </span>
              <h2 className="text-2xl sm:text-3xl text-stone-900 font-normal tracking-tight">
                {product.name}
              </h2>
              <p className="text-xl font-normal text-stone-900">
                {formattedPrice}
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Specs */}
              <div className="border-t border-stone-200/80 pt-4 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                  Specifications & Materials
                </h4>
                <div className="text-xs text-stone-600 space-y-1">
                  <p>
                    <span className="font-medium text-stone-800">Dimensions:</span>{' '}
                    {product.dimensions
                      ? `${product.dimensions.width} x ${product.dimensions.depth} x ${product.dimensions.height}`
                      : '78 cm x 82 cm x 75 cm'}
                  </p>
                  <p>
                    <span className="font-medium text-stone-800">Materials:</span>{' '}
                    {product.materials?.join(', ') || 'Solid Timber'}
                  </p>
                </div>
              </div>
            </div>

            {/* Order CTA */}
            <div className="pt-4 border-t border-stone-200/80 space-y-3">
              <a
                href={`https://wa.me/${waNumber}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-[#ff4500] text-white py-3.5 text-xs font-normal tracking-wider uppercase transition-colors rounded-full cursor-pointer shadow-md"
              >
                <MessageCircle size={18} />
                <span>Inquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;