import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, CheckCircle2, X } from 'lucide-react';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serviceValue = formData.service || selectedService;

  const handleDismiss = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) return;

    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ type: 'spring', duration: 0.45 }}
            className="relative w-full max-w-xl rounded-[1.9rem] border border-line bg-paper p-6 shadow-[0_24px_55px_rgba(34,49,56,0.22)] md:p-8"
          >
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 rounded-full border border-line p-2 text-neutral-muted transition-colors hover:text-primary"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-secondary">Termin vereinbaren</h3>
                    <p className="text-sm text-neutral-muted">Wir melden uns persönlich bei Ihnen zurück.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-sm text-secondary">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Vor- und Nachname"
                      className="w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-secondary outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm text-secondary">E-Mail-Adresse *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre@mail.at"
                        className="w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-secondary outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm text-secondary">Telefonnummer</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="z. B. +43 664 ..."
                        className="w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-secondary outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-secondary">Leistungsbereich</label>
                    <select
                      value={serviceValue}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-secondary outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Bitte wählen Sie einen Bereich</option>
                      <option value="betrieb">Betrieb</option>
                      <option value="eigenheim">Eigenheim</option>
                      <option value="krankheit">Unfall/Krankheit</option>
                      <option value="berufsunfaehigkeit">Berufsunfähigkeit</option>
                      <option value="kfz">KFZ</option>
                      <option value="landwirtschaft">Landwirtschaft</option>
                      <option value="haushalt">Haushalt</option>
                      <option value="vorsorge">Vorsorge/Leben</option>
                      <option value="rechtsschutz">Rechtsschutz</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-secondary">Ihre Nachricht</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Worum geht es in Ihrem Anliegen?"
                      className="w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-secondary outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <label className="flex items-start gap-3 pt-2 text-sm leading-relaxed text-neutral-muted">
                    <input
                      id="privacyAccepted"
                      type="checkbox"
                      required
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-line text-primary focus:ring-primary"
                    />
                    <span>Ich stimme zu, dass meine Daten zur Kontaktaufnahme gespeichert und verarbeitet werden. *</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-secondary"
                >
                  Anfrage senden
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-3xl text-secondary">Vielen Dank.</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-neutral-muted">
                  Ihre Anfrage wurde vorbereitet. Für die Live-Website kann hier im nächsten Schritt die echte Übergabe an E-Mail oder Formular-Backend angeschlossen werden.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-secondary"
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
