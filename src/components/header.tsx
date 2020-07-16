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

const Header = ({ siteTitle }) => (
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
        headersOnly>
        <PivotItem
          headerText="Home"
          headerButtonProps={{ href: "/#home" }} />
        <PivotItem
          headerText="About"
          headerButtonProps={{ href: "/#about" }} />
        <PivotItem
          headerText="Research"
          headerButtonProps={{ href: "/#research" }} />
        <PivotItem
          headerText="Software"
          headerButtonProps={{ href: "/#software" }} />
        {/*
        <PivotItem
          headerText="Contact"
          headerButtonProps={{ href: "/#contact" }} />
           */}
      </Pivot>
    </div>
  </header >
)

export default Header
