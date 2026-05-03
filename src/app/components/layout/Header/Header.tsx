"use client";

import Link from "next/link";
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
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      isResumeModalOpen || isMobileMenuOpen ? "hidden" : "auto";

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
            className="relative text-lg font-bold tracking-[0.2em] text-[#00f0ff]"
            onClick={closeMobileMenu}
          >
            ARCHITECT.DEV
          </Link>

          <nav className="hidden sm:block">
            <ul className="flex items-center gap-8 font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#8b9090] transition hover:text-[#00f0ff]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden sm:block">
            <Button
              className="cursor-pointer rounded-sm bg-[#00f0ff] px-6 py-2 text-black transition hover:bg-white"
              text="Resume"
              onClick={() => setIsResumeModalOpen(true)}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white sm:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#050505] px-6 py-6 sm:hidden">
            <nav>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              className="mt-5 w-full cursor-pointer rounded-md bg-[#00f0ff] px-5 py-3 font-semibold text-black transition hover:bg-white"
              text="Resume"
              onClick={() => {
                closeMobileMenu();
                setIsResumeModalOpen(true);
              }}
            />
          </div>
        )}
      </header>

      {isResumeModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0c] p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Resume
            </p>

            <h3 className="mb-3 text-2xl font-semibold">Download My Resume</h3>

            <p className="mb-6 text-sm leading-7 text-[#9fa4a4]">
              You can download the latest version of my resume in PDF format.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/sarapouyanfar Cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00f0ff] px-5 py-3 font-semibold text-black hover:bg-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                className="rounded-md border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10"
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
