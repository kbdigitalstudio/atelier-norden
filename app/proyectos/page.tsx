import { Metadata } from "next";
import { Filter } from "lucide-react";
import { Reveal } from "@/components/scroll-reveal";
import { ProjectGallery } from "@/components/projects/project-gallery-client";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Galería de proyectos de ATELIER NÓRDEN: vivienda, comercial, interiorismo y remodelación.",
  openGraph: {
    title: "Proyectos · ATELIER NÓRDEN",
    description: "Galería de proyectos de arquitectura y diseño de interiores.",
    type: "website",
  },
};

export default function ProyectosPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          <Reveal className="mb-16 md:mb-24">
            <h1 className="text-display text-4xl md:text-6xl font-normal text-charcoal leading-tight tracking-tighter mb-3">
              Proyectos
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
              Ejercicios conceptuales de arquitectura y diseño de interiores. Filtra por categoría y accede al detalle de cada proyecto.
            </p>
          </Reveal>

          <ProjectGallery />
        </div>

        {/* Decoración sutil: icono de filtro en la esquina */}
        <div className="absolute right-0 top-24 w-32 h-32 opacity-10 pointer-events-none">
          <Filter size={64} strokeWidth={1} className="text-charcoal" />
        </div>
      </section>
    </div>
  );
}
