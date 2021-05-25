import React from "react";
import {
  Pivot,
  PivotItem,
  IPivotStyles,
} from "@fluentui/react";

import { getPageData } from "../../data/pageData";

export default function NavWide(props: { selectedKey: string }) {
  const pivotStyles: IPivotStyles = {
    linkIsSelected: {
      selectors: {
        ":before": {
          height: "4px", // was previously defaulted at 2px
        },
      },
    },
  };

  const pageData = getPageData();
  const pivotItemList = pageData.map((page, i) => {
    return <PivotItem
      headerText={page.name}
      headerButtonProps={{ href: "#" + page.name.toLowerCase() }}
      itemKey={String(i)}
    />
  })

  return (
    <Pivot
      aria-label="Basic Pivot Example"
      styles={pivotStyles}
      linkSize='large'
      headersOnly
      selectedKey={props.selectedKey}
      linkFormat='links'
    >
      {pivotItemList}
    </Pivot>
  );
}
