"use client";

import { PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  value: ProjectCategory | null;
  onChange: (value: ProjectCategory | null) => void;
  counts: Record<ProjectCategory, number>;
  total: number;
}

export function ProjectFilters({ value, onChange, counts, total }: ProjectFiltersProps) {
  return (
    <div
      className="project-filter-list"
      role="group"
      aria-label="Filtrar proyectos por categoría"
    >
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        className={cn("project-filter", value === null && "is-active")}
      >
        Todas
        <span className="project-filter__count" aria-hidden="true">
          {total}
        </span>
      </button>

      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onChange(category.value)}
          aria-pressed={value === category.value}
          className={cn("project-filter", value === category.value && "is-active")}
        >
          {category.label}
          <span className="project-filter__count" aria-hidden="true">
            {counts[category.value]}
          </span>
        </button>
      ))}
    </div>
  );
}
