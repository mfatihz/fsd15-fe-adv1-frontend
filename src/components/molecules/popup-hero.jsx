import CoverImage from "../atoms/cover-image";
import PosterTitle from "../atoms/poster-title";
import HeroMuteButton from "../atoms/hero-mute-button";
import HeroStartButton from "../atoms/hero-start-button";
import AddButton from "../atoms/add-button";
import CloseButton from "../atoms/close-button";
import clsx from 'clsx';

const PopupHero = ({ image, title, closeHandler, className }) => {
    const baseStyle = `
      absolute
      inset-6 sm:inset-10 md:inset-20
      flex flex-col gap-4 justify-end
    `
    return (
      <div className="relative">
        <CloseButton onClick={ closeHandler }/>
        <CoverImage
          src={ image }
          className="
            w-full object-cover
            h-[225px] sm:h-[300px] md:h-[554px] 
        "/>
        <div className={clsx(baseStyle, className)}>  
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