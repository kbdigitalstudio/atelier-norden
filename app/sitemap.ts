import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-10-20";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/proyectos",
    "/estudio",
    "/servicios",
    "/contacto",
    "/privacidad",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.url}/proyectos/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
