import CoverImage from '../atoms/cover-image'
import PlayButton from '../atoms/play-button'
import CheckButton from '../atoms/check-button'
import ChevronDownButton from '../atoms/chevron-down-button'
import PosterContentRating from '../atoms/poster-content-rating'
import PosterChip from '../atoms/poster-chip'
import PosterText from '../atoms/poster-text'
import clsx from "clsx";

function PosterHoverCard({ movie, galleryType, idToggleHandler, checkId }) {
  const baseStyle = `rounded-lg sm:rounded-xl md:rounded-2xl
    flex flex-col bg-[#0f0f1a] 
    overflow-hidden
    shadow-xl`;

  const widthClass =
    galleryType === "recommendation"
      ? "w-[184px] sm:w-[260px] md:w-[306px]"
      : galleryType === "myList"
        ? "w-[221px] sm:w-[313px] md:w-[367px]"
        : "w-[245px] sm:w-[347px] md:w-[408px]"
        
  const heightClass =
    galleryType === "recommendation"
      ? "h-[207px] sm:h-[293px] md:h-[345px]"
      : galleryType === "myList"
        ? "h-[249px] sm:h-[353px] md:h-[415px]"
        : "h-[276px] sm:h-[391px] md:h-[460px]";

  return (
    <div
      className={clsx(
        baseStyle,
        widthClass,
        heightClass
      )}
    >
      <CoverImage src={movie?.images?.landscape} className="w-full h-[179px] sm:h-[216px] md:h-[254px] object-cover" />
      <div className='p-4 sm:p-8 flex flex-col gap-3 sm:gap-5 text-white'>
        <div className='flex gap-3 sm:gap-4'>
          <PlayButton />
          <CheckButton
            checkId={checkId}
            idToggleHandler={idToggleHandler}
            movieId={movie.id}
            movieTitle={movie.title}
          />
          <ChevronDownButton
            className="ml-auto"
            movieData={movie}
          />
        </div>
        <div className='flex gap-3 sm:gap-4 text-xs sm:text-sm content-center items-center'>
          <PosterContentRating>{movie.contentRating}</PosterContentRating>
          {movie.type == "series" ?
            (movie.episodes && <PosterChip content={movie.episodes} suffix='episodes' />) :
            (movie.duration && <PosterChip content={movie.duration} suffix="duration" />)
          }
        </div>
        <PosterText>{movie.genres.join(" · ")}</PosterText>
      </div>
    </div>
  )
}

export default PosterHoverCard