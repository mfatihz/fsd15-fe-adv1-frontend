import HeroStartButton from '../atoms/hero-start-button'
import HeroNextButton from '../atoms/hero-next-button'
import HeroContentRatingLabel from '../atoms/hero-content-rating-label'
import HeroMuteButton from '../atoms/hero-mute-button'

function HeroActions({ children }) {  
  return (
    <div className='w-full flex flex-wrap gap-3 md:gap-5'>
      <HeroStartButton />
      <HeroNextButton />
      { children && <HeroContentRatingLabel>{ children }</HeroContentRatingLabel> }
      <HeroMuteButton positionClass='ml-auto'/>
    </div>
  )
}

export default HeroActions