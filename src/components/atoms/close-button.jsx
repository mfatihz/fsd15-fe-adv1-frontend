import clsx from 'clsx';
import icon from '../../assets/images/icons/x-icon.svg'

function CloseButton({ className = 'absolute top-4 right-4', onClick = null }) {
  const baseStyle = `
    flex items-center justify-center 
    h-7.5 w-7.5
    px-1 sm:px-2
    rounded-full cursor-pointer bg-black
    border border-white/60 box-border
    transition-all duration-200
    hover:scale-105 hover:shadow-md
  `

  return (
    <button
      onClick={onClick}
      aria-label="Tutup"
      className={clsx(baseStyle, className)}
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

export default CloseButton;