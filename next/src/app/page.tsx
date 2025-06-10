import Image from "next/image";
import styles from "./page.module.css";

import { Typography, Link, Box, List, ListItem } from "@mui/material";
import { GitHub, LinkedIn, School, Email } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

import { SEO } from "../components/SEO";
import {
  MediaButton,
  MediaButtonProps,
} from "../components/Buttons/MediaButton";
import { ProjectCards } from "../components/Lists/ProjectCards";

const linkStyle = {
  underline: "hover" as const,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

const mediaLinks: MediaButtonProps[] = [
  { name: "Email", url: "mailto:myuasa2@illinois.edu", icon: Email },
  { name: "GitHub", url: "https://github.com/miki-yuasa", icon: GitHub },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=NiRKTWkAAAAJ",
    icon: School,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mikihisa-yuasa/",
    icon: LinkedIn,
  },
];

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Welcome to my personal website!" />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1 }} key="intro">
          <Typography variant="h4" gutterBottom>
            Mikihisa Yuasa
          </Typography>
          <Typography variant="body2" gutterBottom>
            I am a PhD student focusing on explainable AI (XAI) & reinforcement
            learning policies for robot systems, advised by Professor Huy T.
            Tran at the{" "}
            <Link href="https://tran.aerospace.illinois.edu/" {...linkStyle}>
              Lab for Intelligent Robots and Agents (LIRA)
            </Link>
            ,{" "}
            <Link href="https://aerospace.illinois.edu/" {...linkStyle}>
              Department of Aerospace Engineering
            </Link>{" "}
            at the{" "}
            <Link href="https://illinois.edu/" {...linkStyle}>
              University of Illinois Urbana-Champaign
            </Link>
            .
          </Typography>
        </Box>
        <Box
          sx={{
            ml: 4,
            minWidth: 80,
            maxWidth: { xs: 120, sm: 140, md: 160, lg: 180, xl: 200 },
            display: { xs: "block", sm: "block" },
            position: "relative", // Add this
            aspectRatio: "1 / 1", // Maintain square aspect ratio
            width: "100%", // Responsive width
            height: "auto", // Responsive height
          }}
          key="profile-pic"
        >
          <Image
            src="/profile.jpg"
            alt="profile_icon"
            fill // Makes the image fill the parent box
            style={{ borderRadius: "40px", objectFit: "cover" }}
            sizes="(max-width: 600px) 120px, (max-width: 900px) 140px, (max-width: 1200px) 160px, (max-width: 1536px) 180px, 200px"
            priority
          />
        </Box>
      </Box>
      {/* Social Media Links */}
      <Grid
        container
        spacing={2}
        mb={4}
        justifyContent="center"
        alignItems="center"
      >
        {mediaLinks.map((media) => (
          <Grid
            key={media.name}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MediaButton name={media.name} url={media.url} icon={media.icon} />
          </Grid>
        ))}
      </Grid>
      <Typography id="research" variant="h5" gutterBottom>
        Research
      </Typography>
      <Box>
        <Typography variant="body2" gutterBottom>
          My research interests are:
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          <li>
            <Typography variant="body2">
              <strong>Explainable Reinforcement Learning for Robotics</strong>
              <br />
              Neuro-symbolic and logic-based methods for interpretable,
              verifiable RL in robotics.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <strong>
                Language-Conditioned Policy Generation and Zero-Shot
                Generalization
              </strong>
              <br />
              Scalable models to generate RL policies from language for
              zero-shot generalization.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <strong>
                AI/ML Systems for Human-Robot Collaboration and Real-World
                Deployment
              </strong>
              <br />
              RL for teamwork and MLOps pipelines for real-world autonomous
              systems.
            </Typography>
          </li>
        </Box>
        <Typography variant="body2" gutterBottom>
          I'm always happy to collaborate with graduate/undergraduate students.
          Please drop me an email if you want to work with me. I'm looking for
          <b> part-time/full-time internship opportunities</b>. Feel free to
          reach out if you're interested in my research.
        </Typography>
      </Box>
    </>
  );
}
