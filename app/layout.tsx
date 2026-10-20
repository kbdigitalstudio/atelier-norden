import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Intro } from "@/components/intro";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s · ATELIER NÓRDEN",
    default: "ATELIER NÓRDEN · Arquitectura y espacio",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    type: "website",
    url: SITE.url,
    images: [
      {
        url: SITE.ogImage,
        width: 2000,
        height: 1333,
        alt: "Vivienda contemporánea de volúmenes limpios entre árboles",
      },
    ],
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe6",
};

const introPreferenceScript = `
(function () {
  try {
    var seen = sessionStorage.getItem("an-intro-seen");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      document.documentElement.setAttribute("data-intro", "skip");
    } else {
      document.documentElement.setAttribute("data-intro", "play");
      // Si React no llega a hidratar, la intro ya se ocultó por CSS a los 3,9 s.
      // Este respaldo devuelve el scroll y evita que la portada quede bloqueada.
      window.setTimeout(function () {
        try { sessionStorage.setItem("an-intro-seen", "1"); } catch (error) {}
        document.documentElement.setAttribute("data-intro", "skip");
        if (document.body) document.body.classList.remove("intro-lock");
      }, 4400);
    }
  } catch (error) {
    document.documentElement.setAttribute("data-intro", "skip");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introPreferenceScript }} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body>
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido principal
        </a>
        <Intro />
        <Navigation />
        <main id="contenido-principal" tabIndex={-1} className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
