"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X, Download, Menu } from "lucide-react";
import Button from "@/app/components/ui/button";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResumeModalOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isResumeModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isResumeModalOpen, isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16 xl:px-24">
          <Link
            href="/"
            className="relative text-lg font-bold tracking-[0.2em] text-[#00f0ff] transition hover:opacity-90"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">ARCHITECT.DEV</span>
            <span className="absolute inset-0 opacity-40 blur-md">
              ARCHITECT.DEV
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-8 font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`transition ${
                        isActive
                          ? "text-[#00f0ff]"
                          : "text-[#8b9090] hover:text-[#00f0ff]"
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

          {/* Desktop Resume */}
          <div className="hidden sm:block">
            <Button
              className="cursor-pointer rounded-sm bg-[#00f0ff] px-6 py-2 text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]"
              text="Resume"
              onClick={() => setIsResumeModalOpen(true)}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-300 sm:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown / Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] sm:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          <div className="absolute right-4 top-4 left-4 rounded-2xl border border-white/10 bg-[#0b0b0c] p-5 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Menu
              </p>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="text-gray-400 transition hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-base font-medium text-[#d8dcdc] transition hover:border-cyan-300/30 hover:bg-white/[0.05] hover:text-[#00f0ff]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6">
              <Button
                className="w-full cursor-pointer rounded-md bg-[#00f0ff] px-5 py-3 text-center font-semibold text-black transition hover:bg-white"
                text="Resume"
                onClick={() => {
                  closeMobileMenu();
                  setIsResumeModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isResumeModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0c] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 transition hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Resume
            </p>

            <h3 className="mb-3 text-2xl font-semibold text-white">
              Download My Resume
            </h3>

            <p className="mb-6 text-sm leading-7 text-[#9fa4a4]">
              You can download the latest version of my resume in PDF format.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/sarapouyanfar.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00f0ff] px-5 py-3 font-semibold text-black transition hover:bg-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                className="rounded-md border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
