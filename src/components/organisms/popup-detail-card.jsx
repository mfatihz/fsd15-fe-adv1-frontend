import { useRef, useEffect } from "react";
import { usePopupDetailStore } from "../../stores/use-popup-detail";
import PopupHero from "../molecules/popup-hero";
import PopupContent from "../molecules/popup-content";
import PosterGalleries from "./poster-galleries";
import { recommendationGalleriesData, seriesEpisodeGalleriesData } from "../../utils/data/popup-page-data";
import ThumbnailGallery from "./thumbnail-gallery";

const PopupDetailCard = ({
  heroPaddingClass,
  paddingClass,
  idToggleHandler,
  isInMyListHandler,
}) => {
  const popupRef = useRef(null);
  const { movieData, close: closeHandler } = usePopupDetailStore();

  const episodeGalleriesData = seriesEpisodeGalleriesData(movieData.id);

  useEffect(() => {
    const handleClickOutsideDetail = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDetail);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDetail);
  }, [closeHandler]);

  return (
    // translucent dark-bg
    <div
      className="
      fixed inset-0 z-50
      flex justify-center
      bg-black/85
      overflow-y-auto
      p-10
    "
    >
      {/* scrollable */}
      <div className="relative m-auto">
        {/* card */}
        <div
          ref={popupRef}
          className="
            relative min-w-sm max-w-3xl
            flex flex-col
            rounded-lg sm:rounded-xl md:rounded-2xl
            overflow-hidden
            bg-[#181A1C] shadow-xl pb-10
        "
        >
          <PopupHero
            image={movieData?.images?.landscape}
            title={movieData.title}
            closeHandler={closeHandler}
            paddingClass={heroPaddingClass}
            styleClass='mb-4'
          />

          <PopupContent movieData={movieData} paddingClass={paddingClass} />

          { movieData.type === "series"
            ? <ThumbnailGallery 
                title={episodeGalleriesData.title}
                episodes={episodeGalleriesData.movies}
                paddingClass={paddingClass}
              />
            : <PosterGalleries
                galleries={recommendationGalleriesData}
                paddingClass={paddingClass}
                idToggleHandler={idToggleHandler}
                isInMyListHandler={isInMyListHandler}
              />
          }
        </div>
      </div>
    </div>
  );
};

export default PopupDetailCard;
