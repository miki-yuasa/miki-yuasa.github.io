import React from "react";
import {
  DefaultPalette,
  Slider,
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
} from "@fluentui/react";

import { NavBlogCompact } from "../navs/navBlogComapct";

const itemHeight: number = 80;
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
    display: "flex",
    height: itemHeight,
    justifyContent: "center",
    overflow: "hidden",
  },
};
const nonShrinkingStackItemStylesOuter: IStackItemStyles = {
  root: {
    alignItems: "center",
    display: "flex",
    height: itemHeight,
    justifyContent: "center",
    overflow: "hidden",
    width: 1150,
  },
};

const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0,
};

export function NavBlogWide() {
  return (
    <Stack horizontal styles={stackStyles} tokens={innerStackTokens}>
      <Stack.Item grow styles={stackItemStyles}>
        {" "}
      </Stack.Item>
      <Stack.Item disableShrink styles={nonShrinkingStackItemStylesOuter}>
        <NavBlogCompact />
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        {" "}
      </Stack.Item>
    </Stack>
  );
}
