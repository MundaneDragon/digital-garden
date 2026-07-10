import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import type { PostMetadata } from "@/types/garden";

const METRICS = [
  {
    label: "Academics",
    lines: ["UNSW Honours SWE", "COMP3142: 93", "SENG2011: 92"],
    accent: "from-brand-500/20 to-brand-600/5",
  },
  {
    label: "Competitive Programming",
    lines: ["ICPC Regionalist", "SPAR 6 / 7 / 8", "ALLUNI Participant"],
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    label: "Leadership",
    lines: [
      "AHEGS Recognised",
      "Leadership Foundation",
      "Program Graduate",
    ],
    accent: "from-violet-500/20 to-violet-600/5",
  },
] as const;

export default async function HomePage() {
  const [articles, notes] = await Promise.all([
    getAllPosts("article"),
    getAllPosts("note"),
  ]);

  const latest: PostMetadata[] = [...articles, ...notes]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl space-y-24 px-6 py-24">
      {/* ── Hero ── */}
      <section className="space-y-8">
        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-50 sm:text-6xl">
          I&rsquo;m Briyan Biju. I build scalable systems and solve brutal
          problems.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Final-year Software Engineering student at UNSW (80 WAM, 99.95 ATAR
          Equivalent). From cracking algorithmic puzzles in ICPC to designing
          end-to-end Next.js applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center rounded-glass bg-brand-500 px-6 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/30"
          >
            Explore Projects
          </Link>
          <Link
            href="/garden"
            className="inline-flex h-12 items-center rounded-glass border border-slate-700 bg-slate-900/60 px-6 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/60 hover:text-slate-100"
          >
            Read My Garden
          </Link>
        </div>
      </section>

      {/* ── Metrics Bento Grid ── */}
      <section>
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
          At a Glance
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className={`bento-card bg-gradient-to-br ${metric.accent} group`}
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {metric.label}
              </h3>
              <ul className="space-y-1.5">
                {metric.lines.map((line) => (
                  <li
                    key={line}
                    className="text-sm font-medium text-slate-200"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Live Activity Stream ── */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Latest from the Garden
          </h2>
          <Link
            href="/garden"
            className="text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        {latest.length === 0 ? (
          <p className="text-sm text-slate-500">
            Nothing planted yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            {latest.map((post) => (
              <Link
                key={post.slug}
                href={`/garden/${post.slug}`}
                className="bento-card flex flex-col justify-between gap-4 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {post.type}
                    </span>
                    {post.awardBadge && (
                      <span className="text-xs">{post.awardBadge}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-slate-100">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800/70 px-1.5 py-0.5 text-[10px] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
