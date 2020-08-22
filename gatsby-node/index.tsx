const relatedArticle = require("../src/components/blog/relatedArticles.tsx");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogarticletmplate = require.resolve(
    "../src/templates/blogTemplate.tsx"
  );
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
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const articles = result.data.allMarkdownRemark.edges;

  // individual article page
  articles.forEach((article, index) => {
    const previous =
      index === articles.length - 1 ? null : articles[index + 1].node;
    const next = index === 0 ? null : articles[index - 1].node;

    const latestArticles_tmp = [];

    articles.map((e) => {
      if (e.node.frontmatter.slug !== article.node.frontmatter.slug) {
        const frontmatter = e.node.frontmatter;
        const tmp = {
          title: frontmatter.title,
          slug: frontmatter.slug,
          date: frontmatter.date,
        };
        latestArticles_tmp.push(tmp);
      }
    });

    const latestArticles = latestArticles_tmp.slice(0, 5);

    const relatedArticles = relatedArticle.extractRelatedArticles(
      articles,
      article,
      relatedArticle.defaultConfig
    );

    createPage({
      path: article.node.frontmatter.slug,
      component: blogarticletmplate,
      context: {
        // additional data can be passed via context
        slug: article.node.frontmatter.slug,
        relatedArticles,
        latestArticles,
        previous,
        next,
      },
    });
  });
};
