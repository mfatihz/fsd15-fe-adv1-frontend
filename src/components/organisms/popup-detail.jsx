import { usePopupDetail } from "../../stores/use-popup-detail";
import CoverImage from "../atoms/cover-image";
import PosterContentRating from "../atoms/poster-content-rating";
import PosterChip from "../atoms/poster-chip";
import PosterText from "../atoms/poster-text";
import PosterTitle from "../atoms/poster-title";
import HeroMuteButton from "../atoms/hero-mute-button";
import HeroStartButton from "../atoms/hero-start-button";
import AddButton from "../atoms/add-button";
import CloseButton from "../atoms/close-button";

const PopupDetail = () => {
    const { movieData, close } = usePopupDetail();

    return (
      <div className="
        fixed inset-0 z-50
        flex justify-center
        bg-black/70 bg-opacity-90
        overflow-y-auto
      ">
        <div className="relative">
          <div 
          className='relative w-[933px]
            m-20
            rounded-lg sm:rounded-xl md:rounded-2xl
            flex flex-col bg-[#0f0f1a]
            overflow-hidden
            shadow-xl
          '>
            <div className="relative">{/* pict.start */}
              <CloseButton onClick={close}/>
              <CoverImage
                src={movieData?.images?.landscape}
                className="w-full h-[554px] object-cover"
              />
              <div className="
                absolute inset-20
                flex flex-col gap-4 justify-end
              ">  
                  <PosterTitle className="text-xl">{ movieData.title}</PosterTitle>
                  <div className="flex gap-4">
                    <HeroStartButton />
                    <AddButton />
                    <HeroMuteButton position='right'/>
                  </div>
                
              </div>
            </div>{/* pict.end */}
            

            <div className="flex flex-col gap-10 px-20 py-10 ">


<div className="flex gap-4 border">
              <div className="flex-6">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex gap-4 items-center text-sm">
                      <PosterChip content={movieData.yearRelease}/>
                      { movieData.type == "series" ?
                        (movieData.episodes && <PosterChip content={movieData.episodes} suffix='episode'/>) :
                        (movieData.duration && <PosterChip content={movieData.duration} suffix="duration" />)
                      }
                      <PosterContentRating>{ movieData.contentRating }</PosterContentRating>
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-48 pe-2">
                    {movieData.summary}
                  </div>
                </div>
              </div>
              <div className="flex-4">
                <div className="flex flex-col">
                  <div className="flex">A</div>
                  <div className="flex">B</div>
                  <div className="flex">C</div>
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