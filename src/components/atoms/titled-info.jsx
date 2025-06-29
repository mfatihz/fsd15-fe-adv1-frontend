import React from 'react'

const TitledInfo = ({ title, children}) => {
    return (
        <div>
            <div className='w-1/3 inline-block align-text-top'>{title}</div>
            {title && <div className='inline-block align-text-top mx-1'>:</div>}
            <div className={`inline-block align-text-top ${title ? "w-3/5" : ""}`}>
                { children }
            </div>
        </div>
    )
}

export default TitledInfo