"use client";

import { motion } from "framer-motion";
import { papers } from "@/lib/research";

export default function Research() {
  return (
    <section id="research" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
        >
          03 / Research
        </motion.p>

        <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid gap-4 py-10 md:grid-cols-[auto_1fr] md:gap-12"
            >
              <span className="font-mono text-xs text-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  {paper.type} &middot; {paper.venue}
                </p>
                <h3 className="mt-2 text-xl font-medium text-foreground sm:text-2xl">
                  {paper.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-foreground/60 sm:text-base">
                  {paper.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-wider text-foreground/40"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-6">
                  {paper.href && (
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-wider text-accent transition hover:text-foreground"
                    >
                      Read Paper &rarr;
                    </a>
                  )}
                  {paper.codeHref && (
                    <a
                      href={paper.codeHref}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-wider text-foreground/60 transition hover:text-foreground"
                    >
                      View Code &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
