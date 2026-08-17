import { useMemo, useState } from "react";
import { FaCode, FaDatabase, FaReact, FaServer, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";
import { technologies, type TechnologyGroup } from "../../data/portfolio";
import TechnologyIcon from "../ui/TechnologyIcon";

type TechnologyFilter = "all" | "languages" | "frontend" | "backend" | "databases" | "tools";

const filters: { id: TechnologyFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

const cardIcons: Record<string, IconType> = {
  Lenguajes: FaCode,
  Frontend: FaReact,
  Backend: FaServer,
  "Bases de datos": FaDatabase,
  Herramientas: FaTools,
};

function StackCard({ title, items }: TechnologyGroup) {
  const CardIcon = cardIcons[title] ?? FaCode;

  return (
    <div className="surface-card flex min-h-72 w-full flex-col gap-8 p-7 sm:p-8">
      <div className="flex items-center gap-2.5">
        <CardIcon aria-hidden={true} className="text-[#e85d35]" size={17} />
        <h3 className="text-sm font-medium uppercase tracking-[.09em] text-black">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 border-t border-[#17201c]/12 pt-7">
        {items.map(({ icon, name, color }) => (
          <div key={name} className="group flex flex-col gap-2">
            <TechnologyIcon icon={icon} color={color} size={32} />
            <span className="text-sm font-medium text-[#27364a] transition group-hover:text-[#e85d35]">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Technology() {
  const [activeFilter, setActiveFilter] = useState<TechnologyFilter>("all");
  const visibleGroups = useMemo(() => {
    const frontend = technologies.find((group) => group.title === "Frontend");
    const tools = technologies.find((group) => group.title === "Herramientas");
    const items = technologies.flatMap((group) => group.items);

    switch (activeFilter) {
      case "languages":
        return [{ title: "Lenguajes", items: items.filter(({ icon }) => icon === "typescript" || icon === "java") }];
      case "frontend":
        return frontend ? [frontend] : [];
      case "backend":
        return [{ title: "Backend", items: items.filter(({ icon }) => icon === "java" || icon === "spring") }];
      case "databases":
        return [{ title: "Bases de datos", items: items.filter(({ icon }) => icon === "postgresql" || icon === "mongodb") }];
      case "tools":
        return tools ? [tools] : [];
      default:
        return technologies;
    }
  }, [activeFilter]);

  return (
    <section id="tecnologias" className="page-section bg-[#f6f4ef]">
      <div className="section-heading">
        <h2 className="section-title">Tecnologías</h2>
      </div>
      <p className="-mt-7 mb-10 max-w-2xl text-base leading-[1.7] text-[#637084] sm:text-lg">Herramientas que utilizo en mis flujos de trabajo.</p>
      <div className="technology-filter-bar" role="toolbar" aria-label="Filtrar tecnologías">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`technology-filter${activeFilter === filter.id ? " is-active" : ""}`}
            aria-pressed={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div key={activeFilter} className="technology-results grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
        {visibleGroups.map((group) => <StackCard key={group.title} {...group} />)}
      </div>
    </section>
  );
}
