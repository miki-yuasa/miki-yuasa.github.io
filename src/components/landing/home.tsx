import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image";
import { Mail28Regular } from "@fluentui/react-icons";
import { GoMarkGithub } from "react-icons/go"
import { IoLogoBitbucket, IoLogoLinkedin } from "react-icons/io5"

import MediaButton from "../buttons/mediaButton";
import DownloadButton from "../buttons/dlButton";
import { profileData } from "../../data/profileData"

export default function Home() {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "homebg_fhd_filtered.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED,
              width: 3000,
              quality: 100,
              placeholder: BLURRED,
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage);

  return (
    <div className="idBox" id="home">
      <div className="homeParent">
        <BgImage
          image={pluginImage}
        >
          <div className="homeBackgroundedSection">
            <h2 className="home">Hi there! I'm</h2>
            <br />
            <h1 className="home">{profileData.name}</h1>
            <br />
            <p className="shortIntro">
              {" "}
              Reinforcement Learning Graduate Research Assistant at the University of
              Illinois Urbana-Champaign
            </p>

            <DownloadButton href='/CV_Mikihisa_Yuasa.pdf' title="Download CV" />

            <br />
            <br />
            <MediaButton
              href={"mailto:" + profileData.email}
              title="E-mail Address"
              icon={<Mail28Regular primaryFill='white' />}
            />
            <MediaButton
              href="https://github.com/miki-yuasa/"
              title="Github"
              icon={<GoMarkGithub fontSize="28" />}
            />
            <MediaButton
              href="https://bitbucket.org/mikyu/"
              title="Bitbucket"
              icon={<IoLogoBitbucket fontSize="28" />}
            />
            <MediaButton
              href="https://www.linkedin.com/in/mikihisa-yuasa-3b7199132/"
              title="LinkedIn Profile"
              icon={<IoLogoLinkedin fontSize="28" />}
            />
          </div>
        </BgImage>
      </div>
    </div>
  );
}
