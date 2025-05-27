import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { Typography, Link, Box } from "@mui/material"
import { GitHub, LinkedIn, School, Email } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { MediaButton, MediaButtonProps } from "../components/Buttons/MediaButton";

const linkStyle = {
  underline: "hover" as const,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
}


const mediaLinks: MediaButtonProps[] = [
  { name: "Email", url: "mailto:myuasa2@illinois.edu", icon: Email },
  { name: "GitHub", url: "https://github.com/miki-yuasa", icon: GitHub },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=NiRKTWkAAAAJ", icon: School },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mikihisa-yuasa/", icon: LinkedIn },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" description="Welcome to my personal website!" />
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ flex: 1 }} key="intro">
          <Typography variant="h4" gutterBottom>
            Mikihisa Yuasa
          </Typography>
          <Typography variant="body2" gutterBottom>
            I am a PhD student focusing on explainable AI (XAI) & reinforcement learning policies for robot systems, advised by Professor Huy T. Tran at the{' '}
            <Link href="https://tran.aerospace.illinois.edu/" {...linkStyle}>Lab for Intelligent Robots and Agents (LIRA)</Link>,{' '}
            <Link href="https://aerospace.illinois.edu/"  {...linkStyle}>Department of Aerospace Engineering</Link> at the{' '}
            <Link href="https://illinois.edu/" {...linkStyle}>University of Illinois Urbana-Champaign</Link>.
          </Typography>
        </Box>
        <Box sx={{ ml: 4, minWidth: 80, maxWidth: { xs: 120, sm: 140, md: 160, lg: 180, xl: 200 }, display: { xs: 'block', sm: 'block' } }} key='profile-pic'>
          <StaticImage src="../images/profile.jpg" alt="profile_icon" style={{ borderRadius: "40px" }} />
        </Box>
      </Box>
      {/* Social Media Links */}
      <Grid container spacing={2} mb={4} justifyContent="center" alignItems="center">
        {mediaLinks.map((media) => (
          <Grid key={media.name} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MediaButton name={media.name} url={media.url} icon={media.icon} />
          </Grid>
        ))}
      </Grid>
    </Layout >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
