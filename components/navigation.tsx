"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/estudio", label: "Estudio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  // Clic fuera para cerrar el menú móvil
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-stone-soft bg-warm-white/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
          <Link
            href="/"
            className="text-display text-xl font-bold tracking-tight text-charcoal"
            aria-label="ATELIER NÓRDEN — inicio"
          >
            ATELIER NÓRDEN
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-sand-dark",
                  pathname === link.href ? "text-charcoal font-semibold" : "text-stone-600",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              ref={menuRef}
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Abrir menú"
              className="inline-flex items-center justify-center p-2 text-charcoal hover:text-sand-dark focus-visible:outline-none transition-colors"
            >
              {open ? (
                <X size={22} strokeWidth={2} />
              ) : (
                <Menu size={22} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col bg-warm-white"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-soft">
            <h2 id="mobile-menu-title" className="sr-only">
              Menú de navegación
            </h2>
            <button
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="inline-flex items-center justify-center p-2 text-charcoal hover:text-sand-dark focus-visible:outline-none transition-colors"
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "block px-4 py-3 text-base font-medium transition-colors rounded-md",
                      isActive
                        ? "bg-stone-soft text-charcoal"
                        : "text-stone-600 hover:bg-stone-soft hover:text-charcoal",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 border-t border-stone-soft pt-6 space-y-3">
              <a
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-base font-medium text-charcoal hover:bg-stone-soft rounded-md transition-colors"
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href="/contacto"
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium text-stone-dark border border-sand rounded-md hover:bg-stone-soft transition-colors"
              >
                Formulario de contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
