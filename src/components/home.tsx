import React from "react";

import StyledBackgroundSection from "./homeStyle";
import "../components/layout.scss";

export default function Home() {
  return (
    <div className="idBox" id="home">
      <div className="homeParent">
        <StyledBackgroundSection />
      </div>
    </div>
  );
}
