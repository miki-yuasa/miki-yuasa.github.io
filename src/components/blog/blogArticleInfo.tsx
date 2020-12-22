import React from "react";
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
              <a className="articleInfo"
                href={`/blog/tags/${cat?.toLocaleLowerCase()}/`}
                key={cat}
              >
                {`${cat}`}
              </a>
              {" / "}
              <a className="articleInfo"
                href={`/blog/tags/${e?.toLocaleLowerCase()}/`}
                key={e}
              >
                {`${tag}`}
              </a>
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
