import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/scroll-reveal";
import { SectionTitle } from "@/components/section-title";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacidad y tratamiento de datos",
  description: "Política de privacidad y tratamiento de datos de ATELIER NÓRDEN.",
  openGraph: {
    title: "Privacidad · ATELIER NÓRDEN",
    description: "Política de privacidad y tratamiento de datos personales.",
    type: "website",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 md:py-32 border-t border-stone-soft">
        <div className="px-6 md:px-8 max-w-3xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Privacidad y tratamiento de datos"
              subtitle="Información sobre cómo tratamos los datos personales que nos facilitas a través de esta web."
            />
          </Reveal>

          <Reveal delay={0.2} className="mt-12 md:mt-16 prose prose-sm text-stone-700 max-w-none">
            <p>
              ATELIER NÓRDEN (en adelante, «el Estudio») respeta tu privacidad y se compromete a proteger los datos
              personales que nos facilitas. Esta página es un proyecto de portafolio desarrollado para
              <strong>KB Digital Studio</strong>; los proyectos y contenidos son conceptuales y no representan clientes
              reales.
            </p>

            <h2>1. Responsable del tratamiento</h2>
            <p>
              Nombre: ATELIER NÓRDEN<br />
              Correo: {SITE.email}<br />
              Dirección: {SITE.address}
            </p>

            <h2>2. Finalidad del tratamiento</h2>
            <p>
              Los datos recopilados a través del formulario de contacto se utilizan exclusivamente para responder a tu
              consulta, gestionar la relación profesional y enviarte información relacionada con los servicios del Estudio,
              siempre que nos des tu consentimiento.
            </p>

            <h2>3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de tus datos es el consentimiento que nos prestas al rellenar el formulario
              de contacto o al escribirnos por correo electrónico o WhatsApp.
            </p>

            <h2>4. Destinatarios</h2>
            <p>
              Tus datos no se cederán a terceros salvo obligación legal. Este sitio no utiliza servicios de analítica ni
              cookies de terceros que recopilen datos personales.
            </p>

            <h2>5. Conservación</h2>
            <p>
              Los datos se conservarán mientras sea necesario para atender tu solicitud y, posteriormente, durante los
              plazos legalmente establecidos.
            </p>

            <h2>6. Derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición
              escribiendo a {SITE.email}. También tienes derecho a presentar una reclamación ante la autoridad de control
              competente.
            </p>

            <h2>7. Seguridad</h2>
            <p>
              Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos y evitar
              su alteración, pérdida o acceso no autorizado.
            </p>

            <p className="mt-8 text-xs text-stone-500">
              Proyecto de portafolio para KB Digital Studio. Contenido conceptual. Esta política es una demostración y no
              constituye asesoramiento legal.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-16 md:mt-20">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal underline underline-offset-4 hover:text-sand-dark transition-colors focus-visible:outline-none"
            >
              Volver al contacto
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
