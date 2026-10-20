import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__image">
        <Image
          src="/images/hero-vivienda.jpg"
          alt="Vivienda contemporánea de volúmenes limpios y grandes ventanales, entre árboles"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__frame" aria-hidden="true" />

      <div className="shell hero__content">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              Estudio de arquitectura <span className="opacity-50">·</span> Colombia
            </p>

            <h1 id="hero-title" className="headline-xl">
              El espacio empieza
              <br />
              <span className="hero__accent italic">con una línea.</span>
            </h1>

            <p className="hero__lead">
              Arquitectura y diseño de interiores que trabajan con la luz, la
              materialidad y la medida de quienes habitan. Del primer trazo a la
              experiencia de estar.
            </p>

            <div className="hero__actions">
              <a href="#proyectos-destacados" className="btn btn--light">
                Ver proyectos
                <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
              </a>
              <Link href="/contacto" className="btn btn--outline-light">
                Hablemos de tu espacio
              </Link>
            </div>
          </div>

          <div className="hero__rail" aria-hidden="true">
            <div className="hero__rail-inner">
              <span className="hero__rail-line" />
              <div className="hero__rail-copy">
                <span>Del trazo</span>
                <span>al espacio</span>
                <span className="opacity-40">01 — 04</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__meta">
          <span>Vivienda · Comercial · Interiorismo</span>
          <span>{SITE.addressLocality} · {SITE.addressRegion}</span>
          <span>Fotografía: Unsplash</span>
        </div>
      </div>
    </section>
  );
}
