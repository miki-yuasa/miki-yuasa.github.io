import React from "react"

import RepoCard from '../../components/cards/repoCard';
import { getRepoData } from '../../data/repoData'

export default function Software() {

    let repoData = getRepoData();
    let repoList = []

    for (var i in repoData) {
        repoList.push(
            <RepoCard
                name={repoData[i].name}
                onClickHref={repoData[i].onClickHref}
                description={repoData[i].description}
                noAccess={repoData[i].noAccess} />);
    }

    return (
        <div className='idBox' id='software' >
            <div className='sectionMaster'>
                <div className='sectionParent'>
                    <div className='sectionHeader'>
                        <h2 className='sectionHeader'>Software</h2>
                    </div>
                    <div className='sectionBody'>
                        <p>These links are for the software repositories of my past research and personal projects hosted on Bitbucket. The codes for some on-going projects have restricted access for internal use.</p>
                    </div>
                    <div className='docCard'>
                        {repoList}
                    </div>
                </div>
                <div className='sectionSeparator' >
                    <hr className='separator' />
                </div>
            </div>
        </div>
    )
}