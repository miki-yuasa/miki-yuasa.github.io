import React from "react";
import {
  DefaultPalette,
  CommandButton,
  initializeIcons,
  Stack,
  IButtonStyles,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
} from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { IIconProps } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles, registerIcons } from "office-ui-fabric-react/lib/Styling";

registerIcons({
  icons: {
    searchIon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g fill="none" strokeWidth="32px">
          <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" />
          <line x1="338.29" y1="338.29" x2="448" y2="448" />
        </g>
      </svg>
    ),
  },
});

initializeIcons();

const searchIcon: IIconProps = {
  iconName: "searchIon",
  color: DefaultPalette.themePrimary,
};

const textColor: string = DefaultPalette.themePrimary;

const itemHeight: number = 80;

const blogHomeButtonStyles: IButtonStyles = {
  root: {
    fontSize: "xx-large",
    color: DefaultPalette.themePrimary,
  },
};

const returnHomeButtonStyles: IButtonStyles = {
  root: {
    fontSize: "0.9rem",
  },
};

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    overflow: "hidden",
    width: `100%`,
  },
};

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "center",
    color: textColor,
    display: "flex",
    height: itemHeight,
    justifyContent: "center",
    overflow: "hidden",
  },
};

const nonShrinkingStackItemStylesBlogTop: IStackItemStyles = {
  root: {
    alignItems: "center",
    color: textColor,
    display: "flex",
    height: itemHeight,
    justifyContent: "center",
    overflow: "hidden",
    width: 200,
  },
};

const nonShrinkingStackItemStylesSearch: IStackItemStyles = {
  root: {
    alignItems: "center",
    display: "flex",
    height: itemHeight,
    justifyContent: "center",
    overflow: "hidden",
  },
};

const nonShrinkingStackItemStylesReturnHome: IStackItemStyles = {
  root: {
    alignItems: "center",
    color: textColor,
    display: "flex",
    height: itemHeight,
    justifyContent: "center",
    overflow: "hidden",
  },
};

const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0,
};

export function NavBlogCompact() {
  return (
    <Stack horizontal styles={stackStyles} tokens={innerStackTokens}>
      <Stack.Item disableShrink styles={nonShrinkingStackItemStylesBlogTop}>
        <CommandButton
          text="Miki's Blog"
          href="/blog/blog-top"
          styles={blogHomeButtonStyles}
        />
      </Stack.Item>
      <Stack.Item disableShrink styles={nonShrinkingStackItemStylesSearch}>
        <SearchBox placeholder="Search by Keywords" />
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        {" "}
      </Stack.Item>
      <Stack.Item disableShrink styles={nonShrinkingStackItemStylesReturnHome}>
        <CommandButton
          text="Site Home"
          title="Return to the site home"
          href="/"
          styles={returnHomeButtonStyles}
        />
      </Stack.Item>
    </Stack>
  );
}
