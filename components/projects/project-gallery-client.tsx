"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { ProjectFilters } from "./project-filters";
import { ProjectGrid } from "./project-grid";
import { PROJECTS } from "@/lib/data";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory
        ? PROJECTS.filter((p) => p.category === activeCategory)
        : PROJECTS,
    [activeCategory],
  );

  return (
    <>
      <div className="flex items-end gap-3">
        {activeCategory && (
          <button
            onClick={() => setActiveCategory(null)}
            aria-label="Limpiar filtros"
            className="hidden sm:block px-4 py-2.5 rounded-full border border-stone-soft text-xs font-medium text-charcoal hover:bg-stone-soft transition-colors focus-visible:outline-none"
          >
            <X size={14} strokeWidth={2} /> Limpiar filtros
          </button>
        )}
        <ProjectFilters onChange={setActiveCategory} current={activeCategory} />
      </div>

      <p className="text-sm text-stone-500 mb-10 md:mb-16">
        {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? "s" : ""} encontrado{filteredProjects.length !== 1 ? "s" : ""}
      </p>

      <ProjectGrid projects={filteredProjects} />
    </>
  );
}
