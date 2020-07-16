import React from "react"
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles } from 'office-ui-fabric-react/lib/Pivot';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import "./layout.css"

const pivotStyles: IPivotStyles = {
  linkIsSelected: {
    selectors: {
      ':before': {
        height: '4px',   // was previously defaulted at 2px
      }
    },
  },
  root: {},
  link: {},
  count: {},
  linkContent: {},
  text: {},
  icon: {}
};

const boxes = document.querySelectorAll(".idBox");
const options = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: "-80% 0px", // ビューポートの中心を判定基準にする
  threshold: 0 // 閾値は0
};

function Header() {
  const [selectedKey, setSelectedKey] = React.useState({});

  const observer = new IntersectionObserver(doWhenIntersect, options);
  // それぞれのboxを監視する
  boxes.forEach(box => {
    observer.observe(box);
  });

  function doWhenIntersect(entries) {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  function activateIndex(element) {
    if (element.id === 'home') {
      setSelectedKey(0);
    }
    else if (element.id === 'about') {
      setSelectedKey(1);
    }
    else if (element.id === 'research') {
      setSelectedKey(2);
    }
    else if (element.id === 'software') {
      setSelectedKey(3);
    }
  }


  return (
    <header
      style={{
        boxShadow: Depths.depth16,
      }}
    >
      <div className='headerPivot'>
        <Pivot
          aria-label="Basic Pivot Example"
          styles={pivotStyles}
          linkSize={PivotLinkSize.large}
          headersOnly
          selectedKey={String(selectedKey)}>
          <PivotItem
            headerText="Home"
            headerButtonProps={{ href: "/#home" }}
            itemKey="0" />
          <PivotItem
            headerText="About"
            headerButtonProps={{ href: "/#about" }}
            itemKey="1" />
          <PivotItem
            headerText="Research"
            headerButtonProps={{ href: "/#research" }}
            itemKey="2" />
          <PivotItem
            headerText="Software"
            headerButtonProps={{ href: "/#software" }}
            itemKey="3" />
          {/*
        <PivotItem
          headerText="Contact"
          headerButtonProps={{ href: "/#contact" }} />
           */}
        </Pivot>
      </div>
    </header >
  )
}

export default Header
