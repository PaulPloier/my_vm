import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ShieldCheck, Scale, Cookie, Accessibility, Check } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'impressum' | 'datenschutz' | 'cookies' | 'barrierefreiheit' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, variant }) => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    functional: false,
    analytics: false,
  });
  
  const [cookiesSaved, setCookiesSaved] = useState(false);

  const saveCookieSettings = () => {
    setCookiesSaved(true);
    setTimeout(() => {
      setCookiesSaved(false);
      onClose();
    }, 600);
  };

  if (!variant) return null;

  const getHeaderIcon = () => {
    switch (variant) {
      case 'impressum':
        return <Scale className="h-5 w-5 text-primary" />;
      case 'datenschutz':
        return <ShieldCheck className="h-5 w-5 text-primary" />;
      case 'cookies':
        return <Cookie className="h-5 w-5 text-primary" />;
      case 'barrierefreiheit':
        return <Accessibility className="h-5 w-5 text-primary" />;
    }
  };

  const getHeaderTitle = () => {
    switch (variant) {
      case 'impressum':
        return 'Impressum';
      case 'datenschutz':
        return 'Datenschutzerklärung';
      case 'cookies':
        return 'Cookie-Einstellungen';
      case 'barrierefreiheit':
        return 'Hinweis für Menschen mit Beeinträchtigung';
    }
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
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col text-left"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 p-5 shrink-0 bg-neutral-light/20">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  {getHeaderIcon()}
                </div>
                <h3 className="text-base font-bold text-neutral-dark">{getHeaderTitle()}</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-neutral-muted hover:bg-neutral-100 hover:text-primary transition-all focus:outline-none"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-muted leading-relaxed max-w-full">
              
              {/* Variant: IMPRESSUM */}
              {variant === 'impressum' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-neutral-dark text-sm sm:text-base">my Versicherungsmakler GmbH</h4>
                    <p className="mt-1">Kindergartenstraße 6</p>
                    <p>A-4150 Rohrbach-Berg</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-neutral-100 py-4">
                    <div>
                      <p className="font-semibold text-neutral-dark">Kontakt</p>
                      <p className="mt-1">Telefon: <a href="tel:+4372895072" className="text-primary font-bold hover:underline">+43 (0) 7289 / 5072</a></p>
                      <p>E-Mail: <a href="mailto:rohrbach@myvm.at" className="text-primary hover:underline">rohrbach@myvm.at</a></p>
                      <p>Internet: <a href="https://www.myvm.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.myvm.at</a></p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark">Handelsregister & Behörden</p>
                      <p className="mt-1">Firmenbuchnummer: <span className="text-neutral-dark font-medium">FN 369588m</span></p>
                      <p>Firmenbuchgericht: <span className="text-neutral-dark font-medium">Linz</span></p>
                      <p>Gisa-Zahl: <span className="text-neutral-dark font-medium">16817418</span></p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-neutral-dark">Links zu Webseiten Dritter</h5>
                    <p>
                      Verweise auf Webseiten anderer Internet-Teilnehmer bzw. die Einrichtung einer direkten Zugriffsmöglichkeit (sog. „Links“) erfolgen als Serviceleistung zur Deckung eines weitergehenden Informationsbedarfes des Zugreifenden. Auf diese Weise zugänglich gemachte Inhalte geben Ansichten und Meinungen des Urhebers dieser Webseite(n) wieder, deren Richtigkeit von der my Versicherungsmakler GmbH weder überprüft ist, noch mit den Ansichten und Meinungen von der my Versicherungsmakler GmbH übereinstimmen muß. Die my Versicherungsmakler GmbH übernimmt daher für solche Inhalte keine Haftung. Im Fall von sog. „deep links“ haftet die my Versicherungsmakler GmbH nicht für eine nicht zur Kenntnis gelangte Änderung der bezogenen Webseite nach Einrichtung der Zugriffsmöglichkeit.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-neutral-dark">Haftungsausschluss</h5>
                    <p>
                      Die my Versicherungsmakler GmbH ist bemüht, die Informationen auf Ihrer Internetpräsenz stets aktuell und inhaltlich richtig anzubieten. Dennoch ist das Auftreten von Fehlern nicht völlig auszuschließen.
                    </p>
                    <p>
                      Es wird kein Anspruch auf Vollständigkeit erhoben. Es wird keine Haftung für die Aktualität, die inhaltliche Richtigkeit sowie für die Vollständigkeit der auf der Internetpräsenz dargestellten Informationen übernommen. Dies bezieht sich auf eventuelle Schäden materieller oder ideeller Art Dritter, die durch die Nutzung dieses Webangebotes verursacht wurden.
                    </p>
                  </div>
                </div>
              )}

              {/* Variant: DATENSCHUTZ */}
              {variant === 'datenschutz' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-neutral-dark text-sm sm:text-base">1. Datenschutz auf einen Blick</h4>
                    <p className="font-semibold text-neutral-dark mt-2">Allgemeine Hinweise</p>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-neutral-100 pt-4">
                    <h4 className="font-bold text-neutral-dark text-sm sm:text-base">2. Datenerfassung auf dieser Website</h4>
                    <p className="font-semibold text-neutral-dark mt-2">Wer ist verantwortlich für die Datenerfassung?</p>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen (my Versicherungsmakler GmbH).
                    </p>
                    <p className="font-semibold text-neutral-dark mt-2">Wie erfassen wir Ihre Daten?</p>
                    <p>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                      Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                    <p className="font-semibold text-neutral-dark mt-2">Wofür nutzen wir Ihre Daten?</p>
                    <p>
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                    <p className="font-semibold text-neutral-dark mt-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                    <p>
                      Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an die im Impressum angegebene Adresse wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                  </div>
                </div>
              )}

              {/* Variant: COOKIES */}
              {variant === 'cookies' && (
                <div className="space-y-5">
                  <p>
                    Wir nutzen Cookies, um das Nutzererlebnis auf unserer Website zu verbessern. Wählen Sie aus, welche Cookies Sie zulassen möchten.
                  </p>

                  <div className="space-y-4 border-t border-b border-neutral-100 py-4">
                    {/* Cookie Toggle 1: Essential */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-neutral-dark">Essenziell (Immer aktiv)</p>
                        <p className="text-xs text-neutral-muted mt-0.5">Notwendige Cookies, um die Basisfunktionen der Webseite wie Navigation und sichere Bereiche bereitzustellen.</p>
                      </div>
                      <div className="h-6 w-10 bg-primary/20 rounded-full relative flex items-center justify-end px-1 border border-primary/20">
                        <div className="h-4 w-4 bg-primary rounded-full" />
                      </div>
                    </div>

                    {/* Cookie Toggle 2: Functional */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-neutral-dark">Funktionelle Cookies</p>
                        <p className="text-xs text-neutral-muted mt-0.5">Ermöglichen es unserer Website, sich an Einstellungen zu erinnern (z. B. Sprachwahl oder Formulardaten), um Ihnen mehr Komfort zu bieten.</p>
                      </div>
                      <button
                        onClick={() => setCookieSettings({ ...cookieSettings, functional: !cookieSettings.functional })}
                        className={`h-6 w-10 rounded-full relative flex items-center px-0.5 border transition-all cursor-pointer ${
                          cookieSettings.functional ? 'bg-primary border-primary justify-end' : 'bg-neutral-100 border-neutral-200 justify-start'
                        }`}
                      >
                        <div className={`h-4 w-4 rounded-full transition-all ${cookieSettings.functional ? 'bg-white' : 'bg-neutral-400'}`} />
                      </button>
                    </div>

                    {/* Cookie Toggle 3: Analytics */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-neutral-dark">Statistik / Analyse</p>
                        <p className="text-xs text-neutral-muted mt-0.5">Helfen uns zu verstehen, wie Besucher mit unserer Webseite interagieren (z.B. Besuchszahlen, Verweildauer), um den Service stetig zu verbessern.</p>
                      </div>
                      <button
                        onClick={() => setCookieSettings({ ...cookieSettings, analytics: !cookieSettings.analytics })}
                        className={`h-6 w-10 rounded-full relative flex items-center px-0.5 border transition-all cursor-pointer ${
                          cookieSettings.analytics ? 'bg-primary border-primary justify-end' : 'bg-neutral-100 border-neutral-200 justify-start'
                        }`}
                      >
                        <div className={`h-4 w-4 rounded-full transition-all ${cookieSettings.analytics ? 'bg-white' : 'bg-neutral-400'}`} />
                      </button>
                    </div>
                  </div>

                  {cookiesSaved ? (
                    <div className="flex items-center justify-center gap-2 p-3 bg-green-50 text-green-700 rounded-xl">
                      <Check className="h-4 w-4" />
                      <span className="text-xs font-semibold">Einstellungen erfolgreich gespeichert!</span>
                    </div>
                  ) : (
                    <button
                      onClick={saveCookieSettings}
                      className="w-full rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-primary-light transition-all cursor-pointer"
                    >
                      Einstellungen speichern
                    </button>
                  )}
                </div>
              )}

              {/* Variant: BARRIEREFREIHEIT */}
              {variant === 'barrierefreiheit' && (
                <div className="space-y-4">
                  <p>
                    Die my Versicherungsmakler GmbH bemüht sich, diese Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates barrierefrei zugänglich zu machen.
                  </p>
                  <h4 className="font-bold text-neutral-dark text-sm sm:text-base border-t border-neutral-100 pt-4">Maßnahmen zur Barrierefreiheit</h4>
                  <p>
                    Wir setzen fortlaufend technische und strukturelle Anpassungen um, um die Barrierefreiheit gemäß den Richtlinien der Web Content Accessibility Guidelines (WCAG) 2.1 Level AA zu sichern. Dazu gehören:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ausreichend hohe Kontrastverhältnisse bei Texten und Buttons für bessere Lesbarkeit.</li>
                    <li>Strukturierter Aufbau mit semantischen HTML-Tags zur Navigation per Screenreader.</li>
                    <li>Tastaturbedienbarkeit für alle wichtigen interaktiven Elemente (z.B. Formulare, Links und Menüs).</li>
                    <li>Sprechende Alt-Texte für Grafiken und Team-Fotos.</li>
                  </ul>
                  <p className="border-t border-neutral-100 pt-4 text-xs text-neutral-muted">
                    Sollten Ihnen Mängel auffallen, können Sie uns jederzeit per E-Mail unter <a href="mailto:rohrbach@myvm.at" className="text-primary hover:underline">rohrbach@myvm.at</a> kontaktieren. Wir bemühen uns, Barrieren zeitnah zu beheben.
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="border-t border-neutral-100 p-4 shrink-0 bg-neutral-light/10 text-right">
              <button
                onClick={onClose}
                className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-dark hover:bg-neutral-50 focus:outline-none transition-all cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
