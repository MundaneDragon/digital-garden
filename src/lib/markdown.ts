import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { PostMetadata, PostType, MarkdownPost } from "@/types/garden";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

const DIR_MAP: Record<PostType, string> = {
  article: "articles",
  note: "notes",
};

/**
 * Derive a URL-safe slug from the filename (strip extension).
 */
function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

/**
 * Safely cast a raw frontmatter value to a string array.
 * Supports comma-separated strings or YAML arrays.
 */
function normalizeTags(raw: unknown): string[] {
  if (Array.isArray(raw)) {
    return raw.map((t) => String(t).trim()).filter(Boolean);
  }
  if (typeof raw === "string") {
    return raw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
}

/**
 * Build a safe PostMetadata object from parsed gray-matter data,
 * filling in sensible defaults for missing properties.
 */
function toMetadata(
  slug: string,
  type: PostType,
  data: Record<string, unknown>,
): PostMetadata {
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "1970-01-01",
    tags: normalizeTags(data.tags),
    excerpt:
      typeof data.excerpt === "string" && data.excerpt.length > 0
        ? data.excerpt
        : undefined,
    type,
    awardBadge:
      typeof data.awardBadge === "string" && data.awardBadge.length > 0
        ? data.awardBadge
        : undefined,
  };
}

/**
 * Read all markdown posts from the given content type directory.
 * Sorted newest-first by the `date` frontmatter field.
 *
 * ⚠️ Node.js only — uses `fs.readdirSync` and `fs.readFileSync`.
 */
export async function getAllPosts(
  contentType: PostType,
): Promise<PostMetadata[]> {
  const dir = path.join(CONTENT_ROOT, DIR_MAP[contentType]);

  let filenames: string[];
  try {
    filenames = fs.readdirSync(dir);
  } catch {
    // Directory does not exist or is empty — return gracefully.
    return [];
  }

  const mdFiles = filenames.filter((f) => f.endsWith(".md"));

  const posts = mdFiles.map((filename) => {
    const slug = slugFromFilename(filename);
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return toMetadata(slug, contentType, data as Record<string, unknown>);
  });

  // Sort descending by date (newest first).
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return posts;
}

/**
 * Read a single markdown post by slug and return its metadata + rendered HTML.
 *
 * ⚠️ Node.js only — uses `fs.readFileSync` and remark processing.
 */
export async function getPostBySlug(
  slug: string,
  contentType: PostType,
): Promise<MarkdownPost | null> {
  const dir = path.join(CONTENT_ROOT, DIR_MAP[contentType]);
  const filePath = path.join(dir, `${slug}.md`);

  let raw: string;
  try {
    raw = fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }

  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return {
    metadata: toMetadata(slug, contentType, data as Record<string, unknown>),
    contentHtml,
  };
}
