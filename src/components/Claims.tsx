import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, PhoneCall, Mail } from 'lucide-react';

interface ClaimsProps {
  onOpenAppointment: () => void;
}

export const Claims: React.FC<ClaimsProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-white">
      {/* Decorative vector ring */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full border border-white/5 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Accent Icon Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md shadow-inner"
          >
            <ShieldAlert className="h-8 w-8" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">Immer für Sie da</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Auch im Schadensfall persönlich an Ihrer Seite
            </h2>
          </motion.div>

          {/* Text Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-white/80 max-w-2xl leading-relaxed"
          >
            Ein Schadensfall ist ärgerlich genug. Als Ihr Versicherungsmakler lassen wir Sie nicht mit unübersichtlichen Hotlines allein. Die persönliche Betreuung unserer Kunden sowie Ihre Zufriedenheit im Schadensfall steht bei MY Versicherungsmakler an erster Stelle.
          </motion.p>

          {/* Direct CTA Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center items-center"
          >
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-primary hover:bg-neutral-50 transition-colors shadow-lg active:scale-98 cursor-pointer"
            >
              Termin zur Beratung vereinbaren
            </button>
            <div className="flex gap-4">
              <a
                href="tel:+4372895072"
                className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
                title="Jetzt anrufen"
              >
                <PhoneCall className="h-5 w-5" />
              </a>
              <a
                href="mailto:rohrbach@myvm.at"
                className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
                title="E-Mail schreiben"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
