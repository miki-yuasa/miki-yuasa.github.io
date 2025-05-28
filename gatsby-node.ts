import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const result = await graphql<{
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            slug: string;
          };
          id: string;
          internal: {
            contentFilePath: string;
          };
        };
      }[];
    };
  }>(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("🚨  ERROR: Loading MDX result", result.errors);
    return;
  }

  const projects = result.data?.allMdx.edges!;

  // Print the projects to the console for debugging
  console.log("Projects found:", projects);

  projects.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${path.resolve(
        "./src/templates/project-template.tsx"
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};
