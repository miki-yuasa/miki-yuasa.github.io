module.exports = {
  siteMetadata: {
    title: `Mikihisa Yuasa・湯淺 幹久・ユアサ ミキヒサ`,
    description: `Personal website of Mikihisa Yuasa`,
    author: `Mikihisa Yuasa`,
    url: "https://mikyu.bitbucket.io",
    siteUrl: "https://mikyu.bitbucket.io",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/blog/blog-articles`,
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `@types/graphql-types.d.ts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mikihisa Yuasa Portfolio`,
        short_name: `miki_starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //`gatsby-plugin-graphql-codegen`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
