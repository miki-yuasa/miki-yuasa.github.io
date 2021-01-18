import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { ImageQuery } from "../../@types/graphql-types";

// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
const Image = (props: { filename: string; style: object }) => {
  const data = useStaticQuery<GatsbyTypes.ImageQuery>(
    graphql`
      query Image {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const image = data.images.edges.filter(
    (n) => n.node.relativePath === props.filename
  );
  if (!image) return;
  // Imgタグでgatsby-imageで最適化された画像を表示する
  const imageSizes: FluidObject = image[0].node.childImageSharp?.fluid!;
  return <Img fluid={imageSizes} style={props.style} />;
};

export default Image;
