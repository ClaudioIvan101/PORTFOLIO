import React from "react";
import Link from "next/link"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-3 border-b-[0.5px] border-zinc-800/80 backdrop-blur-md" >
          <div>LOGO</div>
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/tecnology">Tecnologies</Link>
            <Link href="/project">Projects</Link>
          </nav>
        </header>
  )
}