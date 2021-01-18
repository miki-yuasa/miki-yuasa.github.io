import React from "react";
import { MarkdownRemarkFrontmatter } from "../../../@types/graphql-types";
import {
    ChevronLeftIcon, ChevronRightIcon
} from "../icons/infoIcons";
import { NavCommandButton } from "./navCommandButton";


export const NextButton = (props: { frontmatter: MarkdownRemarkFrontmatter }) => {
    return (
        <NavCommandButton href={props.frontmatter.slug!}>
            Next&nbsp;&nbsp; <ChevronRightIcon />
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
    return <NavCommandButton href="/blog">Blog Top</NavCommandButton>

};