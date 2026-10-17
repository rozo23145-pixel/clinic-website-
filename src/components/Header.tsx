import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { useRouter, Link } from '../context/RouterContext';
import { ClinicLogo } from './ClinicLogo';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes or ESC is pressed
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E5DE] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Clinic Brand Wordmark */}
        <div className="shrink-0">
          <ClinicLogo variant="dark" />
        </div>

        {/* Zone 2: Primary Nav Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#686A65]"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1 transition-colors hover:text-[#20211F] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455] rounded-xs ${
                  isActive ? 'text-[#20211F] font-semibold' : ''
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B39455] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action / Appointment */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            to="/appointment"
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455] whitespace-nowrap shrink-0 ${
              currentPath === '/appointment'
                ? 'bg-[#8B6D35] text-white shadow-xs'
                : 'bg-[#20211F] hover:bg-[#343530] text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#B39455]" aria-hidden="true" />
            <span>Appointment</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#20211F] hover:bg-[#F8F7F4] border border-[#E8E5DE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#20211F]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-[#20211F]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-[#E8E5DE] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#F4EFE6] text-[#8B6D35] font-semibold'
                    : 'text-[#343530] hover:bg-[#F8F7F4]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-[#E8E5DE]">
            <Link
              to="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#20211F] text-white text-sm font-semibold hover:bg-[#343530] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#B39455]" aria-hidden="true" />
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
