import HeroActions from "../molecules/hero-actions"
import HeroTitle from "../atoms/hero-title"
import HeroSummary from "../atoms/hero-summary"
import HeroContainer from "../atoms/hero-container"

function Hero({ movies, paddingClass }) {
    const heroHeightClass = 'h-[225px] sm:h-[300px] md:h-[587px]';
    const movie = movies[0];

    return (
        <HeroContainer imageUrl={movie?.images.hero} heightClass={heroHeightClass} paddingClass={paddingClass}>
            <div className="w-auto self-end flex flex-col gap-2 md:gap-4">
                <HeroTitle>{movie?.title}</HeroTitle>
                <HeroSummary>{movie?.summary}</HeroSummary>
                <HeroActions>{movie?.contentRating}</HeroActions>
            </div>
        </HeroContainer>
    )
}

export default Hero