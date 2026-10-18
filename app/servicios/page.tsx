import { Metadata } from "next";
import { Building2, Sofa, RotateCcw, FileText } from "lucide-react";
import { Reveal } from "@/components/scroll-reveal";
import { SectionTitle } from "@/components/section-title";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Diseño arquitectónico, interiorismo, remodelaciones y asesoría de ATELIER NÓRDEN.",
  openGraph: {
    title: "Servicios · ATELIER NÓRDEN",
    description: "Diseño arquitectónico, interiorismo, remodelaciones y asesoría.",
    type: "website",
  },
};

export default function ServiciosPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          <Reveal className="mb-16 md:mb-24">
            <SectionTitle
              title="Servicios"
              subtitle="Acompañamos cada proyecto desde la primera escucha hasta la ejecución final, con atención al detalle y a los materiales."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
              {SERVICES.map((service) => (
                <div key={service.title} className="reveal p-10 rounded-lg border border-stone-soft bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-12 rounded-full border border-stone-soft flex items-center justify-center text-charcoal">
                      {service.icon === "Building2" && <Building2 size={20} strokeWidth={1.5} aria-hidden="true" />}
                      {service.icon === "Sofa" && <Sofa size={20} strokeWidth={1.5} aria-hidden="true" />}
                      {service.icon === "RotateCcw" && <RotateCcw size={20} strokeWidth={1.5} aria-hidden="true" />}
                      {service.icon === "FileText" && <FileText size={20} strokeWidth={1.5} aria-hidden="true" />}
                    </div>
                  </div>
                  <h3 className="text-display text-lg font-normal text-charcoal mb-3">{service.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.6} className="mt-16 md:mt-20 rounded-lg border border-stone-soft bg-warm-white p-10 md:p-16 text-center">
            <h3 className="text-display text-xl font-normal text-charcoal mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-sm text-stone-600 mb-6">
              Cada encargo es distinto. Cuéntanos tu idea y definiremos juntos el alcance del proyecto.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-stone-soft text-sm font-medium text-charcoal hover:bg-charcoal hover:text-white transition-colors focus-visible:outline-none"
            >
              Contactar
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
