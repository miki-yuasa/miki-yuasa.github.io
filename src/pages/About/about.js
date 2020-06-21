import React from "react"
import { Link } from "gatsby"
import { getTheme } from '@fluentui/react';

import Image from '../../components/image'

const theme = getTheme();

export default function About() {
    return (
        <div id='about'
            class='sectionParent'
            style={{ background: theme.palette.neutralDark }}>
            <div class='sectionHeader'
                style={{
                    color: theme.palette.neutralLight,
                }}>
                <h2 class='sectionHeader'>About</h2>
            </div>
            <div class='profile'
            >
                <Image />
            </div>
            <div class='sectionBody'
                style={{ color: theme.palette.neutralSecondaryAlt }}>
                <table >
                    <tbody valign='top'>
                        <tr ><td>Name:</td><td>Mikihisa Yuasa</td></tr>
                        <tr ><td>School:</td><td>Senior undergraduate at the Department of Engineering-Mechanics, College of Engineering, University of Wisconsin-Madison </td></tr>
                        <tr ><td>Labs:</td><td>J. Franck Computational Fluid Dynamics (CFD) Lab<br /> B. Ran Connected Automated Vehicles and Highway (CAVH) Lab</td></tr>
                        <tr><td>Keywords:</td><td>Dynamic Control, Computational Fluid Dynamics, Mesh Generation, Flow Control, Connected Automated Vehicles and Highway, Aerial/Ground Unmanned Vehicles, Intelligent Transportation, Computing, Biomimicry, Harbor Seal Whisker, Conformal Mapping</td></tr>
                        <tr><td>Email:</td><td>mikihisa(dot)yuasa(at)wisc(dot)edu</td></tr>
                        <tr><td>CV:</td><td><Link to="../page-2" target="_blank" rel="noreferrer" style={{ color: theme.palette.neutralLight }}><strong>Download from Here!</strong></Link></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}