import React from "react";
import { BlogSideArchiveList } from "./blogSideArchiveList";
import { BlogSideTagList } from "./blogSideTagList";


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
