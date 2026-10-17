import React from 'react';

interface IllustrativeTagProps {
  note?: string;
  className?: string;
}

/**
 * Discreet, respectful disclosure tag indicating representative clinical imagery
 * as required by the master brief (no stock photo model misattributed as real clinic/doctor).
 */
export const IllustrativeTag: React.FC<IllustrativeTagProps> = ({
  note = 'Representative clinical imagery',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#20211F]/80 backdrop-blur-xs text-[11px] font-medium text-white/90 tracking-wide border border-white/10 ${className}`}
      role="note"
      aria-label={note}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#B39455] shrink-0" aria-hidden="true" />
      <span>{note}</span>
    </div>
  );
};
