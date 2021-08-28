import React from "react";

import SectionTemplate from "../../templates/sectionTemplate";
import { NewTabLink } from "../links/defaultLink";
import { getProfileData } from "../../data/profileData"

export default function Contact() {
  const profileData = getProfileData();
  return (
    <SectionTemplate title="Contact">
      <p>Email: {profileData.email}</p>
      <p>
        CV can be downloaded from{" "}
        <NewTabLink
          href='/CV_Mikihisa_Yuasa.pdf'
        >
          <strong>here!</strong>
        </NewTabLink>
      </p>
    </SectionTemplate>
  );
}
