import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Sofa, RotateCcw, FileText } from "lucide-react";
import { Reveal } from "@/components/scroll-reveal";
import { SectionTitle } from "@/components/section-title";
import { Hero } from "@/components/hero";
import { PROJECTS, SITE, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
};

export default function Home() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />

      <section id="proyectos-destacados" className="py-20 md:py-28 border-t border-stone-soft">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 md:mb-20">
            <div>
              <h2 className="text-display text-3xl md:text-5xl font-normal text-charcoal leading-tight tracking-tighter mb-3">
                Proyectos destacados
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                Una selección de ejercicios conceptuales de vivienda, comercial, interiorismo y remodelación.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-soft text-sm font-medium text-charcoal hover:bg-charcoal hover:text-white transition-colors focus-visible:outline-none"
            >
              Ver galería completa <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {featured.map((project) => (
              <Reveal key={project.slug} className="reveal">
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="block relative overflow-hidden rounded-lg border border-stone-soft shadow-sm group"
                >
                  <div
                    className="relative aspect-[4/3] overflow-hidden group bg-stone-soft"
                    style={{
                      backgroundImage: `url(${project.cover})`,
                      backgroundSize: "cover",
                      backgroundPosition: project.coverObjectPosition ?? "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-charcoal/80 backdrop-blur-sm rounded-full">
                        {project.category === "vivienda"
                          ? "Vivienda"
                          : project.category === "comercial"
                            ? "Comercial"
                            : project.category === "interiorismo"
                              ? "Interiorismo"
                              : "Remodelación"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-display text-xl font-normal text-charcoal leading-tight mb-1 group-hover:text-sand-dark transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-stone-600">{project.location} · {project.surface}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-stone-soft">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-last lg:order-first">
              <SectionTitle
                title="Nuestros servicios"
                subtitle="Acompañamos cada proyecto desde la primera escucha hasta la ejecución final, con atención al detalle y a los materiales."
              />
            </div>
            <div className="grid grid-cols-1 gap-6 stagger">
              {SERVICES.map((service) => (
                <Reveal key={service.title} className="reveal">
                  <div className="p-6 rounded-lg border border-stone-soft bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-9 rounded-full border border-stone-soft flex items-center justify-center text-charcoal">
                        {service.icon === "Building2" && <Building2 size={18} strokeWidth={1.5} aria-hidden="true" />}
                        {service.icon === "Sofa" && <Sofa size={18} strokeWidth={1.5} aria-hidden="true" />}
                        {service.icon === "RotateCcw" && <RotateCcw size={18} strokeWidth={1.5} aria-hidden="true" />}
                        {service.icon === "FileText" && <FileText size={18} strokeWidth={1.5} aria-hidden="true" />}
                      </div>
                    </div>
                    <h3 className="text-display text-lg font-normal text-charcoal mb-2">{service.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="px-6 md:px-8 max-w-3xl mx-auto text-center">
          <Reveal className="mb-8">
            <h2 className="text-display text-3xl md:text-4xl font-normal text-charcoal leading-tight tracking-tighter">
              ¿Tienes un proyecto en mente?
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-full bg-charcoal text-white text-sm font-medium hover:bg-sand-dark transition-colors focus-visible:outline-none"
            >
              Escríbenos
            </Link>
            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-stone-soft text-sm font-medium text-charcoal hover:bg-stone-soft transition-colors focus-visible:outline-none"
              >
                WhatsApp
              </a>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
