export const SITE = {
  name: "ATELIER NÓRDEN",
  tagline: "Diseñamos espacios. Creamos experiencias.",
  description:
    "Estudio de arquitectura y diseño de interiores especializado en espacios residenciales, comerciales y de hospitalidad que priorizan la materialidad, la luz y la experiencia del usuario.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://atelier-norden.kbdigitalstudio.example",
  email: "hola@atelier-norden.example",
  phone: "+57 300 000 0000",
  address: "Cra. 7 # 72-21, Chapinero, Bogotá, Colombia",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  instagram: "https://www.instagram.com/atelier.norden.example",
  ogImage:
    "https://images.unsplash.com/photo-1633354747567-e0682586f082?q=80&w=1200&auto=format&fit=crop",
} as const;

export type ProjectCategory = "vivienda" | "comercial" | "institucional" | "interiorismo" | "remodelacion";

export const PROJECT_CATEGORIES: Array<{ value: ProjectCategory; label: string }> = [
  { value: "vivienda", label: "Vivienda" },
  { value: "comercial", label: "Comercial" },
  { value: "interiorismo", label: "Interiorismo" },
  { value: "remodelacion", label: "Remodelación" },
  { value: "institucional", label: "Institucional" },
];

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

export const PROJECTS: Project[] = [
  {
    slug: "casa-luna",
    title: "Casa Candela",
    category: "vivienda",
    location: "Bogotá, Chapinero",
    surface: "210 m²",
    concept:
      "Una vivienda unifamiliar que dialoga con la luz del altiplano cundinamarqués. Volúmenes blancos, terrazas descubiertas y materialidad en hormigón, guadua y piedra de la región.",
    description:
      "Proyecto de vivienda unifamiliar pensado como una secuencia de espacios que se abren a la vista de los cerros orientales y se protegen del viento. La planta baja alberga las áreas de día en un solo espacio fluido, mientras que la planta superior concentra los dormitorios en torno a un patio interior con guadua. La materialidad limitada —hormigón visto, piedra de región y guadua— busca envejecer con gracia y crear una atmósfera serena y atemporal.",
    materials: ["Hormigón visto", "Piedra de región", "Guadua", "Vidrio"],
    cover:
      "https://images.unsplash.com/photo-1633354747567-e0682586f082?q=80&w=1600&auto=format&fit=crop",
    coverAlt: "Vivienda unifamiliar con terrazas y guadua frente a los cerros orientales",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633354747567-e0682586f082?q=80&w=1600&auto=format&fit=crop",
        alt: "Fachada de Casa Candela con terrazas y guadua",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-719a280e022f?q=80&w=1600&auto=format&fit=crop",
        alt: "Interior de Casa Candela con líneas geométricas y luz natural",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
        alt: "Detalle interior de Casa Candela con guadua y luz",
        credit: "Unsplash",
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
    title: "Café Ámbar",
    category: "comercial",
    location: "Medellín, El Poblado",
    surface: "180 m²",
    concept:
      "Espacio comercial de hostelería donde el hormigón y la madera crean una atmósfera sobria, fresca y atemporal, inspirada en la arquitectura paisa.",
    description:
      "Reforma integral de un local comercial en planta baja de El Poblado. La propuesta parte de preservar la estructura original de hormigón y superponer una intervención ligera de madera de roble y latón que define el mostrador y la iluminación. Los suelos de hormigón pulido y las mesas de madera crean un contraste cálido y sobrio, mientras que la vegetación en macetas de barro suaviza el espacio.",
    materials: ["Hormigón pulido", "Madera de roble", "Acero", "Latón"],
    cover:
      "https://images.unsplash.com/photo-1464730282481-19bd52679224?q=80&w=1600&auto=format&fit=crop",
    coverAlt: "Interior comercial con estructura de hormigón y madera",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464730282481-19bd52679224?q=80&w=1600&auto=format&fit=crop",
        alt: "Espacio comercial Café Ámbar con hormigón visto",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1611619668988-9dd258b42ed3?q=80&w=1600&auto=format&fit=crop",
        alt: "Detalle de muro de hormigón en Café Ámbar",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1600&auto=format&fit=crop",
        alt: "Detalle arquitectónico sostenible del local",
        credit: "Unsplash",
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
    title: "Patio Colonial",
    category: "interiorismo",
    location: "Cartagena, Getsemaní",
    surface: "95 m²",
    concept:
      "Interior de vivienda centrado en el patio central como corazón de la casa. Luz cenital, texturas de yeso y madera de mango.",
    description:
      "Reforma de interior de una vivienda en Getsemaní donde el patio central se convierte en el eje distributivo y emocional de la casa. Se abren nuevos huecos hacia el interior para que la luz cenital llegue a todas las estancias. Las paredes de yeso blanco, los suelos de madera de mango y los detalles de hierro y barro crean una atmósfera cálida y tranquila.",
    materials: ["Yeso blanco", "Madera de mango", "Hierro", "Barro"],
    cover:
      "https://images.unsplash.com/photo-1768578927019-8be9eb339fb5?q=80&w=1600&auto=format&fit=crop",
    coverAlt: "Patio central con paredes de madera y escalera industrial",
    images: [
      {
        url: "https://images.unsplash.com/photo-1768578927019-8be9eb339fb5?q=80&w=1600&auto=format&fit=crop",
        alt: "Patio central de Patio Colonial con escalera y madera",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
        alt: "Detalle de interior de Patio Colonial",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
        alt: "Líneas geométricas y sombras en interior de Patio Colonial",
        credit: "Unsplash",
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
    title: "Casa Colina",
    category: "remodelacion",
    location: "Cali, San Antonio",
    surface: "140 m²",
    concept:
      "Remodelación integral de una vivienda de los años 70. Recuperación de piezas originales y nuevas aperturas hacia el interior.",
    description:
      "Remodelación de una vivienda de los años 70 en San Antonio que respeta y recupera el alma del edificio original. Se restauran los suelos hidráulicos y se recuperan las piezas de madera originales, mientras que se abren nuevas aperturas hacia el patio interior para iluminar el distribuidor. El acero corten y la cal se introducen como materiales contemporáneos que dialogan con lo existente.",
    materials: ["Hidráulica restaurada", "Madera recuperada", "Cal", "Acero corten"],
    cover:
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1600&auto=format&fit=crop",
    coverAlt: "Escalera de caracol con luz cenital en Casa Colina",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1600&auto=format&fit=crop",
        alt: "Escalera de caracol y luz cenital en Casa Colina",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop",
        alt: "Detalle de arquitectura de Casa Colina",
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        alt: "Estudio de concreto y sombras en Casa Colina",
        credit: "Unsplash",
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
  note:
    "Proyecto conceptual desarrollado como ejercicio de portafolio para KB Digital Studio. Los nombres, equipos y proyectos son ficticios y no representan clientes reales.",
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

export const CONTACT_FIELDS = {
  name: { label: "Nombre completo", placeholder: "Juan Pérez", type: "text" },
  email: { label: "Correo electrónico", placeholder: "juan@ejemplo.com", type: "email" },
  projectType: { label: "Tipo de proyecto", placeholder: "Selecciona una opción", type: "select" },
  budget: { label: "Presupuesto orientativo", placeholder: "Selecciona un rango", type: "select" },
  message: { label: "Mensaje", placeholder: "Cuéntanos sobre tu proyecto", type: "textarea" },
} as const;

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
