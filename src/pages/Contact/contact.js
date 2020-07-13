import React from "react"
import { getTheme } from '@fluentui/react';

import CV from '../CV_Mikihisa_Yuasa_2020.pdf'

const theme = getTheme();

export default function Contact() {
    return (
        <div id='contact' class='sectionMaster'>
            <div class='sectionParent'>
                <div class='sectionHeader'>
                    <h2 class='sectionHeader'>Contact</h2>
                </div>
                <div class='sectionBody'>
                    <p>Email:	mikihisa(dot)yuasa(at)wisc(dot)edu</p>
                    <p>CV can be downloaded from <a href={CV} target="_blank" rel="noreferrer" style={{ color: theme.palette.neutralPrimary }}><strong>here!</strong></a></p>
                </div>
            </div>
            <div class='sectionSeparator' >
                <hr class='separator' />
            </div>
        </div>
    )
}