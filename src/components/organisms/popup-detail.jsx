import { usePopupDetail } from "../../stores/use-popup-detail";
import PosterContentRating from "../atoms/poster-content-rating";
import PosterChip from "../atoms/poster-chip";
import TitledInfo from "../atoms/titled-info";
//import clsx from 'clsx';
import PopupHero from "../molecules/popup-hero";

const PopupDetail = () => {
    const { movieData, close: closeHandler } = usePopupDetail();

    return (
      <div className="
        fixed inset-0 z-50
        flex justify-center
        bg-black/70 bg-opacity-90
        overflow-y-auto
        p-4
      ">
        <div className="relative">
          <div 
          className='relative min-w-sm max-w-[800px]
            rounded-lg sm:rounded-xl md:rounded-2xl
            flex flex-col bg-[#0f0f1a]
            overflow-hidden
            shadow-xl
          '>
            <PopupHero
              image={movieData?.images?.landscape}
              title={movieData.title}
              closeHandler={closeHandler}
              className="inset-6 sm:inset-10 md:inset-20"
            />

            <div className="
              flex flex-col
              gap-4 sm:gap-10
              px-6 sm:px-10 md:px-20
              py-4 sm:py-10
              text-xs sm:text-sm
            ">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-6">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex gap-4 items-center">
                      <PosterChip content={movieData.yearRelease}/>
                      { movieData.type == "series" ?
                        (movieData.episodes && <PosterChip content={movieData.episodes} suffix='episode'/>) :
                        (movieData.duration && <PosterChip content={movieData.duration} suffix="duration" />)
                      }
                      <PosterContentRating type='rect'>{ movieData.contentRating }</PosterContentRating>
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-48 pe-2">
                    {movieData.summary}
                  </div>
                </div>
              </div>
              <div className="flex-4">
                <div className="flex flex-col">
                  <TitledInfo title={'Cast'}>{ movieData.cast }</TitledInfo>
                  <TitledInfo title={'Genre'}>{ movieData.genres.join(', ') }</TitledInfo>
                  <TitledInfo title={'Pembuat Film'}>{ movieData.director }</TitledInfo>
                </div>
              </div>
            </div> 
            <div className="border">Rekomendasi Serupa</div>















            </div>



          </div>
        </div>
      </div>
    );
}

export default PopupDetail;