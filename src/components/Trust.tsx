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
    <section className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {points.map((point) => (
            <div key={point} className="border-l border-white/15 pl-4">
              <span className="text-sm uppercase tracking-[0.2em] text-white/85">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
