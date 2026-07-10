export default function GardenPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-50">
            Digital Garden
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Evergreen notes, half-baked ideas, and things worth revisiting.
          </p>
        </header>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bento-card animate-pulse-glass h-24"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
