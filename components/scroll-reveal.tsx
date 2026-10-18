"use client";

import { useState, useCallback } from "react";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Componente que revela su contenido al entrar en el viewport.
 * Respeta prefers-reduced-motion (no anima si el usuario lo ha desactivado).
 */
export function Reveal({ children, className, delay = 0, once = true }: RevealProps) {
  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Con reduced motion: mostrar inmediatamente, sin animar
    if (prefersReduced.matches) {
      setInView(true);
      if (once) setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          if (once) setHasEntered(true);
          observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    transitionDelay: delay > 0 ? `${delay}s` : undefined,
  };

  return (
    <div
      ref={ref}
      style={style}
      data-entered={inView || hasEntered ? "true" : undefined}
      className={`reveal ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
