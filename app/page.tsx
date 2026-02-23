"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Setup", id: "setup" },
];

// Update these with your stats from tracker.gg (Competitive overview)
const valorantTrackerUrl =
  "https://tracker.gg/valorant/profile/riot/brandonks%23sopia/overview?platform=pc&playlist=competitive";
const valorantRanks = {
  peak: {
    tier: "Immortal",
    subTier: 3,
    rr: 234,
    episode: 8,
    act: 2,
  },
};

function getRankImageUrl(tier: string, subTier: number): string {
  const base =
    "https://raw.githubusercontent.com/KadirFiratFTW/valorant-rank-images/master";
  if (tier === "Radiant") return `${base}/Radiant_Rank.png`;
  return `${base}/${tier}_${subTier}_Rank.png`;
}

const socialLinks = [
  {
    label: "Email",
    href: "mailto:jinwoo.lee.asml@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/BrandonKS05",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brandon-lee-179491318",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const projects = [
  {
    id: "1",
    name: "Tab Cleaner",
    tech: "Chrome Extension, JavaScript",
    description: "Take control of your browser by safely removing duplicate and inactive tabs in seconds.",
    visitUrl: "#",
    githubUrl: "#",
    iconImage: "/tab-cleaner-icon.svg",
  },
  {
    id: "2",
    name: "Valorant Match Bot",
    tech: "Discord, JavaScript",
    description: "Get upcoming Valorant match schedules and updates right inside Discord. Stay in the loop on your favorite matches without leaving the app.",
    visitUrl: "https://discord.com/oauth2/authorize?client_id=1412843596448792598",
    visitLabel: "Invite",
    githubUrl: "#",
    icon: "🎮",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "setup">("projects");

  return (
    <div className="relative min-h-screen gradient-bg">
      <div className="flex flex-col lg:flex-row min-h-screen gap-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Left sidebar - profile card */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="glass-card glass-card-hover p-6 lg:p-8 flex flex-col items-center text-center lg:items-start lg:text-left sticky top-6">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 mb-4 flex-shrink-0">
              <Image
                src="https://static.wikia.nocookie.net/solo-leveling/images/8/84/Sung_Jinwoo_Season_2_CV.png"
                alt="Brandon Lee"
                fill
                className="object-cover object-top"
                priority
                sizes="112px"
              />
            </div>
            <h1 className="text-xl font-bold text-white mb-0.5">Brandon Lee</h1>
            <a
              href="https://instagram.com/branjinlee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-4 transition-colors group"
            >
              <svg
                className="w-4 h-4 flex-shrink-0 opacity-80 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@branjinlee</span>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              CS & Math @ Vanderbilt. I code and play Valorant.
            </p>

            {/* Valorant rank */}
            <div className="w-full mb-6 pt-4 border-t border-white/10">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                Valorant (Competitive)
              </p>
              <a
                href={valorantTrackerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xs mb-3 inline-block transition-colors"
              >
                View on Tracker →
              </a>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                  <Image
                    src={getRankImageUrl(
                      valorantRanks.peak.tier,
                      valorantRanks.peak.subTier
                    )}
                    alt="Peak rank"
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Peak · {valorantRanks.peak.tier}{" "}
                    {valorantRanks.peak.tier === "Radiant" ? "" : valorantRanks.peak.subTier}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {valorantRanks.peak.rr} RR · Episode {valorantRanks.peak.episode} Act{" "}
                    {valorantRanks.peak.act}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 text-slate-300 hover:bg-white/20 hover:text-white hover:border-white/20 transition-all duration-300"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top navigation */}
          <nav className="glass-card mb-6 p-2 flex flex-wrap gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id as "projects" | "setup")}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-white/15 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Projects */}
          {activeTab === "projects" && (
          <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="glass-card glass-card-hover p-5 md:p-6 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden ${
                      "iconImage" in project && project.iconImage
                        ? "bg-transparent border border-white/10"
                        : "bg-white/10 border border-white/10"
                    }`}
                  >
                    {"iconImage" in project && project.iconImage ? (
                      <Image
                        src={project.iconImage}
                        alt=""
                        width={48}
                        height={48}
                        className="object-contain w-full h-full p-1.5 drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
                      />
                    ) : (
                      project.icon
                    )}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-white truncate">
                      {project.name}
                    </h2>
                    <p className="text-slate-400 text-sm">{project.tech}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.visitUrl}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-medium transition-all duration-300 border border-white/10"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {"visitLabel" in project && project.visitLabel
                      ? project.visitLabel
                      : "Visit"}
                  </a>
                </div>
              </article>
            ))}
          </section>
          )}

          {/* Setup */}
          {activeTab === "setup" && (
          <section id="setup" className="space-y-4 md:space-y-6">
            <p className="text-slate-400 text-sm mb-6">
              My setup is split between school and home — two different environments depending on where I am.
            </p>

            <div className="glass-card glass-card-hover p-5 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Development environment</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                My primary machine is a <strong className="text-white">MacBook (M5, 24GB RAM)</strong>. I use it for coding, research, web development, and project work.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                For web development I mainly use <strong className="text-white">Next.js</strong>. <strong className="text-white">Python</strong> is for scripting, automation, research workflows, and ML experimentation. Most of my backend and tooling is <strong className="text-white">JavaScript/TypeScript</strong> and Python. I keep my workflow simple — tools that let me build quickly and iterate fast. Projects are usually web apps, browser extensions, APIs, or research-focused tools.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-5 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Desktop apps</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                I mostly work inside the browser and terminal. <strong className="text-white">Chrome</strong> for day-to-day use, testing, and extension development. <strong className="text-white">Spotify</strong> is usually running in the background.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-5 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Tech stack</h2>
              <ul className="text-slate-300 text-sm space-y-1.5">
                <li><strong className="text-white">Next.js</strong> — web applications</li>
                <li><strong className="text-white">JavaScript / TypeScript</strong> — frontend and full-stack</li>
                <li><strong className="text-white">Python</strong> — automation, experimentation, ML workflows</li>
                <li><strong className="text-white">MongoDB & Redis</strong> — databases when needed</li>
              </ul>
            </div>

            <div className="glass-card glass-card-hover p-5 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Gaming / home setup</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                At home I use a custom desktop built for high FPS and competitive performance.
              </p>
              <ul className="text-slate-300 text-sm space-y-2 mb-4">
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">GPU:</strong>
                  <a href="https://www.amazon.com/s?k=RTX+4070+Ti" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">RTX 4070 Ti</a>
                </li>
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">CPU:</strong>
                  <a href="https://www.amazon.com/s?k=Ryzen+9+5900X" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Ryzen 9 5900X</a>
                </li>
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">RAM:</strong>
                  <a href="https://www.amazon.com/s?k=16GB+DDR5+RAM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">16GB DDR5</a>
                </li>
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex flex-wrap items-center gap-2">
                <strong className="text-white">Monitor:</strong>
                <a href="https://zowie.benq.com/en-us/monitor/xl2566k.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">BenQ Zowie 360Hz with DyAc+</a>
                — motion clarity is extremely sharp and makes a noticeable difference in competitive FPS.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-5 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Peripherals</h2>
              <ul className="text-slate-300 text-sm space-y-2">
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">Mouse:</strong>
                  <a href="https://www.amazon.com/s?k=Logitech+G+Pro+X+Superlight" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Logitech Superlight</a>
                </li>
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">Mousepad:</strong>
                  <a href="https://zowie.benq.com/en-us/mouse-pad/g-sr-ii.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">BenQ Zowie</a>
                </li>
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">Keyboard:</strong>
                  <a href="https://wooting.io/wooting-60he" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Wooting 60HE+</a>
                </li>
                <li className="flex flex-wrap items-center gap-2">
                  <strong className="text-white">Headset:</strong>
                  <a href="https://www.amazon.com/s?k=HyperX+Cloud+headset" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">HyperX</a>
                </li>
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                The Wooting 60HE+ is probably my favorite — rapid trigger and adjustable actuation feel genuinely different once you get used to it.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-5 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Computers</h2>
              <ul className="text-slate-300 text-sm space-y-2">
                <li><strong className="text-white">School:</strong> MacBook (M5, 24GB RAM) — portability and flexibility</li>
                <li><strong className="text-white">Home:</strong> Custom desktop (Ryzen 9 5900X + RTX 4070 Ti) — raw performance and responsiveness</li>
              </ul>
            </div>
          </section>
          )}
        </main>
      </div>
    </div>
  );
}
