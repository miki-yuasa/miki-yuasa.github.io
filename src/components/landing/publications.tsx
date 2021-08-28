import React from "react";

import SectionTemplate from "../../templates/sectionTemplate";
import { NewTabLink } from "../links/defaultLink";
import { JournalPaperList, ConferencePaperList, PosterList, AwardList } from "../lists/publicationLists";

export default function Publication() {
    return (
        <SectionTemplate title="Publications">
            <strong> Refereed Journal Articles:</strong>
            <JournalPaperList />
            <strong>Conference Papers:</strong>
            <ConferencePaperList />
            <strong>Posters:</strong>
            <PosterList />
            <strong>Awards:</strong>
            <AwardList />

            Further details can be found in <NewTabLink href='/CV_Mikihisa_Yuasa.pdf'>
                <strong>CV</strong>
            </NewTabLink>.

        </SectionTemplate>
    );
}
