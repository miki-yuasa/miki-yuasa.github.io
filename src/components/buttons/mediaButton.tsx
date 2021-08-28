import React from "react";
import {
  IButtonStyles,
  DefaultPalette,
  PrimaryButton,
  mergeStyles
} from "@fluentui/react";
import { Depths } from "@fluentui/theme";

export default function MediaButton(props: {
  icon: JSX.Element;
  href: string;
  title: string;
}) {

  const mediaButtonStyles: IButtonStyles = {
    root: {
      width: "60px",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      color: "white",
      background: 'none',
      border: 'none',
      height: '40px'
    },
    rootHovered: {
      background: DefaultPalette.themePrimary,
      boxShadow: Depths.depth16,
    },
  };

  return (
    <PrimaryButton
      href={props.href}
      title={props.title}
      target="_blank"
      rel="noreferrer"
      allowDisabledFocus
      styles={mediaButtonStyles}
    >
      {props.icon}
    </PrimaryButton>
  );
}
