# ATELIER NÓRDEN

Sitio editorial de arquitectura y diseño de interiores. Proyecto de portafolio
desarrollado para **KB Digital Studio** con Next.js 16, React 19 y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

El sitio se sirve por defecto en `http://localhost:3000`.

## Dirección visual

Sistema **“Del trazo al espacio”**: papel mineral, grafito, piedra, arena y un
acento óxido. Tipografías Fraunces (display), Manrope (texto) e IBM Plex Mono
(etiquetas técnicas). La retícula, las líneas de plano y los índices numéricos
se usan como estructura, no como decoración.

Tokens principales en `app/globals.css`:

- `--color-paper` `#f3efe6`
- `--color-graphite` `#171917`
- `--color-line` `#d3cabb`
- `--color-sand` `#c6b29a`
- `--color-oxide` `#985038`

## Rutas

- `/` — portada, manifiesto, proyectos destacados, servicios y método.
- `/proyectos` — índice filtrable por categoría.
- `/proyectos/casa-luna`
- `/proyectos/luz-de-marea`
- `/proyectos/patio-atomo`
- `/proyectos/marea-baja`
- `/estudio`
- `/servicios`
- `/contacto`
- `/privacidad`

Los slugs de proyecto se conservan y cualquier cambio debe actualizar enlaces,
sitemap, JSON-LD y el pie de página.

## Intro de portada

La intro de 4 segundos se renderiza en servidor y se anima con CSS. El script
inline de `app/layout.tsx` decide antes del primer pintado si debe mostrarse:

- se muestra una vez por sesión (`sessionStorage`, clave `an-intro-seen`);
- se omite con `prefers-reduced-motion: reduce`;
- se puede saltar con el botón visible o con `Escape` (foco contenido);
- el overlay se retira solo al terminar la animación, incluso sin hidratación;
- el contenido de la portada sigue siendo visible si JavaScript falla.

## Contenido y datos provisionales

Este sitio es una **demostración conceptual**. No debe presentarse como una
obra construida ni como un estudio con clientes reales.

- Los cuatro proyectos, sus superficies, ubicaciones y presupuestos estimados
  son ejercicios de portafolio.
- Los nombres y roles del equipo forman parte del mismo ejercicio conceptual.
- Los datos de contacto (`SITE` en `lib/data.ts`) provienen de la información
  disponible en el proyecto. Conviene verificarlos antes de un uso comercial.
- No se publica un enlace de Instagram porque no se ha verificado una cuenta
  activa del estudio.
- Las fotografías son de Unsplash y se acreditan en la interfaz. No representan
  los proyectos descritos.
- El formulario de contacto es una demostración: valida en cliente y servidor,
  pero no almacena ni reenvía mensajes.

Antes de publicar contenido definitivo, revisar `lib/data.ts`, el texto legal de
`app/privacidad/page.tsx` y los datos estructurados de `lib/structured-data.ts`.

## Imágenes

Todas las imágenes viven en `public/images/` y se sirven con `next/image`. El
hero y las portadas de proyecto usan 1600 px de ancho; las calidades permitidas
se declaran en `next.config.ts` (`75`, `82`, `85`).
