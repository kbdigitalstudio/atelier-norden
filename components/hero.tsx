import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "@/components/scroll-reveal";
import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden bg-charcoal"
      style={{
        backgroundImage: `url(${SITE.ogImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro base para legibilidad */}
      <div className="absolute inset-0 z-0 bg-charcoal/70" />

      {/* Gradiente de transición hacia la siguiente sección */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(26,26,26,0.6) 60%, rgba(26,26,26,0.9) 100%)",
        }}
      />

      {/* Banda editorial superior: descriptor del estudio */}
      <div className="relative z-20 px-6 md:px-8 pt-10 md:pt-16 pb-12 md:pb-20">
        <Reveal delay={0.05}>
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="inline-block px-3 py-1.5 rounded-full border border-sand/30 bg-charcoal/40 text-[10px] font-bold text-sand/70 uppercase tracking-widest backdrop-blur-sm mb-6 block">
              Estudio de arquitectura · Barcelona
            </span>

            <h1
              className="text-display text-3xl md:text-5xl font-normal text-white leading-tight tracking-tighter mb-6"
            >
              Diseñamos espacios.<br />
              <span className="text-sand/60 italic">Creamos experiencias.</span>
            </h1>

            <p className="text-lg md:text-xl text-sand/40 leading-relaxed max-w-lg mb-10">
              ATELIER NÓRDEN prioriza la materialidad honesta, la luz natural y la
              experiencia de quienes habitarán cada espacio.
            </p>

            <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-charcoal text-sm font-semibold shadow-lg hover:bg-stone-soft transition-colors focus-visible:outline-none"
              >
                Ver proyectos <ArrowRight size={18} strokeWidth={2} />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none"
              >
                <Play size={18} strokeWidth={2} />
                Contactar
              </Link>
            </Reveal>
          </div>
        </Reveal>
      </div>

      {/* Crédito de fotografía, alineado a la derecha inferior */}
      <Reveal delay={0.5}>
        <div className="relative z-20 px-6 md:px-8 pb-8 md:pb-12">
          <div className="max-w-2xl lg:max-w-3xl flex justify-end">
            <span className="text-[10px] font-medium text-sand/50 uppercase tracking-wider">
              Fotografía: Juan Verdaguer Aguerrebehere · Unsplash
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
