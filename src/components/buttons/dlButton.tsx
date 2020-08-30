import React from "react";
import {
  PrimaryButton,
  initializeIcons,
  IButtonStyles,
} from "office-ui-fabric-react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import { registerIcons } from "office-ui-fabric-react/lib/Styling";

import { DownloadIcon } from "../icons/infoIcons";

export default function DownloadButton(props: { href: string; title: string }) {
  initializeIcons();
  registerIcons({
    icons: {
      download: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,800,800">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40px"
          >
            <path d="M336,176h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V216a40,40,0,0,1,40-40h40" />
            <polyline points="176 272 256 352 336 272" />
            <line x1="256" y1="48" x2="256" y2="336" />
          </g>
        </svg>
      ),
    },
  });

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
