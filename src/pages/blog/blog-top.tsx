import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "office-ui-fabric-react";

import { BlogHeader } from "../../components/blog/blogHeader";

const BlogTop = () => {
  return (
    <div style={{ background: DefaultPalette.neutralLight }}>
      <BlogHeader />
      <div
        className="articleFrame"
        style={{ background: DefaultPalette.white }}
      >
        <div className="articleBody">
          <h1>About Page</h1>
        </div>
        <div
          className="articleSide"
          style={{ background: DefaultPalette.neutralLighter }}
        >
          this is the side
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
