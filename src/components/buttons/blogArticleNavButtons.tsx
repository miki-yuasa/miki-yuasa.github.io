import React from "react";
import { MarkdownRemarkFrontmatter } from "../../../@types/graphql-types";

import {
    ChevronRightIcon,
    ChevronLeftIcon,
} from "../icons/infoIcons";
import { NavCommandButton } from "./navCommandButton";

export const NextButton = (props: { frontmatter: MarkdownRemarkFrontmatter }) => {
    return (
        <NavCommandButton href={props.frontmatter.slug!}>
            Next <ChevronRightIcon />
        </NavCommandButton>
    )
};

export const PrevButton = (props: { frontmatter: MarkdownRemarkFrontmatter }) => {
    return (
        <NavCommandButton href={props.frontmatter.slug!}>
            <ChevronLeftIcon /> Previous
        </NavCommandButton>
    )
};

export const BlogTopButton = () => {
    return <NavCommandButton href="/blog/blog-top">Blog Top</NavCommandButton>

};