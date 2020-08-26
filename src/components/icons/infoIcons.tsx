import React from "react";
import { initializeIcons } from "office-ui-fabric-react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

initializeIcons();

const iconClass = mergeStyles({
  fontSize: "0.8rem",
  margin: "0px 10px 0px 0",
});

export function CalendarIcon(props: { iconClass: string }) {
  return <FontIcon iconName="Calendar" className={props.iconClass} />;
}

export function TagIcon(props: { iconClass: string }) {
  return <FontIcon iconName="TagSolid" className={props.iconClass} />;
}

CalendarIcon.defaultProps = { iconClass };

TagIcon.defaultProps = { iconClass };
