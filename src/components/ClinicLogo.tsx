import React from 'react';
import { Link } from '../context/RouterContext';

interface ClinicLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455] rounded-sm py-1 ${className}`}
      aria-label="Om Multispeciality Dental Clinic - Return to Home"
    >
      {/* Minimalist architectural tooth-inspired monogram */}
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
          isDark
            ? 'bg-[#20211F] border-[#343530] text-[#B39455] group-hover:border-[#B39455]'
            : 'bg-white/10 border-white/20 text-[#B39455] group-hover:border-[#B39455]'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4.5C8 4.5 6 7 6 10.5C6 14.5 7.5 19.5 9.5 21C10.5 21.8 11.2 19.5 12 17.5C12.8 19.5 13.5 21.8 14.5 21C16.5 19.5 18 14.5 18 10.5C18 7 16 4.5 12 4.5Z" />
          <path d="M10 9C10.5 8.5 11.2 8.2 12 8.2C12.8 8.2 13.5 8.5 14 9" strokeWidth="1.25" />
        </svg>
      </div>

      {/* Strict official clinic wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-semibold tracking-[0.14em] text-xs uppercase ${
            isDark ? 'text-[#20211F]' : 'text-white'
          }`}
        >
          OM MULTISPECIALITY
        </span>
        <span
          className={`tracking-[0.18em] text-[10px] uppercase font-medium mt-1 ${
            isDark ? 'text-[#8B6D35]' : 'text-[#B39455]'
          }`}
        >
          DENTAL CLINIC
        </span>
      </div>
    </Link>
  );
};
