import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface Props {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

export default function RevealOnScroll({ children, threshold = 0.2, delay = 0 }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
