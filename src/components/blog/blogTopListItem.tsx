import React from "react";
import { Link } from "gatsby";
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
        <h2>
          <Link to={`/${props.frontmatter.slug}/`}>
            {props.frontmatter.title}
          </Link>
        </h2>
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
