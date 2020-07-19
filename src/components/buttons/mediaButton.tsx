import React from 'react'
import { getTheme } from '@fluentui/react';
import { ActionButton, IButtonStyles } from 'office-ui-fabric-react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';

export default function MediaButton(props: { name: string, href: string, title: string }) {

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
            'mailoutline': (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,700,700'>
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px">
                        < rect x='48' y='96' width='416' height='320' rx='40' ry='40' />
                        <polyline points='112 160 256 272 400 160' />
                    </g>
                </svg >
            ),
            'bitbucket': (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,700,700'>
                    <g>
                        <path d='M483.13,32.23a19.81,19.81,0,0,0-2.54-.23h-449C23,31.88,16.12,38.88,16,47.75a11.52,11.52,0,0,0,.23,2.8L81.53,461.8a22.54,22.54,0,0,0,7,12.95h0a20,20,0,0,0,13.5,5.25H415.18a15.46,15.46,0,0,0,15.34-13.42L469.4,218.67H325.19l-18.46,112H205.21l-25.73-148H475.06L495.82,50.67C497.09,41.92,491.44,33.63,483.13,32.23Z' />
                    </g>
                </svg>
            ),
            'linkedin': (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,700,700'>
                    <g >
                        <path d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z' />
                    </g>
                </svg>
            )
        },
    });

    const theme = getTheme();
    const iconClass = mergeStyles({
        height: 45,
        width: 45,
        margin: '11px 0 0 12px',
        stroke: 'white',
        fill: 'white',
    });
    const mediaButtonStyles: IButtonStyles = {
        rootHovered: {
            background: theme.palette.themePrimary,
            boxShadow: Depths.depth16
        },
    }

    return (
        <ActionButton href={props.href}
            title={props.title}
            target="_blank"
            rel="noreferrer"
            allowDisabledFocus
            styles={mediaButtonStyles}>
            <FontIcon iconName={props.name} className={iconClass} />
        </ActionButton>
    )

}