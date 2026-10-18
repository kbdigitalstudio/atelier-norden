import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/scroll-reveal";
import { SectionTitle } from "@/components/section-title";
import { STUDIO_SECTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Estudio",
  description: "Filosofía, equipo y metodología de ATELIER NÓRDEN.",
  openGraph: {
    title: "Estudio · ATELIER NÓRDEN",
    description: "Conoce nuestra filosofía, equipo y metodología de trabajo.",
    type: "website",
  },
};

export default function EstudioPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          <Reveal className="mb-16 md:mb-24">
            <SectionTitle
              title="Nuestra filosofía"
              subtitle={STUDIO_SECTIONS.philosophyText}
            />
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-display text-3xl md:text-4xl font-normal text-charcoal leading-tight tracking-tighter mb-8">
              Metodología de trabajo
            </h2>
            <div className="grid md:grid-cols-2 gap-8 stagger">
              {STUDIO_SECTIONS.methodologySteps.map((step, index) => (
                <Reveal key={step.title} delay={0.2 + index * 0.1} className="reveal">
                  <div className="p-8 rounded-lg border border-stone-soft bg-white shadow-sm">
                    <div className="inline-flex items-center justify-center size-10 rounded-full border border-charcoal mb-6 text-charcoal font-mono font-semibold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-display text-lg font-normal text-charcoal mb-3">{step.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-16 md:mt-20 rounded-lg border border-stone-soft bg-warm-white p-10 md:p-16">
              <h2 className="text-display text-3xl md:text-4xl font-normal text-charcoal leading-tight tracking-tighter mb-6">
                Equipo
              </h2>
              <p className="text-sm text-stone-600 max-w-lg mb-8">
                Un equipo pequeño y cohesionado. Cada proyecto lo lidera un director de proyecto desde el concepto hasta la entrega.
              </p>
              <div className="flex flex-col gap-4 stagger">
                {STUDIO_SECTIONS.team.map((member) => (
                  <div
                    key={member.name}
                    className="reveal flex items-center gap-4 p-4 rounded-lg border border-stone-soft bg-white hover:bg-stone-soft/50 transition-colors"
                  >
                    <div className="flex-shrink-0 size-10 rounded-full border border-charcoal flex items-center justify-center text-charcoal font-mono font-semibold text-sm">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal">{member.name}</h3>
                      <p className="text-xs text-stone-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.8} className="mt-16 md:mt-20 text-center">
            <p className="text-xs text-stone-400 tracking-widest uppercase uppercase">
              {STUDIO_SECTIONS.note}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="px-6 md:px-8 max-w-3xl mx-auto text-center">
          <Reveal className="mb-8">
            <h2 className="text-display text-3xl md:text-4xl font-normal text-white leading-tight tracking-tighter">
              ¿Hablamos de tu proyecto?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Escríbenos y cuéntanos qué necesitas. Responderemos a la brevedad.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none"
            >
              Ir al contacto
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
