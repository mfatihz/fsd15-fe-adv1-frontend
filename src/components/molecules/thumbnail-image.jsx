import { useEffect, useState } from "react";

const ThumbnailImage = ({ percentage, imageUrl, alt }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth((170 * percentage) / 100);
  }, [percentage]);

  return (
    <div className="flex">
      <div className="relative flex-shrink-0 relative w-[58px] h-[33px] sm:w-[170px] sm:h-[96px] overflow-hidden">
        <img
          src={imageUrl}
          alt={alt}
          className="object-cover"
        />
        <div
          className="absolute bottom-0 z-2 h-[2px] bg-red-700"
          style={{ width: `${barWidth}px` }}
        ></div>
      </div>
    </div>
  );
};

export default ThumbnailImage;
