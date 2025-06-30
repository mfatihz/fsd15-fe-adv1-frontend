import React from 'react'

const TitledInfo = ({ title, children}) => {
    return (
        <div>
            <div className='w-4/12 inline-block align-text-top text-neutral-400 font-normal tracking-tighter'>{title}</div>
            {title && <div className='inline-block align-text-top me-1.5'>:</div>}
            <div className={`inline-block align-text-top ${title ? "w-7/12" : ""}`}>
                { children }
            </div>
        </div>
    )
}

export default TitledInfo