import { DefaultPalette } from "@fluentui/react";
import React from "react";
import { CrumbItem } from "../../../@types";


export function BlogBreadCrumb(props: { crumbItems: CrumbItem[] }) {
  const numCrumbs = props.crumbItems.length;

  const breadCrumb = props.crumbItems.map((crumb, index) => {
    const isLast = index + 1 === numCrumbs ? true : false;

    const linkColor = isLast
      ? DefaultPalette.neutralDark
      : DefaultPalette.neutralSecondaryAlt;

    const decoration = crumb.href === undefined ? "none" : "underline";

    const linkStyle = isLast
      ? "crumbLast"
      : crumb.href === undefined
        ? "crumbNone"
        : "crumb";

    const linkComplete = isLast ? (
      <>{crumb.text}</>
    ) : (
        <>
          <a href={crumb.href!} className={linkStyle}>
            {crumb.text}
          </a>
          <span style={{ color: DefaultPalette.neutralSecondaryAlt }}>
            {" > "}
          </span>
        </>
      );

    return linkComplete;
  });

  return <div>{breadCrumb}</div>;
}
