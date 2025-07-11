import { useRef, useEffect, useState } from "react";
import { usePopupDetailStore } from "../../stores/use-popup-detail";
import PopupHero from "../molecules/popup-hero";
import PopupContent from "../molecules/popup-content";
import PosterGalleries from "./poster-galleries";
import ThumbnailGallery from "./thumbnail-gallery";
import { getEpisodes } from "../../services/api/episodes-service";
import { getGalleries } from "../../services/api/gallery-service";

const PopupDetailCard = ({
  heroPaddingClass,
  paddingClass,
  idToggleHandler,
  checkId,
}) => {
  const popupRef = useRef(null);
  const { movieData, close: closeHandler } = usePopupDetailStore();
  const [recommendationGalleries, setRecommendationGalleries] = useState();
  const [episodesGallery, setEpisodesGallery] = useState();

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await getGalleries('recommendation');
        setRecommendationGalleries(response.data);
      } catch (e) {
        console.error("Error fetching galleries: ", e);
      }
    };

    const fetchSeries = async () => {
      try {
        const response = await getEpisodes(movieData.id);
        setEpisodesGallery(response.data);
      } catch (e) {
        console.error("Error fetching episodes: ", e);
      }
    }

    const handleClickOutsideDetail = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeHandler();
      }
    };

    movieData.type === "series" ? fetchSeries() : fetchRecommendation();

    document.addEventListener("mousedown", handleClickOutsideDetail);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDetail);
  }, [closeHandler, movieData.type, movieData.id]);

  return (
    // translucent dark-bg
    <div
      className="
      fixed inset-0 z-50
      flex justify-center
      bg-black/85
      overflow-y-auto
      p-4 sm:p-6 md:p-10
    "
    >
      {/* scrollable */}
      <div className="relative m-auto">
        {/* card */}
        <div
          ref={popupRef}
          className="
            relative max-w-3xl
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
            styleClass="mb-3 sm:mb-1"
          />

          <PopupContent movieData={movieData} paddingClass={paddingClass} />

          {movieData.type === "series" ? (
            <ThumbnailGallery
              title={episodesGallery?.title}
              episodes={episodesGallery?.movies}
              paddingClass={paddingClass}
            />
          ) : (
            <PosterGalleries
              galleries={recommendationGalleries}
              paddingClass={paddingClass}
              idToggleHandler={idToggleHandler}
              checkId={checkId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupDetailCard;
