import React from "react"

export default function SectionTemplate(props: { title: string, children: any }) {

    let sectionID: string = props.title.toLowerCase();

    return (
        <div className='idBox' id={sectionID}>
            <div className='sectionMaster'>
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