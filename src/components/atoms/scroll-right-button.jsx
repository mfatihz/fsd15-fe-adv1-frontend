import icon from '../../assets/images/icons/arrow-right.svg'
import clsx from 'clsx'

function ScrollRightButton({className, onClick=null}) {
    const baseStyle = `
        flex items-center justify-center
        bg-black/70
        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
        border border-white/60 rounded-full
        cursor-pointer z-10
        transition-all
        duration-200
        hover:bg-black/90
        hover:scale-110 focus:outline-none
    `

    return (
        <button type="button" className={clsx(baseStyle, className)}>
            <img
                src={icon}
                loading="lazy"
                alt="Scroll right button"
                onClick={onClick}
                className="w-4 h-4 md:w-5 md:h-5 sm:w-3 sm:h-3"
            />
        </button>
    )
}

export default ScrollRightButton