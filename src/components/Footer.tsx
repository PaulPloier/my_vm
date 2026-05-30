import React from 'react';

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

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 88;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary px-4 pb-10 pt-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
        <div>
          <p className="text-xl font-semibold text-white">my Versicherungsmakler GmbH</p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-white/70">
            Unabhängige Beratung für Privat- und Firmenkunden in Rohrbach-Berg. Persönlich erreichbar und regional verwurzelt.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-primary-light">„Versichern heißt Vertrauen“</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/50">Navigation</p>
          <div className="mt-4 space-y-3 text-base text-white/85">
            <a href="#ueber-uns" onClick={(e) => scrollTo(e, 'ueber-uns')} className="block hover:text-primary-light">
              Über uns
            </a>
            <a href="#leistungen" onClick={(e) => scrollTo(e, 'leistungen')} className="block hover:text-primary-light">
              Leistungen
            </a>
            <a href="#team" onClick={(e) => scrollTo(e, 'team')} className="block hover:text-primary-light">
              Team
            </a>
            <a href="#kontakt" onClick={(e) => scrollTo(e, 'kontakt')} className="block hover:text-primary-light">
              Kontakt
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/50">Rechtliches</p>
          <div className="mt-4 space-y-3 text-base text-white/85">
            <button onClick={onOpenImpressum} className="block cursor-pointer text-left hover:text-primary-light">
              Impressum
            </button>
            <button onClick={onOpenDatenschutz} className="block cursor-pointer text-left hover:text-primary-light">
              Datenschutz
            </button>
            <button onClick={onOpenCookies} className="block cursor-pointer text-left hover:text-primary-light">
              Cookie-Einstellungen
            </button>
            <button onClick={onOpenBarrierefreiheit} className="block cursor-pointer text-left hover:text-primary-light">
              Hinweis für Menschen mit Beeinträchtigung
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <span>© {currentYear} my Versicherungsmakler GmbH. Alle Rechte vorbehalten.</span>
        <span>GISA-Zahl: 16817418 | Firmenbuchgericht Linz</span>
      </div>
    </footer>
  );
};
