import React from "react";

import { getPageData } from "../../data/pageData";
import { NavTabButton } from "../buttons/navTabButton"

export default function NavWide(props: {
  selectedKey: number
}) {
  const pageData = getPageData();
  const pivotItemList = pageData.map((page, i) => {
    if (i === props.selectedKey) {
      return <NavTabButton
        text={page.name}
        href={"#" + page.name.toLowerCase()}
        isSelected={true} />
    }
    else {
      return <NavTabButton
        text={page.name}
        href={"#" + page.name.toLowerCase()} />
    }

  })

  return (
    <div>
      {pivotItemList}
    </div>
  );
}