import React from "react";
import { getInitColorSchemeScript } from "@mui/material/styles";

export const onRenderBody = ({
  setHtmlAttributes,
  setPreBodyComponents,
  setBodyAttributes,
}) => {
  setPreBodyComponents([
    <React.Fragment key="mui-init-color-scheme-script">
      {getInitColorSchemeScript({ defaultMode: "system" })}
    </React.Fragment>,
  ]);
  setHtmlAttributes({ lang: "ja" });
};
