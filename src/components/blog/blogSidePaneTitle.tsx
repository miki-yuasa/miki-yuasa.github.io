import React from "react";

export const BlogSidePaneTitle = (props: { title: string, children: React.ReactNode }) => {
    return (
        <div className="article item side-pane">
            <div className="article title side-pane">
                {props.title}
            </div>
            <div> {props.children}</div>
        </div>
    )
}