import { navigation, site } from "../../data/portfolio";

const [brandName, brandSuffix = ""] = site.brand.split(".");

export default function Header() {
  return (
    <header className="site-header fixed top-0 z-50 flex items-center justify-between border-b border-[#17201c]/8 bg-[#f6f4ef]/90 px-4 py-3.5 backdrop-blur-md transition-all sm:px-8 sm:py-4">
      <a href="#sobre-mi" className="text-xl font-bold tracking-tight text-[#17201c] sm:text-2xl">
        {brandName}<span className="text-[#e85d35]">.{brandSuffix}</span>
      </a>
      <nav aria-label="Navegación principal" className="hidden items-center gap-7 rounded-full border border-[#17201c]/8 bg-white px-8 py-3 text-sm font-medium shadow-[0_8px_20px_rgba(23,32,28,.08)] md:flex">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="transition-colors hover:text-[#e85d35]">
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#contacto"
        className="rounded-full border-2 border-[#17201c] bg-[#17201c] px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:border-[#27364a] hover:bg-[#27364a] sm:px-5 sm:py-2 sm:text-sm"
        aria-label="Ir a contacto"
      >
        Contacto
      </a>
    </header>
  );
}
