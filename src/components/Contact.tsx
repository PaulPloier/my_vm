import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="kontakt" className="bg-neutral-light/30 py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Kontaktieren Sie uns</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Wir sind für Sie da
          </h2>
          <p className="text-sm text-neutral-muted">
            Haben Sie Fragen zu Ihren Versicherungen oder wünschen Sie eine Beratung? Melden Sie sich bei uns.
          </p>
          <div className="mx-auto h-1 w-12 bg-primary rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Contact info & Quick message */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Standort Rohrbach */}
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-neutral-dark">Standort</h3>
                  <p className="mt-2 text-xs font-semibold text-neutral-dark">MY Versicherungsmakler</p>
                  <p className="text-xs text-neutral-muted">Kindergartenstraße 6</p>
                  <p className="text-xs text-neutral-muted">4150 Rohrbach-Berg</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kindergartenstraße+6,+4150+Rohrbach-Berg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-bold text-primary hover:text-primary-light flex items-center gap-1 focus:outline-none"
                >
                  Routenplaner öffnen →
                </a>
              </div>

              {/* Erreichbarkeit */}
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-neutral-dark">Kontakt</h3>
                  
                  <div className="mt-3 space-y-2">
                    <a
                      href="tel:+4372895072"
                      className="block text-xs font-bold text-neutral-dark hover:text-primary transition-colors focus:outline-none"
                    >
                      +43 (0) 7289 / 5072
                    </a>
                    <a
                      href="mailto:rohrbach@myvm.at"
                      className="block text-xs font-medium text-neutral-muted hover:text-primary transition-colors focus:outline-none"
                    >
                      rohrbach@myvm.at
                    </a>
                  </div>
                </div>
                <span className="mt-4 text-xs text-neutral-muted italic">Klick zum Anrufen / Mailen</span>
              </div>
            </div>

            {/* Öffnungszeiten Widget */}
            <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-dark">Kanzlei-Öffnungszeiten</h3>
                  <p className="text-[10px] text-neutral-muted">Persönlich für Sie erreichbar</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-100/50">
                  <span className="font-semibold text-neutral-dark">Montag – Donnerstag</span>
                  <span className="text-neutral-muted">08:00 – 12:00 Uhr und 13:00 – 17:00 Uhr</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-neutral-dark">Freitag</span>
                  <span className="text-neutral-muted">08:00 – 12:00 Uhr</span>
                </div>
              </div>
            </div>

            {/* Quick message form */}
            <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-neutral-dark mb-4">Direktnachricht senden</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Ihr Name"
                        className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:border-primary focus:outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Ihre E-Mail-Adresse"
                        className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:border-primary focus:outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Ihre Nachricht an uns..."
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:border-primary focus:outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-light shadow transition-all cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Absenden
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold">Nachricht gesendet!</p>
                    <p className="mt-0.5">Vielen Dank für Ihre Anfrage. Wir antworten Ihnen so schnell wie möglich.</p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 relative h-[350px] lg:h-auto min-h-[400px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md">
              <iframe
                title="MY Versicherungsmakler Standort Rohrbach-Berg"
                src="https://maps.google.com/maps?q=Kindergartenstra%C3%9Fe%206,%204150%20Rohrbach-Berg&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
