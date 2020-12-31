import React from "react";
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

import { Mdx } from "../../../@types/graphql-types";

export const BlogTocPane = (props: { mdx: Mdx }) => {
    const tocItems = props.mdx?.tableOfContents?.items;

    const tocOrdered = tocItems.map(tocItem => {
        if (tocItem.links === undefined) {
            return {
                url: tocItem.url,
                name: tocItem.title
            }
        }
        else {
            const links = tocItem.links.map(link => {
                return {
                    name: link.name,
                    url: link.url
                }
            });
            return {
                url: tocItem.url,
                name: tocItem.title,
                link: links,
            }
        }
    });

    const navLinkGroups: INavLinkGroup[] = [
        {
            links: tocOrdered
        }
    ]

    const navStyles: Partial<INavStyles> = {
        root: {
            boxSizing: 'border-box',
        },
    };

    return (
        <div className="articleSidePaneToc">
            <Nav
                ariaLabel="Nav Table of Contents"
                styles={navStyles}
                groups={navLinkGroups}
            />
        </div>
    );
}