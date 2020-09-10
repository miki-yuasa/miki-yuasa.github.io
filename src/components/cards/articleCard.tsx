import React from "react";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardStatus,
  IDocumentCardStyles,
  DocumentCardPreview,
  IDocumentCardPreviewProps,
  IDocumentCardStatusStyles,
} from "office-ui-fabric-react/lib/DocumentCard";
import { ImageFit } from "office-ui-fabric-react/lib/Image";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import { initializeIcons } from "office-ui-fabric-react";

export function ArticleCard(props: {
  title: string;
  date: string;
  href: string;
  imageSrc: string;
  tags: string;
}) {
  initializeIcons();

  const cardStyles: IDocumentCardStyles = {
    root: {
      display: "inline-block",
      margin: 10,
      width: 320,
      boxShadow: Depths.depth8,
      paddingTop: 0,
      paddingBottom: 10,
    },
  };

  const statusStyles: IDocumentCardStatusStyles = {
    root: {
      marginTop: -10,
      paddingTop: -10,
      paddingBottom: 45,
      marginBottom: 0,
      verticalAlign: "middle",
      textAlign: "center",
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
        width: 320,
        height: 150,
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
      <DocumentCardTitle title={props.date} showAsSecondaryTitle />
      <DocumentCardStatus
        statusIcon="Tag"
        status={props.tags}
        styles={statusStyles}
      />
    </DocumentCard>
  );
}
