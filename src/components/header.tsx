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
    boxShadow: Depths.depth16,
    width: '45px',
    padding: '0px 0 0 5px',
    background: theme.palette.white,
    stroke: theme.palette.black,
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

const menuIconClass = mergeStyles({
  height: 35,
  width: 35,
});

registerIcons({
  icons: {
    'hamburger': (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,512,512'>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" strokeMiterlimit='10' >
          <line x1='80' y1='160' x2='432' y2='160' />
          <line x1='80' y1='256' x2='432' y2='256' />
          <line x1='80' y1='352' x2='432' y2='352' />
        </g>
      </svg>
    ),
  },
});

const pageData = getPageData();
let pivotItemList = [];

for (let i in pageData) {
  menuProps.items.push(
    {
      key: pageData[i].name,
      text: pageData[i].name,
      href: "/#" + pageData[i].name.toLowerCase()
    });

  let hrefStr: string = "/#" + pageData[i].name.toLowerCase();
  pivotItemList.push(
    <PivotItem
      headerText={pageData[i].name}
      headerButtonProps={{ href: hrefStr }}
      itemKey={String(i)} />
  );
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
      else if (element.id == 'contact') {
        setSelectedKey(4);
      }
    }
  }

  return (
    <>
      <header className='compact'>
        <ActionButton
          menuProps={menuProps}
          styles={menuButtonStyles}
          title="Menu" >
          <FontIcon iconName="hamburger" className={menuIconClass} />
        </ActionButton>
      </header >
      <header className='wide' style={{ boxShadow: Depths.depth64 }}>
        <div className='headerPivot'>
          <Pivot
            aria-label="Basic Pivot Example"
            styles={pivotStyles}
            linkSize={PivotLinkSize.large}
            headersOnly
            selectedKey={String(selectedKey)}>
            {pivotItemList}
          </Pivot>
        </div>
      </header >
    </>
  )
}

export default Header
