import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  children?: ReactNode;
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  children,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: image
            ? ([
                {
                  url: image,
                  width: 800,
                  height: 600,
                  alt: title,
                },
              ] as const)
            : undefined,
          site_name: title,
        }}
        twitter={{
          cardType: `summary_large_image`,
        }}
      />
      {children}
    </>
  );
};
