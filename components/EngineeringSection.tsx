"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Crosshair, Activity, Cpu, Wind } from "lucide-react";

const CornerBrackets = ({ color = "rgba(255,255,255,0.06)" }: { color?: string }) => (
  <>
    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{ borderColor: color }} />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{ borderColor: color }} />
  </>
);

// Top-down F1 car silhouette — drawn for Junoon, not pulled from stock
const F1Silhouette = () => (
  <svg viewBox="0 0 700 340" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Front wing */}
      <path d="M 40 160 L 40 180 L 140 185 L 140 155 Z" stroke="rgba(220,38,38,0.35)" strokeWidth="1.5" />
      {/* Front wing endplates */}
      <rect x="38" y="148" width="6" height="44" rx="1" stroke="rgba(220,38,38,0.2)" strokeWidth="1" />

      {/* Nose cone */}
      <path d="M 140 160 L 200 155 L 200 185 L 140 180 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Front suspension arms */}
      <line x1="175" y1="162" x2="225" y2="138" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="175" y1="178" x2="225" y2="202" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* Front tyres */}
      <rect x="208" y="120" width="32" height="100" rx="6" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />

      {/* Bargeboards / turning vanes */}
      <path d="M 240 152 L 270 145 L 270 155" stroke="rgba(220,38,38,0.2)" strokeWidth="1" />
      <path d="M 240 188 L 270 195 L 270 185" stroke="rgba(220,38,38,0.2)" strokeWidth="1" />

      {/* Main monocoque body */}
      <path d="M 200 145 L 490 135 L 500 155 L 500 185 L 490 205 L 200 195 Z"
        stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />

      {/* Cockpit opening */}
      <ellipse cx="310" cy="170" rx="42" ry="22" stroke="rgba(220,38,38,0.4)" strokeWidth="1.5" fill="rgba(220,38,38,0.03)" />

      {/* Halo */}
      <path d="M 275 150 C 285 135 335 135 345 150" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />

      {/* Sidepod intakes */}
      <path d="M 290 145 L 310 137 L 360 137 L 360 145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M 290 195 L 310 203 L 360 203 L 360 195" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Engine cover / airbox */}
      <path d="M 355 145 L 380 128 L 400 128 L 410 145" stroke="rgba(180,83,9,0.35)" strokeWidth="1.5" />
      <line x1="390" y1="128" x2="390" y2="105" stroke="rgba(180,83,9,0.25)" strokeWidth="1.5" />

      {/* Rear suspension arms */}
      <line x1="480" y1="158" x2="445" y2="138" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="480" y1="182" x2="445" y2="202" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Rear tyres — larger than front */}
      <rect x="450" y="114" width="38" height="112" rx="6" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />

      {/* Beam wing / diffuser detail */}
      <path d="M 498 158 L 540 155 L 540 165 L 498 168" stroke="rgba(220,38,38,0.2)" strokeWidth="1" />

      {/* Rear wing mainplane */}
      <path d="M 530 130 L 660 125 L 660 155 L 530 160 Z" stroke="rgba(220,38,38,0.4)" strokeWidth="1.5" fill="rgba(220,38,38,0.03)" />
      {/* Rear wing flap */}
      <path d="M 535 160 L 655 155 L 655 175 L 535 180 Z" stroke="rgba(220,38,38,0.25)" strokeWidth="1" fill="none" />
      {/* DRS gap */}
      <line x1="535" y1="160" x2="655" y2="155" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 4" />
      {/* Rear wing endplates */}
      <rect x="654" y="122" width="8" height="56" rx="1" stroke="rgba(220,38,38,0.25)" strokeWidth="1" />
    </g>
  </svg>
);

export default function EngineeringSection() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="engineering" className="relative overflow-hidden" style={{ background: "#060d1a" }}>

      {/* Blueprint red grid — the grid IS the design here, must be visible */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(220,38,38,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.07) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Diagonal speed stripe */}
      <div className="speed-stripe z-0" />

      {/* Amber warmth — top-right, like a hot engine glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at 100% 0%, rgba(180,83,9,0.06) 0%, transparent 60%)",
      }} />

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-24">

        {/* Header row */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-data)] text-[10px] text-red-600 tracking-[0.4em]">02</span>
            <div className="w-10 h-px" style={{ background: "rgba(220,38,38,0.25)" }} />
            <span className="font-[family-name:var(--font-heading)] text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Engineering // Telemetry</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-[family-name:var(--font-data)] text-[9px] text-zinc-600 tracking-[0.3em]">SYS.ONLINE</span>
            <motion.div animate={{ opacity: [1, 0.1, 1] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }} className="w-2 h-2 rounded-full bg-red-600" style={{ boxShadow: "0 0 8px rgba(220,38,38,0.8)" }} />
          </div>
        </motion.div>

        {/* Section headline */}
        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] font-bold text-white uppercase mb-10"
          style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}
        >
          Built<br />Different.
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* MAIN PANEL: F1 Silhouette + CFD airflow */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 relative overflow-hidden carbon-fiber"
            style={{ height: "440px", background: "#040a14", border: "1px solid rgba(220,38,38,0.1)" }}
          >
            <CornerBrackets color="rgba(220,38,38,0.2)" />

            {/* Panel header */}
            <div className="absolute top-5 left-6 z-20 flex items-center gap-2">
              <Wind size={14} className="text-red-500" />
              <span className="font-[family-name:var(--font-data)] text-[9px] text-zinc-400 tracking-[0.25em] uppercase">Aerodynamic Profile // CFD</span>
            </div>
            <div className="absolute top-5 right-6 z-20 hidden sm:block text-right">
              <div className="font-[family-name:var(--font-data)] text-[8px] text-zinc-600 tracking-widest">Cd: 0.24 · Cl: −1.8</div>
              <div className="font-[family-name:var(--font-data)] text-[8px] tracking-widest mt-1" style={{ color: "#b45309" }}>FLOW: LAMINAR</div>
            </div>

            {/* Animated airflow lines — BEHIND the car */}
            <svg className="absolute inset-0 w-full h-full z-10 opacity-80" preserveAspectRatio="none" viewBox="0 0 1000 440">
              {!prefersReduced && [...Array(10)].map((_, i) => {
                const yBase = 160 + i * 14;
                const yMid = 140 + i * 12;
                const isRed = i === 4;
                const isAmber = i === 7;
                return (
                  <motion.path
                    key={i}
                    d={`M -80 ${yBase} Q 250 ${yBase} 380 ${yMid} T 1080 ${yMid - 20}`}
                    stroke={isRed ? "#dc2626" : isAmber ? "#b45309" : "rgba(255,255,255,0.07)"}
                    strokeWidth={isRed ? "1.5" : isAmber ? "1" : "0.8"}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: isRed ? [0, 0.9, 0] : isAmber ? [0, 0.5, 0] : [0, 0.6, 0] }}
                    transition={{
                      duration: 2.5 + (i % 4) * 0.6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.28,
                      opacity: { duration: 2.5 + (i % 4) * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.28 }
                    }}
                  />
                );
              })}
            </svg>

            {/* F1 silhouette — centered, the hero of this panel */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-8 pt-8">
              <F1Silhouette />
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 z-30" style={{ background: "linear-gradient(to top, #040a14 60%, transparent)" }}>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white uppercase" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", letterSpacing: "-0.02em" }}>
                CFD Optimized
              </h3>
              <p className="font-[family-name:var(--font-body)] text-zinc-400 text-xs font-light max-w-sm mt-1">
                Every surface computed. Every gram of drag eliminated. At 1:20 scale, the physics are exact.
              </p>
            </div>
          </motion.div>

          {/* RIGHT STACK: 3 data panels */}
          <div className="lg:col-span-4 flex flex-col gap-4" style={{ height: "440px" }}>

            {/* CNC Tolerances */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 relative p-5 carbon-fiber flex flex-col justify-between overflow-hidden"
              style={{ background: "#040a14", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <CornerBrackets />
              <div className="flex items-center gap-2">
                <Cpu size={12} className="text-zinc-600" />
                <span className="font-[family-name:var(--font-data)] text-[8px] text-zinc-500 tracking-[0.25em] uppercase">CNC Machined</span>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] font-bold text-white tracking-tighter" style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)" }}>
                  &#177;0.1<span className="text-base text-red-500">mm</span>
                </div>
                <div className="flex items-end gap-px h-5 mt-2">
                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="flex-1" style={{
                      height: i === 8 ? "100%" : i === 7 || i === 9 ? "70%" : i % 4 === 0 ? "50%" : "25%",
                      background: i === 8 ? "#dc2626" : "rgba(63,63,70,0.7)",
                    }} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CO2 Propulsion */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 relative p-5 carbon-fiber flex flex-col justify-between overflow-hidden"
              style={{ background: "#040a14", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <CornerBrackets />
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-zinc-600" />
                <span className="font-[family-name:var(--font-data)] text-[8px] text-zinc-500 tracking-[0.25em] uppercase">Propulsion</span>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] font-bold text-white uppercase tracking-tight" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)" }}>CO&#x2082; Thrust</div>
                <div className="flex gap-px h-4 mt-2">
                  {[...Array(22)].map((_, i) => {
                    const dur = 0.15 + ((i * 17) % 12) * 0.05;
                    return (
                      <motion.div
                        key={i}
                        className="flex-1"
                        animate={prefersReduced ? false : { opacity: [0.25, 1, 0.25] }}
                        transition={{ duration: dur, repeat: Infinity }}
                        style={{ background: i > 18 ? "#dc2626" : i > 14 ? "#b45309" : "rgba(63,63,70,0.6)" }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Scale */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex-1 relative p-5 carbon-fiber flex items-center justify-between overflow-hidden"
              style={{ background: "#040a14", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <CornerBrackets />
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Crosshair size={12} className="text-zinc-600" />
                  <span className="font-[family-name:var(--font-data)] text-[8px] text-zinc-500 tracking-[0.25em] uppercase">Scale Ratio</span>
                </div>
                <div className="font-[family-name:var(--font-display)] font-bold text-white tracking-tighter" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>1:20</div>
              </div>
              {/* Radar pulse */}
              <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(63,63,70,0.4)" }} />
                <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(63,63,70,0.2)", transform: "scale(0.65)" }} />
                <motion.div
                  animate={prefersReduced ? false : { scale: [0.3, 1.4], opacity: [0.8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(220,38,38,0.5)" }}
                />
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" style={{ boxShadow: "0 0 8px rgba(220,38,38,0.8)" }} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom bleed into Team section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, transparent, #0a0805)" }} />
    </section>
  );
}
