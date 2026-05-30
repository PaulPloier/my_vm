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
    <section id="home" className="section-shell relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="absolute right-0 top-12 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="min-w-0 max-w-3xl"
        >
          <span className="eyebrow">Seit 25 Jahren in Rohrbach-Berg</span>
          <h1 className="mt-8 max-w-3xl text-5xl leading-[0.98] text-secondary sm:text-6xl lg:text-[5.4rem]">
            Versichern
            <br />
            heißt Vertrauen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-muted sm:text-xl">
            Persönliche Beratung, unabhängige Vergleiche und ein Team, das Ihre Fragen aus dem Alltag in Oberösterreich kennt.
            Für Privat- und Firmenkunden, die einen verlässlichen Ansprechpartner statt Konzernsprache suchen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={onOpenAppointment}
              className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-secondary transition-transform duration-200 hover:-translate-y-0.5"
            >
              Termin vereinbaren
            </button>
            <button
              onClick={onExploreServices}
              className="rounded-full border border-line bg-paper/80 px-7 py-3.5 text-base font-semibold text-secondary transition-colors hover:border-primary/30 hover:text-primary"
            >
              Unsere Leistungen
            </button>
          </div>

          <div className="mt-12 grid gap-5 border-t border-line pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl text-primary sm:text-[2.75rem]">{stat.value}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-neutral-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
          className="relative min-w-0 lg:pl-8"
        >
          <div className="grain-outline relative mx-auto max-w-xl">
            <div className="overflow-hidden rounded-[2rem] bg-secondary">
              <img
                src="/images/hero-bg.jpg"
                alt="Standort von my Versicherungsmakler in Rohrbach-Berg"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="paper-panel absolute -bottom-10 left-0 max-w-xs rounded-[1.75rem] p-5 sm:left-6">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Kindergartenstraße 6</p>
            <p className="mt-3 text-2xl leading-tight text-secondary">Rohrbach-Berg statt Hotline.</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-muted">
              Mo–Do 08:00–12:00 &amp; 13:00–17:00 Uhr
              <br />
              Fr 08:00–12:00 Uhr
            </p>
          </div>

          <div className="absolute -right-2 top-8 hidden w-40 rotate-[5deg] overflow-hidden rounded-[1.5rem] border border-primary/20 bg-paper shadow-[0_16px_36px_rgba(34,49,56,0.12)] sm:block lg:-right-8">
            <img
              src="/images/team_andrea.jpg"
              alt="Andrea Höglinger"
              className="aspect-[4/5] w-full object-cover grayscale"
              loading="lazy"
            />
            <div className="border-t border-line px-4 py-3">
              <p className="text-sm text-secondary">Andrea Höglinger</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-primary">Geschäftsführerin</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
