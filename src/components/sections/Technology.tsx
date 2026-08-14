import { technologies, type TechnologyGroup } from "../../data/portfolio";
import TechnologyIcon from "../ui/TechnologyIcon";

function StackCard({ title, items }: TechnologyGroup) {
  return (
    <div className="surface-card flex min-h-72 w-full flex-col gap-8 p-7 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[#e85d35]">{title}</h3>
        <span className="text-xl text-[#27364a]" aria-hidden="true">&#8599;</span>
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
  return (
    <section id="tecnologias" className="page-section bg-[#f6f4ef]">
      <div className="section-heading">
        <h2 className="section-title">Tecnologías</h2>
      </div>
      <p className="-mt-7 mb-10 max-w-2xl text-base leading-[1.7] text-[#637084] sm:text-lg">Herramientas elegidas para construir experiencias rápidas, mantenibles y listas para crecer.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {technologies.map((group) => <StackCard key={group.title} {...group} />)}
      </div>
    </section>
  );
}
