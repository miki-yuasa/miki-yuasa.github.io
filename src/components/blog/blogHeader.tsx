import React from "react";
import { NavBlogCompact } from "../navs/navBlogComapct";
import { NavBlogWide } from "../navs/navBlogWide";


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
