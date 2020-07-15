import React from "react"
import { loadTheme } from '@fluentui/react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "./Home/home"
import About from "./About/about"
import Research from "./Research/research"
import Software from "./Software/software"

loadTheme({
  defaultFontStyle: { fontFamily: 'Lato, Helvetica', fontWeight: 'regular' },
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff',
  },
});


const IndexPage = () => (
  <Layout>
    <SEO title="Mikihisa Yuasa・湯淺 幹久・ユアサ ミキヒサ" />
    <Home />
    <About />
    <Research />
    <Software />
  </Layout>
)

export default IndexPage
