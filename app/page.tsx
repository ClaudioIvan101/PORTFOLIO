import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

export default function Home() {
  return (
    <div>
      <section className="">
        <h1><span className="text-orange-500">WELCOME</span> TO MY PORTFOLIO</h1>
        <p>I&apos;m a software engineer with a passion for building web applications and mobile applications.</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">CONTACT ME</button>
      </section>

      <main className="min-h-screen p-10">
        <h1 className="mb-6 text-3xl font-bold">
          My Tecnology Stack
        </h1>

        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <SiNextdotjs size={32} aria-hidden="true" />
            <span>Next.js</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <SiReact size={32} color="#61DAFB" aria-hidden="true" />
            <span>React</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <SiTypescript size={32} color="#3178C6" aria-hidden="true" />
            <span>TypeScript</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <SiTailwindcss size={32} color="#06B6D4" aria-hidden="true" />
            <span>Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <SiNodedotjs size={32} color="#339933" aria-hidden="true" />
            <span>Node.js</span>
          </div>
        </div>
      </main>
    </div>
  );
}
