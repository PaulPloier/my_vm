import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

const stats = [
  { value: '25', label: 'Jahre Erfahrung' },
  { value: '7', label: 'Experten im Team' },
  { value: '9', label: 'Leistungsbereiche' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onExploreServices }) => {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="min-w-0 py-4 lg:flex lg:flex-col lg:justify-between"
        >
          <div>
            <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-secondary">{stat.value}</p>
                </div>
              ))}
            </div>

            <span className="eyebrow">Seit 25 Jahren in Rohrbach-Berg</span>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.94] text-secondary sm:text-6xl lg:text-[5.25rem]">
              Versichern
              <br />
              heißt Vertrauen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-muted sm:text-xl">
              Persönliche Beratung, unabhängige Vergleiche und ein Team, das Ihre Fragen aus dem Alltag in Oberösterreich kennt.
              Für Privat- und Firmenkunden, die einen verlässlichen Ansprechpartner statt Konzernsprache suchen.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-12">
            <button onClick={onOpenAppointment} className="bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light">
              Termin vereinbaren
            </button>
            <button
              onClick={onExploreServices}
              className="border border-line bg-white px-7 py-3.5 text-base font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Unsere Leistungen
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
          className="relative min-w-0"
        >
          <div className="relative h-full overflow-hidden border border-line bg-secondary">
            <div className="grid h-full lg:grid-rows-[1fr_auto]">
              <img
                src="/images/hero-bg.jpg"
                alt="Standort von my Versicherungsmakler in Rohrbach-Berg"
                className="h-full min-h-[420px] w-full object-cover"
              />
              <div className="grid gap-6 border-t border-white/10 bg-secondary px-6 py-6 text-white sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">Kindergartenstraße 6</p>
                  <p className="mt-3 text-3xl font-semibold leading-tight">Rohrbach-Berg statt Hotline.</p>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Mo–Do 08:00–12:00 &amp; 13:00–17:00 Uhr
                  <br />
                  Fr 08:00–12:00 Uhr
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
