/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const relatedArticle = require(`./src/components/blog/relatedArticles`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPosttmplate = require.resolve(`./src/tmplates/blogtmplate.tsx`)
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
    articles.forEach((article, index) => {

        const previous = index === articles.length - 1 ? null : articles[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        const latestArticles_tmp = []

        articles.map(e => {
            if (e.node.frontmatter.slug !== article.node.frontmatter.slug) {
                const frontmatter = e.node.frontmatter
                const tmp = {
                    title: frontmatter.title,
                    slug: frontmatter.slug,
                    date: frontmatter.date,
                }
                latestArticles_tmp.push(tmp)
            }
        })

        const latestArticles = latestArticles_tmp.slice(0, 5)

        const relatedArticles = relatedPost.extractRelatedArticles(
            posts,
            post,
            relatedArticle.defaultConfig
        )

        createPage({
            path: node.frontmatter.slug,
            component: blogPosttmplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
                relatedArticles,
                latestArticles,
                previous,
                next
            },
        })
    })
}
