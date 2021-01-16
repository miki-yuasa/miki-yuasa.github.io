import React from "react"
import { Award, Publication } from "../../../@types"

import { conferencePaperData, posterData, awardData } from "../../data/publicationData"

function listPublications(publications: Publication[]) {
    const publicationList = publications.map(publication => {
        const authors = publication.authors.join(" ");
        return (
            <li>
                {`${authors}, "`}<strong>{publication.title}</strong>{`," `}<i>{publication.journal}</i>{`, ${publication.details}, ${publication.year}`}
            </li>
        )
    });

    return (
        <ul className='noBullets'>
            {publicationList}
        </ul>
    );
}

function listAwards(awards: Award[]) {
    const awardList = awards.map(award => {
        return (
            <li>
                {`${award.years}, ${award.name}. ${award.amount}`}
            </li>
        )
    });

    return (
        <ul className='noBullets'>
            {awardList}
        </ul>
    );
}

export function ConferencePaperList() {
    return listPublications(conferencePaperData);
}

export function PosterList() {
    return listPublications(posterData);
}

export function AwardList() {
    return listAwards(awardData);
}