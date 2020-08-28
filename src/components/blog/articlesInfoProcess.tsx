import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "office-ui-fabric-react";

import {
  FolderIcon,
  TagIcon,
  CalendarIcon,
} from "../../components/icons/infoIcons";
import { OutObj, InObj } from "../../../@types";

export function sepCatTag(catTag: string) {
  const strArray: string[] = catTag.split("/");
  const key: string = strArray[0];
  const item: string = strArray.slice(-1)[0];

  return { key, item };
}

export function group(objArray: InObj[]) {
  const groupedArray: OutObj[] = [];

  objArray.forEach((obj) => {
    const ind: number = groupedArray.findIndex(
      (element) => element.key === obj.key
    );

    if (ind !== -1) {
      groupedArray[ind].items.concat(obj.item);
    } else {
      groupedArray.push({
        key: obj.key,
        items: [obj.item],
      });
    }
  });
  return groupedArray;
}

export function getFormattedList({
  inObjArray,
  tagged,
}: {
  inObjArray: OutObj[];
  tagged: boolean;
}) {
  const outList: React.ReactNode[] = [];

  inObjArray.forEach((inObj) => {
    const itemList: React.ReactNode[] = [];

    inObj.items.forEach((item) => {
      const itemSet = tagged ? (
        <li>
          <TagIcon />
          <Link
            to={`/blog/tags/${inObj.key.toLowerCase()}/${item}`}
            style={{
              textDecoration: "none",
              color: DefaultPalette.neutralDark,
            }}
          >
            {item}
          </Link>
        </li>
      ) : (
        <li>
          <CalendarIcon />
          {item}
        </li>
      );
      itemList.push(itemSet);
    });

    outList.push(
      <li>
        <FolderIcon />
        <Link
          to={`/blog/tags/${inObj.key.toLowerCase()}/`}
          style={{
            textDecoration: "none",
            color: DefaultPalette.neutralDark,
          }}
        >
          {inObj.key}
        </Link>

        <ul className="sidePane">{itemList}</ul>
      </li>
    );
  });

  return <ul className="sidePane">{outList}</ul>;
}
