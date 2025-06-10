import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import ProjectTemplate from "../../src/templates/project-template";

export async function getStaticPaths() {
  const projectsDir = path.join(process.cwd(), "src/contents/projects");
  const slugs = fs.readdirSync(projectsDir).flatMap((dir) => {
    const dirPath = path.join(projectsDir, dir);
    return fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
        params: { slug: file.replace(/\.mdx$/, "") },
        dir,
      }));
  });
  return {
    paths: slugs.map(({ params }) => ({ params })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const projectsDir = path.join(process.cwd(), "src/contents/projects");
  let mdxPath = "";
  let frontMatter = {};
  let source = null;
  for (const dir of fs.readdirSync(projectsDir)) {
    const filePath = path.join(projectsDir, dir, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const mdxSource = fs.readFileSync(filePath, "utf-8");
      const { content, data } = matter(mdxSource);
      source = await serialize(content, { scope: data });
      frontMatter = data;
      mdxPath = filePath;
      break;
    }
  }
  if (!source) return { notFound: true };
  return {
    props: {
      source,
      frontMatter,
    },
  };
}

export default ProjectTemplate;
