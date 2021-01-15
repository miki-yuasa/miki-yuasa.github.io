import React from "react";

export const BlogSidePaneTitle = (props: { title: string, children: React.ReactNode }) => {
    return (
        <div className="articleSidePaneItem">
            <div className="articleSidePaneItemTitle">
                {props.title}
            </div>
            <div> {props.children}</div>
        </div>
    )
}