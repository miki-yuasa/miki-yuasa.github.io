import React from "react";
import { CountedItemObj, CountedItemsObj, itemObj, itemsObj } from "../../../@types";
import {
  CalendarIcon, FolderIcon,
  TagIcon
} from "../../components/icons/infoIcons";


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

export function groupTags(objArray: CountedItemObj[]) {
  const groupedArray: CountedItemsObj[] = [];

  objArray.forEach(obj => {
    const ind: number = groupedArray.findIndex(
      element => element.key === obj.key
    );

    if (ind !== -1) {
      groupedArray[ind].items.push(obj.item);
      groupedArray[ind].totalCount += obj.totalCount;
    } else {
      groupedArray.push({
        key: obj.key,
        items: [obj.item],
        totalCount: obj.totalCount
      });
    }
  });

  return groupedArray;
}


export function getFormatedTagList(itemObjArray: CountedItemsObj[]) {
  const outList: React.ReactNode[] = itemObjArray
    .sort((a, b) => {
      return a.key > b.key ? 1 : -1;
    })
    .map((itemObj) => {
      const toKey: string = `/blog/tags/${itemObj.key.toLowerCase()}`;

      const itemList: React.ReactNode[] = itemObj.items
        .sort((a, b) => {
          return a > b ? 1 : -1;
        })
        .map((item) => {
          const toItem: string = `${toKey}/${item.toLowerCase()}/`;
          const itemIcon = <TagIcon />;
          return (
            <li>
              {itemIcon}
              <a
                href={toItem}
                className="neutralDark"
              >
                {item}
              </a> ({itemObj.totalCount})
            </li>
          );
        });

      return (
        <li>
          <FolderIcon />
          <a
            href={toKey}
            className="neutralDark"
          >
            {itemObj.key}
          </a>
          <ul style={{ marginLeft: "1.45rem" }}>{itemList}</ul>
        </li>
      );
    });

  return <ul className="sidePane">{outList}</ul>;
};


export function getFormattedList({
  itemObjArray,
}: {
  itemObjArray: itemsObj[];
}) {

  const outList: React.ReactNode[] = itemObjArray
    .sort((a, b) => {
      return a.key > b.key ? 1 : -1;
    })
    .map((itemObj) => {
      const toKey: string = `/blog/archives/${itemObj.key.toLowerCase()}`;

      const itemList: React.ReactNode[] = itemObj.items
        .sort((a, b) => {
          return a > b ? 1 : -1;
        })
        .map((item) => {
          const toItem: string = `${toKey}/${item.toLowerCase()}/`;
          const itemIcon = <CalendarIcon />;
          return (
            <li>
              {itemIcon}
              <a
                href={toItem}
                className="neutralDark"
              >
                {item}
              </a>
            </li>
          );
        });

      return (
        <li>
          <FolderIcon />
          <a
            href={toKey}
            className="neutralDark"
          >
            {itemObj.key}
          </a>
          <ul style={{ marginLeft: "1.45rem" }}>{itemList}</ul>
        </li>
      );
    });

  return <ul className="sidePane">{outList}</ul>;
}
