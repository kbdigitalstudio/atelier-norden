"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/scroll-reveal";
import { PROJECTS } from "@/lib/data";
import { ProjectFilters } from "@/components/projects/project-filters";
import { ProjectGrid } from "@/components/projects/project-grid";

export default function ProyectosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero editorial */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          <Reveal className="mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-soft bg-warm-white text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4 block">
              Portafolio · Colombia
            </div>
            <h1 className="text-display text-4xl md:text-6xl font-normal text-charcoal leading-tight tracking-tighter mb-6">
              Arquitectura que nace del lugar
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
              Diseñamos espacios que responden al territorio, la luz y los materiales de Colombia. Cada proyecto
              explora la relación entre el concreto, la piedra, la madera y la vegetación tropical para crear
              atmósferas donde habitar con serenidad.
            </p>
          </Reveal>

          {/* Filtros */}
          <Reveal delay={0.2} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16 md:mb-20">
            <ProjectFilters onChange={() => {}} current={null} />
          </Reveal>
        </div>

        {/* Decoración sutil: icono de filtro en la esquina */}
        <div className="absolute right-0 top-24 w-32 h-32 opacity-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
          </svg>
        </div>
      </section>

      {/* Galería de proyectos */}
      <section id="proyectos" className="py-24 md:py-32 border-t border-stone-soft">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <ProjectGrid projects={PROJECTS} />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="px-6 md:px-8 max-w-3xl mx-auto text-center">
          <Reveal className="mb-8">
            <h2 className="text-display text-3xl md:text-4xl font-normal text-white leading-tight tracking-tighter mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl mx-auto mb-8">
              Acompañamos cada proyecto desde la primera escucha hasta la ejecución final, con atención al detalle y a
              los materiales. Cuéntanos qué necesitas y definiremos juntos el alcance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none"
              >
                Contactar <ArrowRight size={18} strokeWidth={2} />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
