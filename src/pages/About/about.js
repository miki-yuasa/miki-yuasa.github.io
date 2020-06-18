import React from "react"
import { Link } from "gatsby"
import { getTheme } from '@fluentui/react';
const theme = getTheme();


export default function About() {
    return (
        <div id='about'
            class='sectionParent'
            style={{ background: theme.palette.neutralDark }}>
            <div class='sectionHeading'
                style={{ color: theme.palette.neutralLight }}>
                <h2 >About Me</h2>
            </div>
            <div class='sectionBody'
                style={{ color: theme.palette.neutralSecondaryAlt }}>
                <table >
                    <tr valign='top'><td>Name:</td><td>Mikihisa Yuasa</td></tr>
                    <tr valign='top'><td>College:</td><td>Department of Engineering-Mechanics, College of Engineering, University of Wisconsin-Madison </td></tr>
                    <tr valign='top'><td>Labs:</td><td>J. Franck Computational Fluid Dynamics Lab<br /> B. Ran Connected Automated Vehicles and Highway Lab</td></tr>
                </table>
                < Link to="/page-2/" > Go to page 2 </Link> <br />
                <Link to="/using-typescript/" > Go to "Using TypeScript" </Link>
            </div>

        </div>
    )

}