import React from "react"

export default function SectionTemplate(props: { title: string, children: React.ReactNode }) {

    const sectionID: string = props.title.toLowerCase();

    return (
        <div className='idBox' id={sectionID}>
            <div className='section master'>
                <div className='section parent '>
                    <div className='section header'>
                        <h2 className='section header'>{props.title}</h2>
                    </div>
                    <div className='section body'>
                        {props.children}
                    </div>
                </div>
                <div className='section separator' >
                    <hr className='separator' />
                </div>
            </div>
        </div>
    )
}