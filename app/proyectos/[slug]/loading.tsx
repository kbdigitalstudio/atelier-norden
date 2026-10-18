import Link from "next/link";

export default function ProjectDetailLoading() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0 bg-charcoal/70" />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.4) 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-8 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            {/* Esqueleto de categoría */}
            <div
              className="h-8 w-24 rounded-full bg-charcoal/40 pulse-slow"
              style={{ width: "24%" }}
            />
            {/* Esqueleto de título */}
            <div className="h-[3rem] md:h-[4rem] w-3/4 bg-charcoal/40 pulse-slow rounded" />
            {/* Esqueleto de subtítulo */}
            <div className="h-6 w-1/3 bg-charcoal/30 pulse-slow rounded" />
          </div>
        </div>
      </div>

      <nav
        aria-label="Ruta de navegación"
        className="px-6 md:px-8 py-4"
      >
        <ol className="flex flex-wrap gap-2 text-[11px] uppercase tracking-widest text-stone-500">
          <li>
            <Link
              href="/"
              className="text-sand-dark hover:text-charcoal transition-colors focus-visible:underline focus-visible:underline-offset-2"
            >
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link
              href="/proyectos"
              className="text-sand-dark hover:text-charcoal transition-colors focus-visible:underline focus-visible:underline-offset-2"
            >
              Proyectos
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="mx-1">/</span>
          </li>
          <li>
            <span className="h-5 w-32 rounded bg-charcoal/40 pulse-slow" />
          </li>
        </ol>
      </nav>
    </section>
  );
}
