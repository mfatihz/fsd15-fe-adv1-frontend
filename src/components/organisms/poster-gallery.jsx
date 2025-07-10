import Gallery from "../molecules/gallery"
import PosterSlider from "./poster-slider"

const PosterGallery = ({ title, movies, galleryType, idToggleHandler, checkId, isWrapped, alt }) => {
  return (
    <Gallery title={title} titlePositionClass="absolute -top-2 left-0">
      <PosterSlider
        movies={movies}
        galleryType={galleryType}
        idToggleHandler={idToggleHandler}
        checkId={checkId}
        isWrapped={isWrapped}
        alt={alt}
      />
    </Gallery>
  )
}

export default PosterGallery