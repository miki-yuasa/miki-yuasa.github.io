import React from "react";
import { Link } from "gatsby";

import SectionTemplate from "../templates/sectionTemplate";

export default function Blog() {
  return (
    <SectionTemplate title="Blog">
      <p>
        These links are for the software repositories of my past research and
        personal projects hosted on Bitbucket. The codes for some on-going
        projects have restricted access for internal use.
      </p>
      <Link to="/blog/blog-top">about</Link>
    </SectionTemplate>
  );
}
