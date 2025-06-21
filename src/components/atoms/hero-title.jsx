function HeroTitle({ children }) {
    return (
        <h1 className="
            w-7/10 p-0
            text-2xl sm:text-3xl md:text-5xl text-white
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
            {children}
        </h1>
    )
}

export default HeroTitle
