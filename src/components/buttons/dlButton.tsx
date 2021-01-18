import {
  IButtonStyles,
  mergeStyles, PrimaryButton
} from "@fluentui/react";
import { Depths } from "@fluentui/theme";
import React from "react";
import { DownloadIcon } from "../icons/infoIcons";


export default function DownloadButton(props: { href: string; title: string }) {

  const downloadIconClass = mergeStyles({
    fontSize: "1rem",
    margin: "0px 10px 0px 0",
  });
  const downloadButtonStyles: IButtonStyles = {
    root: {
      boxShadow: Depths.depth8,
      height: "2.5rem",
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
      <strong style={{ fontSize: "1.1rem" }}>
        <DownloadIcon iconClass={downloadIconClass} />
        {props.title}
      </strong>
    </PrimaryButton>
  );
}
