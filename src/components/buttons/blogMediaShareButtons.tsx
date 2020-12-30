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

    const articleUrl = `https://mikyu.bitbucket.io/blog/articles/${props.data.mdx?.frontmatter?.slug}`;

    return (
        <div className="articleMediaButtons">
            <div className="articleMediaButton">
                <FacebookShareButton url={articleUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="articleMediaButton">
                <LinkedinShareButton url={articleUrl} title={articleTitle} >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            <div className="articleMediaButton">
                <TwitterShareButton title={articleTitle} via="cbdbcp" url={articleUrl}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>

            <div className="articleMediaButton">
                <HatenaShareButton url={articleUrl} title={articleTitle} >
                    <HatenaIcon size={32} round />
                </HatenaShareButton>
            </div>

            <div className="articleMediaButton">
                <LineShareButton url={articleUrl} title={articleTitle} >
                    <LineIcon size={32} round />
                </LineShareButton>
            </div>
        </div>
    )
}