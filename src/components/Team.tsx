import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Andrea Höglinger',
      role: 'Geschäftsführerin und Gesellschafterin',
      email: 'a.hoeglinger@myvm.at',
      phone: '0664/534 28 08',
      telLink: 'tel:+436645342808',
      location: 'Rohrbach-Berg',
      image: '/images/team_andrea.jpg',
    },
    {
      name: 'Andreas Wolfesberger',
      role: 'Versicherungsmakler',
      email: 'a.wolfesberger@myvm.at',
      phone: '0664/224 00 67',
      telLink: 'tel:+436642240067',
      location: 'Rohrbach-Berg',
      image: '/images/team_andreas.jpg',
    },
    {
      name: 'Wolfgang Luger',
      role: 'Versicherungsmakler',
      email: 'w.luger@myvm.at',
      phone: '0664/155 41 31',
      telLink: 'tel:+436641554131',
      location: 'Neustift',
      address: 'Rannatalstraße 6, 4143 Neustift',
      image: '/images/team_wolfgang.jpg',
    },
    {
      name: 'Stefan Hartl',
      role: 'Versicherungsmakler',
      email: 's.hartl@myvm.at',
      phone: '0664/4017544',
      telLink: 'tel:+436644017544',
      location: 'Rohrbach-Berg',
      image: '/images/team_stefan.jpg',
    },
    {
      name: 'Simone Kalischko',
      role: 'Versicherungskauffrau',
      email: 's.kalischko@myvm.at',
      phone: '07289/5072-17',
      telLink: 'tel:+437289507217',
      location: 'Rohrbach-Berg',
      image: '/images/team_simone.jpg',
    },
    {
      name: 'Tobias Höglinger',
      role: 'Versicherungsmakler in Ausbildung',
      email: 't.hoeglinger@myvm.at',
      phone: '07289/5072-16',
      telLink: 'tel:+437289507216',
      location: 'Rohrbach-Berg',
      image: '/images/team_tobias.jpg',
    },
    {
      name: 'Kerstin See',
      role: 'Büro',
      email: 'k.see@myvm.at',
      phone: null,
      telLink: null,
      location: 'Rohrbach-Berg',
      image: '/images/team_kerstin.jpg',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
  };

  return (
    <section id="team" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Persönliche Beratung</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Unser Team
          </h2>
          <p className="text-sm text-neutral-muted">
            Wir nehmen uns Zeit für Sie. Kontaktieren Sie uns direkt für ein unverbindliches Beratungsgespräch.
          </p>
          <div className="mx-auto h-1 w-12 bg-primary rounded-full mt-2" />
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col rounded-2xl border border-neutral-100 bg-neutral-light/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                <img
                  src={member.image}
                  alt={`Teammitglied ${member.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-neutral-dark shadow-sm backdrop-blur-sm border border-neutral-100 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-primary" />
                  {member.location}
                </div>
              </div>

              {/* Profile Body */}
              <div className="flex-1 p-6 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-base font-bold text-neutral-dark group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-muted leading-tight min-h-[32px]">
                    {member.role}
                  </p>
                  
                  {member.address && (
                    <p className="mt-2.5 text-[11px] text-neutral-muted flex items-start gap-1 font-medium bg-neutral-100 p-2 rounded-lg">
                      <MapPin className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                      <span>{member.address}</span>
                    </p>
                  )}
                </div>

                {/* Contact Links */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-neutral-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2.5 text-xs text-neutral-dark/80 hover:text-primary transition-colors focus:outline-none"
                  >
                    <div className="rounded-lg bg-neutral-100 p-1.5 text-neutral-muted group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <span className="truncate">{member.email}</span>
                  </a>

                  {member.phone && member.telLink ? (
                    <a
                      href={member.telLink}
                      className="flex items-center gap-2.5 text-xs text-neutral-dark/80 hover:text-primary transition-colors focus:outline-none"
                    >
                      <div className="rounded-lg bg-neutral-100 p-1.5 text-neutral-muted group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <span>{member.phone}</span>
                    </a>
                  ) : member.phone === null ? null : (
                    <div className="flex items-center gap-2.5 text-xs text-neutral-muted">
                      <div className="rounded-lg bg-neutral-100 p-1.5 text-neutral-muted">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <span>Kein Telefon</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
