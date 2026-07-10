const PROJECTS = [
  {
    title: "Echo",
    badge: "🥇 Best Design @ UNIHACK 2026",
    description:
      "Accessible Next.js UI with Speech-to-Text, custom interactive avatar selector, and real-time collaborative workspace — designed and shipped in 48 hours.",
    tags: ["Next.js", "Figma", "Accessibility", "Web Speech API"],
    accent: "from-brand-500/20 to-brand-600/5",
    ring: "ring-brand-500/20",
  },
  {
    title: "SpeakAndLearn.ai",
    badge: "🏆 People's Choice @ CSESoc 2025",
    description:
      "Admin tool for educators powered by OpenAI's speech-to-text API. Enables real-time transcription, pronunciation scoring, and lesson analytics dashboards.",
    tags: ["OpenAI", "Next.js", "Speech-to-Text", "EdTech"],
    accent: "from-emerald-500/20 to-emerald-600/5",
    ring: "ring-emerald-500/20",
  },
  {
    title: "Missing Link",
    badge: "🏆 People's Choice @ DevSoc 2025",
    description:
      "Web app aggregating UNSW society events via web scraping, with iCal syncing so students never miss a workshop, BBQ, or hackathon registration window.",
    tags: ["Web Scraping", "iCal", "React", "Node.js"],
    accent: "from-violet-500/20 to-violet-600/5",
    ring: "ring-violet-500/20",
  },
  {
    title: "Zwift",
    badge: "🥈 2nd Place @ CSESoc 2023",
    description:
      "Route-generation app leveraging the Google Maps API to recommend scenic cycling and running paths based on elevation, distance, and user preferences.",
    tags: ["Google Maps API", "React", "Routing", "UX"],
    accent: "from-amber-500/20 to-amber-600/5",
    ring: "ring-amber-500/20",
  },
  {
    title: "LoopedIn (DESN2000)",
    badge: undefined,
    description:
      "End-to-end Figma high-fidelity prototypes grounded in user research surveys. Iterated through wireframes, usability testing, and interactive component libraries.",
    tags: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    accent: "from-rose-500/20 to-rose-600/5",
    ring: "ring-rose-500/20",
  },
  {
    title: "Sentifi (SENG3011)",
    badge: undefined,
    description:
      "Scalable RESTful backend microservices for news data aggregation. Delivered via two-sprint Agile with CI/CD pipelines, API versioning, and structured error handling.",
    tags: ["Node.js", "Microservices", "REST", "Agile"],
    accent: "from-cyan-500/20 to-cyan-600/5",
    ring: "ring-cyan-500/20",
  },
  {
    title: "Dungeon Mania (COMP2511)",
    badge: undefined,
    description:
      "Enemy detection and object-oriented design in a massive Java codebase. Applied composite, observer, and strategy patterns across a dungeon-crawler game engine.",
    tags: ["Java", "OOP", "Design Patterns", "JUnit"],
    accent: "from-orange-500/20 to-orange-600/5",
    ring: "ring-orange-500/20",
  },
  {
    title: "Zenith (SENG2021)",
    badge: undefined,
    description:
      "B2C-compliant invoice generation system exporting to PDF and CSV. Built with strong separation of concerns, input validation, and automated formatting pipelines.",
    tags: ["Python", "PDF/CSV", "FinTech", "Validation"],
    accent: "from-indigo-500/20 to-indigo-600/5",
    ring: "ring-indigo-500/20",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Projects
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          A selection of systems I&rsquo;ve architected, shipped, and presented
          — from 48-hour hackathon sprints to semester-long Agile deliveries.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden rounded-glass bg-slate-900/50 border border-slate-800 bg-gradient-to-br ${project.accent} p-6 transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl ${project.ring} hover:ring-1`}
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-100">
                  {project.title}
                </h2>
                {project.badge && (
                  <span className="shrink-0 whitespace-nowrap rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Tech badges — revealed on hover */}
              <div className="flex flex-wrap gap-1.5 opacity-60 transition-opacity group-hover:opacity-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle bottom-edge glow bar on hover */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </main>
  );
}
