import type { Metadata } from "next";
import { ContactForm, ContactInfo } from "@/components/contact-form";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos para hablar de tu proyecto de arquitectura, interiorismo o remodelación con ATELIER NÓRDEN.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto · ATELIER NÓRDEN",
    description:
      "Cuéntanos qué tienes en mente. Definiremos el alcance y el punto de partida.",
    type: "website",
    url: "/contacto",
  },
};

const ACTION = "/api/contacto";

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow text-muted">05 / Contacto</p>
              <h1 className="headline-xl page-hero__title mt-6">
                Empecemos por una conversación.
              </h1>
            </div>
            <div className="page-hero__intro">
              <p className="body-lg">
                Cuéntanos qué tienes en mente: un terreno, una casa que necesita
                otra mirada, un local por transformar. Definiremos juntos el
                alcance y el siguiente paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow text-muted">Canales directos</p>
              <div className="mt-6">
                <ContactInfo />
              </div>

              <div className="mt-10 border-t border-line pt-5">
                <p className="eyebrow text-muted">Nota</p>
                <p className="body-base mt-3 text-sm">
                  ATELIER NÓRDEN es un proyecto de portafolio de KB Digital
                  Studio. Los datos de contacto y los proyectos son parte de una
                  demostración conceptual.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow text-muted">Formulario</p>
              <h2 className="headline-md mt-4">Cuéntanos qué tienes en mente.</h2>
              <p className="body-base mt-3 mb-8 max-w-xl">
                Los campos marcados con asterisco son obligatorios. Si prefieres,
                puedes escribirnos directamente por correo, teléfono o WhatsApp.
              </p>
              <ContactForm action={ACTION} />
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
