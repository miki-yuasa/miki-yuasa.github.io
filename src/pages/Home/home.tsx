import React from "react"
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';

import StyledBackgroundSection from './homeStyle'

export default function Home() {
    return (
        <div className='homeParent'
            id="home">
            <StyledBackgroundSection />
        </div>
    )
}   