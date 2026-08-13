export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  variant: "filled" | "outline";
};

export type TechnologyIcon =
  | "next"
  | "react"
  | "typescript"
  | "tailwind"
  | "java"
  | "spring"
  | "postgresql"
  | "mongodb"
  | "git"
  | "github"
  | "vscode"
  | "docker"
  | "vercel"
  | "postman";

export type TechnologyGroup = {
  title: string;
  items: { icon: TechnologyIcon; name: string; color: string }[];
};

export const site = {
  name: "Claudio Gómez",
  brand: "Claudio.dev",
  role: "Full Stack Software Engineer",
  description: "Claudio Gomez Software Engineer FullStack Portfolio",
  location: "Argentina",
  email: "claudiogomez.work1@gmail.com",
  phone: "+54 362 405 9876",
};

export const navigation = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export const hero = {
  titlePrimary: "Full Stack",
  titleEmphasis: "Software Engineer",
  intro: "Hola, soy Claudio, un software engineer especializado en desarrollo web moderno. Creo aplicaciones rápidas, escalables y listas para producción, con interfaces claras y arquitectura sólida.",
  portraitLabel: "Espacio reservado para retrato de Claudio Gómez",
  primaryAction: "Contactarme",
  secondaryAction: "cv",
};

export const projects: Project[] = [
  {
    number: "01",
    category: "WEB APP",
    title: "Próximo proyecto",
    description: "Un espacio preparado para mostrar el contexto, el proceso y el impacto de tu trabajo.",
    href: "#contacto",
    actionLabel: "Ver caso",
    variant: "filled",
  },
  {
    number: "02",
    category: "PRODUCTO",
    title: "Próximo caso",
    description: "Otro lugar con separación nítida para destacar los resultados que más importan.",
    href: "#contacto",
    actionLabel: "Ver caso",
    variant: "outline",
  },
  {
    number: "03",
    category: "PRODUCTO",
    title: "Próximo caso",
    description: "Otro lugar con separación nítida para destacar los resultados que más importan.",
    href: "#contacto",
    actionLabel: "Ver caso",
    variant: "outline",
  },
];

export const technologies: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: [
      { icon: "next", name: "Next.js", color: "#000000" },
      { icon: "react", name: "React", color: "#61DAFB" },
      { icon: "typescript", name: "TypeScript", color: "#3178C6" },
      { icon: "tailwind", name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "java", name: "Java", color: "#007396" },
      { icon: "spring", name: "Spring Boot", color: "#6DB33F" },
      { icon: "postgresql", name: "PostgreSQL", color: "#4169E1" },
      { icon: "mongodb", name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { icon: "git", name: "Git", color: "#F05032" },
      { icon: "github", name: "GitHub", color: "#181717" },
      { icon: "vscode", name: "VS Code", color: "#007ACC" },
      { icon: "docker", name: "Docker", color: "#2496ED" },
      { icon: "vercel", name: "Vercel", color: "#000000" },
      { icon: "postman", name: "Postman", color: "#FF6C37" },
    ],
  },
];

export const certification = {
  eyebrow: "EN CONSTRUCCIÓN / 01",
  title: "Tu formación también cuenta la historia.",
  description: "Este espacio está preparado para mostrar certificaciones, cursos y logros profesionales con el mismo peso visual que tus proyectos.",
};

export const contact = {
  intro: "Si tenés un producto, una idea o un problema complejo, conversemos sobre la mejor manera de resolverlo.",
  methods: [
    { href: `mailto:${site.email}`, label: site.email, size: "email" },
    { href: `tel:${site.phone.replaceAll(" ", "")}`, label: site.phone, size: "phone" },
  ],
};

export const finalCta = {
  availability: "DISPONIBLE PARA COLABORAR",
  title: "¿Tenés una idea en mente?",
  description: "Convirtámosla en un producto digital que las personas quieran usar.",
  actionLabel: "Iniciar conversación",
};
