import { getAllPosts } from "@/lib/markdown";
import GardenSearch from "@/components/features/GardenSearch";

export const metadata = {
  title: "Digital Garden | Briyan Biju",
  description:
    "Long-form engineering articles and quick Today-I-Learned notes on systems, algorithms, and frontend craft.",
};

export default async function GardenPage() {
  const [articles, notes] = await Promise.all([
    getAllPosts("article"),
    getAllPosts("note"),
  ]);

  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Digital Garden
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Evergreen notes, half-baked ideas, and long-form engineering write-ups
          — cultivated over time.
        </p>
      </header>

      <GardenSearch articles={articles} notes={notes} />
    </main>
  );
}
