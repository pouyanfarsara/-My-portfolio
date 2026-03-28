"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const ContactScene = dynamic(
  () => import("@/app/components/three/ContactScene"),
  { ssr: false },
);

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F14] text-white pt-10 mt-10 sm:pt-24 px-6">
      <ContactScene />

      <div className="relative z-10 xl:max-w-6xl mx-auto sm:bg-[#0F141A]/90 backdrop-blur-sm rounded-2xl px-2 py-3 xl:p-10 md:p-14 grid md:grid-cols-2 gap-5 xl:gap-12 border border-white/5">
        <div className="space-y-6">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let’s build something great together.
            <span className="text-cyan-400"> remarkable.</span>
          </h2>

          <p className="text-gray-400 max-w-md">
            I’m a front-end developer passionate about building clean,
            responsive, and user-friendly interfaces. I’m currently open to new
            opportunities, freelance projects, or collaborations. Feel free to
            reach out — I’d love to connect.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#151A21] rounded-md">
                ✉️
              </div>
              <span>sara.pouyanfar@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#151A21] rounded-md">
                🔗
              </div>
              <span>www.linkedin.com/in/sarapouyanfar</span>
            </div>
          </div>
        </div>

        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="John Doe"
              className="bg-black/40 border border-gray-700 rounded-md px-4 py-3 outline-none focus:border-cyan-400 transition w-full"
            />
            <input
              type="email"
              placeholder="john@example.com"
              className="bg-black/40 border border-gray-700 rounded-md px-4 py-3 outline-none focus:border-cyan-400 transition w-full"
            />
          </div>

          <textarea
            placeholder="Your project details..."
            rows={6}
            className="w-full bg-black/40 border border-gray-700 rounded-md px-4 py-3 outline-none focus:border-cyan-400 transition resize-none"
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-md hover:bg-cyan-300 transition cursor-pointer"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="footer relative z-10 mt-10 mb-10">
        <ul className="flex justify-center flex-wrap gap-10 text-gray-300">
          <li>
            <a
              href="https://github.com/pouyanfarsara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/sarapouyanfar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Telegram
            </a>
          </li>

          <li>
            <a
              href="mailto:sara.pouyanfar@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
