import React from "react";
import { CommandButton, IButtonStyles } from "@fluentui/react";

export function NavCommandButton(props: {
  text?: string;
  href: string;
  title?: string;
  children?: React.ReactNode;
  styles?: IButtonStyles;
}) {
  return (
    <CommandButton
      text={props.text}
      title={props.title}
      href={props.href}
      styles={props.styles}
    >
      {props.children}
    </CommandButton>
  );
}

const navCommandButtonStyles: IButtonStyles = {
  root: {
    fontSize: "1rem",
  }
};

NavCommandButton.defaultProps = { navCommandButtonStyles };
