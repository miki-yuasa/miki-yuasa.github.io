import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { BlogPageTemplate } from "../../templates/blogPageTemplate";
import { BlogListArticles } from "../../components/blog/blogListArticles";
import { BlogArticleListQuery } from "../../../@types/graphql-types";
import { BlogSidePanes } from "../../components/blog/blogSidePanes";
import { BlogBreadCrumb } from "../../components/blog/blogBreadCrumb";
import { CrumbItem } from "../../../@types";

const BlogTop = () => {
  const data: BlogArticleListQuery = useStaticQuery(graphql`
    query BlogArticleList {
      site {
        siteMetadata {
          title
          description
        }
      }

      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              tags
              slug
            }
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;

  const itemsWithHref: CrumbItem[] = [
    { text: "Landing Page", href: "/" },
    { text: "Blog Top" },
  ];

  const body = (
    <>
      <BlogBreadCrumb crumbItems={itemsWithHref} />
      {articles.map(({ node }) => {
        const frontmatter = node.frontmatter;
        return <BlogListArticles frontmatter={frontmatter!} />;
      })}
    </>
  );

  return (
    <BlogPageTemplate
      title={`Miki's Blog Top Page`}
      description={`The top page of Miki's blog`}
      body={body}
      side={<BlogSidePanes />}
    />
  );
};

export default BlogTop;
