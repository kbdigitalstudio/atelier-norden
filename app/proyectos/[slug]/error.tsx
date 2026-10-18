"use client";

import { ArrowLeft } from "lucide-react";

export default function ProjectDetailError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-8 py-20 md:py-28 text-center bg-charcoal">
      <div className="max-w-md">
        <div className="inline-flex items-center justify-center size-12 rounded-full border border-stone-soft bg-warm-white text-charcoal mb-6">
          <ArrowLeft size={20} strokeWidth={2} />
        </div>

        <h1
          className="text-display text-3xl md:text-4xl font-normal text-charcoal leading-tight tracking-tighter mb-4"
        >
          Proyecto no disponible
        </h1>

        <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg mx-auto">
          No se pudo cargar la información de este proyecto. Inténtalo de nuevo más tarde.
        </p>

        <button
          onClick={() => {
            reset();
          }}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-charcoal text-white text-sm font-medium hover:bg-sand-dark transition-colors focus-visible:outline-none"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Volver a la galería
        </button>
      </div>
    </section>
  );
}
