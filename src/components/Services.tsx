import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Home,
  HeartPulse,
  Activity,
  Car,
  Wheat,
  Sofa,
  TrendingUp,
  Scale,
  ArrowUpRight,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceKey: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      key: 'betrieb',
      icon: Briefcase,
      title: 'Betrieb',
      description: 'Maßgeschneiderter Schutz für Ihr Unternehmen, Ihre Mitarbeiter und Betriebshaftpflichtrisiken.',
    },
    {
      key: 'eigenheim',
      icon: Home,
      title: 'Eigenheim',
      description: 'Die optimale Absicherung für Ihr Wohngebäude gegen Brand, Sturm, Leitungswasser und andere Gefahren.',
    },
    {
      key: 'krankheit',
      icon: HeartPulse,
      title: 'Unfall/Krankheit',
      description: 'Rundumschutz bei Freizeitunfällen und optimale private medizinische Vorsorge im Krankheitsfall.',
    },
    {
      key: 'berufsunfaehigkeit',
      icon: Activity,
      title: 'Berufsunfähigkeit',
      description: 'Finanzielle Absicherung Ihrer Existenz bei gesundheitlich bedingtem Ausfall der Arbeitskraft.',
    },
    {
      key: 'kfz',
      icon: Car,
      title: 'KFZ',
      description: 'Haftpflicht- und Kaskoversicherungen für Ihren PKW, LKW, Motorrad oder Fuhrpark zu besten Konditionen.',
    },
    {
      key: 'landwirtschaft',
      icon: Wheat,
      title: 'Landwirtschaft',
      description: 'Spezialisierte Risikoabdeckung für landwirtschaftliche Betriebe, Gebäude, Maschinen und Tierbestände.',
    },
    {
      key: 'haushalt',
      icon: Sofa,
      title: 'Haushalt',
      description: 'Schutz für Ihren gesamten Hausrat und Einrichtungsgegenstände inklusive integrierter Privathaftpflicht.',
    },
    {
      key: 'vorsorge',
      icon: TrendingUp,
      title: 'Vorsorge/Leben',
      description: 'Weitsichtige Lebens- und Rentenversicherungen für eine finanziell gesicherte Zukunft und Ihre Familie.',
    },
    {
      key: 'rechtsschutz',
      icon: Scale,
      title: 'Rechtsschutz',
      description: 'Übernahme von Anwalts- und Gerichtskosten zur verlässlichen Durchsetzung Ihrer berechtigten Interessen.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
  };

  return (
    <section id="leistungen" className="bg-neutral-light/50 py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Sicherheit & Vorsorge</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Unsere Leistungen im Überblick
          </h2>
          <p className="text-sm text-neutral-muted">
            Versicherung und Vorsorge für das, was Ihnen im Leben wichtig ist. Finden Sie den passenden Schutz.
          </p>
          <div className="mx-auto h-1 w-12 bg-primary rounded-full mt-2" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                onClick={() => onSelectService(service.key)}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-100 bg-white p-8 text-left transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-neutral-muted/40 group-hover:text-primary transition-colors duration-300">
                      <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-neutral-dark group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Termin anfragen</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
