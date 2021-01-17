/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import defaultOGImage from "../pages/blog/blog-articles/2020/taiyaki.jpg";


function SEO(props: {
  description?: string;
  lang: string;
  meta?: [];
  title?: string;
  image?: string;
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  );

  const metaDescription = props.description || site.siteMetadata.description;

  const ogImageUrl = site.siteMetadata.url + (props.image || defaultOGImage);


  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:title`,
          content: props.title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: ogImageUrl,
        },
        {
          property: `image`,
          content: ogImageUrl,
        },
        {
          name: "google-site-verification",
          content: "VeyonYBHvM3ZkJLFouPajohUlzpNC39CB04iXfgZsRo"
        }
      ].concat(props.meta!)}
    >
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
