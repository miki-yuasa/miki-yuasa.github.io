import React from "react";
import {
    Stack,
    IStackStyles,
    IStackItemStyles,
    IStackTokens,
} from "@fluentui/react";

import { NextButton, PrevButton, BlogTopButton } from "../buttons/blogArticleNavButtons"
import { MarkdownRemarkFrontmatter, SitePageContext } from "../../../@types/graphql-types";

export function BlogArticleNav(props: {
    pageContext: SitePageContext
}) {
    const nextFrontmatter: MarkdownRemarkFrontmatter = props.pageContext.next
        ?.frontmatter!;

    const prevFrontmatter: MarkdownRemarkFrontmatter = props.pageContext.previous
        ?.frontmatter!;

    const nextButton = nextFrontmatter ? (
        <NextButton frontmatter={nextFrontmatter} />
    ) : (
            <> </>
        );

    const prevButton = prevFrontmatter ? (
        <PrevButton frontmatter={prevFrontmatter} />
    ) : (
            <> </>
        );

    const stackStyles: IStackStyles = {
        root: {
            overflow: "hidden",
            width: `100%`,
        },
    };

    const stackItemStyles: IStackItemStyles = {
        root: {
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
        },
    };

    const nonShrinkingStackItemStylesButtons: IStackItemStyles = {
        root: {
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            width: 80,
        },
    };

    const stackTokens: IStackTokens = {
        childrenGap: 0,
        padding: 0,
    };

    return (
        <Stack horizontal styles={stackStyles} tokens={stackTokens}>
            <Stack.Item disableShrink styles={nonShrinkingStackItemStylesButtons}>
                {prevButton}
            </Stack.Item>
            <Stack.Item grow styles={stackItemStyles}>
                {" "}
            </Stack.Item>
            <Stack.Item disableShrink styles={nonShrinkingStackItemStylesButtons}>
                <BlogTopButton />
            </Stack.Item>
            <Stack.Item grow styles={stackItemStyles}>
                {" "}
            </Stack.Item>
            <Stack.Item disableShrink styles={nonShrinkingStackItemStylesButtons}>
                {nextButton}
            </Stack.Item>
        </Stack>
    )
}
