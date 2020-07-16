import React from "react"
import {
    DocumentCard,
    DocumentCardTitle,
    DocumentCardType,
    IDocumentCardStyles
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export default function RepoCard(props: { name: string, description: string, onClickHref?: string, noAccess: boolean }) {

    const cardStyles: IDocumentCardStyles = {
        root: {
            display: 'inline-block',
            margin: 10,
            width: 320,
            boxShadow: Depths.depth8,
            paddingTop: 18,
            paddingBottom: 10
        },
    };

    let accessText: string | null = null;
    let href: string | null = null;

    props.noAccess ? accessText = 'No open access yet' : accessText = ' '

    if (props.noAccess) {
        return (
            <DocumentCard
                styles={cardStyles}
                type={DocumentCardType.normal}>
                <div >
                    <DocumentCardTitle
                        title={props.name} />
                    <DocumentCardTitle
                        title={props.description}
                        showAsSecondaryTitle />
                    <DocumentCardTitle title={accessText} showAsSecondaryTitle />
                </div>
            </DocumentCard>
        )
    }

    return (
        <DocumentCard
            styles={cardStyles}
            onClickHref={props.onClickHref}
            onClickTarget="_blank"
            type={DocumentCardType.normal}>
            <div >
                <DocumentCardTitle
                    title={props.name} />
                <DocumentCardTitle
                    title={props.description}
                    showAsSecondaryTitle />
                <DocumentCardTitle title={accessText} showAsSecondaryTitle />
            </div>
        </DocumentCard>
    )
}