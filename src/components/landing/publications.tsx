import React from "react";

import SectionTemplate from "../../templates/sectionTemplate";
import { NewTabLink } from "../links/defaultLink";
import { ConferencePaperList, PosterList, AwardList } from "../lists/publicationLists";

export default function Publication() {
    return (
        <SectionTemplate title="Publications">
            <b>Conference Papers:</b>
            <ConferencePaperList />
            <p><b>Posters:</b></p>
            <PosterList />
            <p><b>Awards:</b></p>
            <AwardList />

        Further details can be found in <NewTabLink href='/CV_Mikihisa_Yuasa.pdf'>
                <strong>CV</strong>
            </NewTabLink>.

        </SectionTemplate>
    );
}
