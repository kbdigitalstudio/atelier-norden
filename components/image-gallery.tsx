import { Reveal } from "@/components/scroll-reveal";

interface GalleryImageProps {
  src: string;
  alt: string;
  credit?: string;
  width?: number;
  height?: number;
  objectPosition?: string;
}

export function GalleryImage({
  src,
  alt,
  credit,
  width,
  height,
  objectPosition,
}: GalleryImageProps) {
  return (
    <Reveal className="relative overflow-hidden rounded-lg border border-stone-soft shadow-sm bg-stone-soft group">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: objectPosition ?? "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors duration-500" />
        {credit && (
          <div className="absolute bottom-2 left-2 z-10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/90 bg-black/50 backdrop-blur-sm rounded">
            {credit}
          </div>
        )}
      </div>
    </Reveal>
  );
}
