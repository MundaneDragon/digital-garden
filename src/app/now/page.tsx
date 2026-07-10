const TIMELINE = [
  {
    label: "Academic Status",
    date: "2026 – early 2027",
    gradient: "from-brand-400 to-cyan-300",
    items: [
      "Final-year Software Engineering at UNSW, tracking at Distinction average (80 WAM).",
      "Actively seeking 2027 Graduate SWE roles — open to full-stack, platform, and systems engineering positions.",
    ],
  },
  {
    label: "Leadership",
    date: "Completed 2026",
    gradient: "from-violet-400 to-purple-300",
    items: [
      "Graduate of the UNSW Leadership Foundation & Professional Development Program — recognised on my AHEGS statement.",
      "Trained in team motivation, conflict resolution, and Agile professional communication within cross-functional teams.",
    ],
  },
  {
    label: "Extracurricular",
    date: "Ongoing",
    gradient: "from-emerald-400 to-teal-300",
    items: [
      "Active member of the UNSW Competitive Programming & Mathematics Society (CPMSoc).",
      "Daily LeetCode grinding with focus on dynamic programming, graph traversal, and sorting optimizations for ICPC and technical interviews.",
    ],
  },
  {
    label: "Freelance",
    date: "2023 – present",
    gradient: "from-amber-400 to-orange-300",
    items: [
      "Fiverr Excel Data Visualization & Macro Consultant — translating client requirements into automated dashboards and VBA tooling.",
      "Developed a repeatable discovery-to-delivery workflow: requirements intake → prototype → revision → final handover with documentation.",
    ],
  },
] as const;

export const metadata = {
  title: "/now | Briyan Biju",
  description:
    "What Briyan Biju is focused on right now — final-year SWE at UNSW, leadership, competitive programming, and freelance consulting.",
};

export default function NowPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-16 px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          /now
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-400">
          A snapshot of what I&rsquo;m building, learning, and chasing right
          now — inspired by the{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300 underline decoration-brand-500/30 underline-offset-2 transition-colors"
          >
            /now page movement
          </a>
          .
        </p>
      </header>

      {/* Vertical timeline */}
      <div className="relative">
        {/* Centre spine */}
        <div className="absolute inset-y-0 left-[19px] w-px bg-gradient-to-b from-slate-800 via-slate-800/50 to-transparent sm:left-[23px]" />

        <ol className="space-y-0">
          {TIMELINE.map((section, i) => (
            <li key={section.label} className="relative pb-12 last:pb-0">
              {/* Timeline dot + connecting line segment */}
              <div className="flex items-start gap-5 sm:gap-6">
                {/* Dot */}
                <div className="relative z-10 mt-1 shrink-0">
                  <div
                    className={`h-[10px] w-[10px] rounded-full bg-gradient-to-br ${section.gradient} shadow-lg ring-4 ring-slate-950`}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 space-y-3">
                  <div>
                    <h2
                      className={`text-lg font-semibold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                    >
                      {section.label}
                    </h2>
                    <time className="mt-0.5 block text-xs font-medium uppercase tracking-wider text-slate-600">
                      {section.date}
                    </time>
                  </div>

                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector line between items (except last) */}
              {i < TIMELINE.length - 1 && (
                <div className="absolute left-[23px] top-[32px] h-[calc(100%-20px)] w-px bg-slate-800/40 sm:left-[27px]" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
