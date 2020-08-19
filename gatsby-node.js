/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.tsx`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                tags
                slug
                keyword
                language
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const articles = result.data.allMarkdownRemark.edges
    // individual article
    articles.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
            },
        })
    })
}
