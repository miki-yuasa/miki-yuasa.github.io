import React from "react"
import { ActionButton, IContextualMenuProps, IButtonStyles } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { getTheme } from '@fluentui/react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

import { getPageData } from '../../data/pageData';

export default function NavCompact() {

    registerIcons({
        icons: {
            'hamburger': (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,512,512'>
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" strokeMiterlimit='10'>
                        <line x1='80' y1='160' x2='432' y2='160' />
                        <line x1='80' y1='256' x2='432' y2='256' />
                        <line x1='80' y1='352' x2='432' y2='352' />
                    </g>
                </svg>
            ),
        },
    });

    const theme = getTheme();

    const menuIconClass = mergeStyles({
        height: 35,
        width: 35,
        padding: '7px 7px 0 -5px',
    });

    const pageData = getPageData();

    const menuProps: IContextualMenuProps = {
        items: [],
        styles: {
            root: {
                marginRight: '-90px',
                paddingRight: '0px'
            }
        }
    };

    const menuButtonStyles: IButtonStyles = {
        root: {
            boxShadow: Depths.depth64,
            padding: '0 auto',
            width: '45px',
            background: theme.palette.neutralLighterAlt,
            stroke: theme.palette.neutralPrimary,
        },
        rootHovered: {
            stroke: theme.palette.themePrimary,
        },
        rootExpanded: {
            stroke: theme.palette.themePrimary,
        },
        rootPressed: {
            stroke: theme.palette.neutralPrimary,
        }
    }

    for (let i in pageData) {
        menuProps.items.push(
            {
                key: pageData[i].name,
                text: pageData[i].name,
                href: "/#" + pageData[i].name.toLowerCase()
            })
    }

    return (
        <ActionButton
            menuProps={menuProps}
            styles={menuButtonStyles}
            title="Menu" >
            <span style={{ textAlign: 'center' }}>
                <FontIcon iconName="hamburger" className={menuIconClass} />
            </span>
        </ActionButton>

    );
}