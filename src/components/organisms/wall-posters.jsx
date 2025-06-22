import { useState } from 'react';
import Poster from "./poster";
import NoContent from '../atoms/no-content';
import clsx from 'clsx'

const WallPosters = ({
  movies, galleryType, xBoundary,
  scrollContainerRef, itemRef,
  idToggleHandler, isInMyListHandler,
  isWrapped=false,
  alt="Isi galeri belum tersedia"
}) => {
  
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const baseStyle = "flex list-none p-0 whitespace-nowrap";
  const galleryClass = galleryType == 'continue' ? '' : 'gap-4'
  const wrapClass = isWrapped ? 'flex-wrap' : ''
  
  const posters = movies?.map((movie, index) => (
    <li
      key={movie.id}
      className="inline-block flex-shrink-0"
      ref={index === 0 ? itemRef : null}
    >
      <Poster
        movie={movie} galleryType={galleryType}
        //isMobile={isMobile}
        xBoundary={xBoundary}
        onClick={idToggleHandler} isInMyListHandler={isInMyListHandler}
      />
    </li>
  ));

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={scrollContainerRef}
      className = "w-full py-12 touch-pan-x overflow-x-scroll scrollbar-hide"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
    >
      { movies?.length > 0 ?
        <ul
          className={clsx(baseStyle, galleryClass, wrapClass)}
        >
          { posters }
        </ul> :
        <NoContent>{ alt }</NoContent>
      }
    </div>
  );
};

export default WallPosters;