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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setActiveHash(href);
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
          <button onClick={() => go("#hero")} className="flex-shrink-0 active:opacity-60 transition-opacity">
            <Image
              src="/junoon-logo.png"
              alt="Team Junoon"
              width={160}
              height={70}
              className="h-16 w-auto object-contain invert"
              priority
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

      {/* ─── MOBILE BOTTOM NAV (Apple-Style) ─── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="bg-[#050507]/60 backdrop-blur-[24px] saturate-[180%] border-t border-white/[0.08] flex items-center justify-around h-[68px] px-2 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
          {mobileLinks.map((l) => {
            const Icon = l.icon;
            const isActive = activeHash === l.href;
            return (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="relative flex flex-col items-center justify-center w-16 h-full gap-1 active:scale-90 transition-transform duration-200"
              >
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-red-500" : "text-zinc-500"
                  }`}
                />
                <span
                  className={`text-[9px] font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    isActive ? "text-red-500" : "text-zinc-500"
                  }`}
                >
                  {l.label}
                </span>
                {/* Active Dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-[1px] w-8 h-[2px] bg-red-600 rounded-b-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
