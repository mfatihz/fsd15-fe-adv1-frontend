import PosterDefaultCard from '../molecules/poster-default-card'
import PosterHoverCard from '../molecules/poster-hover-card'
import { useState, useRef } from 'react'

function PosterCard({
  movie,
  galleryType,
  //isMobile=false,
  xBoundary,
  onClick,
  isInMyListHandler,
}) {
  //const { isOpen } = usePopupDetailStore
  const [isHovered, setIsHovered] = useState(false)
  const posterRef = useRef(null)

  // Fungsi untuk menentukan posisi hover
  const getHoverPosition = () => {
    if (!posterRef.current) return {}
    
    const rect = posterRef.current.getBoundingClientRect()
    // const viewportWidth = window.innerWidth
    const rectWidth = rect.width
    const hoverWidth = 408 //TODO: sementara pakai maks w
    const difWidth = (hoverWidth - rectWidth) / 2
    
    // Pemeriksaan sisi kiri
    if (rect.left - difWidth < xBoundary.left) {
      // tidak perlu (xBoundary.left - rect.left)
      // biar tidak terlalu nutup card setelahnya
      const offset = 0
      return { left: `${offset}px`, transform: 'translateX(0) translateY(-50%)' }
    }
    // Pemeriksaan sisi kanan
    else if (rect.right + difWidth > xBoundary.right) {
      const offset = (rect.right - xBoundary.right)
       return { right: `${offset}px`, transform: 'translateX(0) translateY(-50%)' }
    }
    
    // default: di tengah
    return { left: '50%', transform: 'translateX(-50%) translateY(-50%)' }
  }
  
  return (
    <div
      className="relative overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={posterRef}
    >
      <PosterDefaultCard
        movie={ movie }
        galleryType={ galleryType }
      />

      { //(!isMobile && isHovered && galleryType !== 'continue') &&
        (isHovered && galleryType !== 'continue') &&
        <div
          className="absolute z-30 top-1/2"
          style={getHoverPosition()}
        >
          <PosterHoverCard movie={movie}  galleryType={ galleryType } onClick={onClick} isInMyListHandler={isInMyListHandler}/>
        </div>
        }
    </div>
  )
}

export default PosterCard