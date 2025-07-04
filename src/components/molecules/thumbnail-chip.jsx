import PosterChip from "../atoms/poster-chip";
import PosterText from "../atoms/poster-text";
import ThumbnailImage from "./thumbnail-image";

const ThumbnailChip = ({ episode }) => {
  return (
    <div className="flex gap-2 sm:gap-4 text-sm">
      <div className="flex gap-1 sm:gap-2 items-center h-fit">
        <div className="flex justify-end min-w-4 flex-shrink-0 overflow-visible">
          <PosterText>{episode.episode}</PosterText>
        </div>
        
        <ThumbnailImage
          percentage={episode.viewPercentage}
          imageUrl={episode.images?.thumbnail}
          alt={"thumbnail-" + episode.title + "-" + episode.episode}
        />
      </div>
      
      <div className="flex flex-col justify-center gap-0 sm:gap-2">
        <div className="flex align-top">
          <PosterText>{episode.title}</PosterText>
          <PosterChip
            content={episode.duration}
            suffix="episode"
            styleClass={"text-[0.65rem] sm:text-sm ml-auto"}
          />
        </div>
        <PosterText
          styleClass={"text-neutral-400 text-[0.65rem] sm:text-sm ml-auto"}
        >
          {episode.summary}
        </PosterText>
      </div>

    </div>
  );
};

export default ThumbnailChip;
