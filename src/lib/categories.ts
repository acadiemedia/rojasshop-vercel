import {
  Wrench,
  Zap,
  HardHat,
  Hammer,
  PaintBucket,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  whatsappMessage: string;
}

export const categories: Category[] = [
  {
    slug: "plomeria",
    name: "Plomería",
    short: "Tubos, conexiones y grifería",
    description:
      "Todo lo que necesitas para instalaciones de agua y desagüe en casa o en obra.",
    icon: Wrench,
    items: [
      "Tubos PVC y CPVC",
      "Conexiones y accesorios",
      "Grifería para baño y cocina",
      "Llaves de paso y válvulas",
      "Accesorios de baño",
    ],
    whatsappMessage: "Hola, quisiera consultar sobre productos de plomería.",
  },
  {
    slug: "electricidad",
    name: "Electricidad",
    short: "Cables, llaves y tomacorrientes",
    description:
      "Materiales eléctricos confiables para instalaciones residenciales y de obra.",
    icon: Zap,
    items: [
      "Cables y alambres",
      "Tubos conduit",
      "Interruptores y tomacorrientes",
      "Tableros y termomagnéticas",
      "Iluminación LED",
    ],
    whatsappMessage: "Hola, quisiera consultar sobre productos de electricidad.",
  },
  {
    slug: "construccion",
    name: "Construcción",
    short: "Cemento, fierro y calaminas",
    description:
      "Materiales de obra gruesa para construir y remodelar con confianza.",
    icon: HardHat,
    items: [
      "Cemento y mezclas",
      "Fierro de construcción",
      "Calaminas y techos",
      "Ladrillos y bloquetas",
      "Mallas y alambres",
    ],
    whatsappMessage: "Hola, quisiera consultar sobre materiales de construcción.",
  },
  {
    slug: "herramientas",
    name: "Herramientas",
    short: "Manuales y eléctricas",
    description:
      "Marcas confiables para profesionales y trabajos del día a día en casa.",
    icon: Hammer,
    items: [
      "Martillos y desarmadores",
      "Llaves y alicates",
      "Taladros y rotomartillos",
      "Sierras y discos",
      "Cintas métricas y niveles",
    ],
    whatsappMessage: "Hola, quisiera consultar sobre herramientas.",
  },
  {
    slug: "pinturas",
    name: "Pinturas y Acabados",
    short: "Látex, esmaltes y rodillos",
    description:
      "Pinturas, accesorios y acabados para dar el toque final a tus proyectos.",
    icon: PaintBucket,
    items: [
      "Pintura látex y esmalte",
      "Imprimantes y selladores",
      "Rodillos y brochas",
      "Cerámicos y porcelanato",
      "Pegamentos y fragua",
    ],
    whatsappMessage: "Hola, quisiera consultar sobre pinturas y acabados.",
  },
];
