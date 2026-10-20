import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GalleryImage } from "@/components/image-gallery";
import { JsonLd } from "@/components/json-ld";
import {
  PROJECTS,
  SITE,
  categoryLabel,
  formatBudgetCOP,
  type Project,
} from "@/lib/data";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: project.title,
    description: project.concept,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} · ATELIER NÓRDEN`,
      description: project.concept,
      type: "website",
      url: `/proyectos/${project.slug}`,
      images: [
        {
          url: project.cover,
          width: 1600,
          height: 1067,
          alt: project.coverAlt,
        },
      ],
    },
  };
}

function budgetLabel(project: Project): string {
  if (project.budget?.min === undefined || project.budget.max === undefined) {
    return "Por definir";
  }

  return `${formatBudgetCOP(project.budget.min)} – ${formatBudgetCOP(project.budget.max)}`;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((item) => item.slug === slug);
  const project = PROJECTS[index];

  if (!project) notFound();

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const category = categoryLabel(project.category);

  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Proyectos", url: "/proyectos" },
    { name: project.title, url: `/proyectos/${project.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={projectJsonLd(project)} />

      <article>
        <header className="project-hero">
          <div className="project-hero__image">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              priority
              sizes="100vw"
              quality={85}
              style={{ objectPosition: project.coverObjectPosition ?? "center" }}
            />
          </div>

          <div className="shell project-hero__content">
            <nav aria-label="Ruta de navegación">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/proyectos">Proyectos</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span aria-current="page">{project.title}</span>
                </li>
              </ol>
            </nav>

            <p className="eyebrow mt-8 text-paper-light/65">
              {category} <span className="opacity-50">·</span> Proyecto conceptual
            </p>
            <h1 className="headline-xl project-hero__title">{project.title}</h1>

            <div className="project-hero__meta">
              <span>{project.location}</span>
              <span>{project.surface}</span>
              <span>{budgetLabel(project)}</span>
            </div>
          </div>
        </header>

        <div className="shell">
          <dl className="meta-strip">
            <div className="meta-strip__item">
              <dt>Ubicación</dt>
              <dd>{project.location}</dd>
            </div>
            <div className="meta-strip__item">
              <dt>Superficie</dt>
              <dd>{project.surface}</dd>
            </div>
            <div className="meta-strip__item">
              <dt>Categoría</dt>
              <dd>{category}</dd>
            </div>
            <div className="meta-strip__item">
              <dt>Estado</dt>
              <dd>Ejercicio conceptual</dd>
            </div>
            <div className="meta-strip__item">
              <dt>Presupuesto estimado</dt>
              <dd>{budgetLabel(project)}</dd>
            </div>
          </dl>
        </div>

        <section className="section" aria-labelledby="concepto-title">
          <div className="shell">
            <div className="project-narrative">
              <div className="project-narrative__label">
                <p className="eyebrow text-muted">01 / Concepto</p>
                <h2 id="concepto-title" className="headline-md mt-4">
                  {project.concept}
                </h2>
              </div>

              <div>
                <p className="body-lg">{project.description}</p>

                <div className="mt-10 border-t border-line pt-6">
                  <h3 className="eyebrow text-muted">Materiales</h3>
                  <ul className="materials-list mt-4">
                    {project.materials.map((material) => (
                      <li key={material} className="material-tag">
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.budget?.note && (
                  <p className="body-base mt-8 max-w-xl text-sm">
                    {project.budget.note} El importe es orientativo y forma
                    parte del ejercicio conceptual.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-0" aria-label={`Galería de ${project.title}`}>
          <div className="shell">
            <div className="project-gallery">
              {project.images.map((image, imageIndex) => (
                <GalleryImage
                  key={image.url}
                  image={image}
                  index={imageIndex}
                  sizes={
                    imageIndex === 1
                      ? "(min-width: 800px) 30vw, 100vw"
                      : "(min-width: 800px) 60vw, 100vw"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tight">
          <div className="shell">
            <div className="border-t border-line pt-8">
              <p className="eyebrow text-muted">Nota de proyecto</p>
              <p className="body-base mt-4 max-w-3xl text-sm">{SITE.disclaimer}</p>
              <p className="body-base mt-2 max-w-3xl text-sm">
                Las imágenes son fotografías de referencia provenientes de
                Unsplash y se acreditan en cada vista.
              </p>
            </div>
          </div>
        </section>

        <nav className="shell" aria-label="Siguiente proyecto">
          <Link href={`/proyectos/${nextProject.slug}`} className="next-project">
            <div className="media next-project__image">
              <Image
                src={nextProject.cover}
                alt={nextProject.coverAlt}
                fill
                sizes="(min-width: 800px) 42vw, 100vw"
                quality={80}
                style={{ objectPosition: nextProject.coverObjectPosition ?? "center" }}
              />
            </div>
            <div>
              <p className="eyebrow text-muted">Siguiente proyecto</p>
              <h2 className="headline-lg next-project__title mt-4">
                {nextProject.title}
              </h2>
              <p className="body-base mt-4 max-w-xl">{nextProject.concept}</p>
              <span className="link-line eyebrow mt-6">
                Ver proyecto
                <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </nav>

        <div className="shell pb-16">
          <Link
            href="/proyectos"
            className="link-line eyebrow text-muted"
          >
            <ArrowLeft size={14} strokeWidth={1.6} aria-hidden="true" />
            Volver a todos los proyectos
          </Link>
        </div>
      </article>
    </>
  );
}
