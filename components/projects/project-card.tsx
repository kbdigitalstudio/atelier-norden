"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import { formatBudgetCOP } from "@/lib/data";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const categoryLabel =
    project.category === "vivienda"
      ? "Vivienda"
      : project.category === "comercial"
        ? "Comercial"
        : project.category === "interiorismo"
          ? "Interiorismo"
          : "Remodelación";

  return (
    <Reveal className={cn(className)}>
      <Link
        href={`/proyectos/${project.slug}`}
        className="block group relative overflow-hidden rounded-lg border border-stone-soft bg-stone-soft shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
      >
        <div className="relative aspect-[4/3] overflow-hidden group">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors duration-500" />
          <div className="absolute top-6 left-6 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/30 bg-charcoal/60 text-[10px] font-medium text-white/90 backdrop-blur uppercase tracking-wider">
              {categoryLabel}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <span className="inline-block mb-1.5 px-3 py-1 rounded-full border border-white/40 bg-charcoal/60 text-[10px] font-bold text-white/90 backdrop-blur-sm uppercase tracking-widest">
              {categoryLabel}
            </span>
            <h3
              className="text-display text-lg md:text-xl font-normal text-white leading-tight mb-1"
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-white/90">
              <span className="flex items-center gap-1">
                <span className="text-xs opacity-80">{project.location}</span>
              </span>
              <span className="w-px h-3 bg-white/40"></span>
              <span className="text-xs opacity-80">{project.surface}</span>
            </div>
            {project.budget && project.budget.min !== undefined && project.budget.max !== undefined && (
              <p className="mt-2 text-sm font-medium text-white text-sand/90">
                {formatBudgetCOP(project.budget.min)} – {formatBudgetCOP(project.budget.max)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
