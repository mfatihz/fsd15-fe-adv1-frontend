import icon from '../../assets/images/icons/chevron-down-icon.svg'
import clsx from 'clsx'
import { usePopupDetailStore } from '../../stores/use-popup-detail';

function ChevronDownButton({ className, movieData }) {
  const baseStyle = `
    flex items-center justify-center 
    h-8 sm:h-11 w-8 sm:w-11
    px-1 sm:px-2
    rounded-full cursor-pointer
    border border-white/60 box-border
    transition-all duration-200 focus:outline-none
    hover:bg-blue-300/50
    hover:scale-105 hover:shadow-md
  `

  const { setMovieData, open: openPopup } = usePopupDetailStore();
  
  const handlePopupDetail = () => {
    setMovieData(movieData);
    openPopup();
  }

  return (
    <button
      type="button"
      className={clsx(baseStyle, className)}
      onClick={ handlePopupDetail }
    >
      <img
        src={ icon }
        alt='Chevron icon'
        loading="lazy"
        className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
      />
    </button>
  );
}

export default ChevronDownButton
