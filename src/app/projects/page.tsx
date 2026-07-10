export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-50">
            Projects
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Systems I&apos;ve architected and shipped.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bento-card animate-pulse-glass h-48"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
