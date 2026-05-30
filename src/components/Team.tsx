import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Andrea Höglinger',
    role: 'Geschäftsführerin & Gesellschafterin',
    email: 'a.hoeglinger@myvm.at',
    phone: '0664/534 28 08',
    telLink: 'tel:+436645342808',
    image: '/images/team_andrea.jpg',
    featured: true,
  },
  {
    name: 'Andreas Wolfesberger',
    role: 'Versicherungsmakler',
    email: 'a.wolfesberger@myvm.at',
    phone: '0664/224 00 67',
    telLink: 'tel:+436642240067',
    image: '/images/team_andreas.jpg',
  },
  {
    name: 'Wolfgang Luger',
    role: 'Versicherungsmakler (Neustift)',
    email: 'w.luger@myvm.at',
    phone: '0664/155 41 31',
    telLink: 'tel:+436641554131',
    image: '/images/team_wolfgang.jpg',
  },
  {
    name: 'Kerstin See',
    role: 'Büro',
    email: 'k.see@myvm.at',
    phone: '',
    telLink: '',
    image: '/images/team_kerstin.jpg',
  },
  {
    name: 'Simone Kalischko',
    role: 'Versicherungskauffrau',
    email: 's.kalischko@myvm.at',
    phone: '07289/5072-17',
    telLink: 'tel:+437289507217',
    image: '/images/team_simone.jpg',
  },
  {
    name: 'Stefan Hartl',
    role: 'Versicherungsmakler',
    email: 's.hartl@myvm.at',
    phone: '0664/4017544',
    telLink: 'tel:+436644017544',
    image: '/images/team_stefan.jpg',
  },
  {
    name: 'Tobias Höglinger',
    role: 'Versicherungsmakler in Ausbildung',
    email: 't.hoeglinger@myvm.at',
    phone: '07289/5072-16',
    telLink: 'tel:+437289507216',
    image: '/images/team_tobias.jpg',
  },
];

export const Team: React.FC = () => {
  const [featured, ...others] = teamMembers;

  return (
    <section id="team" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-3xl"
        >
          <span className="eyebrow">Team</span>
          <h2 className="mt-8 text-4xl leading-tight text-secondary sm:text-5xl">
            Gesichter, die erreichbar bleiben.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-muted">
            Beratung ist bei uns kein Ticketsystem. Sie sehen, mit wem Sie sprechen, und Sie wissen, wer sich kümmert.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="paper-panel overflow-hidden border border-line"
          >
            <div className="relative">
              <img
                src={featured.image}
                alt={featured.name}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute left-5 top-5 bg-paper px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary">
                Geschäftsführung
              </div>
            </div>
            <div className="space-y-4 border-t border-line p-6">
              <div>
                <h3 className="text-3xl font-semibold text-secondary">{featured.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-neutral-muted">{featured.role}</p>
              </div>
              <div className="flex flex-col gap-3 border-t border-line pt-5 text-sm text-neutral-muted sm:flex-row sm:items-center sm:gap-5">
                <a href={`mailto:${featured.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4" />
                  {featured.email}
                </a>
                <a href={featured.telLink} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4" />
                  {featured.phone}
                </a>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {others.map((member, index) => (
              <motion.article
                key={member.email}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="paper-panel group overflow-hidden border border-line"
              >
                <div className="relative overflow-hidden border-b border-line">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="flex h-full flex-col p-5">
                  <h3 className="text-2xl font-semibold leading-tight text-secondary">{member.name}</h3>
                  <p className="mt-2 text-[0.78rem] uppercase tracking-[0.12em] text-neutral-muted">{member.role}</p>
                  <div className="mt-5 space-y-2 border-t border-line pt-4 text-sm text-neutral-muted">
                    <a href={`mailto:${member.email}`} className="block truncate transition-colors hover:text-primary">
                      {member.email}
                    </a>
                    {member.phone && member.telLink ? (
                      <a href={member.telLink} className="block transition-colors hover:text-primary">
                        {member.phone}
                      </a>
                    ) : (
                      <p>Kontakt über das Büro</p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
