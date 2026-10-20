import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PROJECTS, SITE } from "@/lib/data";

const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/estudio", label: "Estudio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/privacidad", label: "Privacidad" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <p className="site-footer__wordmark">ATELIER NÓRDEN</p>
            <p className="eyebrow mt-4 text-sand">Del trazo al espacio</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper-light/60">
              {SITE.tagline} Arquitectura, interiorismo y remodelación desde
              Villavicencio, Colombia.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-flex items-center gap-2 text-sm text-paper-light/80 transition-colors hover:text-paper-light"
            >
              {SITE.email}
              <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>

          <div className="site-footer__columns">
            <div>
              <h2 className="site-footer__heading">Navegación</h2>
              <nav className="site-footer__links" aria-label="Navegación del pie de página">
                {FOOTER_LINKS.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="site-footer__heading">Proyectos</h2>
              <nav className="site-footer__links" aria-label="Proyectos">
                {PROJECTS.map((project) => (
                  <Link key={project.slug} href={`/proyectos/${project.slug}`}>
                    {project.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="site-footer__heading">Estudio</h2>
              <address className="site-footer__links not-italic">
                <span>{SITE.address}</span>
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                {SITE.whatsapp && (
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
              </address>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 {SITE.name}</span>
          <span className="max-w-xl normal-case tracking-normal">
            {SITE.disclaimer}
          </span>
          <a href="#contenido-principal" className="inline-flex items-center gap-2">
            Volver arriba
            <ArrowUp size={12} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
