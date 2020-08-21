import React from "react";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";

import NavWide from "../components/navs/navWide";
import NavCompact from "../components/navs/navCompact";
import { getPageData } from "../data/pageData";
import "./layout.css";

const Header = () => {
  const [selectedKey, setSelectedKey] = React.useState({});

  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
    threshold: 0, // 閾値は0
  };

  const pageData = getPageData();
  let pageIndexNames: string[] = [];
  for (let i in pageData) {
    pageIndexNames[i] = pageData[i].name.toLowerCase();
  }

  if (typeof document !== "undefined") {
    const boxes = document.querySelectorAll(".idBox");
    const observer = new IntersectionObserver(doWhenIntersect, options);
    boxes.forEach((box) => {
      observer.observe(box);
    });
    // それぞれのboxを監視する
  }

  function doWhenIntersect(entries: IntersectionObserverEntry[]) {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  function activateIndex(element: Element) {
    const pageKey: number = pageIndexNames.indexOf(element.id);
    setSelectedKey(pageKey);
  }

  return (
    <>
      <header className="compact">
        <NavCompact />
      </header>
      <header className="wide" style={{ boxShadow: Depths.depth64 }}>
        <NavWide selectedKey={String(selectedKey)} />
      </header>
    </>
  );
};

export default Header;
