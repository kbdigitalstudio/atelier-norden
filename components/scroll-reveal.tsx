import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * El revelado se resuelve con animaciones ligadas al scroll (CSS). Si el
 * navegador no las admite o la persona prefiere movimiento reducido, el
 * contenido permanece visible: nunca se oculta por defecto.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
