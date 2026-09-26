import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  tagline?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  tagline,
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-xl'}`}>
      {tagline && (
        <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
          {tagline}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight font-medium leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};