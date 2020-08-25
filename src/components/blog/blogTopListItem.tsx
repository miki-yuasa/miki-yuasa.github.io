import React from "react";

import { MarkdownRemarkFrontmatter } from "../../../@types/graphql-types";
import { PublishedDate, HashTags } from "../blog/blogArticleInfo";

export function BlogTopListItem(props: {
  frontmatter: MarkdownRemarkFrontmatter;
}) {
  const description = props.frontmatter.description;
  const content =
    description?.length! >= 210
      ? `${description?.substr(0, 210)!}...`
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
        <div>
          <PublishedDate date={props.frontmatter.date} />
          {props.frontmatter.tags}
        </div>
      </section>
    </>
  );
}
