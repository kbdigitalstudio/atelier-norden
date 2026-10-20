export default function ProjectDetailLoading() {
  return (
    <section
      className="project-hero"
      aria-busy="true"
      aria-live="polite"
      aria-label="Cargando proyecto"
    >
      <div className="shell project-hero__content">
        <p className="sr-only">Cargando el proyecto…</p>
        <div className="skeleton h-3 w-48" />
        <div className="skeleton mt-8 h-3 w-32" />
        <div className="skeleton mt-6 h-16 w-3/4 max-w-2xl" />
        <div className="skeleton mt-5 h-3 w-64" />
      </div>
    </section>
  );
}
