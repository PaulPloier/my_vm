import React from 'react';
import { motion } from 'framer-motion';

const points = [
  '25 Jahre Erfahrung',
  'Unabhängig',
  '7 Experten',
  'Region Rohrbach',
];

export const Trust: React.FC = () => {
  return (
    <section className="border-y border-line/80 bg-paper/70">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-3 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left"
        >
          {points.map((point) => (
            <div key={point} className="flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-sm uppercase tracking-[0.2em] text-secondary">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
