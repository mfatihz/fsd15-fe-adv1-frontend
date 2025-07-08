import HeroActions from "../molecules/hero-actions"
import HeroTitle from "../atoms/hero-title"
import HeroSummary from "../atoms/hero-summary"
import HeroContainer from "../atoms/hero-container"

function Hero({ movie, paddingClass }) {
    const heroHeightClass = 'h-[225px] sm:h-[300px] md:h-[587px]';
    
    return (
        <HeroContainer imageUrl={movie?.images?.hero} heightClass={heroHeightClass} paddingClass={paddingClass}>
            <div className="w-full self-end flex flex-col gap-4 md:gap-10">
                <div className="flex flex-col gap-2 md:gap-5">
                    <HeroTitle>{movie?.title}</HeroTitle>
                    <HeroSummary>{movie?.summary}</HeroSummary>
                </div>
                <HeroActions>{movie?.contentRating}</HeroActions>
            </div>
        </HeroContainer>
    )
}

export default Hero