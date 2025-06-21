import clsx from 'clsx'

function HeroContainer({ imageUrl, children, padding='' }) {
    const baseStyle=`
        flex
        w-screen box-border
        h-[225px] sm:h-[300px] md:h-[587px]
        overflow-hidden bg-cover bg-center bg-no-repeat
    `
    
    return (
        <div
            className={clsx(baseStyle, padding)}
            
            style={{
                 backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${imageUrl})`
            }}
        >
            { children }
        </div>
    )
}

export default HeroContainer
