import React from "react";
import { CountedItemObj, CountedItemsObj, ItemCount, ItemObj, ItemsObj } from "../../../@types";
import { CalendarIcon, FolderIcon, TagIcon } from "../../components/icons/infoIcons";
import { Tag16Regular, Folder16Regular, CalendarLtr16Regular } from "@fluentui/react-icons";


export function sepCatTag(catTag: string) {
  const strArray: string[] = catTag.split("/");
  const key: string = strArray[0];
  const item: string = strArray.slice(-1)[0];

  return { key, item };
}

export function group(objArray: ItemObj[]) {
  const groupedArray: ItemsObj[] = [];

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
      groupedArray[ind].itemCounts.push({
        item: obj.item,
        totalCount: obj.totalCount
      });
    } else {
      groupedArray.push({
        key: obj.key,
        itemCounts: [{ item: obj.item, totalCount: obj.totalCount }]
      });
    }
  });

  console.log(groupedArray);

  return groupedArray;
}


export function getFormatedTagList(itemObjArray: CountedItemsObj[]) {
  const outList: React.ReactNode[] = itemObjArray
    .sort((a, b) => {
      return a.key > b.key ? 1 : -1;
    })
    .map((itemObj) => {
      const toKey: string = `/blog/tags/${itemObj.key.toLowerCase()}`;

      const itemList: React.ReactNode[] = itemObj.itemCounts
        .sort((a, b) => {
          return a.item > b.item ? 1 : -1;
        })
        .map((itemCount) => {
          const toItem: string = `${toKey}/${itemCount.item.toLowerCase()}/`;
          const itemIcon = <Tag16Regular />;
          return (
            <li>
              {itemIcon} &nbsp;
              <a
                href={toItem}
                className="neutralDark"
              >
                {itemCount.item}
              </a> ({itemCount.totalCount})
            </li>
          );
        });

      return (
        <li>
          <Folder16Regular /> &nbsp;
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

  return <ul className="side-pane">{outList}</ul>;
};


export function getFormattedList({
  itemObjArray,
}: {
  itemObjArray: ItemsObj[];
}) {

  const outList: React.ReactNode[] = itemObjArray
    .sort((a, b) => {
      return a.key < b.key ? 1 : -1;
    })
    .map((itemObj) => {
      const toKey: string = `/blog/archives/${itemObj.key.toLowerCase()}`;

      const itemList: React.ReactNode[] = itemObj.items
        .sort((a, b) => {
          return a < b ? 1 : -1;
        })
        .map((item) => {
          const toItem: string = `${toKey}/${item.toLowerCase()}/`;
          const itemIcon = <CalendarLtr16Regular />;
          return (
            <li>
              {itemIcon} &nbsp;
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
          <Folder16Regular /> &nbsp;
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

  return <ul className="side-pane">{outList}</ul>;
}
