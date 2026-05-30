import React from 'react';
import { motion } from 'framer-motion';

interface ClaimsProps {
  onOpenAppointment: () => void;
}

export const Claims: React.FC<ClaimsProps> = ({ onOpenAppointment }) => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.2rem] bg-secondary px-6 py-10 text-paper sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-accent-soft">Warum unabhängig?</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Wir vertreten nicht
            <br />
            eine Gesellschaft.
            <br />
            Wir vertreten Sie.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/78">
            Genau das macht den Unterschied zwischen Makler und Vertreter. Wir vergleichen, ordnen ein und bleiben an Ihrer Seite, wenn ein Schadenfall Ruhe, Erfahrung und klare Kommunikation braucht.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="paper-panel rounded-[1.8rem] bg-paper/10 p-6 text-paper"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-accent-soft">Im Schadensfall</p>
          <p className="mt-4 text-2xl leading-tight">Persönlich erreichbar, wenn es darauf ankommt.</p>
          <p className="mt-4 text-base leading-relaxed text-paper/76">
            Kein Wechsel durch Callcenter, keine endlosen Weiterleitungen. Sie erreichen uns telefonisch, per E-Mail oder direkt vor Ort in Rohrbach-Berg.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onOpenAppointment}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-secondary"
            >
              Beratungstermin anfragen
            </button>
            <a
              href="tel:+4372895072"
              className="rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              +43 (0) 7289 / 5072
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
