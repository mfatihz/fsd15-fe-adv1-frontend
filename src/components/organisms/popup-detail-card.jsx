import { useRef, useEffect } from "react";
import { usePopupDetail } from "../../stores/use-popup-detail";
import PopupHero from "../molecules/popup-hero";
import PopupContent from "../molecules/popup-content";
import Galleries from "./galleries";
import { recommendationGalleries } from "../../utils/data/recommendation-data";

const PopupDetailCard = ({
  heroInsetClass,
  paddingClass,
  idToggleHandler,
  isInMyListHandler,
}) => {
  const dropdownRef = useRef(null);
  const { movieData, close: closeHandler } = usePopupDetail();
  const galleries = recommendationGalleries;

  useEffect(() => {
    const handleClickOutsideDetail = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDetail);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDetail);
  }, [closeHandler]);

  return (
    // background translucent
    <div
      className="
      fixed inset-0 z-50
      flex justify-center
      bg-black/70 bg-opacity-90
      overflow-y-auto
      p-10
    "
    >
      {/* scrollable */}
      <div className="relative">
        {/* card */}
        <div
          ref={dropdownRef}
          className="
            relative min-w-sm max-w-3xl
            flex flex-col
            rounded-lg sm:rounded-xl md:rounded-2xl
            overflow-hidden
            bg-[#0f0f1a] shadow-xl
        ">
          <PopupHero
            image={movieData?.images?.landscape}
            title={movieData.title}
            closeHandler={closeHandler}
            insetClass={heroInsetClass}
          />

          <PopupContent movieData={movieData} paddingClass={paddingClass} />

          <Galleries
            galleries={galleries}
            paddingClass={paddingClass}
            idToggleHandler={idToggleHandler}
            isInMyListHandler={isInMyListHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PopupDetailCard;
