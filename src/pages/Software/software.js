import React from "react"
import {
    DocumentCard,
    DocumentCardTitle,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';


const cardStyles = {
    root: {
        display: 'inline-block',
        margin: 10,
        width: 320,
        height: 320,
        boxShadow: Depths.depth8,
        paddingTop: 10,
        paddingBottom: 15

    },
};

export default function Software() {
    return (
        <div id='software'
            class='sectionParent'>
            <div class='sectionHeader'>
                <h2 class='sectionHeader'>Software</h2>
            </div>
            <div class='sectionBody'>
                <p>These links are for the software repositories of my past research and personal projects hosted on Bitbucket. The codes for the on-going project will be released upon the completion. In case a links is not available, that repository is likely to be limited to private access.</p>
                <div style={{ textAlign: 'center' }}>
                    <DocumentCard
                        aria-label={
                            'Document Card for mikyu.bitbucket.io'
                        }
                        styles={cardStyles}
                        onClickHref="https://bitbucket.org/mikyu/mikyu.bitbucket.io/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="mikyu.bitbucket.io" />
                            <DocumentCardTitle
                                title={
                                    'Hosting repository for this static website for my personal portfolio.'
                                }
                                showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bitbucket.org/mikyu/mikyu_portfolio_dev/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="mikyu_portfolio_dev" />
                            <DocumentCardTitle
                                title={
                                    'Development repository for this personal portfolio website.'
                                }
                                showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        //onClickHref="https://bitbucket.org/mikyu/mikyu_portfolio_dev/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="modSealDisplacement" />
                            <DocumentCardTitle
                                title={
                                    'Library for dynamic mesh generation around harbor seal whiskers for OpenFOAM\'s PIMPLE solver (no open access yet).'
                                }
                                showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                </div>
            </div>

        </div>
    )
}