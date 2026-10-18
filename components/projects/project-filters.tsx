"use client";

import { useState, useCallback } from "react";
import { PROJECT_CATEGORIES } from "@/lib/data";
import { Reveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  onChange: (value: string | null) => void;
  current?: string | null;
}

export function ProjectFilters({ onChange, current = null }: ProjectFiltersProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = useCallback(
    (value: string | null) => {
      setOpen(false);
      onChange(value);
    },
    [onChange],
  );

  const label =
    current === null ? "Todas las categorías" : PROJECT_CATEGORIES.find((c) => c.value === current)?.label || current;

  return (
    <Reveal className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="project-filters-menu"
        className={cn(
          "inline-flex items-center justify-between min-w-[180px] px-4 py-3 text-left text-sm font-medium text-charcoal border border-stone-soft rounded-full bg-white hover:bg-stone-soft transition-colors focus-visible:outline-none",
          open ? "bg-stone-soft" : "",
        )}
      >
        <span>{label}</span>
        <svg
          className={`size-4 text-stone transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          id="project-filters-menu"
          className="absolute z-20 mt-1 w-[180px] rounded-lg border border-stone-soft bg-white shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200"
          role="menu"
        >
          <button
            onClick={() => handleSelect(null)}
            role="menuitem"
            className={cn("block w-full text-left px-4 py-2 text-sm", current === null ? "text-charcoal font-semibold bg-stone-soft" : "text-stone-600 hover:bg-stone-soft")}
          >
            Todas las categorías
          </button>
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => handleSelect(category.value)}
              role="menuitem"
              className={cn(
                "block w-full text-left px-4 py-2 text-sm",
                current === category.value ? "text-charcoal font-semibold bg-stone-soft" : "text-stone-600 hover:bg-stone-soft",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}
    </Reveal>
  );
}
