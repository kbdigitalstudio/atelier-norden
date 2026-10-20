"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/estudio", label: "Estudio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = menuPath === pathname;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const unlockScroll = useCallback(() => {
    document.body.classList.remove("menu-open");
  }, []);

  const closeForNavigation = useCallback(() => {
    setMenuPath(null);
    unlockScroll();
  }, [unlockScroll]);

  const closeMenu = useCallback(() => {
    setMenuPath(null);
    unlockScroll();
    // El foco vuelve al disparador solo cuando el cierre lo inicia la persona
    // (Escape o botón de cierre), no al navegar a otra página.
    // `preventScroll` evita que devolver el foco al header sticky arrastre la
    // página hacia arriba y destruya la posición que el scroll lock protegía.
    window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, [unlockScroll]);

  const openMenu = useCallback(() => {
    document.body.classList.add("menu-open");
    setMenuPath(pathname);
  }, [pathname]);

  // El panel se cierra al cambiar de ruta: `open` se deriva de la ruta actual.
  // `popstate` cubre el botón atrás del navegador sin setState en un efecto.
  useEffect(() => {
    const handlePopState = () => setMenuPath(null);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sombra/fondo del header al abandonar la portada.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueo de scroll, foco inicial y trampa de foco mientras el panel está abierto.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const body = document.body;
    const previousOverflow = body.style.overflow;

    body.classList.add("menu-open");
    body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(
      () => closeButtonRef.current?.focus({ preventScroll: true }),
      40,
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      body.classList.remove("menu-open");
      body.style.overflow = previousOverflow;
    };
  }, [open, closeMenu]);

  const isTransparent = pathname === "/" && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "site-header",
          isTransparent ? "site-header--transparent" : "site-header--solid",
        )}
      >
        <div className="shell site-header__inner">
          <Link href="/" className="wordmark" aria-label="ATELIER NÓRDEN — inicio">
            <span>ATELIER</span>
            <span className="wordmark__mark">NÓRDEN</span>
          </Link>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className="desktop-nav__link"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="/contacto"
              className={cn(
                "btn header-cta",
                isTransparent ? "btn--outline-light" : "btn--outline",
              )}
            >
              Hablemos
              <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </Link>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => (open ? closeMenu() : openMenu())}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              className="menu-trigger"
            >
              {open ? "Cerrar" : "Menú"}
              <span className="menu-trigger__lines" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="mobile-menu__top">
            <p id="mobile-menu-title" className="wordmark">
              <span>ATELIER</span>
              <span className="wordmark__mark">NÓRDEN</span>
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú de navegación"
              className="mobile-menu__close"
            >
              <X size={24} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <div className="mobile-menu__scroll">
            <nav aria-label="Navegación móvil">
              {NAV_LINKS.map((link, index) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeForNavigation}
                    aria-current={isActive ? "page" : undefined}
                    className="mobile-menu__link"
                  >
                    <span className="mobile-menu__index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mobile-menu__aside">
              <p className="eyebrow text-muted">Contacto directo</p>
              <div className="mt-4 grid gap-2 text-sm">
                <a href={`mailto:${SITE.email}`} className="link-line justify-self-start">
                  {SITE.email}
                </a>
                <a href={`tel:${SITE.phoneHref}`} className="link-line justify-self-start">
                  {SITE.phone}
                </a>
              </div>

              <div className="mobile-menu__utility">
                <Link href="/privacidad" onClick={closeForNavigation}>
                  Privacidad
                </Link>
                {SITE.whatsapp && (
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeForNavigation}
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
