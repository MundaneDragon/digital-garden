type SkillNode = {
  name: string;
  tooltip: string;
  foundational?: boolean;
};

type SkillBranch = {
  label: string;
  description: string;
  skills: SkillNode[];
};

const BRANCHES: SkillBranch[] = [
  {
    label: "Expert Core",
    description:
      "Languages and runtimes I reach for daily — battle-tested across coursework, hackathons, and production side projects.",
    skills: [
      {
        name: "Python",
        tooltip:
          "Primary language for ICPC and SPAR competitive programming; also used for the Zenith invoice-generation engine.",
        foundational: true,
      },
      {
        name: "JavaScript",
        tooltip:
          "Core scripting language for full-stack projects including Echo, Missing Link, and SpeakAndLearn.ai.",
        foundational: true,
      },
      {
        name: "TypeScript",
        tooltip:
          "Used to migrate the real-time Toohak quiz platform from plain JS to strict typed interfaces under Agile.",
        foundational: true,
      },
      {
        name: "Node.js",
        tooltip:
          "Backend runtime for Sentifi microservices and the Toohak Express + Socket.IO game server.",
        foundational: true,
      },
      {
        name: "Express",
        tooltip:
          "RESTful API layer for Toohak session management and Sentifi news-aggregation routes.",
        foundational: true,
      },
      {
        name: "VS Code",
        tooltip:
          "Daily driver for monorepo navigation, integrated linting, and multi-language debugging across every project.",
        foundational: true,
      },
    ],
  },
  {
    label: "Advanced Frontend & Design",
    description:
      "Building polished, accessible interfaces from wireframe to production deployment.",
    skills: [
      {
        name: "React",
        tooltip:
          "Built the Echo avatar selector, Zwift route explorer, and Missing Link event dashboard in React with hooks and context.",
      },
      {
        name: "Git / GitHub",
        tooltip:
          "Branching, PR reviews, and CI/CD workflows for group projects including Sentifi and Dungeon Mania.",
      },
      {
        name: "Figma",
        tooltip:
          "High-fidelity prototyping for LoopedIn (DESN2000) and UI/UX iterations for the Echo hackathon project.",
      },
    ],
  },
  {
    label: "Systems, DBs & Tools",
    description:
      "Lower-level languages, persistence layers, and platform tooling that round out full-stack delivery.",
    skills: [
      {
        name: "Java",
        tooltip:
          "Object-oriented design in Dungeon Mania (COMP2511) — composite, observer, and strategy patterns across a large codebase.",
      },
      {
        name: "C / C++",
        tooltip:
          "Systems programming fundamentals; applied in UNSW coursework for memory management and pointer-level reasoning.",
      },
      {
        name: "SQL",
        tooltip:
          "Schema design and query optimisation for Sentifi news aggregation and Toohak quiz-result persistence.",
      },
      {
        name: "Tailwind CSS",
        tooltip:
          "Utility-first styling across this portfolio, the Echo glassmorphism UI, and the SpeakAndLearn.ai admin dashboard.",
      },
      {
        name: "Bootstrap",
        tooltip:
          "Rapid prototyping framework used in early UNSW frontend coursework to scaffold responsive layouts quickly.",
      },
      {
        name: "Linux / WSL",
        tooltip:
          "Development environment for Docker containers, shell scripting, and cross-platform toolchain management.",
      },
      {
        name: "Docker",
        tooltip:
          "Containerised the Sentifi microservice stack and local PostgreSQL instances for isolated integration testing.",
      },
      {
        name: "MySQL",
        tooltip:
          "Relational persistence for Toohak quiz sessions; designed normalised schemas with foreign-key constraints.",
      },
      {
        name: "PostgreSQL",
        tooltip:
          "Advanced querying for Sentifi news analytics; used window functions and materialised views for report generation.",
      },
      {
        name: "MongoDB",
        tooltip:
          "Document-store evaluation for semi-structured event data in the Missing Link society aggregator prototype.",
      },
      {
        name: "Excel Macros",
        tooltip:
          "Data visualisation and VBA automation for finance and engineering coursework analytics at UNSW.",
      },
    ],
  },
] as const;

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-20 px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Skill Tree
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          A living map of technologies I&rsquo;ve wielded across systems design,
          competitive programming, and full-stack product engineering.
        </p>
      </header>

      <div className="space-y-20">
        {BRANCHES.map((branch) => (
          <section key={branch.label}>
            <div className="mb-5 space-y-1">
              <h2 className="text-lg font-semibold tracking-tight text-slate-200">
                {branch.label}
              </h2>
              <p className="text-sm leading-relaxed text-slate-500">
                {branch.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {branch.skills.map((skill) => (
                <div key={skill.name} className="group relative">
                  {/* Skill node */}
                  <span
                    className={`inline-block cursor-default rounded-glass px-4 py-2 text-sm font-medium transition-all select-none
                      ${
                        skill.foundational
                          ? "bg-brand-500/15 text-brand-300 border border-brand-500/30 shadow-sm shadow-brand-500/10"
                          : "bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-700/60 hover:text-slate-100"
                      }
                    `}
                  >
                    {skill.name}
                  </span>

                  {/* Tooltip */}
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 rounded-lg border border-slate-700 bg-slate-900/95 px-3 py-2 text-xs leading-relaxed text-slate-300 opacity-0 shadow-xl backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
                    style={{ maxWidth: "16rem", width: "max-content" }}
                  >
                    {skill.tooltip}
                    {/* Arrow */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-slate-700" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
