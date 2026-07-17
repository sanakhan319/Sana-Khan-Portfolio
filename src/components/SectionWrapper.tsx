import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionTitle({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title.split(' ').map((word, i) =>
          i === title.split(' ').length - 1 ? (
            <span key={i} className="gradient-text">{word}</span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="text-dark-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
