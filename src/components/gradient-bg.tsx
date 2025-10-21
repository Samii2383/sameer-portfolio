"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function GradientBg() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);

  return (
    <motion.div
      aria-hidden
      style={{ y, scale }}
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <div className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px] motion-safe:animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] rounded-full bg-cyan-500/10 blur-[100px] motion-safe:animate-pulse" />
    </motion.div>
  );
}


