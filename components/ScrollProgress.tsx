"use client";

import { useScroll, useSpring, motion } from "framer-motion";

// Thin red vertical line on the left edge that tracks scroll position.
// This is the telemetry/timing-board detail that immediately says "motorsport" not "template".
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 bottom-0 w-[2px] origin-top bg-red-600 z-50 pointer-events-none"
      style={{ scaleY }}
      aria-hidden="true"
    />
  );
}
