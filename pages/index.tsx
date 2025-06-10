import * as React from "react";
import { Typography, Link, Box, List, ListItem } from "@mui/material";
import { GitHub, LinkedIn, School, Email } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { Layout } from "../src/components/layout";
import { SEO } from "../src/components/SEO";
import {
  MediaButton,
  MediaButtonProps,
} from "../src/components/Buttons/MediaButton";
import { ProjectCards } from "../src/components/Lists/ProjectCards";

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
    <Layout>
      <SEO title="Home" description="Welcome to my personal website!" />
      {/* ...rest of your homepage content... */}
    </Layout>
  );
}
