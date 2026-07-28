import {
    // Frontend
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    // Backend
    SiSpring,
    SiPostgresql,
    SiMongodb,
    // Herramientas
    SiGit,
    SiGithub,
    SiVsco,
    SiDocker,
    SiVercel,
    SiPostman,
  } from "react-icons/si";
  import { FaJava } from "react-icons/fa";
  
  export default function TechStack() {
    // Agrupo los datos en arrays: así cada categoría se recorre igual,
    // sin repetir el mismo JSX a mano para cada ícono.
    const frontend = [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    ];
  
    const backend = [
      { icon: FaJava, name: "Java", color: "#007396" },
      { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    ];
  
    const herramientas = [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#181717" },
      { icon: SiVsco, name: "VS Code", color: "#007ACC" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiVercel, name: "Vercel", color: "#000000" },
      { icon: SiPostman, name: "Postman", color: "#FF6C37" },
    ];
  
    // Componente reutilizable para cada tarjeta de categoría.
    // Recibe un título y un array de tecnologías, y arma la grilla de íconos.
    const StackCard = ({
      title,
      items,
    }: {
      title: string;
      items: { icon: React.ElementType; name: string; color: string }[];
    }) => (
      <div className="border rounded-lg p-6 flex flex-col items-center gap-4 w-full max-w-xs">
        <h3 className="text-xl font-semibold">{title}</h3>
  
        {/* grid en 2 columnas: alinea los íconos prolijos en filas parejas */}
        <div className="grid grid-cols-2 gap-6">
          {items.map(({ icon: Icon, name, color }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon size={32} color={color} aria-hidden="true" />
              <span className="text-sm text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  
    return (
      <main className="flex flex-col min-h-screen p-10 items-center">
        <h2 className="mb-6 text-3xl font-bold">My Technology Stack</h2>
  
        {/* Contenedor de las 3 tarjetas: en fila en desktop, apiladas en mobile */}
        <section className="flex flex-col md:flex-row gap-6">
          <StackCard title="Frontend" items={frontend} />
          <StackCard title="Backend" items={backend} />
          <StackCard title="Herramientas" items={herramientas} />
        </section>
      </main>
    );
  }