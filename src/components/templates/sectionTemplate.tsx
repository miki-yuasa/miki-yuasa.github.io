import React from "react"

export default function SectionTemplate(props: { title: string, children: React.ReactNode }) {

    let sectionID: string = props.title.toLowerCase();

    let masterName: string;

    if (sectionID == 'research') {
        masterName = 'sectionMasterResearch'
    }
    else {
        masterName = 'sectionMaster'
    }

    return (
        <div className='idBox' id={sectionID}>
            <div className={masterName}>
                <div className='sectionParent'>
                    <div className='sectionHeader'>
                        <h2 className='sectionHeader'>{props.title}</h2>
                    </div>
                    <div className='sectionBody'>
                        {props.children}
                    </div>
                </div>
                <div className='sectionSeparator' >
                    <hr className='separator' />
                </div>
            </div>
        </div>
    )
}