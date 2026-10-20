import Image from "next/image";
import type { ProjectImage } from "@/lib/data";

interface GalleryImageProps {
  image: ProjectImage;
  index: number;
  sizes?: string;
}

export function GalleryImage({
  image,
  index,
  sizes = "(min-width: 800px) 55vw, 100vw",
}: GalleryImageProps) {
  return (
    <figure className="project-gallery__figure reveal">
      <div className="media project-gallery__media">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes={sizes}
          quality={82}
          style={{ objectPosition: image.objectPosition ?? "center" }}
        />
      </div>
      <figcaption className="project-gallery__caption">
        <span>Vista {String(index + 1).padStart(2, "0")}</span>
        {image.credit && <span>Fotografía · {image.credit}</span>}
      </figcaption>
    </figure>
  );
}
