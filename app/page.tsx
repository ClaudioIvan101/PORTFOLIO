import Hero from "@/components/hero"
import CTA from "@/components/CTA"
import Tecnology from "@/components/Tecnology"


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <Tecnology/>
      <CTA/>
    </div>
  );
}
