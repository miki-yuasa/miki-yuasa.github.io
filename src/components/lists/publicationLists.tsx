import React from "react"
import { Award, Publication } from "../../../@types"

import { conferencePaperData, posterData, awardData } from "../../data/publicationData"
import { NewTabLink } from "../links/defaultLink";

function listPublications(publications: Publication[]) {
    const publicationList = publications.map(publication => {
        const authors = publication.authors.join(", ");
        const links = publication.links
            ? <>[{publication.links.map((link, index) => {
                const comma = index + 1 === publication.links?.length ? "" : ", ";
                return <><NewTabLink href={link.href}>{link.text}</NewTabLink>{comma}</>
            })}]</>
            : <></>
            ;
        return (
            <li>
                {`${authors}"`}<strong>{publication.title}</strong>{`," `}<i>{publication.journal}</i>{`, ${publication.details}, ${publication.year} `} {links}
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