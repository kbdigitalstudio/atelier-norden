import { SITE } from "@/lib/data";

function absolute(path: string): string {
  return new URL(path, SITE.url).toString();
}

function escapeForJsonLd(value: string): string {
  return value.replace(/<\/script>/g, "<\\/script>");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absolute("/")}#organization`,
    name: SITE.name,
    description: SITE.description,
    url: absolute("/"),
    email: SITE.email,
    telephone: SITE.phoneHref,
    image: absolute(SITE.ogImage),
    logo: absolute(SITE.ogImage),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrera 11 Este 10-28 Sur, Villa Melida",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    knowsLanguage: ["es-CO"],
    sameAs: SITE.instagram ? [SITE.instagram] : undefined,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absolute("/"),
    description: SITE.description,
    inLanguage: "es-CO",
    publisher: {
      "@id": `${absolute("/")}#organization`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: escapeForJsonLd(item.name),
      item: absolute(item.url),
    })),
  };
}

export function projectJsonLd(project: {
  title: string;
  concept: string;
  slug: string;
  cover: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: escapeForJsonLd(project.title),
    description: escapeForJsonLd(project.concept),
    url: absolute(`/proyectos/${project.slug}`),
    image: absolute(project.cover),
    creator: {
      "@id": `${absolute("/")}#organization`,
    },
    additionalType: "https://schema.org/ArchitecturalProject",
    comment:
      "Ejercicio conceptual de portafolio. No representa una obra ejecutada ni un cliente real.",
  };
}
