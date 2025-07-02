import clsx from 'clsx'

function HeroContainer({ imageUrl, children, heightClass='', paddingClass='', styleClass='' }) {
    const baseStyle=`
        flex
        w-full box-border
        overflow-hidden bg-cover bg-center bg-no-repeat
    `
    
    return (
        <div
            className={clsx(baseStyle, heightClass, paddingClass, styleClass)}
            
            style={{
                 backgroundImage: `linear-gradient(0deg, rgba(24, 26, 28, 1), rgba(0, 0, 0, 0)), url(${imageUrl})`
            }}
        >
            { children }
        </div>
    )
}

export default HeroContainer
