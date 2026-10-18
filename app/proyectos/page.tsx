import { Metadata } from "next";
import ProyectosPage from "./page-client";

export const metadata: Metadata = {
  title: "Proyectos · ATELIER NÓRDEN",
  description: "Galería de proyectos de ATELIER NÓRDEN: arquitectura contemporánea en Colombia. Vivienda, comercial, interiorismo y remodelación.",
  openGraph: {
    title: "Proyectos · ATELIER NÓRDEN",
    description: "Galería de proyectos de arquitectura y diseño de interiores en Colombia.",
    type: "website",
  },
};

export default function ProyectosPageWrapper() {
  return <ProyectosPage />;
}
