"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { useLenis } from "./SmoothScrollProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(hash);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -24 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          onClick={(e) => scrollToHash(e, "#top")}
          className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:text-foreground"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToHash(e, link.href)}
              className="text-foreground/70 transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToHash(e, link.href)}
                  className="py-2 text-base text-foreground/80 transition hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
