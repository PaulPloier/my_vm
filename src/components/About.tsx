import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/2 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Unsere Philosophie</span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl">
              Wer wir sind & was uns bewegt
            </h2>
            <div className="mx-auto h-1 w-12 bg-primary rounded-full" />
          </motion.div>

          {/* Slogan Quote Block (Premium styling) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-neutral-light/50 border border-neutral-100 p-8 md:p-12 shadow-sm"
          >
            <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/10 -rotate-12 pointer-events-none" />
            <span className="relative block text-2xl md:text-3xl font-extrabold italic text-primary leading-snug tracking-tight">
              „Versichern heisst vertrauen“
            </span>
          </motion.div>

          {/* Description Columns */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-neutral-muted leading-relaxed text-base"
          >
            <div className="space-y-4">
              <p>
                Beim Thema Versicherung und Vorsorge sind Sie bei uns an der richtigen Adresse. Als unabhängiger Versicherungsmakler sind wir für Ihre Versicherungs- und Vorsorgefragen der richtige Ansprechpartner.
              </p>
              <p>
                Bereits seit 25 Jahren vertrauen uns unsere Kunden, denn <strong>VERSICHERN HEISST VERTRAUEN</strong> wird bei uns großgeschrieben. Die Betreuung der Kunden sowie die Zufriedenheit im Schadensfall steht bei uns an erster Stelle.
              </p>
            </div>
            <div className="space-y-4 flex flex-col justify-between">
              <p>
                Die Devise unserer Kunden lautet: Um das Thema Versicherung und Vorsorge kümmert sich MY Versicherungsmakler. Das gibt Ihnen die Freiheit und Sicherheit, sich voll und ganz auf das Wesentliche zu konzentrieren.
              </p>
              <div className="border-l-2 border-primary/20 pl-4 py-1 mt-4 md:mt-0 bg-primary/2 rounded-r-lg p-3">
                <p className="text-xs font-semibold text-neutral-dark">
                  Egal ob Privatkunde oder Firmenkunde, vereinbaren Sie einen Termin mit unserem Team und Sie werden zufrieden sein.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
