export type PostType = "article" | "note";

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
  type: PostType;
  awardBadge?: string;
}

export interface MarkdownPost {
  metadata: PostMetadata;
  contentHtml: string;
}
