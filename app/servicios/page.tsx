import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "@/components/section-title";
import { SERVICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Diseño arquitectónico, interiorismo, remodelaciones y asesoría técnica de ATELIER NÓRDEN.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios · ATELIER NÓRDEN",
    description:
      "Diseño arquitectónico, interiorismo, remodelaciones y asesoría para proyectos en Colombia.",
    type: "website",
    url: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow text-muted">04 / Servicios</p>
              <h1 className="headline-xl page-hero__title mt-6">
                El proyecto completo o la parte que necesitas.
              </h1>
            </div>
            <div className="page-hero__intro">
              <p className="body-lg">
                Acompañamos cada encargo desde la primera escucha hasta la
                ejecución final, con atención al detalle y a los materiales.
              </p>
              <p className="body-base mt-5 text-sm">
                El alcance se define caso a caso según el lugar, el programa y
                el momento en que nos convocas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-band">
        <div className="shell">
          <SectionHead
            index="01"
            label="Áreas de trabajo"
            title="Cuatro maneras de intervenir un espacio."
            intro="Desde la idea inicial hasta la obra, con la misma atención a la proporción, la luz y la materia."
          />

          <div>
            {SERVICES.map((service, index) => (
              <div key={service.title} className="service-row">
                <span className="service-row__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="service-row__title">{service.title}</h2>
                <p className="service-row__description">{service.description}</p>
                <ArrowUpRight
                  className="service-row__arrow"
                  size={22}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow text-muted">02 / Alcance</p>
              <h2 className="headline-lg mt-6">Cómo se traduce en el día a día.</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-line pt-5">
                <p className="eyebrow text-oxide">01</p>
                <h3 className="headline-sm mt-3">Diseño y documentación</h3>
                <p className="body-base mt-3 text-sm">
                  Del concepto a los planos y detalles necesarios para construir,
                  cuidando la coherencia entre lo pensado y lo dibujado.
                </p>
              </div>
              <div className="border-t border-line pt-5">
                <p className="eyebrow text-oxide">02</p>
                <h3 className="headline-sm mt-3">Materiales y atmósfera</h3>
                <p className="body-base mt-3 text-sm">
                  Selección de materiales duraderos, honestos y de bajo
                  mantenimiento que mejoren con el paso del tiempo.
                </p>
              </div>
              <div className="border-t border-line pt-5">
                <p className="eyebrow text-oxide">03</p>
                <h3 className="headline-sm mt-3">Viabilidad y presupuesto</h3>
                <p className="body-base mt-3 text-sm">
                  Revisión de normativa, condiciones técnicas y presupuesto antes
                  de iniciar el proyecto, para decidir con información.
                </p>
              </div>
              <div className="border-t border-line pt-5">
                <p className="eyebrow text-oxide">04</p>
                <h3 className="headline-sm mt-3">Acompañamiento de obra</h3>
                <p className="body-base mt-3 text-sm">
                  Seguimiento de la ejecución para que el proyecto construido
                  coincida con el proyecto pensado.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="body-base max-w-lg">
              Cada encargo es distinto. Cuéntanos tu idea y definiremos juntos el
              alcance del proyecto.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className="btn btn--solid">
                Contactar
                <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
              </Link>
              {SITE.whatsapp && (
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <p className="body-base max-w-3xl text-xs">{SITE.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
