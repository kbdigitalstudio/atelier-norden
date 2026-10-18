import { Metadata } from "next";
import { Reveal } from "@/components/scroll-reveal";
import { SectionTitle } from "@/components/section-title";
import { ContactForm, ContactInfo } from "@/components/contact-form";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con ATELIER NÓRDEN. Envíanos un mensaje sobre tu proyecto de arquitectura.",
  openGraph: {
    title: "Contacto · ATELIER NÓRDEN",
    description: "Envíanos un mensaje y cuéntanos sobre tu proyecto.",
    type: "website",
  },
};

const ACTION = "/api/contacto";

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="order-first lg:order-last">
              <Reveal className="mb-10 md:mb-14">
                <SectionTitle
                  title="Contacto"
                  subtitle="Escríbenos y cuéntanos sobre tu proyecto. Responderemos a la brevedad posible."
                />
              </Reveal>
              <Reveal delay={0.2}>
                <ContactForm action={ACTION} />
              </Reveal>
            </div>
            <div className="order-last lg:order-first">
              <Reveal delay={0.4}>
                <ContactInfo />
              </Reveal>
              <Reveal delay={0.7} className="mt-12 lg:mt-0 rounded-lg border border-stone-soft bg-warm-white p-8">
                <h3 className="text-display text-lg font-normal text-charcoal mb-4">Síguenos</h3>
                <p className="text-sm text-stone-600 mb-6">
                  Comparte nuestro trabajo y mantente al día de los nuevos proyectos.
                </p>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-sand-dark transition-colors focus-visible:outline-none"
                >
                  Instagram
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-stone-soft">
        <div className="px-6 md:px-8 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-xs text-stone-400 tracking-widest uppercase mb-6">
              Proyecto de portafolio · KB Digital Studio
            </p>
            <p className="text-sm text-stone-500">
              Este formulario es una demostración. Los datos no se almacenan ni se envían a ningún servidor real.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
