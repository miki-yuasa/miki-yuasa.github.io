import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { initializeIcons } from "office-ui-fabric-react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { Maybe } from "../../../@types/graphql-types";

initializeIcons();

const iconClass = mergeStyles({
  fontSize: "0.8rem",
  margin: "0px 10px 0px 0",
});

export function PublishedDate(props: { date: Date }) {
  return (
    <div>
      <FontIcon iconName="Calendar" className={iconClass} />
      {props.date}
    </div>
  );
}

export function HashTags(props: { tags: Maybe<string>[] }) {
  const tags =
    props.tags.length !== 0 ? (
      <div>
        <FontIcon iconName="Tag" className={iconClass} />
        {props.tags.map((e) => (
          <Link to={`/tags/${e}/`} key={e} style={{ textDecoration: "none" }}>
            {e}
          </Link>
        ))}
      </div>
    ) : (
      <>""</>
    );
  return tags;
}
