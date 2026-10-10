"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Menu } from "lucide-react";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Engineering", href: "#engineering" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-500
          ${scrolled
            ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => go("#hero")} className="flex-shrink-0 active:opacity-60 transition-opacity">
            <Image
              src="/junoon-logo.png"
              alt="Team Junoon"
              width={160}
              height={70}
              className="h-12 md:h-16 w-auto object-contain invert"
              priority
            />
          </button>

          {/* Desktop links — perfectly centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {links.map((l) => (
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
              className="hidden md:flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold text-[11px] tracking-[0.35em] uppercase text-white hover:text-red-500 transition-colors duration-200 active:opacity-60 group"
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

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white active:opacity-60 transition-opacity"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay — full screen, editorial */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-black flex flex-col justify-center px-8"
          >
            {/* Red top stripe */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600" />

            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  onClick={() => go(l.href)}
                  className="font-[family-name:var(--font-display)] font-bold text-left py-4 border-b border-zinc-900 text-white hover:text-red-500 transition-colors"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {l.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.23 }}
                onClick={() => go("#contact")}
                className="font-[family-name:var(--font-display)] font-bold text-left py-4 text-red-600 hover:text-red-400 transition-colors flex items-center gap-3"
                style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                Contact <ArrowUpRight size={28} strokeWidth={1.5} />
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="absolute bottom-8 left-8 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.4em] text-zinc-700 uppercase"
            >
              @teamjunoon.hb · Highbrow College, Karachi
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
