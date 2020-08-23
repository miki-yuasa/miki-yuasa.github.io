import React from "react";
import { DefaultPalette } from "office-ui-fabric-react";

import CV from "./CV_Mikihisa_Yuasa_2020.pdf";
import SectionTemplate from "../templates/sectionTemplate";

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
