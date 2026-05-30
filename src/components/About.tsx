import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="ueber-uns" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="min-w-0 max-w-2xl"
        >
          <span className="eyebrow">Über uns</span>
          <h2 className="mt-8 text-4xl leading-tight text-secondary sm:text-5xl">
            Wir kennen Rohrbach.
            <br />
            Und wir kennen Ihre Fragen.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-muted">
            <p>
              Als unabhängiger Versicherungsmakler begleiten wir Privat- und Firmenkunden seit mehr als zwei Jahrzehnten.
              Nicht mit Standardsätzen, sondern mit Gesprächen, die zur Lebensrealität unserer Region passen.
            </p>
            <p>
              Wer zu uns kommt, spricht mit Menschen, die erreichbar sind, die Versicherungen vergleichen und die auch dann
              dranbleiben, wenn ein Schadensfall Zeit und Ruhe braucht.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="min-w-[150px] border-l border-primary pl-4">
              <p className="text-3xl text-primary">Rohrbach-Berg</p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-neutral-muted">Regional verankert</p>
            </div>
            <div className="min-w-[150px] border-l border-primary pl-4">
              <p className="text-3xl text-primary">Privat &amp; Betrieb</p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-neutral-muted">Persönlich begleitet</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative min-w-0 lg:pt-8"
        >
          <div className="paper-panel overflow-hidden rounded-[2rem]">
            <img
              src="/images/hero-bg.jpg"
              alt="Gebäude und Büro von my Versicherungsmakler"
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="paper-panel relative -mt-12 ml-auto max-w-md rounded-[1.6rem] p-6 sm:mr-8">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">Unser Leitmotiv</p>
            <p className="mt-4 text-3xl leading-tight text-secondary">
              „Versichern heißt Vertrauen“
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-muted">
              Dieses Vertrauen entsteht nicht online in Sekunden, sondern über Beratung, Verlässlichkeit und ehrliche Erreichbarkeit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
