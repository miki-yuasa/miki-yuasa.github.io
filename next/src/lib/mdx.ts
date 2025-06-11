import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { join } from "path";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "rehype-prism-plus";
import rehypeImageToolkit from "rehype-image-toolkit";
import { AuthorProps } from "@/types";

// マークダウンをHTMLに変換する関数
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism, { showLineNumbers: true })
    .use(rehypeImageToolkit)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return result.toString();
}

export function getMarkdownFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

export type ExternalLink = {
  paper?: string;
  arxiv?: string;
  github?: string;
  demo?: string;
};

export type Post = {
  content: string;
  title: string;
  date: string;
  slug: string;
};

export type ResearchPost = Post & {
  authors: AuthorProps[];
  links: ExternalLink;
  abstract: string;
  venue?: string;
  featuredImage?: string;
};

export function getPostBySlug<T extends Post>(
  postsDirectory: string,
  slug: string
) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(
    process.cwd(),
    postsDirectory,
    `${realSlug}`,
    `${realSlug}.mdx`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as T;
}

export function getDirPostSlugs(postsDirectory: string): string[] {
  const files = fs.readdirSync(join(process.cwd(), postsDirectory));
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getAllDirPosts<T extends Post>(postsDirectory: string): T[] {
  const slugs = getDirPostSlugs(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(postsDirectory, slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts as T[];
}
