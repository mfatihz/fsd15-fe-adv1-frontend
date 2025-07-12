import Poster from "./poster";
import NoContent from '../atoms/no-content';
import clsx from 'clsx'
import ThumbnailChip from '../molecules/thumbnail-chip';

const WallThumbnails = ({
  movies,
  alt="Daftar episode belum tersedia"
}) => {

  const baseStyle = "flex flex-col list-none gap-1 p-0 whitespace-nowrap";

  return (
    <div 
      className = "w-full overflow-y-scroll scrollbar-hide"//scrollbar-hide defined in css
    >
      { movies?.length > 0 ?
        <ul
          className={clsx(baseStyle)}
        >
          {
            movies?.map((movie) => (
              <li
                key={movie.id}
                className="block flex-shrink-0"
              >
                <ThumbnailChip
                  number={movies.number}
                  imgSrc={movies.imgSrc}
                  viewPercentage={movies.viewPercentage}
                />
              </li>
            ))
          }
        </ul> :
        <NoContent>{ alt }</NoContent>
      }
    </div>
  );
};

export default WallThumbnails;