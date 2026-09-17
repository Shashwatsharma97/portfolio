"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
        >
          03 / Contact
        </motion.p>

        <motion.a
          href={`mailto:${siteConfig.email}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 block text-[10vw] font-semibold leading-[0.95] tracking-tight transition hover:text-accent sm:text-6xl md:text-7xl"
        >
          {siteConfig.email}
        </motion.a>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          {siteConfig.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-wider text-foreground/60 transition hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
