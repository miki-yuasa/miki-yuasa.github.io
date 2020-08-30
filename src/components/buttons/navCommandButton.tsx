import React from "react";
import { CommandButton, IButtonStyles } from "office-ui-fabric-react";

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
    fontSize: "medium",
  },
};

NavCommandButton.defaultProps = { navCommandButtonStyles };