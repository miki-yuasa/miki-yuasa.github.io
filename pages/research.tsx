import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectCards } from "../src/components/Lists/ProjectCards";
import { Layout } from "../src/components/layout";

export async function getStaticProps() {
  const projectsDir = path.join(process.cwd(), "src/contents/projects");
  const projects = fs.readdirSync(projectsDir).flatMap((dir) => {
    const dirPath = path.join(projectsDir, dir);
    return fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(dirPath, file);
        const mdxSource = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(mdxSource);
        return {
          ...data,
          slug: file.replace(/\.mdx$/, ""),
        };
      });
  });
  return {
    props: {
      projects,
    },
  };
}

export default function Research({ projects }) {
  return (
    <Layout>
      <ProjectCards projects={projects} />
    </Layout>
  );
}
