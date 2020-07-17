import React from "react"
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles } from 'office-ui-fabric-react/lib/Pivot';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import NavPivot from '../components/navs/navPivot';
import NavCompact from '../components/navs/navCompact'

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

function Header() {
  const [selectedKey, setSelectedKey] = React.useState({});

  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
  };

  if (typeof document !== 'undefined') {
    const boxes = document.querySelectorAll(".idBox");
    const observer = new IntersectionObserver(doWhenIntersect, options);
    boxes.forEach(box => {
      observer.observe(box);
    });
    // それぞれのboxを監視する

    function doWhenIntersect(entries) {
      // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activateIndex(entry.target);
        }
      });
    }

    function activateIndex(element) {
      if (element.id == 'home') {
        setSelectedKey(0);
      }
      else if (element.id == 'about') {
        setSelectedKey(1);
      }
      else if (element.id == 'research') {
        setSelectedKey(2);
      }
      else if (element.id == 'software') {
        setSelectedKey(3);
      }
    }

    let width: number = document.body.clientWidth;
    if (width <= 700) {
      return (
        <header className='compact'
          style={{
            boxShadow: Depths.depth16,
          }}>
          <NavCompact />
        </header >
      )
    }
  }
  return (
    <header className='wide'
      style={{
        boxShadow: Depths.depth16,
      }}>
      <div className='headerPivot'>
        <NavPivot
          selectedKey={String(selectedKey)} />
      </div>
    </header >
  )
}
export default Header
