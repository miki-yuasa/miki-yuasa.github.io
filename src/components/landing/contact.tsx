import React from "react";
import { DefaultPalette } from "office-ui-fabric-react";

import CV from "./CV_Mikihisa_Yuasa.pdf";
import SectionTemplate from "../../templates/sectionTemplate";
import "../layout.scss";

export default function Contact() {
  return (
    <SectionTemplate title="Contact">
      <p>Email: mikihisa(dot)yuasa(at)wisc(dot)edu</p>
      <p>
        CV can be downloaded from{" "}
        <a
          href={CV}
          target="_blank"
          rel="noreferrer"
          style={{ color: DefaultPalette.neutralPrimary }}
        >
          <strong>here!</strong>
        </a>
      </p>
    </SectionTemplate>
  );
}