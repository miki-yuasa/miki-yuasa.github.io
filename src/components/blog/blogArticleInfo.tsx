import React from "react";
import { Link } from "gatsby";
import {  DefaultPalette } from "office-ui-fabric-react";

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
        {props.tags.map((e) => (
          <Link
            to={`/blog/tags/${e?.toLocaleLowerCase()}/`}
            key={e}
            style={{
              textDecoration: "none",
              color: DefaultPalette.neutralSecondaryAlt,
            }}
          >
            {`${e}, `}
          </Link>
        ))}
      </div>
    ) : (
      <div>""</div>
    );
  return tags;
}
