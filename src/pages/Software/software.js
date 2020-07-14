import React from "react"
import {
    DocumentCard,
    DocumentCardTitle,
    DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

const cardStyles = {
    root: {
        display: 'inline-block',
        margin: 10,
        width: 320,
        boxShadow: Depths.depth8,
        paddingTop: 18,
        paddingBottom: 10
    },
};

export default function Software() {
    return (
        <div id='software' class='sectionMaster'>
            <div class='sectionParent'>
                <div class='sectionHeader'>
                    <h2 class='sectionHeader'>Software</h2>
                </div>
                <div class='sectionBody'>
                    <p>These links are for the software repositories of my past research and personal projects hosted on Bitbucket. The codes for some on-going projects have restricted access for internal use.</p>
                </div>
                <div class='docCard'>
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bitbucket.org/mikyu/mikyu.bitbucket.io/"
                        onClickTarget="_blank"
                        type={DocumentCardType.normal}>
                        <div >
                            <DocumentCardTitle
                                title="mikyu.bitbucket.io" />
                            <DocumentCardTitle
                                title={
                                    'Hosting repository for this static website for my personal portfolio.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={' '} showAsSecondaryTitle />
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
                            <DocumentCardTitle title={' '} showAsSecondaryTitle />
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
                                    'Dynamic mesh-generation around harbor seal whiskers for OpenFOAM\'s PIMPLE solver.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={'No open access yet'} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bitbucket.org/mikyu/modseal_sample_case/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="modSeal_sample_case" />
                            <DocumentCardTitle
                                title={
                                    'Sample case for dynamic mesh-generation by modSealDisplacement library.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={' '} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bitbucket.org/mikyu/whisk_geo"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="whisker_geo" />
                            <DocumentCardTitle
                                title={
                                    'MATLAB prototype of modSealDisplacement.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={' '} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        //onClickHref="https://bitbucket.org/mikyu/mikyu_portfolio_dev/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="sc_airfoil" />
                            <DocumentCardTitle
                                title={
                                    'Optimization project for Schwartz-Christoffel mapping and mesh-generation for airfoil.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={'No open access yet'} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bitbucket.org/mikyu/sc_py/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="sc_py" />
                            <DocumentCardTitle
                                title={
                                    'Porting Schwartz-Christoffle toolbox for airfoils witten in MATLAB to Python.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={' '} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        //onClickHref="https://bitbucket.org/mikyu/mikyu_portfolio_dev/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="platooning_beltline_sim" />
                            <DocumentCardTitle
                                title={
                                    'Script used for platooning simulation for Belitline highway on Vissim.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={'No open access yet'} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                    <DocumentCard
                        styles={cardStyles}
                        //onClickHref="https://bitbucket.org/mikyu/mikyu_portfolio_dev/"
                        onClickTarget="_blank">
                        <div >
                            <DocumentCardTitle
                                title="beltline_simulation" />
                            <DocumentCardTitle
                                title={
                                    'Vissim project used for Beltline simulation under snow.'
                                }
                                showAsSecondaryTitle />
                            <DocumentCardTitle title={'No open access yet'} showAsSecondaryTitle />
                        </div>
                    </DocumentCard>
                </div>
            </div>
            <div class='sectionSeparator' >
                <hr class='separator' />
            </div>
        </div>
    )
}