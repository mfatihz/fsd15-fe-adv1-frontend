import clsx from "clsx";
import NoContent from "../atoms/no-content";
import Gallery from "../molecules/gallery";
import ThumbnailChip from "../molecules/thumbnail-chip";

const ThumbnailGallery = ({ title, episodes, paddingClass }) => {
  return (
    <div className={clsx(paddingClass)}>
      <Gallery title={title}>
        {episodes?.length > 0 ? (
          // NOTE: py-1 hack untuk menghilangkan scrollbar
          <ul className="flex flex-col max-h-[400px] gap-3 sm:gap-5 overflow-y-auto mt-4 py-1">
            {episodes?.map((episode) => (
              <li key={episode.id} className="block flex-shrink-0 me-3">
                <ThumbnailChip episode={episode} />
              </li>
            ))}
          </ul>
        ) : (
          <NoContent>Data not available</NoContent>
        )}
      </Gallery>
    </div>
  );
};

export default ThumbnailGallery;
