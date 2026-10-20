export const SITE = {
  name: "ATELIER NÓRDEN",
  tagline: "Diseñamos espacios. Creamos experiencias.",
  description:
    "Estudio de arquitectura y diseño de interiores especializado en espacios residenciales, comerciales y de interiorismo que priorizan la materialidad, la luz y la experiencia de habitar.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://atelier-norden.vercel.app",
  email: "KBdigitalstudio69@gmail.com",
  phone: "+57 323 709 4970",
  phoneHref: "+573237094970",
  address: "Carrera 11 Este 10-28 Sur, Villa Melida, Villavicencio, Colombia",
  addressLocality: "Villavicencio",
  addressRegion: "Meta",
  addressCountry: "CO",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573237094970",
  /**
   * No se ha verificado una cuenta de Instagram activa para el estudio.
   * Se deja vacío para no publicar un enlace provisional roto.
   */
  instagram: "",
  ogImage: "/images/hero-vivienda.jpg",
  photoCredit: "Unsplash",
  disclaimer:
    "Proyecto conceptual desarrollado como ejercicio de portafolio para KB Digital Studio. Los nombres, equipos y proyectos son ficticios y no representan clientes reales.",
} as const;

export type ProjectCategory = "vivienda" | "comercial" | "institucional" | "interiorismo" | "remodelacion";

export const PROJECT_CATEGORIES: Array<{ value: ProjectCategory; label: string }> = [
  { value: "vivienda", label: "Vivienda" },
  { value: "comercial", label: "Comercial" },
  { value: "interiorismo", label: "Interiorismo" },
  { value: "remodelacion", label: "Remodelación" },
  { value: "institucional", label: "Institucional" },
];

export function categoryLabel(category: ProjectCategory): string {
  return PROJECT_CATEGORIES.find((item) => item.value === category)?.label ?? "Proyecto";
}

export interface ProjectImage {
  url: string;
  alt: string;
  credit?: string;
  objectPosition?: string;
}

export interface ProjectBudget {
  min?: number;
  max?: number;
  type: "construccion" | "remodelacion" | "diseno";
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  surface: string;
  concept: string;
  description: string;
  materials: string[];
  images: ProjectImage[];
  cover: string;
  coverAlt: string;
  coverObjectPosition?: string;
  budget?: ProjectBudget;
  conceptual: true;
}

/**
 * Los cuatro proyectos y sus slugs se conservan. Las imágenes se alojan
 * localmente para evitar dependencias remotas y mantener el LCP estable.
 */
export const PROJECTS: Project[] = [
  {
    slug: "casa-luna",
    title: "Casa Luna",
    category: "vivienda",
    location: "Bogotá, Chapinero",
    surface: "210 m²",
    concept:
      "Una vivienda unifamiliar que dialoga con la luz del altiplano cundinamarqués. Volúmenes blancos, terrazas descubiertas y una materialidad de hormigón, madera y piedra de la región.",
    description:
      "Casa Luna se organiza como una secuencia de espacios que se abren a la vista de los cerros orientales y se protegen del viento. La planta baja alberga las áreas de día en un solo espacio fluido, mientras que la planta superior concentra los dormitorios en torno a un patio interior. La materialidad limitada —hormigón visto, piedra de la región y madera— busca envejecer con gracia y crear una atmósfera serena y atemporal.",
    materials: ["Hormigón visto", "Piedra de región", "Madera", "Vidrio"],
    cover: "/images/casa-luna-01.jpg",
    coverAlt: "Fachada de Casa Luna al atardecer, con volúmenes de hormigón y ladrillo",
    coverObjectPosition: "center 55%",
    images: [
      {
        url: "/images/casa-luna-01.jpg",
        alt: "Fachada de Casa Luna con pérgola y volúmenes escalonados",
        credit: "Unsplash",
        objectPosition: "center 55%",
      },
      {
        url: "/images/casa-luna-02.jpg",
        alt: "Salón de Casa Luna con ventanales y mobiliario neutro",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/casa-luna-03.jpg",
        alt: "Estancia de Casa Luna con luz natural y materiales cálidos",
        credit: "Unsplash",
        objectPosition: "center",
      },
    ],
    budget: {
      min: 180000000,
      max: 320000000,
      type: "construccion",
      note: "Presupuesto estimado de construcción para vivienda unifamiliar de 210 m² en Bogotá.",
    },
    conceptual: true,
  },
  {
    slug: "luz-de-marea",
    title: "Luz de Marea",
    category: "comercial",
    location: "Medellín, El Poblado",
    surface: "180 m²",
    concept:
      "Un espacio comercial de hostelería donde la madera y la piedra crean una atmósfera sobria, fresca y atemporal, inspirada en la arquitectura paisa.",
    description:
      "Reforma integral de un local comercial en planta baja de El Poblado. La propuesta parte de preservar la estructura original y superponer una intervención ligera de madera de roble y latón que define el mostrador y la iluminación. Los suelos de piedra y las mesas de madera crean un contraste cálido y sobrio, mientras que la vegetación en macetas de barro suaviza el espacio.",
    materials: ["Piedra natural", "Madera de roble", "Acero", "Latón"],
    cover: "/images/luz-de-marea-01.jpg",
    coverAlt: "Interior cálido de Luz de Marea con madera, plantas y luz natural",
    coverObjectPosition: "center 55%",
    images: [
      {
        url: "/images/luz-de-marea-01.jpg",
        alt: "Interior del café Luz de Marea con madera, plantas y luz cálida",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/luz-de-marea-02.jpg",
        alt: "Mesa junto al ventanal en Luz de Marea",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/luz-de-marea-03.jpg",
        alt: "Comedor de Luz de Marea con techos altos y materiales naturales",
        credit: "Unsplash",
        objectPosition: "center",
      },
    ],
    budget: {
      min: 95000000,
      max: 140000000,
      type: "remodelacion",
      note: "Presupuesto estimado de remodelación para local comercial de 180 m² en Medellín.",
    },
    conceptual: true,
  },
  {
    slug: "patio-atomo",
    title: "Patio Átomo",
    category: "interiorismo",
    location: "Cartagena, Getsemaní",
    surface: "95 m²",
    concept:
      "Interior de vivienda centrado en el patio central como corazón de la casa. Luz cenital, texturas de yeso y madera de mango.",
    description:
      "Reforma de interior de una vivienda en Getsemaní donde el patio central se convierte en el eje distributivo y emocional de la casa. Se abren nuevos huecos hacia el interior para que la luz cenital llegue a todas las estancias. Las paredes de yeso blanco, los suelos de madera de mango y los detalles de hierro y barro crean una atmósfera cálida y tranquila.",
    materials: ["Yeso blanco", "Madera de mango", "Hierro", "Barro"],
    cover: "/images/patio-atomo-01.jpg",
    coverAlt: "Salón de Patio Átomo con ventanal y vegetación interior",
    coverObjectPosition: "center 55%",
    images: [
      {
        url: "/images/patio-atomo-01.jpg",
        alt: "Salón de Patio Átomo con ventanal y vegetación interior",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/patio-atomo-02.jpg",
        alt: "Estancia de Patio Átomo con escalera y luz natural",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/patio-atomo-03.jpg",
        alt: "Comedor de Patio Átomo con madera y vistas al exterior",
        credit: "Unsplash",
        objectPosition: "center",
      },
    ],
    budget: {
      min: 65000000,
      max: 95000000,
      type: "remodelacion",
      note: "Presupuesto estimado de remodelación de interiores para vivienda de 95 m² en Cartagena.",
    },
    conceptual: true,
  },
  {
    slug: "marea-baja",
    title: "Marea Baja",
    category: "remodelacion",
    location: "Cali, San Antonio",
    surface: "140 m²",
    concept:
      "Remodelación integral de una vivienda de los años 70. Recuperación de piezas originales y nuevas aperturas hacia el interior.",
    description:
      "Remodelación de una vivienda de los años 70 en San Antonio que respeta y recupera el alma del edificio original. Se restauran los suelos hidráulicos y las piezas de madera, mientras que se abren nuevas aperturas hacia el patio interior para iluminar el distribuidor. El acero corten y la cal se introducen como materiales contemporáneos que dialogan con lo existente.",
    materials: ["Hidráulica restaurada", "Madera recuperada", "Cal", "Acero corten"],
    cover: "/images/marea-baja-01.jpg",
    coverAlt: "Dormitorio de Marea Baja con puertas negras y luz natural",
    coverObjectPosition: "center 55%",
    images: [
      {
        url: "/images/marea-baja-01.jpg",
        alt: "Dormitorio de Marea Baja con puertas negras y luz natural",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/marea-baja-02.jpg",
        alt: "Salón de Marea Baja con grandes ventanales y materiales cálidos",
        credit: "Unsplash",
        objectPosition: "center",
      },
      {
        url: "/images/marea-baja-03.jpg",
        alt: "Baño de Marea Baja con bañera exenta y luz cenital",
        credit: "Unsplash",
        objectPosition: "center",
      },
    ],
    budget: {
      min: 110000000,
      max: 190000000,
      type: "remodelacion",
      note: "Presupuesto estimado de remodelación para vivienda de 140 m² en Cali.",
    },
    conceptual: true,
  },
];

export const STUDIO_SECTIONS = {
  philosophyTitle: "Nuestra filosofía",
  philosophyText:
    "Creemos que la arquitectura no se mide en metros cuadrados, sino en la calidad de los momentos que alberga. Diseñamos espacios que respiran, que envejecen con gracia y que ponen a las personas en el centro. La luz natural, la materialidad honesta y la proporción son nuestras herramientas principales; el silencio y el orden, nuestro resultado deseado.",
  methodologyTitle: "Metodología",
  methodologySteps: [
    {
      title: "Escucha",
      text: "Entendemos tus necesidades, hábitos y el contexto del lugar antes de dibujar una sola línea.",
    },
    {
      title: "Concepto",
      text: "Definimos una idea guía que ordena el proyecto y le da coherencia desde la escala urbana hasta el detalle constructivo.",
    },
    {
      title: "Materialidad",
      text: "Seleccionamos materiales duraderos, honestos y de bajo mantenimiento que mejoren con el paso del tiempo.",
    },
    {
      title: "Ejecución",
      text: "Acompañamos la obra hasta el final, velando por que el proyecto construido coincida con el proyecto pensado.",
    },
  ],
  team: [
    { name: "Elena Martínez", role: "Directora de proyecto", initials: "EM" },
    { name: "Carlos Ruiz", role: "Arquitecto técnico", initials: "CR" },
    { name: "Lucía Navarro", role: "Interiorismo", initials: "LN" },
  ],
  note: SITE.disclaimer,
} as const;

export const SERVICES = [
  {
    title: "Diseño arquitectónico",
    description:
      "Proyectos de arquitectura residencial y comercial desde el concepto hasta la ejecución, con atención a la proporción, la luz y la materialidad.",
    icon: "Building2",
  },
  {
    title: "Interiorismo",
    description:
      "Diseño de interiores que prioriza la atmósfera, los materiales naturales y la funcionalidad de cada espacio.",
    icon: "Sofa",
  },
  {
    title: "Remodelaciones",
    description:
      "Intervenciones sobre edificios existentes que respetan la historia del lugar y le aportan una nueva vida.",
    icon: "RotateCcw",
  },
  {
    title: "Asesoría",
    description:
      "Acompañamiento en la elección de suelo, normativa, viabilidad técnica y definición de presupuesto antes de iniciar el proyecto.",
    icon: "FileText",
  },
] as const;

export const PROJECT_TYPE_OPTIONS = [
  { value: "vivienda", label: "Vivienda unifamiliar" },
  { value: "comercial", label: "Local comercial / hostelería" },
  { value: "interiorismo", label: "Interiorismo" },
  { value: "remodelacion", label: "Remodelación" },
  { value: "otro", label: "Otro" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "menos-50m", label: "Menos de $ 50.000.000 COP" },
  { value: "50m-150m", label: "$ 50.000.000 – 150.000.000 COP" },
  { value: "150m-300m", label: "$ 150.000.000 – 300.000.000 COP" },
  { value: "mas-300m", label: "Más de $ 300.000.000 COP" },
  { value: "sin-definir", label: "Aún sin definir" },
] as const;

/**
 * Formatea un monto en pesos colombianos usando Intl.NumberFormat.
 * Devuelve una cadena como "$ 180.000.000 COP".
 */
export function formatBudgetCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
