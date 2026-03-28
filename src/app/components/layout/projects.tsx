"use client";

import Image from "next/image";
import { Link as LinkIcon, Code2 } from "lucide-react";

const projects = [
  {
    title: "GreenShop",
    description:
      "Built a responsive e-commerce interface for a plant store with an emphasis on seamless product discovery, polished UI details, and a smooth shopping experience.",
    tag: "E-COMMERCE",
    image: "/greenshop/1.png",
    stack: "React.js • Tailwind • Swiper",
    live: "#",
    github: "https://github.com/pouyanfarsara/Green-shop-plant-shop",
  },
  {
    title: "Nest Shop",
    description:
      "Built a responsive e-commerce interface for a Supermarket store with an emphasis on seamless product discovery.",
    tag: "Auth",
    image: "/nestshop/N1.png",
    stack: "Next.js • Tailwind • React.js • Framer",
    live: "https://nest-shop-iota.vercel.app/",
    github: "https://github.com/pouyanfarsara/Nest-Shop",
  },
];

export default function SelectedWorks() {
  return (
    <section className="relative z-30 mt-8 w-full bg-[#050505] px-6 pt-10 text-white sm:px-10 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
            FEATURED PROJECTS
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            A Selection of My Recent Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden border border-[#171717] bg-[#0f0f10] shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0b0b]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-55 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f10]" />
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="-mt-4 mb-10 inline-flex bg-[#8ef3ff] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]">
                  {project.tag}
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-[90%] text-[15px] leading-8 text-[#8d8d92]">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.live}
                      className="text-cyan-300 transition hover:text-white"
                      aria-label={`${project.title} live link`}
                    >
                      <LinkIcon className="h-4 w-4" />
                    </a>

                    <a
                      href={project.github}
                      className="text-[#bfbfc3] transition hover:text-white"
                      aria-label={`${project.title} code link`}
                    >
                      <Code2 className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#7d7d82]">
                    {project.stack}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
