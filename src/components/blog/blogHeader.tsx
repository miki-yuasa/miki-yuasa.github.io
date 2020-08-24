import React from "react";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";

import { NavBlogWide } from "../navs/navBlogWide";
import { NavBlogCompact } from "../navs/navBlogComapct";

export function BlogHeader() {
  return (
    <>
      <header className="wideBlog" style={{ boxShadow: Depths.depth16 }}>
        <NavBlogWide />
      </header>
      <header className="compactBlog" style={{ boxShadow: Depths.depth16 }}>
        <NavBlogCompact />
      </header>
    </>
  );
}
