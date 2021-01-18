import React from "react";
import { mergeStyles } from "@fluentui/react";
import { Depths } from "@fluentui/theme";
import {
  ActionButton,
  IContextualMenuProps,
  IIconProps,
  IButtonStyles,
  DefaultPalette,
  FontIcon,
  IContextualMenuItem
} from "@fluentui/react";

import { getPageData } from "../../data/pageData";

export default function navCompact() {
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
    fontSize: "1.5rem",
    margin: "0px 4px 0px 6.2px",
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

  const dummyIcon: IIconProps = { iconName: "banana" };
  return (
    <ActionButton
      menuProps={menuProps}
      styles={menuButtonStyles}
      menuIconProps={dummyIcon}
      title="Menu"
    >
      <FontIcon iconName="GlobalNavButton" className={menuIconClass} />
    </ActionButton>
  );
}
