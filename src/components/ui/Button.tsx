import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-xs',
    secondary: 'bg-amber-900/90 text-amber-50 hover:bg-amber-900 shadow-xs',
    outline: 'border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-stone-50',
    ghost: 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/60',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-2',
    md: 'text-sm px-6 py-3 gap-2.5',
    lg: 'text-base px-8 py-4 gap-3',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};