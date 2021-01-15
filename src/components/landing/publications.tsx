import React from "react";
import { DefaultPalette } from "@fluentui/react";

import SectionTemplate from "../../templates/sectionTemplate";

export default function Publication() {
    return (
        <SectionTemplate title="Publications">
            <p><b>Conference Papers:</b></p>
            <ol>
                <li>
                    <b>Yuasa, M.</b>, Lyons, K., Franck, J. A. (2020). Simulations of bio-inspired undulated cylinders through dynamic morphing of surface topography [Conference presentation]. 73rd Annual Meeting of American Physical Society Division of Fluid Dynamics, Chicago, IL, United States. http://meetings.aps.org
                </li>
            </ol>
            <p><b>Posters:</b></p>
            <ol>
                <li>
                    <b>Yuasa, M.</b>, Lyons, K., Franck, J. A. (2020). Flow simulations of bio-inspired undulated cylinders through dynamic morphing of surface topography. Poster presented at Computing in Engineering Forum 2020 of Grainger Institute for Engineering, Madison, WI, United States.
                </li>
                <li>
                    <b>Yuasa, M.</b> (2018). Save the World by Discovering New Asteroid. Poster presented at the 20th Annual Undergraduate Symposium at the University of Wisconsin-Madison. Madison, WI.
                </li>
            </ol>

        Other awards and fellowship information can be found in <a
                href='/CV_Mikihisa_Yuasa.pdf'
                target="_blank"
                rel="noreferrer"
                style={{ color: DefaultPalette.neutralPrimary }}
            >
                <strong>CV</strong>
            </a>.

        </SectionTemplate>
    );
}
