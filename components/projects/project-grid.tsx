"use client";

import { ProjectCard } from "./project-card";
import { Reveal } from "@/components/scroll-reveal";
import type { Project } from "@/lib/data";

type LayoutVariant = "featured" | "standard" | "wide";

interface ProjectGridProps {
  projects: Project[];
}

/**
 * Galería editorial con variación deliberada de tamaños.
 * Cada tercer proyecto es "featured" (mayor protagonismo).
 * El layout alterna entre featured, standard y wide para crear ritmo visual.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <Reveal className="text-center py-20">
        <p className="text-stone-600 text-lg">No se encontraron proyectos con este filtro.</p>
      </Reveal>
    );
  }

  return (
    <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
      {projects.map((project, index) => {
        const position = index % 3;
        const variant: LayoutVariant =
          position === 0 ? "featured" : position === 1 ? "wide" : "standard";

        return (
          <ProjectCard
            key={project.slug}
            project={project}
            variant={variant}
            className={gridClassName(variant)}
          />
        );
      })}
    </Reveal>
  );
}

function gridClassName(variant: LayoutVariant): string | undefined {
  switch (variant) {
    case "featured":
      // Proyecto destacado: ocupa 2 columnas y 2 filas en lg+
      return "lg:col-span-2 lg:row-span-2";
    case "wide":
      // Proyecto panorámico: ocupa 2 columnas, 1 fila en lg+
      return "lg:col-span-2";
    case "standard":
    default:
      return undefined;
  }
}
