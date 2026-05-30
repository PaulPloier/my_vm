import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ['home', 'ueber-uns', 'leistungen', 'team', 'kontakt'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
        }
      }
    };

    handleScroll();
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-line/80 bg-paper/95 py-3 shadow-[0_12px_35px_rgba(34,49,56,0.08)] backdrop-blur-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="min-w-0 flex items-center gap-4 focus:outline-none"
            aria-label="my Versicherungsmakler GmbH Startseite"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-[1.35rem] border border-primary/20 bg-white text-2xl font-semibold italic text-primary shadow-[0_12px_24px_rgba(28,106,97,0.08)]">
              my
            </span>
            <span className="hidden min-w-0 text-left sm:block">
              <span className="block truncate text-base font-semibold text-secondary">my Versicherungsmakler GmbH</span>
              <span className="block text-xs uppercase tracking-[0.24em] text-neutral-muted">Rohrbach-Berg</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-2 text-sm tracking-[0.14em] transition-colors duration-200 ${
                  activeSection === link.id ? 'text-primary' : 'text-secondary/80 hover:text-primary'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+4372895072"
              className="inline-flex items-center gap-2 text-sm text-secondary/85 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              +43 (0) 7289 / 5072
            </a>
            <button
              onClick={onOpenAppointment}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-secondary transition-transform duration-200 hover:-translate-y-0.5"
            >
              Termin vereinbaren
            </button>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="flex items-center justify-center rounded-full border border-line bg-paper/90 p-2 text-secondary md:hidden"
            aria-expanded={isOpen}
            aria-label="Navigation öffnen"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-secondary/20 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.42 }}
              className="fixed right-0 top-0 z-40 flex h-full w-full max-w-sm flex-col justify-between bg-paper px-6 pb-8 pt-24 shadow-[0_18px_50px_rgba(34,49,56,0.18)] md:hidden"
            >
              <div className="space-y-8">
                <div className="border-b border-line pb-5">
                  <p className="text-sm font-semibold text-secondary">my Versicherungsmakler GmbH</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-neutral-muted">Rohrbach-Berg</p>
                </div>

                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`border-b border-line pb-3 text-lg ${
                        activeSection === link.id ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+4372895072"
                  className="flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3 text-sm text-secondary"
                >
                  <Phone className="h-4 w-4" />
                  +43 (0) 7289 / 5072
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-secondary"
                >
                  Termin vereinbaren
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
