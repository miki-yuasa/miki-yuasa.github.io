import React from "react";
import {
  Pivot,
  PivotItem,
  PivotLinkSize,
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
    root: {},
    link: {},
    count: {},
    linkContent: {},
    text: {},
    icon: {},
  };

  const pageData = getPageData();
  let pivotItemList = [];

  for (let i in pageData) {
    let hrefStr: string = "/#" + pageData[i].name.toLowerCase();
    pivotItemList.push(
      <PivotItem
        headerText={pageData[i].name}
        headerButtonProps={{ href: hrefStr }}
        itemKey={String(i)}
      />
    );
  }

  return (
    <Pivot
      aria-label="Basic Pivot Example"
      styles={pivotStyles}
      linkSize={PivotLinkSize.large}
      headersOnly
      selectedKey={props.selectedKey}
    >
      {pivotItemList}
    </Pivot>
  );
}
