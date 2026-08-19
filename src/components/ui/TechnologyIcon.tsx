import type { ElementType } from "react";
import { FaJava } from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVsco,
} from "react-icons/si";
import type { TechnologyIcon as TechnologyIconName } from "../../data/portfolio";

const icons: Record<TechnologyIconName, ElementType> = {
  next: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  zustand: RiBearSmileFill,
  css: SiCss,
  java: FaJava,
  spring: SiSpring,
  node: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  vscode: SiVsco,
  docker: SiDocker,
  vercel: SiVercel,
  postman: SiPostman,
  shell: SiGnubash,
};

export const technologyMeta: Record<TechnologyIconName, { label: string; color: string }> = {
  next: { label: "Next.js", color: "#111111" },
  react: { label: "React", color: "#61DAFB" },
  typescript: { label: "TypeScript", color: "#3178C6" },
  tailwind: { label: "Tailwind CSS", color: "#06B6D4" },
  zustand: { label: "Zustand", color: "#43382c" },
  css: { label: "CSS", color: "#1572B6" },
  java: { label: "Java", color: "#007396" },
  spring: { label: "Spring Boot", color: "#6DB33F" },
  node: { label: "Node.js", color: "#5FA04E" },
  express: { label: "Express.js", color: "#000000" },
  postgresql: { label: "PostgreSQL", color: "#4169E1" },
  mongodb: { label: "MongoDB", color: "#47A248" },
  git: { label: "Git", color: "#F05032" },
  github: { label: "GitHub", color: "#181717" },
  vscode: { label: "VS Code", color: "#007ACC" },
  docker: { label: "Docker", color: "#2496ED" },
  vercel: { label: "Vercel", color: "#111111" },
  postman: { label: "Postman", color: "#FF6C37" },
  shell: { label: "Shell", color: "#4EAA25" },
};

type Props = {
  icon: TechnologyIconName;
  color?: string;
  size?: number;
};

export default function TechnologyIcon({ icon, color = "currentColor", size = 24 }: Props) {
  const Icon = icons[icon];

  return <Icon aria-hidden="true" color={color} size={size} />;
}
