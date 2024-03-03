import React, { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";



interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

