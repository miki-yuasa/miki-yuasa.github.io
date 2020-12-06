import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "office-ui-fabric-react";

import {
  FolderIcon,
  TagIcon,
  CalendarIcon,
} from "../../components/icons/infoIcons";
import { itemsObj, itemObj } from "../../../@types";

export function sepCatTag(catTag: string) {
  const strArray: string[] = catTag.split("/");
  const key: string = strArray[0];
  const item: string = strArray.slice(-1)[0];

  return { key, item };
}

export function group(objArray: itemObj[]) {
  const groupedArray: itemsObj[] = [];

  objArray.forEach((obj) => {
    const ind: number = groupedArray.findIndex(
      (element) => element.key === obj.key
    );

    if (ind !== -1) {
      groupedArray[ind].items.push(obj.item);
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
  itemObjArray,
  tagged,
}: {
  itemObjArray: itemsObj[];
  tagged: boolean;
}) {

  const outList: React.ReactNode[] = itemObjArray
  .sort((a,b)=>{
    return a.key>b.key ? 1 : -1;
  })
  .map((itemObj) => {
    const toKey: string = tagged
      ? `/blog/tags/${itemObj.key.toLowerCase()}`
      : `/blog/archives/${itemObj.key.toLowerCase()}`;

    const itemList: React.ReactNode[] = itemObj.items
    .sort((a,b)=>{
      return a>b ? 1 : -1;
    })
    .map((item) => {
      const toItem: string = `${toKey}/${item.toLowerCase()}/`;
      const itemIcon = tagged ? <TagIcon /> : <CalendarIcon />;
      return (
        <li>
          {itemIcon}
          <Link
            to={toItem}
            style={{
              textDecoration: "none",
              color: DefaultPalette.neutralDark,
            }}
          >
            {item}
          </Link>
        </li>
      );
    });

    return (
      <li>
        <FolderIcon />
        <Link
          to={toKey}
          style={{
            textDecoration: "none",
            color: DefaultPalette.neutralDark,
          }}
        >
          {itemObj.key}
        </Link>
        <ul style={{ marginLeft: "1.45rem" }}>{itemList}</ul>
      </li>
    );
  });

  return <ul className="sidePane">{outList}</ul>;
}
