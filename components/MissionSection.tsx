"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const StatCard = ({
  label, value, sub, delay, isInView, prefersReduced, highlight, amber,
}: {
  label: string; value: string; sub: string; delay: number;
  isInView: boolean; prefersReduced: boolean; highlight?: boolean; amber?: boolean;
}) => (
  <motion.div
    initial={prefersReduced ? false : { opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative flex flex-col justify-between p-6 h-[170px] overflow-hidden carbon-fiber"
    style={{
      background: highlight ? "rgba(220,38,38,0.07)" : amber ? "rgba(180,83,9,0.05)" : "rgba(255,255,255,0.02)",
      border: highlight ? "1px solid rgba(220,38,38,0.2)" : amber ? "1px solid rgba(180,83,9,0.15)" : "1px solid rgba(255,255,255,0.04)",
    }}
  >
    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: highlight ? "#dc2626" : amber ? "#b45309" : "rgba(63,63,70,0.5)" }} />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: highlight ? "#dc2626" : amber ? "#b45309" : "rgba(63,63,70,0.5)" }} />

    <div className="flex justify-between items-center">
      <span className="font-[family-name:var(--font-data)] text-[9px] tracking-[0.3em] uppercase" style={{ color: highlight ? "#f87171" : amber ? "#d97706" : "#52525b" }}>
        {label}
      </span>
      {(highlight || amber) && (
        <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: highlight ? "#ef4444" : "#d97706" }} />
      )}
    </div>

    <div>
      <div className="font-[family-name:var(--font-display)] font-bold tracking-tighter" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", color: highlight ? "#fff" : amber ? "#fbbf24" : "#a1a1aa" }}>
        {value}
      </div>
      <div className="font-[family-name:var(--font-data)] text-[9px] uppercase tracking-widest mt-1" style={{ color: highlight ? "#fca5a5" : amber ? "#d97706" : "#3f3f46" }}>
        {sub}
      </div>
    </div>
  </motion.div>
);

export default function MissionSection() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="mission" ref={ref} className="relative overflow-hidden" style={{ background: "#07050a" }}>

      {/* Red dot grid — visible, not decorative noise */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(220,38,38,0.14) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Diagonal speed stripes */}
      <div className="speed-stripe z-0" />

      {/* Amber warmth bleeding up from hero — keeps color continuity */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0" style={{
        width: "70vw", height: "50vh",
        background: "radial-gradient(ellipse at 0% 100%, rgba(180,83,9,0.08) 0%, transparent 65%)",
      }} />

      {/* Mouse-tracking red spotlight */}
      {!prefersReduced && (
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(220,38,38,0.06), transparent 55%)`,
        }} />
      )}

      {/* Section index */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-24">
        <motion.div initial={prefersReduced ? false : { opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-data)] text-[10px] text-red-600 tracking-[0.4em]">01</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(220,38,38,0.25), transparent)" }} />
          <span className="font-[family-name:var(--font-heading)] text-[10px] text-zinc-600 tracking-[0.4em] uppercase">Mission Log</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-16 pb-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-start">

          {/* LEFT: Headline + Copy + Stats */}
          <div className="flex flex-col gap-10">
            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-display)] font-black uppercase flex flex-col tracking-tighter leading-[0.85] select-none"
              style={{ fontSize: "clamp(3.8rem, 8.5vw, 8.5rem)" }}
            >
              <span className="text-white" style={{ textShadow: "0 0 80px rgba(220,38,38,0.25)" }}>OBSESSION</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(220,38,38,0.45)" }}>ENGINEERED.</span>
            </motion.h2>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative pl-5 max-w-lg"
            >
              {/* Amber-to-red left rule — the amber accent made physical */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: "linear-gradient(to bottom, #b45309 0%, #dc2626 60%, rgba(220,38,38,0.1) 100%)" }} />
              <p className="font-[family-name:var(--font-body)] text-base text-zinc-300 leading-relaxed font-light">
                Highbrow College&apos;s official challenger for Race Pakistan &apos;27. Six specialists designing,
                manufacturing, and racing a 1:20 scale CO&#x2082;-powered F1 chassis from absolute first principles.
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-zinc-500 leading-relaxed font-light mt-5">
                &ldquo;Junoon&rdquo; means obsession in Urdu — not a name but a standard.{" "}
                <span style={{ color: "#b45309" }}>Every millimeter deliberate. Every decision earned.</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Engineers" value="06" sub="Specialized Roles" delay={0.35} isInView={isInView} prefersReduced={!!prefersReduced} highlight />
              <StatCard label="Precision" value="1:20" sub="Scale Ratio" delay={0.45} isInView={isInView} prefersReduced={!!prefersReduced} />
              <StatCard label="Propulsion" value="CO&#x2082;" sub="Gas Cartridge" delay={0.55} isInView={isInView} prefersReduced={!!prefersReduced} />
              <StatCard label="Season" value="&apos;27" sub="Race Pakistan" delay={0.65} isInView={isInView} prefersReduced={!!prefersReduced} amber />
            </div>
          </div>

          {/* RIGHT: hero-main.jpg re-treated in deep red — your team, different mood */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative xl:h-[680px] h-[440px] overflow-hidden"
          >
            {/* Frame corners */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-red-600 z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 z-20 pointer-events-none" style={{ borderColor: "#b45309" }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-700 z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-700 z-20 pointer-events-none" />

            {/* The photo — deep red monochrome treatment: same team, cinematic mood */}
            <Image
              src="/hero-main.jpg"
              alt="Team Junoon — the crew and the machine"
              fill
              unoptimized
              className="object-cover object-center"
              style={{
                filter: "grayscale(100%) brightness(0.38) contrast(1.3) sepia(1) hue-rotate(310deg) saturate(4.5)",
              }}
            />

            {/* Left edge bleed into section bg */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #07050a 0%, transparent 25%, transparent 75%, #07050a 100%)" }} />
            {/* Bottom bleed */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, #07050a 0%, transparent 40%)" }} />
            {/* Top bleed */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, #07050a 0%, transparent 20%)" }} />

            {/* Caption — anchors the image as intentional, not accidental */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                <span className="font-[family-name:var(--font-data)] text-[8px] tracking-[0.4em] uppercase" style={{ color: "#b45309" }}>Team Junoon · 2027</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-sm tracking-[0.15em] text-zinc-300 uppercase font-semibold">
                The Crew. The Machine. The Obsession.
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient — flows into Engineering blue-black */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, transparent, #060d1a)" }} />
    </section>
  );
}
