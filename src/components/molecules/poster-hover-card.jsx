import CoverImage from '../atoms/cover-image'
import PlayButton from '../atoms/play-button'
import CheckButton from '../atoms/check-button'
import ChevronDownButton from '../atoms/chevron-down-button'
import PosterContentRating from '../atoms/poster-content-rating'
import PosterChip from '../atoms/poster-chip'
import PosterText from '../atoms/poster-text'
import { Toaster, toast } from 'sonner'

function PosterHover({ movie, onClick, isInMyListHandler }) {
  return (
    <div className='  
      w-[245px] sm:w-[347px] md:w-[408px]
      h-[276px] sm:h-[391px] md:h-[460px]
      rounded-lg sm:rounded-xl md:rounded-2xl
      flex flex-col bg-[#0f0f1a] 
      overflow-hidden
      shadow-xl
    '>
      <CoverImage src={movie?.images?.landscape} className="w-full h-[254px] object-cover" />
      <div className='p-4 sm:p-8 flex flex-col gap-3 sm:gap-5 text-white'>
        <div className='flex gap-3 sm:gap-4'>
          <PlayButton />
          <CheckButton
            isChecked={isInMyListHandler(movie.id)}
            onClick={() => {
              onClick(movie.id);
              // NOTE: isInMyListHandler(movie.id) di sini membaca state lama
              toast(`${movie.title} ${isInMyListHandler(movie.id) ? 'dihapus dari' : 'ditambahkan ke'} Daftar Saya`);
            }}
            movieId={movie.id}
          />
          <ChevronDownButton
            className="ml-auto"
            movieData={movie}
          />
        </div>
        <div className='flex gap-3 sm:gap-4 text-xs sm:text-sm content-center items-center'>
          <PosterContentRating>{ movie.contentRating }</PosterContentRating>
          { movie.type == "series" ?
            (movie.episodes && <PosterChip content={movie.episodes} suffix='episode'/>) :
            (movie.duration && <PosterChip content={movie.duration} suffix="duration" />)
          }
        </div>
        <PosterText className='text-xs sm:text-sm'>{ movie.genres.join(" · ") }</PosterText>
      </div>
    </div>
  )
}

export default PosterHover