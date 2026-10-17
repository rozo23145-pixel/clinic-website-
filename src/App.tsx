/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ReviewsPage } from './pages/Reviews';
import { AppointmentPage } from './pages/Appointment';
import { NotFoundPage } from './pages/NotFound';
import { clinicConfig } from './config/clinic';

function AppContent() {
  const { currentPath } = useRouter();

  // Dynamic Document Title and SEO Metadata Management
  useEffect(() => {
    let title = `${clinicConfig.name} | ${clinicConfig.doctorName}`;
    let description = 'Thoughtful, patient-centered dental care led by Dr. Diplai Modle-Senapati. Official clinic presentation and contact platform.';

    switch (currentPath) {
      case '/':
        title = `${clinicConfig.name} | ${clinicConfig.doctorName}`;
        description = 'Thoughtful, patient-centered dental care led by Dr. Diplai Modle-Senapati. Official clinic presentation and contact platform.';
        break;
      case '/about':
        title = `About Dr. Diplai Modle-Senapati | ${clinicConfig.name}`;
        description = 'Learn about Dr. Diplai Modle-Senapati and the patient-first clinical approach at Om Multispeciality Dental Clinic.';
        break;
      case '/reviews':
        title = `Patient Reviews (${clinicConfig.reportedReviewCount}) | ${clinicConfig.name}`;
        description = `Explore patient reviews and community feedback for Om Multispeciality Dental Clinic and Dr. Diplai Modle-Senapati.`;
        break;
      case '/appointment':
        title = `Book an Appointment | ${clinicConfig.name}`;
        description = 'Contact Om Multispeciality Dental Clinic directly via telephone or WhatsApp message to schedule your dental consultation.';
        break;
      default:
        title = `Page Not Found | ${clinicConfig.name}`;
        break;
    }

    document.title = title;

    // Update meta description tag
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPath]);

  // Route View Selection
  const renderCurrentRoute = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/reviews':
        return <ReviewsPage />;
      case '/appointment':
        return <AppointmentPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#252622]">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#20211F] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B39455]"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Landmark Area */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {renderCurrentRoute()}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
