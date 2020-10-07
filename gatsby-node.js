/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require("fs");
const path = require("path");
const relatedArticle = require("./src/components/blog/relatedArticles.jsx");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogArticleTemplate = path.resolve(
    "./src/templates/blogArticlePageTemplate.tsx"
  );
  const blogTagPageTemplate = path.resolve(
    "./src/templates/blogTagPageTemplate.tsx"
  );
  const blogCatPageTemplate = path.resolve(
    "./src/templates/blogCatPageTemplate.tsx"
  );

  const blogDatePageTemplate = path.resolve(
    "./src/templates/blogDatePageTemplate.tsx"
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
              year: date(formatString: "YYYY")
              month: date(formatString: "MM")
              tags
              slug
              keywords
              language
              categories
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
      const articleSlug = article.node.frontmatter.slug;
      if (e.node.frontmatter.slug !== articleSlug) {
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

    const articleSlug = article.node.frontmatter.slug;

    createPage({
      path: `/blog/articles/${articleSlug}`,
      component: blogArticleTemplate,
      context: {
        // additional data can be passed via context
        slug: articleSlug,
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
  const tagList = Array.from(new Set(tagListTemp));
  const catList = Array.from(new Set(catListTemp));

  // generate tag pages

  if (tagList.length !== 0) {
    tagList.forEach((tag) => {
      createPage({
        path: `/blog/tags/${tag.toLowerCase()}/`,
        component: blogTagPageTemplate,
        context: {
          slug: tag,
          isCat: false,
        },
      });
    });
  }

  if (catList.length !== 0) {
    catList.forEach((cat) => {
      createPage({
        path: `/blog/tags/${cat.toLowerCase()}/`,
        component: blogCatPageTemplate,
        context: {
          slug: `${cat}`,
          isCat: true,
        },
      });
    });
  }

  // year & month pages
  const years = new Set();
  const yearMonths = new Set();

  articles.forEach((article) => {
    const { year, month } = article.node.frontmatter;
    years.add(year);
    yearMonths.add(`${year}/${month}`);
  });

  yearMonths.forEach((yearMonth) => {
    const [year, month] = yearMonth.split("/");
    const startDate = `${year}-${month}-01T00:00:00.000Z`;
    const newStartDate = new Date(startDate);
    // 月末日を取得
    const endDate = new Date(
      new Date(newStartDate.setMonth(newStartDate.getMonth() + 1)).getTime() - 1
    ).toISOString();

    createPage({
      path: `/blog/archives/${year}/${month}/`,
      component: blogDatePageTemplate,
      context: {
        displayYear: year,
        displayMonth: month,
        periodStartDate: startDate,
        periodEndDate: endDate,
      },
    });
  });

  years.forEach((year) => {
    createPage({
      path: `/blog/archives/${year}/`,
      component: blogDatePageTemplate,
      context: {
        displayYear: year,
        periodStartDate: `${year}-01-01T00:00:00.000Z`,
        periodEndDate: `${year}-12-31T23:59:59.999Z`,
      },
    });
  });

  const searchJSON = articles.map((article) => {
    const articleNode = article.node;
    const { slug, title, tags } = articleNode;
    return {
      title,
      tags,
      path: `/blog/articles/${slug}`,
    };
  });

  // fs.writeFileSync("./static/search.json", JSON.stringify(searchJSON, null, 2));
};
