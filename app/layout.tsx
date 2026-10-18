import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s · ATELIER NÓRDEN",
    default: SITE.name,
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
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    locale: "es_ES",
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
  themeColor: "#1a1a1a",
};

function NavigationFallback() {
  return (
    <nav className="sticky top-0 z-50 border-b border-stone-soft bg-warm-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link href="/" className="text-display text-xl font-bold tracking-tight text-charcoal">
          ATELIER NÓRDEN
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-charcoal transition-colors">Inicio</Link>
          <Link href="/proyectos" className="hover:text-charcoal transition-colors">Proyectos</Link>
          <Link href="/estudio" className="hover:text-charcoal transition-colors">Estudio</Link>
          <Link href="/servicios" className="hover:text-charcoal transition-colors">Servicios</Link>
          <Link href="/contacto" className="hover:text-charcoal transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="min-h-full flex flex-col text-charcoal antialiased">
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido principal
        </a>
        <Suspense fallback={<NavigationFallback />}>
          <Navigation />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        {SITE.whatsapp && <WhatsAppButton />}
      </body>
    </html>
  );
}
