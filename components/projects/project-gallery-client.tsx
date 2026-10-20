"use client";

import { useMemo, useState } from "react";
import { ProjectFilters } from "./project-filters";
import { ProjectGrid } from "./project-grid";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/data";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);

  const counts = useMemo(
    () =>
      PROJECT_CATEGORIES.reduce(
        (accumulator, category) => {
          accumulator[category.value] = PROJECTS.filter(
            (project) => project.category === category.value,
          ).length;
          return accumulator;
        },
        {} as Record<ProjectCategory, number>,
      ),
    [],
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory
        ? PROJECTS.filter((project) => project.category === activeCategory)
        : PROJECTS,
    [activeCategory],
  );

  return (
    <>
      <div className="project-filter-bar">
        <ProjectFilters
          value={activeCategory}
          onChange={setActiveCategory}
          counts={counts}
          total={PROJECTS.length}
        />
        <p className="eyebrow text-muted" role="status" aria-live="polite">
          {String(filteredProjects.length).padStart(2, "0")} de{" "}
          {String(PROJECTS.length).padStart(2, "0")} proyectos
        </p>
      </div>

      <ProjectGrid key={activeCategory ?? "todas"} projects={filteredProjects} />
    </>
  );
}
