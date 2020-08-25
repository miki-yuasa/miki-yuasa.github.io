import React from "react";
import _ from "lodash";
import { initializeIcons } from "office-ui-fabric-react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

initializeIcons();

const iconClass = mergeStyles({
  fontSize: "0.8rem",
  margin: "0px 10px 0px 0",
});

export function PublishedDate(props: { date: Date }) {
  return (
    <>
      <FontIcon iconName="Calendar" className={iconClass} />
      {props.date}
    </>
  );
}

export function HashTags(props: { tags: string[] }) {
  const tags =
    props.tags.length !== 0 ? (
      <>
        <FontIcon iconName="Tag" className={iconClass} />
      </>
    ) : (
      ""
    );
  return tags;
}
