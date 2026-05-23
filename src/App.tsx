import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { About } from './components/About';
import { Services } from './components/Services';
import { Claims } from './components/Claims';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalVariant, setLegalVariant] = useState<'impressum' | 'datenschutz' | 'cookies' | 'barrierefreiheit' | null>(null);

  const handleOpenAppointment = (serviceKey: string = '') => {
    setSelectedService(serviceKey);
    setIsAppointmentOpen(true);
  };

  const handleOpenLegal = (variant: 'impressum' | 'datenschutz' | 'cookies' | 'barrierefreiheit') => {
    setLegalVariant(variant);
    setIsLegalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('leistungen');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col justify-between">
      {/* Sticky Header Navigation */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Vertrauensbereich / Trust Badges */}
        <Trust />

        {/* 3. Über Uns */}
        <About />

        {/* 4. Leistungen Grid */}
        <Services onSelectService={(key) => handleOpenAppointment(key)} />

        {/* 5. Schadensfall Betreuung */}
        <Claims onOpenAppointment={() => handleOpenAppointment()} />

        {/* 6. Team Section */}
        <Team />

        {/* 7. Kontakt Section (Details, Hours, inline Message & Google Maps) */}
        <Contact />
      </main>

      {/* 8. Footer Section */}
      <Footer
        onOpenImpressum={() => handleOpenLegal('impressum')}
        onOpenDatenschutz={() => handleOpenLegal('datenschutz')}
        onOpenCookies={() => handleOpenLegal('cookies')}
        onOpenBarrierefreiheit={() => handleOpenLegal('barrierefreiheit')}
      />

      {/* Modal overlays */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        selectedService={selectedService}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => {
          setIsLegalOpen(false);
          setLegalVariant(null);
        }}
        variant={legalVariant}
      />
    </div>
  );
}
