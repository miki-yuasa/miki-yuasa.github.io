import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

import MediaButton from "../buttons/mediaButton";
import DownloadButton from "../buttons/dlButton";

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "homebg_fhd_filtered.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;

      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="homeBackgroundedSection">
            <h2 className="home">Hi there! I'm</h2>
            <br />
            <h1 className="home">Mikihisa Yuasa</h1>
            <br />
            <p className="shortIntro">
              {" "}
              An engineering undergraduate at the University of
              Wisconsin-Madison.
            </p>

            <DownloadButton href='/CV_Mikihisa_Yuasa.pdf' title="Download CV" />

            <br />
            <br />

            <MediaButton
              href="mailto:mikihisa.yuasa@wisc.edu"
              title="E-mail Address"
              name="Mail"
            />
            <MediaButton
              href="https://bitbucket.org/mikyu/"
              title="Bitbucket"
              name="GitGraph"
            />
            <MediaButton
              href="https://www.linkedin.com/in/mikihisa-yuasa-3b7199132/"
              title="LinkedIn Profile"
              name="LinkedInLogo"
            />
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: top top;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
