'use client';

import React, { useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const emptySubscribe = () => () => {};

export default function RevealSection({
  children,
  className = '',
  delay = 0,
  id
}: RevealSectionProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const shouldReduceMotion = useReducedMotion();

  // During SSR and initial hydration pass, render standard semantic container
  // to ensure 100% identical HTML structure and eliminate hydration mismatch.
  if (!isClient || shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
