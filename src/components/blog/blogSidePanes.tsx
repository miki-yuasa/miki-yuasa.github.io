import React from "react";
import { BlogSideArchiveList } from "./blogSideArchiveList";
import { BlogSideTagList } from "./blogSideTagList";


export const BlogSidePanes = () => {
  return (
    <>
      <div className="article pane side" id='tags'>
        <BlogSideTagList />
      </div>
      <div className="article pane side" id="archives">
        <BlogSideArchiveList />
      </div>
    </>
  );
};
