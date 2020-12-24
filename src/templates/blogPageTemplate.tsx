import React from "react";
import { DefaultPalette } from "@fluentui/react";

import { BlogHeader } from "../components/blog/blogHeader";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const BlogPageTemplate = (props: {
  title?: string;
  description?: string;
  lang?: string;
  body: JSX.Element | JSX.Element[];
  side: JSX.Element;
  image: string;
}) => {
  return (
    <div style={{ background: DefaultPalette.neutralLighter }}>
      <Layout header={<BlogHeader />}>
        <SEO
          title={props.title!}
          description={props.description}
          lang={props.lang}
          image={props.image}
        />
        <div className="articleFrame">
          <div className="articleBody">{props.body}</div>
          <div className="articleSpace"> </div>
          <div className="articleSide">{props.side}</div>
        </div>
        <div style={{ height: "150px" }} />
      </Layout>
    </div>
  );
};
