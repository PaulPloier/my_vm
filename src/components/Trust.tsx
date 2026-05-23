import React from 'react';
import { Shield, UserCheck, Users, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Trust: React.FC = () => {
  const points = [
    {
      icon: Shield,
      title: 'Unabhängiger Makler',
      description: 'Wir sind an keine Versicherungsgesellschaft gebunden und vertreten ausschließlich Ihre Interessen.',
    },
    {
      icon: UserCheck,
      title: 'Seit 25 Jahren Vertrauen',
      description: 'Ein Vierteljahrhundert Erfahrung in der Absicherung und Beratung unserer treuen Kunden.',
    },
    {
      icon: Users,
      title: 'Privat & Firmenkunden',
      description: 'Individuelle Versicherungskonzepte für Ihren privaten Haushalt sowie maßgeschneiderter Schutz für Ihren Betrieb.',
    },
    {
      icon: HelpCircle,
      title: 'Hilfe im Schadensfall',
      description: 'Die Betreuung und reibungslose Schadensabwicklung steht bei uns an oberster Stelle.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
  };

  return (
    <section className="bg-white py-12 border-y border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl border border-neutral-100 bg-neutral-light/30 p-6 text-left transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 hover:border-primary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm border border-neutral-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-dark group-hover:text-primary transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-muted leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
