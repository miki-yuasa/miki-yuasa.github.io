import React from "react"

export function NewTabLink(props: { children: React.ReactNode, className: string, href: string }) {
    return (
        <a
            className={props.className}
            href={props.href}
            target="_blank"
            rel="noreferrer">
            {props.children}
        </a>
    )
}

NewTabLink.defaultProps = { className: "defaultUnderline" }