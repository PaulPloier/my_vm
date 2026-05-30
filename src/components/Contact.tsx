import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  onOpenAppointment: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenAppointment }) => {
  return (
    <section id="kontakt" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="mb-10 grid gap-8 border-b border-line pb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end"
        >
          <div className="min-w-0">
            <span className="eyebrow">Kontakt</span>
            <h2 className="mt-8 text-4xl leading-tight text-secondary sm:text-5xl">
              Kommen Sie vorbei.
              <br />
              Oder rufen Sie einfach an.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-muted">
              Beratung beginnt oft mit einem kurzen Gespräch. Wir freuen uns auf Ihre Anfrage in Rohrbach-Berg.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <button onClick={onOpenAppointment} className="bg-primary px-6 py-3.5 text-sm font-semibold text-white">
              Termin vereinbaren
            </button>
            <a
              href="https://maps.google.com/?q=Kindergartenstraße+6,+4150+Rohrbach-Berg"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line px-6 py-3.5 text-sm font-semibold text-secondary transition-colors hover:border-primary/30 hover:text-primary"
            >
              Route öffnen
            </a>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.55 }}
            className="grid gap-4"
          >
            <div className="border border-line bg-paper p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Adresse</p>
              <p className="mt-3 text-xl leading-relaxed text-secondary">
                Kindergartenstraße 6
                <br />
                4150 Rohrbach-Berg
              </p>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Erreichbarkeit</p>
              <div className="mt-3 space-y-2 text-lg text-secondary">
                <a href="tel:+4372895072" className="block transition-colors hover:text-primary">
                  +43 (0) 7289 / 5072
                </a>
                <a href="mailto:rohrbach@myvm.at" className="block transition-colors hover:text-primary">
                  rohrbach@myvm.at
                </a>
              </div>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Öffnungszeiten</p>
              <p className="mt-3 text-base leading-relaxed text-neutral-muted">
                Mo–Do 08:00–12:00 &amp; 13:00–17:00 Uhr
                <br />
                Fr 08:00–12:00 Uhr
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative min-w-0 min-h-[420px] overflow-hidden border border-line"
          >
            <iframe
              title="Standort von my Versicherungsmakler in Rohrbach-Berg"
              src="https://maps.google.com/maps?q=Kindergartenstra%C3%9Fe%206,%204150%20Rohrbach-Berg&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
