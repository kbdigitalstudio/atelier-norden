export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className="text-display text-3xl md:text-5xl font-normal text-charcoal leading-tight tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone-600 leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
