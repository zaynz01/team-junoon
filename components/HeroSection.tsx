"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax — image drifts slightly as user scrolls down
  useEffect(() => {
    if (prefersReduced) return;
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] flex flex-col items-center justify-end overflow-hidden"
    >
      {/* ── Background: the hangar reveal photograph — already has JUNOON in it ── */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform scale-[1.05]">
        {/* Desktop Image */}
        <Image
          src="/hero-main.jpg"
          alt="Team Junoon — Race Pakistan '27 car reveal"
          fill
          className="object-cover object-center hidden md:block"
          priority
          unoptimized
        />
        {/* Mobile Image */}
        <Image
          src="/hero-mobile-new.png"
          alt="Team Junoon — Race Pakistan '27 car reveal"
          fill
          className="object-cover object-center block md:hidden"
          priority
          unoptimized
        />
      </div>

      {/* ── Bottom fade: black gradient so CTAs sit cleanly ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {/* ── Minimal CTA row — sits below the image content ── */}
      <div className="relative z-10 w-full pb-32 md:pb-20 flex flex-col items-center gap-6">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary: Expanding Liquid Pill */}
          <button
            onClick={() => document.getElementById("sponsors")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative block h-[54px] w-[280px] rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer"
          >
            {/* The expanding red circle */}
            <div className="absolute right-[3px] top-[3px] bottom-[3px] w-[46px] rounded-full bg-red-600 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-6px)]" />

            {/* Perfectly Centered Text Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              {/* pl-[0.25em] optically corrects the right-side letter-spacing tracking */}
              <span className="font-[family-name:var(--font-heading)] font-semibold tracking-[0.25em] pl-[0.25em] text-[11px] uppercase text-white transition-transform duration-500 group-hover:translate-x-1">
                Become A Partner
              </span>
            </div>

            {/* Right-aligned Arrow */}
            <div className="absolute right-[3px] top-[3px] z-10 w-[46px] h-[46px] flex items-center justify-center rounded-full pointer-events-none">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>

          {/* Secondary: Minimalist Dynamic Line Link */}
          <button
            onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center gap-4 h-[54px] px-6 cursor-pointer"
          >
            <span className="font-[family-name:var(--font-heading)] font-semibold tracking-[0.25em] text-[11px] uppercase text-zinc-400 group-hover:text-white transition-colors duration-300">
              Mission Log
            </span>
            <div className="w-8 h-px bg-zinc-700 group-hover:bg-red-600 group-hover:w-16 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll down"
          className="text-zinc-600 hover:text-red-500 transition-colors animate-bounce"
        >
          <ChevronDown size={26} strokeWidth={1.5} />
        </motion.button>
      </div>

      {/* ── Bottom red line — echoes the neon floor strip in the photo ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
    </section>
  );
}
