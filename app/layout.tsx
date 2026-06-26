"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28c0-8 5-13 20-13s20 5 20 13c0 3-2 5-5 5v17a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3V33c-3 0-5-2-5-5z" fill="#EBD9BC" stroke="#8A5A2B" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-[#FBF6EC]/90 border-b border-[#E0CBA8]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-lg font-bold tracking-tight text-[#4A1D5E]">HB&amp;J Solutions</span>
        </Link>

        <nav className="hidden sm:flex gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-3 py-2 rounded-md text-sm font-medium text-[#3B2A48] hover:bg-[#E9DCF0] hover:text-[#4A1D5E] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="sm:hidden p-2 rounded-md text-[#4A1D5E] hover:bg-[#E9DCF0]" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-[#E0CBA8] bg-[#FBF6EC] px-6 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-[#3B2A48] hover:bg-[#E9DCF0]">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E0CBA8] bg-[#F3E9D6]">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-[#6B5547] flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} HB&amp;J Solutions</span>
        <span>Created for MGS351 · University at Buffalo</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col text-[#2B1838] bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}