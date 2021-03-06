import React from "react";
import {
  DefaultPalette,
  CommandButton,
  Stack,
  IButtonStyles,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
} from "@fluentui/react";
import { IoHomeOutline } from "react-icons/io5";

import { ResponsiveSearchBox } from "../search/responsiveSearchBox";
import { NavCommandButton } from "../buttons/navCommandButton";

const textColor: string = DefaultPalette.themePrimary;

const itemHeight: number = 80;

const blogHomeButtonStyles: IButtonStyles = {
  root: {
    fontSize: "xx-large",
    color: DefaultPalette.themePrimary,
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
    width: 'auto',
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
          text="Mikihisa's Blog"
          href="/blog/"
          styles={blogHomeButtonStyles}
        />
      </Stack.Item>
      <Stack.Item disableShrink styles={nonShrinkingStackItemStylesSearch}>
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        {" "}
      </Stack.Item>
      <Stack.Item disableShrink styles={nonShrinkingStackItemStylesReturnHome}>
        <NavCommandButton
          text=""
          title="Return to Home"
          href="/"
        >
          <IoHomeOutline fontSize="24" />
        </NavCommandButton>
      </Stack.Item>
    </Stack>
  );
}
