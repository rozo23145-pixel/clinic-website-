import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { isPhoneNumberConfigured, isWhatsAppConfigured } from '../utils/validation';
import { getTelLink, getWhatsAppLink } from '../utils/contactLinks';
import { Link } from '../context/RouterContext';
import { ClinicLogo } from './ClinicLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phoneConfigured = isPhoneNumberConfigured(clinicConfig.phoneNumber);
  const whatsappConfigured = isWhatsAppConfigured(clinicConfig.whatsappNumber);
  const telLink = getTelLink(clinicConfig.phoneNumber);
  const whatsappLink = getWhatsAppLink(
    clinicConfig.whatsappNumber,
    clinicConfig.whatsappPrefillMessage
  );

  return (
    <footer className="bg-[#20211F] text-[#E8E5DE] border-t border-[#343530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Clinic Identity */}
          <div className="md:col-span-2 space-y-4">
            <ClinicLogo variant="light" />

            <p className="text-sm text-[#E8E5DE]/80 leading-relaxed max-w-md pt-2">
              Patient-centered dental practice led by{' '}
              <span className="text-white font-medium">{clinicConfig.doctorName}</span>. Dedicated to thoughtful care, clear communication, and comfortable clinical visits.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#B39455]">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Direct patient communication · No third-party data tracking</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B39455]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#E8E5DE]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39455]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39455]">
                  About Doctor & Clinic
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39455]">
                  Patient Reviews ({clinicConfig.reportedReviewCount})
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39455]">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contact & Clinic Status */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B39455]">
              Clinic Contact
            </p>

            <div className="space-y-2.5 text-sm">
              {/* Phone Line */}
              <div>
                <div className="text-xs text-[#E8E5DE]/60">Telephone:</div>
                {phoneConfigured && telLink ? (
                  <a
                    href={telLink}
                    className="inline-flex items-center gap-1.5 text-white hover:text-[#B39455] font-mono text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B39455]" />
                    <span>{clinicConfig.phoneNumber}</span>
                  </a>
                ) : (
                  <span className="text-xs text-[#E8E5DE]/50 italic">
                    Awaiting configuration
                  </span>
                )}
              </div>

              {/* WhatsApp Line */}
              <div>
                <div className="text-xs text-[#E8E5DE]/60">WhatsApp:</div>
                {whatsappConfigured && whatsappLink ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white hover:text-[#B39455] font-mono text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#B39455]" />
                    <span>+{clinicConfig.whatsappNumber}</span>
                  </a>
                ) : (
                  <span className="text-xs text-[#E8E5DE]/50 italic">
                    Pending verified number
                  </span>
                )}
              </div>

              {/* Verified Address & Hours only if supplied */}
              {clinicConfig.address && (
                <div className="pt-1">
                  <div className="text-xs text-[#E8E5DE]/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B39455]" /> Address:
                  </div>
                  <div className="text-xs text-white/90">{clinicConfig.address}</div>
                </div>
              )}

              {clinicConfig.openingHours && (
                <div className="pt-1">
                  <div className="text-xs text-[#E8E5DE]/60 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B39455]" /> Timings:
                  </div>
                  {clinicConfig.openingHours.map((slot, idx) => (
                    <div key={idx} className="text-xs text-white/90">
                      {slot.days}: {slot.hours}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="mt-12 pt-8 border-t border-[#343530] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8E5DE]/60">
          <p>
            © {currentYear} {clinicConfig.name}. All rights reserved. Principal Dentist: {clinicConfig.doctorName}.
          </p>

          <p className="flex items-center gap-1">
            <span>Direct patient consultation model</span>
            <span>·</span>
            <Link to="/appointment" className="hover:text-white transition-colors underline underline-offset-2">
              Contact for Appointments
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
