import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Typography, Link } from "@mui/material"
import { Layout } from "../components/layout"

const linkStyle = {
  underline: "hover" as const,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Mikihisa Yuasa
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am a PhD student focusing on explainable AI (XAI) & reinforcement learning policies for robot systems, advised by Professor Huy T. Tran at the{' '}
        <Link href="https://tran.aerospace.illinois.edu/"{...linkStyle}>Lab for Intelligent Robots and Agents (LIRA)</Link>,{' '}
        <Link href="https://aerospace.illinois.edu/"  {...linkStyle}>Department of Aerospace Engineering</Link> at the{' '}
        <Link href="https://illinois.edu/" {...linkStyle}>University of Illinois Urbana-Champaign</Link>.
      </Typography>

    </Layout >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
