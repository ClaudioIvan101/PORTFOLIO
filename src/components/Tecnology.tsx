import type { ElementType } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVsco,
  SiDocker,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Technology = { icon: ElementType; name: string; color: string };

function StackCard({ title, items }: { title: string; items: Technology[] }) {
  return (
    <div className="flex w-full flex-col gap-7 border-t border-[#17201c]/25 py-6">
      <h3 className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[#e85d35]">{title}</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-7">
        {items.map(({ icon: Icon, name, color }) => (
          <div key={name} className="flex flex-col gap-2">
            <Icon size={32} color={color} aria-hidden="true" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const frontend: Technology[] = [
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  ];
  const backend: Technology[] = [
    { icon: FaJava, name: "Java", color: "#007396" },
    { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  ];
  const herramientas: Technology[] = [
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#181717" },
    { icon: SiVsco, name: "VS Code", color: "#007ACC" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiVercel, name: "Vercel", color: "#000000" },
    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  ];

  return (
    <section id="tecnologias" className="page-section bg-[#f6f4ef]">
      <div className="section-heading">
        <p className="section-kicker">03 — HERRAMIENTAS</p>
        <h2 className="section-title">Tecnologías</h2>
      </div>
      <div className="grid gap-x-10 gap-y-4 md:grid-cols-3">
        <StackCard title="Frontend" items={frontend} />
        <StackCard title="Backend" items={backend} />
        <StackCard title="Herramientas" items={herramientas} />
      </div>
    </section>
  );
}
