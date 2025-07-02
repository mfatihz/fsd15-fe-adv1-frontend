import GalleryTitle from "../atoms/gallery-title"

const Gallery = ({title, titlePositionClass, children}) => {
  return (
    <div className="relative w-full flex flex-col">
      <GalleryTitle positionClass={titlePositionClass}>
        {title}
      </GalleryTitle>
      
      {children}
    </div>
  )
}

export default Gallery