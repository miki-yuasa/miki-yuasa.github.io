import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getTheme } from '@fluentui/react';
import { PrimaryButton, ActionButton } from 'office-ui-fabric-react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles, registerIcons } from 'office-ui-fabric-react/lib/Styling';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => (
    <StaticQuery
        query={graphql`
        query {
          desktop: file(relativePath: { eq: "homebg_4k.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 3000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
        render={data => {
            // Set ImageData.
            const theme = getTheme();
            const imageData = data.desktop.childImageSharp.fluid
            const iconClass = mergeStyles({
                height: 45,
                width: 45,
                margin: '11px 0 0 10px',
                stroke: 'white',
                fill: 'white'
            });

            const downloadiconClass = mergeStyles({
                height: 40,
                width: 40,
                margin: '13px 0 0 0',
                stroke: 'white'
            });

            const mediaButtonStyles = {
                rootHovered: {
                    background: theme.palette.themePrimary,
                    boxShadow: Depths.depth8
                },
            }

            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}>

                    <div class='homeBackgroundedSection'>

                        <h2 class='home'>Hi there!</h2><br />
                        <h1 class='home'>I'm Mikihisa Yuasa</h1><br />
                        <p class="shortIntro"> An engineering undergraduate at the University of Wisconsin-Madison.</p>

                        <PrimaryButton href="http://bing.com" target="_blank" title="Download CV" allowDisabledFocus style={{
                            boxShadow: Depths.depth16
                        }}>
                            <FontIcon iconName="download-svg" className={downloadiconClass} />
                            <strong>Download CV</strong>
                        </PrimaryButton>
                        <br /><br />

                        <ActionButton href="mailto:mikihisa.yuasa@wisc.edu" target="_blank" allowDisabledFocus title="E-mail Address" styles={mediaButtonStyles} >
                            <FontIcon iconName="mailoutline-svg" className={iconClass} />
                        </ActionButton>
                        <ActionButton href="https://bitbucket.org/mikyu/" target="_blank" allowDisabledFocus title="Bitbucket Repositories" styles={mediaButtonStyles} >
                            <FontIcon iconName="bitbucket-svg" className={iconClass} />
                        </ActionButton>
                        <ActionButton href="https://www.linkedin.com/in/mikihisa-yuasa-3b7199132/" target="_blank" allowDisabledFocus title="LinkedIn Profile" styles={mediaButtonStyles} >
                            <FontIcon iconName="linkedin-svg" className={iconClass} />
                        </ActionButton>
                    </div>
                </BackgroundImage >
            )
        }}
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: top top;
    background-repeat: repeat-y;
    background-size: cover;
  `

export default StyledBackgroundSection