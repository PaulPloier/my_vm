import React from 'react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onSelectService: (serviceKey: string) => void;
}

const services = [
  {
    key: 'betrieb',
    title: 'Betrieb',
    description: 'Versicherungslösungen für Unternehmen, Mitarbeiter und Haftungsfragen.',
  },
  {
    key: 'eigenheim',
    title: 'Eigenheim',
    description: 'Schutz für das Haus, das Sie aufgebaut haben, vom Fundament bis zum Dach.',
  },
  {
    key: 'krankheit',
    title: 'Unfall/Krankheit',
    description: 'Absicherung für den Fall, dass Gesundheit plötzlich zum zentralen Thema wird.',
  },
  {
    key: 'berufsunfaehigkeit',
    title: 'Berufsunfähigkeit',
    description: 'Finanzielle Sicherheit, wenn Ihre Arbeitskraft nicht mehr selbstverständlich ist.',
  },
  {
    key: 'kfz',
    title: 'KFZ',
    description: 'Vergleiche für Haftpflicht, Kasko und Fuhrparks, damit Sie beruhigt unterwegs sind.',
  },
  {
    key: 'landwirtschaft',
    title: 'Landwirtschaft',
    description: 'Lösungen für Betriebe, Maschinen, Gebäude und alles, was Verantwortung trägt.',
  },
  {
    key: 'haushalt',
    title: 'Haushalt',
    description: 'Schutz für Einrichtung, Hausrat und den Alltag zuhause.',
  },
  {
    key: 'vorsorge',
    title: 'Vorsorge/Leben',
    description: 'Langfristige Vorsorge, damit Zukunft planbar bleibt.',
  },
  {
    key: 'rechtsschutz',
    title: 'Rechtsschutz',
    description: 'Absicherung, wenn gute Beratung auch juristisch Rückhalt braucht.',
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="leistungen" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="min-w-0 lg:sticky lg:top-28 lg:self-start"
        >
          <span className="eyebrow">Leistungen</span>
          <h2 className="mt-8 text-4xl leading-tight text-secondary sm:text-5xl">
            Was wir
            <br />
            für Sie schützen.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-muted">
            Keine austauschbaren Pakete. Wir schauen, welche Risiken zu Ihrem Leben, Ihrem Betrieb und Ihrer Planung passen.
          </p>
          <div className="paper-panel mt-10 rounded-[1.8rem] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">Für Privat- und Firmenkunden</p>
            <p className="mt-3 text-base leading-relaxed text-neutral-muted">
              Jede Kategorie führt direkt zu einer persönlichen Anfrage. So bleibt der nächste Schritt einfach und menschlich.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="min-w-0 space-y-4"
        >
          {services.map((service, index) => (
            <button
              key={service.key}
              type="button"
              onClick={() => onSelectService(service.key)}
              className={`paper-panel group block w-full rounded-[1.8rem] p-6 text-left transition-transform duration-200 hover:-translate-y-0.5 ${
                index % 2 === 1 ? 'lg:ml-12' : ''
              }`}
            >
              <div className="grid gap-4 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-start">
                <div className="text-3xl text-primary sm:text-4xl">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-2xl text-secondary">{service.title}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-muted">{service.description}</p>
                </div>
                <div className="self-center text-sm uppercase tracking-[0.2em] text-neutral-muted transition-colors group-hover:text-primary">
                  Termin
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
