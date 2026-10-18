"use client";

import Link from "next/link";
import { Reveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

type CardVariant = "featured" | "standard" | "wide";

interface ProjectCardProps {
  project: Project;
  variant?: CardVariant;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  featured: "aspect-[3/2]",
  standard: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function ProjectCard({
  project,
  variant = "standard",
  className,
}: ProjectCardProps) {
  const categoryLabel =
    project.category === "vivienda"
      ? "Vivienda"
      : project.category === "comercial"
        ? "Comercial"
        : project.category === "interiorismo"
          ? "Interiorismo"
          : "Remodelación";

  const isFeatured = variant === "featured";

  return (
    <Reveal className={cn(className)}>
      <Link
        href={`/proyectos/${project.slug}`}
        className={cn(
          "block group relative overflow-hidden",
          variant === "featured"
            ? "rounded-xl border border-stone-soft bg-stone-soft shadow-md"
            : variant === "wide"
              ? "rounded-lg border border-stone-soft bg-stone-soft shadow-sm"
              : "rounded-lg border border-stone-soft bg-stone-soft shadow-sm",
        )}
      >
        <div
          className={cn("relative overflow-hidden", variantStyles[variant])}
          style={{
            backgroundImage: `url(${project.cover})`,
            backgroundSize: "cover",
            backgroundPosition: project.coverObjectPosition ?? "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors duration-500" />
          <div className="absolute top-6 left-6 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/30 bg-charcoal/60 text-[10px] font-medium text-white/90 backdrop-blur uppercase tracking-wider">
              {categoryLabel}
            </span>
          </div>

          {isFeatured && (
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <span className="inline-block mb-2 px-3 py-1 rounded-full border border-white/40 bg-charcoal/60 text-[10px] font-bold text-white/90 backdrop-blur-sm uppercase tracking-widest">
                {categoryLabel}
              </span>
              <h3
                className="text-display text-2xl md:text-3xl font-normal text-white leading-tight mb-1"
              >
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {project.location} · {project.surface}
              </p>
            </div>
          )}

          {!isFeatured && (
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-block mb-1.5 px-3 py-1 rounded-full border border-white/40 bg-charcoal/60 text-[10px] font-bold text-white/90 backdrop-blur-sm uppercase tracking-wider">
                {categoryLabel}
              </span>
              <h3
                className="text-display text-lg md:text-xl font-normal text-white leading-tight mb-0"
              >
                {project.title}
              </h3>
            </div>
          )}
        </div>

        {!isFeatured && variant !== "wide" && (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-stone-soft bg-white text-[10px] font-medium text-charcoal/70 uppercase tracking-wider">
                {categoryLabel}
              </span>
            </div>
            <h3 className="text-display text-lg font-normal text-charcoal leading-tight mb-1 group-hover:text-sand-dark transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-stone-600">
              {project.location} · {project.surface}
            </p>
          </div>
        )}

        {variant === "wide" && (
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <span className="inline-block mb-1.5 px-3 py-1 rounded-full border border-white/40 bg-charcoal/60 text-[10px] font-bold text-white/90 backdrop-blur-sm uppercase tracking-wider">
              {categoryLabel}
            </span>
            <h3
              className="text-display text-lg md:text-xl font-normal text-white leading-tight mb-0"
            >
              {project.title}
            </h3>
          </div>
        )}
      </Link>
    </Reveal>
  );
}
