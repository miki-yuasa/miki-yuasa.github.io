/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layoutBody">
        <main>{children}</main>
        <footer>
          Last updated: July 2020<br />
          Copyright © {new Date().getFullYear()} Mikihisa Yuasa | All Rights Reserved<br />
          Built with {` `} <a className='footer' href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer"><em>Gatsby</em></a> and {' '}
          <a className='footer' href="https://www.microsoft.com/design/fluent/#/" target="_blank" rel="noreferrer"><em>Fluent Design System</em></a>.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout