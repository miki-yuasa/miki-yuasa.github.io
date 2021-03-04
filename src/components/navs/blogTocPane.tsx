import React, { useState, useEffect } from "react";
import { Nav, INavLink, INavLinkGroup } from "@fluentui/react";

import { BlogArticleBySlugQuery } from "../../../@types/graphql-types";

export const BlogTocPane = (props: { data: BlogArticleBySlugQuery }) => {
    const tocItems = props.data.mdx?.tableOfContents?.items;

    if (tocItems === undefined) {
        return (<></>);
    }
    else {
        const tocOrdered: INavLink[] = tocItems.map(tocItem => {
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

        const height: number = 60 + 57 * tocOrdered.length;

        const [selectedKey, setSelectedKey] = useState({});

        const options = {
            root: null, // 今回はビューポートをルート要素とする
            rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
            threshold: 0, // 閾値は0
        };

        const pageIndexNames = tocOrdered.map((tocOrderedItem) => {
            return tocOrderedItem.name;
        });

        function doWhenIntersect(entries: IntersectionObserverEntry[]) {
            // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
            entries.forEach((entry) => {
                console.log("this is doWhenIntersect");
                if (entry.isIntersecting) {
                    activateIndex(entry.target);
                }
            });
        }

        function activateIndex(element: Element) {
            let pageKey: number = pageIndexNames.indexOf(element.id);
            console.log(element.id);
            setSelectedKey(pageKey);
        }

        useEffect(() => {
            console.log("this is inside document");

            const boxes = document.querySelectorAll("div.idBox");
            console.log("new observer");

            const observer = new IntersectionObserver(doWhenIntersect, options);
            console.log("for each box");
            console.log(boxes);

            boxes.forEach((box) => {
                console.log("observe a box");

                observer.observe(box);
                console.log("after observe a box");
                // それぞれのboxを監視する
            });
        });

        const navLinkGroups: INavLinkGroup[] = [
            {
                links: tocOrdered
            }
        ]

        return (
            <div className="articleSidePaneToc" style={{ height: height }}>
                <Nav
                    ariaLabel="Nav Table of Contents"
                    groups={navLinkGroups}
                    selectedKey={String(selectedKey)}
                />
            </div>
        );
    }
}