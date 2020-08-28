import React from "react";
import { graphql } from "gatsby";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

import { BlogPageTemplate } from "./blogPageTemplate";
import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogListArticles } from "../components/blog/blogListArticles";
import { TagIcon, FolderIcon } from "../components/icons/infoIcons";
import { BlogSideTagList } from "../components/blog/blogSideTagList";
import { BlogSideArchiveList } from "../components/blog/blogSideArchiveList";

const blogTagPageTemplate = ({
  data,
  pageContext,
}: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const tagName = pageContext.slug;

  const articles = data.allMarkdownRemark.edges;

  const articleList = articles.map(({ node }) => {
    const frontmatter = node.frontmatter;
    return <BlogListArticles frontmatter={frontmatter!} />;
  });

  const iconClass = mergeStyles({
    fontSize: "1.2rem",
    margin: "0px 15px 0px 0",
  });

  const body = (
    <>
      <h3>
        <TagIcon iconClass={iconClass} />
        {tagName}
      </h3>
      <section>
        <b>{articles.length}</b> articles are found.
      </section>
      {articleList}
    </>
  );
  return (
    <BlogPageTemplate
      title={`tag: ${tagName}`}
      description={`List of articles including ${tagName} tags.`}
      body={body}
      side={
        <>
          <div className="articleSidePane">
            <BlogSideTagList />
          </div>
          <div className="articleSidePane">
            <BlogSideArchiveList />
          </div>
        </>
      }
    />
  );
};

export default blogTagPageTemplate;

export const pageQuery = graphql`
  query BlogTagArticleList($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$slug] } } }
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
`;
