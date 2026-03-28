"use client";

import { Dot, Code, Cpu, Palette, Zap, Layers } from "lucide-react";
import Button from "@/app/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SelectedWorks from "../projects";
const HeroScene = dynamic(() => import("@/app/components/three/HeroScene"), {
  ssr: false,
});
const skills = [
  { name: "Next.js / React", icon: Code },
  { name: "TypeScript", icon: Cpu },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Zap },
  { name: "JavaScript", icon: Code },
  { name: "Performance", icon: Zap },
  { name: "UI/UX Design", icon: Palette },
  { name: "REST APIs", icon: Layers },
];

export default function Herobanner() {
  return (
    <>
 <section className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 overflow-x-hidden px-6 pt-10 pb-12 text-left sm:grid-cols-2 sm:px-12 sm:pt-20 lg:min-h-[90vh] lg:px-20 xl:px-32 xl:pt-24">
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <HeroScene />
  </div>
        <div className="relative z-20 flex flex-col gap-4">
          <h5 className="mobile-fade-up flex w-full items-center bg-[#0000006e] px-2 text-white sm:max-w-xs">
            <Dot color="#00f0ff" size={36} />
            <p className="whitespace-nowrap text-sm sm:text-base">
              Open to Frontend Opportunities
            </p>
          </h5>

          <h1 className="mobile-fade-up-delay-1 text-3xl font-semibold leading-tight text-white sm:hidden">
            Building Fast, <span className="text-[#00f0ff]">Scalable</span>{" "}
            Frontend Applications
          </h1>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden text-3xl font-semibold leading-tight text-white sm:block sm:text-4xl lg:text-5xl xl:text-7xl"
          >
            Building Fast, <span className="text-[#00f0ff]">Scalable</span>{" "}
            Frontend Applications
          </motion.h1>

          <p className="mobile-fade-up-delay-2 max-w-xl text-base leading-7 text-[#6e7171] sm:hidden">
            I&apos;m Sara Pouyanfar — a frontend developer specializing in React
            and Next.js, focused on performance, clean architecture, and
            seamless user experiences.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="hidden max-w-xl text-base leading-7 text-[#6e7171] sm:block"
          >
            I&apos;m Sara Pouyanfar — a frontend developer specializing in React
            and Next.js, focused on performance, clean architecture, and
            seamless user experiences.
          </motion.p>

          <div className="mobile-fade-soft-delay-2 flex w-full flex-wrap gap-3 sm:animate-none">
            <Button
              text="VIEW PROJECTS"
              className="cursor-pointer whitespace-nowrap rounded-sm bg-[#00f0ff] px-4 py-2 text-xs font-semibold text-black hover:bg-white hover:text-black sm:text-sm"
            />

            <Button
              text="GET IN TOUCH"
              className="cursor-pointer whitespace-nowrap rounded-sm bg-[#000000e9] px-5 py-2 text-xs font-semibold text-[#eee8e8] hover:bg-white hover:text-black sm:text-sm"
            />
          </div>
        </div>

       <div className="relative z-20 w-full">
          <div className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute -z-10 h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-[100px] sm:h-[300px] sm:w-[300px]" />
            <div className="pointer-events-none absolute -z-10 h-[220px] w-[220px] rounded-full bg-blue-500/ blur-[90px] sm:h-[250px] sm:w-[250px]" />

            <div className="mobile-fade-soft-delay-3 relative w-full max-w-[400px] rounded-xl border border-[#2a2a2a] bg-[#121212] p-5 shadow-2xl sm:hidden">
              <div className="mb-4 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>

              <pre className="overflow-x-auto py-2 font-mono text-sm leading-5 text-gray-300">
                <span className="text-blue-400">const</span> engineer = {"{"}
                {"\n  "}
                name: <span className="text-[#00f0ff]">"Sara"</span>,{"\n  "}
                role:{" "}
                <span className="text-[#00f0ff]">"Frontend Developer"</span>,
                {"\n  "}
                stack: [<span className="text-[#00f0ff]">"React"</span>,{" "}
                <span className="text-[#00f0ff]">"Next.js"</span>],
                {"\n  "}
                focus: <span className="text-[#00f0ff]">"Scalable UI"</span>,
                {"\n"}
                {"};"}
                {"\n\n"}
                <span className="text-blue-400">function</span> build() {"{"}
                {"\n  "}
                <span className="text-gray-500">
                  // Crafting fast, polished
                </span>
                {"\n  "}
                <span className="text-gray-500">// frontend experiences.</span>
                {"\n"}
                {"}"}
              </pre>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="relative hidden w-full max-w-[400px] rounded-xl border border-[#2a2a2a] bg-[#121212] p-5 shadow-2xl sm:block"
            >
              <div className="mb-4 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>

              <pre className="overflow-x-auto py-2 font-mono text-sm leading-5 text-gray-300">
                <span className="text-blue-400">const</span> engineer = {"{"}
                {"\n  "}
                name: <span className="text-[#00f0ff]">"Sara"</span>,{"\n  "}
                role:{" "}
                <span className="text-[#00f0ff]">"Frontend Developer"</span>,
                {"\n  "}
                stack: [<span className="text-[#00f0ff]">"React"</span>,{" "}
                <span className="text-[#00f0ff]">"Next.js"</span>],
                {"\n  "}
                focus: <span className="text-[#00f0ff]">"Scalable UI"</span>,
                {"\n"}
                {"};"}
                {"\n\n"}
                <span className="text-blue-400">function</span> build() {"{"}
                {"\n  "}
                <span className="text-gray-500">
                  // Crafting fast, polished
                </span>
                {"\n  "}
                <span className="text-gray-500">// frontend experiences.</span>
                {"\n"}
                {"}"}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid w-full grid-cols-1 bg-[#13111178] px-6 py-10 text-white sm:mt-16 sm:grid-cols-2 sm:px-12 lg:px-20 lg:py-24 xl:px-32">
        <div className="flex flex-col gap-4">
          <h5 className="mobile-fade-up text-sm font-semibold text-[#00f0ff] md:text-base">
            ENGINEERED FOR PERFORMANCE
          </h5>

          <h2 className="mobile-fade-up-delay-1 block max-w-full text-3xl font-bold text-white sm:hidden">
            Engineering High-Performance Frontend Experiences
          </h2>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="hidden max-w-full text-3xl font-bold text-white sm:block sm:text-4xl"
          >
            Engineering High-Performance Frontend Experiences
          </motion.h2>

          <p className="mobile-fade-up-delay-2 block text-[#6e7171] sm:hidden">
            I have experience working on production-grade applications,
            improving performance, integrating APIs, and building reusable UI
            components. I enjoy solving complex problems and turning them into
            simple, intuitive user experiences.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="hidden text-[#6e7171] sm:block"
          >
            I have experience working on production-grade applications,
            improving performance, integrating APIs, and building reusable UI
            components. I enjoy solving complex problems and turning them into
            simple, intuitive user experiences.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 lg:mt-0">
            <div className="mobile-fade-soft rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-6 sm:animate-none">
              <p className="mt-2 flex justify-center text-center text-xs tracking-widest text-[#8a8a8a] hover:text-[#00f0ff]">
                React &amp; Next.js BUILDING MODERN WEB APPS
              </p>
            </div>

            <div className="mobile-fade-soft-delay-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-6 sm:animate-none">
              <p className="mt-2 flex justify-center text-center text-xs tracking-widest text-[#8a8a8a] hover:text-[#00f0ff]">
                TypeScript SCALABLE &amp; MAINTAINABLE CODE
              </p>
            </div>

            <div className="mobile-fade-soft-delay-2 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-6 sm:animate-none">
              <p className="mt-2 flex justify-center text-center text-xs tracking-widest text-[#8a8a8a] hover:text-[#00f0ff]">
                Tailwind CSS FAST UI DEVELOPMENT
              </p>
            </div>

            <div className="mobile-fade-soft-delay-3 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-6 sm:animate-none">
              <p className="mt-2 flex justify-center text-center text-xs tracking-widest text-[#8a8a8a] hover:text-[#00f0ff]">
                JavaScript (ES6+) STRONG CORE SKILLS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#050505] px-6 pt-24 text-white sm:px-10 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex items-start justify-between gap-6">
            <div>
              <p className="mobile-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Career Path
              </p>

              <h2 className="mobile-fade-up-delay-1 block text-4xl font-semibold tracking-[-0.04em] text-white sm:hidden">
                Experience
              </h2>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="hidden text-4xl font-semibold tracking-[-0.04em] text-white sm:block sm:text-5xl"
              >
                Experience
              </motion.h2>
            </div>

            <p className="mt-6 hidden text-sm italic text-[#8b8b8b] sm:block sm:text-base">
              Frontend Development Journey
            </p>
          </div>

          <div className="mobile-fade-soft rounded-[24px] border border-[#1a1a1a] px-3 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:bg-[#111111] sm:px-10 lg:px-12 sm:animate-none">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
              <div className="mobile-fade-soft-delay-1 sm:animate-none">
                <h3 className="text-4xl font-semibold tracking-[-0.03em] text-white">
                  Sara Pouyanfar
                </h3>

                <p className="mt-3 text-xl font-medium text-cyan-300">
                  Frontend Developer
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                    (item, index) => (
                      <span
                        key={item}
                        className={`rounded-md bg-[#1b1b1b] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#bdbdbd] ${
                          index === 0
                            ? "mobile-fade-soft"
                            : index === 1
                            ? "mobile-fade-soft-delay-1"
                            : index === 2
                            ? "mobile-fade-soft-delay-2"
                            : "mobile-fade-soft-delay-3"
                        } sm:animate-none`}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="mobile-fade-soft-delay-2 sm:animate-none">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-cyan-300" />
                      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#eaeaea]">
                        Frontend Development
                      </h4>
                    </div>

                    <p className="text-[15px] leading-8 text-[#9b9b9b]">
                      Building modern and responsive web interfaces with a
                      strong focus on clean structure, reusable components, and
                      scalable frontend architecture.
                    </p>
                  </div>

                  <div className="mobile-fade-soft-delay-3 sm:animate-none">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-cyan-300" />
                      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#eaeaea]">
                        UI Engineering
                      </h4>
                    </div>

                    <p className="text-[15px] leading-8 text-[#9b9b9b]">
                      Turning design concepts into polished user interfaces
                      using React, Next.js, Tailwind CSS, Bootstrap, and modern
                      JavaScript tooling.
                    </p>
                  </div>
                </div>

                <div className="mobile-fade-soft-delay-4 rounded-[18px] border-l-2 border-cyan-300 bg-[#0c0c0c] px-6 py-6 sm:animate-none">
                  <ul className="space-y-5 text-[15px] leading-7 text-[#b3b3b3]">
                    <li className="flex gap-4">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>
                        Strong foundation in{" "}
                        <span className="text-white">
                          HTML, CSS, JavaScript, and TypeScript
                        </span>{" "}
                        for building maintainable frontend applications.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>
                        Experienced with{" "}
                        <span className="text-white">React and Next.js</span>{" "}
                        for creating modern, component-based web experiences.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>
                        Comfortable building clean and responsive interfaces
                        using{" "}
                        <span className="text-white">
                          Tailwind CSS and Bootstrap
                        </span>
                        .
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#050505] px-6 py-24 text-white sm:px-10 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mobile-fade-up mb-14 text-4xl font-semibold tracking-[-0.03em] sm:hidden">
            Technical Arsenal
          </h2>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="hidden mb-14 text-4xl font-semibold tracking-[-0.03em] sm:block"
          >
            Technical Arsenal
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ name, icon: Icon }, index) => (
              <div
                key={name}
                className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-[#1f1f1f] bg-[#121212] p-6 transition hover:border-[#04cfdd] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] ${
                  index === 0
                    ? "mobile-fade-soft"
                    : index === 1
                    ? "mobile-fade-soft-delay-1"
                    : index === 2
                    ? "mobile-fade-soft-delay-2"
                    : index === 3
                    ? "mobile-fade-soft-delay-3"
                    : index === 4
                    ? "mobile-fade-soft-delay-4"
                    : index === 5
                    ? "mobile-fade-soft-delay-5"
                    : index === 6
                    ? "mobile-fade-soft-delay-6"
                    : "mobile-fade-soft-delay-7"
                } sm:animate-none`}
              >
                <Icon className="h-6 w-6 text-gray-400" />
                <p className="text-center text-xs uppercase tracking-widest text-[#9a9a9a]">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <SelectedWorks/>
    </>
  );
}