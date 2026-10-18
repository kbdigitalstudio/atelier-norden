import { SITE } from "@/lib/data";

function escapeForJsonLd(value: string): string {
  return value.replace(/<\/script>/g, "<\\/script>");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer del Rosselló 145",
      addressLocality: "Barcelona",
      addressRegion: "Catalunya",
      postalCode: "08008",
      addressCountry: "ES",
    },
    sameAs: SITE.instagram ? [SITE.instagram] : undefined,
    logo: SITE.ogImage,
    image: SITE.ogImage,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/proyectos`,
      "query-input": "required",
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
      item: item.url,
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
    url: `${SITE.url}/proyectos/${project.slug}`,
    image: project.cover,
    creator: {
      "@type": "Organization",
      name: SITE.name,
    },
    additionalType: "https://schema.org/ArchitecturalProject",
    comment:
      "Ejercicio conceptual de portafolio. No representa una obra ejecutada ni un cliente real.",
  };
}
