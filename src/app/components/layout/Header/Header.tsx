"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/app/components/ui/button";

const navItems = [
  { label: "Work", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16 xl:px-24">
        <Link
          href="/"
          className="relative text-lg font-bold tracking-[0.2em] text-[#00f0ff] transition hover:opacity-90"
        >
          <span className="relative z-10">ARCHITECT.DEV</span>
          <span className="absolute inset-0 blur-md opacity-40">ARCHITECT.DEV</span>
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-8 font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`transition ${
                      isActive ? "text-[#00f0ff]" : "text-[#8b9090] hover:text-[#00f0ff]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#00f0ff] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden sm:block">
          <Button
            className="rounded-sm bg-[#00f0ff] px-6 py-2 text-black transition-all duration-300 hover:bg-white cursor-pointer hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]"
            text="Resume"
          />
        </div>
      </div>
    </header>
  );
}