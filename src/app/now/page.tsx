export default function NowPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-50">
            /now
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            What I&apos;m focused on right now.
          </p>
        </header>
        <div className="glass rounded-glass space-y-6 p-8">
          <div className="h-4 w-1/3 animate-pulse-glass rounded bg-slate-800" />
          <div className="space-y-3">
            <div className="h-3 w-full animate-pulse-glass rounded bg-slate-800" style={{ animationDelay: "0.3s" }} />
            <div className="h-3 w-5/6 animate-pulse-glass rounded bg-slate-800" style={{ animationDelay: "0.6s" }} />
            <div className="h-3 w-2/3 animate-pulse-glass rounded bg-slate-800" style={{ animationDelay: "0.9s" }} />
          </div>
        </div>
      </div>
    </main>
  );
}
