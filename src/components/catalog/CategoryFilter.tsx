import React from 'react';
import type { Category } from '../../data/furnitureData';

interface CategoryFilterProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'ALL PIECES' },
  { id: 'living', label: 'LIVING ROOM' },
  { id: 'dining', label: 'DINING ROOM' },
  { id: 'bedroom', label: 'BEDROOM' },
  { id: 'lighting', label: 'LIGHTING' },
  { id: 'decor', label: 'DECOR' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-stone-950 text-white shadow-md border border-stone-950'
                : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-950 border border-stone-300/70'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;