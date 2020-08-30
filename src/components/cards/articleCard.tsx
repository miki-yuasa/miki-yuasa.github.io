import React from "react";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardType,
  IDocumentCardStyles,
  DocumentCardPreview,
  IDocumentCardPreviewProps,
} from "office-ui-fabric-react/lib/DocumentCard";
import { ImageFit } from "office-ui-fabric-react/lib/Image";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";

import {
  MarkdownRemarkFrontmatter,
  Maybe,
} from "../../../@types/graphql-types";

export function ArticleCard(props: {
  title: string;
  href: string;
  imageSrc: string;
}) {
  const cardStyles: IDocumentCardStyles = {
    root: {
      display: "inline-block",
      margin: 10,
      width: 320,
      boxShadow: Depths.depth8,
      paddingTop: 18,
      paddingBottom: 10,
    },
  };

  const previewProps: IDocumentCardPreviewProps = {
    previewImages: [
      {
        name: "Redirect to this blog article.",
        linkProps: {
          href: props.href,
          target: "_blank",
        },
        previewImageSrc: props.imageSrc,
        imageFit: ImageFit.cover,
        //width: 320,
        height: 140,
      },
    ],
  };

  return (
    <DocumentCard
      aria-label="Default Document Card."
      styles={cardStyles}
      onClickHref={props.href}
    >
      <DocumentCardPreview {...previewProps} />
      <DocumentCardTitle title={props.title} />
    </DocumentCard>
  );
}
