import React from "react"
import { getTheme } from '@fluentui/react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles } from 'office-ui-fabric-react/lib/Pivot';
import { ActionButton, IContextualMenuProps, IButtonStyles } from 'office-ui-fabric-react';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

import { getPageData } from '../data/pageData'
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

const theme = getTheme();

const menuIconClass = mergeStyles({
  height: 35,
  width: 35,
  padding: '7px 7px 0 -5px',
});

const menuProps: IContextualMenuProps = {
  items: [],
  styles: {
    root: {
      marginRight: '-90px',
      paddingRight: '0px'
    }
  }
};

const menuButtonStyles: IButtonStyles = {
  root: {
    boxShadow: Depths.depth64,
    padding: '0 auto',
    width: '45px',
    background: theme.palette.neutralLighterAlt,
    stroke: theme.palette.neutralPrimary,
  },
  rootHovered: {
    stroke: theme.palette.themePrimary,
  },
  rootExpanded: {
    stroke: theme.palette.themePrimary,
  },
  rootPressed: {
    stroke: theme.palette.neutralPrimary,
  }
}

registerIcons({
  icons: {
    'hamburger': (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,512,512'>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" strokeMiterlimit='10'>
          <line x1='80' y1='160' x2='432' y2='160' />
          <line x1='80' y1='256' x2='432' y2='256' />
          <line x1='80' y1='352' x2='432' y2='352' />
        </g>
      </svg>
    ),
  },
});

const pageData = getPageData();

for (let i in pageData) {
  menuProps.items.push(
    {
      key: pageData[i].name,
      text: pageData[i].name,
      href: "/#" + pageData[i].name.toLowerCase()
    })
}

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
