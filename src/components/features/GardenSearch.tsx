"use client";

import { useState, useMemo } from "react";
import type { PostMetadata } from "@/types/garden";

type Props = {
  articles: PostMetadata[];
  notes: PostMetadata[];
};

export default function GardenSearch({ articles, notes }: Props) {
  const [query, setQuery] = useState("");

  const filter = (posts: PostMetadata[]): PostMetadata[] => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  };

  const filteredArticles = useMemo(() => filter(articles), [articles, query]);
  const filteredNotes = useMemo(() => filter(notes), [notes, query]);

  return (
    <div className="space-y-16">
      {/* Search bar */}
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or tag…"
          aria-label="Search posts by title or tag"
          className="w-full rounded-glass border border-slate-700/70 bg-slate-900/50 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition-colors"
        />
        {query && (
          <p className="mt-2 text-xs text-slate-500">
            {filteredArticles.length + filteredNotes.length} result
            {filteredArticles.length + filteredNotes.length !== 1 ? "s" : ""}{" "}
            for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {/* ── Deep Dives (Articles) ── */}
      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500">
          Deep Dives
        </h2>
        {filteredArticles.length === 0 ? (
          <p className="text-sm text-slate-600">No articles match your search.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredArticles.map((post) => (
              <article
                key={post.slug}
                className="bento-card flex flex-col gap-3 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-2">
                  <h3 className="flex-1 text-base font-semibold leading-snug text-slate-100">
                    {post.title}
                  </h3>
                  {post.awardBadge && (
                    <span className="shrink-0 text-sm" title={post.awardBadge}>
                      {post.awardBadge}
                    </span>
                  )}
                </div>

                {post.excerpt && (
                  <p className="text-xs leading-relaxed text-slate-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-800/70 px-1.5 py-0.5 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-[11px] text-slate-600"
                  >
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── Today I Learned (Notes) ── */}
      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500">
          Today I Learned
        </h2>
        {filteredNotes.length === 0 ? (
          <p className="text-sm text-slate-600">No notes match your search.</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-3">
            {filteredNotes.map((post) => (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/40 p-4 transition-all hover:border-slate-700 hover:bg-slate-900/60 hover:-translate-y-0.5"
              >
                {/* Accent strip */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-brand-500/60 to-violet-500/60 opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold leading-snug text-slate-200">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-xs leading-relaxed text-slate-500 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-800/70 px-1.5 py-0.5 text-[10px] font-mono text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                    <time
                      dateTime={post.date}
                      className="ml-auto text-[10px] text-slate-600"
                    >
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "short",
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
