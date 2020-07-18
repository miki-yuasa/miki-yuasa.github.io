import React from "react"
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';

import StyledBackgroundSection from './homeStyle'

export default function Home() {
    return (
        <div className='idBox' id="home">
            <div className='homeParent'>
                <StyledBackgroundSection />
            </div>
        </div>
    )
}   