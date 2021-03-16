import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IButtonStyles } from "@fluentui/react";
import { getSrc } from "gatsby-plugin-image"

import SectionTemplate from "../../templates/sectionTemplate";
import { ArticleCard } from "../cards/articleCard";
import { DoubleChevronRightIcon } from "../icons/infoIcons";
import { NavCommandButton } from "../buttons/navCommandButton";
import { BlogCardListQuery } from "../../../@types/graphql-types";

export default function Blog() {
  const data: BlogCardListQuery = useStaticQuery<GatsbyTypes.BlogCardListQuery>(graphql`
    query BlogCardList {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              tags
              slug
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout:CONSTRAINED, 
                    width:320, 
                    height:200, 
                    placeholder:TRACED_SVG, 
                    quality:80)
                }
              }
            }
          }
        }
      }
    }
  `);

  const articleCards: JSX.Element[] = data.allMdx.edges.map(
    (edge) => {
      const frontmatter = edge.node.frontmatter;

      const simpleTags: string[] = frontmatter?.tags?.map((tag) => {
        const simpleTag: string = tag?.split("/")[1]!;
        return simpleTag;
      })!;

      const tagString: string = simpleTags.length >= 4
        ? simpleTags.slice(0, 3).join(", ") + " ..."
        : simpleTags.join(", ");

      return (
        <ArticleCard
          title={frontmatter?.title!}
          href={`blog/articles/${frontmatter?.slug!}`}
          imageSrc={getSrc(frontmatter?.image?.childImageSharp)!}
          date={frontmatter?.date}
          tags={tagString}
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
        <NavCommandButton href="/blog" styles={buttonStyles}>
          <b>
            <DoubleChevronRightIcon /> Find out more......
          </b>
        </NavCommandButton>
      </p>
    </SectionTemplate>
  );
}
