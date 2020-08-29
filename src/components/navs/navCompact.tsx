import React from "react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import {
  ActionButton,
  IContextualMenuProps,
  IIconProps,
  IButtonStyles,
  DefaultPalette,
} from "office-ui-fabric-react";
import { registerIcons } from "office-ui-fabric-react/lib/Styling";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { initializeIcons } from "@uifabric/icons";
import { IContextualMenuItem } from "@fluentui/react";

import { getPageData } from "../../data/pageData";

export default function navCompact() {
  initializeIcons();
  const pageData = getPageData();

  const menuButtonStyles: IButtonStyles = {
    root: {
      boxShadow: Depths.depth16,
      width: "45px",
      background: DefaultPalette.white,
      stroke: DefaultPalette.black,
    },
    rootHovered: {
      stroke: DefaultPalette.themePrimary,
    },
    rootExpanded: {
      stroke: DefaultPalette.themePrimary,
    },
    rootPressed: {
      stroke: DefaultPalette.neutralPrimary,
    },
  };

  const menuIconClass = mergeStyles({
    height: 30,
    width: 30,
    margin: "0px -6px 0px 3px",
    background: DefaultPalette.white,
  });

  const item: IContextualMenuItem[] = pageData.map((page) => {
    return {
      key: page.name,
      text: page.name,
      href: "/#" + page.name.toLocaleLowerCase(),
    };
  });

  const menuProps: IContextualMenuProps = {
    items: item,
    styles: {
      root: {
        marginRight: "-90px",
        paddingRight: "0px",
      },
    },
  };

  registerIcons({
    icons: {
      hamburger: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,512,512">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32px"
            strokeMiterlimit="10"
          >
            <line x1="80" y1="160" x2="432" y2="160" />
            <line x1="80" y1="256" x2="432" y2="256" />
            <line x1="80" y1="352" x2="432" y2="352" />
          </g>
        </svg>
      ),
    },
  });

  const dummyIcon: IIconProps = { iconName: "banana" };
  return (
    <ActionButton
      menuProps={menuProps}
      styles={menuButtonStyles}
      menuIconProps={dummyIcon}
      title="Menu"
    >
      <FontIcon iconName="hamburger" className={menuIconClass} />
    </ActionButton>
  );
}
