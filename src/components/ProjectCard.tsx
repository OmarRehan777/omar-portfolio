"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/portfolio";
import { Badge } from "./Badge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isProgress = project.status === "In Progress";

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.25) }}
      className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-glow"
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900/60">
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            width={1600}
            height={900}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            priority={index === 0}
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                {project.status ? (
                  <Badge variant={isProgress ? "progress" : "default"}>{project.status}</Badge>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-zinc-200/80 leading-relaxed">{project.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/0 ring-1 ring-white/10 hover:bg-white/5 transition"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open repository"
              >
                <Github className="h-4 w-4" />
              </a>
              {project.liveUrl ? (
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/0 ring-1 ring-white/10 hover:bg-white/5 transition"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200/80 ring-1 ring-white/10">
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-4 space-y-2 text-sm text-zinc-200/85">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
