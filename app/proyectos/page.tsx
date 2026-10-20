import type { Metadata } from "next";
import ProyectosPage from "./page-client";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Selección de proyectos conceptuales de arquitectura, interiorismo y remodelación de ATELIER NÓRDEN en Colombia.",
  alternates: {
    canonical: "/proyectos",
  },
  openGraph: {
    title: "Proyectos · ATELIER NÓRDEN",
    description:
      "Cuatro ejercicios conceptuales de vivienda, hostelería, interiorismo y remodelación.",
    type: "website",
    url: "/proyectos",
  },
};

export default function ProyectosPageWrapper() {
  return <ProyectosPage />;
}
