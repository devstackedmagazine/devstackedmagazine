"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Logo from "@/public/logos/devstacked-horizontally.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-5 transition-colors duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-12 lg:px-20",
          scrolled ? "h-16 bg-void border-b border-rule" : "h-20 bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="DevStacked home">
          <Image src={Logo} alt="DevStacked" className="h-6 w-auto" priority />
        </Link>

        <div className="hidden lg:block">
          <Navigation />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-9 items-center justify-center rounded-lg bg-lime px-5 text-small font-medium! text-void transition-colors duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-lime-lift active:bg-lime-press active:translate-y-px md:inline-flex"
          >
            Get In Touch
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rule text-bone lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-3 w-4">
              <span
                className={[
                  "absolute left-0 right-0 top-0 h-px bg-bone transition-transform duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  menuOpen ? "translate-y-1.5 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 top-1.5 h-px bg-bone transition-opacity duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  menuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 top-3 h-px bg-bone transition-transform duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  menuOpen ? "-translate-y-1.5 -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>

      <div className="h-20" aria-hidden />
    </>
  );
}
