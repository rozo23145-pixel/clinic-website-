import React, { useState } from 'react';
import { Phone, MessageCircle, Info, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { isPhoneNumberConfigured, isWhatsAppConfigured } from '../utils/validation';
import { getTelLink, getWhatsAppLink } from '../utils/contactLinks';

interface ContactActionsProps {
  layout?: 'stacked' | 'grid';
  showAvailabilityNotice?: boolean;
}

export const ContactActions: React.FC<ContactActionsProps> = ({
  layout = 'grid',
  showAvailabilityNotice = true,
}) => {
  const [activeInfoModal, setActiveInfoModal] = useState<'phone' | 'whatsapp' | null>(null);

  const phoneConfigured = isPhoneNumberConfigured(clinicConfig.phoneNumber);
  const whatsappConfigured = isWhatsAppConfigured(clinicConfig.whatsappNumber);

  const telLink = getTelLink(clinicConfig.phoneNumber);
  const whatsappLink = getWhatsAppLink(
    clinicConfig.whatsappNumber,
    clinicConfig.whatsappPrefillMessage
  );

  return (
    <div className="space-y-6">
      {/* Contact Cards Grid */}
      <div
        className={
          layout === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
            : 'flex flex-col gap-5'
        }
      >
        {/* Option 1: Direct Phone Call */}
        <div className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8F7F4] border border-[#E8E5DE] flex items-center justify-center text-[#8B6D35]">
                <Phone className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#8B6D35]">
                Option 01
              </span>
            </div>

            <h3 className="text-xl font-serif text-[#20211F] font-medium">Direct Telephone Call</h3>
            <p className="text-sm text-[#686A65] mt-2 leading-relaxed">
              Speak directly with the clinic to enquire about appointment openings and consultation timings.
            </p>

            <div className="mt-5 p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E8E5DE]">
              <div className="text-xs text-[#686A65] font-medium mb-1">Clinic Contact Line</div>
              {phoneConfigured ? (
                <div className="text-base font-semibold text-[#20211F] font-mono tracking-wide">
                  {clinicConfig.phoneNumber}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#8B6D35] font-medium">
                  <Info className="w-4 h-4 shrink-0 text-[#8B6D35]" />
                  <span>Number awaiting configuration in <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-[#E8E5DE]">src/config/clinic.ts</code></span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E8E5DE]">
            {phoneConfigured && telLink ? (
              <a
                href={telLink}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#20211F] hover:bg-[#343530] text-white font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
              >
                <Phone className="w-4 h-4 text-[#B39455]" aria-hidden="true" />
                <span>Call Clinic Now</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setActiveInfoModal('phone')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8E5DE]/60 text-[#343530] border border-[#E8E5DE] font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
              >
                <Info className="w-4 h-4 text-[#8B6D35]" aria-hidden="true" />
                <span>Phone Pending Configuration</span>
              </button>
            )}
          </div>
        </div>

        {/* Option 2: WhatsApp Chat Redirect */}
        <div className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8F7F4] border border-[#E8E5DE] flex items-center justify-center text-[#8B6D35]">
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#8B6D35]">
                Option 02
              </span>
            </div>

            <h3 className="text-xl font-serif text-[#20211F] font-medium">WhatsApp Message</h3>
            <p className="text-sm text-[#686A65] mt-2 leading-relaxed">
              Send a patient enquiry message directly to the clinic at your convenience.
            </p>

            <div className="mt-5 p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E8E5DE]">
              <div className="text-xs text-[#686A65] font-medium mb-1">WhatsApp Channel</div>
              {whatsappConfigured ? (
                <div className="text-base font-semibold text-[#20211F] font-mono tracking-wide">
                  +{clinicConfig.whatsappNumber}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#8B6D35] font-medium">
                  <Info className="w-4 h-4 shrink-0 text-[#8B6D35]" />
                  <span>Placeholder (<code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-[#E8E5DE]">WHATSAPP_NUMBER_PLACEHOLDER</code>)</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E8E5DE]">
            {whatsappConfigured && whatsappLink ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#20211F] hover:bg-[#343530] text-white font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
              >
                <MessageCircle className="w-4 h-4 text-[#B39455]" aria-hidden="true" />
                <span>Open WhatsApp Enquiry</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setActiveInfoModal('whatsapp')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8E5DE]/60 text-[#343530] border border-[#E8E5DE] font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
              >
                <Info className="w-4 h-4 text-[#8B6D35]" aria-hidden="true" />
                <span>WhatsApp Pending Configuration</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mandatory Appointment Availability & Policy Statement */}
      {showAvailabilityNotice && (
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8F7F4] border border-[#E8E5DE] flex items-start gap-3.5 text-xs sm:text-sm text-[#686A65] leading-relaxed">
          <Info className="w-5 h-5 text-[#8B6D35] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-semibold text-[#20211F]">Appointment Confirmation Notice: </span>
            Om Multispeciality Dental Clinic coordinates consultation schedules directly via phone or WhatsApp. Submitting an enquiry or initiating contact does not automatically confirm an appointment; all timings must be mutually agreed with the clinic staff.
          </div>
        </div>
      )}

      {/* Informational Modal for Placeholder Contact Channels */}
      {activeInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="config-modal-title"
        >
          <div className="bg-white rounded-2xl border border-[#E8E5DE] max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#8B6D35] flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 id="config-modal-title" className="text-base font-serif font-semibold text-[#20211F]">
                  Contact Channel Awaiting Configuration
                </h4>
                <p className="text-xs text-[#686A65]">
                  Authoritative Clinic Information Policy
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#686A65] leading-relaxed">
              {activeInfoModal === 'whatsapp' ? (
                <>
                  In accordance with strict clinic authenticity guidelines, Om Multispeciality Dental Clinic has not yet supplied its verified WhatsApp business number. The placeholder <code className="bg-[#F8F7F4] px-1.5 py-0.5 rounded text-[#20211F] font-mono text-xs">WHATSAPP_NUMBER_PLACEHOLDER</code> is safely maintained to ensure no patient is redirected to an arbitrary or incorrect contact.
                </>
              ) : (
                <>
                  The clinic voice telephone number has not yet been populated in configuration. To prevent misdirected patient calls, this action remains in a verified pending state until the real clinic number is supplied.
                </>
              )}
            </p>

            <div className="bg-[#F8F7F4] border border-[#E8E5DE] rounded-xl p-3 text-xs text-[#343530]">
              <span className="font-semibold block mb-1">Developer / Clinic Editor Instruction:</span>
              Update <code className="font-mono text-[#8B6D35]">src/config/clinic.ts</code> with the verified value. The contact buttons will activate immediately across the entire site.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveInfoModal(null)}
                className="px-4 py-2 rounded-lg bg-[#20211F] text-white text-xs font-medium hover:bg-[#343530] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39455]"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
