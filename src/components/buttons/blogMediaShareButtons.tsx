import React from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    HatenaShareButton,
    LineShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    HatenaIcon,
    LineIcon
} from 'react-share'
import { BlogArticleBySlugQuery } from "../../../@types/graphql-types";

export const BlogMediaShareButton = (props: { data: BlogArticleBySlugQuery }) => {
    const articleTitle = props.data.mdx?.frontmatter?.title;

    const articleUrl = `https://miki-yuasa.github.io/blog/articles/${props.data.mdx?.frontmatter?.slug}`;

    return (
        <div className="article button media-group">
            <div className="article button media">
                <FacebookShareButton url={articleUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="article button media">
                <LinkedinShareButton url={articleUrl} title={articleTitle} >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            <div className="article button media">
                <TwitterShareButton title={articleTitle} url={articleUrl}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>

            <div className="article button media">
                <HatenaShareButton url={articleUrl} title={articleTitle} >
                    <HatenaIcon size={32} round />
                </HatenaShareButton>
            </div>

            <div className="article button media">
                <LineShareButton url={articleUrl} title={articleTitle} >
                    <LineIcon size={32} round />
                </LineShareButton>
            </div>
        </div>
    )
}