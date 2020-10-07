import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IButtonStyles } from "@fluentui/react";

import SectionTemplate from "../../templates/sectionTemplate";
import { ArticleCard } from "../cards/articleCard";
import { DoubleChevronRightIcon } from "../icons/infoIcons";
import { NavCommandButton } from "../buttons/navCommandButton";
import { BlogCardListQuery } from "../../../@types/graphql-types";
import "../layout.scss";

export default function Blog() {
  const data: BlogCardListQuery = useStaticQuery(graphql`
    query BlogCardList {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              tags
              slug
              image {
                childImageSharp {
                  fluid(maxWidth: 320, maxHeight: 200, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const articleCards: JSX.Element[] = data.allMarkdownRemark.edges.map(
    (edge) => {
      const frontmatter = edge.node.frontmatter;

      const simpleTags: string[] = frontmatter?.tags?.map((tag) => {
        const simpleTag: string = tag?.split("/")[1]!;
        return simpleTag;
      })!;

      return (
        <ArticleCard
          title={frontmatter?.title!}
          href={`blog/articles/${frontmatter?.slug!}`}
          imageSrc={frontmatter?.image?.childImageSharp?.fluid?.src!}
          date={frontmatter?.date}
          tags={simpleTags.join(",")!}
        />
      );
    }
  );

  const buttonStyles: IButtonStyles = {
    root: {
      fontSize: "large",
    },
  };

  return (
    <SectionTemplate title="Blog">
      <p>
        <b>New Articles:</b>
      </p>
      <div className="docCard">{articleCards}</div>
      <p style={{ marginTop: 20 }}>
        <NavCommandButton href="/blog/blog-top" styles={buttonStyles}>
          <b>
            <DoubleChevronRightIcon /> Find out more......
          </b>
        </NavCommandButton>
      </p>
    </SectionTemplate>
  );
}
