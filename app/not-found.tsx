import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PlanFragment } from "@/components/plan-fragment";

export default function NotFound() {
  return (
    <section className="page-hero relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-30 lg:block"
        aria-hidden="true"
      >
        <PlanFragment />
      </div>

      <div className="shell relative">
        <p className="eyebrow text-oxide">Error 404</p>
        <p className="headline-xl mt-6 text-oxide">404</p>
        <h1 className="headline-lg mt-4 max-w-[16ch]">
          Esta línea no lleva a ningún espacio.
        </h1>
        <p className="body-lg mt-6 max-w-xl">
          La página que buscas no existe o cambió de lugar. Puedes volver al
          inicio o recorrer los proyectos.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/proyectos" className="btn btn--solid">
            Ver proyectos
            <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
          </Link>
          <Link href="/" className="btn btn--outline">
            <ArrowLeft size={15} strokeWidth={1.6} aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
