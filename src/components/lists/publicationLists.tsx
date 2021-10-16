import React from "react"
import { Award, Publication } from "../../../@types"

import { journalPaperData, conferencePaperData, posterData, awardData } from "../../data/publicationData"
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
        const listItem = publication.pending
            ? <>{`[Under Review] ${authors} "`}<strong>{publication.title}</strong>{`," `}<i>{publication.journal}</i>{`. (Submitted ${('00' + publication.month).slice(-2)}/${publication.year}).`} {links}</>
            : <>{`${authors} "`}<strong>{publication.title}</strong>{`," `}<i>{publication.journal}</i>{`, ${publication.details}, ${publication.year}. `} {links}</>
            ;
        return (
            <li>
                {listItem}
            </li>
        )
    });

    return (
        <ul className='no-bullets'>
            {publicationList}
        </ul>
    );
}

function listAwards(awards: Award[]) {
    const awardList = awards.map(award => {
        return (
            <li>
                {`${award.years} `} <strong>{award.name}</strong>{`. ${award.amount}`}
            </li>
        )
    });

    return (
        <ul className='no-bullets'>
            {awardList}
        </ul>
    );
}

export function JournalPaperList() {
    return listPublications(journalPaperData);
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