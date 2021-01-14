import React from "react";

import { BlogSideTagList } from "./blogSideTagList";
import { BlogSideArchiveList } from "./blogSideArchiveList";

export const BlogSidePanes = () => {
  return (
    <>
      <div className="articleSidePane" id='tags'>
        <BlogSideTagList />
      </div>
      <div className="articleSidePane" id="archives">
        <BlogSideArchiveList />
      </div>
    </>
  );
};
