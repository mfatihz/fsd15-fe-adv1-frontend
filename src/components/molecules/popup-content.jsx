import PosterContentRating from "../atoms/poster-content-rating";
import PosterChip from "../atoms/poster-chip";
import TitledInfo from "../atoms/titled-info";
import clsx from 'clsx';

const PopupContent = ({ movieData, paddingClass }) => {// TODO: extract gapClass
  const baseStyle = `
    flex flex-col
    gap-4 sm:gap-10
    text-xs sm:text-sm
  `

  return (
    <div className={clsx(baseStyle, paddingClass)}>
      {/* // TODO: extract gapClass */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        <div className="flex-6">
          {/* // TODO: extract gapClass */}
          <div className="flex flex-col gap-4">
            <div>
              {/* // TODO: extract gapClass */}
              <div className="flex gap-4 items-center">
                <PosterChip content={movieData.yearRelease} />
                {movieData.type == "series" ?
                  (movieData.episodes && <PosterChip content={movieData.episodes} suffix='episodes' />) :
                  (movieData.duration && <PosterChip content={movieData.duration} suffix="duration" />)
                }
                <PosterContentRating type='rect'>{movieData.contentRating}</PosterContentRating>
              </div>
            </div>
            <div className="overflow-y-auto max-h-48">
              {movieData.summary}
            </div>
          </div>
        </div>
        <div className="flex-4">
          <div className="flex flex-col gap-1 mt-0 sm:mt-4">
            <TitledInfo title={'Cast'}>{movieData.cast}</TitledInfo>
            <TitledInfo title={'Genre'}>{movieData.genres.join(', ')}</TitledInfo>
            <TitledInfo title={'Pembuat Film'}>{movieData.director}</TitledInfo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupContent;