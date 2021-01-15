import React from "react";

import { MarkdownRemarkFrontmatter } from "../../../@types/graphql-types";
import { PublishedDate, HashTags } from "./blogArticleInfo";

export function BlogListArticles(props: {
  frontmatter: MarkdownRemarkFrontmatter;
}) {
  const description = props.frontmatter.description;
  const content =
    description?.length! >= 210
      ? `${description?.substr(0, 210)!}...`
      : description;
  return (
    <div className="articleListItem">
      <div>
        <HashTags tags={props.frontmatter.tags!} />
        <h3 style={{ marginTop: "8px" }}>
          <a
            className="articleList"
            href={`/blog/articles/${props.frontmatter.slug!}`}
          >
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
        <div className="articleInfo">
          <PublishedDate date={props.frontmatter.date} />
        </div>
      </section>
    </div>
  );
}
