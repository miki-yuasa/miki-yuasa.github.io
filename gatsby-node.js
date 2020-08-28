/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const relatedArticle = require("./src/components/blog/relatedArticles.jsx");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogArticleTemplate = path.resolve(
    "./src/templates/blogArticlePageTemplate.tsx"
  );
  const blogTagPageTemplate = path.resolve(
    "./src/templates/blogTagPageTemplate.tsx"
  );

  const { createPage } = actions;
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
              keywords
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
      component: blogArticleTemplate,
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

  // category and tag pages
  const tagListTemp = [];
  const catListTemp = [];

  articles.forEach((article) => {
    const tags = article.node.frontmatter.tags;
    tags.forEach((tag) => {
      tagListTemp.push(tag);

      const category = tag.split("/")[0];
      catListTemp.push(category);
    });
  });
  // delete duplicate tags
  const tagSet = new Set(tagListTemp);
  const tagList = Array.from(tagSet);
  const catSet = new Set(catListTemp);
  const catList = Array.from(catSet);

  // generate tag pages

  if (tagList.length !== 0) {
    tagList.forEach((tag) => {
      createPage({
        path: `/blog/tags/${tag.toLowerCase()}/`,
        component: blogTagPageTemplate,
        context: {
          slug: tag,
          kind: "tag",
        },
      });
    });
  }

  if (catList.length !== 0) {
    catList.forEach((cat) => {
      createPage({
        path: `/blog/tags/${cat.toLowerCase()}/`,
        component: blogTagPageTemplate,
        context: {
          slug: cat,
          kind: "cat",
        },
      });
    });
  }
};
