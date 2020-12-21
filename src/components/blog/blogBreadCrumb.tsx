import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "@fluentui/react";

import { CrumbItem } from "../../../@types";

export function BlogBreadCrumb(props: { crumbItems: CrumbItem[] }) {
  const numCrumbs = props.crumbItems.length;

  const breadCrumb = props.crumbItems.map((crumb, index) => {
    const isLast = index + 1 === numCrumbs ? true : false;

    const linkColor = isLast
      ? DefaultPalette.neutralDark
      : DefaultPalette.neutralSecondaryAlt;

    const decoration = crumb.href === undefined ? "none" : "underline";

    const linkStyle: React.CSSProperties = {
      textDecoration: decoration,
      color: linkColor,
    };

    const linkComplete = isLast ? (
      <>{crumb.text}</>
    ) : (
        <>
          <Link to={crumb.href!} style={linkStyle}>
            {crumb.text}
          </Link>
          <span style={{ color: DefaultPalette.neutralSecondaryAlt }}>
            {" > "}
          </span>
        </>
      );

    return linkComplete;
  });

  return <div>{breadCrumb}</div>;
}
