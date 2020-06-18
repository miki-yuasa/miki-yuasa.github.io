import React from "react"
import { Pivot, PivotItem, PivotLinkSize, } from 'office-ui-fabric-react/lib/Pivot';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { getTheme } from '@fluentui/react';

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

const theme = getTheme();

const Header = ({ siteTitle }) => (
  <header
    style={{
      boxShadow: Depths.depth16,
    }}
  >
    <div class='headerPivot'>
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
          headerButtonProps={{ href: "/#research" }} />
        <PivotItem
          headerText="Software"
          headerButtonProps={{ href: "/#software" }} />
        <PivotItem
          headerText="Links"
          headerButtonProps={{ href: "/#links" }} />
      </Pivot>
    </div>
  </header >
)

export default Header
