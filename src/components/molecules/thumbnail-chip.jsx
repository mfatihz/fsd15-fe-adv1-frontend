import { useEffect, useState } from "react";
import PosterChip from "../atoms/poster-chip";
import PosterText from "../atoms/poster-text";

const ThumbnailChip = ({ episode }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth((170 * episode.viewPercentage) / 100);
  }, [episode.viewPercentage]);

  return (
    <div className="flex gap-4 text-sm">
      <div className="flex items-center justify-end min-w-4 flex-shrink-0 overflow-visible">
        <PosterText className="whitespace-nowrap">{episode.episode}</PosterText>
      </div>
      <div className="flex items-center">
        <div className="relative flex-shrink-0 relative w-[170px] h-[96px]">
          <img
            src={episode.images?.thumbnail}
            alt={"thumbnail-" + episode.title + "-" + episode.episode}
            className="object-cover "
          />
          <div
            className="absolute bottom-0 z-2 h-[2px] bg-red-700"
            style={{ width: `${barWidth}px` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex text-neutral-400 align-top">
          <PosterText>{episode.title}</PosterText>
          <PosterChip
            content={episode.duration}
            suffix="episode"
            styleClass={"ml-auto"}
          />
        </div>
        <PosterText>{episode.summary}</PosterText>
      </div>
    </div>
  );
};

export default ThumbnailChip;
