import { cn } from "@/lib/utils";

interface SectionHeadProps {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Cabecera editorial reutilizable: índice técnico, título de gran escala y
 * una entradilla opcional. La composición asimétrica mantiene el ritmo de
 * plano arquitectónico en todo el sitio.
 */
export function SectionHead({
  index,
  label,
  title,
  intro,
  action,
  className,
}: SectionHeadProps) {
  return (
    <header className={cn("section-head", className)}>
      <div className="section-head__aside">
        <p className="eyebrow text-muted">
          {index} <span className="mx-1 opacity-50">/</span> {label}
        </p>
        {action}
      </div>
      <div className="section-head__title">
        <h2 className="headline-lg text-balance">{title}</h2>
        {intro && <div className="body-lg mt-6 max-w-2xl text-pretty">{intro}</div>}
      </div>
    </header>
  );
}
