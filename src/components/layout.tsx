/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { DefaultPalette } from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";

import Header from "./header";
import "../scss/layout.scss";
import { NewTabLink } from "./links/defaultLink";

const Layout = (props: { children: React.ReactNode; header?: JSX.Element }) => {
  initializeIcons();

  const data = useStaticQuery<GatsbyTypes.infoAndSiteTitleQueryQuery>(graphql`
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
  return (
    <div style={{ background: DefaultPalette.neutralLighter }}>
      {props.header}
      <div className="layout-body">
        <main>{props.children}</main>
        <footer>
          Last updated: {data.site!.buildTime}
          <br />
          Copyright © 2020 - {new Date().getFullYear()} Mikihisa Yuasa | All Rights
          Reserved
          <br />
          Built with {` `}{" "}
          <NewTabLink
            className="footer"
            href="https://www.gatsbyjs.org"
          >
            <em>Gatsby</em>
          </NewTabLink>{" "}
          and{" "}
          <NewTabLink
            className="footer"
            href="https://www.microsoft.com/design/fluent/#/"
          >
            <em>Fluent Design System</em>
          </NewTabLink>
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
