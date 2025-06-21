function HeroSummary({ children }) {
    return (
        <p className="
            w-8/10 sm:w-7/10 md:w-6/10
            text-white
            text-xs/4 sm:text-sm/5 md:text-base/6
            font-light sm:font-normal
            line-clamp-3 sm:line-clamp-5 md:line-clamp-8
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
            { children }
        </p>
    )
}

export default HeroSummary
