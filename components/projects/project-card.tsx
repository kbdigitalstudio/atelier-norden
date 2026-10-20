import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryLabel, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article className={cn("project-tile reveal", className)}>
      <Link
        href={`/proyectos/${project.slug}`}
        className="project-tile__link"
        aria-label={`${project.title} — ${categoryLabel(project.category)} en ${project.location}`}
      >
        <div className="project-tile__topline">
          <span>{categoryLabel(project.category)}</span>
          <span>{project.location}</span>
        </div>

        <div className="media project-tile__image">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(min-width: 1280px) 48vw, (min-width: 760px) 50vw, 100vw"
            quality={82}
            style={{ objectPosition: project.coverObjectPosition ?? "center" }}
          />
        </div>

        <div className="project-tile__body">
          <div className="min-w-0">
            <h3 className="headline-sm project-tile__title">{project.title}</h3>
            <p className="project-tile__meta">
              {project.surface} <span className="opacity-40">·</span>{" "}
              {project.conceptual ? "Proyecto conceptual" : "Proyecto"}
            </p>
          </div>
          <span className="project-tile__arrow" aria-hidden="true">
            <ArrowUpRight size={20} strokeWidth={1.3} />
          </span>
        </div>
      </Link>
    </article>
  );
}
