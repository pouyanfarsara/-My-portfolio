"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const ContactScene = dynamic(
  () => import("@/app/components/three/ContactScene"),
  { ssr: false },
);

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F14] text-white pt-12 pb-8 mt-8 sm:pt-24 sm:pb-12 px-4 sm:px-6">
      <ContactScene />

      <div className="relative z-10 xl:max-w-6xl mx-auto sm:bg-[#0F141A]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 xl:p-10 grid md:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 border border-white/5">
        <div className="space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Let's build something great together.
            <span className="text-cyan-400"> remarkable.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
            I'm a front-end developer passionate about building clean,
            responsive, and user-friendly interfaces. I'm currently open to new
            opportunities, freelance projects, or collaborations. Feel free to
            reach out — I'd love to connect.
          </p>

          <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#151A21] rounded-md flex-shrink-0">
                ✉️
              </div>
              <span className="text-sm sm:text-base break-all">
                sara.pouyanfar@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#151A21] rounded-md flex-shrink-0">
                🔗
              </div>
              <span className="text-sm sm:text-base break-all">
                www.linkedin.com/in/sarapouyanfar
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-4 sm:space-y-5">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="John Doe"
              className="bg-black/40 border border-gray-700 rounded-md px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition w-full min-h-[44px]"
            />
            <input
              type="email"
              placeholder="john@example.com"
              className="bg-black/40 border border-gray-700 rounded-md px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition w-full min-h-[44px]"
            />
          </div>

          <textarea
            placeholder="Your project details..."
            rows={5}
            className="w-full bg-black/40 border border-gray-700 rounded-md px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition resize-none min-h-[120px]"
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold py-3 sm:py-4 text-sm sm:text-base rounded-md hover:bg-cyan-300 active:bg-cyan-500 transition cursor-pointer min-h-[48px] touch-manipulation"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="footer relative z-10 mt-8 sm:mt-10 mb-6 sm:mb-10">
        <ul className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base text-gray-300">
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
              href="https://t.me/sarapouyanfar"
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
