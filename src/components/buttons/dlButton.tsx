import {
  IButtonStyles,
  mergeStyles, PrimaryButton
} from "@fluentui/react";
import { Depths } from "@fluentui/theme";
import React from "react";
import { DownloadIcon } from "../icons/infoIcons";
import { ArrowDownload24Regular } from "@fluentui/react-icons"


export default function DownloadButton(props: { href: string; title: string }) {

  const downloadIconClass = mergeStyles({
    fontSize: "1rem",
    margin: "0px 10px 0px 0",
  });
  const downloadButtonStyles: IButtonStyles = {
    root: {
      boxShadow: Depths.depth8,
      height: "2.5rem",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      fontSize: "1.1rem"
    },
  };

  return (
    <PrimaryButton
      href={props.href}
      target="_blank"
      title={props.title}
      rel="noreferrer"
      allowDisabledFocus
      styles={downloadButtonStyles}
    >
      <ArrowDownload24Regular primaryFill="white" />
      &nbsp;{props.title}
    </PrimaryButton>
  );
}
