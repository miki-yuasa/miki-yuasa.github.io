import React from "react";
import { useConstCallback, useConst } from "@fluentui/react-hooks";
import {
  DefaultPalette,
  IconButton,
  IIconProps,
  IButtonStyles,
  SearchBox,
  IContextualMenuItem
} from "@fluentui/react";

const searchIcon: IIconProps = {
  iconName: "Search",
};
const dummyIcon: IIconProps = {
  iconName: "banana",
};

const searchButtonStyles: IButtonStyles = {
  root: {
    color: DefaultPalette.themeDark,
  },
};

const placeHolderText: string = "Search by Keywords";

const wrapperStyle: React.CSSProperties = { borderBottom: "1px solid #ccc" };

export function ResponsiveSearchBox() {
  const renderMenuList = useConstCallback(() => {
    return (
      <div>
        <div style={wrapperStyle}>
          <SearchBox
            ariaLabel="Search by Keywords"
            placeholder={placeHolderText}
            iconProps={dummyIcon}
          />
        </div>
      </div>
    );
  });

  const menuItems: IContextualMenuItem[] = [
    {
      key: "",
      text: "",
    },
  ];

  const [items, setItems] = React.useState(menuItems);

  const menuProps = useConst(() => ({
    onRenderMenuList: renderMenuList,
    items,
  }));
  return (
    <>
      <div className="searchWide">
        <SearchBox placeholder={placeHolderText} />
      </div>
      <div className="searchCompact">
        <IconButton
          menuProps={menuProps}
          iconProps={searchIcon}
          title="Search by Keywords"
          ariaLabel="Search"
          styles={searchButtonStyles}
        />
      </div>
    </>
  );
}
