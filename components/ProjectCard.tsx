"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const GRADIENTS = [
  "from-accent/40 via-accent/10 to-transparent",
  "from-foreground/30 via-foreground/5 to-transparent",
  "from-accent/25 via-transparent to-foreground/10",
];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.href ?? "#"}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              GRADIENTS[index % GRADIENTS.length]
            } transition duration-500 group-hover:scale-105`}
          />
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-foreground transition group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 max-w-md text-sm text-foreground/60">
            {project.description}
          </p>
        </div>
        <span className="font-mono text-xs text-foreground/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[11px] uppercase tracking-wider text-foreground/40"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}
