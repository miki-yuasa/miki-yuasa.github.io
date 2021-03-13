import { DefaultPalette } from "@fluentui/react";
import React from "react";
import { Maybe } from "../../../@types/graphql-types";
import { CalendarIcon, TagIcon } from "../icons/infoIcons";
import { Tag16Regular, CalendarLtr16Regular } from "@fluentui/react-icons";

export function PublishedDate(props: { date: Date }) {
  return (
    <div>
      <CalendarLtr16Regular /> &nbsp;
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
        <Tag16Regular primaryFill={DefaultPalette.neutralSecondary} /> &nbsp;
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
