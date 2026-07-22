import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <section className="">
      <h1><span className="text-orange-500">WELCOME</span> TO MY PORTFOLIO</h1>
      <p>I'm a software engineer with a passion for building web applications and mobile applications.</p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md">CONTACT ME</button>
    </section>
    </div>
  );
}
