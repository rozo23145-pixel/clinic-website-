import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from '../context/RouterContext';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#F8F7F4] border border-[#E8E5DE] text-[#8B6D35] flex items-center justify-center mx-auto">
          <span className="font-serif text-2xl font-semibold">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif text-[#20211F]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#686A65] leading-relaxed">
            The page you are looking for does not exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#20211F] hover:bg-[#343530] text-white text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
          >
            <ArrowLeft className="w-4 h-4 text-[#B39455]" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
