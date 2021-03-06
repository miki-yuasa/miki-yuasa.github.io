import React from "react";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardType,
  IDocumentCardStyles,
} from "@fluentui/react";
import { Depths } from "@fluentui/theme";

import { Repo } from "../../../@types";

export default function RepoCard(props: Repo) {
  const cardStyles: IDocumentCardStyles = {
    root: {
      display: "inline-block",
      margin: 10,
      width: 320,
      boxShadow: Depths.depth8,
      paddingTop: 18,
      paddingBottom: 10,
      border: 0
    }
  };

  const accessText: string = props.noAccess ? "No open access yet" : " ";

  if (props.noAccess) {
    return (
      <DocumentCard styles={cardStyles} type={DocumentCardType.normal}>
        <div>
          <DocumentCardTitle title={props.name} />
          <DocumentCardTitle title={props.description} showAsSecondaryTitle />
          <DocumentCardTitle title={accessText} showAsSecondaryTitle />
        </div>
      </DocumentCard>
    );
  }

  return (
    <DocumentCard
      styles={cardStyles}
      onClickHref={props.onClickHref}
      onClickTarget="_blank"
      type={DocumentCardType.normal}
    >
      <div>
        <DocumentCardTitle title={props.name} />
        <DocumentCardTitle title={props.description} showAsSecondaryTitle />
        <DocumentCardTitle title={accessText} showAsSecondaryTitle />
      </div>
    </DocumentCard>
  );
}
