import React from 'react';

interface VygrahaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const VygrahaLogo: React.FC<VygrahaLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height classes that give the logo clean proportions without stretching
  const heightClass =
    size === 'sm' ? 'h-8' : size === 'lg' ? 'h-14' : size === 'xl' ? 'h-16' : 'h-10 sm:h-11';

  return (
    <img
      src="/vygraha-logo.png"
      alt="Vygraha Interiors and Construction Services"
      className={`${heightClass} w-auto object-contain select-none ${className}`}
    />
  );
};
