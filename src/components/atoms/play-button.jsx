import icon from '../../assets/images/icons/play-icon.svg'

function PlayButton({onClick}) {
    return (
    <button
      type="button"
      className={`
        flex items-center justify-center 
        size-8 sm:size-11
        px-0.5
        rounded-full cursor-pointer
        box-border
        transition-all duration-200
        hover:scale-105 hover:shadow-md focus:outline-none
      `}
      onClick={ onClick }
      
    >
      <img
            src={ icon }
            alt='Mute on'
            loading="lazy"
            // className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
        />
    </button>
  );
}

export default PlayButton
