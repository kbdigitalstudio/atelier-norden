"use client";

import { useState, useCallback } from "react";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Componente que revela su contenido al hacer scroll.
 * El contenido es visible por defecto (sin depender de JavaScript).
 * Cuando JavaScript está disponible, aplica una animación de entrada sutil
 * al entrar al viewport. Respeta prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const [isEntering, setIsEntering] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Con reduced motion: mostrar inmediatamente, sin animar
    if (prefersReduced.matches) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsEntering(true);
          if (once) setHasEntered(true);
          observer.disconnect();
        } else if (!once) {
          setIsEntering(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      data-entering={isEntering || hasEntered ? "true" : undefined}
      style={{ transitionDelay: delay > 0 ? `${delay}s` : undefined }}
      className={`reveal ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
