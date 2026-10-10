"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion, useAnimation } from "framer-motion";

const members = [
  { number: "01", name: "Zain Khan", role: "Team Lead", accent: "Team Principal", amberAccent: false },
  { number: "02", name: "Arib", role: "Technical Lead", accent: "Chassis & Aero", amberAccent: true },
  { number: "03", name: "Haad", role: "Design Lead", accent: "Visual Identity", amberAccent: false },
  { number: "04", name: "Faizan", role: "Media Lead", accent: "Content & PR", amberAccent: true },
  { number: "05", name: "Saad", role: "Logistics Lead", accent: "Operations", amberAccent: false },
  { number: "06", name: "Rayyan", role: "Strategic Advisor", accent: "Race Strategy", amberAccent: true },
];

function DriverCard({ member, index, isInView, reduced }: { member: typeof members[0]; index: number; isInView: boolean; reduced: boolean }) {
  const sweep = useAnimation();
  const [hot, setHot] = useState(false);
  const isAmber = member.amberAccent;

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setHot(true);
    }
  }, []);

  const onEnter = async () => {
    if (reduced) return;
    setHot(true);
    sweep.set({ x: "-110%" });
    await sweep.start({ x: "110%", transition: { duration: 0.5, ease: [0.4, 0, 0.6, 1] } });
  };

  const onLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    setHot(false);
  };

  const accentColor = isAmber ? "#b45309" : "#dc2626";
  const accentColorDim = isAmber ? "rgba(180,83,9,0.15)" : "rgba(220,38,38,0.15)";
  const bgHot = isAmber ? "#0d0a06" : "#0f0906";
  const bgCold = isAmber ? "#08060a" : "#07050a";

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.08 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden cursor-default select-none"
      style={{ minHeight: "420px", background: hot ? bgHot : bgCold }}
    >
      {/* Left border — accent color */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-colors duration-300 z-20" style={{ background: hot ? accentColor : `${accentColor}33` }} />

      {/* Bottom radial glow */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500" style={{
        background: `radial-gradient(ellipse at 0% 110%, ${accentColorDim} 0%, transparent 55%)`,
        opacity: hot ? 1 : 0.3,
      }} />

      {/* Massive race number — textural bleed */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none" aria-hidden>
        <span
          className="font-[family-name:var(--font-display)] font-bold leading-none transition-colors duration-500"
          style={{
            fontSize: "clamp(9rem,20vw,18rem)",
            letterSpacing: "-0.06em",
            color: hot ? `${accentColor}33` : `${accentColor}14`,
            marginRight: "-0.05em",
            lineHeight: 0.85,
          }}
        >
          {member.number}
        </span>
      </div>

      {/* Radar sweep */}
      <motion.div
        animate={sweep}
        className="absolute inset-y-0 w-[1.5px] pointer-events-none z-30"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${accentColor}dd 40%, ${accentColor}ff 50%, ${accentColor}dd 60%, transparent 100%)`,
          x: "-110%",
        }}
      />

      {/* Bottom fade for text legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none" style={{ background: `linear-gradient(to top, ${bgCold} 20%, ${bgCold}99 60%, transparent)` }} />

      {/* Bottom scale-in accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left z-20 pointer-events-none"
        style={{ background: accentColor }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hot ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Accent tag — top right */}
      <div className="absolute top-6 right-6 z-10">
        <span className="font-[family-name:var(--font-data)] text-[8px] tracking-[0.35em] uppercase" style={{ color: hot ? accentColor : "rgba(63,63,70,0.7)" }}>
          {member.accent}
        </span>
      </div>

      {/* Name + Role strip */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 z-10">
        <div className="font-[family-name:var(--font-heading)] text-[9px] tracking-[0.5em] uppercase mb-3 transition-colors duration-300" style={{ color: hot ? accentColor : `${accentColor}55` }}>
          {member.role}
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-bold text-white uppercase" style={{ fontSize: "clamp(1.8rem,3.8vw,3rem)", letterSpacing: "-0.025em", lineHeight: 0.95 }}>
          {member.name}
        </h3>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const reduced = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll affordance on mobile
  useEffect(() => {
    if (isInView && scrollRef.current && !hasScrolled) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const timer = setTimeout(() => {
          if (!hasScrolled && scrollRef.current) {
            // Scroll to the second card (width of one card ~ 85vw)
            const scrollAmount = window.innerWidth * 0.85;
            scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView, hasScrolled]);

  return (
    <section id="team" className="relative overflow-hidden" style={{ background: "#0a0805" }}>

      {/* Diagonal speed stripe — amber version for warmth */}
      <div className="speed-stripe-amber z-0" />

      {/* Studio light glow — top-right, like an overhead hangar light */}
      <div className="absolute top-0 right-0 pointer-events-none z-0" style={{
        width: "60vw", height: "60vh",
        background: "radial-gradient(ellipse at 100% 0%, rgba(180,83,9,0.07) 0%, transparent 60%)",
      }} />

      {/* Massive team number watermark — behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden" aria-hidden>
        <span
          className="font-[family-name:var(--font-display)] font-black select-none"
          style={{
            fontSize: "clamp(28rem,50vw,60rem)",
            letterSpacing: "-0.08em",
            lineHeight: 0.8,
            color: "rgba(255,255,255,0.014)",
          }}
        >
          27
        </span>
      </div>

      {/* Section label */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 pt-24 pb-10"
        >
          <span className="font-[family-name:var(--font-data)] text-[10px] text-red-600 tracking-[0.4em]">03</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(180,83,9,0.2), transparent)" }} />
          <span className="font-[family-name:var(--font-heading)] text-[10px] text-zinc-600 tracking-[0.4em] uppercase">The Core</span>
        </motion.div>
      </div>

      {/* Editorial headline */}
      <div ref={ref} className="relative z-10 overflow-hidden px-4 md:px-6">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="font-[family-name:var(--font-display)] font-bold text-white uppercase"
          style={{ fontSize: "clamp(5rem,16vw,15rem)", letterSpacing: "-0.045em", lineHeight: 0.87 }}
        >
          The<br />
          <span style={{ color: "rgba(255,255,255,0.09)" }}>Crew.</span>
        </motion.h2>
      </div>

      {/* Driver grid / Carousel */}
      <div 
        ref={scrollRef}
        onScroll={() => setHasScrolled(true)}
        onTouchStart={() => setHasScrolled(true)}
        className="relative z-10 flex md:grid md:grid-cols-2 mt-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar" 
        style={{ gap: "1px", background: "rgba(180,83,9,0.08)" }}
      >
        {members.map((m, i) => (
          <div key={m.number} className="w-[85vw] flex-shrink-0 md:w-auto snap-center md:snap-align-none">
            <DriverCard member={m} index={i} isInView={isInView} reduced={reduced} />
          </div>
        ))}
      </div>

      {/* Footer caption */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="font-[family-name:var(--font-data)] text-[9px] text-zinc-700 tracking-[0.4em] uppercase mt-6 pb-20"
        >
          Team Junoon · Race Pakistan &apos;27 · @teamjunoon.hb
        </motion.p>
      </div>

      {/* Gradient bleed into Sponsors */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, transparent, #050507)" }} />
    </section>
  );
}
