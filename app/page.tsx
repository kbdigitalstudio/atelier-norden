import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHead } from "@/components/section-title";
import { PlanFragment } from "@/components/plan-fragment";
import { PROJECTS, SERVICES, SITE, STUDIO_SECTIONS } from "@/lib/data";

const FEATURE_CLASS: Record<string, string> = {
  "casa-luna": "feature--casa",
  "luz-de-marea": "feature--luz",
  "patio-atomo": "feature--patio",
  "marea-baja": "feature--marea",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* 01 — Manifiesto */}
      <section className="section">
        <div className="shell">
          <div className="manifesto">
            <div>
              <p className="eyebrow text-muted">01 / Manifiesto</p>
              <h2 className="headline-lg manifesto__statement mt-6 reveal">
                La arquitectura como forma de atención.
              </h2>
            </div>

            <div className="manifesto__body">
              <p className="body-lg reveal">{STUDIO_SECTIONS.philosophyText}</p>

              <div className="manifesto__note reveal">
                <PlanFragment />
                <p className="body-base text-sm">
                  Del plano a la materia: cada línea se comprueba en obra, cada
                  material se elige por cómo envejece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Proyectos */}
      <section id="proyectos-destacados" className="section pt-0">
        <div className="shell">
          <SectionHead
            index="02"
            label="Proyectos"
            title={
              <>
                Cuatro formas
                <br />
                de habitar.
              </>
            }
            intro="Vivienda, hostelería, interiorismo y remodelación. Cuatro ejercicios conceptuales donde la luz y la materia ordenan el espacio."
            action={
              <Link href="/proyectos" className="link-line eyebrow">
                Ver galería completa
                <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
              </Link>
            }
          />

          <div className="featured-grid">
            {PROJECTS.map((project, index) => (
              <article
                key={project.slug}
                className={`feature ${FEATURE_CLASS[project.slug] ?? ""} reveal`}
              >
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="feature__link"
                  aria-label={`${project.title}, ${project.location}`}
                >
                  <div className="feature__topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      {project.category === "vivienda"
                        ? "Vivienda"
                        : project.category === "comercial"
                          ? "Comercial"
                          : project.category === "interiorismo"
                            ? "Interiorismo"
                            : "Remodelación"}
                    </span>
                  </div>

                  <div className="media feature__image">
                    <Image
                      src={project.cover}
                      alt={project.coverAlt}
                      fill
                      sizes="(min-width: 800px) 55vw, 100vw"
                      quality={82}
                      style={{ objectPosition: project.coverObjectPosition ?? "center" }}
                    />
                  </div>

                  <div className="feature__body">
                    <div>
                      <h3 className="headline-md feature__title">{project.title}</h3>
                      <p className="feature__meta">
                        {project.location} <span className="opacity-40">·</span>{" "}
                        {project.surface}
                      </p>
                    </div>
                    <span className="feature__arrow" aria-hidden="true">
                      <ArrowUpRight size={18} strokeWidth={1.3} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <p className="eyebrow mt-12 max-w-2xl text-muted">
            * Ejercicios conceptuales de portafolio. No representan clientes ni
            obras ejecutadas.
          </p>
        </div>
      </section>

      {/* 03 — Servicios */}
      <section className="section services-band">
        <div className="shell">
          <SectionHead
            index="03"
            label="Servicios"
            title={
              <>
                Del primer trazo
                <br />a la última junta.
              </>
            }
            intro="Acompañamos el proyecto completo o la parte que necesitas: desde la definición del alcance hasta el seguimiento de obra."
            action={
              <Link href="/servicios" className="link-line eyebrow">
                Ver servicios
                <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
              </Link>
            }
          />

          <div>
            {SERVICES.map((service, index) => (
              <Link
                key={service.title}
                href="/servicios"
                className="service-row"
                aria-label={`${service.title} — ver servicios`}
              >
                <span className="service-row__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="service-row__title">{service.title}</h3>
                <p className="service-row__description">{service.description}</p>
                <ArrowUpRight
                  className="service-row__arrow"
                  size={22}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Método */}
      <section className="section">
        <div className="shell">
          <div className="philosophy">
            <div className="media philosophy__figure reveal">
              <Image
                src="/images/patio-atomo-03.jpg"
                alt="Interior de Patio Átomo con madera, vegetación y luz natural"
                fill
                sizes="(min-width: 800px) 42vw, 100vw"
                quality={82}
                style={{ objectPosition: "center" }}
              />
            </div>

            <div>
              <p className="eyebrow text-muted">04 / Método</p>
              <h2 className="headline-lg mt-6 reveal">Escuchar antes de dibujar.</h2>
              <p className="body-lg mt-6 reveal">
                No partimos de un estilo. Partimos de una conversación, de un
                lugar y de una forma de vivir. La metodología ordena esa
                información hasta convertirla en decisiones construibles.
              </p>
              <blockquote className="philosophy__quote reveal">
                <p className="headline-md">
                  “La luz natural, la materialidad honesta y la proporción son
                  nuestras herramientas.”
                </p>
                <footer className="eyebrow mt-4 text-muted">
                  {SITE.name} — Filosofía de estudio
                </footer>
              </blockquote>
            </div>
          </div>

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

      {/* 05 — Contacto */}
      <section className="cta-band">
        <div className="cta-band__image">
          <Image
            src="/images/marea-baja-02.jpg"
            alt="Salón de Marea Baja con grandes ventanales y materiales cálidos"
            fill
            sizes="100vw"
            quality={82}
          />
        </div>
        <div className="shell cta-band__content">
          <p className="eyebrow text-paper-light/60">05 / Contacto</p>
          <h2 className="headline-lg mt-5">Tu espacio también puede empezar con una línea.</h2>
          <p className="body-base">
            Cuéntanos qué tienes en mente. Definiremos el alcance, el punto de
            partida y el siguiente trazo.
          </p>
          <div className="cta-band__actions">
            <Link href="/contacto" className="btn btn--light">
              Contar mi proyecto
              <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </Link>
            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-light"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
