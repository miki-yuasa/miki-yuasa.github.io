import React, { useState, useEffect } from "react";
import { Nav, INavLink, INavLinkGroup } from "@fluentui/react";

import { BlogArticleBySlugQuery } from "../../../@types/graphql-types";

function orderToc(tocItems: any) {
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

    return tocOrdered
}

function tocHeight(tocOrdered: INavLink[]) {
    const height: number = 60 + 44 * tocOrdered.length;
    return height
}

export const BlogTocPane = (props: { data: BlogArticleBySlugQuery }) => {
    const tocItems = props.data.mdx?.tableOfContents?.items;

    if (tocItems === undefined) {
        return (<></>);
    }
    else {
        const tocOrdered: INavLink[] = orderToc(tocItems)
        const height: number = tocHeight(tocOrdered);

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
            const boxes = document.querySelectorAll("div.idBox");
            const observer = new IntersectionObserver(doWhenIntersect, options);
            boxes.forEach((box) => {
                observer.observe(box);
                // それぞれのboxを監視する
            });
        });

        const navLinkGroups: INavLinkGroup[] = [
            {
                links: tocOrdered
            }
        ]

        return (
            <div className="article toc side-pane" style={{ height: height }}>
                <Nav
                    ariaLabel="Nav Table of Contents"
                    groups={navLinkGroups}
                    selectedKey={String(selectedKey)}
                />
            </div>
        );
    }
}

export const BlogTocCenter = (props: { data: BlogArticleBySlugQuery }) => {
    const tocItems = props.data.mdx?.tableOfContents?.items;

    if (tocItems === undefined) {
        return (<></>);
    }
    else {
        const tocOrdered: INavLink[] = orderToc(tocItems)
        const height: number = tocHeight(tocOrdered);

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
            const boxes = document.querySelectorAll("div.idBox");
            const observer = new IntersectionObserver(doWhenIntersect, options);
            boxes.forEach((box) => {
                observer.observe(box);
                // それぞれのboxを監視する
            });
        });

        const navLinkGroups: INavLinkGroup[] = [
            {
                name: "Table of Contents",
                links: tocOrdered
            }
        ]

        return (
            <div className="article toc center" >
                <Nav
                    ariaLabel="Nav Table of Contents"
                    groups={navLinkGroups}
                    selectedKey={String(selectedKey)}
                />
            </div>
        );
    }
}