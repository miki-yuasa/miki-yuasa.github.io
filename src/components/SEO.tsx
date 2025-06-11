import React, { ReactNode } from "react";

export type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
};
// const useSiteMetadata = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//           description
//           image
//           siteUrl
//         }
//       }
//     }
//   `);

//   return data.site.siteMetadata;
// };

export type SiteMetadata = {
  title: string;
  description: string;
  image: string;
  siteUrl: string;
  twitterUsername: string;
};

const defaultSiteMetadata: SiteMetadata = {
  title: "Mikihisa Yuasa",
  description: "Personal website of Mikihisa Yuasa",
  image: "/images/profile.jpg",
  siteUrl: "https://miki-yuasa.github.io",
  twitterUsername: "",
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = defaultSiteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
