import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { SectionHeading } from '../components/SectionHeading';
import { ContactActions } from '../components/ContactActions';

export const AppointmentPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Editorial Page Header */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E5DE] pb-12 sm:pb-16 bg-[#F8F7F4]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6D35]">
            Appointments & Consultations
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#20211F] font-normal tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Book an Appointment
          </h1>
          <p className="text-base sm:text-lg text-[#686A65] max-w-2xl leading-relaxed">
            Connect directly with Om Multispeciality Dental Clinic to enquire about appointment availability and schedule your consultation with Dr. Dipali Modle.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Two-Option Direct Channel, No Online Booking Form) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <SectionHeading
            eyebrow="Direct Clinic Channels"
            title="Choose Your Preferred Contact Method"
            description="We coordinate all appointments directly to ensure individual attention and prompt scheduling without intermediary automated forms."
          />
        </div>

        {/* 2-Option Card Container */}
        <ContactActions layout="grid" showAvailabilityNotice={true} />

        {/* Helpful Patient Guidance & FAQs */}
        <div className="pt-8 border-t border-[#E8E5DE] space-y-6">
          <h3 className="text-xl font-serif text-[#20211F]">What to Expect When Contacting Us</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#686A65]">
            <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8E5DE] space-y-2">
              <h4 className="font-semibold text-[#20211F]">Consultation Timings</h4>
              <p className="leading-relaxed">
                When you call or message, our clinic staff will discuss available time slots and recommend a consultation time that fits your schedule.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8E5DE] space-y-2">
              <h4 className="font-semibold text-[#20211F]">First-Time Consultations</h4>
              <p className="leading-relaxed">
                If this is your first visit, please let us know about any specific dental symptoms or questions so we can prepare appropriately.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Clinic Address & Hours Status */}
        <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#20211F]">
            Location & Practice Hours
          </h4>

          <div className="flex items-start gap-2.5 text-sm text-[#343530]">
            <MapPin className="w-4 h-4 text-[#8B6D35] shrink-0 mt-0.5" />
            <span>
              {clinicConfig.address}
              <a href={clinicConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="block mt-1 text-[#8B6D35] underline">
                View on Google Maps
              </a>
            </span>
          </div>

          {clinicConfig.openingHours ? (
            <div className="space-y-1 pt-2">
              <span className="text-xs font-semibold text-[#20211F] block">Consultation Hours:</span>
              {clinicConfig.openingHours.map((slot, idx) => (
                <div key={idx} className="text-xs text-[#343530]">
                  {slot.days}: {slot.hours}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#8B6D35]">
              Operating hours are verified upon personal scheduling with the clinic.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
