export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  technologies: TechnologyIcon[];
};

export type TechnologyIcon =
  | "next"
  | "react"
  | "typescript"
  | "tailwind"
  | "zustand"
  | "css"
  | "java"
  | "spring"
  | "node"
  | "express"
  | "postgresql"
  | "mongodb"
  | "git"
  | "github"
  | "vscode"
  | "docker"
  | "vercel"
  | "postman"
  | "shell";

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
  github: "https://github.com/claudioivan101",
  linkedin: "https://www.linkedin.com/in/claudio-ivan-gomez-560a8139a/",
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
  intro: "Hola, soy Claudio, software engineer especializado en desarrollo web. Desarrollo aplicaciones pensadas para resolver problemas reales y aporto nuevas perspectivas a los desafíos de cada empresa.",
  portraitLabel: "Retrato de Claudio Gómez",
  portraitImage: "/retrato.webp",
  primaryAction: "Contactarme",
  secondaryAction: "cv",
};

export const projects: Project[] = [
  {
    number: "01",
    category: "WEB APP",
    title: "Educar para Transformar",
    description: "Plataforma web integral orientada a la educación, diseñada para potenciar el aprendizaje y la gestión académica.",
    href: "https://educar-para-transformar-front.vercel.app/",
    image: "/pagina.webp",
    technologies: ["react", "typescript", "tailwind", "postgresql", "git", "vercel"],
  },
  {
    number: "02",
    category: "PRODUCTO",
    title: "Próximo caso",
    description: "Otro lugar con separación nítida para destacar los resultados que más importan.",
    href: "#contacto",
    technologies: ["next", "typescript", "postgresql"],
  },
  {
    number: "03",
    category: "PRODUCTO",
    title: "Próximo caso",
    description: "Otro lugar con separación nítida para destacar los resultados que más importan.",
    href: "#contacto",
    technologies: ["java", "spring", "postgresql"],
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
      { icon: "zustand", name: "Zustand", color: "#43382c" },
      { icon: "css", name: "CSS", color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "node", name: "Node.js", color: "#5FA04E" },
      { icon: "express", name: "Express.js", color: "#000000" },
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
      { icon: "docker", name: "Docker", color: "#2496ED" },
      { icon: "vercel", name: "Vercel", color: "#000000" },
      { icon: "postman", name: "Postman", color: "#FF6C37" },
      { icon: "shell", name: "Shell", color: "#4EAA25" },
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  tags?: string[];
  link?: string;
};

export const certifications: Certification[] = [
  {
    title: "Desarrollo Full Stack",
    issuer: "Especialización Profesional",
    year: "2024",
    description: "Desarrollo de aplicaciones web escalables con arquitecturas modernas basadas en componentes, APIs REST y bases de datos relacionales.",
    tags: ["React", "TypeScript", "PostgreSQL", "Node.js"],
  },
  {
    title: "Backend con Java & Spring Boot",
    issuer: "Arquitectura & Backend",
    year: "2024",
    description: "Construcción de servicios backend robustos, seguridad, persistencia eficiente de datos y patrones de diseño orientados a objetos.",
    tags: ["Java", "Spring Boot", "JPA / Hibernate", "APIs REST"],
  },
  {
    title: "Frontend Moderno & UI Engineering",
    issuer: "Desarrollo Web",
    year: "2023",
    description: "Creación de interfaces fluidas, diseño responsivo, optimización de rendimiento y buenas prácticas con estándares web.",
    tags: ["TypeScript", "Tailwind CSS", "Next.js", "Git"],
  },
];


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
