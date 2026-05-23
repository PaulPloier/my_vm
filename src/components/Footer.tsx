import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
  onOpenCookies: () => void;
  onOpenBarrierefreiheit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenImpressum,
  onOpenDatenschutz,
  onOpenCookies,
  onOpenBarrierefreiheit,
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <footer className="bg-neutral-dark text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo MY Versicherungsmakler"
                className="h-10 w-auto brightness-0 invert object-contain"
              />
              <div>
                <span className="font-bold text-lg tracking-tight block">MY</span>
                <span className="text-[10px] uppercase font-bold text-primary-light tracking-widest block -mt-1">
                  Versicherungsmakler
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Als unabhängiger Versicherungsmakler stehen wir seit 25 Jahren an Ihrer Seite. Wir beraten Sie persönlich, objektiv und finden die passende Vorsorge für Ihre Bedürfnisse.
            </p>
            <p className="text-sm font-bold italic text-primary-light">
              „Versichern heisst vertrauen“
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-xs font-medium text-white/70">
              <li>
                <a
                  href="#ueber-uns"
                  onClick={(e) => handleLinkClick(e, '#ueber-uns')}
                  className="hover:text-primary-light transition-colors"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  onClick={(e) => handleLinkClick(e, '#leistungen')}
                  className="hover:text-primary-light transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleLinkClick(e, '#team')}
                  className="hover:text-primary-light transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  onClick={(e) => handleLinkClick(e, '#kontakt')}
                  className="hover:text-primary-light transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links (4 cols) */}
          <div className="md:col-span-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Rechtliches</h3>
            <ul className="space-y-2.5 text-xs font-medium text-white/70">
              <li>
                <button
                  onClick={onOpenImpressum}
                  className="hover:text-primary-light transition-colors text-left focus:outline-none cursor-pointer"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDatenschutz}
                  className="hover:text-primary-light transition-colors text-left focus:outline-none cursor-pointer"
                >
                  Datenschutz
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCookies}
                  className="hover:text-primary-light transition-colors text-left focus:outline-none cursor-pointer"
                >
                  Cookie-Einstellungen
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBarrierefreiheit}
                  className="hover:text-primary-light transition-colors text-left focus:outline-none cursor-pointer"
                >
                  Hinweis für Menschen mit Beeinträchtigung
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright and Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary-light shrink-0" />
            <span>© {currentYear} my Versicherungsmakler GmbH. Alle Rechte vorbehalten.</span>
          </div>
          <div>
            <span>GISA-Zahl: 16817418 | Firmenbuchgericht Linz</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
