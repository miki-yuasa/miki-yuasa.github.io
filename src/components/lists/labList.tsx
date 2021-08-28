import React from "react"

import { Lab } from "../../../@types"
import { NewTabLink } from "../links/defaultLink";

function labListElement(lab: Lab) {
    return <>
        {lab.piTitle + " "}
        <NewTabLink className='about' href={lab.href}>{lab.pi}</NewTabLink>
        's {" " + lab.name}, {lab.affiliation}
        <br />
    </>;
}

export function listLabs(labs: Lab[]) {
    const currentLabs = labs.filter(lab => lab.workingStatus == 'current');
    const previousLabs = labs.filter(lab => lab.workingStatus == 'previous');

    return <>
        {currentLabs.map(lab => labListElement(lab))}
        <br /> (Previous) <br />
        {previousLabs.map(lab => labListElement(lab))}
    </>
}