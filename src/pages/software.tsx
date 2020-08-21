import React from "react";

import SectionTemplate from "../templates/sectionTemplate";
import RepoCard from "../components/cards/repoCard";
import { getRepoData } from "../data/repoData";

export default function Software() {
  let repoData = getRepoData();
  let repoList = [];

  for (var i in repoData) {
    repoList.push(
      <RepoCard
        name={repoData[i].name}
        onClickHref={repoData[i].onClickHref}
        description={repoData[i].description}
        noAccess={repoData[i].noAccess}
      />
    );
  }

  return (
    <SectionTemplate title="Software">
      <p>
        These links are for the software repositories of my past research and
        personal projects hosted on Bitbucket. The codes for some on-going
        projects have restricted access for internal use.
      </p>
      <div className="docCard">{repoList}</div>
    </SectionTemplate>
  );
}
