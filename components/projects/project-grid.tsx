import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/data";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p className="headline-md">Aún no hay proyectos en esta categoría.</p>
        <p className="body-base mx-auto mt-3 max-w-md">
          Prueba otra categoría o vuelve a ver la selección completa.
        </p>
      </div>
    );
  }

  return (
    <div className="project-index-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
