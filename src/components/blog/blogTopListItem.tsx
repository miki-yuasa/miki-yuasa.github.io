import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "office-ui-fabric-react";

import { MarkdownRemarkFrontmatter } from "../../../@types/graphql-types";

export function BlogTopListItem(props: {
  frontmatter: MarkdownRemarkFrontmatter;
}) {
  const description = props.frontmatter.description;
  const content =
    description?.length! >= 105
      ? `${description?.substr(0, 105)!}...`
      : description;
  return (
    <>
      <div>
        <h3>
          <a className="blogList" href={props.frontmatter.slug!}>
            {props.frontmatter.title}
          </a>
        </h3>
      </div>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: content!,
          }}
        />
      </section>
    </>
  );
}
