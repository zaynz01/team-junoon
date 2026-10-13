"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Crosshair, Cpu, Users, Handshake } from "lucide-react";

const desktopLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Engineering", href: "#engineering" },
  { label: "Team", href: "#team" },
];

const mobileLinks = [
  { label: "Mission", href: "#mission", icon: Crosshair },
  { label: "Tech", href: "#engineering", icon: Cpu },
  { label: "Team", href: "#team", icon: Users },
  { label: "Contact", href: "#contact", icon: Handshake },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy Logic
      const sections = ["#hero", "#mission", "#engineering", "#team", "#contact"];
      let currentSection = "";
      
      for (const section of sections) {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the middle of the screen is within this section
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            currentSection = section;
          }
        }
      }
      
      if (currentSection === "#hero") {
        setActiveHash("");
      } else if (currentSection) {
        setActiveHash(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href: string) => {
    setActiveHash(href === "#hero" ? "" : href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ─── DESKTOP TOP NAV ─── */}
      <nav
        className={`
          hidden md:block fixed top-0 left-0 right-0 z-40 transition-all duration-500
          ${scrolled
            ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-12 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => go("#hero")} className="flex-shrink-0 active:opacity-60 transition-all duration-200 hover:opacity-90">
            <Image
              src="/junoon-logo.png"
              alt="Team Junoon"
              width={220}
              height={66}
              className="h-12 md:h-14 w-auto object-contain"
              priority
              unoptimized
            />
          </button>

          {/* Desktop links — perfectly centered */}
          <div className="flex items-center gap-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {desktopLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="group relative font-[family-name:var(--font-heading)] font-medium text-[11px] tracking-[0.35em] uppercase text-zinc-500 hover:text-white transition-colors duration-200 active:opacity-60 pb-px"
              >
                {l.label}
                {/* Underline grows from left on hover */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            ))}
          </div>

          {/* CTA & Socials */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/teamjunoon.hb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold text-[11px] tracking-[0.35em] uppercase text-white hover:text-red-500 transition-colors duration-200 active:opacity-60 group"
              aria-label="Instagram @teamjunoon.hb"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-500 group-hover:text-red-500 transition-colors duration-200"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @teamjunoon.hb
              <ArrowUpRight
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-zinc-500 group-hover:text-red-500"
              />
            </a>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE BOTTOM NAV (Floating Pill) ─── */}
      <nav className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <div className="w-max mx-auto bg-[#050507]/60 backdrop-blur-[24px] saturate-[180%] border border-white/[0.08] rounded-full p-2 flex items-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto">
          {mobileLinks.map((l) => {
            const Icon = l.icon;
            const isActive = activeHash === l.href;
            return (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`flex items-center justify-center h-12 rounded-full transition-all duration-300 overflow-hidden ${
                  isActive ? "bg-red-600/20 px-6" : "bg-transparent hover:bg-white/5 w-12 px-0"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`shrink-0 transition-colors duration-300 ${
                    isActive ? "text-red-500" : "text-zinc-500"
                  }`}
                />
                
                <div 
                  className={`grid transition-[grid-template-columns,opacity] duration-300 ease-out ${
                    isActive ? "grid-cols-[1fr] opacity-100" : "grid-cols-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden flex items-center">
                    <span className="font-[family-name:var(--font-heading)] font-semibold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap text-red-500 pl-3">
                      {l.label}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
