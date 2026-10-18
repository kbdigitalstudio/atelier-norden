import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/scroll-reveal";
import { SectionTitle } from "@/components/section-title";
import { GalleryImage } from "@/components/image-gallery";
import { JsonLd } from "@/components/json-ld";
import { PROJECTS, SITE } from "@/lib/data";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.title} · ATELIER NÓRDEN`,
    description: project.concept,
    openGraph: {
      title: `${project.title} · ATELIER NÓRDEN`,
      description: project.concept,
      type: "website",
      images: [{ url: project.cover, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((proj) => proj.slug === slug);
  if (!project) notFound();

  const categoryLabel =
    project.category === "vivienda"
      ? "Vivienda"
      : project.category === "comercial"
        ? "Comercial"
        : project.category === "interiorismo"
          ? "Interiorismo"
          : "Remodelación";

  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Proyectos", url: "/proyectos" },
    { name: project.title, url: `${SITE.url}/proyectos/${project.slug}` },
  ];

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={projectJsonLd(project)} />

      {/* Breadcrumb */}
      <nav
        aria-label="Ruta de navegación"
        className="px-6 md:px-8 py-4"
      >
        <ol className="flex flex-wrap gap-2 text-[11px] uppercase tracking-widest text-stone-500">
          <li>
            <Link
              href="/"
              className="text-sand-dark hover:text-charcoal transition-colors focus-visible:underline focus-visible:underline-offset-2"
            >
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link
              href="/proyectos"
              className="text-sand-dark hover:text-charcoal transition-colors focus-visible:underline focus-visible:underline-offset-2"
            >
              Proyectos
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="mx-1">/</span>
          </li>
          <li>
            <span
              className="text-charcoal font-medium"
              aria-current="page"
            >
              {project.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero del proyecto */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-charcoal"
        style={{
          backgroundImage: `url(${project.cover})`,
          backgroundSize: "cover",
          backgroundPosition: project.coverObjectPosition ?? "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 z-0 bg-charcoal/50" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.3) 40%, transparent 80%)",
          }}
        />

        <div className="relative z-10 px-6 md:px-8 py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-charcoal/60 backdrop-blur-sm rounded-full mb-4">
                {categoryLabel}
              </span>
              <h1 className="text-display text-4xl md:text-6xl font-normal text-white leading-tight tracking-tighter">
                {project.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 md:py-28 border-t border-stone-soft">
        <div className="px-6 md:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Columna principal: concepto y descripción */}
            <div className="lg:col-span-7">
              <Reveal>
                <SectionTitle
                  title="Concepto"
                  subtitle={project.concept}
                  className="mb-10"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-stone-700 leading-relaxed mb-8">
                  {project.description}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-lg border border-stone-soft bg-warm-white p-8">
                  <h3 className="text-display text-lg font-normal text-charcoal mb-4">Datos del proyecto</h3>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Ubicación</dt>
                      <dd className="text-charcoal">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Superficie</dt>
                      <dd className="text-charcoal">{project.surface}</dd>
                    </div>
                    <div>
                      <dt className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Categoría</dt>
                      <dd className="text-charcoal">{categoryLabel}</dd>
                    </div>
                    <div>
                      <dt className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Estado</dt>
                      <dd className="text-charcoal">Proyecto conceptual</dd>
                    </div>
                  </dl>
                  <div className="mt-8">
                    <h4 className="text-display text-sm font-normal text-charcoal mb-3">Materiales</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material) => (
                        <span
                          key={material}
                          className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-stone-soft text-xs text-charcoal bg-white"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Columna lateral: galería */}
            <div className="lg:col-span-5">
              <Reveal delay={0.3} className="space-y-6">
                <GalleryImage
                  src={project.cover}
                  alt={project.coverAlt}
                  credit={project.images[0]?.credit}
                  objectPosition={project.images[0]?.objectPosition ?? project.coverObjectPosition}
                />
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <GalleryImage
                      key={index}
                      src={image.url}
                      alt={image.alt}
                      credit={image.credit}
                      width={300}
                      height={220}
                      objectPosition={image.objectPosition}
                    />
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.5} className="mt-12 rounded-lg border border-stone-soft bg-charcoal p-8 text-white">
                <h3 className="text-display text-lg font-normal mb-4">Proyecto conceptual</h3>
                <p className="text-sm text-sand/80 leading-relaxed">
                  Este proyecto es un ejercicio de portafolio desarrollado para KB Digital Studio. No representa un
                  cliente real ni una obra ejecutada. Las fotografías provienen de Unsplash y se citan en cada imagen.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Volver a galería */}
      <section className="py-16 border-t border-stone-soft">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal underline underline-offset-4 hover:text-sand-dark transition-colors focus-visible:outline-none"
          >
            <span style={{ display: "inline-block", width: "16px", height: "1px", background: "currentColor" }} />
            Volver a la galería de proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}
