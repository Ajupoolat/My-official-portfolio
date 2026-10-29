'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2B8BFE] via-[#60A5FA] to-[#2B8BFE] z-50 origin-left pointer-events-none shadow-[0_0_10px_rgba(43,139,254,0.7)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
