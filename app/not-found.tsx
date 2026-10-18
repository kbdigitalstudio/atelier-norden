import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl md:text-7xl font-normal text-charcoal leading-none tracking-tighter">
        404
      </h1>
      <p className="mt-6 text-lg text-stone-600">
        La página que buscas no existe.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block text-sm font-medium text-charcoal underline underline-offset-4 hover:text-sand-dark transition-colors"
      >
        <ArrowLeft className="inline -mr-1.5 size-4" aria-hidden="true" />
        Volver al inicio
      </Link>
    </main>
  );
}
