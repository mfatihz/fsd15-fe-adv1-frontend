import GalleryTitle from "../atoms/gallery-title"
import PosterSlider from "./poster-slider"

const Gallery = ({title, movies, galleryType, idToggleHandler, isInMyListHandler, isWrapped, alt}) => {
  return (
    <div className="relative w-full">
      <GalleryTitle>{title}</GalleryTitle>
      <PosterSlider movies={movies} galleryType={galleryType} idToggleHandler={idToggleHandler} isInMyListHandler={isInMyListHandler} isWrapped={isWrapped} alt={alt}/>
    </div>
  )
}

export default Gallery