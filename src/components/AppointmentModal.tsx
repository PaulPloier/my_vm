import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    message: '',
    privacyAccepted: false,
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) return;
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacyAccepted: false,
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-dark/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-muted hover:text-primary transition-colors focus:outline-none"
              aria-label="Schließen"
            >
              <X className="h-6 w-6" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark">Termin vereinbaren</h3>
                    <p className="text-xs text-neutral-muted">Wir melden uns verlässlich bei Ihnen.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ihr Vor- und Nachname"
                      className="w-full rounded-lg border border-neutral-200 px-3.5 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-dark mb-1">E-Mail-Adresse *</label>
                      <input
                        type="email"
                        required
                        placeholder="ihre@mail.at"
                        className="w-full rounded-lg border border-neutral-200 px-3.5 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-dark mb-1">Telefonnummer</label>
                      <input
                        type="tel"
                        placeholder="z.B. +43 664..."
                        className="w-full rounded-lg border border-neutral-200 px-3.5 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">Gewünschter Bereich</label>
                    <select
                      className="w-full rounded-lg border border-neutral-200 px-3.5 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all bg-white"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Bitte wählen Sie einen Bereich</option>
                      <option value="betrieb">Betriebsversicherung</option>
                      <option value="eigenheim">Eigenheim & Haushalt</option>
                      <option value="krankheit">Unfall & Krankheit</option>
                      <option value="berufsunfaehigkeit">Berufsunfähigkeit</option>
                      <option value="kfz">KFZ-Versicherung</option>
                      <option value="landwirtschaft">Landwirtschaft</option>
                      <option value="vorsorge">Vorsorge & Leben</option>
                      <option value="rechtsschutz">Rechtsschutz</option>
                      <option value="sonstiges">Sonstiges Anliegen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">Ihre Nachricht</label>
                    <textarea
                      rows={3}
                      placeholder="Wie können wir Ihnen helfen?"
                      className="w-full rounded-lg border border-neutral-200 px-3.5 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="privacyAccepted"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-200 text-primary focus:ring-primary"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    />
                    <label htmlFor="privacyAccepted" className="text-xs text-neutral-muted leading-snug">
                      Ich stimme zu, dass meine Daten zur Kontaktaufnahme gespeichert und verarbeitet werden. *
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-6 space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-neutral-dark">Vielen Dank!</h3>
                  <p className="text-sm text-neutral-muted max-w-sm">
                    Ihre Anfrage zur Terminvereinbarung wurde erfolgreich an uns übermittelt. Wir werden uns in Kürze persönlich bei Ihnen melden.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="rounded-lg border border-neutral-200 bg-white px-5 py-2 text-sm font-semibold text-neutral-dark shadow-sm hover:bg-neutral-50 focus:outline-none transition-all cursor-pointer"
                >
                  Schließen
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
