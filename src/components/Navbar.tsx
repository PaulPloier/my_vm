import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link detection
      const sections = ['home', 'ueber-uns', 'leistungen', 'team', 'kontakt'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über uns', href: '#ueber-uns', id: 'ueber-uns' },
    { name: 'Leistungen', href: '#leistungen', id: 'leistungen' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glassmorphism py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 focus:outline-none"
              aria-label="MY Versicherungsmakler Startseite"
            >
              <img
                src="https://www.myvm.at/wp-content/themes/myvm/img/logo.png"
                alt="Logo MY Versicherungsmakler"
                className="h-10 w-auto object-contain sm:h-12 transition-transform duration-300 hover:scale-105"
              />
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-bold text-lg tracking-tight leading-none text-primary">MY</span>
                <span className="text-xs font-medium text-neutral-muted tracking-wider">Versicherungsmakler</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1 hover:text-primary ${
                    activeSection === link.id ? 'text-primary' : 'text-neutral-dark/80'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-light hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                Termin vereinbaren
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center rounded-lg p-2 text-neutral-dark hover:bg-neutral-100 md:hidden focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Navigation umschalten"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Drawer Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-neutral-dark/20 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed bottom-0 top-0 right-0 z-35 w-full max-w-xs bg-white p-6 shadow-xl md:hidden flex flex-col pt-24 justify-between"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-lg font-semibold border-b border-neutral-100 pb-2 ${
                      activeSection === link.id ? 'text-primary' : 'text-neutral-dark/80'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pb-8">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAppointment();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-base font-semibold text-white shadow hover:bg-primary-light transition-colors cursor-pointer"
                >
                  <Calendar className="h-5 w-5" />
                  Termin vereinbaren
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
