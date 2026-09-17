"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:gap-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
        >
          01 / About
        </motion.p>

        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-medium sm:text-3xl"
          >
            Skills &amp; Tech Stack
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {siteConfig.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground/70"
              >
                {skill}
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 text-2xl leading-relaxed text-foreground/90 sm:text-3xl"
          >
            {siteConfig.about}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
