import React from "react"
import { Lab } from "../../../@types"

function labListElement(lab: Lab) {
    return <>
        {lab.piTitle + " "}
        <a
            className='labList'
            href={lab.href}
            target="_blank"
            rel='noreferrer'
        >
            {lab.pi}
        </a>
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