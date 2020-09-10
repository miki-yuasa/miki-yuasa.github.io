import React from "react";
import {
  ActionButton,
  IButtonStyles,
  DefaultPalette,
} from "office-ui-fabric-react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";

export default function MediaButton(props: {
  name: string;
  href: string;
  title: string;
}) {

  const iconClass = mergeStyles({
    fontSize:"1.3rem",
    margin: "0px 10 0 19px",
    stroke: "white",
    fill: "white",
    color: "white"
  });
  const mediaButtonStyles: IButtonStyles = {
    root:{
      width:"70px",
  },
    rootHovered: {
      background: DefaultPalette.themePrimary,
      boxShadow: Depths.depth16,
    },
  };

  return (
    <ActionButton
      href={props.href}
      title={props.title}
      target="_blank"
      rel="noreferrer"
      allowDisabledFocus
      styles={mediaButtonStyles}
    >
      <FontIcon iconName={props.name} className={iconClass} />
    </ActionButton>
  );
}
