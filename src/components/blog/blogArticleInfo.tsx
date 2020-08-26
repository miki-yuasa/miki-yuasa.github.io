import React from "react";
import { Link } from "gatsby";
import { initializeIcons } from "office-ui-fabric-react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";

import { CalendarIcon, TagIcon } from "../icons/infoIcons";
import { Maybe } from "../../../@types/graphql-types";

initializeIcons();

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
      <div>
        <TagIcon />
        {props.tags.map((e) => (
          <Link to={`/tags/${e}/`} key={e} style={{ textDecoration: "none" }}>
            {e}
          </Link>
        ))}
      </div>
    ) : (
      <div>""</div>
    );
  return tags;
}
