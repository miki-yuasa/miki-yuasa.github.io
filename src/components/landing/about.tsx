import React from "react";
import { DefaultPalette } from "@fluentui/react";
import { StaticImage } from "gatsby-plugin-image";

import { profileData } from "../../data/profileData"
import { listLabs } from "../lists/labList"
import { NewTabLink } from "../links/defaultLink";

export default function About() {
  return (
    <div className="idBox" id="about">
      <div className="sectionMaster">
        <div className="sectionParentAbout">
          <div
            className="sectionHeader"
            style={{ color: DefaultPalette.neutralLight }}
          >
            <h2 className="sectionHeader">About</h2>
          </div>
          <div className="profile">
            <StaticImage src="../../assets/profile.jpg" alt="profile_icon" style={{ borderRadius: "40px" }} />
          </div>
          <div
            className="sectionBody"
            style={{ color: DefaultPalette.neutralQuaternary }}
          >
            <form>
              <dl>
                <dt>Name:</dt>
                <dd>{profileData.name}</dd>
                <dt>Affiliation:</dt>
                <dd>{profileData.affiliation + " "}</dd>
                <dt>Labs:</dt>
                <dd>{listLabs(profileData.labs)}</dd>
                <dt>Keywords:</dt>
                <dd>{profileData.keywords}</dd>
                <dt>Email:</dt>
                <dd>{profileData.email}</dd>
                <dt>CV:</dt>
                <dd>
                  <NewTabLink className='about' href='/CV_Mikihisa_Yuasa.pdf'>
                    <strong>Download from Here!</strong>
                  </NewTabLink>
                </dd>
              </dl>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
