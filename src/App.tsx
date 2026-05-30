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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 88;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark">
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main>
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onExploreServices={() => scrollToSection('leistungen')}
        />
        <Trust />
        <About />
        <Services onSelectService={(key) => handleOpenAppointment(key)} />
        <Team />
        <Claims onOpenAppointment={() => handleOpenAppointment()} />
        <Contact onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      <Footer
        onOpenImpressum={() => handleOpenLegal('impressum')}
        onOpenDatenschutz={() => handleOpenLegal('datenschutz')}
        onOpenCookies={() => handleOpenLegal('cookies')}
        onOpenBarrierefreiheit={() => handleOpenLegal('barrierefreiheit')}
      />

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
