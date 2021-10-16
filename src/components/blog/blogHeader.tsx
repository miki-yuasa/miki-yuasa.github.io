import React from "react";
import { NavBlogCompact } from "../navs/navBlogComapct";
import { NavBlogWide } from "../navs/navBlogWide";


export function BlogHeader() {
  return (
    <>
      <header className="blog wide">
        <NavBlogWide />
      </header>
      <header className="blog compact">
        <NavBlogCompact />
      </header>
    </>
  );
}
