import Link from "next/link";
import { Camera } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-stone-soft bg-charcoal text-stone-soft py-12 md:py-16">
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-display text-lg font-bold text-white">ATELIER NÓRDEN</span>
            <span className="text-xs font-medium text-sand tracking-widest uppercase">portafolio</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-stone">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/proyectos" className="hover:text-white transition-colors">
              Proyectos
            </Link>
            <Link href="/estudio" className="hover:text-white transition-colors">
              Estudio
            </Link>
            <Link href="/servicios" className="hover:text-white transition-colors">
              Servicios
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center size-8 rounded-full border border-sand/40 hover:border-sand hover:text-white transition-colors"
            >
              <Camera size={16} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-12 border-t border-sand/20 pt-8 md:pt-10 text-xs text-sand/60 text-center md:text-left">
          {`${SITE.name} — Proyecto de portafolio para KB Digital Studio.`}<br />
          Los proyectos y contenidos son conceptuales y no representan clientes reales.
        </div>
      </div>
    </footer>
  );
}
