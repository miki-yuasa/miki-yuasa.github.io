import React from "react"

export function NewTabLink(props: { children: React.ReactNode, className: string, href: string }) {
    return (
        <a
            className={props.className}
            href={props.href}
            target="_blank"
            rel="noreferer">
            {props.children}
        </a>
    )
}

NewTabLink.defaultProps = { className: "neutralDark" }