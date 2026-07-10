export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-50">
            Skills
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Technologies I wield across the stack.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bento-card animate-pulse-glass flex h-40 items-center justify-center"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <span className="text-sm text-slate-500">skill slot</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
