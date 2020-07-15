import React from "react"
import { getTheme } from '@fluentui/react';

import CV from '../CV_Mikihisa_Yuasa_2020.pdf'

const theme = getTheme();

export default function Contact() {
    return (
        <div id='contact' className='sectionMaster'>
            <div className='sectionParent'>
                <div className='sectionHeader'>
                    <h2 className='sectionHeader'>Contact</h2>
                </div>
                <div className='sectionBody'>
                    <p>Email:	mikihisa(dot)yuasa(at)wisc(dot)edu</p>
                    <p>CV can be downloaded from <a href={CV} target="_blank" rel="noreferrer" style={{ color: theme.palette.neutralPrimary }}><strong>here!</strong></a></p>
                </div>
            </div>
            <div className='sectionSeparator' >
                <hr className='separator' />
            </div>
        </div>
    )
}