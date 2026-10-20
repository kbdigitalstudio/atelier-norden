"use client";

import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

export default function ProjectDetailError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow text-oxide">Proyecto no disponible</p>
        <h1 className="headline-lg mt-6 max-w-[18ch]">
          No pudimos cargar este proyecto.
        </h1>
        <p className="body-lg mt-6 max-w-xl">
          Puede tratarse de un problema temporal. Vuelve a intentarlo o regresa a
          la galería para seguir explorando.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn btn--solid">
            <RotateCcw size={15} strokeWidth={1.6} aria-hidden="true" />
            Intentar de nuevo
          </button>
          <Link href="/proyectos" className="btn btn--outline">
            <ArrowLeft size={15} strokeWidth={1.6} aria-hidden="true" />
            Volver a proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
