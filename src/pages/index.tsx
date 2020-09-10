import React from "react";
import { loadTheme } from "@fluentui/react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Home from "../components/home";
import About from "../components/about";
import Research from "../components/research";
import Software from "../components/software";
import Blog from "../components/blog";
import Contact from "../components/contact";
import { IndexPageQuery } from "../../@types/graphql-types";
import "../components/layout.scss";

loadTheme({
  defaultFontStyle: { fontFamily: "Lato, Helvetica" },
  palette: {
    themePrimary: "#0078d4",
    themeLighterAlt: "#eff6fc",
    themeLighter: "#deecf9",
    themeLight: "#c7e0f4",
    themeTertiary: "#71afe5",
    themeSecondary: "#2b88d8",
    themeDarkAlt: "#106ebe",
    themeDark: "#005a9e",
    themeDarker: "#004578",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#ffffff",
  },
});

const IndexPage = (props: { data: IndexPageQuery }) => (
  <Layout>
    <SEO title={props.data.site?.siteMetadata?.title!} />
    <Home />
    <About />
    <Research />
    <Software />
    <Blog />
    <Contact />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
