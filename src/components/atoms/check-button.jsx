import clsx from 'clsx'
import icon from '../../assets/images/icons/check-icon.svg'

function CheckButton({ isChecked=false, onClick, movieId }) {
  const baseStyle = `flex items-center justify-center 
    h-8 sm:h-11 w-8 sm:w-11
    px-1 sm:px-2
    rounded-full cursor-pointer
    border box-border
    transition-all duration-200
    hover:scale-105 hover:shadow-md
  `
  const checkedClass = isChecked ? 'bg-yellow-500 border-black' : 'border-white/60'
  return (
    <button
      className={ clsx(baseStyle, checkedClass) }
      onClick={ () => onClick(movieId) }
    >
      <img
        src={ icon }
        alt='Mute on'
        loading="lazy"
        className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
        />
    </button>
  );
}

export default CheckButton
