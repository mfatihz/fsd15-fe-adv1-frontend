function HeroContentRatingLabel({ children }) {
    return (
        <div
            className={`
                flex items-center justify-center 
                h-8 sm:h-11 w-8 sm:w-11 rounded-full 
                bg-transparent text-xs sm:text-base
                border border-white/60 box-border
                px-1 sm:px-2
            `}
        >
            {children}
        </div>
    )
}

export default HeroContentRatingLabel
