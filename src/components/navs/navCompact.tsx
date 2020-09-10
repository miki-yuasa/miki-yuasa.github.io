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
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { IContextualMenuItem } from "@fluentui/react";

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
    margin: "0px 5px 0px 5px",
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
