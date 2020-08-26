import React from "react";
import { DefaultPalette } from "office-ui-fabric-react";

import { BlogHeader } from "../components/blog/blogHeader";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const BlogPageTemplate = (props: {
  title?: string;
  description?: string;
  lang?: string;
  body: JSX.Element | JSX.Element[];
  side: JSX.Element;
}) => {
  return (
    <Layout header={<BlogHeader />}>
      <SEO
        title={props.title!}
        description={props.description}
        lang={props.lang}
      />
      <div style={{ background: DefaultPalette.neutralLighter }}>
        <div
          className="articleFrame"
          style={{ background: DefaultPalette.neutralLighter }}
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
    </Layout>
  );
};
