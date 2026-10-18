"use client";

import { ProjectCard } from "./project-card";
import { Reveal } from "@/components/scroll-reveal";
import type { Project } from "@/lib/data";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <Reveal className="text-center py-20">
        <p className="text-stone-600 text-lg">No se encontraron proyectos con este filtro.</p>
      </Reveal>
    );
  }

  return (
    <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </Reveal>
  );
}
