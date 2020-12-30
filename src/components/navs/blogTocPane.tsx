import React from "react";
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

import { BlogArticleBySlugQuery } from "../../../@types/graphql-types";

export const BlogTocPane = (props: { data: BlogArticleBySlugQuery }) => {
    const toc = props.data.markdownRemark?.tableOfContents?.items;

    const tocHeading = toc
}