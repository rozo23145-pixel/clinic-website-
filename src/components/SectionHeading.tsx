import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-3 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.18em] uppercase ${
            dark ? 'text-[#B39455]' : 'text-[#8B6D35]'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight leading-[1.2] ${
          dark ? 'text-white' : 'text-[#20211F]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          } ${dark ? 'text-[#E8E5DE]/80' : 'text-[#686A65]'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
