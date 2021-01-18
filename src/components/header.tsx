import React, { useEffect, useState } from "react";
import NavCompact from "../components/navs/navCompact";
import NavWide from "../components/navs/navWide";
import { getPageData } from "../data/pageData";

const Header = () => {
  const [selectedKey, setSelectedKey] = useState({});

  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
    threshold: 0, // 閾値は0
  };

  const pageData = getPageData();
  const pageIndexNames = pageData.map((pageDataItem) => {
    return pageDataItem.name.toLocaleLowerCase();
  });
  console.log("page data");

  function doWhenIntersect(entries: IntersectionObserverEntry[]) {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach((entry) => {
      console.log("this is doWhenIntersect");
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  function activateIndex(element: Element) {
    let pageKey: number = pageIndexNames.indexOf(element.id);
    console.log(element.id);
    setSelectedKey(pageKey);
  }

  useEffect(() => {
    console.log("this is inside document");

    const boxes = document.querySelectorAll("div.idBox");
    console.log("new observer");

    const observer = new IntersectionObserver(doWhenIntersect, options);
    console.log("for each box");
    console.log(boxes);

    boxes.forEach((box) => {
      console.log("observe a box");

      observer.observe(box);
      console.log("after observe a box");
      // それぞれのboxを監視する
    });
  });

  return (
    <>
      <header className="compact">
        <NavCompact />
      </header>
      <header className="wide">
        <NavWide selectedKey={String(selectedKey)} />
      </header>
    </>
  );
};

export default Header;
