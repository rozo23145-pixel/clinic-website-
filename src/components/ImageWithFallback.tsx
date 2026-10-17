import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle = 'Om Multispeciality Dental Clinic',
  className = '',
  aspectRatioClass = 'aspect-[16/9]',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#F8F7F4] border border-[#E8E5DE] rounded-xl flex flex-col items-center justify-center p-6 text-center text-[#686A65] ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full bg-[#F4EFE6] text-[#B39455] flex items-center justify-center mb-3">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4.5C8 4.5 6 7 6 10.5C6 14.5 7.5 19.5 9.5 21C10.5 21.8 11.2 19.5 12 17.5C12.8 19.5 13.5 21.8 14.5 21C16.5 19.5 18 14.5 18 10.5C18 7 16 4.5 12 4.5Z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-[#20211F]">{fallbackTitle}</span>
        <span className="text-xs text-[#686A65] mt-1">Official clinic asset placeholder</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      className={className}
      {...rest}
    />
  );
};
