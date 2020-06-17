import React from "react"
import { Pivot, PivotItem, PivotLinkSize, } from 'office-ui-fabric-react/lib/Pivot';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import "./layout.css"

const pivotStyles = {
  linkIsSelected: {
    selectors: {
      ':before': {
        height: '4px',   // was previously defaulted at 2px
      }
    }
  },
};

const Header = ({ siteTitle }) => (
  <header
    style={{
      boxShadow: Depths.depth16,
    }}
  >
    <div
      style={{
        margin: `0`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Pivot
        aria-label="Basic Pivot Example"
        styles={pivotStyles}
        linkSize={PivotLinkSize.large}
        headersOnly='true'>
        <PivotItem
          headerText="Home"
          headerButtonProps={{ href: "/#home" }} />
        <PivotItem
          headerText="About"
          headerButtonProps={{ href: "/#about" }} />
        <PivotItem
          headerText="Research"
          headerButtonProps={{ href: "/#about" }} />
        <PivotItem
          headerText="Software"
          headerButtonProps={{ href: "/#about" }} />
        <PivotItem
          headerText="Links"
          headerButtonProps={{ href: "/#about" }} />
      </Pivot>
    </div>
  </header >
)

export default Header
