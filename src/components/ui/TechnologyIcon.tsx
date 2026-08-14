import type { ElementType } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
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
  java: FaJava,
  spring: SiSpring,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  vscode: SiVsco,
  docker: SiDocker,
  vercel: SiVercel,
  postman: SiPostman,
};

export const technologyMeta: Record<TechnologyIconName, { label: string; color: string }> = {
  next: { label: "Next.js", color: "#111111" },
  react: { label: "React", color: "#61DAFB" },
  typescript: { label: "TypeScript", color: "#3178C6" },
  tailwind: { label: "Tailwind CSS", color: "#06B6D4" },
  java: { label: "Java", color: "#007396" },
  spring: { label: "Spring Boot", color: "#6DB33F" },
  postgresql: { label: "PostgreSQL", color: "#4169E1" },
  mongodb: { label: "MongoDB", color: "#47A248" },
  git: { label: "Git", color: "#F05032" },
  github: { label: "GitHub", color: "#181717" },
  vscode: { label: "VS Code", color: "#007ACC" },
  docker: { label: "Docker", color: "#2496ED" },
  vercel: { label: "Vercel", color: "#111111" },
  postman: { label: "Postman", color: "#FF6C37" },
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
