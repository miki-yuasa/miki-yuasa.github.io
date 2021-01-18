import React from "react";

import SectionTemplate from "../../templates/sectionTemplate";
import RepoCard from "../cards/repoCard";
import { getRepoData } from "../../data/repoData";

export default function Software() {
  const repoData = getRepoData();
  const repoList: React.ReactNode[] = repoData.map((repoDataItem) => {
    return (
      <RepoCard
        name={repoDataItem.name}
        onClickHref={repoDataItem.onClickHref}
        description={repoDataItem.description}
        noAccess={repoDataItem.noAccess}
      />
    );
  });

  return (
    <SectionTemplate title="Software">
      <p>
        These links are for the software repositories of my past research and
        personal projects hosted on GitHub and Bitbucket. The codes for some on-going
        projects have restricted access for internal use.
      </p>
      <div className="docCard">{repoList}</div>
    </SectionTemplate>
  );
}
