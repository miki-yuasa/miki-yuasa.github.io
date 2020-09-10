/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { DefaultPalette } from "office-ui-fabric-react";
import { initializeIcons } from "@uifabric/icons";

import Header from "./header";
import "./layout.scss";

const Layout = (props: { children: React.ReactNode; header?: JSX.Element }) => {
  initializeIcons();

  const data = useStaticQuery(graphql`
    query infoAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      site {
        buildTime(formatString: "MM/DD/YYYY")
      }
    }
  `);

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <div style={{ background: DefaultPalette.neutralLighter }}>
      {props.header}
      <div className="layoutBody">
        <main>{props.children}</main>
        <footer>
          Last updated: {data.site.buildTime}
          <br />
          Copyright © {new Date().getFullYear()} Mikihisa Yuasa | All Rights
          Reserved
          <br />
          Built with {` `}{" "}
          <a
            className="footer"
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noreferrer"
          >
            <em>Gatsby</em>
          </a>{" "}
          and{" "}
          <a
            className="footer"
            href="https://www.microsoft.com/design/fluent/#/"
            target="_blank"
            rel="noreferrer"
          >
            <em>Fluent Design System</em>
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  header: <Header />,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
