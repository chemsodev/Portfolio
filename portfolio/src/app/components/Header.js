"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8  bg-black text-white fixed top-0 w-full z-10">
      <nav className="flex space-x-8">
        <Link href="/" className="group">
            Home
            <span className="block h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="#about" className="group">
            About
            <span className="block h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="#services" className="group">
            Services
            <span className="block h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="#projects" className="group">
            Projects
            <span className="block h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
        </Link>
      </nav>

      <div>
  <Link href="#contact" className="flex items-center space-x-1">
    <span>Get In Touch</span>
    <span className="text-blue-500 transform -rotate-45">→</span>
    
  </Link>
  <span className="block h-[1px]  bg-blue-500 transition-all w-full"></span>
</div>

    </header>
  );
}
