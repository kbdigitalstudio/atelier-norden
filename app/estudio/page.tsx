import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "@/components/section-title";
import { STUDIO_SECTIONS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "Filosofía, metodología y equipo de ATELIER NÓRDEN, estudio de arquitectura y diseño de interiores en Colombia.",
  alternates: {
    canonical: "/estudio",
  },
  openGraph: {
    title: "Estudio · ATELIER NÓRDEN",
    description:
      "Una forma de trabajar basada en la escucha, la luz y la materialidad honesta.",
    type: "website",
    url: "/estudio",
  },
};

export default function EstudioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow text-muted">03 / Estudio</p>
              <h1 className="headline-xl page-hero__title mt-6">
                Un estudio pequeño, una idea precisa.
              </h1>
            </div>
            <div className="page-hero__intro">
              <p className="body-lg">
                Trabajamos con la luz, la proporción y los materiales como
                herramientas principales. El resultado deseado no es un gesto,
                sino una atmósfera que se sostiene en el tiempo.
              </p>
              <p className="eyebrow mt-6 text-muted">
                {SITE.addressLocality} · {SITE.addressRegion} · Colombia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="philosophy">
            <div className="media philosophy__figure reveal">
              <Image
                src="/images/casa-luna-02.jpg"
                alt="Salón de Casa Luna con ventanales, madera y mobiliario neutro"
                fill
                sizes="(min-width: 800px) 42vw, 100vw"
                quality={82}
                style={{ objectPosition: "center" }}
              />
            </div>

            <div>
              <p className="eyebrow text-muted">01 / Filosofía</p>
              <h2 className="headline-lg mt-6 reveal">
                {STUDIO_SECTIONS.philosophyTitle}
              </h2>
              <p className="body-lg mt-6 reveal">{STUDIO_SECTIONS.philosophyText}</p>
              <blockquote className="philosophy__quote reveal">
                <p className="headline-md">
                  “Diseñamos para la vida cotidiana, no para la fotografía.”
                </p>
                <footer className="eyebrow mt-4 text-muted">
                  {SITE.name} — Nota de estudio
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <SectionHead
            index="02"
            label="Metodología"
            title="Cuatro momentos, una misma atención."
            intro="Un proceso ordenado que permite tomar decisiones con criterio y mantener la coherencia entre el concepto, el detalle y la obra."
          />

          <div className="method-grid">
            {STUDIO_SECTIONS.methodologySteps.map((step, index) => (
              <div key={step.title} className="method-step reveal">
                <span className="method-step__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="headline-sm method-step__title">{step.title}</h3>
                  <p className="method-step__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-band">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">03 / Equipo</p>
              <h2 className="headline-lg mt-6">Un equipo que acompaña el proyecto completo.</h2>
              <p className="body-lg mt-6">
                Cada encargo lo lidera una persona desde el concepto hasta la
                entrega, con un equipo pequeño que evita las capas innecesarias.
              </p>
            </div>

            <div className="border-t border-paper-light/20">
              {STUDIO_SECTIONS.team.map((member, index) => (
                <div
                  key={member.name}
                  className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-paper-light/20 py-5"
                >
                  <span
                    className="flex size-11 items-center justify-center border border-paper-light/30 font-mono text-xs tracking-widest"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </span>
                  <h3 className="text-base font-medium text-paper-light">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-paper-light/55">
                    {String(index + 1).padStart(2, "0")} · {member.role}
                  </p>
                </div>
              ))}
              <p className="mt-5 text-xs leading-relaxed text-paper-light/45">
                Nombres, roles y trayectorias forman parte del carácter
                conceptual de este portafolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-muted">Siguiente paso</p>
              <h2 className="headline-md mt-3">Conocer el estudio es empezar a hablar.</h2>
            </div>
            <Link href="/contacto" className="btn btn--solid shrink-0">
              Escríbenos
              <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </div>
          <p className="body-base mt-10 max-w-3xl text-xs">{STUDIO_SECTIONS.note}</p>
        </div>
      </section>
    </>
  );
}
