import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claudio Gomez - Engineer",
  description: "Claudio Gomez Software Engineer FullStack Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      {/* body container */}
      <body className="min-h-screen bg-zinc-200 flex flex-col text-zinc-950">
        <Header />
        <div className="flex-1 flex flex-col p-4">
          {children}
        </div>
        <footer className="flex justify-between">
          <div>
            <h2>Claudio Gomez</h2>
            <p>Software Engineer</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>Email: claudiogomez.work1@gmail.com</p>
            <p>Phone: +54 3624059876</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
