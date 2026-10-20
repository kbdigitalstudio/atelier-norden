import { cn } from "@/lib/utils";

interface PlanFragmentProps {
  className?: string;
}

/**
 * Fragmento de planta dibujado a línea. Es decorativo y refuerza el concepto
 * "del trazo al espacio" sin depender de imágenes adicionales.
 */
export function PlanFragment({ className }: PlanFragmentProps) {
  return (
    <svg
      viewBox="0 0 320 236"
      className={cn("plan-fragment", className)}
      fill="none"
      aria-hidden="true"
    >
      <path d="M38 188V52H146V30H282V154H240V188H178V206H120V188Z" />
      <path className="accent" d="M146 52V30H282V154H240V188H178V206" />
      <path d="M146 52V112M146 188V206M200 30V154M240 154V188" opacity=".55" />
      <path d="M38 112H120M164 112H200M222 112H240" opacity=".55" />
      <path d="M200 154H282" opacity=".55" />
      <path d="M156 118H214V162H156Z" />
      <path d="M156 118L214 162M214 118L156 162" opacity=".35" />
      <path d="M86 112V148H124V112" />
      <path d="M200 62H258V96H200Z" />
      <path d="M200 79H258M229 62V96" opacity=".45" />
      <path d="M146 18H282M146 12V24M282 12V24" opacity=".7" />
      <path d="M26 52V188M20 52H32M20 188H32" opacity=".55" />
      <path d="M48 200H92M48 197V203M92 197V203" opacity=".4" />
      <path d="M146 44L136 52L146 60" opacity=".5" />
      <text x="62" y="176">
        ESTAR
      </text>
      <text x="220" y="146">
        PATIO
      </text>
      <text x="210" y="112">
        COCINA
      </text>
      <text x="150" y="205" className="accent">
        PLANTA · E 1:100
      </text>
    </svg>
  );
}
