import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "@fluentui/react";

import { CalendarIcon, TagIcon } from "../icons/infoIcons";
import { Maybe } from "../../../@types/graphql-types";

export function PublishedDate(props: { date: Date }) {
  return (
    <div>
      <CalendarIcon />
      {props.date}
    </div>
  );
}

export function HashTags(props: { tags: Maybe<string>[] }) {
  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: DefaultPalette.neutralSecondaryAlt,
  };

  const tags =
    props.tags.length !== 0 ? (
      <div
        style={{
          color: DefaultPalette.neutralSecondaryAlt,
        }}
      >
        <TagIcon />
        {props.tags.map((e) => {
          const [cat, tag] = e?.split("/")!;

          return (
            <>
              <Link
                to={`/blog/tags/${cat?.toLocaleLowerCase()}/`}
                key={cat}
                style={linkStyle}
              >
                {`${cat}`}
              </Link>
              {" / "}
              <Link
                to={`/blog/tags/${e?.toLocaleLowerCase()}/`}
                key={e}
                style={linkStyle}
              >
                {`${tag}`}
              </Link>
              {", "}
            </>
          );
        })}
      </div>
    ) : (
        <div>""</div>
      );
  return tags;
}
