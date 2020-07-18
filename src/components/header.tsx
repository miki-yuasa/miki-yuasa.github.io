import React from "react"
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import NavWide from '../components/navs/navWide'
import NavCompact from '../components/navs/navCompact'
import "./layout.css"

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
      else if (element.id == 'contact') {
        setSelectedKey(4);
      }
    }
  }

  return (
    <>
      <header className='compact'>
        <NavCompact />
      </header >
      <header className='wide' style={{ boxShadow: Depths.depth64 }}>
        <NavWide selectedKey={String(selectedKey)} />
      </header >
    </>
  )
}

export default Header
