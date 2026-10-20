"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectGallery } from "@/components/projects/project-gallery-client";

export default function ProyectosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow text-muted">02 / Portafolio</p>
              <h1 className="headline-xl page-hero__title mt-6">
                Arquitectura que nace del lugar.
              </h1>
            </div>
            <div className="page-hero__intro">
              <p className="body-lg">
                Cuatro ejercicios que exploran la relación entre el territorio,
                la luz y los materiales. Vivienda, hostelería, interiorismo y
                remodelación, contados desde la planta hasta la atmósfera.
              </p>
              <p className="body-base mt-5 text-sm">
                Los proyectos son conceptuales y forman parte de un portafolio
                de KB Digital Studio. No representan clientes ni obras
                ejecutadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="proyectos-grid-title">
        <div className="shell">
          <h2 id="proyectos-grid-title" className="sr-only">
            Galería de proyectos
          </h2>
          <ProjectGallery />
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="body-base max-w-lg">
              ¿Tienes un terreno, un local o una casa que necesita otra mirada?
              Empecemos por entender el lugar.
            </p>
            <Link href="/contacto" className="btn btn--solid shrink-0">
              Hablemos
              <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
