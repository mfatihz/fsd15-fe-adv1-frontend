import PosterHoverImage from '../atoms/poster-hover-image'

function PosterMovieHover({
  imgSrc,
  isViewed,
  contentRating,
  duration,
  genres,
}) {
  return (
    <div
      className='relative overflow-hidden rounded-lg bg-[#181A1C] w-[408px] h-[460px]'
    >
        <PosterHoverImage src={imgSrc} />

        <nav>
          Play
          {isViewed}
          More
        </nav>
        <div>
          {contentRating}
          {duration}
        </div>
        <div>
          {genres}
        </div>
    </div>
  )
}

export default PosterMovieHover
