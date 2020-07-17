import React from "react"
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles } from 'office-ui-fabric-react/lib/Pivot';

import { getPageData } from '../../data/pageData'

export default function NavPivot(props: { selectedKey: string }) {
    let pageData = getPageData();
    let pivotItemList = [];

    const pivotStyles: IPivotStyles = {
        linkIsSelected: {
            selectors: {
                ':before': {
                    height: '4px',   // was previously defaulted at 2px
                }
            },
        },
        root: {},
        link: {},
        count: {},
        linkContent: {},
        text: {},
        icon: {}
    };

    for (let i in pageData) {
        let hrefStr: string = "/#" + pageData[i].name.toLowerCase();
        pivotItemList.push(
            <PivotItem
                headerText={pageData[i].name}
                headerButtonProps={{ href: hrefStr }}
                itemKey={String(i)} />
        );
    }

    return (
        <Pivot
            styles={pivotStyles}
            linkSize={PivotLinkSize.large}
            headersOnly
            selectedKey={props.selectedKey}>
            {pivotItemList}
        </Pivot>
    )
}