import React from "react";

export function NavTabButton(props: { text: string, href: string, isSelected: boolean }) {
    const className = props.isSelected ? "navButton selected" : "navButton";
    return (
        <>
            <a className={className} href={props.href}>
                {props.text}
            </a>
        </>
    )
}

NavTabButton.defaultProps = {
    isSelected: false
};