import React from 'react'
import { getTheme } from '@fluentui/react';
import { PrimaryButton, ActionButton, IButtonStyles } from 'office-ui-fabric-react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';

export default function DownloadButton(props: { href: string, title: string }) {
    registerIcons({
        icons: {
            'download': (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,800,800'>
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40px">
                        <path d='M336,176h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V216a40,40,0,0,1,40-40h40' />
                        <polyline points='176 272 256 352 336 272' />
                        <line x1='256' y1='48' x2='256' y2='336' />
                    </g>
                </svg>
            ),
        },
    });

    const theme = getTheme();
    const downloadiconClass = mergeStyles({
        height: 45,
        width: 45,
        margin: '13px 0 0 0',
        stroke: 'white'
    });
    const downloadButtonStyles: IButtonStyles = {
        root: {
            boxShadow: Depths.depth8,
            height: '2.5rem',
        }
    }

    return (
        <PrimaryButton
            href={props.href}
            target="_blank"
            title={props.title}
            rel="noreferrer"
            allowDisabledFocus
            styles={downloadButtonStyles}>
            <FontIcon iconName="download" className={downloadiconClass} />
            <strong style={{ fontSize: '1.1rem' }}>{props.title}</strong>
        </PrimaryButton>
    )
}