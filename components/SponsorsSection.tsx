"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const tiers = [
  {
    id: "01", name: "Title Partner", status: "EXCLUSIVE",
    perks: ["Primary Chassis Livery", "Team Naming Rights", "Full Media Integration", "Race Day VIP Presence"],
    alwaysOn: true,
  },
  {
    id: "02", name: "Tech Partner", status: "3 SLOTS",
    perks: ["Component Branding", "Engineering Credits", "Technical Social Features"],
    blueprint: true,
  },
  {
    id: "03", name: "Media Partner", status: "OPEN",
    perks: ["Co-branded Content", "Behind-the-scenes Access", "Digital Broadcast Features"],
  },
  {
    id: "04", name: "Community", status: "OPEN",
    perks: ["Social Acknowledgement", "Event Presence", "Supporter Badges"],
  },
];

// Minimal F1 car silhouette — same as Engineering but single-color red stroke
const CarSilhouetteBg = () => (
  <svg viewBox="0 0 700 340" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
    <g fill="none" stroke="rgba(220,38,38,0.06)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M 40 160 L 40 180 L 140 185 L 140 155 Z" />
      <path d="M 140 160 L 200 155 L 200 185 L 140 180 Z" />
      <line x1="175" y1="162" x2="225" y2="138" />
      <line x1="175" y1="178" x2="225" y2="202" />
      <rect x="208" y="120" width="32" height="100" rx="6" />
      <path d="M 200 145 L 490 135 L 500 155 L 500 185 L 490 205 L 200 195 Z" />
      <ellipse cx="310" cy="170" rx="42" ry="22" />
      <path d="M 275 150 C 285 135 335 135 345 150" />
      <path d="M 355 145 L 380 128 L 400 128 L 410 145" />
      <line x1="390" y1="128" x2="390" y2="105" />
      <rect x="450" y="114" width="38" height="112" rx="6" />
      <path d="M 530 130 L 660 125 L 660 155 L 530 160 Z" />
      <path d="M 535 160 L 655 155 L 655 175 L 535 180 Z" />
      <rect x="654" y="122" width="8" height="56" rx="1" />
    </g>
  </svg>
);

export default function SponsorsSection() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const renderCTA = () => (
    <button
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      className="group relative block h-[54px] w-full max-w-[280px] rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer mt-10"
    >
      <div className="absolute right-[3px] top-[3px] bottom-[3px] w-[46px] rounded-full bg-red-600 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-6px)]" />
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="font-[family-name:var(--font-heading)] font-semibold tracking-[0.25em] pl-[0.25em] text-[11px] uppercase text-white">
          Become A Partner
        </span>
      </div>
      <div className="absolute right-[3px] top-[3px] z-10 w-[46px] h-[46px] flex items-center justify-center rounded-full pointer-events-none">
        <ArrowUpRight size={15} strokeWidth={2} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </div>
    </button>
  );

  return (
    <section id="sponsors" className="relative overflow-hidden" style={{ background: "#050507" }}>

      {/* Blueprint grid — colder than Engineering, matches section personality */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      {/* Amber warmth — bottom right, radiates up from race atmosphere */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0" style={{
        width: "50vw", height: "60vh",
        background: "radial-gradient(ellipse at 100% 100%, rgba(180,83,9,0.06) 0%, transparent 55%)",
      }} />

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-28">

        {/* Section label */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-[family-name:var(--font-data)] text-[10px] text-red-600 tracking-[0.4em]">04</span>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="font-[family-name:var(--font-heading)] text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Partnerships</span>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-start">

          {/* LEFT: Headline */}
          <div className="xl:col-span-5 xl:sticky xl:top-28">

            {/* Race number + vertical rule — the brand anchor */}
            <div className="flex items-start gap-5 mb-8">
              <div className="flex flex-col items-center gap-0">
                <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, #dc2626)" }} />
                <span
                  className="font-[family-name:var(--font-display)] font-black text-transparent select-none"
                  style={{ WebkitTextStroke: "1px rgba(220,38,38,0.2)", fontSize: "clamp(4rem,8vw,6rem)", lineHeight: 1, letterSpacing: "-0.05em" }}
                >
                  27
                </span>
              </div>
              <motion.h2
                initial={prefersReduced ? false : { opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-display)] font-black uppercase flex flex-col tracking-tighter leading-[0.85] select-none"
                style={{ fontSize: "clamp(3.5rem,7vw,7rem)" }}
              >
                <span className="text-white">FUEL</span>
                <span className="text-white">THE</span>
                <div className="flex">
                  <span className="text-transparent" style={{ WebkitTextStroke: "2px #dc2626" }}>OBSESSION</span>
                  <span className="text-red-600">.</span>
                </div>
              </motion.h2>
            </div>

            {/* Car silhouette — behind the copy, at very low opacity */}
            <div className="relative -mx-4 overflow-hidden" style={{ height: "120px" }}>
              <div className="absolute inset-0 opacity-60">
                <CarSilhouetteBg />
              </div>
            </div>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-[family-name:var(--font-body)] text-zinc-400 font-light leading-relaxed text-sm max-w-sm"
            >
              Your brand on a national stage. Your investment directly funds chassis manufacturing,
              competition entry, and operations — while backing Pakistan&apos;s next generation of engineers.
            </motion.p>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {renderCTA()}
            </motion.div>
          </div>

          {/* RIGHT: Tier cards */}
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tiers.map((tier, i) => {
              const isAlwaysOn = tier.alwaysOn;
              const isBlueprintTier = tier.blueprint;
              return (
                <motion.div
                  key={tier.name}
                  initial={prefersReduced ? false : { opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group relative overflow-hidden flex flex-col p-8 carbon-fiber"
                  style={{
                    background: isAlwaysOn
                      ? "rgba(220,38,38,0.05)"
                      : isBlueprintTier
                      ? "rgba(6,13,26,0.9)"
                      : "rgba(0,0,0,0.5)",
                    border: isAlwaysOn
                      ? "1px solid rgba(220,38,38,0.25)"
                      : "1px solid rgba(255,255,255,0.04)",
                    boxShadow: isAlwaysOn ? "0 0 40px rgba(220,38,38,0.06), inset 0 0 40px rgba(220,38,38,0.03)" : "none",
                  }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-500" style={{ borderColor: isAlwaysOn ? "#dc2626" : "rgba(63,63,70,0)" }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-500" style={{ borderColor: isAlwaysOn ? "rgba(180,83,9,0.5)" : "rgba(63,63,70,0)" }} />

                  {/* Always-on ambient glow for top tier */}
                  {isAlwaysOn && (
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.07) 0%, transparent 70%)" }} />
                  )}

                  {/* Header row */}
                  <div className="flex justify-between items-center mb-14 z-10">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={isAlwaysOn && !prefersReduced ? { opacity: [1, 0.3, 1] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5"
                        style={{ background: isAlwaysOn ? "#dc2626" : "#27272a" }}
                      />
                      <span className="font-[family-name:var(--font-data)] text-[9px] tracking-widest" style={{ color: isAlwaysOn ? "#f87171" : "#52525b" }}>{tier.id}</span>
                    </div>

                    {/* Status badge */}
                    <span
                      className="font-[family-name:var(--font-data)] text-[8px] tracking-[0.2em] px-3 py-1 uppercase relative"
                      style={{
                        border: isAlwaysOn ? "1px solid rgba(220,38,38,0.4)" : "1px solid rgba(63,63,70,0.5)",
                        color: isAlwaysOn ? "#ef4444" : "#71717a",
                        background: isAlwaysOn ? "rgba(220,38,38,0.08)" : "transparent",
                      }}
                    >
                      {isAlwaysOn && (
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" style={{ boxShadow: "0 0 6px rgba(220,38,38,0.8)" }} />
                      )}
                      {tier.status}
                    </span>
                  </div>

                  {/* Large watermark number */}
                  <div className="absolute -top-6 -right-2 font-[family-name:var(--font-display)] font-bold pointer-events-none select-none leading-none z-0 transition-colors duration-700"
                    style={{ fontSize: "8rem", color: isAlwaysOn ? "rgba(220,38,38,0.04)" : "rgba(255,255,255,0.015)" }}>
                    {tier.id}
                  </div>

                  {/* Tier name */}
                  <h3 className="font-[family-name:var(--font-display)] font-bold uppercase text-white tracking-tight mb-6 z-10 mt-auto group-hover:text-red-400 transition-colors duration-400"
                    style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)" }}>
                    {tier.name}
                  </h3>

                  {/* Perks */}
                  <ul className="flex flex-col gap-3 z-10">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-4 h-px transition-colors duration-500" style={{ background: isAlwaysOn ? "#dc2626" : "#3f3f46" }} />
                        <span className="font-[family-name:var(--font-heading)] text-[10px] text-zinc-500 tracking-[0.12em] group-hover:text-zinc-300 transition-colors duration-400 uppercase">
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom bleed into Contact */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, transparent, #000)" }} />
    </section>
  );
}
