import icon from '../../assets/images/icons/mini-chevron-down-icon.svg'

function SmoothRectangleButton({ label, positionClass = '', onClick = null, ariaLabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        flex items-center justify-center 
        h-8 sm:h-11 w-8 sm:w-11
        px-1 sm:px-2
        rounded-xs cursor-pointer bg-[#22282A]/20
        transition-all duration-200
        hover:shadow-md focus:outline-none
        ${positionClass}
      `}
    >
      {label}
      <img
        src={ icon }
        loading="lazy"
        className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
      />
    </button>
  );
}

export default SmoothRectangleButton;