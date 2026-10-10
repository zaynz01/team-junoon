"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// The premium SVG Blueprint visualizing Sponsor Zones
const ChassisWireframe = () => (
  <svg viewBox="0 0 400 800" className="w-full h-auto max-w-[280px] mx-auto overflow-visible drop-shadow-2xl">
    <defs>
      <linearGradient id="laserFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Grid / Scale lines behind */}
    <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
      {[...Array(17)].map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
      ))}
      {[...Array(9)].map((_, i) => (
        <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="800" />
      ))}
    </g>

    {/* Structural Wireframe */}
    <g className="text-zinc-700" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Front Wing */}
      <path d="M 120 100 L 280 100 L 290 140 L 110 140 Z" />
      {/* Nose Cone */}
      <path d="M 185 140 L 215 140 L 230 300 L 170 300 Z" />
      {/* Front Suspension */}
      <line x1="180" y1="220" x2="100" y2="240" />
      <line x1="180" y1="260" x2="100" y2="250" />
      <line x1="220" y1="220" x2="300" y2="240" />
      <line x1="220" y1="260" x2="300" y2="250" />
      {/* Front Wheels */}
      <rect x="70" y="190" width="30" height="90" rx="4" />
      <rect x="300" y="190" width="30" height="90" rx="4" />
      {/* Halo / Cockpit */}
      <path d="M 170 300 C 170 280, 230 280, 230 300 L 230 450 C 230 480, 170 480, 170 450 Z" />
      {/* Sidepods */}
      <path d="M 140 330 C 110 330, 120 480, 150 500 L 170 500 L 170 330 Z" />
      <path d="M 260 330 C 290 330, 280 480, 250 500 L 230 500 L 230 330 Z" />
      {/* Engine Cover */}
      <path d="M 180 450 L 220 450 L 210 600 L 190 600 Z" />
      {/* Rear Suspension */}
      <line x1="190" y1="560" x2="110" y2="580" />
      <line x1="190" y1="590" x2="110" y2="590" />
      <line x1="210" y1="560" x2="290" y2="580" />
      <line x1="210" y1="590" x2="290" y2="590" />
      {/* Rear Wheels */}
      <rect x="70" y="530" width="40" height="100" rx="4" />
      <rect x="290" y="530" width="40" height="100" rx="4" />
      {/* Rear Wing */}
      <path d="M 130 630 L 270 630 L 280 680 L 120 680 Z" />
    </g>

    {/* SPONSOR ZONES */}
    <g className="animate-[pulse_3s_ease-in-out_infinite]">
      {/* Nose (Zone A) */}
      <rect x="187" y="150" width="26" height="80" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />
      <text x="200" y="195" fill="#ef4444" fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="bold">A</text>
      
      {/* Sidepods (Zone B) */}
      <rect x="145" y="350" width="20" height="120" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />
      <text x="155" y="415" fill="#ef4444" fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="bold">B</text>
      
      <rect x="235" y="350" width="20" height="120" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />
      <text x="245" y="415" fill="#ef4444" fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="bold">B</text>

      {/* Rear Wing (Zone C) */}
      <rect x="140" y="640" width="120" height="30" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />
      <text x="200" y="660" fill="#ef4444" fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="bold">C</text>
    </g>
    
    {/* Scanning Laser Line Effect */}
    <line x1="0" y1="0" x2="400" y2="0" stroke="url(#laserFade)" strokeWidth="8" opacity="0.6">
      <animate attributeName="y1" values="-100;900;-100" dur="5s" repeatCount="indefinite" />
      <animate attributeName="y2" values="-100;900;-100" dur="5s" repeatCount="indefinite" />
    </line>
  </svg>
);

// High-end Terminal Input
const TerminalInput = ({ id, label, num, type = "text" }: any) => (
  <div className="flex flex-col gap-2 group">
    <div className="flex items-center gap-3 pl-1">
      <span className="font-[family-name:var(--font-data)] text-[9px] text-zinc-600 tracking-widest">{num}</span>
      <label htmlFor={id} className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.2em] uppercase text-zinc-400 group-focus-within:text-red-500 transition-colors">
        {label}
      </label>
    </div>
    <div className="relative">
      {/* Corner bracket accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500 group-focus-within:border-red-500 transition-colors pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500 group-focus-within:border-red-500 transition-colors pointer-events-none z-10" />
      
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={3}
          required
          className="w-full bg-zinc-950/80 border border-zinc-800/80 focus:border-red-600/50 focus:bg-black text-white p-4 font-[family-name:var(--font-data)] text-[16px] md:text-[11px] uppercase tracking-wide outline-none transition-all resize-none shadow-inner placeholder:text-zinc-700"
          placeholder="ENTER PARAMETERS..."
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          className="w-full bg-zinc-950/80 border border-zinc-800/80 focus:border-red-600/50 focus:bg-black text-white p-4 font-[family-name:var(--font-data)] text-[16px] md:text-[11px] uppercase tracking-wide outline-none transition-all shadow-inner placeholder:text-zinc-700"
          placeholder="AWAITING INPUT..."
        />
      )}
    </div>
  </div>
);

export default function ContactSection() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name    = (data.get("name")    as string) || "";
    const company = (data.get("company") as string) || "";
    const email   = (data.get("email")   as string) || "";
    const message = (data.get("message") as string) || "";

    // Build a clean, formatted message the sponsor sends via WhatsApp
    const text = [
      "*SPONSORSHIP PROPOSAL — TEAM JUNOON*",
      "",
      `*Contact:* ${name}`,
      `*Organization:* ${company}`,
      `*Email:* ${email}`,
      "",
      "*Proposal:*",
      message,
      "",
      "——",
      "Sent via teamjunoon.com",
    ].join("\n");

    // Open WhatsApp with the pre-built message — works on mobile (app) and desktop (web)
    window.open(
      `https://wa.me/923180028649?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "#000" }}>
      {/* Red + amber gradient mesh — the intensity of a final decision */}
      {!prefersReduced && (
        <>
          <div className="absolute right-0 top-1/3 w-[700px] h-[700px] pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(220,38,38,0.07) 0%, transparent 60%)" }} />
          <div className="absolute left-0 bottom-0 w-[500px] h-[400px] pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(180,83,9,0.06) 0%, transparent 60%)" }} />
        </>
      )}

      {/* Faint white grid — most visible here, the control room floor */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-28 pb-16">
        {/* Section label */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="font-[family-name:var(--font-data)] text-[10px] text-red-600 tracking-[0.4em]">05</span>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="font-[family-name:var(--font-heading)] text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Partnership Terminal</span>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-20 items-center">

          {/* LEFT: The Blueprint Pitch */}
          <div className="xl:col-span-6 flex flex-col gap-10">
            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-display)] font-black uppercase flex flex-col tracking-tighter leading-[0.85] select-none"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6.5rem)" }}
            >
              <span className="text-white">SECURE YOUR</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>SPOT ON THE GRID.</span>
            </motion.h2>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-8 items-center bg-white/[0.02] border border-white/5 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden shadow-2xl"
            >
              {/* Decorative crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-700" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-700" />
              
              {/* SVG Blueprint */}
              <div className="w-full sm:w-1/2 shrink-0">
                <ChassisWireframe />
              </div>
              
              {/* Legend */}
              <div className="w-full sm:w-1/2 flex flex-col gap-6">
                <div className="flex flex-col gap-2 border-l-2 border-red-600 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-heading)] text-[11px] tracking-[0.2em] text-white uppercase font-bold">Zone A</span>
                    <span className="font-[family-name:var(--font-data)] text-[9px] tracking-widest text-red-500 uppercase">Nose Cone</span>
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-xs text-zinc-400 font-light leading-relaxed">Maximum frontal broadcast visibility during head-on tracking shots.</span>
                </div>

                <div className="flex flex-col gap-2 border-l-2 border-zinc-700 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-heading)] text-[11px] tracking-[0.2em] text-white uppercase font-bold">Zone B</span>
                    <span className="font-[family-name:var(--font-data)] text-[9px] tracking-widest text-zinc-500 uppercase">Sidepods</span>
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-xs text-zinc-400 font-light leading-relaxed">Primary lateral exposure. High engagement during pit-lane coverage.</span>
                </div>

                <div className="flex flex-col gap-2 border-l-2 border-zinc-700 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-heading)] text-[11px] tracking-[0.2em] text-white uppercase font-bold">Zone C</span>
                    <span className="font-[family-name:var(--font-data)] text-[9px] tracking-widest text-zinc-500 uppercase">Rear Wing</span>
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-xs text-zinc-400 font-light leading-relaxed">Trailing aerodynamic profile. Ideal for dominant brand logos.</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE TERMINAL FORM */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="xl:col-span-6 xl:pl-10 w-full max-w-xl mx-auto xl:mr-0"
          >
            {sent ? (
              <div className="flex flex-col gap-6 py-12 px-8 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <div className="w-12 h-1 bg-red-600" />
                <h3
                  className="font-[family-name:var(--font-display)] font-bold text-white uppercase"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95 }}
                >
                  Proposal<br />Received.
                </h3>
                <p className="font-[family-name:var(--font-body)] text-zinc-400 text-sm leading-7 font-light">
                  Our strategic team will review your parameters. In the meantime, monitor our telemetry on{" "}
                  <a href="https://instagram.com/teamjunoon.hb" className="text-white hover:text-red-500 transition-colors" target="_blank" rel="noopener noreferrer">
                    @teamjunoon.hb
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-black/60 backdrop-blur-2xl border border-zinc-800 p-8 sm:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative">
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-red-600" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-red-600/30" />
                
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800/50">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <span className="font-[family-name:var(--font-data)] text-[10px] text-zinc-300 tracking-[0.3em] uppercase">Telemetry Link Active</span>
                </div>

                <TerminalInput num="[01]" id="name" label="Primary Contact" />
                <TerminalInput num="[02]" id="company" label="Organization / Brand" />
                <TerminalInput num="[03]" id="email" label="Encrypted Comm (Email)" type="email" />
                <TerminalInput num="[04]" id="message" label="Sponsorship Parameters" type="textarea" />

                <button
                  type="submit"
                  className="group relative block h-[54px] w-full rounded-none bg-white/[0.03] backdrop-blur-md border border-zinc-700 overflow-hidden cursor-pointer mt-6"
                >
                  {/* The expanding red block */}
                  <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />

                  {/* Perfectly Centered Text */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <span className="font-[family-name:var(--font-data)] font-bold tracking-[0.25em] pl-[0.25em] text-[11px] uppercase text-white transition-transform duration-500">
                      Initialize Proposal
                    </span>
                  </div>

                  {/* Right-aligned Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none">
                    <ArrowUpRight size={15} strokeWidth={2} className="text-zinc-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer strip */}
        <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <span className="font-[family-name:var(--font-data)] text-[9px] text-zinc-600 tracking-[0.4em] uppercase">
            © 2026 Team Junoon · Highbrow College, Karachi
          </span>
          <span className="font-[family-name:var(--font-data)] text-[9px] text-zinc-600 tracking-[0.4em] uppercase">
            Race Pakistan &apos;27 Competitor
          </span>
        </div>
      </div>
    </section>
  );
}
