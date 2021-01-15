import React from "react";
import {
  ActionButton,
  IButtonStyles,
  DefaultPalette,
  FontIcon,
  mergeStyles
} from "@fluentui/react";
import { Depths } from "@fluentui/theme";

export default function MediaButton(props: {
  name: string;
  href: string;
  title: string;
}) {

  const iconClass = mergeStyles({
    fontSize: "1.3rem",
    margin: "0px 10 0 19px",
    stroke: "white",
    fill: "white",
    color: "white"
  });
  const mediaButtonStyles: IButtonStyles = {
    root: {
      width: "70px",
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
