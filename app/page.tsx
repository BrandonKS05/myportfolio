import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Photos", href: "#" },
  { label: "Setup", href: "#" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
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
    name: "MangaUpdates Bot",
    tech: "Python",
    description: "Discord bot that tracks manga updates and notifies users when new chapters are released. Integrates with MangaUpdates API for real-time tracking.",
    visitUrl: "#",
    githubUrl: "https://github.com",
    icon: "📚",
  },
  {
    id: "2",
    name: "GitCloser",
    tech: "Go, TypeScript",
    description: "CLI tool that helps close stale issues and PRs based on configurable rules. Keeps repositories tidy and improves maintainability.",
    visitUrl: "#",
    githubUrl: "https://github.com",
    icon: "🔗",
  },
  {
    id: "3",
    name: "Retrievify",
    tech: "TypeScript, Next.js",
    description: "Search and retrieval dashboard with full-text search and filters. Built for fast discovery across large document collections.",
    visitUrl: "#",
    githubUrl: "https://github.com",
    icon: "📊",
  },
  {
    id: "4",
    name: "Picsiv",
    tech: "React, Node.js",
    description: "Image gallery and curation app with tagging and collections. Upload, organize, and share your visual assets with ease.",
    visitUrl: "#",
    githubUrl: "https://github.com",
    icon: "🖼️",
  },
  {
    id: "5",
    name: "SugoiArt",
    tech: "Python, FastAPI",
    description: "API and web frontend for browsing and searching artwork. Supports multiple sources and advanced filtering options.",
    visitUrl: "#",
    githubUrl: "https://github.com",
    icon: "🎨",
  },
  {
    id: "6",
    name: "Art Workers",
    tech: "TypeScript, Rust",
    description: "Background job processor for image and media pipelines. Reliable queue with retries and monitoring.",
    visitUrl: "#",
    githubUrl: "https://github.com",
    icon: "⚙️",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen gradient-bg">
      <div className="flex flex-col lg:flex-row min-h-screen gap-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Left sidebar - profile card */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="glass-card glass-card-hover p-6 lg:p-8 flex flex-col items-center text-center lg:items-start lg:text-left sticky top-6">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 mb-4 flex-shrink-0">
              <Image
                src="/avatar.svg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-xl font-bold text-white mb-0.5">Your Name</h1>
            <p className="text-slate-400 text-sm mb-4">@username</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Short bio goes here. e.g. CS @ University. I build things with code.
            </p>
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
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  item.label === "Projects"
                    ? "bg-white/15 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Project cards grid */}
          <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="glass-card glass-card-hover p-5 md:p-6 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {project.icon}
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
                    Visit
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
