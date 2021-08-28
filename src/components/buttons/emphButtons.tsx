import {
  IButtonStyles,
  PrimaryButton
} from "@fluentui/react";
import { Depths } from "@fluentui/theme";
import React from "react";
import { ArrowDownload24Regular } from "@fluentui/react-icons"

const emphButtonStyles: IButtonStyles = {
  root: {
    boxShadow: Depths.depth8,
    height: "2.5rem",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: "1.1rem",
    fontWeight: 'bold'
  },
};

export function DownloadButton(props: { href: string; title: string }) {
  return (
    <PrimaryButton
      href={props.href}
      target="_blank"
      title={props.title}
      rel="noreferrer"
      allowDisabledFocus
      styles={emphButtonStyles}
    >
      <ArrowDownload24Regular primaryFill="white" />
      &nbsp;{props.title}
    </PrimaryButton>
  );
}

export function EmphButton(props: { href: string; title: string }) {
  return (
    <PrimaryButton
      href={props.href}
      target="_blank"
      title={props.title}
      rel="noreferrer"
      allowDisabledFocus
      styles={emphButtonStyles}
    >
      {props.title}
    </PrimaryButton>
  );
}
