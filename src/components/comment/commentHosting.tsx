import React from "react";
import { Disqus } from 'gatsby-plugin-disqus';

import { BlogArticleBySlugQuery } from '../../../@types/graphql-types';

export function CommentHosting(props: { data: BlogArticleBySlugQuery }) {

    const { mdx } = props.data; // data.mdx holds your post data

    const frontmatter = mdx?.frontmatter;

    return (
        <Disqus
            config={{
                /* Replace PAGE_URL with your post's canonical URL variable */
                url: `https://miki-yuasa.github.io/blog/articles/${frontmatter?.slug}`,
                /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
                identifier: frontmatter?.slug,
                /* Replace PAGE_TITLE with the title of the page */
                title: frontmatter?.title,
            }} />
    )
}