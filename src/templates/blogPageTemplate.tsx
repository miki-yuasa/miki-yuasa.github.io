import React from "react";
import { DefaultPalette } from "office-ui-fabric-react";

import { BlogHeader } from "../components/blog/blogHeader";

export const BlogPageTemplate = (props: {
  body: JSX.Element | JSX.Element[];
  side: JSX.Element;
}) => {
  return (
    <div style={{ background: DefaultPalette.neutralLight }}>
      <BlogHeader />
      <div
        className="articleFrame"
        style={{ background: DefaultPalette.white }}
      >
        <div className="articleBody">{props.body}</div>
        <div
          className="articleSide"
          style={{ background: DefaultPalette.neutralLighter }}
        >
          {props.side}
        </div>
      </div>
    </div>
  );
};
