import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-neutral-light via-white to-neutral-light pt-24 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Decorative background blur blobs (Acrisure style) */}
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary-light/5 blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {/* Eyebrow / Slogan */}
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Versichern heisst vertrauen
              </span>
            </div>

            {/* Main H1 Title (SEO target) */}
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-dark sm:text-5xl lg:text-6xl leading-[1.1]">
              Herzlich Willkommen bei <br />
              <span className="text-primary font-black">MY Versicherungsmakler</span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-base text-neutral-muted sm:text-lg leading-relaxed max-w-2xl">
              Beim Thema Versicherung und Vorsorge sind Sie bei uns an der richtigen Adresse. Als unabhängiger Versicherungsmakler sind wir für Ihre Versicherungs- und Vorsorgefragen der richtige Ansprechpartner. Bereits seit 25 Jahren vertrauen uns unsere Kunden, denn <strong>VERSICHERN HEISST VERTRAUEN</strong> und das wird bei uns großgeschrieben.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-light hover:shadow-xl transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                Termin vereinbaren
              </button>
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-base font-semibold text-neutral-dark shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                Leistungen ansehen
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Bottom Row Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-200/60 pt-8 mt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-1.5 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-dark">Seit 25 Jahren</p>
                  <p className="text-[10px] text-neutral-muted">an Ihrer Seite</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-1.5 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-dark">Unabhängig</p>
                  <p className="text-[10px] text-neutral-muted">für beste Angebote</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-1.5 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-dark">100% Persönlich</p>
                  <p className="text-[10px] text-neutral-muted">Schadensbetreuung</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[450px] lg:max-w-none">
              {/* Image Frame Accent Border */}
              <div className="absolute -inset-3 rounded-3xl border border-primary/10 -rotate-2 scale-102" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl transition-transform duration-500 hover:scale-[1.01] rotate-1">
                <img
                  src="/images/hero-bg.jpg"
                  alt="MY Versicherungsmakler Gebäude / Büro in Rohrbach-Berg"
                  className="aspect-[4/3] w-full object-cover lg:aspect-[4/5] xl:aspect-[1/1]"
                />
                
                {/* Visual Glass Tag */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/70 p-4 shadow-lg backdrop-blur-md border border-white/40 text-left">
                  <p className="text-sm font-bold text-neutral-dark">MY Versicherungsmakler</p>
                  <p className="text-xs text-neutral-muted">Ihr verlässlicher Partner in Rohrbach-Berg & Neustift</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
