import type { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql<{
        allMdx: {
            nodes: {
                id: string
                frontmatter: { slug: string }
            }[]
        }
    }>(`
    {
      allMdx{
        nodes {
        id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild("🚨  ERROR: Loading MDX result", result.errors)
        return
    }

    const projects = result.data?.allMdx.nodes!

    // Print the projects to the console for debugging
    console.log("Projects found:", projects)

    projects.forEach(node => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve("./src/templates/project-template.tsx"),
            context: {
                id: node.id,
            },
        })
    })
}