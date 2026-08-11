import { navigation, site } from "../../data/portfolio";

const [brandName, brandSuffix = ""] = site.brand.split(".");

export default function Header() {
  return (
    <header className="site-header fixed top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-[4.8vw]">
      <a href="#sobre-mi" className="text-lg font-medium tracking-[-.055em] sm:text-2xl">{brandName}<span className="text-[#e85d35]">.{brandSuffix}</span></a>
      <nav aria-label="Navegación principal" className="hidden items-center gap-8 rounded-full bg-white px-9 py-4 text-sm font-medium shadow-[0_10px_22px_rgba(23,32,28,.14)] xl:flex">
        {navigation.map((item) => <a key={item.href} href={item.href} className="transition hover:text-[#e85d35]">{item.label}</a>)}
      </nav>
      <a href="#contacto" className="justify-self-end rounded-full border-2 border-[#17201c] px-4 py-2 text-xs font-medium transition hover:border-[#e85d35] hover:bg-[#e85d35] hover:text-white xl:border-0 xl:p-2" aria-label="Ir a contacto">
        <span className="xl:hidden">Contacto</span>
        <span className="hidden w-8 flex-col gap-1.5 xl:flex"><i className="h-1 w-full rounded-full bg-current"></i><i className="h-1 w-full rounded-full bg-current"></i><i className="h-1 w-full rounded-full bg-current"></i></span>
      </a>
    </header>
  );
}
