import React from "react";

import { NavBlogWide } from "../navs/navBlogWide";
import { NavBlogCompact } from "../navs/navBlogComapct";

export function BlogHeader() {
  return (
    <>
      <header className="wideBlog">
        <NavBlogWide />
      </header>
      <header className="compactBlog">
        <NavBlogCompact />
      </header>
    </>
  );
}
