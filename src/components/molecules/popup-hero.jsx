import CoverImage from "../atoms/cover-image";
import PosterTitle from "../atoms/poster-title";
import HeroMuteButton from "../atoms/hero-mute-button";
import HeroStartButton from "../atoms/hero-start-button";
import AddButton from "../atoms/add-button";
import CloseButton from "../atoms/close-button";
import clsx from 'clsx';

const PopupHero = ({ image, title, closeHandler, insetClass='inset-6 sm:inset-10 md:inset-20' }) => {
    const baseStyle = `
      absolute
      flex flex-col gap-4 justify-end
    `
    
    return (
      <div className="relative">
        <CloseButton onClick={ closeHandler }/>
        {/* <div className="relative"> */}
          <CoverImage
            src={ image }
            className="
              w-full object-cover
              h-[225px] sm:h-[300px] md:h-[554px] 
          "/>
          {/* <div className="absolute b-0 border bg-gradient-to-t from-black to-transparent h-32 w-full"></div>
        </div> */}
        <div className={clsx(baseStyle, insetClass)}>  
          <PosterTitle className="text-xl">{title }</PosterTitle>
          <div className="flex gap-4">
            <HeroStartButton />
            <AddButton />
            <HeroMuteButton position='right'/>
          </div>
        </div>
      </div>
    );
}

export default PopupHero;