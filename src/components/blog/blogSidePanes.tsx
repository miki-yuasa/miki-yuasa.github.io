import React from "react";

import { BlogSideTagList } from "./blogSideTagList";
import { BlogSideArchiveList } from "./blogSideArchiveList";

export const BlogSidePanes = () => {
  return (
    <>
      <div className="articleSidePane">
        <BlogSideTagList />
      </div>
      <div className="articleSidePane">
        <BlogSideArchiveList />
      </div>
    </>
  );
};
